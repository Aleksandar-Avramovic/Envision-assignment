$(document).ready(function () {
  $(".slider__container").slick({
    centerMode: true,
    centerPadding: "0",
    initialSlide: 2,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    variableWidth: true,
  });
});
