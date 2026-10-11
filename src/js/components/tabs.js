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
