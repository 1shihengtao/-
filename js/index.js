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
  $('.xuanze ul')
    .find('.Li')
    .hover(
      // 有问题
      function () {
        $('#BottomList').stop().slideDown()
      },
      function () {
        $('#BottomList').stop().slideUp()
      }
    )
  // 头部下拉二维码
  $('.dian').hover(
    function () {
      $('.xiala').slideDown()
    },
    function () {
      $('.xiala').slideUp()
    }
  )
  // 头部购物车、
  $('.dian1').hover(
    function () {
      $('.gouwu').slideDown()
    },
    function () {
      $('.gouwu').slideUp()
    }
  )
})
