$(document).ready(function () {
  const $sliderContainer = $(".card__container");

  $sliderContainer.slick({
    prevArrow: $(".custom-prev-arrow"),
    nextArrow: $(".custom-next-arrow"),
    variableWidth: true,
    centerMode: true,
    centerPadding: "0",
    initialSlide: 2,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });
});
