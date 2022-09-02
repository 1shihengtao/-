$(function () {
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
  // 导航栏
  $('.xuanze li').eq(0).hover(function () {
    $('.xuanze li').find('.caidan').show().slideDown()
  }, function () {
    
  })
})
