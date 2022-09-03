$(function () {
  // 轮播图
  var swiper = new Swiper('.mySwiper', {
    autoplay: true,
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
      $('.gouwu').stop().slideDown()
    },
    function () {
      $('.gouwu').stop().slideUp()
    }
  )
  // 侧边栏
  $('.nav ul')
    .find('.r')
    .on('mouseover', function () {
      $('.nav ul').find('.neirong').stop().animate(
        {
          width: '991px',
        },
        500
      )
    })
    .on('mouseout', function () {
      $('.nav ul').find('.neirong').stop().animate(
        {
          width: 0,
        },
        500
      )
    })
  // 搜索
  $('.search').on('mouseover', function () {
    $('.search input').addClass('bgc').end().find('article').show()
  })
  $('.search').on('mouseout', function () {
    $('.search article').hide().end().find('input').removeClass('bgc')
  })
  // 固定栏
  $('#div1 ul')
    .find('li')
    .hover(
      function () {
        $(this)
          .find('.imgss')
          .show()
          .end()
          .find('#pp')
          .css({
            color: 'rgb(241, 119, 88)',
          })
          .end()
          .siblings()
          .find('.imgss')
          .hide()
          .end()
          .find('#pp')
          .css({
            color: '#757575',
          })
      },
      function () {
        $(this).find('.imgss').hide().end().find('#pp').css({
          color: '#757575',
        })
      }
    )
  $(window).on('scroll', function () {
    let top = $(window).scrollTop()
    if (top >= 300) {
      $('#div1').css({ top: '120px' }).find('.show').show()
    } else {
      $('#div1').css({ top: '220px' }).find('.show').hide()
    }
  })
  $('#div1 .show')
    .hover(
      function () {
        $(this).find('.imgss').show().end().find('#pp').css({ color: 'rgb(241, 119, 88)' })
      },
      function () {
        $(this).find('.imgss').hide().end().find('#pp').css({ color: '#757575' })
      }
    )
    .on('click', function () {
      $(window).scrollTop(0)
    })
  $('#div1 li')
    .eq(0)
    .hover(
      function () {
        $(this).find('.Show').stop().fadeIn()
      },
      function () {
        $(this).find('.Show').stop().fadeOut()
      }
    )
})
