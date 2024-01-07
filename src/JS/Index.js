const swiperSlider = new Swiper('.swiper', {
    initialSlide: 2,
    autoHeight: true,
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
},  
autoplay: {
    delay: 2000,
    stopOnlastSlide: true,
    disableOnInteraction: false
},
});
$("[data-scroll]").on("click", function(event){event.preventDefault})
let elementID=$(this).data('scroll');
let elementoffset=$(elementID).offset().top;
$("html, body").animate({scrolltop: elementoffset - 70},700);