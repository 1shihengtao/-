// 轮播图
var swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 30,
  effect: 'fade',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
