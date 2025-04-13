
$(document).ready(function () {
  const previous = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const slides = document.querySelectorAll(".slide");

  const volumeInp = document.getElementById("volumeInp");
  const timeInp = document.getElementById("timeInp");
  const speed = document.getElementById("speedSelect");

  let currentIndex = 0;

  function getCurrentAudio() {
    return slides[currentIndex].querySelector("audio");
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

  // Volume
  volumeInp.addEventListener("input", function () {
    getCurrentAudio().volume = volumeInp.value;
  });

  // Time scrubber
  timeInp.addEventListener("input", function () {
    getCurrentAudio().currentTime = timeInp.value;
  });

  // Update time range while audio plays
  function updateTimeSlider() {
    const audio = getCurrentAudio();
    timeInp.max = audio.duration || 100;
    timeInp.value = audio.currentTime;
  }

  setInterval(updateTimeSlider, 500);

  // Speed
  speed.addEventListener("change", function () {
    getCurrentAudio().playbackRate = speed.value;
  });

  // Navigation
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
</script>
