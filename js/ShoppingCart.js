$(function () {
  if (sessionStorage.getItem('UserData')) {
    var name = JSON.parse(sessionStorage.getItem('UserData'))
    let str = `
    <p>用户：${name.username}</p>
  `
    $('.Right').append(str)
  } else {
    $('.Right').append('<p>当前未登录</p>')
  }
  // 商品推荐部分
  $.ajax({
    url: 'http://localhost:3000/Shoop',
    type: 'get',
  }).then((res) => {
    localStorage.setItem('ProductShowcase', JSON.stringify(res))
    let str = ''
    res.forEach((res) => {
      str = `
          <li data-id=${res.pid}>
            <img src="${res.pimg}">
            <p class="p1">${res.pname}</p>
            <p class="p2">${res.pprice}元</p>
            <p class="p3">${res.Evaluation}万人评价</p>
            <p class="p4">点击前往详情页</p>
          </li>
        `
      $('section div:last').find('ul').append(str)
    })
    $('section div:last ul')
      .find('li')
      .hover(
        function () {
          $(this).find('.p4').stop().fadeIn().end().siblings().find('.p4').stop().fadeOut()
        },
        function () {
          $(this).find('.p4').stop().fadeOut()
        }
      )
      .on('click', function () {
        let id = $(this).attr('data-id')
        // 跳转详情页 + id
        location.assign(`../ProductDetailPage.html?id=${id}`)
      })
  })
  // 存储id和数量
  let PriceNum
  // 判断本地有没有数据
  if (localStorage.getItem('PriceNums')) {
    PriceNum = JSON.parse(localStorage.getItem('PriceNums'))
  } else {
    PriceNum = {}
  }
  // 判断PriceNum中有没有买过
  function save(id, num = 1) {
    if (PriceNum[id] === undefined) {
      PriceNum[id] = num
    } else {
      PriceNum[id] += num
    }
    localStorage.setItem('PriceNums', JSON.stringify(PriceNum))
  }
  // 拿到下拉菜单里的传的id
  let SelId = location.search.slice(1).split('=')[1]
  save(SelId)
  // 获取本地对应的数据
  let SelData = JSON.parse(localStorage.getItem('PhoneData'))
  let SlideData = JSON.parse(localStorage.getItem('SlideData'))
  let ComputedData = JSON.parse(localStorage.getItem('ComputedData'))
  let PhoneData = JSON.parse(localStorage.getItem('PhoneData'))
  let ProductShowcase = JSON.parse(localStorage.getItem('ProductShowcase'))
  let SearchData = JSON.parse(localStorage.getItem('SearchData'))
  let PriceNums = JSON.parse(localStorage.getItem('PriceNums'))
  // 遍历数据 找到和传过来的id相同的
  let newData1 = SelData.find((res) => SelId == res.pid)
  let newData2 = SlideData.find((res) => SelId == res.pid)
  let newData3 = ComputedData.find((res) => SelId == res.pid)
  let newData4 = PhoneData.find((res) => SelId == res.pid)
  let newData5 = ProductShowcase.find((res) => SelId == res.pid)
  let newData6 = SearchData.find((res) => SelId == res.pid)
  let ShopStr = ''
  // 把数据渲染到页面
  for (let res in newData1) {
    if (SelId == newData1.pid) {
      for (let i in PriceNums) {
        if (i == SelId) {
          ShopStr = `
          <div id="ShopCar">
              <div class="top1">
                    <input type="checkbox" class="ipts">
                </div>
                <em></em>
                <div class="top2">
                <img src="${newData1.pimg}">
                <p>${newData1.pname}</p>
                </div>
                <div class="top3">
                    <p>${newData1.pprice}</p>
                </div>
                <div class="top4">
                    <div>
                        <i class="jian">➖</i>
                        <input type="text" class='val' value="${PriceNums[i]}">
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p id="samll">${newData1.pprice * PriceNums[i]}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData1.pid}>❌</p>
                </div>
          </div>
              <figure>
                    <div>
                      <p>已选择：0件</p>
                    </div>
                    <div>
                        <i>合计：0元</i>
                    </div>
                    <button>进入商品详情页</button>
                </figure>
    `
        }
      }
    }
  }
  for (let res in newData2) {
    if (SelId == newData2.pid) {
      for (let i in PriceNums) {
        if (i == SelId) {
          ShopStr = `
          <div id="ShopCar">
              <div class="top1">
                    <input type="checkbox" class="ipts">
                </div>
                <em></em>
                <div class="top2">
                <img src="${newData2.pimg}">
                <p>${newData2.pname}</p>
                </div>
                <div class="top3">
                    <p>${newData2.pprice}</p>
                </div>
                <div class="top4">
                    <div>
                        <i class="jian">➖</i>
                        <input type="text" class='val' value="${PriceNums[i]}">
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p id="samll">${newData2.pprice * PriceNums[i]}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData2.pid}>❌</p>
                </div>
          </div>
           <figure>
                    <div>
                      <p>已选择：0件</p>
                    </div>
                    <div>
                        <i>合计：0元</i>
                    </div>
                    <button>进入商品详情页</button>
                </figure>
    `
        }
      }
    }
  }
  for (let res in newData3) {
    if (SelId == newData3.pid) {
      for (let i in PriceNums) {
        if (i == SelId) {
          ShopStr = `
            <div id="ShopCar">
              <div class="top1">
                    <input type="checkbox" class="ipts">
                </div>
                <em></em>
                <div class="top2">
                <img src="${newData3.pimg}">
                <p>${newData3.pname}</p>
                </div>
                <div class="top3">
                    <p>${newData3.pprice}</p>
                </div>
                <div class="top4">
                    <div>
                        <i class="jian">➖</i>
                        <input type="text" class='val' value="${PriceNums[i]}">
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p id="samll">${newData3.pprice * PriceNums[i]}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData3.pid}>❌</p>
                </div>
            </div>
              <figure>
                    <div>
                      <p>已选择：0件</p>
                    </div>
                    <div>
                        <i>合计：0元</i>
                    </div>
                    <button>进入商品详情页</button>
                </figure>
    `
        }
      }
    }
  }
  for (let res in newData4) {
    if (SelId == newData4.pid) {
      for (let i in PriceNums) {
        if (i == SelId) {
          ShopStr = `
            <div id="ShopCar">
              <div class="top1">
                    <input type="checkbox" class="ipts">
                </div>
                <em></em>
                <div class="top2">
                <img src="${newData4.pimg}">
                <p>${newData4.pname}</p>
                </div>
                <div class="top3">
                    <p>${newData4.pprice}</p>
                </div>
                <div class="top4">
                    <div>
                        <i class="jian">➖</i>
                        <input type="text" class='val' value="${PriceNums[i]}">
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p id="samll">${newData4.pprice * PriceNums[i]}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData4.pid}>❌</p>
                </div>
            </div>
              <figure>
                    <div>
                      <p>已选择：0件</p>
                    </div>
                    <div>
                        <i>合计：0元</i>
                    </div>
                    <button>进入商品详情页</button>
                </figure>
    `
        }
      }
    }
  }
  for (let res in newData5) {
    if (SelId == newData5.pid) {
      for (let i in PriceNums) {
        if (i == SelId) {
          ShopStr = `
          <div id="ShopCar">
              <div class="top1">
                    <input type="checkbox" class="ipts">
                </div>
                <em></em>
                <div class="top2">
                <img src="${newData5.pimg}">
                <p>${newData5.pname}</p>
                </div>
                <div class="top3">
                    <p>${newData5.pprice}</p>
                </div>
                <div class="top4">
                    <div>
                        <i class="jian">➖</i>
                        <input type="text" class='val' value="${PriceNums[i]}">
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p id="samll">${newData5.pprice * PriceNums[i]}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData5.pid}>❌</p>
                </div>
          </div>
            <figure>
                    <div>
                      <p>已选择：0件</p>
                    </div>
                    <div>
                        <i>合计：0元</i>
                    </div>
                    <button>进入商品详情页</button>
                </figure>
        `
        }
      }
    }
  }
  for (let res in newData6) {
    if (SelId == newData6.pid) {
      for (let i in PriceNums) {
        if (i == SelId) {
          ShopStr = `
          <div id="ShopCar">
              <div class="top1">
                    <input type="checkbox" class="ipts">
                </div>
                <em></em>
                <div class="top2">
                <img src="${newData6.pimg}">
                <p>${newData6.pname}</p>
                </div>
                <div class="top3">
                    <p>${newData6.pprice}</p>
                </div>
                <div class="top4">
                    <div>
                        <i class="jian">➖</i>
                        <input type="text" class='val' value="${PriceNums[i]}">
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p id="samll">${newData6.pprice * PriceNums[i]}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData6.pid}>❌</p>
                </div>
          </div>
            <figure>
                    <div>
                      <p>已选择：0件</p>
                    </div>
                    <div>
                        <i>合计：0元</i>
                    </div>
                    <button>进入商品详情页</button>
                </figure>
        `
        }
      }
    }
  }
  if (name) {
    $('.Bottom').prepend(ShopStr)
  } else {
    $('aside').html(`
    <div>
            <h1 style="font-size: 50px;">当前未登录</h1>
        </div>
    `)
  }
  // 如果父元素里没有子元素，就禁用复选框
  if (!$('.Bottom').children().length) {
    $('#ipt').prop({
      disabled: true,
    })
  } else {
    $('#ipt').prop({
      disabled: false,
    })
  }
  // 判断父元素中是否有子元素
  if ($('.Bottom').children().length) {
    let ipt = document.querySelector('#ipt')
    let ipts = document.querySelector('.ipts')
    ipt.onclick = function () {
      if (ipt.checked) {
        ipts.checked = true
        $('figure div:first').append(`<p>已选择：${$('.Bottom').children().length - 1}件</p>`).find('p').eq(0).hide()
        $('figure div:last').append(`<i>合计：${$('#samll').text()}元</i>`).find('i').eq(0).hide()
      } else {
        ipts.checked = false
        $('figure div:first').find('p').eq(0).show().siblings().hide()
        $('figure div:last').find('i').eq(0).show().siblings().hide()
      }
    }
    ipts.onclick = (function () {
      if (!ipts.checked) {
        ipt.checked = false
        $('figure div:first').find('p').eq(0).show().siblings().hide()
        $('figure div:last').find('i').eq(0).show().siblings().hide()
      } else {
        ipt.checked = true
        $('figure div:first').append(`<p>已选择：${$('.Bottom').children().length - 1}</p>`).find('p').eq(0).hide()
        $('figure div:last').append(`<i>合计：${$('#samll').text()}元</i>`).find('i').eq(0).hide()
      }
    })
    // 加
    $('.jia').on('click', function () {
      let addNum = JSON.parse(localStorage.getItem('PriceNums'))
      for (let i in addNum) {
        if (i == SelId) {
          let price = parseInt($('.top3 p').text())
          $('#samll').text(price * addNum[i])
          addNum[i]++
          $('.val').val(addNum[i])
          localStorage.setItem("PriceNums", JSON.stringify(addNum))
        }
      }
    })
    // 减
    $('.jian').on('click', function () {
      let addNum = JSON.parse(localStorage.getItem('PriceNums'))
      for (let i in addNum) {
        if (i == SelId) {
          let price1 = parseInt($('.top3 p').text())
          let price2 = parseInt($('#samll').text())
          $('#samll').text(price2 - price1)
          addNum[i]--
          $('.val').val(addNum[i])
          localStorage.setItem("PriceNums", JSON.stringify(addNum))
        }
      }
    })
    // 输入框内容改变时
    $('.val').on('input', function () {
      let addNum = JSON.parse(localStorage.getItem('PriceNums'))
      for (let i in addNum) {
        if (i == SelId) {
          let zhi = $('.val').val()
          $('#samll').text(zhi * $('.top3 p').text())
          addNum[i] = parseInt(zhi)
          localStorage.setItem("PriceNums", JSON.stringify(addNum))
        }
      }
    })
    // 删除
    $('.delete').on('click', function () {
      $('.Bottom #ShopCar').remove()
      let id = $(this).attr('data-id')
      let SelDatas = JSON.parse(localStorage.getItem('SelDatas'))
      for (let i in SelDatas) {
        if (SelDatas.pid == id) {
          localStorage.removeItem('SelDatas')
        }
      }
    })
  } else {
    $('.Bottom').append('<h1>当前购物车为空</h1>')
  }
  // 点击进入详情页
  $('figure button').on('click', function () {
    // 跳转时把地址栏的id传过去
    let id = location.search.split('=')[1]
    location.assign(`../ProductDetailPage.html?id=${id}`)
  })
})