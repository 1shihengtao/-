$(function () {
  // 轮播图
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: true,
  })
  // 获取数据展示
  $.ajax({
    url: 'http://jx.xuzhixiang.top/ap/api/allproductlist.php',
    type: 'get',
    data: {
      uid: 139255,
    },
  }).then((res) => {
    let str = ''
    let Data = res.data
    localStorage.setItem('PhoneDataPages', JSON.stringify(Data))
    Data.forEach((res) => {
      str = `
        <div class="Left">
          <img src="${res.pimg}" alt="" />
          <p class="p1">${res.pname}</p>
          <p class="p2">${res.pdesc}</p>
          <h2>${res.pprice}<i>元起</i></h2>
        </div>
      `
      $('aside .lists').append(str)
    })
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
    if (top >= 1500) {
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
