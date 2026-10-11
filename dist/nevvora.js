(function (nv) {
  let timer, element;
  nv.toast = function (message, duration = 3000) {
    if (!element) { element = document.createElement('div'); element.className = 'nv-toast'; element.setAttribute('role', 'status'); document.body.append(element); }
    element.textContent = message; element.hidden = false;
    clearTimeout(timer); timer = setTimeout(() => element.hidden = true, duration);
  };
})(window.Nevvora = window.Nevvora || {});

(function (nv) {
  nv.openModal = function (target) { const dialog = typeof target === 'string' ? document.querySelector(target) : target; if (dialog && !dialog.open) dialog.showModal(); };
  nv.closeModal = function (target) { const dialog = typeof target === 'string' ? document.querySelector(target) : target; if (dialog && dialog.open) dialog.close(); };
})(window.Nevvora = window.Nevvora || {});

(function (nv) {
  nv.initTabs = function (root = document) {
    root.querySelectorAll('[data-nv-tabs]').forEach(group => {
      if (group.dataset.nvReady) return;
      group.dataset.nvReady = 'true';
      const tabs = [...group.querySelectorAll('[role="tab"]')];
      function activate(tab) { tabs.forEach(t => { const active = t === tab; t.setAttribute('aria-selected', String(active)); t.tabIndex = active ? 0 : -1; const panel = document.getElementById(t.getAttribute('aria-controls')); if (panel) panel.hidden = !active; }); }
      tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => activate(tab));
        tab.addEventListener('keydown', e => {
          const next = {ArrowRight:(i+1)%tabs.length, ArrowLeft:(i+tabs.length-1)%tabs.length, Home:0, End:tabs.length-1}[e.key];
          if (next !== undefined) { e.preventDefault(); activate(tabs[next]); tabs[next].focus(); }
        });
      });
      if (tabs.length) activate(tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0]);
    });
  };
})(window.Nevvora = window.Nevvora || {});

(function (nv) {
  nv.initDropdowns = function (root = document) {
    root.querySelectorAll('[data-nv-dropdown]').forEach(group => {
      if (group.dataset.nvReady) return;
      group.dataset.nvReady = 'true';
      const trigger = group.querySelector('[aria-controls]');
      const panel = trigger && document.getElementById(trigger.getAttribute('aria-controls'));
      if (!panel) return;
      function toggle(open) { panel.hidden = !open; trigger.setAttribute('aria-expanded', String(open)); }
      toggle(false);
      trigger.addEventListener('click', () => toggle(panel.hidden));
      document.addEventListener('click', e => { if (!group.contains(e.target)) toggle(false); });
      group.addEventListener('keydown', e => { if (e.key === 'Escape') { toggle(false); trigger.focus(); } });
    });
  };
})(window.Nevvora = window.Nevvora || {});

/* Carregue os componentes antes deste arquivo; dist/nevvora.js já os inclui. */
(function (nv) {
  nv.init = function (root = document) { nv.initTabs(root); nv.initDropdowns(root); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => nv.init()); else nv.init();
})(window.Nevvora = window.Nevvora || {});
