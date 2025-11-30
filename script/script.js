document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08,
  });
  const swiper = new Swiper(".mySwiper", {
    loop: "true",
    effect: "fade",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const swiperSec = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
  const swiperFour = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiperThird = new Swiper(".mySwiper3", {
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    loop: "true",
    thumbs: {
      swiper: swiperFour,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  const cursor = document.querySelector(".cursor");
  let mouseX = 0;
  let mouseY = 0;
  let clientX = 0;
  let clientY = 0;
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function MouseMove() {
    clientX += (mouseX - clientX) * 0.05;
    clientY += (mouseY - clientY) * 0.05;

    cursor.style.top = clientY + "px";
    cursor.style.left = clientX + "px";
    requestAnimationFrame(MouseMove);
  }
  MouseMove();

  AOS.refresh();
});
window.onload = function () {
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".page-wrpr");

  // Keep loader for at least 3 seconds
  setTimeout(() => {
    loader.classList.add("fade-out");

    setTimeout(() => {
      loader.style.display = "none";
      content.classList.remove("hidden");
      content.classList.add("show");
    }, 500); // wait for fade-out transition
  }, 3000);
};
