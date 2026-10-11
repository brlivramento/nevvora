(function (nv) {
  nv.openModal = function (target) { const dialog = typeof target === 'string' ? document.querySelector(target) : target; if (dialog && !dialog.open) dialog.showModal(); };
  nv.closeModal = function (target) { const dialog = typeof target === 'string' ? document.querySelector(target) : target; if (dialog && dialog.open) dialog.close(); };
})(window.Nevvora = window.Nevvora || {});
