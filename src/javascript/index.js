$(document).ready(function() {
  $('.carousel').slick({
    dots: true,
    centerMode:true,
    slidesToShow: 3,
    prevArrow: '<div class="carousel__left-arrow"><img src="../images/arrow-left.svg"></div>',
    nextArrow: '<div class="carousel__right-arrow"><img src="../images/arrow-right.svg"></div>',
    variableWidth: true,
  });

  $('.slick-current').find('img', '.slick-slide__play').css('visibility', 'visible');

  $('.carousel').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    e.preventDefault();
    $(e.target).find('.slick-slide__play').css('visibility', 'hidden')
  });

  $('.carousel').on('afterChange', function(e) {
    $(e.target).find('.slick-center .slick-slide__play').css('visibility', 'visible')
  });

});
