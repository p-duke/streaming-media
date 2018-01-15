$(document).ready(function() {

  function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
      deferTimer;
    return function () {
      var context = scope || this;

      var now = +new Date,
        args = arguments;
      if (last && now < last + threshhold) {
        // hold on to it
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      } else {
        last = now;
        fn.apply(context, args);
      }
    };
  }

  $('.carousel').slick({
    initialSlide: 1,
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

  $('.sub-carousel').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="sub-carousel__left-arrow"><img src="../images/arrow-left.svg"></div>',
    nextArrow: '<div class="sub-carousel__right-arrow"><img src="../images/arrow-right.svg"></div>',
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ]
  });

  $('.sub-carousel__menu-icon').click(function() {
      $(this).prev().toggleClass('sub-carousel__menu-dropdown--activated');
    }
  );

  $('.sub-carousel__title').hover(throttle(function() {
    $(this).next().animate({
      display: "block",
      height: "toggle",
    }, 1000);
  }, 3000),
    function() {
      $(this).next().animate({
        display: "none",
        height: "toggle",
      }, 1000);
    }
  );

});
