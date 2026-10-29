#!/usr/bin/env node
// 拉取 GitHub 元数据并重新生成 README。用法：node scripts/update.mjs [--discover]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = join(root, 'data');
const catalog = JSON.parse(readFileSync(join(dataDir, 'projects.json'), 'utf8'));
const cachePath = join(dataDir, 'stars.json');
const cache = existsSync(cachePath) ? JSON.parse(readFileSync(cachePath, 'utf8')) : {};

const token = process.env.GITHUB_TOKEN || execFileSync('gh', ['auth', 'token'], { encoding: 'utf8' }).trim();
const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'User-Agent': 'awesome-ps5' };

const MIN_STARS = 50;

async function getRepo(fullName) {
  const res = await fetch(`https://api.github.com/repos/${fullName}`, { headers });
  if (!res.ok) return null;
  return res.json();
}

async function mapLimit(items, limit, fn) {
  const out = [];
  let i = 0;
  const workers = Array.from({ length: limit }, async () => {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx]);
    }
  });
  await Promise.all(workers);
  return out;
}

const missing = [];
const fetched = await mapLimit(catalog.projects, 6, async (p) => {
  const repo = await getRepo(p.repo);
  if (!repo) {
    missing.push(p.repo);
    return { ...p, stars: 0, archived: false, pushed: null, desc: '' };
  }
  return {
    ...p,
    stars: repo.stargazers_count,
    archived: repo.archived,
    pushed: repo.pushed_at?.slice(0, 10) ?? null,
    desc: repo.description ?? ''
  };
});

if (missing.length) {
  console.error(`⚠️  找不到以下仓库（检查 owner/repo 拼写或是否已删除）：\n  ${missing.join('\n  ')}`);
}

const enText = JSON.parse(readFileSync(join(dataDir, 'en.json'), 'utf8'));
for (const p of fetched) p.en = enText[p.repo] ?? p.desc ?? '';
const noEn = fetched.filter((p) => !enText[p.repo]).map((p) => p.repo);
if (noEn.length) {
  console.error(`⚠️  缺少英文简介（已回退为仓库描述）：\n  ${noEn.join('\n  ')}`);
}

const lowStars = fetched.filter((p) => p.stars <= MIN_STARS).sort((a, b) => a.stars - b.stars);
if (lowStars.length) {
  console.error(`⚠️  低于 ${MIN_STARS} star 的项目：\n${lowStars.map((p) => `  ${p.repo} (${p.stars})`).join('\n')}`);
}

const now = new Date();
const stars = Object.fromEntries(fetched.map((p) => [p.repo, { stars: p.stars, archived: p.archived, pushed: p.pushed, desc: p.desc, synced: now.toISOString().slice(0, 10) }]));
writeFileSync(cachePath, JSON.stringify(stars, null, 2) + '\n');

if (process.argv.includes('--discover')) {
  const queries = ['ps5 stars:>50', 'topic:ps5 stars:>50', 'playstation5 stars:>50', 'topic:playstation-5 stars:>50'];
  const known = new Set(catalog.projects.map((p) => p.repo.toLowerCase()));
  const found = new Map();
  for (const q of queries) {
    for (let page = 1; page <= 2; page++) {
      const res = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&per_page=100&page=${page}`, { headers });
      if (!res.ok) { console.error(`搜索失败：${q} (${res.status})`); break; }
      const json = await res.json();
      for (const item of json.items ?? []) {
        if (item.stargazers_count > MIN_STARS && !known.has(item.full_name.toLowerCase())) found.set(item.full_name, item);
      }
      if ((json.items?.length ?? 0) < 100) break;
      await new Promise((r) => setTimeout(r, 2000));
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
  const candidates = [...found.values()].sort((a, b) => b.stargazers_count - a.stargazers_count);
  console.log(`\n未被收录的候选仓库（${candidates.length}）：`);
  for (const c of candidates) console.log(`${String(c.stargazers_count).padStart(6)}  ${c.full_name}  ${(c.description ?? '').slice(0, 80)}`);
}

const fmt = (n) => n.toLocaleString('en-US');
const totalStars = fetched.reduce((s, p) => s + p.stars, 0);
const sorted = [...fetched].sort((a, b) => b.stars - a.stars);

// 与 GitHub 的 github-slugger 保持一致：去掉符号与标点，空格转连字符
const slug = (text) =>
  text
    .replace(/[\uFE0E\uFE0F\u200D]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{M}\s_-]/gu, '')
    .replace(/\s/g, '-');

const toc = (lang) =>
  catalog.categories
    .filter((c) => sorted.some((p) => p.cat === c.key))
    .map((c) => {
      const title = lang === 'zh' ? c.title : c.titleEn;
      return `- [${c.icon} ${title}](#${slug(`${c.icon} ${title}`)})`;
    })
    .join('\n');

const sections = (lang) =>
  catalog.categories
    .filter((c) => sorted.some((p) => p.cat === c.key))
    .map((c) => {
      const title = lang === 'zh' ? c.title : c.titleEn;
      const desc = lang === 'zh' ? c.desc : c.descEn;
      const head = lang === 'zh' ? '| 项目 | Star | 说明 |' : '| Project | Star | Description |';
      const rows = sorted
        .filter((p) => p.cat === c.key)
        .map((p) => {
          const name = `[${p.repo}](https://github.com/${p.repo})${p.archived ? ' 🪦' : ''}`;
          return `| ${name} | ${fmt(p.stars)} | ${lang === 'zh' ? p.zh : p.en} |`;
        })
        .join('\n');
      return `### ${c.icon} ${title}\n\n${desc}\n\n${head}\n| :--- | ---: | :--- |\n${rows}`;
    })
    .join('\n\n');

const archivedCount = fetched.filter((p) => p.archived).length;
const date = now.toISOString().slice(0, 10);
const LANG_LINE = {
  en: '**English** · [简体中文](README.zh-CN.md)',
  zh: '[English](README.md) · **简体中文**'
};

const text = {
  en: {
    lang: LANG_LINE.en,
    intro: `> Every GitHub project related to the PlayStation 5 with **more than ${MIN_STARS} stars** — jailbreak, homebrew, emulators, packaging tools, Linux, streaming and controller ecosystem.`,
    stats: [
      `**${fetched.length}** projects · **${fmt(totalStars)}** stars in total`,
      `Data synced on ${date}${archivedCount ? ` · ${archivedCount} archived repositories (🪦)` : ''}`,
      `Sorted by stars, refreshed weekly via the [GitHub API](https://docs.github.com/rest)`
    ],
    tocTitle: 'Contents',
    criteriaTitle: 'Inclusion criteria',
    criteria: [
      'The project must be directly about PS5: the console itself (firmware, jailbreak, homebrew, hardware), the PS5 ecosystem (DualSense, Remote Play, PSN), or PS5 game content and patches.',
      `More than ${MIN_STARS} stars and publicly accessible.`,
      'Projects that merely mention PS5 in their README (generic proxies, generic emulators, generic shopping bots) are excluded.',
      'Plain forks and rebrands of an already listed project are excluded unless they are clearly better maintained.',
      'Launch-era stock bots are kept in a separate section for historical reference.'
    ],
    disclaimerTitle: 'Disclaimer',
    disclaimer:
      'This list is an index only and hosts no game content. Jailbreaking or installing unofficial software may violate Sony\'s terms of service and void your warranty or get your console banned. Proceed at your own risk, only on hardware you own, and follow local law.',
    contributeTitle: 'Contributing',
    contributeIntro: 'Missing a project, or one has dropped below the star threshold? Open an issue or PR:',
    contributeSteps: [
      'Add an entry to [data/projects.json](data/projects.json) with its category and a one-line description (`zh` + `en`).',
      'Run `node scripts/update.mjs` to regenerate both READMEs.',
      'Open the PR.'
    ],
    updateTitle: 'Updating',
    updateComments: ['# refresh stars and both READMEs', '# also list candidates that are not listed yet'],
    licenseTitle: 'License'
  },
  zh: {
    lang: LANG_LINE.zh,
    intro: `> 收录 GitHub 上所有 **star 数 > ${MIN_STARS}** 的 PlayStation 5 相关项目，覆盖越狱、homebrew、模拟器、游戏包工具、Linux、串流与手柄生态。`,
    stats: [
      `共 **${fetched.length}** 个项目，合计 **${fmt(totalStars)}** star`,
      `数据同步于 ${date}${archivedCount ? `，其中 ${archivedCount} 个仓库已归档（🪦）` : ''}`,
      `表格按 star 数排序，star 数由 [GitHub API](https://docs.github.com/rest) 每周自动更新`
    ],
    tocTitle: '目录',
    criteriaTitle: '收录标准',
    criteria: [
      '项目主题必须与 PS5 直接相关：主机本体（固件、越狱、homebrew、硬件）、PS5 生态（DualSense、Remote Play、PSN）或 PS5 游戏资源与补丁。',
      `star 数 > ${MIN_STARS}，仓库公开可访问。`,
      '仅在 README 中顺带提到 PS5 的项目（通用代理工具、通用模拟器、通用购物机器人等）不收。',
      '同一项目的普通 fork 与换皮版不收，除非维护状况明显更好。',
      '抢购脚本保留在独立分区，仅作历史记录。'
    ],
    disclaimerTitle: '免责声明',
    disclaimer:
      '本项目仅做索引，不托管任何游戏内容。越狱、安装非官方软件可能违反 Sony 的服务条款、导致主机封禁或保修失效，风险自负。请仅在你自己拥有的设备上操作，并遵守当地法律。',
    contributeTitle: '贡献',
    contributeIntro: '发现遗漏或 star 数已跌破门槛的项目，欢迎提 Issue / PR：',
    contributeSteps: [
      '在 [data/projects.json](data/projects.json) 中按分类追加条目（仓库名 + 一句话中英说明）。',
      '运行 `node scripts/update.mjs` 重新生成两个 README。',
      '提交 PR。'
    ],
    updateTitle: '更新',
    updateComments: ['# 刷新 star 数与两个 README', '# 额外列出尚未收录的候选仓库'],
    licenseTitle: '许可证'
  }
};

const render = (lang) => {
  const t = text[lang];
  return `# Awesome PS5 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

${t.lang}

![Projects](https://img.shields.io/badge/projects-${fetched.length}-brightgreen)
![Stars](https://img.shields.io/badge/stars-${totalStars}-yellow)
![Updated](https://img.shields.io/badge/updated-${date}-blue)

${t.intro}

${t.stats.map((s) => `- ${s}`).join('\n')}

## ${t.tocTitle}

${toc(lang)}

${sections(lang)}

## ${t.criteriaTitle}

${t.criteria.map((s) => `- ${s}`).join('\n')}

## ${t.disclaimerTitle}

${t.disclaimer}

## ${t.contributeTitle}

${t.contributeIntro}

${t.contributeSteps.map((s, i) => `${i + 1}. ${s}`).join('\n')}

## ${t.updateTitle}

\`\`\`bash
node scripts/update.mjs            ${t.updateComments[0]}
node scripts/update.mjs --discover ${t.updateComments[1]}
\`\`\`

## ${t.licenseTitle}

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
`;
};

writeFileSync(join(root, 'README.md'), render('en'));
writeFileSync(join(root, 'README.zh-CN.md'), render('zh'));
console.log(`✅ README 已更新：${fetched.length} 个项目，${fmt(totalStars)} star（README.md / README.zh-CN.md）`);
