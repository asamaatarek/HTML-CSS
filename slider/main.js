document.addEventListener("DOMContentLoaded", function () {
  const previous = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const slides = document.querySelectorAll(".slide");

  let currentIndex = 0;

  function getCurrentSlide() {
    return slides[currentIndex];
  }

  function getCurrentAudio() {
    return getCurrentSlide().querySelector("audio");
  }

  function getVolumeInp() {
    return getCurrentSlide().querySelector(".volumeInp");
  }

  function getTimeInp() {
    return getCurrentSlide().querySelector(".timeInp");
  }

  function getSpeedSelect() {
    return getCurrentSlide().querySelector(".speedSelect");
  }

  // controls
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

  // Attach button
  slides.forEach(function(slide, index) {
    const playBtn = slide.querySelector(".playBtn");
    const pauseBtn = slide.querySelector(".pauseBtn");
    const stopBtn = slide.querySelector(".stopBtn");
    const muteBtn = slide.querySelector(".muteBtn");

    playBtn.addEventListener("click", function () {
      if (index === currentIndex) 
        playAud();
    });

    pauseBtn.addEventListener("click", function () {
      if (index === currentIndex) 
        pauseAud();
    });

    stopBtn.addEventListener("click", function () {
      if (index === currentIndex) 
        stopAud();
    });

    muteBtn.addEventListener("click", function () {
      if (index === currentIndex) 
        muteAud();
    });
  });

  // Volume 
  slides.forEach(function(slide, index) {
    const audio = slide.querySelector("audio");
    const volumeInp = slide.querySelector(".volumeInp");
    if (volumeInp) {
      volumeInp.addEventListener("input", function () {
        audio.volume = volumeInp.value;
      });
    }
  });

  // Time 
  slides.forEach(function(slide, index) {
    const audio = slide.querySelector("audio");
    const timeInp = slide.querySelector(".timeInp");
    if (timeInp) {
      timeInp.addEventListener("input", function () {
        audio.currentTime = timeInp.value;
      });
    }

    // Update time during playing of the audio 
    audio.addEventListener("timeupdate", function () {
      if (timeInp) {
        timeInp.max = audio.duration || 100;
        timeInp.value = audio.currentTime;
      }
    });
  });

  // Speed
  slides.forEach(function(slide, index) {
    const audio = slide.querySelector("audio");
    const speedSelect = slide.querySelector(".speedSelect");

    if (speedSelect) {
      speedSelect.addEventListener("change", function () {
        audio.playbackRate = parseFloat(speedSelect.value);
      });
    }
   // console.log(index + ": slide processed");
  });

  //navigation
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
