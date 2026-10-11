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
