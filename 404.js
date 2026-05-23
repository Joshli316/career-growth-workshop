(function () {
  const saved = localStorage.getItem('cg_lang');
  if (saved === 'en') document.body.classList.remove('zh');
})();
