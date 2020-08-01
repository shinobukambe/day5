

/*  tab1
-------------------------------------------------------*/


jQuery(document).ready(function($){
	$('.seminarP__tabs li').click(function(){
		var thisElm = $(this);
		var thisTabWrap = thisElm.parents('.seminarP__tab__container');
		var thisTabBtn = thisTabWrap.find('.seminarP__tabs li');
		var thisTabContents = thisTabWrap.find('.seminarP__tab__content');
		var currentClass = 'is-active';
		thisTabBtn.removeClass(currentClass);
		thisElm.addClass(currentClass);
		var thisElmIndex =  thisTabBtn.index(this);
		thisTabContents.removeClass(currentClass);
		thisTabContents.eq(thisElmIndex).addClass(currentClass);
	});
});

jQuery(document).ready(function($){
	$('.seminarP__subtabs li').click(function(){
		var thisElm = $(this);
		var thisTabWrap = thisElm.parents('.seminarP__subtabs__container');
		var thisTabBtn = thisTabWrap.find('.seminarP__subtabs li');
		var thisTabContents = thisTabWrap.find('.seminarP__subtab__content');
		var currentClass = 'is-active';
		thisTabBtn.removeClass(currentClass);
		thisElm.addClass(currentClass);
		var thisElmIndex =  thisTabBtn.index(this);
		thisTabContents.removeClass(currentClass);
		thisTabContents.eq(thisElmIndex).addClass(currentClass);
	});
});


/*  SLIDER (swiper.js)
-------------------------------------------------------*/

$(function() {
  var swiper = new Swiper('#seminar-lecturer-slide', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '#seminar-lecturer-slide-next',
      prevEl: '#seminar-lecturer-slide-prev',
    },
    pagination: {
      el: '#seminar-lecturer-slide-pagination',
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
