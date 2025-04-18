function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  }

  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }
  
  window.addEventListener("load", function() {
    setTimeout(function() {
      const preloader = document.getElementById('preloader');
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      preloader.style.transition = 'all 0.5s ease';
    }, 3000); 
  });
  const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.arrow.next');
const prevBtn = document.querySelector('.arrow.prev');
let currentSlide = 0;

function animateContent(content, direction) {
  const h2 = content.querySelector('h2');
  const p = content.querySelector('p');
  const buttons = content.querySelector('.hero-buttons');

  const animationName = direction === 'top-down' ? 'fadeInDown' : 'fadeInUp';

  [h2, p, buttons].forEach((el, i) => {
    el.style.animation = 'none'; // reset
    el.offsetHeight; // trigger reflow
    el.style.animation = `${animationName} 0.8s ease forwards`;
    el.style.animationDelay = `${0.2 + i * 0.3}s`;
  });
}

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove('active'));

  const newSlide = slides[index];
  newSlide.classList.add('active');

  const content = newSlide.querySelector('.hero-content');
  const direction = newSlide.getAttribute('data-animation');
  animateContent(content, direction);
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide); // initial
