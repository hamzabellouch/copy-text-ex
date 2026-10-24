# Copy Text

A modern, lightweight, and powerful browser extension designed to bypass copy restrictions and enable text selection, context menus (right-click), and clipboard actions across all protected websites.

<div align="center">
  <img src="chromium/icons/icon128.png" width="128" alt="Copy Text Logo"/>
</div>

Compatible with all major browsers: **Chrome, Brave, Edge, Opera, Vivaldi (Chromium-based)** and **Mozilla Firefox**.



### <a name="Features"></a> ⭐ Features

- **Universal Copy & Selection Unblocker:** Re-enables text selection, cut, copy, and context menu (right-click) on websites with copy protection.
- **Event Interception at Root:** Captures and halts restrictive JavaScript events (`copy`, `cut`, `contextmenu`, `selectstart`, `dragstart`) before webpage scripts can prevent them.
- **Keyboard Shortcuts Restoration:** Guarantees standard shortcuts (`Ctrl+C`, `Ctrl+X`, `Ctrl+A` or `Cmd+C`, `Cmd+X`, `Cmd+A` on macOS) work reliably everywhere.
- **CSS Selection Override:** Dynamically injects high-priority CSS rules (`user-select: text !important`) to counter CSS-based selection blocking across all elements.
- **Inline Attribute Purge:** Automatically strips restrictive inline HTML attributes like `oncopy="return false"`, `oncontextmenu`, and `onselectstart`.
- **Dynamic Content & SPA Support:** Actively observes and sanitizes dynamically loaded elements and single-page applications (SPAs) at regular intervals.
- **Full Iframe Coverage:** Runs across all nested frames and iframes (`all_frames: true`) for complete webpage coverage.
- **Main World Execution:** Runs directly in the page's main execution context (`world: "MAIN"`) to effectively override page-level event handlers.
- **Zero Overhead & Lightweight:** Pure vanilla JavaScript execution with no external dependencies or background battery drain.



### <a name="RepositoryStructure"></a> 📁 Repository Structure

```text

├── chromium/          # Extension build directory for Chrome, Brave, Edge, Opera, Vivaldi, etc.
│   ├── icons/         # Extension toolbar and store icons (16px, 32px, 48px, 128px)
│   ├── content.js     # Main script enabling text selection and unblocking copy events
│   └── manifest.json  # Chromium Manifest V3 configuration
│
├── firefox/           # Extension build directory for Mozilla Firefox
│   ├── icons/         # Extension toolbar and store icons (16px, 32px, 48px, 128px)
│   ├── content.js     # Main script enabling text selection and unblocking copy events
│   └── manifest.json  # Firefox Manifest V3 configuration (with Gecko ID)
│
├── .gitignore         # Prevents tracking of OS metadata, IDE configurations, etc.
└── README.md          # Project documentation and usage guide

```



### <a name="InstallationUsage"></a> ⚙️ Installation & Usage

### <a name="ForChromiumBasedBrowsers"></a> 🌐 For Chromium-Based Browsers (Chrome, Brave, Edge, Opera, Vivaldi)

1. Open your Chromium-based browser and navigate to:
   - **Google Chrome / Brave / Opera / Vivaldi:** `chrome://extensions/`
   - **Microsoft Edge:** `edge://extensions/`

2. Enable **Developer mode** (toggle in the top-right corner).

3. Click **Load unpacked**.

4. Select the following directory:

```text
chromium/
├── icons/
├── content.js
└── manifest.json
```

5. The extension will be installed and active.
6. **Reload the page** you want to copy text or select content from.

### <a name="ForMozillaFirefox"></a> 🦊 For Mozilla Firefox

1. Open **Mozilla Firefox** (version 128 or later) and navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on...**.
3. Select the following file:

```text
firefox/
└── manifest.json
```

4. The extension is now loaded as a temporary add-on.
5. **Reload the page** you want to copy text or select content from.

> [!NOTE]
> Temporary add-ons in Firefox are automatically removed when the browser is closed. For permanent installation, the add-on must be signed via [Mozilla Add-ons (AMO)](https://addons.mozilla.org).



### <a name="Privacy & Safety"></a> 🛡️ Privacy & Safety

- **100% Local Execution:** Everything runs locally inside your browser. No external API calls, servers, or third-party connections.
- **Zero Data Collection:** The extension never monitors, records, stores, or transmits your clipboard content or browsing history.
- **Minimal Footprint:** No background service workers or persistent background scripts—only an efficient content script operating on the current page.



> [!WARNING]
> There is always a possibility of error, so we assume no responsibility for any inaccuracies.


### <a name="Copyright©2026"></a> Copyright © 2026

Thank you for engaging with us. For inquiries or collaboration, please contact:  
hamzabellouchcontact@gmail.com

Stay connected and follow us on:  
[WhatsApp](https://whatsapp.com/channel/0029Vb7MArw0LKZMpjjqOk2P) | [Facebook](https://facebook.com/hamzabellouch1) | [Instagram](https://instagram.com/hamzabellouch0) | [Twitter](https://twitter.com/hamzabellouch0) | [Telegram](https://t.me/hammzabellouch) | [LinkedIn](https://www.linkedin.com/in/hamzabellouch)
