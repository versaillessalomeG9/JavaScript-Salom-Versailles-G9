document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mon-slider", {

      loop: true,

      pagination: {
        el: ".swiper-pagination",
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
      autoplay: {
        delay: 5000,
      },
    });
  });
  