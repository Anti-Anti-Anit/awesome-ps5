# Awesome PS5 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[English](README.md) · **简体中文**

![Projects](https://img.shields.io/badge/projects-259-brightgreen)
![Stars](https://img.shields.io/badge/stars-137998-yellow)
![Updated](https://img.shields.io/badge/updated-2026-10-29-blue)

> 收录 GitHub 上所有 **star 数 > 50** 的 PlayStation 5 相关项目，覆盖越狱、homebrew、模拟器、游戏包工具、Linux、串流与手柄生态。

- 共 **259** 个项目，合计 **137,998** star
- 数据同步于 2026-10-29，其中 13 个仓库已归档（🪦），14 条由脚本自动收录（🆕）
- 表格按 star 数排序；GitHub Actions 每 24 小时自动采集新仓库、分类并刷新 star 数

## 目录

- [🎮 PS5 模拟器与转译层](#-ps5-模拟器与转译层)
- [🕹️ PS5 上的模拟器与移植游戏](#-ps5-上的模拟器与移植游戏)
- [🔓 越狱与漏洞利用](#-越狱与漏洞利用)
- [🧩 HEN、载荷与运行时](#-hen载荷与运行时)
- [📦 游戏包 / fPKG / 压缩](#-游戏包--fpkg--压缩)
- [🗂️ 应用商店、包管理与文件传输](#-应用商店包管理与文件传输)
- [🧪 游戏补丁、60FPS 与金手指](#-游戏补丁60fps-与金手指)
- [🐧 Linux 与系统](#-linux-与系统)
- [📡 串流与 Remote Play](#-串流与-remote-play)
- [🏆 PSN、账号与智能家居](#-psn账号与智能家居)
- [🔧 硬件、维修与外设](#-硬件维修与外设)
- [🎛️ DualSense 手柄](#-dualsense-手柄)
- [📺 PS5 原生应用与界面](#-ps5-原生应用与界面)
- [🛒 抢购与库存告警（历史）](#-抢购与库存告警历史)

### 🎮 PS5 模拟器与转译层

在 PC 上运行 PS5 游戏，或把 PS5 可执行文件移植到其他平台。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | 49,427 | 自动把 PS5 可执行文件移植到 Linux / Windows |
| [KytyPS5/KytyPS5](https://github.com/KytyPS5/KytyPS5) | 10,098 | PS5 转译层，支持 Windows / Linux / macOS |
| [sharpemu/sharpemu](https://github.com/sharpemu/sharpemu) | 6,485 | 实验性 PS5 模拟器 |
| [InoriRus/Kyty](https://github.com/InoriRus/Kyty) | 3,237 | PS4 / PS5 模拟器原版项目 |
| [Jetsku/KytyPS5](https://github.com/Jetsku/KytyPS5) | 506 | KytyPS5 分支，合并着色器与渲染修复 |
| [ymatrix1/PortPS5](https://github.com/ymatrix1/PortPS5) | 422 | 把解密后的 PS5 游戏重链接为 Windows 原生程序 |
| [Force67/prosperity](https://github.com/Force67/prosperity) | 409 | PS4 / PS5 低层模拟（LLE）研究 |
| [mpereiraesaa/prospero-win](https://github.com/mpereiraesaa/prospero-win) | 236 | PS5 homebrew 的 Windows 兼容运行时 |
| [mattias800/prosper](https://github.com/mattias800/prosper) | 214 | 用户态 PS5 → PC 兼容层 |
| [aarvsn/Ryty](https://github.com/aarvsn/Ryty) | 124 | PS4 / PS5 可执行文件移植工具（ELF / SPIR-V） |
| [iStark/PS5PCEM](https://github.com/iStark/PS5PCEM) | 81 | PS5 PC 模拟器（实验） |
| [mircowuffwuff/sharpdroid](https://github.com/mircowuffwuff/sharpdroid) | 60 | 在 Android 上运行 SharpEmu 的壳应用 |

### 🕹️ PS5 上的模拟器与移植游戏

以 homebrew 形式在越狱 PS5 上运行其他主机的游戏。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [Swordpdf/PS5SX2](https://github.com/Swordpdf/PS5SX2) | 1,583 | PCSX2 的 PS5 移植，原生运行 PS2 游戏 |
| [premohq/PS5-ECAM](https://github.com/premohq/PS5-ECAM) | 422 | 在 PS5 上跑 Wii U / 3DS / DS / Switch 游戏 |
| [mihawk-99/PS5_RetroArch](https://github.com/mihawk-99/PS5_RetroArch) | 411 | PS5 版 RetroArch，35 个核心 / 44 个平台 |
| [BrinooTk/PS5X360](https://github.com/BrinooTk/PS5X360) | 390 | 基于 Xenia Canary 的 Xbox 360 模拟器 |
| [elripalda/Porpoise-Dolphin-Emulator-for-PS5](https://github.com/elripalda/Porpoise-Dolphin-Emulator-for-PS5) | 217 | Dolphin 移植，在 PS5 上玩 GameCube / Wii |
| [holdmysocks/mcla-recomp](https://github.com/holdmysocks/mcla-recomp) | 209 | 《湾岸午夜俱乐部：洛杉矶》静态重编译，PC + PS5 |
| [ZiZc3/XPSemu](https://github.com/ZiZc3/XPSemu) | 203 | Xemu 移植，初代 Xbox 模拟器 |
| [kamb205/KB-RPCS3](https://github.com/kamb205/KB-RPCS3) | 99 | RPCS3 的非官方 PS5 移植 |
| [SynoPiia/PSXS5](https://github.com/SynoPiia/PSXS5) | 95 | PS1 模拟器，基于 PCSX-ReARMed |
| [darkxex/SwanStationPS5](https://github.com/darkxex/SwanStationPS5) | 91 | PS1 模拟器，基于 SwanStation |
| [lavavex/rpcs3-PS5](https://github.com/lavavex/rpcs3-PS5) | 85 | 把 RPCS3 编译成 PS5 原生应用（实验） |
| [felipeAguiarCode/PS5EmuShell](https://github.com/felipeAguiarCode/PS5EmuShell) | 73 | PS5 上的模拟器 / 重编译游戏启动器 |
| [aarvsn/PS5Droid](https://github.com/aarvsn/PS5Droid) | 71 | 在 PS5 上运行 Android 游戏 |
| [elripalda/gta4-ps5](https://github.com/elripalda/gta4-ps5) | 69 | GTA IV 三部曲在越狱 PS5 上原生运行 |
| [MisterTemaki/snes9xPS5](https://github.com/MisterTemaki/snes9xPS5) | 62 | Snes9x 的 PS5 移植 |
| [Phi1ow/mkwii-ps5](https://github.com/Phi1ow/mkwii-ps5) | 60 | 《马里奥赛车 Wii》静态重编译 |
| [egycnq/EmuC0re](https://github.com/egycnq/EmuC0re) | 53 | 借助 LuaC0re JIT 在 PS5 上跑 x86_64 模拟器 |

### 🔓 越狱与漏洞利用

WebKit / 内核 / 虚拟机管理程序漏洞，以及漏洞托管服务。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [ntfargo/Relapse-Exploit](https://github.com/ntfargo/Relapse-Exploit) | 2,601 | PS5 7.00 – 13.60 的完整漏洞利用链 |
| [Gezine/Y2JB](https://github.com/Gezine/Y2JB) | 1,613 | 利用 PS5 YouTube 应用实现用户态代码执行 |
| [Al-Azif/ps4-exploit-host](https://github.com/Al-Azif/ps4-exploit-host) | 1,217 | 一键漏洞托管服务（PS4 / PS5） |
| [Cryptogenic/PS5-IPV6-Kernel-Exploit](https://github.com/Cryptogenic/PS5-IPV6-Kernel-Exploit) | 930 | WebKit 内核漏洞，可任意读写 |
| [PS5Dev/Byepervisor-Reborn](https://github.com/PS5Dev/Byepervisor-Reborn) | 520 | PS5 虚拟机管理程序漏洞利用（复活版） |
| [drakmor/nanoDNS](https://github.com/drakmor/nanoDNS) | 496 | PS4 / PS5 的 DNS 代理服务器 |
| [n0llptr/remote_lua_loader](https://github.com/n0llptr/remote_lua_loader) | 453 | 远程 Lua 载荷加载器 |
| [Gezine/BD-JB5](https://github.com/Gezine/BD-JB5) | 426 | PS5 蓝光 BD-JB 漏洞 |
| [ZigZagBoi1/PS5-14.10-Research](https://github.com/ZigZagBoi1/PS5-14.10-Research) | 393 | 14.10 固件的开放研究：Lua 用户态实验 |
| [PS5Dev/Byepervisor](https://github.com/PS5Dev/Byepervisor) | 391 | 1.xx – 2.xx 固件的 HV 漏洞 |
| [pastawithpesto/PS5-14.10-Jailbreak-Research](https://github.com/pastawithpesto/PS5-14.10-Jailbreak-Research) | 343 | 14.10 固件 WebKit 越狱研究 |
| [Gezine/Luac0re](https://github.com/Gezine/Luac0re) | 332 | mast1c0re 变体，用 Lua 简化漏洞开发 |
| [ntfargo/CSSFontFace-Exploit](https://github.com/ntfargo/CSSFontFace-Exploit) | 325 | WebKit CSSFontFace UAF（PS4 / PS5） |
| [Viktorious-x/ps5-bdjb-modified-ISOs](https://github.com/Viktorious-x/ps5-bdjb-modified-ISOs) | 293 | 用于 BD-JB 漏洞的修改版 ISO |
| [PS5Dev/PS5-UMTX-Jailbreak](https://github.com/PS5Dev/PS5-UMTX-Jailbreak) | 279 | 基于 WebKit 的内核漏洞与越狱 |
| [matem6/P2JB-Y2JB-Porting](https://github.com/matem6/P2JB-Y2JB-Porting) | 272 | Y2JB 越狱移植（kqueueex cr_ref 溢出） |
| [McCaulay/mast1c0re](https://github.com/McCaulay/mast1c0re) | 260 | 通过游戏存档在 PS4 / PS5 上执行载荷 |
| [ChendoChap/PS5-Webkit-Execution](https://github.com/ChendoChap/PS5-Webkit-Execution) | 245 | PS5 4.03 的 ROP 用户态执行 |
| [TheWizWikii/TheWizWikii.github.io](https://github.com/TheWizWikii/TheWizWikii.github.io) | 167 | PS3 / PS4 / PS5 浏览器漏洞托管站 |
| [idlesauce/umtx2](https://github.com/idlesauce/umtx2) | 162 | 基于 WebKit 的内核漏洞与越狱 |
| [hammer-83/ps5-jar-loader](https://github.com/hammer-83/ps5-jar-loader) | 159 | 通过 BD-J 漏洞远程加载 JAR |
| [jordyidk/slopkit](https://github.com/jordyidk/slopkit) | 143 | 9.00 – 12.00 的一键网页越狱 |
| [zecoxao/zecoxao.github.io](https://github.com/zecoxao/zecoxao.github.io) | 117 | PS 场景网站托管 |
| [Helloyunho/yarpe](https://github.com/Helloyunho/yarpe) 🪦 | 116 | Ren'Py 游戏存档漏洞利用 |
| [soniciso1/relapse](https://github.com/soniciso1/relapse) | 107 | Relapse 漏洞利用的相关工具 |
| [Gezine/ArtemisLuaLoader](https://github.com/Gezine/ArtemisLuaLoader) 🪦 | 99 | 从存档运行任意 Lua 脚本 |
| [fail0verflow/prosperous](https://github.com/fail0verflow/prosperous) | 98 | PS5 漏洞研究工具 |
| [frwololo/PS4_PS5-ESP8266-Server](https://github.com/frwololo/PS4_PS5-ESP8266-Server) | 94 | ESP8266 / ESP32 漏洞托管 + DNS 劫持 |
| [fail0verflow/ps5-umtxdbg](https://github.com/fail0verflow/ps5-umtxdbg) | 84 | UMTX 漏洞调试器 |
| [soniciso1/ps5-hv-writeups](https://github.com/soniciso1/ps5-hv-writeups) | 81 | PS5 hypervisor 研究笔记 |
| [cragson/a53-code-exec](https://github.com/cragson/a53-code-exec) | 73 | ≤ 11.60 固件在 a53 上的代码执行 PoC |
| [jaigaresc/Poops-PS5-Java](https://github.com/jaigaresc/Poops-PS5-Java) | 71 | poops_ps5 UAF 漏洞的 Java / BD-J 实现 |
| [edisnord/relapse-y2jb](https://github.com/edisnord/relapse-y2jb) | 61 | Relapse 移植到 Y2JB |

### 🧩 HEN、载荷与运行时

载荷加载器、内核补丁、SDK 与调试器。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [itsPLK/ps5-webkit-autoloader](https://github.com/itsPLK/ps5-webkit-autoloader) | 1,288 | 越狱后自动注入载荷的加载器 |
| [EchoStretch/kstuff-lite](https://github.com/EchoStretch/kstuff-lite) | 843 | kstuff 内核补丁轻量版 |
| [etaHEN/etaHEN](https://github.com/etaHEN/etaHEN) | 827 | 一体化 HEN 载荷 |
| [itsPLK/ps5-payload-manager](https://github.com/itsPLK/ps5-payload-manager) | 681 | Web 面板管理、导入与自动更新载荷 |
| [aydencharles/onionHEN](https://github.com/aydencharles/onionHEN) | 479 | HEN 激活器 |
| [ps5-payload-dev/sdk](https://github.com/ps5-payload-dev/sdk) | 267 | 基于动态链接的 PS5 载荷 SDK |
| [Michele-M-Media/HYPERHEN](https://github.com/Michele-M-Media/HYPERHEN) | 242 | HEN 实现 |
| [ps5-payload-dev/websrv](https://github.com/ps5-payload-dev/websrv) | 220 | 8080 端口的 Web 服务器载荷 |
| [PS5Dev/PS5SDK](https://github.com/PS5Dev/PS5SDK) | 218 | 构建与越狱加载器兼容的载荷 SDK |
| [ps5-payload-dev/ftpsrv](https://github.com/ps5-payload-dev/ftpsrv) | 197 | FTP 服务器载荷（PS4 / PS5） |
| [itsPLK/ps5-payloads-mirror](https://github.com/itsPLK/ps5-payloads-mirror) | 185 | 常用载荷镜像 |
| [flatz/ida_ps5_elf_plugin](https://github.com/flatz/ida_ps5_elf_plugin) | 154 | IDA 的 PS5 ELF 加载插件 |
| [ps5-payload-dev/elfldr](https://github.com/ps5-payload-dev/elfldr) | 148 | 9021 端口接收 ELF 载荷 |
| [Pharaoh2k/ps5debug-NG](https://github.com/Pharaoh2k/ps5debug-NG) | 121 | ps5debug 调试器载荷（TCP 协议） |
| [cragson/ps5-hen](https://github.com/cragson/ps5-hen) | 104 | 支持 1.00 – 4.51 的 HEN |
| [xvvulcanvx/PS5-TabShifter](https://github.com/xvvulcanvx/PS5-TabShifter) 🆕 | 102 | 主机端载荷：在“游戏 / 媒体”标签间移动应用，隐藏离线 PSN 冗余（5.00 – 13.60） |
| [ArkSama/PS5-Lapy-JB-Daemon](https://github.com/ArkSama/PS5-Lapy-JB-Daemon) | 91 | 独立越狱守护进程，兼容 etaHEN API |
| [aydencharles/kylin-core-release](https://github.com/aydencharles/kylin-core-release) | 90 | kylin 内核补丁发行版 |
| [GronedWaffel/etahen-11.00-13.60](https://github.com/GronedWaffel/etahen-11.00-13.60) | 87 | etaHEN 2.5B 的统一移植（11.00 – 13.60） |
| [ps5-payload-dev/offact](https://github.com/ps5-payload-dev/offact) | 85 | 离线账号激活 |
| [lvndry/ps5-firmware-pin](https://github.com/lvndry/ps5-firmware-pin) | 74 | 锁定固件版本，阻止强制升级 |
| [buzzer-re/PS5_kldload](https://github.com/buzzer-re/PS5_kldload) | 73 | 仿 FreeBSD kldload 的内核模块加载器 |
| [ps5-payload-dev/fetchpkg](https://github.com/ps5-payload-dev/fetchpkg) | 68 | 按 manifest 抓取游戏更新包 |
| [drakmor/pgo_stub](https://github.com/drakmor/pgo_stub) 🆕 | 59 | 替换 PS5 PlayGo 运行时库的轻量模块 |
| [EchoStretch/kstuff-toggle](https://github.com/EchoStretch/kstuff-toggle) | 52 | kstuff 内核补丁开关 |
| [cryonumb/elfloader](https://github.com/cryonumb/elfloader) | 51 | 配合 ps5-jar-loader 的 ELF 加载器 |

### 📦 游戏包 / fPKG / 压缩

PKG、PFS、PUP、SELF 的解析、打包与压缩工具。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [seregonwar/PkgToolBox](https://github.com/seregonwar/PkgToolBox) | 655 | PSP / PS3 / PS4 / PS5 PKG 分析与编辑 |
| [SvenGDK/PS-Multi-Tools](https://github.com/SvenGDK/PS-Multi-Tools) | 413 | PS1 – PS5 备份管理与固件工具 |
| [ItsJokerZz/FPKGi](https://github.com/ItsJokerZz/FPKGi) 🪦 | 337 | 开源 PKGi 克隆，覆盖 PSP / Vita / PS3 / PS4 / PS5 |
| [juma-sayeh/PS5-Game-Compressor](https://github.com/juma-sayeh/PS5-Game-Compressor) | 289 | 游戏压缩、解包、校验与修复载荷 |
| [kerrdec97/ps5-exfat-builder](https://github.com/kerrdec97/ps5-exfat-builder) | 266 | exFAT 游戏包构建工具 |
| [pearlxcore/PS5PKGTool](https://github.com/pearlxcore/PS5PKGTool) | 213 | Windows 端 PS5 dump 与镜像管理 |
| [PSBrew/MkPFS](https://github.com/PSBrew/MkPFS) | 191 | 创建与管理未签名 PFS 镜像 |
| [KINGDKAK/PS5-FFPFSC-PRO](https://github.com/KINGDKAK/PS5-FFPFSC-PRO) | 161 | PS5 游戏压缩工具 |
| [thanhsondev/PSVIETHOA-FPKG-Builder](https://github.com/thanhsondev/PSVIETHOA-FPKG-Builder) | 138 | FPKG 构建工具 |
| [AphelionWasTaken/PySN](https://github.com/AphelionWasTaken/PySN) | 137 | PS3 / PS4 / PS5 更新包下载器 |
| [Nazky/Lazy_AMPR](https://github.com/Nazky/Lazy_AMPR) | 136 | 把 ampr 游戏重新压缩为 LZ4 |
| [zerodaysofficial/ps5-exfat-pkg-builder-v1](https://github.com/zerodaysofficial/ps5-exfat-pkg-builder-v1) | 124 | exFAT → PKG 构建工具 |
| [kerrdec97/PS5-Backport-GUI](https://github.com/kerrdec97/PS5-Backport-GUI) | 118 | PS5 降级移植图形界面 |
| [gameboy829/PS5-LZ4-Game-Compressor](https://github.com/gameboy829/PS5-LZ4-Game-Compressor) | 107 | LZ4 游戏压缩（测试版） |
| [SvenGDK/LibProsperoPKG](https://github.com/SvenGDK/LibProsperoPKG) 🪦 | 97 | 创建与修改 PS5 PKG / GP5 / PFS 的库 |
| [kerrdec97/exFAT-Ripper](https://github.com/kerrdec97/exFAT-Ripper) | 80 | exFAT 游戏库抓取工具 |
| [zecoxao/ps5-pup-decrypt](https://github.com/zecoxao/ps5-pup-decrypt) | 71 | 通过主机解密的 PUP 工具 |
| [Cryptogenic/PS5-SELF-Decrypter](https://github.com/Cryptogenic/PS5-SELF-Decrypter) | 71 | 便携载荷，解密 PS5 SELF 文件 |
| [knutwurst/ps5-ultrapack](https://github.com/knutwurst/ps5-ultrapack) | 59 | 构建 fPKG / .ffpfsc 容器 |
| [DNNDHH/PS5-PKGs](https://github.com/DNNDHH/PS5-PKGs) | 55 | 官方 PKG 构建工具集 |
| [zecoxao/ps5-pup-unpacker](https://github.com/zecoxao/ps5-pup-unpacker) | 54 | PUP 解包工具 |
| [SvenGDK/PS-Classics-fPKG-Builder](https://github.com/SvenGDK/PS-Classics-fPKG-Builder) 🪦 | 51 | 把 PS1 / PS2 / PSP 游戏打包成 fPKG |

### 🗂️ 应用商店、包管理与文件传输

向主机安装游戏、管理文件、下载与备份。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [saawant12/orbit-store-ps5](https://github.com/saawant12/orbit-store-ps5) | 1,235 | PS5 下载管理器，带电视端应用与手机遥控 |
| [phantomptr/ps5upload](https://github.com/phantomptr/ps5upload) | 933 | 向越狱 PS5 推送游戏、应用与 homebrew |
| [overdriveps5/overdrive-releases](https://github.com/overdriveps5/overdrive-releases) | 712 | Overdrive 发行版 |
| [D3ATHLY/blackbox](https://github.com/D3ATHLY/blackbox) | 678 | PS5 包安装器 |
| [darkxex/ProsperoStore](https://github.com/darkxex/ProsperoStore) | 450 | PS5 原生应用商店 |
| [pegasus-ps5/pegasus-dl](https://github.com/pegasus-ps5/pegasus-dl) | 445 | 在 PS5 上直连下载游戏包 |
| [deox1111/ps5-library](https://github.com/deox1111/ps5-library) | 289 | 越狱 PS5 游戏库：选游戏即下载安装 |
| [notmaj0r/ProsperoMgr](https://github.com/notmaj0r/ProsperoMgr) | 273 | PS5 全能管理器 |
| [elripalda/RecompStore](https://github.com/elripalda/RecompStore) | 272 | 重编译 homebrew 应用商店 |
| [owendswang/ps5-web-file-manager](https://github.com/owendswang/ps5-web-file-manager) | 263 | 带 Web UI 的文件管理器 |
| [itsPLK/ps5-pkg-manager](https://github.com/itsPLK/ps5-pkg-manager) | 235 | 简洁的包管理器 |
| [JVK3R/JobeesLair](https://github.com/JVK3R/JobeesLair) | 193 | 内容中立的 homebrew 索引与媒体框架 |
| [EchoStretch/ps5-app-dumper](https://github.com/EchoStretch/ps5-app-dumper) | 186 | 应用导出（dump）工具 |
| [Loopayeh/pkg-sender](https://github.com/Loopayeh/pkg-sender) | 186 | 局域网安装 PS4 / PS5 包 |
| [Loopayeh/pkg-viewer](https://github.com/Loopayeh/pkg-viewer) | 181 | 查看 PS3 / PS4 / PS5 包信息与封面 |
| [gasb07/ps4mount](https://github.com/gasb07/ps4mount) | 179 | U 盘中的游戏包免安装直接挂载 |
| [earthonion/garlic-savemgr](https://github.com/earthonion/garlic-savemgr) | 177 | 本地存档管理器 |
| [NookieAI/PS5-Game-Scraper](https://github.com/NookieAI/PS5-Game-Scraper) | 158 | 浏览、搜索与下载 PS5 游戏 |
| [EchoStretch/dump_runner](https://github.com/EchoStretch/dump_runner) | 120 | dump 运行器 |
| [NookieAI/PS5-Vault](https://github.com/NookieAI/PS5-Vault) | 113 | 扫描、整理并通过 FTP 传输游戏备份 |
| [iharosi/ps5-wake](https://github.com/iharosi/ps5-wake) 🪦 | 112 | 发现并唤醒 PS5 |
| [quer3q/ps5-dump-forge](https://github.com/quer3q/ps5-dump-forge) | 107 | 跨平台的 PS5 dump 工具集 |
| [manos555555/PS5-Suite](https://github.com/manos555555/PS5-Suite) | 105 | 一体化管理套件：并行传输、挂载、存档 |
| [nexgen999/PS5-Repository-List](https://github.com/nexgen999/PS5-Repository-List) | 104 | PS5 软件仓库列表 |
| [s0liton/RommPS](https://github.com/s0liton/RommPS) | 101 | RomM 服务器客户端 |
| [nexgen999/PS5-Super-PLDMGR-Auto-Updater](https://github.com/nexgen999/PS5-Super-PLDMGR-Auto-Updater) | 99 | PLDMGR 自动更新工具 |
| [EchoStretch/dump_installer](https://github.com/EchoStretch/dump_installer) | 92 | dump 安装器 |
| [ChillQuant/direct-stream-ps5](https://github.com/ChillQuant/direct-stream-ps5) | 79 | 并行下载流引擎与本地 Web 面板 |
| [OptiTronOffical/OptiStore](https://github.com/OptiTronOffical/OptiStore) 🆕 | 75 | PS4 / PS5 游戏包库浏览前端 |
| [ItsBlurf/BFpilot](https://github.com/ItsBlurf/BFpilot) | 66 | 浏览器文件管理器 |
| [holdmysocks/ps5-tailscale](https://github.com/holdmysocks/ps5-tailscale) | 63 | Tailscale 组网，远程访问主机 |
| [darkxex/ps5-homebrew-catalog](https://github.com/darkxex/ps5-homebrew-catalog) | 61 | homebrew 目录数据 |
| [heni0xyz/PS5Save](https://github.com/heni0xyz/PS5Save) | 51 | U 盘存档备份工具 |
| [IRONB0SS/PSXhub](https://github.com/IRONB0SS/PSXhub) | 51 | 局域网传输零售 PKG |

### 🧪 游戏补丁、60FPS 与金手指

游戏补丁系统、降级移植、帧率解锁与作弊码仓库。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [illusionyy/PS-Game-Patch](https://github.com/illusionyy/PS-Game-Patch) | 407 | PS4 / PS5 游戏补丁集 |
| [TeeKay87/HEN-Cheats-Collection](https://github.com/TeeKay87/HEN-Cheats-Collection) | 287 | PS4 / PS5 作弊码合集 |
| [BestPig/BackPork](https://github.com/BestPig/BackPork) | 270 | 把系统库侧加载进 PS5 游戏 |
| [notmaj0r/CheatRunner](https://github.com/notmaj0r/CheatRunner) | 269 | 网页版 PS5 金手指加载器 |
| [knutwurst/ps5-patchdl](https://github.com/knutwurst/ps5-patchdl) | 203 | 从任意浏览器下载官方游戏更新 |
| [illusionyy/ps-patch-system](https://github.com/illusionyy/ps-patch-system) | 195 | PS4 / PS5 应用补丁系统 |
| [gasb07/NeoEnabler](https://github.com/gasb07/NeoEnabler) | 171 | 让缺少 PS4 支持的游戏也能打补丁 |
| [eladharels/ps5-60FPS](https://github.com/eladharels/ps5-60FPS) | 112 | 60FPS 解锁补丁 |
| [tsuramatsu1/apr-emu-updater](https://github.com/tsuramatsu1/apr-emu-updater) | 108 | APR Emu 的网页更新器 |
| [spfi970/PS5_etaHEN_Cheat_Repository](https://github.com/spfi970/PS5_etaHEN_Cheat_Repository) | 99 | etaHEN 作弊码仓库 |
| [drakmor/dlc_emu](https://github.com/drakmor/dlc_emu) | 82 | 通过配置暴露 DLC 条目的替代模块 |
| [Nazky/Auto-Backpork](https://github.com/Nazky/Auto-Backpork) | 80 | 自动生成 backpork 降级补丁 |

### 🐧 Linux 与系统

在 PS5 上运行 Linux，以及 BC-250（PS5 APU）相关项目。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [mothenjoyer69/bc250-documentation](https://github.com/mothenjoyer69/bc250-documentation) | 573 | BC-250（PS5 APU）矿板使用文档 |
| [ps5-linux/ps5-linux-loader](https://github.com/ps5-linux/ps5-linux-loader) | 474 | 利用 HV 漏洞运行自定义引导的 Linux 载荷 |
| [akandr/bc250](https://github.com/akandr/bc250) | 416 | BC-250 上的 Ollama + Vulkan 推理配置 |
| [mihawk-99/PS5_MihawkOS](https://github.com/mihawk-99/PS5_MihawkOS) | 312 | Windows 风格的 PS5 homebrew 系统 |
| [soniciso1/ps5-linux-loader](https://github.com/soniciso1/ps5-linux-loader) | 279 | 支持 13.60 / PS5 Pro 的 Linux 引导分支 |
| [pLabs5/pLinux5-NG](https://github.com/pLabs5/pLinux5-NG) 🪦 | 196 | 面向 8.xx – 13.xx 高版本固件的 Linux |
| [VivaLaVent/ps5-bazzite-deck](https://github.com/VivaLaVent/ps5-bazzite-deck) | 159 | PS5 上的 Bazzite 游戏模式镜像 |
| [mihawk-99/PS5_Vulkan](https://github.com/mihawk-99/PS5_Vulkan) | 115 | 基于 Mesa / RADV 的 PS5 原生 Vulkan 驱动 |
| [ps5-linux/ps5-linux-image](https://github.com/ps5-linux/ps5-linux-image) | 96 | Linux 镜像构建器 |
| [ps5-linux/ps5-linux-patches](https://github.com/ps5-linux/ps5-linux-patches) | 53 | 在 PS5 上运行所需的 Linux 补丁 |

### 📡 串流与 Remote Play

PS5 远程游玩客户端、推流与远程控制。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [chiaki-ng/chiaki-ng](https://github.com/chiaki-ng/chiaki-ng) | 2,918 | 新一代开源 PS Remote Play 客户端 |
| [leolobato/playden-ps5](https://github.com/leolobato/playden-ps5) 🆕 | 862 | 在越狱 PS5 上串流 Steam 库里的 Windows 游戏 |
| [Geocld/PeaSyo](https://github.com/Geocld/PeaSyo) | 383 | Android 开源远程游玩客户端 |
| [chiaki-ng/akira](https://github.com/chiaki-ng/akira) | 240 | Switch 上的 PS Remote Play 界面（基于 chiaki-ng） |
| [dhleong/playactor](https://github.com/dhleong/playactor) | 157 | 与 PlayStation 设备交互的工具 |
| [LedyBacer/ProsperoLight](https://github.com/LedyBacer/ProsperoLight) | 147 | Moonlight 的非官方 PS5 移植（串流） |
| [jbg77/chiaki](https://github.com/jbg77/chiaki) | 96 | Chiaki 远程游玩分支 |
| [ForWard-Technologies-LLC/Pylux](https://github.com/ForWard-Technologies-LLC/Pylux) | 87 | 跨平台 PS4 / PS5 远程游玩客户端 |
| [atameric/ps5-portal-high-bitrate](https://github.com/atameric/ps5-portal-high-bitrate) | 87 | PlayStation Portal 高码率实验工具 |
| [Axixi2233/chiaki-android](https://github.com/Axixi2233/chiaki-android) | 81 | Chiaki Android 分支 |
| [ywnico/vitaki-fork](https://github.com/ywnico/vitaki-fork) | 78 | Chiaki 的 PS Vita 分支 |
| [cy33hc/ps5-ezremote-client](https://github.com/cy33hc/ps5-ezremote-client) | 78 | 简化的远程游玩客户端 |
| [Geocld/PeaSyo4Desk](https://github.com/Geocld/PeaSyo4Desk) | 71 | PeaSyo 桌面客户端 |
| [thiagomiranda3/PlaystationMacro](https://github.com/thiagomiranda3/PlaystationMacro) | 68 | PS4 / PS5 远程游玩自动化工具 |
| [ktnrg45/pyremoteplay](https://github.com/ktnrg45/pyremoteplay) 🪦 | 56 | PlayStation Remote Play 的 Python API |
| [idlesauce/ps5-remoteplay-get-pin](https://github.com/idlesauce/ps5-remoteplay-get-pin) | 54 | 获取离线激活账号的遥控游玩配对码 |
| [urlynn/PSLinkB](https://github.com/urlynn/PSLinkB) | 52 | PS5 画面直推 B 站直播（免采集卡） |

### 🏆 PSN、账号与智能家居

PSN API、奖杯数据、账号工具与 Home Assistant 集成。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [FunkeyFlo/ps5-mqtt](https://github.com/FunkeyFlo/ps5-mqtt) | 589 | 把 PS5 接入 Home Assistant |
| [achievements-app/psn-api](https://github.com/achievements-app/psn-api) | 429 | PSN 奖杯、用户与游戏数据 API（JS） |
| [Tustin/psn-php](https://github.com/Tustin/psn-php) | 372 | PSN API 的 PHP 封装 |
| [earthonion/np-fake-signin](https://github.com/earthonion/np-fake-signin) 🪦 | 146 | 在 PS4 / PS5 上伪造 PSN 登录状态 |
| [kopiro/homebridge-playstation](https://github.com/kopiro/homebridge-playstation) | 119 | Homebridge 插件：接入 PlayStation |
| [MangoScango/ps5-account-tools](https://github.com/MangoScango/ps5-account-tools) | 112 | PS5 账号处理工具 |
| [RavelloH/PSGameSpider](https://github.com/RavelloH/PSGameSpider) | 73 | 抓取 PS Store 全量游戏信息并生成站点 |

### 🔧 硬件、维修与外设

NOR 读写、UART、摄像头、开发机与主机维修工具。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [TheCod3rYouTube/PS5NorModifier](https://github.com/TheCod3rYouTube/PS5NorModifier) | 1,081 | 重写 PS5 NOR 的 Windows 工具 |
| [Hackinside/PS5_camera_files](https://github.com/Hackinside/PS5_camera_files) | 166 | PS5 摄像头相关文件 |
| [GuillaumeMrNiato/PS5-Devkit-Testkit-Console-Manager](https://github.com/GuillaumeMrNiato/PS5-Devkit-Testkit-Console-Manager) | 146 | 开发机 / 测试机管理工具 |
| [amoamare/Console-Service-Tool](https://github.com/amoamare/Console-Service-Tool) | 109 | PS5 UART 读码与 NOR 工具 |
| [symbrkrs/ps5-uart](https://github.com/symbrkrs/ps5-uart) | 95 | 与 PS5 EMC / EFC 交互 |
| [andy-man/ps5-wee-tools](https://github.com/andy-man/ps5-wee-tools) | 79 | PS5 NOR 操作工具 |
| [raleighlittles/PlayStation-Camera-Firmware-Loader](https://github.com/raleighlittles/PlayStation-Camera-Firmware-Loader) | 55 | 给 PS5 摄像头刷自定义固件 |
| [drakmor/fan_target](https://github.com/drakmor/fan_target) | 52 | PS5 风扇转速控制 |

### 🎛️ DualSense 手柄

PS5 手柄的驱动、固件、自适应扳机与跨平台工具。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [awalol/DS5Dongle](https://github.com/awalol/DS5Dongle) | 2,976 | 把 Pico 2 W 变成 DualSense 无线接收器 |
| [Paliverse/DualSenseX](https://github.com/Paliverse/DualSenseX) 🆕 | 1,650 | PC 端连接 DualSense，启用自适应扳机并模拟 Xbox 360 / DualShock 4 手柄 |
| [JibbSmart/JoyShockMapper](https://github.com/JibbSmart/JoyShockMapper) | 876 | 用手柄当鼠标键盘，支持 DualSense 体感 |
| [daidr/dualsense-tester](https://github.com/daidr/dualsense-tester) | 586 | 浏览器里测试 DualSense / Edge |
| [HamzaYslmn/Forza-Horizon-DualSense-Python](https://github.com/HamzaYslmn/Forza-Horizon-DualSense-Python) 🆕 | 466 | 《极限竞速：地平线》系列的 DualSense 自适应扳机脚本 |
| [nowrep/dualsensectl](https://github.com/nowrep/dualsensectl) | 451 | Linux 下的 DualSense 控制工具 |
| [WujekFoliarz/DualSenseY-v2](https://github.com/WujekFoliarz/DualSenseY-v2) | 449 | DualSense 增强工具（自适应扳机 / 模拟 Xbox 手柄） |
| [Ohjurot/DualSense-Windows](https://github.com/Ohjurot/DualSense-Windows) | 442 | DualSense 的 Windows API |
| [SundayMoments/DS5_Bridge](https://github.com/SundayMoments/DS5_Bridge) | 408 | Pico 2 W 上的 DualSense 无线桥接 |
| [Denellyne/PCXSense](https://github.com/Denellyne/PCXSense) | 400 | 把 DualSense 输入转成 XInput |
| [JibbSmart/JoyShockLibrary](https://github.com/JibbSmart/JoyShockLibrary) | 317 | 读取 DualSense / DS4 / JoyCon 输入 |
| [ds4windowsapp/DS4Windows](https://github.com/ds4windowsapp/DS4Windows) | 224 | 手柄输入映射工具，支持 DualSense |
| [sqlCRT/ds5dongle-bl618-opensource](https://github.com/sqlCRT/ds5dongle-bl618-opensource) | 217 | 基于 BL616/BL618 的 DualSense 无线适配器 |
| [ReynArts/ApexSenseBridge](https://github.com/ReynArts/ApexSenseBridge) 🆕 | 215 | 把 PS5 DualSense 自适应扳机 / 触感与触摸板带给飞智 APEX 手柄（Windows） |
| [egormanga/SAxense](https://github.com/egormanga/SAxense) | 200 | 蓝牙下的 DualSense 触觉反馈 PoC |
| [rodneybakiskan/ps5-esp32](https://github.com/rodneybakiskan/ps5-esp32) | 195 | 用 ESP32 接收 PS5 手柄 |
| [r57zone/DSAdvance](https://github.com/r57zone/DSAdvance) | 195 | 把 DualSense 等手柄模拟成 Xbox 手柄 |
| [Mxater/DualSenseSupport](https://github.com/Mxater/DualSenseSupport) | 193 | DualSense 初步支持库 |
| [hurryman2212/vds](https://github.com/hurryman2212/vds) | 185 | DualSense / Edge 的虚拟 USB 转蓝牙桥 |
| [flok/pydualsense](https://github.com/flok/pydualsense) | 165 | 用 Python 控制 DualSense |
| [nullkal/UniSense](https://github.com/nullkal/UniSense) 🪦 | 125 | Unity 的 DualSense 扩展 |
| [nondebug/dualsense](https://github.com/nondebug/dualsense) | 122 | DualSense 手柄的技术资料汇总 |
| [josealissonbr/DualSenseAT](https://github.com/josealissonbr/DualSenseAT) 🪦 | 118 | 为更多游戏补上自适应扳机 |
| [BananaWorks07/trigger-control](https://github.com/BananaWorks07/trigger-control) | 94 | 在 Linux / Windows 上控制扳机 |
| [MarcelineVPQ/DS5Dongle-OLED-Edition](https://github.com/MarcelineVPQ/DS5Dongle-OLED-Edition) 🆕 | 91 | Pico 2 W 版 DS5 Dongle：蓝牙连接 DualSense 并伪装成有线（含 OLED 与校准） |
| [xzn/proton-ds5-haptic](https://github.com/xzn/proton-ds5-haptic) | 85 | Proton 中的 DualSense 触觉补丁 |
| [yesbotics/dualsense-controller-python](https://github.com/yesbotics/dualsense-controller-python) | 84 | DualSense 的 Python 库 |
| [tommargar/DualSense4Rockstar](https://github.com/tommargar/DualSense4Rockstar) 🆕 | 81 | GTA V / RDR 2 的 DualSense 自适应扳机 Mod（基于 DSX） |
| [artzox/DS5Dongle-Studio](https://github.com/artzox/DS5Dongle-Studio) | 80 | 在 PC 上获得无线触觉反馈 |
| [piereacy/FH-DualSense-Enhanced](https://github.com/piereacy/FH-DualSense-Enhanced) 🆕 | 80 | 《极限竞速：地平线》的 DualSense 触感增强 |
| [Paliverse/DualSense-List-of-Firmwares](https://github.com/Paliverse/DualSense-List-of-Firmwares) | 79 | DualSense 官方固件合集 |
| [rafaelvaloto/Dualsense-Multiplatform](https://github.com/rafaelvaloto/Dualsense-Multiplatform) | 72 | 跨平台 Sony 手柄 C++ 库 |
| [marcowindt/ds4macos](https://github.com/marcowindt/ds4macos) | 72 | macOS 上的 DSU 手柄服务 |
| [Mutcholoko/Haptic-Feedback-Linux](https://github.com/Mutcholoko/Haptic-Feedback-Linux) 🪦 | 67 | Linux 下开启 DualSense 触觉反馈指南 |
| [diegobarbosaa/OmniPad-PS5](https://github.com/diegobarbosaa/OmniPad-PS5) 🆕 | 66 | PS5 通用手柄引擎与 Web 控制面板（FW 7.00 – 13.60） |
| [kungaa/DS5-Linux-Bridge](https://github.com/kungaa/DS5-Linux-Bridge) | 64 | Linux 上基于树莓派的 USB 转蓝牙桥 |
| [LikeARealG/ETS2_PS5_DualSense](https://github.com/LikeARealG/ETS2_PS5_DualSense) 🆕 | 64 | 让《欧洲卡车模拟 2》用上 PS5 手柄的触感反馈 |
| [nsfm/dualsense-ts](https://github.com/nsfm/dualsense-ts) | 58 | DualSense / Access 的 TypeScript 接口 |
| [qingwa2009/MyBLEGamepad](https://github.com/qingwa2009/MyBLEGamepad) 🆕 | 58 | 用 ESP32 自制可模拟 Xbox / Switch Pro / DualSense 的蓝牙手柄 |
| [CyberKomodo/CyberKomodo.DualSense](https://github.com/CyberKomodo/CyberKomodo.DualSense) 🆕 | 58 | Unity 的 DualSense 手柄接入插件（USB 与蓝牙） |
| [HamzaYslmn/esp-ps5](https://github.com/HamzaYslmn/esp-ps5) | 57 | ESP32 下的 DualSense 库 |
| [MaximumFreak/dsz](https://github.com/MaximumFreak/dsz) | 56 | Windows 上的 DualSense 轻量伴侣工具 |
| [DualSenseClient/DualSenseClient](https://github.com/DualSenseClient/DualSenseClient) | 53 | Windows / Linux 上解锁完整 DualSense 体验 |

### 📺 PS5 原生应用与界面

运行在 PS5 上的媒体应用、AI、UI 与开发资料。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [cobanov/PS5LM](https://github.com/cobanov/PS5LM) | 738 | 在越狱 PS5 上跑 llama.cpp 本地大模型 |
| [abhi245y/PS5LM-Plus](https://github.com/abhi245y/PS5LM-Plus) | 481 | PS5 本地大模型运行方案的扩展版 |
| [mikeroyal/Game-Console-Dev-Guide](https://github.com/mikeroyal/Game-Console-Dev-Guide) | 359 | 面向 PS5 等主机的游戏开发指南 |
| [ZiZc3/LiveShell](https://github.com/ZiZc3/LiveShell) | 191 | PS5 主界面动态背景 |
| [X-F1REBALL-X/HearBridge-PS5](https://github.com/X-F1REBALL-X/HearBridge-PS5) | 181 | 让越狱 PS5 的游戏音频输出到任意蓝牙耳机 |
| [RafaelNGP/xbox-cloud-gaming-ps5](https://github.com/RafaelNGP/xbox-cloud-gaming-ps5) | 175 | PS5 上的 Xbox 云游戏应用 |
| [Sp9nky/unofficial-stremio-ps5-port](https://github.com/Sp9nky/unofficial-stremio-ps5-port) | 99 | 非官方 Stremio 客户端 |
| [davidkgriggs/PS5ish](https://github.com/davidkgriggs/PS5ish) | 97 | Playnite 的 PS5 风格主题 |
| [ThatGuyKalvin/ProsperoTV](https://github.com/ThatGuyKalvin/ProsperoTV) | 88 | PS5 原生 IPTV 客户端 |
| [ZiZc3/VLC](https://github.com/ZiZc3/VLC) | 75 | PS5 版 VLC |
| [elripalda/psgfx](https://github.com/elripalda/psgfx) | 69 | 为 PS5 应用与游戏定制图标与背景 |
| [quatrixone/ProsperoAI](https://github.com/quatrixone/ProsperoAI) | 68 | 在 PS5 GPU 上跑的聊天应用 |
| [SvenGDK/SharpProspero](https://github.com/SvenGDK/SharpProspero) | 60 | C# 的 PS5 SDK 与工具链 |
| [VivaLaVent/kodi-ps5](https://github.com/VivaLaVent/kodi-ps5) | 54 | Kodi 22 的非官方 PS5 移植 |
| [imtumbleweed/ps5.js](https://github.com/imtumbleweed/ps5.js) | 53 | 用原生 JS / CSS 复刻 PS5 界面 |

### 🛒 抢购与库存告警（历史）

首发缺货时期的抢购脚本，多数已停止维护。

| 项目 | Star | 说明 |
| :--- | ---: | :--- |
| [camtheperson/get-my-ps5](https://github.com/camtheperson/get-my-ps5) | 353 | 命令行抢购 PS5（已过时） |
| [dkkocab/WebSiteBot_PS5](https://github.com/dkkocab/WebSiteBot_PS5) | 347 | Walmart 抢购脚本（已过时） |
| [eg9y/PS5bot](https://github.com/eg9y/PS5bot) 🪦 | 236 | 库存监控与自动下单（已过时） |

## 收录标准

- 项目主题必须与 PS5 直接相关：主机本体（固件、越狱、homebrew、硬件）、PS5 生态（DualSense、Remote Play、PSN）或 PS5 游戏资源与补丁。
- star 数 > 50，仓库公开可访问。
- 仅在 README 中顺带提到 PS5 的项目（通用代理工具、通用模拟器、通用购物机器人等）不收。
- 同一项目的普通 fork 与换皮版不收，除非维护状况明显更好。
- 抢购脚本保留在独立分区，仅作历史记录。
- 标注 🆕 的条目由脚本自动采集并分类，欢迎提 PR 修正其分类与描述。

## 免责声明

本项目仅做索引，不托管任何游戏内容。越狱、安装非官方软件可能违反 Sony 的服务条款、导致主机封禁或保修失效，风险自负。请仅在你自己拥有的设备上操作，并遵守当地法律。

## 贡献

发现遗漏或 star 数已跌破门槛的项目，欢迎提 Issue / PR：

1. 在 [data/projects.json](data/projects.json) 中按分类追加条目（仓库名 + 一句话中英说明）。
2. 运行 `node scripts/update.mjs` 重新生成两个 README。
3. 提交 PR。

## 更新

[GitHub Action](.github/workflows/update.yml) 每 24 小时执行一次下面两个脚本并自动提交，让列表自行保持更新。本地手动执行：

```bash
node scripts/collect.mjs  # 采集新仓库并自动分类
node scripts/update.mjs   # 刷新 star 数与两个 README
```

## 许可证

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
