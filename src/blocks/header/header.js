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