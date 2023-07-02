$(window).on('load resize', function() {
  if ($(window).width() < 576) {
    $('.footer__info--menu').insertAfter('.footer__logo-link');
  };
});