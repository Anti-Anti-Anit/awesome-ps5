#!/usr/bin/env node
// 采集 GitHub 上 star > 50 的 PS5 相关项目，自动分类后合并进 data/projects.json。
// 用法：node scripts/collect.mjs [--dry-run]
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dataDir = join(root, 'data');
const catalogPath = join(dataDir, 'projects.json');
const catalog = JSON.parse(readFileSync(catalogPath, 'utf8'));
const dryRun = process.argv.includes('--dry-run');

const MIN_STARS = 50;
const token = process.env.GITHUB_TOKEN || execFileSync('gh', ['auth', 'token'], { encoding: 'utf8' }).trim();
const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'User-Agent': 'awesome-ps5' };

const QUERIES = [
  'ps5 stars:>50',
  '"playstation 5" stars:>50',
  'playstation5 stars:>50',
  'topic:ps5 stars:>50',
  'topic:playstation-5 stars:>50',
  'prospero stars:>50',
  'dualsense stars:>50',
  'ps5 homebrew stars:>50',
  'ps5 pkg stars:>50',
  'remote play stars:>50'
];

// 只在 README 里顺带提到 PS5 的通用工具、导购与 SEO / 恶意软件垃圾仓库
const NOISE = [
  /vpn|proxy|翻墙|fanqiang|socks|shadowsocks/i,
  /shopping|amazon|walmart|best ?buy|ebay|scalping bot/i,
  /crypto|bitcoin|bioinformatics|macroeconomics|homework|course material/i,
  /release date|\bnews\b|\bleaks?\b|statue|wallpaper|early access guide/i,
  /remote desktop|screen ?cast|virtual display|gamepad viewer/i,
  /trainer|mod menu|\besp\b|enhancement suite|cheat database|crack|free download|\bhack\b.*netflix|netflix.*\bhack\b/i,
  /crm|saas|landing page|\bportfolio\b|resume|interview question|awesome list|roadmap/i
];

// 账号名批量注册的特征：长数字串、-alt 后缀；仓库名里的年份是 SEO 垃圾的常见信号
const SPAM_NAME = /\d{5,}|-alt$|-20\d\d|\b20\d\d\b|download|premium|cracked/i;

// 名称与描述必须直接命中 PS5 本体或生态；只提「PlayStation」的多平台项目不算
const PS5 = /\bps ?5\b|playstation ?5|prosper|dualsense|dual-sense|hyperluck|mauveglue|\borbis\b/i;

// 其他主机/平台：名称里没有 PS5、描述里又并列出现两个以上，说明是通用多平台项目
const RIVAL = [/playstation [123]\b|\bps[123]\b/i, /\bps4\b/i, /\bvita\b/i, /nintendo|\bswitch\b|\bwii\b/i, /xbox/i, /steam|gamepass/i, /sega|\bmame\b|arcade|retroarch/i];

// 越具体的规则越靠前，避免「PS5 emulator」被通吃的 linux / store 规则抢先命中
const RULES = [
  ['scalper', /stock|restock|buy bot|purchase bot|scalper/i],
  ['exploit', /exploit|jailbrok|jailbre?ak|\bdjb?\b|bd-?j|webkit|umtx|arb\.? ?r\/w|code exec|\bpoc\b/i],
  ['hen', /payload|kernel patch|\bhen\b|kstuff|elf ?loader|elfldr|\bsdk\b|debugger|\bdaemon\b|\bblob\b/i],
  ['emulator', /\bemulat|translation layer|compatibility layer|port .*ps5|ps5.*\bport\b|\bkyty\b/i],
  ['onconsole', /pcsx2|rpcs3|dolphin|retroarch|xenia|xemu|snes9x|cemu|duckstation|ppsspp|swanstation|recompil|\brecomp\b/i],
  ['dualsense', /dualsense|dual-sense|adaptive trigger|haptic/i],
  ['pkg', /\bpkg\b|fpkg|\bpfs\b|\bpup\b|\bself\b|compress|lz4|ffpfsc|exfat|package builder|\bdump\b/i],
  ['patch', /patch|backport|cheat|60 ?fps|fps unlock|\bdlc\b|save editor|updater/i],
  ['linux', /\blinux\b|bazzite|distro|\bbc-?250\b|vulkan driver|freebsd/i],
  ['streaming', /chiaki|remote ?play|moonlight|\bportal\b|stream|broadcast|sunshine|rtsp/i],
  ['psn', /\bpsn\b|troph|home assistant|\bmqtt\b|homebridge|account/i],
  ['dualsense', /dualshock|controller|gamepad/i],
  ['hardware', /\bnor\b|uart|fan control|camera|devkit|testkit|repair|service tool|esp32|bluetooth bridge|\bdongle\b/i],
  ['store', /store|library|package manager|sender|upload|\bftp\b|file manager|download|vault|catalog|index|installer|manager/i],
  ['apps', /\bapp\b|client|iptv|kodi|vlc|llama|\bllm\b|theme|\bui\b|\bdashboard\b/i]
];

// 仓库名是最强的分类信号，先按名称匹配，再用名称+描述+话题兜底
const classify = (name, hay) => {
  for (const probe of [name, hay]) {
    for (const [cat, re] of RULES) if (re.test(probe)) return cat;
  }
  return null;
};

const known = new Set(catalog.projects.map((p) => p.repo.toLowerCase()));
// 人工判定不收的仓库（含原因）写在这里，脚本永远不会再把它们捡回来
const blockedPath = join(dataDir, 'blocked.json');
const blocked = existsSync(blockedPath) ? JSON.parse(readFileSync(blockedPath, 'utf8')).blocked : [];
for (const b of blocked) known.add(b.repo.toLowerCase());
const added = [];
const skipped = new Set();

for (const q of QUERIES) {
  for (let page = 1; page <= 2; page++) {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&per_page=100&page=${page}&sort=stars&order=desc`;
    const res = await fetch(url, { headers });
    if (!res.ok) {
      console.error(`⚠️  搜索失败：${q} p${page} (${res.status})`);
      break;
    }
    const json = await res.json();
    const items = json.items ?? [];
    for (const item of items) {
      const name = item.full_name;
      if (item.stargazers_count <= MIN_STARS) continue;
      if (known.has(name.toLowerCase()) || skipped.has(name)) continue;
      const title = `${name} ${item.description ?? ''}`;
      const hay = `${title} ${(item.topics ?? []).join(' ')}`;
      const keep = (why) => {
        skipped.add(name);
        if (process.env.COLLECT_DEBUG) console.log(`  – ${name} → ${why}`);
      };
      const rivals = RIVAL.filter((re) => re.test(title)).length;
      if (item.archived || item.fork || /^fork of\b/i.test(item.description ?? '')) keep('归档、fork 或搬运');
      else if (!item.description) keep('无描述');
      else if (SPAM_NAME.test(name)) keep('疑似垃圾仓库');
      else if (NOISE.some((re) => re.test(hay))) keep('噪音黑名单');
      else if (!PS5.test(title)) keep('名称与描述未提及 PS5');
      else if (rivals >= 2 && !PS5.test(name)) keep('并列多平台，PS5 只是其一');
      else {
        const cat = classify(name, hay);
        if (!cat) keep('无法分类');
        else {
          known.add(name.toLowerCase());
          added.push({ repo: name, cat, zh: item.description, en: item.description, auto: true });
        }
      }
    }
    if (items.length < 100) break;
    await new Promise((r) => setTimeout(r, 3000));
  }
}

if (skipped.size) console.log(`跳过 ${skipped.size} 个候选（设 COLLECT_DEBUG=1 查看原因）`);

if (!added.length) {
  console.log('✅ 没有新项目');
  process.exit(0);
}

const byCat = {};
for (const a of added) byCat[a.cat] = (byCat[a.cat] ?? 0) + 1;
console.log(`发现 ${added.length} 个新项目：`);
for (const [cat, n] of Object.entries(byCat)) console.log(`  ${cat}: ${n}`);
for (const a of added) console.log(`  + [${a.cat}] ${a.repo} (${a.zh.slice(0, 60)})`);

if (dryRun) {
  console.log('（dry-run，未写入 data/projects.json）');
  process.exit(0);
}

catalog.projects.push(...added);
const dump = (obj) =>
  `{\n "categories": [\n${obj.categories.map((c) => '  ' + JSON.stringify(c)).join(',\n')}\n ],\n "projects": [\n${obj.projects
    .map((p) => '  ' + JSON.stringify(p))
    .join(',\n')}\n ]\n}\n`;
writeFileSync(catalogPath, dump(catalog));
console.log(`✅ 已写入 data/projects.json（共 ${catalog.projects.length} 个项目），记得运行 node scripts/update.mjs`);
