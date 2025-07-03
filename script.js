
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const targetId = tab.dataset.target;
    sections.forEach(sec => {
      sec.classList.remove('active');
      if (sec.id === targetId) sec.classList.add('active');
    });
  });
});


document.querySelectorAll('.carousel-container').forEach(container => {
  const track = container.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = container.querySelector('.next-btn');
  const prevBtn = container.querySelector('.prev-btn');
  const dots = container.querySelectorAll('.dot');
  let currentIndex = 0;

  function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
  }

  nextBtn.addEventListener('click', () => {
    const next = (currentIndex + 1) % slides.length;
    updateCarousel(next);
  });

  prevBtn.addEventListener('click', () => {
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(prev);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      updateCarousel(Number(dot.dataset.index));
    });
  });

  updateCarousel(0); // 初始化
});

// 页面加载后添加动画
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.project').forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.animationDelay = `${0.2}s`;
  });
});

// ==== 图片点击放大 Lightbox ====
document.querySelectorAll('.project img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `<img src="${img.src}" alt=""><div class="close"></div>`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
    });
  });
});
