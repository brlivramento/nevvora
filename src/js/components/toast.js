(function (nv) {
  let timer, element;
  nv.toast = function (message, duration = 3000) {
    if (!element) { element = document.createElement('div'); element.className = 'nv-toast'; element.setAttribute('role', 'status'); document.body.append(element); }
    element.textContent = message; element.hidden = false;
    clearTimeout(timer); timer = setTimeout(() => element.hidden = true, duration);
  };
})(window.Nevvora = window.Nevvora || {});
