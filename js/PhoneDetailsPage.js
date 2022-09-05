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
})
