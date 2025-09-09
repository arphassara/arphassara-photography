// year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// INTRO logic: click ENTER or press Enter key
const intro = document.getElementById('intro');
const enterBtn = document.getElementById('enterBtn');

function openCurtain() {
  // เล่นแอนิเมชันเปิดม่าน
  intro.classList.add('open');
  // รอม่านเลื่อนเสร็จ แล้วซ่อนอินโทร
  setTimeout(() => intro.classList.add('hidden'), 1100);
  // โฟกัสไปที่แกลเลอรี
  const g = document.getElementById('gallery');
  g && g.scrollIntoView({ behavior: 'smooth' });
}

enterBtn?.addEventListener('click', openCurtain);
window.addEventListener('keydown', (e) => { if (e.key === 'Enter') openCurtain(); });

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
},{ threshold: .15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Lightbox (คลิกภาพดูใหญ่)
const lb = document.getElementById('lightbox');
if (lb) {
  const imgEl = lb.querySelector('img');
  const capEl = lb.querySelector('.lb-cap');
  document.addEventListener('click', e => {
    const target = e.target;
    if (target.tagName === 'IMG' && target.closest('.frame')) {
      const full = target.getAttribute('data-full') || target.getAttribute('src');
      imgEl.src = full;
      capEl.textContent = target.alt || '';
      lb.classList.add('open');
    }
  });
  lb.querySelector('.lb-close').addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
}