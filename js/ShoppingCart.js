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
  // 拿到下拉菜单里的传的id
  let SelId = location.search.slice(1).split('=')[1]

  // 获取本地对应的数据
  let SelData = JSON.parse(localStorage.getItem('PhoneData'))
  let SlideData = JSON.parse(localStorage.getItem('SlideData'))
  let ComputedData = JSON.parse(localStorage.getItem('ComputedData'))
  let PhoneData = JSON.parse(localStorage.getItem('PhoneData'))
  // 遍历数据 找到和传过来的id相同的
  let newData1 = SelData.find((res) => SelId == res.pid)
  let newData2 = SlideData.find((res) => SelId == res.pid)
  let newData3 = ComputedData.find((res) => SelId == res.pid)
  let newData4 = PhoneData.find((res) => SelId == res.pid)
  let ShopStr = ''
  // 把数据渲染到页面
  for (let res in newData1) {
    if (SelId == newData1.pid) {
      ShopStr = `
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
                        <input type="text" value="1" class='val'>
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p>${newData1.pprice}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData1.pid}>❌</p>
                </div>
                <figure>
                    <div>
                      <p>已选择：1件</p>
                    </div>
                    <div>
                        <i>合计：${newData1.pprice}元</i>
                        <p>去结算</p>
                    </div>
                </figure>
    `
    }
  }
  for (let res in newData2) {
    if (SelId == newData2.pid) {
      ShopStr = `
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
                        <input type="text" value="1" class='val'>
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p>${newData2.pprice}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData2.pid}>❌</p>
                </div>
                <figure>
                    <div>
                      <p>已选择：1件</p>
                    </div>
                    <div>
                        <i>合计：${newData2.pprice}元</i>
                        <p>去结算</p>
                    </div>
                </figure>
    `
    }
  }
  for (let res in newData3) {
    if (SelId == newData3.pid) {
      ShopStr = `
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
                        <input type="text" value="1" class='val'>
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p>${newData3.pprice}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData3.pid}>❌</p>
                </div>
                <figure>
                    <div>
                      <p>已选择：1件</p>
                    </div>
                    <div>
                        <i>合计：${newData3.pprice}元</i>
                        <p>去结算</p>
                    </div>
                </figure>
    `
    }
  }
  for (let res in newData4) {
    if (SelId == newData4) {
      ShopStr = `
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
                        <input type="text" value="1" class='val'>
                        <i class="jia">➕</i>
                    </div>
                </div>
                <div class="top5">
                    <p>${newData4.pprice}</p>
                </div>
                <div class="top6">
                    <p class="delete" data-id=${newData4.pid}>❌</p>
                </div>
                <figure>
                    <div>
                      <p>已选择：1件</p>
                    </div>
                    <div>
                        <i>合计：${newData4.pprice}元</i>
                        <p>去结算</p>
                    </div>
                </figure>
    `
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
  let ipt = document.querySelector('#ipt')
  let ipts = document.querySelector('.ipts')
  ipt.onclick = function () {
    if (ipt.checked) {
      ipts.checked = true
    } else {
      ipts.checked = false
    }
  }
  ipts.onclick = function () {
    if (!ipts.checked) {
      ipt.checked = false
    } else {
      ipt.checked = true
    }
  }
  // 加减
  let jian = document.querySelector('.jian')
  let jia = document.querySelector('.jia')
  let val = document.querySelector('.val')
  let Bottom = document.querySelector('#Bottom')
  jian.onclick = function () {
    if (val.value <= 1 || val.value == '') {
      val.value = 1
    } else {
      val.value--
    }
  }
  jia.onclick = function () {
    val.value++
  }
  $('.delete').on('click', function () {
    $('.Bottom').remove()
    let id = $(this).attr('data-id')
    let SelDatas = JSON.parse(localStorage.getItem('SelDatas'))
    for (let i in SelDatas) {
      if (SelDatas.pid == id) {
        localStorage.removeItem('SelDatas')
      }
    }
  })
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
})
