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
})
