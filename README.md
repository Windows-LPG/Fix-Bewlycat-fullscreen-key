# Fix BewlyCat Fullscreen Key

修复B站偷偷修改`W` 键功能导致BwelyCat无法使用W键网页全屏的问题

## 安装

1. 安装 Tampermonkey 浏览器扩展
2. 点击 [此处](https://raw.githubusercontent.com/Windows-LPG/Fix-Bewlycat-fullscreen-key/main/fix bewlycat fullscreen key.js) 安装脚本
3. 启用扩展，刷新 B 站视频页面，按 `W` 键即可进入网页全屏

## 原理

通过直接禁用BewlyCat和b站自带的快捷键（仅W键），自己写了一遍全屏功能解决
脚本在捕获阶段拦截 `W` 键事件，阻止其被 B 站或 BewlyCat 处理，并主动触发网页全屏按钮

## 协议

GPL v3
