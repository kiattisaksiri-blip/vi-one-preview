/* Vi One — quiet reveal-on-scroll. No analytics, no tracking. */
(function () {
  var els = document.querySelectorAll('.vi-reveal');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () { entry.target.classList.add('is-visible'); }, i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { observer.observe(el); });

  var form = document.querySelector('.vi-circle-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }
})();
