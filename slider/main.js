document.addEventListener("DOMContentLoaded", function () {
  const previous = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const slides = document.querySelectorAll(".slide");
  const startBtn = document.querySelector(".start-slide");
  const stopBtn = document.querySelector(".stop-slide");

  let currentIndex = 0;

  let isSlideshowRunning = false;
  function getCurrentSlide() {
    return slides[currentIndex];
  }

  function getCurrentSlide() {
    return slides[currentIndex];
  }

  function getCurrentAudio() {
    return getCurrentSlide().querySelector("audio");
  }

  function goToSlide(index) {
    slides[currentIndex].classList.remove("main");
    currentIndex = index;
    slides[currentIndex].classList.add("main");
  }

  function goToNextSlide() {
    slides[currentIndex].classList.remove("main");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("main");
  }
  async function startSlideshow() {
    isSlideshowRunning = true;

    while (isSlideshowRunning) {
      const audio = getCurrentAudio();
      audio.currentTime = 0;
      audio.play();

      await new Promise((resolve) => {
        const onEnded = () => {
          audio.removeEventListener("ended", onEnded);
          resolve();
        };

        // If slideshow is manually stopped, resolve immediately
        const checkInterval = setInterval(() => {
          if (!isSlideshowRunning) {
            clearInterval(checkInterval);
            audio.removeEventListener("ended", onEnded);
            audio.pause();
            resolve();
          }
        }, 100);

        audio.addEventListener("ended", onEnded);
      });

      if (isSlideshowRunning) {
        goToNextSlide();
      }
    }
  }
  startBtn.addEventListener("click", function () {
    if (!isSlideshowRunning) {
      startSlideshow();
    }
  });

  stopBtn.addEventListener("click", function () {
    isSlideshowRunning = false;
  });

  function getVolumeInp() {
    return getCurrentSlide().querySelector(".volumeInp");
  }

  function getTimeInp() {
    return getCurrentSlide().querySelector(".timeInp");
  }

  function getSpeedSelect() {
    return getCurrentSlide().querySelector(".speedSelect");
  }

  // Basic controls
  window.playAud = function () {
    getCurrentAudio().play();
  };

  window.pauseAud = function () {
    getCurrentAudio().pause();
  };

  window.stopAud = function () {
    const audio = getCurrentAudio();
    audio.pause();
    audio.currentTime = 0;
  };

  window.muteAud = function () {
    const audio = getCurrentAudio();
    audio.muted = !audio.muted;
  };

  // Attach button listeners to each slide
  slides.forEach((slide, index) => {
    const playBtn = slide.querySelector(".playBtn");
    const pauseBtn = slide.querySelector(".pauseBtn");
    const stopBtn = slide.querySelector(".stopBtn");
    const muteBtn = slide.querySelector(".muteBtn");

    playBtn.addEventListener("click", function () {
      if (index === currentIndex) playAud();
    });

    pauseBtn.addEventListener("click", function () {
      if (index === currentIndex) pauseAud();
    });

    stopBtn.addEventListener("click", function () {
      if (index === currentIndex) stopAud();
    });

    muteBtn.addEventListener("click", function () {
      if (index === currentIndex) muteAud();
    });
  });

  // Volume input
  slides.forEach(function(slide, index) {
    const audio = slide.querySelector("audio");
    const volumeInp = slide.querySelector(".volumeInp");
    if (volumeInp) {
      volumeInp.addEventListener("input", function () {
        audio.volume = volumeInp.value;
      });
    }
  });

  // Time scrubber input
  slides.forEach(function(slide, index) {
    const audio = slide.querySelector("audio");
    const timeInp = slide.querySelector(".timeInp");
    if (timeInp) {
      timeInp.addEventListener("input", function () {
        audio.currentTime = timeInp.value;
      });
    }

    // Update time input while audio is playing
    audio.addEventListener("timeupdate", function () {
      if (timeInp) {
        timeInp.max = audio.duration || 100;
        timeInp.value = audio.currentTime;
      }
    });
  });

  // Speed control
 slides.forEach(function(slide, index) {
    const audio = slide.querySelector("audio");
    const speedSelect = slide.querySelector(".speedSelect");
    if (speedSelect) {
      speedSelect.addEventListener("change", function () {
        audio.playbackRate = parseFloat(speedSelect.value);
      });
    }
  });

  previous.addEventListener("click", function () {
    slides[currentIndex].classList.remove("main");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add("main");
  });

  next.addEventListener("click", function () {
    slides[currentIndex].classList.remove("main");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("main");
  });
});
