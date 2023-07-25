$(function () {
  $('.security__btn').on('click', function(e) {
    $('.modal').addClass('modal--open');
    setTimeout(function () {
      $('.modal').removeClass('modal--open');
    }, 2000);
  });
});