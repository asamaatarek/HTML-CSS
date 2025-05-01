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
      el.style.animation = 'none';
      el.offsetHeight; 
      el.style.opacity = 0;
      el.style.animation = `${animationName} 1.2s ease forwards`;
      el.style.animationDelay = `${0.3 + i * 0.4}s`;
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

  showSlide(currentSlide);
  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY; 
    var pageHeight = document.documentElement.scrollHeight;
    var windowHeight = window.innerHeight; 
    
    var halfwayPoint = (pageHeight - windowHeight) / 2; 
    
    var floatingCircle = document.getElementById('floatingCircle');
      if (scrollPosition >= halfwayPoint) {
        floatingCircle.classList.add('visible');
    } else {
        floatingCircle.classList.remove('visible');
    }
});
