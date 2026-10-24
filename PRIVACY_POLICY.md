# Privacy Policy - Copy Text

Last Updated: October 24, 2026


### 0. Rule 0: Disclaimer on Modified Builds, External Packages & Unofficial Forks:

- **Original Source Integrity:** This privacy policy, safety guarantees, and security features apply strictly and exclusively to the official, unmodified extension binaries and source code distributed directly through this official repository ([hamzabellouch/copy-text-ex](https://github.com/hamzabellouch/copy-text-ex)) and its verified official releases.
- **Zero Liability for Modified / External Builds:** We (the publisher and maintainer) assume **no responsibility or liability whatsoever** for any modified extensions, third-party forks, repackaged `.crx` / `.xpi` / `.zip` archives, unofficial distribution channels, or altered projects not originating directly from this official repository. Any installation or use of modified, tampered, or third-party builds is entirely at your own risk, and the publisher assumes no responsibility for any consequences, damages, security compromises, or data breaches that may occur.


### 1. Executive Summary & Overview:

Copy Text is a lightweight browser extension designed to bypass website copy restrictions and restore native text selection, context menus (right-click), and keyboard shortcuts across protected web pages.

#### Core Privacy Commitment:
Copy Text operates **100% locally on your device**. We do **not** collect, store, transmit, share, or sell any personal data, clipboard contents, keystrokes, browsing history, device identifiers, or URLs to external servers, analytics providers, or third parties.


### 2. Information Processed On-Device:

To deliver its core unblocking functionality, Copy Text processes the following operations **strictly locally within your browser**:

- **DOM Event Propagation:** Intercepts restrictive JavaScript events (`copy`, `cut`, `contextmenu`, `selectstart`, `dragstart`) and keyboard shortcuts (`Ctrl/Cmd + C`, `X`, `A`) in real-time to allow native browser copy and selection behavior.
- **No Clipboard Reading:** Copy Text **never reads, inspects, or logs** the text or data you copy to your clipboard.
- **CSS Style Injection:** Dynamically applies a local stylesheet (`user-select: text !important`) to web pages to override CSS-based selection blocking.
- **DOM Sanitization:** Scans and removes inline restrictive event attributes (e.g., `oncopy="return false"`) from HTML elements locally in memory.
- **No Persistent Storage:** The extension does not store browsing sessions, visited URLs, or copied data in browser storage (`chrome.storage` / `localStorage`).


### 3. Permissions Used & Their Purposes:

Copy Text adheres to the principle of least privilege and utilizes only the minimal permissions required:

**A. Content Scripts & Host Permissions (`<all_urls>`)**
- **Purpose:** Enables the extension to inject `content.js` across web pages where users want to re-enable text copying and right-click menus.
- **Scope:** Runs locally in the web page's execution environment (`world: "MAIN"` and `all_frames: true`) to effectively neutralize page-level blocking scripts. No network requests are made, and no webpage content is sent outside the browser.

**B. Browser Specific Settings (Firefox Gecko ID: `copy-text@tkno`)**
- **Purpose:** Required by Mozilla Firefox for extension identification and Manifest V3 compatibility (Firefox 128+).
- **Scope:** Used purely for browser add-on management and verification.


### 4. Safety & Content Handling Policy:

Copy Text complies strictly with browser security policies:

- **Strict Local Isolation:** The extension executes exclusively within the current web page tab. No remote scripts (`eval`, external CDN scripts) are ever loaded or executed.
- **Zero Data Exfiltration:** The extension has no network client capabilities and initiates zero HTTP/HTTPS requests.
- **Non-Destructive Execution:** The script only unblocks selection and event handlers; it does not alter page logic, form submissions, or sensitive user inputs.


### 5. Data Sharing, Analytics & Advertising:

- **No Data Sharing:** Zero user data, clipboard text, or webpage information leaves your browser.
- **No Third-Party Analytics / Telemetry:** Copy Text contains no tracking SDKs, Google Analytics, telemetry beacons, or external reporting tools.
- **No Advertisements:** Copy Text does not inject, display, or monetize advertisements of any kind.


### 6. Data Retention & Lifecycle:

- **Zero Data Retention:** Because Copy Text does not collect, record, or store any personal data or clipboard contents, there is no user data retained on any server or local storage.
- **Immediate In-Memory Cleanup:** DOM event interception and inline attribute removals happen on-the-fly and are cleared from RAM when the browser tab is closed or navigated away.
- **Complete Removal:** Uninstalling or disabling Copy Text immediately removes all extension files and ceases all script execution.


### 7. Managing Permissions & User Rights:

You maintain full control over Copy Text. You may disable or remove the extension at any time via your browser settings:

- **Chromium Browsers (Chrome, Edge, Brave, Opera, Vivaldi):** Navigate to `chrome://extensions/` (or `edge://extensions/`), locate **Copy Text**, and toggle it off or click **Remove**.
- **Mozilla Firefox:** Navigate to `about:addons` > **Extensions**, locate **Copy Text**, and choose **Disable** or **Remove**.


### 8. Contact & Support:

If you have any questions, suggestions, or concerns regarding this Privacy Policy or the security of Copy Text, please contact:  
**Email:** hamzabellouchcontact@gmail.com  
**GitHub:** [https://github.com/hamzabellouch/copy-text-ex](https://github.com/hamzabellouch/copy-text-ex)


-------------------------------------------



# سياسة الخصوصية - Copy Text

آخر تحديث: ٢٤ أكتوبر ٢٠٢٦


### ٠. القاعدة رقم ٠: إخلاء المسؤولية عن الإضافات المعدلة والحزم الخارجية والمشاريع المشتقة:

* **سلامة المصدر الأصلي:** تنطبق سياسة الخصوصية، وضمانات الأمان، والميزات المذكورة في هذه الوثيقة حصرياً وصراحةً على الإصدارات الرسمية غير المعدلة من الإضافة والشفرة المصدرية المنشورة مباشرة عبر هذا المستودع الأصلي المعتمد ([hamzabellouch/copy-text-ex](https://github.com/hamzabellouch/copy-text-ex)) وصفحة إصداراته الرسمية فقط.
* **عدم تحمل المسؤولية عن النسخ المعدلة أو الخارجية:** نحن (الناشر والمطور) **لا نتحمل أي مسؤولية قانونية أو أمنية أو تقنية** عن تثبيت أو استخدام أي إضافات معدلة، أو حزم خارجية (`.crx` / `.xpi` / `.zip`)، أو نسخ مُعاد تجميعها، أو مشاريع مشتقة ومعدلة لا تنتمي لهذا المستودع الأصلي. كل ما ينتج عن استخدام أو تثبيت نسخ خارجية أو معدلة (من فقدان بيانات، أو ثغرات أمنية، أو برمجيات خبيثة، أو أي أضرار ناجمة) يقع بالكامل على عاتق المستخدم وحده دون أدنى مسؤولية على الناشر.


### ١. الملخص التنفيذي والنظرة العامة:

إضافة Copy Text هي إضافة متصفح خفيفة وسريعة، صُممت لمساعدة المستخدمين في تجاوز قيود منع النسخ المفروضة على بعض المواقع الإلكترونية، وإعادة تفعيل ميزات تحديد النصوص، وقائمة الزر الأيمن للفأرة (Context Menu)، واختصارات لوحة المفاتيح الأساسية.

#### الالتزام الأساسي بالخصوصية:
تعمل إضافة Copy Text **بنسبة ١٠٠٪ محلياً داخل متصفحك**. نحن **لا نجمع**، ولا نخزن، ولا ننقل، ولا نشارك، ولا نبيع أي بيانات شخصية، أو محتويات الحافظة (Clipboard)، أو ضغطات المفاتيح، أو سجل التصفح، أو معرفات الأجهزة، أو عناوين المواقع (URLs) إلى أي خوادم تحليلات خارجية أو أطراف ثالثة.


### ٢. المعلومات والعمليات التي تتم معالجتها محلياً:

لأداء وظيفتها الأساسية المتمثلة في فك قيود النسخ والتحديد، تقوم إضافة Copy Text بالعمليات التالية **محلياً وحصرياً داخل متصفحك**:

* **إدارة أحداث الـ DOM:** اعتراض أحداث JavaScript المانعة للتحديد والنسخ (`copy`، `cut`، `contextmenu`، `selectstart`، `dragstart`) واختصارات النسخ (`Ctrl/Cmd + C`، `X`، `A`) في الوقت الفعلي للسماح لمتصفحك بتنفيذ السلوك الطبيعي.
* **عدم قراءة الحافظة مطلقا:** إضافة Copy Text **لا تقرأ، ولا تفحص، ولا تسجل** أي نصوص أو بيانات تقوم بنسخها إلى حافظة جهازك.
* **حقن أنماط CSS:** تطبيق ملف تنسيق محلي فوري (`user-select: text !important`) على صفحات الويب لإلغاء قيود CSS التي تعطل تحديد النصوص.
* **تنظيف عناصر الـ DOM:** فحص وإزالة سمات الأحداث المضمنة المعطلة للنسخ (مثل `oncopy="return false"`) من عناصر HTML داخل الذاكرة المؤقتة.
* **عدم وجود تخزين دائم:** لا تقوم الإضافة بتخزين أي سجلات تصفح أو صفحات تمت زيارتها في ذاكرة المتصفح الدائمة (`chrome.storage` أو `localStorage`).


### ٣. الأذونات المستخدمة وأغراضها:

تلتزم Copy Text بمبدأ الحد الأدنى من الصلاحيات ولا تطلب إلا الأذونات الضرورية لعملها:

**أ. سكربتات المحتوى وأذونات النطاقات (`<all_urls>`)**
* **الغرض:** تمكين الإضافة من تشغيل سكربت `content.js` عبر صفحات الويب التي يرغب المستخدم في تفعيل النسخ وتحديد النصوص فيها.
* **النطاق:** يعمل السكربت محلياً داخل سياق تنفيذ الصفحة (`world: "MAIN"` و `all_frames: true`) لتعطيل سكربتات الحظر المضمنة بالموقع. لا يتم إجراء أي اتصالات شبكية، ولا تخرج أي بيانات من المتصفح.

**ب. إعدادات فايرفوكس الخاصة (Gecko ID: `copy-text@tkno`)**
* **الغرض:** مطلوب من قبل متصفح Mozilla Firefox لتعريف الإضافة وضمان توافقيتها مع مواصفات Manifest V3 (إصدار 128 فما فوق).
* **النطاق:** يُستخدم حصرياً لإدارة وتثبيت الإضافة ضمن المتصفح.


### ٤. سياسة الأمان والتعامل مع المحتوى:

تلتزم إضافة Copy Text بالمعايير الصارمة لأمان المتصفحات:

* **العزل المحلي التام:** تعمل الإضافة حصرياً داخل تبويب صفحة الويب الحالية. لا يتم تنزيل أو تنفيذ أي سكربتات أو أكواد برمجية خارجية (`eval` أو روابط CDN خارجية).
* **انعدام تسريب البيانات:** لا تحتوي الإضافة على أي دوال أو إمكانيات اتصال شبكي، ولا تقوم بأي طلبات HTTP/HTTPS خارجية على الإطلاق.
* **تأثير آمن وغير مدمر:** تقتصر وظيفة الإضافة على فك حظر التحديد والأحداث فقط، ولا تؤثر على منطق عمل المواقع أو النماذج أو مدخلات المستخدم الحساسة.


### ٥. مشاركة البيانات والتحليلات والإعلانات:

* **عدم مشاركة البيانات:** لا تغادر أي بيانات أو نصوص أو معلومات خاصة بالتصفح جهازك.
* **عدم وجود تحليلات أو تتبع من جهات خارجية:** لا تحتوي إضافة Copy Text على أي مكتبات تتبع، أو Google Analytics، أو خدمات Telemetry، أو أدوات تقارير خارجية.
* **خالية تماماً من الإعلانات:** لا تعرض الإضافة أو تحقن أو تروّج لأي نوع من الإعلانات التجارية أو السلوكية.


### ٦. الاحتفاظ بالبيانات ودورة حياتها:

* **عدم الاحتفاظ بالبيانات:** نظراً لأن إضافة Copy Text لا تجمع ولا تسجل أي بيانات شخصية أو محتويات للحافظة، فإنه لا توجد أي بيانات للمستخدم يتم الاحتفاظ بها على أي خوادم أو مساحات تخزين محلية.
* **مسح فوري من الذاكرة:** تتم عمليات اعتراض الأحداث وتنظيف السمات لحظياً، ويتم مسح كل شيء من الذاكرة المؤقتة (RAM) فور إغلاق التبويب أو مغادرة الصفحة.
* **الحذف الكامل:** يؤدي تعطيل أو إلغاء تثبيت إضافة Copy Text إلى إزالة كافة ملفات الإضافة وتوقف جميع وظائفها فوراً وبشكل دائم.


### ٧. إدارة الأذونات وحقوق المستخدم:

تحتفظ بالتحكم الكامل في إضافة Copy Text، ويمكنك تعطيلها أو إزالتها في أي وقت من خلال إعدادات المتصفح:

* **متصفحات كروميوم (Chrome، Edge، Brave، Opera، Vivaldi):** توجه إلى `chrome://extensions/` (أو `edge://extensions/`)، ثم ابحث عن **Copy Text** وقم بإيقاف تفعيلها أو الضغط على **إزالة (Remove)**.
* **متصفح موزيلا فايرفوكس (Firefox):** توجه إلى `about:addons` ثم قسم **الملحقات (Extensions)**، وابحث عن **Copy Text** واختر **تعطيل (Disable)** أو **إزالة (Remove)**.


### ٨. التواصل والدعم:

إذا كانت لديك أي أسئلة أو استفسارات أو ملاحظات بخصوص سياسة الخصوصية هذه أو أمان إضافة Copy Text، يُرجى التواصل معنا عبر:  
**البريد الإلكتروني:** hamzabellouchcontact@gmail.com  
**مستودع GitHub:** [https://github.com/hamzabellouch/copy-text-ex](https://github.com/hamzabellouch/copy-text-ex)
