/* 追従SNS
-------------------------------------------------------*/

$(document).ready(function() {
  var fixedElm = $('.editor__share__inner'); // fixedする要素
  var fixedStart = $('.editor__share'); // この要素の上部が画面に表示されたらfixed要素の表示開始
  var fixedEnd = $('#post-info'); // この要素の上部が画面に表示されたらfixedが解除される

  fixedElm.removeClass('is-fixed');

  $(window).on('scroll touchmove',function(){
    var fixedStartVal = fixedStart.offset().top - $(window).height() + 400;
    var fixedEndVal = fixedEnd.offset().top - $(window).height();
    if ($(window).scrollTop() < fixedStartVal) {

      fixedElm.removeClass('is-fixed');
    } else if ($(window).scrollTop() > fixedEndVal) {

      fixedElm.removeClass('is-fixed');
    } else {

      fixedElm.addClass('is-fixed');
    }
  });
});


/* 追従バナー
-------------------------------------------------------*/

$(document).ready(function() {
  if (window.matchMedia( '(min-width: 801px)' ).matches) {
  var fixedElm = $('.aside__banner--fixed'); // fixedする要素
  var fixedStart = $('#banner-box'); // この要素の上部が画面に表示されたらfixed要素の表示開始
  var fixedEnd = $('#post-info'); // この要素の上部が画面に表示されたらfixedが解除される

  fixedElm.removeClass('is-fixed');

  $(window).on('scroll touchmove',function(){
    var fixedStartVal = fixedStart.offset().top - $(window).height();
    var fixedEndVal = fixedEnd.offset().top - $(window).height();
    if ($(window).scrollTop() < fixedStartVal) {

      fixedElm.removeClass('is-fixed');
    } else if ($(window).scrollTop() > fixedEndVal) {

      fixedElm.removeClass('is-fixed');
    } else {

      fixedElm.addClass('is-fixed');
    }
  });
}
});
