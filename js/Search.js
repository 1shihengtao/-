$(function () {
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
  let name = JSON.parse(sessionStorage.getItem('UserData'))
  if (name) {
    $('.min .zuoce').find('ul').prepend(`<li><a>当前用户名：${name.username}</a</li>`).find('.hide').hide()
  } else {
    $('.min .zuoce').find('ul').prepend(`<li><a>当前未登录</a</li>`).find('.hide').show()
  }
  $('.hide').on('click', function () {
    location.assign('./login.html')
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
    setInterval(() => {
      res.forEach((res) => {
        // 随机索引
        let idx = Math.ceil(Math.random() * 7)
        str = `
          <input type="search" class="two" placeholder="${res[idx]}" autofocus />
        `
      })
      $('.xuanze .search').append(str)
    }, 5000)
    // 搜索下拉框里的数据
    let SelStr = ''
    res.forEach((res) => {
      for (let i in res) {
        SelStr = `
          <li id="lis">${res[i]}</li>
        `
        $('.search article').find('ul').append(SelStr)
      }
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
      )
    })
  })
  // 列表展示
  function getUrlParam(keyWord) {
    // 获取参数
    let SearchName = location.search
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + keyWord + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = SearchName.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
  }
  // 地址的参数
  let SearchName = getUrlParam("keyWord");
  $.ajax({
    url: 'http://localhost:3000/Search',
    type: 'get'
  }).then(res => {
    // 存储本地
    localStorage.setItem("SearchData", JSON.stringify(res))
    // 用拿到的参数和数据库中的数据比较找到一样的
    // 利用filter过滤出复合条件的所有数组
    let newSearchName = res.filter(res => SearchName == res.name)
    // 遍历数据
    let str = ''
    newSearchName.forEach(res => {
      if (SearchName == res.name) {
        str =
          `
        <li data-id=${res.pid} id="liss">
          <img src="${res.pimg}">
          <p class="pp1">${res.pname}</p>
          <p class="pp2">${res.pprice}元起</p>
        </li>
      `
        $('.Product .Search').find('ul').append(str)
      } else {
        $('.Product .Search').find('ul').append('<h1>商品不存在</h1>')
      }
    })
    // 点击商品时跳转 + 参数
    $('.Product').find('ul').find('li').on('click', function () {
      let id = $(this).attr('data-id')
      location.assign(`../ShoppingCart.html?id=${id}`)
    })
  })

})