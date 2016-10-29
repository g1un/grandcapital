/*script*/
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {
    $('.arrow-to-top').fadeIn(200);
  } else {
    $('.arrow-to-top').fadeOut(200);
  }
});
$('.arrow-to-top').click(function() {
  $('body,html').animate({
    scrollTop : 0
  }, 500);
});
/*/script*/