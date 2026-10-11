/* Carregue os componentes antes deste arquivo; dist/nevvora.js já os inclui. */
(function (nv) {
  nv.init = function (root = document) { nv.initTabs(root); nv.initDropdowns(root); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => nv.init()); else nv.init();
})(window.Nevvora = window.Nevvora || {});
