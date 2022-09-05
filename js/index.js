$(function () {
  // 轮播图
  var swiper = new Swiper('.mySwiper', {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    centeredSlides: true,
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
      $('.xiala').stop().slideDown()
    },
    function () {
      $('.xiala').stop().slideUp()
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
  // 接收传过来的值
  let name = location.search
  name = name.split(':')[1]
  if (name) {
    $('.min .zuoce').find('ul').prepend(`<li><a>当前用户名：${name}</a</li>`).eq().find('.hide').hide()
  } else {
    $('.min .zuoce').find('ul').prepend(`<li><a>当前未登录</a</li>`)
  }
  // 发请求获取商品数据
  $.ajax({
    url: 'http://jx.xuzhixiang.top/ap/api/allproductlist.php',
    type: 'get',
    data: {
      // 获取139280的数据
      uid: 139280,
    },
  }).then((res) => {
    // 把数据存储到本地
    res.data = res.data.splice(1, 8)
    localStorage.setItem('PhoneData', JSON.stringify(res.data))
  })
  // 展示数据
  let Phone = JSON.parse(localStorage.getItem('PhoneData'))
  // 遍历数据
  let str = ''
  Phone.forEach((res, arr) => {
    str = `
                    <ul>
                        <li>
                            <img src="${res.pimg}" alt="" />
                            <h3>${res.pname}</h3>
                            <p>${res.pdesc}</p>
                            <span>${res.pprice}元起</span>
                        </li>
                    </ul>
      `
    $('.shouji .nei').find('.zuida1').prepend(str)
  })
})
