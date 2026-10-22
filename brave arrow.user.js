
CodeSettingsValues (68 B)?
Brave Arrow Scroll - Break Out of Inputs
Use another editor?
SaveSave & CloseClose

1
// ==UserScript==
2
// @name         Brave Arrow Scroll - Break Out of Inputs
3
// @namespace    http://violentmonkey.net/
4
// @version      0.4
5
// @description  Arrow-key scrolling enhancement for keyboard control
6
// @match        *://*/*
7
// @run-at       document-start
8
// @grant        GM_registerMenuCommand
9
// @grant        GM_getValue
10
// @grant        GM_setValue
11
// @author Stirling_M4tt.
12
// ==/UserScript==
13
​
14
(function () {
15
    'use strict';
16
​
17
    const VERSION = "0.4";
18
    const VERSION_DATE = "2026-10-20";
19
    const SCRIPT_NAME = "Brave Arrow Scroll - Break Out of Inputs";
20
    const SCROLL_AMOUNT = 20;
21
​
22
    let countedThisPage = false;
23
​
24
    // Show browsing statistics
25
    GM_registerMenuCommand("📊 Show My Browsing Stats", function () {
26
        const saves = GM_getValue("unfocus_saves", 0);
27
        const pages = GM_getValue("pages_scrolled", 0);
28
​
29
        alert(
30
            `📊 Browsing Statistics\n\n` +
31
            `📄 Pages scrolled: ${pages}\n` +
32
            `🔓 Inputs unfocused: ${saves}`
33
        );
34
    });
35
​
36
    // Reset browsing statistics
37
    GM_registerMenuCommand("🗑️ Reset Browsing Stats", function () {
38
        const confirmReset = confirm(
39
            "Reset all browsing statistics?\n\n" +
40
            "Pages scrolled and inputs unfocused will be reset to zero."
41
        );
42
​
43
        if (!confirmReset) return;
44
​
45
        GM_setValue("unfocus_saves", 0);
46
        GM_setValue("pages_scrolled", 0);
47
​
48
        alert("✅ Browsing statistics have been reset!");
49
    });
50
​
51
    // About this script
52
    GM_registerMenuCommand("ℹ️ About", function () {
53
        alert(
54
            `${SCRIPT_NAME}\n\n` +
