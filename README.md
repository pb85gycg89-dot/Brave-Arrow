Brave Arrow Scroll — Break Out of Inputs
Version: 0.4 Version Date: 2026-10-20 Platform: Brave Browser Script Manager: Violentmonkey License: MIT

Overview
Take control of webpage scrolling with your keyboard.

Brave Arrow Scroll lets you use the Up and Down arrow keys to scroll webpages without getting stuck in text fields, search boxes, or other input elements.

The script removes focus from supported input elements when you press an arrow key, allowing you to return to scrolling without manually clicking elsewhere on the page.

It also includes built-in browsing statistics and a convenient menu for managing the script.

Features
⌨️ Arrow-Key Scrolling
Press Down to scroll down.
Press Up to scroll up.
Scrolls in small, configurable increments.
Uses a default scroll amount of 20 pixels.
🔓 Break Out of Input Boxes
Automatically removes focus from supported input elements.
Prevents arrow keys from moving the text cursor instead of scrolling.
Handles text inputs, textareas, dropdowns, and editable content.
Intercepts arrow-key events before most webpage keyboard handlers.
📊 Browsing Statistics
Track how you use the script with built-in statistics.

Pages scrolled: Counts each page once when you first use the arrow keys.
Inputs unfocused: Counts how many times the script removes focus from an input element.
Statistics are saved and persist across page reloads and browser restarts.

🗑️ Reset Statistics
Reset your accumulated statistics whenever you want.

The script asks for confirmation before clearing the counters.

ℹ️ About Menu
View the script's name, version, release date, and description directly from the Violentmonkey menu.

Installation
Install the Violentmonkey extension in Brave.
Open Violentmonkey and create a new userscript.
Replace the editor contents with the script code.
Save the script.
Open or refresh a webpage to start using it.
How to Use
Open a webpage in Brave.
Press the Up or Down arrow key.
The script removes focus from a supported input element, if necessary, and scrolls the page.
Continue pressing the arrow keys to navigate the page.
Script Menu
Open the Violentmonkey extension menu to access these commands:

Show My Browsing Stats — View your saved statistics.
Reset Browsing Stats — Reset the statistics to zero.
About — View the script's version information.
Configuration
You can customise the scrolling distance by editing the following line in the script:

const SCROLL_AMOUNT = 20;

Examples:

10 — Smaller scrolling increments.
20 — Default scrolling distance.
40 — Larger scrolling increments.
80 — Faster page navigation with larger movements.
Compatibility
Designed for Brave Browser with Violentmonkey.

The script applies to webpages matching its userscript URL rules. Browser-internal pages and certain protected pages may not permit userscripts to run.

Some websites use nested scrolling panels or custom keyboard controls. Behaviour may vary depending on the webpage.

Version History
Version 0.4 — 2026-10-20
Added browsing statistics.
Added a command to reset statistics.
Added an About menu displaying the script name, version, and date.
Counts each page only once when arrow-key scrolling is first used.
Retains the input-unfocusing and keyboard-scrolling functionality.
Privacy
The script stores its statistics using Violentmonkey's local userscript storage.

It does not intentionally send browsing statistics to an external server.

Feedback and Improvements
Potential future improvements include:

Scrolling nested panels under the mouse pointer.
Configurable scrolling speed.
Optional accelerated scrolling.
Additional statistics and customisation options.
