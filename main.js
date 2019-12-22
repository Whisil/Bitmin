

$(function(){



 $('.header__btn-menu').on('click', function(){
  $('.hypersfull').slideToggle();
 });


var mql = window.matchMedia('all and (max-width: 1000px)');
if (mql.matches) {
    $('.slider-item').slick({
  dots: true,
  dotsClass: 'my-dots > li',
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
} else {
    $('.slider-item').slick({
  dots: true,
  dotsClass: 'my-dots > li',
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3
});
}
});


