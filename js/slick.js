$(function () {
  $(".e-y-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    cssEase: "linear",
    prevArrow: ".e-y-gallery-list-left",
    nextArrow: ".e-y-gallery-list-right",
  });
});
$(function () {
  $(".e-y-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    cssEase: "linear",
    prevArrow: ".e-y-reviews-list-left",
    nextArrow: ".e-y-reviews-list-right",
  });
});
