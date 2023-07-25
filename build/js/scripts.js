

$(window).on('load resize', function() {
  if ($(window).width() < 576) {
    $('.footer__info--menu').insertAfter('.footer__logo-link');
  };
});

$(function () {
  $('.header__burger-btn').on('click', function() {
    $(this).toggleClass('header__burger-btn--open');
    $('.header__area').toggleClass('header__area--open');
    $('.header__logo-link').toggleClass('header__logo-link--hidden');
    $('.header__menu').toggleClass('header__menu--open');
    $('.header__socials').toggleClass('header__socials--open');
  
    if ($(this).hasClass('header__burger-btn--open')) {
      $('.header__menu-link').on('click', function () {
        $('.header__burger-btn').toggleClass('header__burger-btn--open');
        $('.header__area').toggleClass('header__area--open');
        $('.header__logo-link').toggleClass('header__logo-link--hidden');
        $('.header__menu').toggleClass('header__menu--open');
        $('.header__socials').toggleClass('header__socials--open');
      })
    };
  });
});



$(function () {
  $('.welcome__btn').on('click', function () {
    $('.popup').addClass('popup--open');
  });
  
  $('.popup__close').on('click', function () {
    $('.popup').removeClass('popup--open');
  })
});


$(function () {
  $('.security__btn').on('click', function(e) {
    $('.modal').addClass('modal--open');
    setTimeout(function () {
      $('.modal').removeClass('modal--open');
    }, 2000);
  });
});
$(window).on('load resize', function() {
  if ($(window).width() < 992) {
    $('.welcome__photo').insertAfter('.welcome__title');
  };
});