// Любимые кадры

var TrandingSlider = new Swiper('.shots-slider', {
    effect: "fade",
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });