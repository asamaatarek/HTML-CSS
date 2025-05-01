<<<<<<< HEAD
var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 300ms";

    preloader.style.opacity = 0;
    setTimeout(
      function () {
        preloader.style.display = "none";

      }, 400)

  }, 1000)
}



var header = document.getElementsByClassName("header")[0];
var offers = document.getElementsByClassName("offer");
window.onscroll = function () {
  if (scrollY > 450) {
    header.classList.add("fixed-bar");

    offers[0].style.animation = "fadeInUp 1.5s forwards"
    offers[1].style.animation = "fadeInUp 1.5s .4s forwards"
    offers[2].style.animation = "fadeInUp 1.5s .8s forwards"
  }
  else {

    header.classList.remove("fixed-bar");

  }
=======
var preloader = document.getElementsByClassName("preloader")[0];

window.onload = function () {
  setTimeout(function () {
    preloader.style.transition = "opacity 300ms";

    preloader.style.opacity = 0;
    setTimeout(
      function () {
        preloader.style.display = "none";

      }, 400)

  }, 1000)
}


var header = document.getElementsByClassName("header")[0];
var offers = document.getElementsByClassName("offer");
window.onscroll = function () {
  if (scrollY > 450) {
    header.classList.add("fixed-bar");

    offers[0].style.animation = "fadeInUp 1.5s forwards"
    offers[1].style.animation = "fadeInUp 1.5s .4s forwards"
    offers[2].style.animation = "fadeInUp 1.5s .8s forwards"
  }
  else {

    header.classList.remove("fixed-bar");

  }
>>>>>>> deb22efa4bad8692afd60367dbb36864171f0812
}