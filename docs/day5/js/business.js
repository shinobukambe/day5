/*  image slide
-------------------------------------------------------*/
$(function() {
  $('.businessF2__image,.businessF3__image').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-move');
    } else {
      $(this).removeClass('is-move');
    }
  });
});


/*  image slide
-------------------------------------------------------*/
$(function() {
  $('.update__box').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-move');
    } else {
      $(this).removeClass('is-move');
    }
  });
});
