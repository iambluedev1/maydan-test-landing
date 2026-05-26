/* MAYDAN site behaviours */
(() => {
  // sticky nav border after scroll
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // reveal-on-scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // mark current nav link active based on filename
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-href]').forEach((a) => {
    if (a.dataset.href === path || (path === '' && a.dataset.href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // simple FAQ accordion
  document.querySelectorAll('[data-faq]').forEach((q) => {
    q.addEventListener('click', () => {
      const open = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', !open);
    });
  });

  // devis form (no backend) — just demo
  const form = document.querySelector('#devis-form');
  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const ok = document.querySelector('#devis-ok');
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Envoi…'; }
      setTimeout(() => {
        if (ok) ok.hidden = false;
        if (btn) { btn.textContent = 'Demande envoyée'; }
        form.scrollIntoView({ block: 'start', behavior: 'instant' });
      }, 600);
    });
  }

  // hero kpi counter (cheap version)
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const dur = 1100;
          const t0 = performance.now();
          const tick = (t) => {
            const k = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - k, 3);
            const v = (target * eased).toFixed(decimals);
            el.textContent = v + suffix;
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
  });
})();
