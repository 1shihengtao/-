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
  // 获取颜色
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/Color',
  }).then((res) => {
    localStorage.setItem('ShopColor', JSON.stringify(res))
  })
  // 详情页数据
  // 从本地拿数据
  let ProductShowcase = JSON.parse(localStorage.getItem('ProductShowcase'))
  let PhoneData = JSON.parse(localStorage.getItem('PhoneData'))
  let SlideData = JSON.parse(localStorage.getItem('SlideData'))
  let ComputedData = JSON.parse(localStorage.getItem('ComputedData'))
  // 取到颜色
  let ShopColor = JSON.parse(localStorage.getItem('ShopColor'))
  // 拿到传过来的id
  let id = location.search.split('=')[1]
  // 用传来的id和原来的数据比较 找到一样的,并返回找到的数据
  let newProduct = ProductShowcase.find((res) => id == res.pid)
  let newProduct1 = PhoneData.find((res) => id == res.pid)
  let newProduct2 = SlideData.find((res) => id == res.pid)
  let newProduct3 = ComputedData.find((res) => id == res.pid)
  let str = ''
  for (var i in newProduct) {
    if (id == newProduct.pid) {
      str = `
      <div id="Left">
        <img src="${newProduct.pimg}" alt="">
      </div>
      <div id="Right">
        <p id="p1">${newProduct.pname}</p>
        <p id="p2">凑合用吧~~~~~~~~</p>
        <p id="p3">小米自营</p>
        <p id="p4">${newProduct.pprice}</p>
        <div class="line"></div>
        <div class="dizhi">
          <p id="p5">河南  濮阳市  华龙区  开州街道  <em>修改</em></p>
          <i style="color: #ff6700;">有现货</i>
        </div>
        <div class="color">选择颜色</div>
        <div class="price">
          <p id="p6">${newProduct.pname}</p>
          <p id="p7">${newProduct.pprice}</p>
          <h1>总计：${newProduct.pprice}元</h1>
        </div>
        <div class="btn">
          <button>加入购物车</button>
          <div class="love">喜欢</div>
        </div>
        <div class="icon">
          <span>小米自营</span>
          <span>小米发货</span>
          <span>7天无理由退货</span>
          <span>运费说明</span>
          <span>企业信息</span>
          <span>7天价格保护</span>
        </div>
      </div>
      `
    }
  }
  for (var i in newProduct1) {
    if (id == newProduct1.pid) {
      str = `
      <div id="Left">
        <img src="${newProduct1.pimg}" alt="">
      </div>
      <div id="Right">
        <p id="p1">${newProduct1.pname}</p>
        <p id="p2">凑合用吧~~~~~~~~</p>
        <p id="p3">小米自营</p>
        <p id="p4">${newProduct1.pprice}</p>
        <div class="line"></div>
        <div class="dizhi">
          <p id="p5">河南  濮阳市  华龙区  开州街道  <em>修改</em></p>
          <i style="color: #ff6700;">有现货</i>
        </div>
        <div class="color">选择颜色</div>
        <div class="price">
          <p id="p6">${newProduct1.pname}</p>
          <p id="p7">${newProduct1.pprice}</p>
          <h1>总计：${newProduct1.pprice}元</h1>
        </div>
        <div class="btn">
          <button>加入购物车</button>
          <div class="love">喜欢</div>
        </div>
        <div class="icon">
          <span>小米自营</span>
          <span>小米发货</span>
          <span>7天无理由退货</span>
          <span>运费说明</span>
          <span>企业信息</span>
          <span>7天价格保护</span>
        </div>
      </div>
      `
    }
  }
  for (var i in newProduct2) {
    if (id == newProduct2.pid) {
      str = `
      <div id="Left">
        <img src="${newProduct2.pimg}" alt="">
      </div>
      <div id="Right">
        <p id="p1">${newProduct2.pname}</p>
        <p id="p2">凑合用吧~~~~~~~~</p>
        <p id="p3">小米自营</p>
        <p id="p4">${newProduct2.pprice}</p>
        <div class="line"></div>
        <div class="dizhi">
          <p id="p5">河南  濮阳市  华龙区  开州街道  <em>修改</em></p>
          <i style="color: #ff6700;">有现货</i>
        </div>
        <div class="color">选择颜色</div>
        <div class="price">
          <p id="p6">${newProduct2.pname}</p>
          <p id="p7">${newProduct2.pprice}</p>
          <h1>总计：${newProduct2.pprice}元</h1>
        </div>
        <div class="btn">
          <button>加入购物车</button>
          <div class="love">喜欢</div>
        </div>
        <div class="icon">
          <span>小米自营</span>
          <span>小米发货</span>
          <span>7天无理由退货</span>
          <span>运费说明</span>
          <span>企业信息</span>
          <span>7天价格保护</span>
        </div>
      </div>
      `
    }
  }
  for (var i in newProduct3) {
    if (id == newProduct3.pid) {
      str = `
      <div id="Left">
        <img src="${newProduct3.pimg}" alt="">
      </div>
      <div id="Right">
        <p id="p1">${newProduct3.pname}</p>
        <p id="p2">凑合用吧~~~~~~~~</p>
        <p id="p3">小米自营</p>
        <p id="p4">${newProduct3.pprice}</p>
        <div class="line"></div>
        <div class="dizhi">
          <p id="p5">河南  濮阳市  华龙区  开州街道  <em>修改</em></p>
          <i style="color: #ff6700;">有现货</i>
        </div>
        <div class="color">选择颜色</div>
        <div class="price">
          <p id="p6">${newProduct3.pname}</p>
          <p id="p7">${newProduct3.pprice}</p>
          <h1>总计：${newProduct3.pprice}元</h1>
        </div>
        <div class="btn">
          <button>加入购物车</button>
          <div class="love">喜欢</div>
        </div>
        <div class="icon">
          <span>小米自营</span>
          <span>小米发货</span>
          <span>7天无理由退货</span>
          <span>运费说明</span>
          <span>企业信息</span>
          <span>7天价格保护</span>
        </div>
      </div>
      `
    }
  }
  $('.Product .ProductLists').append(str)
  let str1 = ''
  ShopColor.forEach((res, idx) => {
    str1 = `
          <ul>
            <li>${res}</li>
          </ul>
    `
    $('.color').after(str1)
  })
  // 加入购物车
  $('.btn button').on('click', function () {
    // 取到地址栏中的id
    let id = location.search.split('=')[1]
    location.assign(`../ShoppingCart.html?id=${id}`)
  })
})
