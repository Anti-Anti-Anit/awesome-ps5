# Awesome PS5 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

**English** · [简体中文](README.zh-CN.md)

![Projects](https://img.shields.io/badge/projects-264-brightgreen)
![Stars](https://img.shields.io/badge/stars-139828-yellow)
![Updated](https://img.shields.io/badge/updated-2026-10-31-blue)

> Every GitHub project related to the PlayStation 5 with **more than 50 stars** — jailbreak, homebrew, emulators, packaging tools, Linux, streaming and controller ecosystem.

- **264** projects · **139,828** stars in total
- Data synced on 2026-10-31 · 13 archived repositories (🪦) · 19 auto-collected entries (🆕)
- Sorted by stars; new repositories are harvested and classified, and star counts are refreshed, every 24 hours by GitHub Actions

## Contents

- [🎮 PS5 Emulators & Translation Layers](#-ps5-emulators--translation-layers)
- [🕹️ Emulators & Game Ports on PS5](#-emulators--game-ports-on-ps5)
- [🔓 Jailbreak & Exploits](#-jailbreak--exploits)
- [🧩 HEN, Payloads & Runtime](#-hen-payloads--runtime)
- [📦 Packages / fPKG / Compression](#-packages--fpkg--compression)
- [🗂️ Stores, Package Managers & Transfers](#-stores-package-managers--transfers)
- [🧪 Game Patches, 60FPS & Cheats](#-game-patches-60fps--cheats)
- [🐧 Linux & System](#-linux--system)
- [📡 Streaming & Remote Play](#-streaming--remote-play)
- [🏆 PSN, Accounts & Smart Home](#-psn-accounts--smart-home)
- [🔧 Hardware, Repair & Accessories](#-hardware-repair--accessories)
- [🎛️ DualSense Controller](#-dualsense-controller)
- [📺 Native PS5 Apps & UI](#-native-ps5-apps--ui)
- [🛒 Stock Bots (Historical)](#-stock-bots-historical)

### 🎮 PS5 Emulators & Translation Layers

Run PS5 titles on PC, or port PS5 executables to other platforms.

| Project | Star | Description |
| :--- | ---: | :--- |
| [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | 49,875 | Automatically ports PS5 executables to Linux and Windows |
| [KytyPS5/KytyPS5](https://github.com/KytyPS5/KytyPS5) | 10,223 | PS5 translation layer for Windows, Linux and macOS |
| [sharpemu/sharpemu](https://github.com/sharpemu/sharpemu) | 6,491 | Experimental PlayStation 5 emulator |
| [InoriRus/Kyty](https://github.com/InoriRus/Kyty) | 3,241 | Original PS4 & PS5 emulator project |
| [Jetsku/KytyPS5](https://github.com/Jetsku/KytyPS5) | 519 | KytyPS5 fork with merged shader and renderer fixes |
| [ymatrix1/PortPS5](https://github.com/ymatrix1/PortPS5) | 421 | Re-links decrypted PS5 dumps into native Windows executables |
| [Force67/prosperity](https://github.com/Force67/prosperity) | 411 | Low-level (LLE) emulation research for PS4 & PS5 |
| [mpereiraesaa/prospero-win](https://github.com/mpereiraesaa/prospero-win) | 241 | Windows compatibility runtime for native PS5 homebrew |
| [mattias800/prosper](https://github.com/mattias800/prosper) | 215 | User-space PS5-to-PC compatibility layer |
| [aarvsn/Ryty](https://github.com/aarvsn/Ryty) | 125 | Porting tool for PS4 & PS5 executables (ELF / SPIR-V) |
| [iStark/PS5PCEM](https://github.com/iStark/PS5PCEM) | 80 | Experimental PS5 PC emulator |
| [mircowuffwuff/sharpdroid](https://github.com/mircowuffwuff/sharpdroid) | 60 | Android shell app that runs SharpEmu |
| [niakw/ProsperoEden-Encore](https://github.com/niakw/ProsperoEden-Encore) 🆕 | 54 | ProsperoEden Encore R457 — Switch emulator fork for FW 13.60 PS5 with NSP, XCI, NSZ, XCZ, ExeFS, NRO, NSO, NCA, NAX, KIP loading; LZ4, ZBIC and zstd decoding. Audited Eden/OpenGL fixes, stable per-core JIT, TV-first DualSense UI, per-game profiles, unified storage, Safe Launch, diagnostics & hardened releases. |

### 🕹️ Emulators & Game Ports on PS5

Play other consoles' games as homebrew on a jailbroken PS5.

| Project | Star | Description |
| :--- | ---: | :--- |
| [Swordpdf/PS5SX2](https://github.com/Swordpdf/PS5SX2) | 1,592 | PCSX2 port that runs PS2 games natively on PS5 |
| [premohq/PS5-ECAM](https://github.com/premohq/PS5-ECAM) | 430 | Wii U, 3DS, DS and Switch emulation on PS5 |
| [mihawk-99/PS5_RetroArch](https://github.com/mihawk-99/PS5_RetroArch) | 418 | RetroArch for PS5 with 35 cores and 44 systems |
| [BrinooTk/PS5X360](https://github.com/BrinooTk/PS5X360) | 394 | Xbox 360 emulator built on Xenia Canary |
| [holdmysocks/mcla-recomp](https://github.com/holdmysocks/mcla-recomp) | 223 | Static recompilation of Midnight Club: LA for PC and PS5 |
| [elripalda/Porpoise-Dolphin-Emulator-for-PS5](https://github.com/elripalda/Porpoise-Dolphin-Emulator-for-PS5) | 218 | Dolphin port for GameCube and Wii games |
| [ZiZc3/XPSemu](https://github.com/ZiZc3/XPSemu) | 203 | Xemu port for original Xbox games |
| [kamb205/KB-RPCS3](https://github.com/kamb205/KB-RPCS3) | 100 | Unofficial RPCS3 port for PS5 |
| [SynoPiia/PSXS5](https://github.com/SynoPiia/PSXS5) | 96 | PS1 emulator based on PCSX-ReARMed |
| [darkxex/SwanStationPS5](https://github.com/darkxex/SwanStationPS5) | 91 | PS1 emulator based on SwanStation |
| [lavavex/rpcs3-PS5](https://github.com/lavavex/rpcs3-PS5) | 85 | RPCS3 built as a native PS5 title (experimental) |
| [felipeAguiarCode/PS5EmuShell](https://github.com/felipeAguiarCode/PS5EmuShell) | 75 | Launcher for emulators and recompiled games on PS5 |
| [elripalda/gta4-ps5](https://github.com/elripalda/gta4-ps5) | 72 | GTA IV trilogy running natively on jailbroken PS5 |
| [aarvsn/PS5Droid](https://github.com/aarvsn/PS5Droid) | 70 | Run Android games on PS5 |
| [MisterTemaki/snes9xPS5](https://github.com/MisterTemaki/snes9xPS5) | 63 | Snes9x port for PS5 |
| [Phi1ow/mkwii-ps5](https://github.com/Phi1ow/mkwii-ps5) | 61 | Mario Kart Wii static recompilation for PS5 |
| [egycnq/EmuC0re](https://github.com/egycnq/EmuC0re) | 54 | x86_64 emulators running through the LuaC0re JIT |

### 🔓 Jailbreak & Exploits

WebKit, kernel and hypervisor exploits, plus exploit hosts.

| Project | Star | Description |
| :--- | ---: | :--- |
| [ntfargo/Relapse-Exploit](https://github.com/ntfargo/Relapse-Exploit) | 2,620 | Full exploit chain for PS5 7.00 – 13.60 |
| [Gezine/Y2JB](https://github.com/Gezine/Y2JB) | 1,628 | Userland code execution via the PS5 YouTube app |
| [Al-Azif/ps4-exploit-host](https://github.com/Al-Azif/ps4-exploit-host) | 1,217 | One-click exploit hosting for PS4 and PS5 |
| [Cryptogenic/PS5-IPV6-Kernel-Exploit](https://github.com/Cryptogenic/PS5-IPV6-Kernel-Exploit) | 931 | WebKit-based kernel exploit with arbitrary read/write |
| [PS5Dev/Byepervisor-Reborn](https://github.com/PS5Dev/Byepervisor-Reborn) | 526 | PS5 hypervisor exploit, revived |
| [drakmor/nanoDNS](https://github.com/drakmor/nanoDNS) | 510 | DNS proxy server for PS4 and PS5 |
| [n0llptr/remote_lua_loader](https://github.com/n0llptr/remote_lua_loader) | 458 | Remote Lua payload loader |
| [Gezine/BD-JB5](https://github.com/Gezine/BD-JB5) | 426 | Blu-ray BD-JB exploit for PS5 |
| [ZigZagBoi1/PS5-14.10-Research](https://github.com/ZigZagBoi1/PS5-14.10-Research) | 413 | Open research on firmware 14.10: Lua userland experiments |
| [PS5Dev/Byepervisor](https://github.com/PS5Dev/Byepervisor) | 391 | Hypervisor exploit for firmware 1.xx – 2.xx |
| [pastawithpesto/PS5-14.10-Jailbreak-Research](https://github.com/pastawithpesto/PS5-14.10-Jailbreak-Research) | 349 | WebKit jailbreak research for firmware 14.10 |
| [Gezine/Luac0re](https://github.com/Gezine/Luac0re) | 333 | mast1c0re variant that uses Lua to ease exploit development |
| [ntfargo/CSSFontFace-Exploit](https://github.com/ntfargo/CSSFontFace-Exploit) | 327 | WebKit CSSFontFace UAF exploit (PS4 / PS5) |
| [Viktorious-x/ps5-bdjb-modified-ISOs](https://github.com/Viktorious-x/ps5-bdjb-modified-ISOs) | 294 | Modified ISOs for the BD-JB exploit |
| [PS5Dev/PS5-UMTX-Jailbreak](https://github.com/PS5Dev/PS5-UMTX-Jailbreak) | 281 | WebKit-based kernel exploit and jailbreak |
| [matem6/P2JB-Y2JB-Porting](https://github.com/matem6/P2JB-Y2JB-Porting) | 273 | Y2JB jailbreak port (kqueueex cr_ref overflow) |
| [McCaulay/mast1c0re](https://github.com/McCaulay/mast1c0re) | 261 | Execute payloads on PS4 / PS5 through a game save |
| [ChendoChap/PS5-Webkit-Execution](https://github.com/ChendoChap/PS5-Webkit-Execution) | 246 | ROP userland execution for PS5 4.03 |
| [TheWizWikii/TheWizWikii.github.io](https://github.com/TheWizWikii/TheWizWikii.github.io) | 167 | Browser exploit host for PS3 / PS4 / PS5 |
| [idlesauce/umtx2](https://github.com/idlesauce/umtx2) | 164 | WebKit-based kernel exploit and jailbreak |
| [hammer-83/ps5-jar-loader](https://github.com/hammer-83/ps5-jar-loader) | 159 | Remote JAR loader using the BD-J vulnerability |
| [jordyidk/slopkit](https://github.com/jordyidk/slopkit) | 144 | One-click webkit jailbreak for 9.00 – 12.00 |
| [Helloyunho/yarpe](https://github.com/Helloyunho/yarpe) 🪦 | 117 | Ren'Py save-file exploit |
| [zecoxao/zecoxao.github.io](https://github.com/zecoxao/zecoxao.github.io) | 117 | Host for PS scene sites |
| [soniciso1/relapse](https://github.com/soniciso1/relapse) | 111 | Tooling around the Relapse exploit |
| [Gezine/ArtemisLuaLoader](https://github.com/Gezine/ArtemisLuaLoader) 🪦 | 100 | Run arbitrary Lua scripts from save data |
| [fail0verflow/prosperous](https://github.com/fail0verflow/prosperous) | 99 | PS5 exploit research tooling |
| [frwololo/PS4_PS5-ESP8266-Server](https://github.com/frwololo/PS4_PS5-ESP8266-Server) | 95 | ESP8266 / ESP32 exploit host plus DNS hijack |
| [fail0verflow/ps5-umtxdbg](https://github.com/fail0verflow/ps5-umtxdbg) | 84 | Debugger for the UMTX exploit |
| [soniciso1/ps5-hv-writeups](https://github.com/soniciso1/ps5-hv-writeups) | 81 | PS5 hypervisor research writeups |
| [cragson/a53-code-exec](https://github.com/cragson/a53-code-exec) | 73 | Code execution PoC on a53, firmware 11.60 and below |
| [jaigaresc/Poops-PS5-Java](https://github.com/jaigaresc/Poops-PS5-Java) | 71 | Java / BD-J implementation of the poops_ps5 UAF exploit |
| [edisnord/relapse-y2jb](https://github.com/edisnord/relapse-y2jb) | 62 | Relapse exploit ported to Y2JB |
| [bornaradusin/PC5](https://github.com/bornaradusin/PC5) 🆕 | 57 | A launcher for PC games on a jailbroken PS5, built on prospero-win (Wine, DXVK, VKD3D-Proton). Install games from USB with automatic covers, pick them from a carousel, and use the DualSense: vibration, light bar, adaptive triggers. FPS counter and update check. Games that need a launcher to start are not supported. |

### 🧩 HEN, Payloads & Runtime

Payload loaders, kernel patches, SDKs and debuggers.

| Project | Star | Description |
| :--- | ---: | :--- |
| [itsPLK/ps5-webkit-autoloader](https://github.com/itsPLK/ps5-webkit-autoloader) | 1,318 | Automated payload loader for exploited consoles |
| [EchoStretch/kstuff-lite](https://github.com/EchoStretch/kstuff-lite) | 860 | Lightweight build of the kstuff kernel patch |
| [etaHEN/etaHEN](https://github.com/etaHEN/etaHEN) | 828 | All-in-one HEN payload |
| [itsPLK/ps5-payload-manager](https://github.com/itsPLK/ps5-payload-manager) | 699 | Web dashboard to manage, import and auto-update payloads |
| [aydencharles/onionHEN](https://github.com/aydencharles/onionHEN) | 485 | HEN enabler |
| [ps5-payload-dev/sdk](https://github.com/ps5-payload-dev/sdk) | 272 | Dynamically linked PS5 payload SDK |
| [Michele-M-Media/HYPERHEN](https://github.com/Michele-M-Media/HYPERHEN) | 243 | HEN implementation |
| [ps5-payload-dev/websrv](https://github.com/ps5-payload-dev/websrv) | 223 | Web server payload listening on port 8080 |
| [PS5Dev/PS5SDK](https://github.com/PS5Dev/PS5SDK) | 220 | SDK for payloads compatible with the WebKit + kernel loader |
| [ps5-payload-dev/ftpsrv](https://github.com/ps5-payload-dev/ftpsrv) | 201 | FTP server payload for PS4 and PS5 |
| [itsPLK/ps5-payloads-mirror](https://github.com/itsPLK/ps5-payloads-mirror) | 189 | Mirror of common payloads |
| [flatz/ida_ps5_elf_plugin](https://github.com/flatz/ida_ps5_elf_plugin) | 155 | PS5 ELF loader plugin for IDA |
| [ps5-payload-dev/elfldr](https://github.com/ps5-payload-dev/elfldr) | 152 | ELF payload loader on port 9021 |
| [Pharaoh2k/ps5debug-NG](https://github.com/Pharaoh2k/ps5debug-NG) | 121 | ps5debug payload over TCP |
| [xvvulcanvx/PS5-TabShifter](https://github.com/xvvulcanvx/PS5-TabShifter) 🆕 | 105 | Standalone PS5 on-console payload to move apps between Games/Media tabs and hide offline PSN bloatware (Universal FW 5.00 – 13.60) |
| [cragson/ps5-hen](https://github.com/cragson/ps5-hen) | 104 | HEN for firmware 1.00 – 4.51 |
| [ArkSama/PS5-Lapy-JB-Daemon](https://github.com/ArkSama/PS5-Lapy-JB-Daemon) | 92 | Standalone jailbreak daemon with an etaHEN-style API |
| [aydencharles/kylin-core-release](https://github.com/aydencharles/kylin-core-release) | 90 | kylin kernel patch release |
| [GronedWaffel/etahen-11.00-13.60](https://github.com/GronedWaffel/etahen-11.00-13.60) | 88 | Unified etaHEN 2.5B port for 11.00 – 13.60 |
| [ps5-payload-dev/offact](https://github.com/ps5-payload-dev/offact) | 87 | Offline account activation |
| [lvndry/ps5-firmware-pin](https://github.com/lvndry/ps5-firmware-pin) | 76 | Pin the firmware version and block forced updates |
| [buzzer-re/PS5_kldload](https://github.com/buzzer-re/PS5_kldload) | 73 | Kernel module loader inspired by FreeBSD kldload |
| [ps5-payload-dev/fetchpkg](https://github.com/ps5-payload-dev/fetchpkg) | 69 | Fetch game updates referenced by a JSON manifest |
| [drakmor/pgo_stub](https://github.com/drakmor/pgo_stub) 🆕 | 59 | A lightweight replacement module for the PlayGo runtime library on PlayStation 5 |
| [owendswang/ps5-syslang](https://github.com/owendswang/ps5-syslang) 🆕 | 58 | Small PS5 payload for switching the ShellUI system language. |
| [EchoStretch/kstuff-toggle](https://github.com/EchoStretch/kstuff-toggle) | 52 | Toggle for the kstuff kernel patch |
| [Epinorr/y2jb-update-blocker](https://github.com/Epinorr/y2jb-update-blocker) 🆕 | 52 | A PlayStation 5 payload for blocking YouTube update metadata |
| [cryonumb/elfloader](https://github.com/cryonumb/elfloader) | 51 | ELF loader for ps5-jar-loader |

### 📦 Packages / fPKG / Compression

Parse, build and compress PKG, PFS, PUP and SELF files.

| Project | Star | Description |
| :--- | ---: | :--- |
| [seregonwar/PkgToolBox](https://github.com/seregonwar/PkgToolBox) | 659 | Analyze and edit PSP / PS3 / PS4 / PS5 packages |
| [SvenGDK/PS-Multi-Tools](https://github.com/SvenGDK/PS-Multi-Tools) | 416 | Backup manager and utilities for PS1 – PS5 |
| [ItsJokerZz/FPKGi](https://github.com/ItsJokerZz/FPKGi) 🪦 | 339 | Open-source PKGi clone for PSP, Vita, PS3, PS4 and PS5 |
| [juma-sayeh/PS5-Game-Compressor](https://github.com/juma-sayeh/PS5-Game-Compressor) | 290 | Payload to compress, unpack, verify and repair games |
| [kerrdec97/ps5-exfat-builder](https://github.com/kerrdec97/ps5-exfat-builder) | 268 | Build exFAT game packages |
| [pearlxcore/PS5PKGTool](https://github.com/pearlxcore/PS5PKGTool) | 221 | Manage PS5 dumps and images on Windows |
| [PSBrew/MkPFS](https://github.com/PSBrew/MkPFS) | 191 | Create and manage unsigned PFS images |
| [KINGDKAK/PS5-FFPFSC-PRO](https://github.com/KINGDKAK/PS5-FFPFSC-PRO) | 162 | PS5 game compression utility |
| [thanhsondev/PSVIETHOA-FPKG-Builder](https://github.com/thanhsondev/PSVIETHOA-FPKG-Builder) | 139 | FPKG builder |
| [AphelionWasTaken/PySN](https://github.com/AphelionWasTaken/PySN) | 138 | Game update downloader for PS3, PS4 and PS5 |
| [Nazky/Lazy_AMPR](https://github.com/Nazky/Lazy_AMPR) | 136 | Recompress ampr games into LZ4 |
| [zerodaysofficial/ps5-exfat-pkg-builder-v1](https://github.com/zerodaysofficial/ps5-exfat-pkg-builder-v1) | 125 | exFAT to PKG builder |
| [kerrdec97/PS5-Backport-GUI](https://github.com/kerrdec97/PS5-Backport-GUI) | 122 | GUI for PS5 backporting |
| [gameboy829/PS5-LZ4-Game-Compressor](https://github.com/gameboy829/PS5-LZ4-Game-Compressor) | 112 | LZ4 game compression (beta) |
| [SvenGDK/LibProsperoPKG](https://github.com/SvenGDK/LibProsperoPKG) 🪦 | 98 | Library for PS5 PKG, GP5 and PFS files |
| [kerrdec97/exFAT-Ripper](https://github.com/kerrdec97/exFAT-Ripper) | 80 | Scraper for exFAT game libraries |
| [zecoxao/ps5-pup-decrypt](https://github.com/zecoxao/ps5-pup-decrypt) | 72 | Decrypt PUP files by asking the console |
| [Cryptogenic/PS5-SELF-Decrypter](https://github.com/Cryptogenic/PS5-SELF-Decrypter) | 72 | Portable payload that decrypts PS5 SELF files |
| [knutwurst/ps5-ultrapack](https://github.com/knutwurst/ps5-ultrapack) | 63 | Build fPKG and .ffpfsc containers |
| [DNNDHH/PS5-PKGs](https://github.com/DNNDHH/PS5-PKGs) | 56 | Official PS5 package build tools |
| [zecoxao/ps5-pup-unpacker](https://github.com/zecoxao/ps5-pup-unpacker) | 55 | PUP unpacker |
| [SvenGDK/PS-Classics-fPKG-Builder](https://github.com/SvenGDK/PS-Classics-fPKG-Builder) 🪦 | 52 | Package PS1, PS2 and PSP games as fPKG |

### 🗂️ Stores, Package Managers & Transfers

Install games, manage files, download and back up.

| Project | Star | Description |
| :--- | ---: | :--- |
| [saawant12/orbit-store-ps5](https://github.com/saawant12/orbit-store-ps5) | 1,278 | PS5 download manager with a TV app and phone remote |
| [phantomptr/ps5upload](https://github.com/phantomptr/ps5upload) | 967 | Send games, apps and homebrew to a jailbroken PS5 |
| [overdriveps5/overdrive-releases](https://github.com/overdriveps5/overdrive-releases) | 728 | Overdrive releases for jailbroken consoles |
| [D3ATHLY/blackbox](https://github.com/D3ATHLY/blackbox) | 695 | Package installer for PS5 |
| [darkxex/ProsperoStore](https://github.com/darkxex/ProsperoStore) | 462 | Native PS5 homebrew store |
| [pegasus-ps5/pegasus-dl](https://github.com/pegasus-ps5/pegasus-dl) | 452 | Direct package downloads on the console |
| [elripalda/RecompStore](https://github.com/elripalda/RecompStore) | 306 | Homebrew store for recompiled games |
| [deox1111/ps5-library](https://github.com/deox1111/ps5-library) | 297 | Pick a game, it downloads and installs it |
| [notmaj0r/ProsperoMgr](https://github.com/notmaj0r/ProsperoMgr) | 283 | All-in-one manager for PS5 |
| [owendswang/ps5-web-file-manager](https://github.com/owendswang/ps5-web-file-manager) | 275 | File manager with a web UI |
| [itsPLK/ps5-pkg-manager](https://github.com/itsPLK/ps5-pkg-manager) | 239 | Clean package manager for PS5 |
| [JVK3R/JobeesLair](https://github.com/JVK3R/JobeesLair) | 202 | Content-neutral homebrew indexer and media framework |
| [EchoStretch/ps5-app-dumper](https://github.com/EchoStretch/ps5-app-dumper) | 186 | App dumper |
| [Loopayeh/pkg-sender](https://github.com/Loopayeh/pkg-sender) | 185 | Install PS4 / PS5 packages over LAN |
| [Loopayeh/pkg-viewer](https://github.com/Loopayeh/pkg-viewer) | 183 | Inspect PS3 / PS4 / PS5 package info and cover art |
| [earthonion/garlic-savemgr](https://github.com/earthonion/garlic-savemgr) | 183 | Local save manager for PS5 |
| [gasb07/ps4mount](https://github.com/gasb07/ps4mount) | 180 | Mount PKG games from USB without installing |
| [NookieAI/PS5-Game-Scraper](https://github.com/NookieAI/PS5-Game-Scraper) | 160 | Browse, search and download PS5 games |
| [quer3q/ps5-dump-forge](https://github.com/quer3q/ps5-dump-forge) | 122 | Cross-platform toolkit for PS5 dumps |
| [EchoStretch/dump_runner](https://github.com/EchoStretch/dump_runner) | 120 | Dump runner |
| [NookieAI/PS5-Vault](https://github.com/NookieAI/PS5-Vault) | 114 | Scan, organize and transfer game backups over FTP |
| [iharosi/ps5-wake](https://github.com/iharosi/ps5-wake) 🪦 | 112 | Discover and wake up a PS5 |
| [manos555555/PS5-Suite](https://github.com/manos555555/PS5-Suite) | 107 | All-in-one suite: parallel transfer, mounting and saves |
| [nexgen999/PS5-Repository-List](https://github.com/nexgen999/PS5-Repository-List) | 106 | List of PS5 repositories |
| [s0liton/RommPS](https://github.com/s0liton/RommPS) | 102 | RomM server client for jailbroken PS5 |
| [nexgen999/PS5-Super-PLDMGR-Auto-Updater](https://github.com/nexgen999/PS5-Super-PLDMGR-Auto-Updater) | 99 | Auto-updater for PLDMGR |
| [EchoStretch/dump_installer](https://github.com/EchoStretch/dump_installer) | 92 | Dump installer |
| [ChillQuant/direct-stream-ps5](https://github.com/ChillQuant/direct-stream-ps5) | 79 | Parallel download engine with a local web dashboard |
| [jamesst20/ps5-y2jb-installer](https://github.com/jamesst20/ps5-y2jb-installer) 🆕 | 79 | Y2JB Installer for PS5 |
| [OptiTronOffical/OptiStore](https://github.com/OptiTronOffical/OptiStore) 🆕 | 75 | Front end for browsing PS4 and PS5 package libraries. |
| [ItsBlurf/BFpilot](https://github.com/ItsBlurf/BFpilot) | 67 | Browser-based file manager |
| [darkxex/ps5-homebrew-catalog](https://github.com/darkxex/ps5-homebrew-catalog) | 66 | Homebrew catalog data |
| [holdmysocks/ps5-tailscale](https://github.com/holdmysocks/ps5-tailscale) | 63 | Tailscale on the console for remote access |
| [heni0xyz/PS5Save](https://github.com/heni0xyz/PS5Save) | 55 | USB save backup utility |
| [IRONB0SS/PSXhub](https://github.com/IRONB0SS/PSXhub) | 52 | Transfer retail PKG files over LAN |

### 🧪 Game Patches, 60FPS & Cheats

Patch systems, backports, frame-rate unlocks and cheat repositories.

| Project | Star | Description |
| :--- | ---: | :--- |
| [illusionyy/PS-Game-Patch](https://github.com/illusionyy/PS-Game-Patch) | 408 | Custom game patches for PS4 and PS5 |
| [TeeKay87/HEN-Cheats-Collection](https://github.com/TeeKay87/HEN-Cheats-Collection) | 290 | Cheat collection for PS4 and PS5 |
| [notmaj0r/CheatRunner](https://github.com/notmaj0r/CheatRunner) | 279 | Web-based cheat trainer for PS5 |
| [BestPig/BackPork](https://github.com/BestPig/BackPork) | 274 | Sideload system libraries into PS5 games |
| [knutwurst/ps5-patchdl](https://github.com/knutwurst/ps5-patchdl) | 208 | Download official game updates from any browser |
| [illusionyy/ps-patch-system](https://github.com/illusionyy/ps-patch-system) | 202 | App patching system for PS4 and PS5 |
| [gasb07/NeoEnabler](https://github.com/gasb07/NeoEnabler) | 186 | Brings patches to games lacking PS4 support |
| [eladharels/ps5-60FPS](https://github.com/eladharels/ps5-60FPS) | 111 | 60FPS unlock patches |
| [tsuramatsu1/apr-emu-updater](https://github.com/tsuramatsu1/apr-emu-updater) | 111 | Keeps APR Emu up to date from a web UI |
| [spfi970/PS5_etaHEN_Cheat_Repository](https://github.com/spfi970/PS5_etaHEN_Cheat_Repository) | 99 | etaHEN cheat repository |
| [drakmor/dlc_emu](https://github.com/drakmor/dlc_emu) | 82 | Standalone modules that expose DLC entries from config |
| [Nazky/Auto-Backpork](https://github.com/Nazky/Auto-Backpork) | 81 | Automated backpork backports |

### 🐧 Linux & System

Running Linux on PS5 and BC-250 (PS5 APU) projects.

| Project | Star | Description |
| :--- | ---: | :--- |
| [mothenjoyer69/bc250-documentation](https://github.com/mothenjoyer69/bc250-documentation) | 573 | Running BC-250 (PS5 APU) mining boards |
| [ps5-linux/ps5-linux-loader](https://github.com/ps5-linux/ps5-linux-loader) | 490 | Linux payload using HV exploits to run a custom bootloader |
| [akandr/bc250](https://github.com/akandr/bc250) | 420 | Ollama + Vulkan inference on BC-250 |
| [mihawk-99/PS5_MihawkOS](https://github.com/mihawk-99/PS5_MihawkOS) | 336 | Windows-inspired PS5 homebrew OS |
| [soniciso1/ps5-linux-loader](https://github.com/soniciso1/ps5-linux-loader) | 289 | Linux loader fork with 13.60 and PS5 Pro support |
| [VivaLaVent/ps5-bazzite-deck](https://github.com/VivaLaVent/ps5-bazzite-deck) | 284 | Bazzite gaming mode images for PS5 |
| [pLabs5/pLinux5-NG](https://github.com/pLabs5/pLinux5-NG) 🪦 | 196 | Linux for higher firmware (8.xx – 13.xx) |
| [mihawk-99/PS5_Vulkan](https://github.com/mihawk-99/PS5_Vulkan) | 117 | Native Vulkan driver powered by Mesa / RADV |
| [ps5-linux/ps5-linux-image](https://github.com/ps5-linux/ps5-linux-image) | 102 | Linux image builder |
| [ps5-linux/ps5-linux-patches](https://github.com/ps5-linux/ps5-linux-patches) | 54 | Linux patches required to run on PS5 |

### 📡 Streaming & Remote Play

Remote play clients, broadcasts and remote control.

| Project | Star | Description |
| :--- | ---: | :--- |
| [chiaki-ng/chiaki-ng](https://github.com/chiaki-ng/chiaki-ng) | 2,930 | Next-generation open-source PS Remote Play client |
| [leolobato/playden-ps5](https://github.com/leolobato/playden-ps5) 🆕 | 899 | Play your Steam library's Windows games on a jailbroken PS5. |
| [Geocld/PeaSyo](https://github.com/Geocld/PeaSyo) | 386 | Open-source remote play client for Android |
| [chiaki-ng/akira](https://github.com/chiaki-ng/akira) | 244 | PS Remote Play GUI for Nintendo Switch |
| [dhleong/playactor](https://github.com/dhleong/playactor) | 157 | Tools to interact with PlayStation devices |
| [LedyBacer/ProsperoLight](https://github.com/LedyBacer/ProsperoLight) | 148 | Unofficial Moonlight port for game streaming |
| [jbg77/chiaki](https://github.com/jbg77/chiaki) | 96 | Chiaki remote play fork |
| [ForWard-Technologies-LLC/Pylux](https://github.com/ForWard-Technologies-LLC/Pylux) | 89 | Cross-platform PS4 / PS5 remote play client |
| [atameric/ps5-portal-high-bitrate](https://github.com/atameric/ps5-portal-high-bitrate) | 88 | Experimental higher-bitrate tools for PlayStation Portal |
| [Axixi2233/chiaki-android](https://github.com/Axixi2233/chiaki-android) | 81 | Chiaki fork for Android |
| [ywnico/vitaki-fork](https://github.com/ywnico/vitaki-fork) | 78 | Chiaki fork for PS Vita |
| [cy33hc/ps5-ezremote-client](https://github.com/cy33hc/ps5-ezremote-client) | 78 | Simplified remote play client |
| [Geocld/PeaSyo4Desk](https://github.com/Geocld/PeaSyo4Desk) | 71 | Desktop client of PeaSyo |
| [thiagomiranda3/PlaystationMacro](https://github.com/thiagomiranda3/PlaystationMacro) | 68 | Remote play automation for PS4 and PS5 |
| [ktnrg45/pyremoteplay](https://github.com/ktnrg45/pyremoteplay) 🪦 | 56 | Python API for PlayStation Remote Play |
| [idlesauce/ps5-remoteplay-get-pin](https://github.com/idlesauce/ps5-remoteplay-get-pin) | 54 | Get the remote play pairing PIN for offline accounts |
| [urlynn/PSLinkB](https://github.com/urlynn/PSLinkB) | 52 | Push PS5 gameplay to Bilibili live without a capture card |

### 🏆 PSN, Accounts & Smart Home

PSN APIs, trophy data, account tools and Home Assistant integrations.

| Project | Star | Description |
| :--- | ---: | :--- |
| [FunkeyFlo/ps5-mqtt](https://github.com/FunkeyFlo/ps5-mqtt) | 588 | Integrate PS5 with Home Assistant |
| [achievements-app/psn-api](https://github.com/achievements-app/psn-api) | 431 | JavaScript library for PSN trophies, users and games |
| [Tustin/psn-php](https://github.com/Tustin/psn-php) | 374 | PHP wrapper for the PSN API |
| [earthonion/np-fake-signin](https://github.com/earthonion/np-fake-signin) 🪦 | 147 | Fake PSN sign-in state on PS4 / PS5 |
| [kopiro/homebridge-playstation](https://github.com/kopiro/homebridge-playstation) | 119 | Homebridge plugin for PlayStation |
| [MangoScango/ps5-account-tools](https://github.com/MangoScango/ps5-account-tools) | 113 | PS5 account tooling |
| [RavelloH/PSGameSpider](https://github.com/RavelloH/PSGameSpider) | 72 | Crawl the PS Store and build an indexed site |

### 🔧 Hardware, Repair & Accessories

NOR flashing, UART, camera, devkit and console repair tools.

| Project | Star | Description |
| :--- | ---: | :--- |
| [TheCod3rYouTube/PS5NorModifier](https://github.com/TheCod3rYouTube/PS5NorModifier) | 1,083 | Windows app to rewrite the PS5 NOR |
| [Hackinside/PS5_camera_files](https://github.com/Hackinside/PS5_camera_files) | 166 | PS5 camera files |
| [GuillaumeMrNiato/PS5-Devkit-Testkit-Console-Manager](https://github.com/GuillaumeMrNiato/PS5-Devkit-Testkit-Console-Manager) | 146 | Console manager for devkit and testkit units |
| [amoamare/Console-Service-Tool](https://github.com/amoamare/Console-Service-Tool) | 109 | PS5 UART code reader and NOR tool |
| [symbrkrs/ps5-uart](https://github.com/symbrkrs/ps5-uart) | 95 | Interface for PS5 EMC and EFC |
| [andy-man/ps5-wee-tools](https://github.com/andy-man/ps5-wee-tools) | 80 | PS5 NOR manipulation tools |
| [raleighlittles/PlayStation-Camera-Firmware-Loader](https://github.com/raleighlittles/PlayStation-Camera-Firmware-Loader) | 55 | Load custom firmware onto the PS5 camera |
| [drakmor/fan_target](https://github.com/drakmor/fan_target) | 52 | PS5 fan controller |

### 🎛️ DualSense Controller

Drivers, firmware, adaptive triggers and cross-platform tooling for the PS5 pad.

| Project | Star | Description |
| :--- | ---: | :--- |
| [awalol/DS5Dongle](https://github.com/awalol/DS5Dongle) | 2,987 | Turn a Pico 2 W into a DualSense dongle |
| [Paliverse/DualSenseX](https://github.com/Paliverse/DualSenseX) 🆕 | 1,653 | Connect your DualSense Controller, use Adaptive Triggers, Emulate Xbox 360 or DualShock 4 through USB or Bluetooth on PC |
| [JibbSmart/JoyShockMapper](https://github.com/JibbSmart/JoyShockMapper) | 876 | Map gamepads to mouse and keyboard with gyro support |
| [daidr/dualsense-tester](https://github.com/daidr/dualsense-tester) | 586 | Test DualSense and Edge in the browser |
| [HamzaYslmn/Forza-Horizon-DualSense-Python](https://github.com/HamzaYslmn/Forza-Horizon-DualSense-Python) 🆕 | 466 | Forza Horizon DualSense Adaptive Triggers |
| [nowrep/dualsensectl](https://github.com/nowrep/dualsensectl) | 452 | Linux tool for controlling the DualSense |
| [WujekFoliarz/DualSenseY-v2](https://github.com/WujekFoliarz/DualSenseY-v2) | 449 | DualSense companion with adaptive triggers and Xbox emulation |
| [Ohjurot/DualSense-Windows](https://github.com/Ohjurot/DualSense-Windows) | 443 | Windows API for the DualSense |
| [SundayMoments/DS5_Bridge](https://github.com/SundayMoments/DS5_Bridge) | 411 | Wireless DualSense and Edge bridge for Pico 2 W |
| [Denellyne/PCXSense](https://github.com/Denellyne/PCXSense) | 400 | Translate DualSense input into XInput |
| [JibbSmart/JoyShockLibrary](https://github.com/JibbSmart/JoyShockLibrary) | 317 | Read DualSense, DS4 and JoyCon input on PC |
| [ReynArts/ApexSenseBridge](https://github.com/ReynArts/ApexSenseBridge) 🆕 | 228 | Bring native PS5 DualSense adaptive triggers, haptics & touchpad features to Flydigi APEX 4, APEX 5 & APEX 6 Pro on Windows. 215+ games, Standalone + Playnite. |
| [ds4windowsapp/DS4Windows](https://github.com/ds4windowsapp/DS4Windows) | 225 | Gamepad mapper with DualSense support |
| [sqlCRT/ds5dongle-bl618-opensource](https://github.com/sqlCRT/ds5dongle-bl618-opensource) | 218 | DualSense wireless adapter based on BL616 / BL618 |
| [egormanga/SAxense](https://github.com/egormanga/SAxense) | 200 | DualSense haptics over Bluetooth (PoC) |
| [r57zone/DSAdvance](https://github.com/r57zone/DSAdvance) | 196 | Emulate an Xbox controller with DualSense and friends |
| [rodneybakiskan/ps5-esp32](https://github.com/rodneybakiskan/ps5-esp32) | 195 | Use a PS5 controller with an ESP32 |
| [Mxater/DualSenseSupport](https://github.com/Mxater/DualSenseSupport) | 193 | Preliminary DualSense support library |
| [hurryman2212/vds](https://github.com/hurryman2212/vds) | 186 | Virtual USB-to-Bluetooth bridge for DualSense and Edge |
| [flok/pydualsense](https://github.com/flok/pydualsense) | 165 | Control the DualSense from Python |
| [nullkal/UniSense](https://github.com/nullkal/UniSense) 🪦 | 125 | Unity extension for the DualSense |
| [nondebug/dualsense](https://github.com/nondebug/dualsense) | 122 | Technical notes on Sony's DualSense |
| [josealissonbr/DualSenseAT](https://github.com/josealissonbr/DualSenseAT) 🪦 | 118 | Hub app that adds adaptive triggers to more games |
| [BananaWorks07/trigger-control](https://github.com/BananaWorks07/trigger-control) | 94 | Control DualSense triggers on Linux and Windows |
| [MarcelineVPQ/DS5Dongle-OLED-Edition](https://github.com/MarcelineVPQ/DS5Dongle-OLED-Edition) 🆕 | 91 | DS5 Dongle OLED Edition: a Raspberry Pi Pico 2 W that connects a DualSense over Bluetooth while games see a wired one (adaptive triggers, HD haptics, speaker, mic). Optional OLED, desktop app, in-dongle calibration. Fork of awalol/DS5Dongle. |
| [xzn/proton-ds5-haptic](https://github.com/xzn/proton-ds5-haptic) | 85 | Proton patches for DualSense haptics |
| [yesbotics/dualsense-controller-python](https://github.com/yesbotics/dualsense-controller-python) | 84 | DualSense library for Python |
| [tommargar/DualSense4Rockstar](https://github.com/tommargar/DualSense4Rockstar) 🆕 | 81 | Mods for GTA V and RDR 2 to add support for adaptive triggers to the DualSense controller via DSX  |
| [artzox/DS5Dongle-Studio](https://github.com/artzox/DS5Dongle-Studio) | 80 | Wireless haptics for native DualSense games on PC |
| [piereacy/FH-DualSense-Enhanced](https://github.com/piereacy/FH-DualSense-Enhanced) 🆕 | 80 | Forza Horizon DualSense Controller Adaptive Vibration |
| [Paliverse/DualSense-List-of-Firmwares](https://github.com/Paliverse/DualSense-List-of-Firmwares) | 79 | Official DualSense firmware collection |
| [rafaelvaloto/Dualsense-Multiplatform](https://github.com/rafaelvaloto/Dualsense-Multiplatform) | 72 | Cross-platform C++ library for Sony controllers |
| [marcowindt/ds4macos](https://github.com/marcowindt/ds4macos) | 72 | DSU server for DualShock 4 and DualSense on macOS |
| [diegobarbosaa/OmniPad-PS5](https://github.com/diegobarbosaa/OmniPad-PS5) 🆕 | 68 | Universal controller engine & Web Dashboard for PlayStation 5 (FW 7.00 - 13.60) |
| [Mutcholoko/Haptic-Feedback-Linux](https://github.com/Mutcholoko/Haptic-Feedback-Linux) 🪦 | 67 | Guide to DualSense haptics on Linux |
| [kungaa/DS5-Linux-Bridge](https://github.com/kungaa/DS5-Linux-Bridge) | 64 | USB-to-Bluetooth bridge firmware for Raspberry Pi |
| [LikeARealG/ETS2_PS5_DualSense](https://github.com/LikeARealG/ETS2_PS5_DualSense) 🆕 | 64 | Application that give the PS5 controller some life inside Euro Truck Simulator 2 |
| [CyberKomodo/CyberKomodo.DualSense](https://github.com/CyberKomodo/CyberKomodo.DualSense) 🆕 | 59 | DualSense controller integration for Unity with support for USB and Bluetooth. |
| [nsfm/dualsense-ts](https://github.com/nsfm/dualsense-ts) | 58 | TypeScript interface for DualSense and Access |
| [qingwa2009/MyBLEGamepad](https://github.com/qingwa2009/MyBLEGamepad) 🆕 | 58 | 用ESP32自制xbox+switchPro+DualSense 蓝牙手柄（Use ESP32 to create a xbox+SwitchPro+DualSense BLE Gamepad） |
| [HamzaYslmn/esp-ps5](https://github.com/HamzaYslmn/esp-ps5) | 57 | ESP32 library for the DualSense |
| [MaximumFreak/dsz](https://github.com/MaximumFreak/dsz) | 56 | Fast native Windows companion for DualSense |
| [DualSenseClient/DualSenseClient](https://github.com/DualSenseClient/DualSenseClient) | 54 | Unlock the full DualSense experience on Windows and Linux |

### 📺 Native PS5 Apps & UI

Media apps, AI, UI and development resources running on PS5.

| Project | Star | Description |
| :--- | ---: | :--- |
| [cobanov/PS5LM](https://github.com/cobanov/PS5LM) | 749 | Run llama.cpp LLMs natively on a jailbroken PS5 |
| [abhi245y/PS5LM-Plus](https://github.com/abhi245y/PS5LM-Plus) | 484 | Extended build of the PS5 local LLM setup |
| [mikeroyal/Game-Console-Dev-Guide](https://github.com/mikeroyal/Game-Console-Dev-Guide) | 359 | Game development guide covering PS5 and other consoles |
| [ZiZc3/LiveShell](https://github.com/ZiZc3/LiveShell) | 193 | Animated backgrounds for the PS5 home screen |
| [X-F1REBALL-X/HearBridge-PS5](https://github.com/X-F1REBALL-X/HearBridge-PS5) | 187 | Route PS5 game audio to any Bluetooth headset |
| [RafaelNGP/xbox-cloud-gaming-ps5](https://github.com/RafaelNGP/xbox-cloud-gaming-ps5) | 180 | Xbox Cloud Gaming app for PS5 homebrew |
| [Sp9nky/unofficial-stremio-ps5-port](https://github.com/Sp9nky/unofficial-stremio-ps5-port) | 98 | Unofficial Stremio client for PS5 |
| [davidkgriggs/PS5ish](https://github.com/davidkgriggs/PS5ish) | 97 | PS5-style theme for Playnite |
| [ThatGuyKalvin/ProsperoTV](https://github.com/ThatGuyKalvin/ProsperoTV) | 88 | Native IPTV client for PS5 |
| [ZiZc3/VLC](https://github.com/ZiZc3/VLC) | 76 | VLC for PS5 |
| [elripalda/psgfx](https://github.com/elripalda/psgfx) | 70 | Custom icons and backgrounds for PS5 games and apps |
| [quatrixone/ProsperoAI](https://github.com/quatrixone/ProsperoAI) | 67 | LLM chat app running on the PS5 GPU |
| [SvenGDK/SharpProspero](https://github.com/SvenGDK/SharpProspero) | 60 | C# SDK and toolchain for PS5 homebrew |
| [VivaLaVent/kodi-ps5](https://github.com/VivaLaVent/kodi-ps5) | 55 | Unofficial Kodi 22 port for PS5 |
| [imtumbleweed/ps5.js](https://github.com/imtumbleweed/ps5.js) | 53 | PS5 UI recreated in vanilla JS and CSS |

### 🛒 Stock Bots (Historical)

Launch-era purchase bots, mostly unmaintained.

| Project | Star | Description |
| :--- | ---: | :--- |
| [camtheperson/get-my-ps5](https://github.com/camtheperson/get-my-ps5) | 353 | CLI tool to secure a PS5 (obsolete) |
| [dkkocab/WebSiteBot_PS5](https://github.com/dkkocab/WebSiteBot_PS5) | 347 | Walmart purchase bot (obsolete) |
| [eg9y/PS5bot](https://github.com/eg9y/PS5bot) 🪦 | 236 | Stock monitoring and auto-purchase bot (obsolete) |

## Inclusion criteria

- The project must be directly about PS5: the console itself (firmware, jailbreak, homebrew, hardware), the PS5 ecosystem (DualSense, Remote Play, PSN), or PS5 game content and patches.
- More than 50 stars and publicly accessible.
- Projects that merely mention PS5 in their README (generic proxies, generic emulators, generic shopping bots) are excluded.
- Plain forks and rebrands of an already listed project are excluded unless they are clearly better maintained.
- Launch-era stock bots are kept in a separate section for historical reference.
- Entries marked 🆕 were harvested and classified automatically; a pull request correcting their section or wording is always welcome.

## Disclaimer

This list is an index only and hosts no game content. Jailbreaking or installing unofficial software may violate Sony's terms of service and void your warranty or get your console banned. Proceed at your own risk, only on hardware you own, and follow local law.

## Contributing

Missing a project, or one has dropped below the star threshold? Open an issue or PR:

1. Add an entry to [data/projects.json](data/projects.json) with its category and a one-line description (`zh` + `en`).
2. Run `node scripts/update.mjs` to regenerate both READMEs.
3. Open the PR.

## Updating

A [GitHub Action](.github/workflows/update.yml) runs both scripts every 24 hours and commits the result, so the list stays current on its own. To do it locally:

```bash
node scripts/collect.mjs  # collect new projects and auto-classify them
node scripts/update.mjs   # refresh stars and both READMEs
```

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
