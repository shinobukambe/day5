
/*  NUMBER COUNT UP (numerator.js)
-------------------------------------------------------*/

$(function() {
  $('#count1').on('inview', function(event, isInView) {
    $("#count1").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
    });
  });
});

$(function() {
  $('#count2').on('inview', function(event, isInView) {
    $("#count2").countTo({
    });
  });
});

$(function() {
  $('#count3').on('inview', function(event, isInView) {
    $("#count3").countTo({
    });
  });
});
