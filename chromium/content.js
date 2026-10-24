(() => {
  // الأحداث التي تستخدمها المواقع لمنع النسخ
  const events = ['copy', 'cut', 'contextmenu', 'selectstart', 'dragstart'];

  // نوقف وصول هذه الأحداث إلى سكربتات الموقع قبل أن تمنعها
  events.forEach(type => {
    window.addEventListener(type, e => e.stopImmediatePropagation(), true);
  });

  // اختصارات لوحة المفاتيح: Ctrl/Cmd + C, X, A
  window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && ['c', 'x', 'a'].includes(e.key.toLowerCase())) {
      e.stopImmediatePropagation();
    }
  }, true);

  // CSS يلغي منع التحديد
  const style = document.createElement('style');
  style.textContent = `
    *, *::before, *::after {
      -webkit-user-select: text !important;
      user-select: text !important;
      -webkit-touch-callout: default !important;
    }
  `;
  const addStyle = () => (document.head || document.documentElement).appendChild(style);
  if (document.documentElement) addStyle();
  else document.addEventListener('DOMContentLoaded', addStyle);

  // إزالة المعالجات المضمنة مثل oncopy="return false"
  const attrs = ['oncopy', 'oncut', 'oncontextmenu', 'onselectstart', 'ondragstart', 'onmousedown'];
  const clean = root => {
    if (!root || !root.querySelectorAll) return;
    const nodes = [root, ...root.querySelectorAll('*')];
    nodes.forEach(n => attrs.forEach(a => {
      if (n.hasAttribute && n.hasAttribute(a)) n.removeAttribute(a);
      try { if (n[a]) n[a] = null; } catch (_) {}
    }));
  };
  const run = () => {
    clean(document);
    clean(document.body);
    attrs.forEach(a => { try { document[a] = null; window[a] = null; } catch (_) {} });
  };
  document.addEventListener('DOMContentLoaded', run);
  window.addEventListener('load', run);
  setInterval(run, 2000);
})();
