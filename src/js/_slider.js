$(document).ready(function () {
  $(".slider__card--container").slick({
    centerMode: true,
    dots: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (slider, i) {
      return '<div class="custom-dot"><div class="inner-circle"></div></div>';
    },
    dotsClass: "custom-dots-container",
  });
});
