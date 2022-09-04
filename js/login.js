$(function () {
  $('.Right aside')
    .find('.lis a')
    .hover(
      function () {
        $(this).css({ color: '#ba3500e3' }).siblings().slideDown()
      },
      function () {
        $(this).css({ color: '#838383' }).siblings().slideUp()
      }
    )
  $('article figure').hover(
    function () {
      $(this).find('big').css({ opacity: 1 }).end().next().stop().fadeIn()
    },
    function () {
      $(this).find('big').css({ opacity: 1 }).end().next().stop().fadeOut()
    }
  )
  $('form .Pyan').on('click', function () {
    $(this).find('img').fadeToggle()
  })
})
