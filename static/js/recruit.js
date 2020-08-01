/*  SLIDER (swiper.js)
-------------------------------------------------------*/

$(function() {
  var swiper = new Swiper('.recruitP__swiper-container', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.recruitP__slide__btn__next',
      prevEl: '.recruitP__slide__btn__prev',
    },
    pagination: {
      el: '.recruitP__slide__pagination',
      type: 'bullets',
      clickable: true
    },
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      800: {
        slidesPerView: 1,
      }
    }
  });
});

/*  テキスト背景アニメーション
-------------------------------------------------------*/

$(function() {
	setTimeout(function(){
    $('.hero__catch__move').addClass('is-move');
	},500);
});
