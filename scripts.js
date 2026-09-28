(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    document.documentElement.classList.add('motion');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: '0px 0px 60px 0px' });
    items.forEach(item => observer.observe(item));

    const scenes = document.querySelectorAll('.scene-step, .journey-steps > div, .chapter');
    const sceneObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-active', entry.isIntersecting));
    }, { rootMargin: '-28% 0px -28% 0px', threshold: 0 });
    scenes.forEach(scene => sceneObserver.observe(scene));
  } else {
    items.forEach(item => item.classList.add('visible'));
  }

  const progress = document.querySelector('.reading-progress span');
  const journey = document.querySelector('.journey-steps');
  if (!progress && !journey) return;
  let scheduled = false;
  function update() {
    scheduled = false;
    const available = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    if (progress) progress.style.transform = `scaleX(${Math.min(1, scrollY / available)})`;
    if (journey) {
      const rect = journey.getBoundingClientRect();
      const amount = Math.max(0, Math.min(1, (innerHeight * .55 - rect.top) / rect.height));
      journey.style.setProperty('--journey-fill', `${amount * 100}%`);
    }
  }
  function schedule() { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  update();
})();
