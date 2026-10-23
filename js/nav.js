// Keep chapter navigation and the reading line in sync with the reader.
(() => {
  const links = [...document.querySelectorAll('.chapter-links a')];
  const chapters = [...document.querySelectorAll('.act')];
  const progress = document.querySelector('.reading-progress');
  let scheduled = false;
  function update() {
    const threshold = document.querySelector('.chapter-links').offsetHeight + 100;
    let current = null;
    chapters.forEach(chapter => {
      if (chapter.getBoundingClientRect().top <= threshold) current = chapter.id;
    });
    links.forEach(link => {
      const active = link.hash === '#' + current;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    const length = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (length > 0 ? Math.min(100, scrollY / length * 100) : 0) + '%';
    scheduled = false;
  }
  function schedule() { if (!scheduled) { scheduled = true; requestAnimationFrame(update); } }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  new ResizeObserver(schedule).observe(document.body);
  update();
})();
