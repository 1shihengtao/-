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
  $('.xuanze .Li').on('click', function () {
    $('#BottomList').stop().slideDown()
    return false
  })
  $('.min').on('click', function () {
    $('figcaption').hide()
    return false
  })
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
  $('.nav').on('mouseover', function () {
    $('.nav .neirong').show()
  })
  $('.nav').on('mouseout', function () {
    $('.nav .neirong').hide()
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
      $('#div1')
        .css({
          top: '120px',
        })
        .find('.show')
        .show()
    } else {
      $('#div1')
        .css({
          top: '220px',
        })
        .find('.show')
        .hide()
    }
  })
  $('#div1 .show')
    .hover(
      function () {
        $(this).find('.imgss').show().end().find('#pp').css({
          color: 'rgb(241, 119, 88)',
        })
      },
      function () {
        $(this).find('.imgss').hide().end().find('#pp').css({
          color: '#757575',
        })
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
    $('.min .zuoce').find('ul').prepend(`<li><a>当前用户名：${name}</a</li>`).find('.hide').hide()
  } else {
    $('.min .zuoce').find('ul').prepend(`<li><a>当前未登录</a</li>`).find('.hide').show()
  }
  $('.hide').on('click', function () {
    location.assign('./login.html')
  })
  // 发请求获取商品数据（手机数据）
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
    // 遍历数据
    let str = ''
    res.data.forEach((res, arr) => {
      str = `
                    <ul>
                        <li data-id=${res.pid}>
                            <img src="${res.pimg}" alt="" />
                            <h3>${res.pname}</h3>
                            <p>${res.pdesc}</p>
                            <span>${res.pprice}元起</span>
                        </li>
                    </ul>
      `
      $('.nei #phone').prepend(str)
    })
    $('#phone ul')
      .find('li')
      .on('click', function () {
        let id = $(this).attr('data-id')
        location.assign(`../ShoppingCart.html?id=${id}`)
      })
  })

  // 头部下拉菜单数据
  let SelStr = ''
  let SelData = JSON.parse(localStorage.getItem('PhoneData'))
  SelData = SelData.splice(1, 6)
  SelData.forEach((res) => {
    SelStr = `
                <li data-id="${res.pid}">
                    <img src="${res.pimg}" alt="">
                    <p>${res.pname}</p>
                    <p class="PColor">${res.pprice}元起</p>
                </li>
    `
    $('#BottomList ul').append(SelStr)
  })
  // 侧边栏数据
  $.ajax({
    url: 'http://jx.xuzhixiang.top/ap/api/allproductlist.php',
    type: 'get',
    data: {
      uid: 139436,
    },
  }).then((res) => {
    if ((res.msg = '查询成功111')) {
      localStorage.setItem('SlideData', JSON.stringify(res.data))
      let str = ''
      res.data.forEach((res) => {
        str = `
          <li data-id=${res.pid} id="li">
              <img src="${res.pimg}" alt="">
              <i>${res.pname}</i>
          </li>
        `
        $('.neirong ul').prepend(str)
      })
    }
    $('.neirong ul')
      .find('li')
      .on('click', function () {
        let id = $(this).attr('data-id')
        location.assign(`../ShoppingCart.html?id=${id}`)
      })
  })

  // 获取笔记本数据
  $.get('http://jx.xuzhixiang.top/ap/api/allproductlist.php', {
    uid: 139439,
  }).then((res) => {
    // 存储本地
    localStorage.setItem('ComputedData', JSON.stringify(res.data))
    let str = ''
    res.data.forEach((res) => {
      str = `
                          <ul>
                        <li data-id=${res.pid}>
                            <img src="${res.pimg}" alt="" />
                            <h3>${res.pname}</h3>
                            <p>${res.pdesc}</p>
                            <span>${res.pprice}元起</span>
                        </li>
                    </ul>
      `
      $('.nei #com').prepend(str)
    })
    $('#com ul')
      .find('li')
      .on('click', function () {
        let id = $(this).attr('data-id')
        location.assign(`../ShoppingCart.html?id=${id}`)
      })
  })
  // 点击购物车跳转
  $('.zuoce .dian1').on('click', function () {
    location.assign(`../ShoppingCart.html`)
  })
  // 点击下拉菜单里的数据时 跳转购物车 + 传参数
  $('#BottomList ul')
    .find('li')
    .on('click', function () {
      let SelId = $(this).attr('data-id')
      location.assign(`../ShoppingCart.html?id=${SelId}`)
    })
  // 搜索框数据
  $.ajax({
    url: 'http://localhost:3000/Phone',
    type: 'get',
  }).then((res) => {
    let str = ''
    let timer = setInterval(() => {
      res.forEach((res) => {
        // 随机索引
        let idx = Math.ceil(Math.random() * 7)
        str = `
          <input type="search" class="two" placeholder="${res[idx]}（点击下拉框数据跳转对应商品）" autofocus />
        `
      })
      $('.xuanze .search').append(str)
    }, 2000)
    // 搜索下拉框里的数据
    let SelStr = ''
    res.forEach((res) => {
      for (let i in res) {
        SelStr = `
          <li id="lis" data-name="红米笔记本">${res[9]}</li>
          <li id="lis" data-name="小米手机">${res[10]}</li>
        `
      }
      $('.search article').find('ul').append(SelStr)
      $('article #lis').hover(
        function () {
          $(this)
            .css({
              'background-color': '#e2e2e2',
              color: 'white',
            })
            .siblings()
            .css({
              'background-color': '',
              color: '',
            })
        },
        function () {}
      ).on('click', function () {
        // 获取自定义属性
        let uname = $(this).attr('data-name')
        // 把属性值传过去
        location.assign(`../Search.html?keyWord=${uname}`)
      })
    })
  })
})
