// ==UserScript==
// @name         B站W键网页全屏-Fix BewlyCat fullscreen key
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  让W键用于网页全屏，而不是被B站天天改导致BewlyCat只能干瞪眼
// @match        *://*.bilibili.com/*
// @grant        none
// @license      GPL 3.0
// @updateURL   https://raw.githubusercontent.com/你的用户名/仓库名/分支/脚本名.user.js
// @downloadURL https://raw.githubusercontent.com/你的用户名/仓库名/分支/脚本名.user.js
// @author       你的名字
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// ==/UserScript==

(function() {
    'use strict';

    const TARGET_KEY = 'w';

    function isInputActive(element) {
        if (!element) return false;
        const tag = element.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || element.isContentEditable) return true;
        return false;
    }

    function triggerWebFullscreen() {
        const btn = document.querySelector('.bpx-player-ctrl-web');
        if (btn && !btn.disabled) {
            btn.click();
            return true;
        }
        return false;
    }

    document.addEventListener('keydown', function(event) {
        if (event.key.toLowerCase() !== TARGET_KEY) return;
        if (isInputActive(document.activeElement)) return;

        event.stopPropagation();
        event.stopImmediatePropagation();
        event.preventDefault();
        triggerWebFullscreen();
    }, true);
})();