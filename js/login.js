$(function () {
  $('.Right aside')
    .find('.lis a')
    .hover(
      function () {
        $(this).css({
          color: '#ba3500e3'
        }).siblings().stop().slideDown()
      },
      function () {
        $(this).css({
          color: '#838383'
        }).siblings().stop().slideUp()
      }
    )
  $('article figure').hover(
    function () {
      $(this).find('big').css({
        opacity: 1
      }).end().next().stop().fadeIn()
    },
    function () {
      $(this).find('big').css({
        opacity: 1
      }).end().next().stop().fadeOut()
    }
  )
  $('form .Pyan').on('click', function () {
    $(this).find('img').fadeToggle()
  })
  $('.Right article')
    .eq(0)
    .find('div a')
    .eq(1)
    .on('click', function (e) {
      $('.Right article').eq(1).fadeToggle().find('div a').eq(1).addClass('pub').end().siblings().addClass('pubs')
      return false
    })
  // 注册
  $('.Right article')
    .eq(1)
    .find('button')
    .on('click', function () {
      $.ajax({
        type: 'get',
        url: 'http://jx.xuzhixiang.top/ap/api/reg.php',
        data: {
          username: $(this).prev().find('input').eq(1).val(),
          password: $(this).prev().find('input').eq(2).val(),
        },
      }).then((res) => {
        if (res.code == 1) {
          alert('注册成功')
        }
      })
    })
  // 登录
  $('.Right article')
    .eq(0)
    .find('button')
    .on('click', function () {
      $.ajax({
        type: 'get',
        url: 'http://jx.xuzhixiang.top/ap/api/login.php',
        data: {
          username: $(this).prev().find('input').eq(0).val(),
          password: $(this).prev().find('input').eq(1).val(),
        },
      }).then((res) => {
        if ($('.user').val() == '' || $('.ueserPass').val() == '') {
          alert('用户名或密码不存在，请先注册后使用')
        } else {
          // 把用户的信息存储到本地
          sessionStorage.setItem('UserData', JSON.stringify(res.data))
          // 跳转时把用户名传过去
          location.assign(`../index.html?uname:${res.data.username}`)
        }
      })
    })
})