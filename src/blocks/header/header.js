$(function () {
  $('.header__burger-btn').on('click', function() {
    $(this).toggleClass('header__burger-btn--open');
    $('.header__area').toggleClass('header__area--open');
    $('.header__logo-link').toggleClass('header__logo-link--hidden');
    $('.header__menu').toggleClass('header__menu--open');
    $('.header__socials').toggleClass('header__socials--open');

  });
})

// if ($('.request--header').hasClass('request--header--active')) {
//       $('.request--header').removeClass('request--header--active');
//       $('.header__logo-link').removeClass('header__logo-link--hidden');
// }
// $(this).toggleClass('header__burger-btn--open');
// $('.header__info').toggleClass('header__info--open');