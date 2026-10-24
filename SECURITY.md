# Security Policy

## Supported Versions

The following versions of **Copy Text** are currently supported with security and stability updates.

| Version | Supported |
| -------- | --------- |
| 1.0.x (latest release) | ✅ |
| < 1.0.0 | ❌ |

---

## Reporting a Vulnerability

If you discover a security vulnerability, privacy issue, or behavior that could negatively impact users or the extension, please report it responsibly.

### Before Reporting

Please ensure that:

- The issue is reproducible.
- You are using the latest supported version of **Copy Text**.
- The issue is not caused by modified builds, unsupported browser forks, or conflicting third-party extensions.

### How to Report

You can report vulnerabilities through:

- **GitHub Issues:** [hamzabellouch/copy-text-ex/issues](https://github.com/hamzabellouch/copy-text-ex/issues) (for general non-sensitive bugs or security queries)
- **Email Contact:** `hamzabellouchcontact@gmail.com` (for sensitive vulnerabilities, security disclosures, or exploit details)

When submitting a report, please include:

- Browser name and version (e.g., Chrome 130, Firefox 132, Edge 130)
- Operating system and version (e.g., Windows 11, macOS Sequoia, Ubuntu 24.04)
- **Copy Text** version (e.g., v1.0.0)
- Steps to reproduce the issue
- Target webpage URL or sample HTML snippet (if relevant)
- Screenshots, logs, or console error messages (if available)
- A clear description of the potential security impact

### Response Policy

Security reports are reviewed as quickly as possible.

If a report is confirmed:

- The vulnerability will be investigated and patched promptly.
- A fix will be included in the next update release.
- Credit may be given to the reporter upon request.

If a report cannot be reproduced, lacks sufficient information, or is determined not to be a security issue, it will be closed with a clear explanation.

---

## Security & Architecture Notes

**Copy Text** runs locally within your browser and is designed with strict security principles:

- **Local Execution:** All script logic runs locally on the client side. No remote code execution (`eval`, external script injection) is used, fully complying with Manifest V3 security standards.
- **Zero Data Interception:** The extension does not read, intercept, store, or transmit your clipboard content, text selections, form inputs, or browsing history.
- **Event Unblocking Scope:** Event propagation stoppage (`e.stopImmediatePropagation()`) is applied strictly to copy, cut, context menu, and selection events (`copy`, `cut`, `contextmenu`, `selectstart`, `dragstart`, and `Ctrl/Cmd + C/X/A`) to restore native browser capabilities without interfering with unrelated web functionality.
- **Safe DOM Cleanup:** Injected styles and DOM attribute cleanups (`user-select: text !important`, removal of inline `oncopy="return false"`) are lightweight, non-destructive, and strictly confined to selection unblocking.
- **No Background Telemetry:** The extension contains zero background workers, analytics trackers, telemetry beacons, or external network requests.

Users are encouraged to:

- Keep **Copy Text** updated to the latest release.
- Install the extension only from the official repository ([hamzabellouch/copy-text-ex](https://github.com/hamzabellouch/copy-text-ex)) or verified store listings.
- Avoid installing modified, repackaged, or unofficial third-party builds.
- Report any unexpected behavior that could affect security or privacy.

Security and user privacy are foundational priorities for this project.
