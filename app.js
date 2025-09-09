// Copyright year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Intro: curtain + ENTER
document.addEventListener('DOMContentLoaded', () => {
  const intro    = document.getElementById('intro');
  const enterBtn = document.getElementById('enterBtn');

  function openIntro() {
    if (!intro) return;
    intro.classList.add('open'); // trigger curtains
    setTimeout(() => {
      intro.classList.add('hidden');
      const target = document.getElementById('exhibit') || document.getElementById('home') || document.body;
      target?.scrollIntoView({ behavior: 'smooth' });
    }, 1100);
  }

  enterBtn?.addEventListener('click', openIntro);
  window.addEventListener('keydown', (e) => { if (e.key === 'Enter') openIntro(); });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Lightbox
(() => {
  const dlg = document.getElementById('lightbox');
  if (!dlg) return;
  const imgEl = dlg.querySelector('img');
  const capEl = dlg.querySelector('.lb-cap');
  const close = dlg.querySelector('.lb-close');

  document.addEventListener('click', (e) => {
    const img = e.target.closest('.art .frame img');
    if (!img) return;
    const full = img.getAttribute('data-full') || img.src;
    const cap  = img.alt || '';
    imgEl.src = full;
    capEl.textContent = cap;
    dlg.showModal();
  });

  close?.addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', (e) => {
    const rect = dlg.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      dlg.close();
    }
  });
})();

// Before/After slider
(() => {
  const ba = document.querySelector('.ba-wrap');
  if (!ba) return;
  const after = ba.querySelector('.ba-after');
  const range = ba.querySelector('.ba-range');
  const update = v => after.style.width = v + '%';
  range.addEventListener('input', e => update(e.target.value));
  update(range.value);
})();

// Curtain Intro
window.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("intro");
  const btn = document.getElementById("enter-btn");

  if(btn){
    btn.addEventListener("click", () => {
      intro.classList.add("open");   // ม่านเปิดออก
      setTimeout(() => intro.style.display = "none", 1600); // ซ่อน intro หลังแอนิเมชัน
    });
  }
});