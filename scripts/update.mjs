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

const toc = catalog.categories
  .filter((c) => sorted.some((p) => p.cat === c.key))
  .map((c) => `- [${c.icon} ${c.title}](#${slug(`${c.icon} ${c.title}`)})`)
  .join('\n');

const sections = catalog.categories
  .filter((c) => sorted.some((p) => p.cat === c.key))
  .map((c) => {
    const rows = sorted
      .filter((p) => p.cat === c.key)
      .map((p) => {
        const name = `[${p.repo}](https://github.com/${p.repo})${p.archived ? ' 🪦' : ''}`;
        return `| ${name} | ${fmt(p.stars)} | ${p.zh} |`;
      })
      .join('\n');
    return `### ${c.icon} ${c.title}\n\n${c.desc}\n\n| 项目 | Star | 说明 |\n| :--- | ---: | :--- |\n${rows}`;
  })
  .join('\n\n');

const archivedCount = fetched.filter((p) => p.archived).length;

const readme = `# Awesome PS5 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![Projects](https://img.shields.io/badge/projects-${fetched.length}-brightgreen)
![Stars](https://img.shields.io/badge/stars-${totalStars}-yellow)
![Updated](https://img.shields.io/badge/updated-${now.toISOString().slice(0, 10)}-blue)

> 收录 GitHub 上所有 **star 数 > ${MIN_STARS}** 的 PlayStation 5 相关项目，覆盖越狱、homebrew、模拟器、游戏包工具、Linux、串流与手柄生态。

- 共 **${fetched.length}** 个项目，合计 **${fmt(totalStars)}** star
- 数据同步于 ${now.toISOString().slice(0, 10)}${archivedCount ? `，其中 ${archivedCount} 个仓库已归档（🪦）` : ''}
- 表格按 star 数排序，star 数由 [GitHub API](https://docs.github.com/rest) 自动更新

## 目录

${toc}

${sections}

## 收录标准

- 项目主题必须与 PS5 直接相关：主机本体（固件、越狱、homebrew、硬件）、PS5 生态（DualSense、Remote Play、PSN）或 PS5 游戏资源与补丁。
- star 数 > ${MIN_STARS}，仓库公开可访问。
- 仅在 README 中顺带提到 PS5 的项目（通用代理工具、通用模拟器、通用购物机器人等）不收。
- 同一项目的普通 fork 与换皮版不收，除非维护状况明显更好。
- 抢购脚本保留在独立分区，仅作历史记录。

## 免责声明

本项目仅做索引，不托管任何游戏内容。越狱、安装非官方软件可能违反 Sony 的服务条款、导致主机封禁或保修失效，风险自负。请仅在你自己拥有的设备上操作，并遵守当地法律。

## 贡献

发现遗漏或 star 数已跌破门槛的项目，欢迎提 Issue / PR：

1. 在 [data/projects.json](data/projects.json) 中按分类追加条目（仓库名 + 一句话中文说明）。
2. 运行 \`node scripts/update.mjs\` 重新生成 README。
3. 提交 PR。

## 更新

\`\`\`bash
node scripts/update.mjs            # 刷新 star 数与 README
node scripts/update.mjs --discover # 额外列出尚未收录的候选仓库
\`\`\`

## 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
`;

writeFileSync(join(root, 'README.md'), readme);
console.log(`✅ README 已更新：${fetched.length} 个项目，${fmt(totalStars)} star`);
