/*  SLIDER (swiper.js)
-------------------------------------------------------*/

$(function() {
  var swiper = new Swiper('#member-opeofficer-slide', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '#member-opeofficer-slide-next',
      prevEl: '#member-opeofficer-slide-prev',
    },
    pagination: {
      el: '#member-opeofficer-slide-pagination',
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

$(function() {
  var swiper = new Swiper('#member-lecturer-slide', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '#member-lecturer-slide-next',
      prevEl: '#member-lecturer-slide-prev',
    },
    pagination: {
      el: '#member-lecturer-slide-pagination',
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

$(function() {
  var swiper = new Swiper('#member-corporate-slide', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '#member-corporate-slide-next',
      prevEl: '#member-corporate-slide-prev',
    },
    pagination: {
      el: '#member-corporate-slide-pagination',
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
