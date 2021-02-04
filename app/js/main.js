$(function () {
  $('.slider__inner').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow-prev.svg" alt="prev arrow" /></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../images/arrow-next.svg" alt="next arrow" /></button>'
  });

  $('.burger').on('click', function () {
    $('.burger').toggleClass('active');
    $('.menu__list').slideToggle();
  });


  $('.menu__item').has('ul').addClass('menu__item--has-submenu');




  $(window).scroll(() => {
    if ($(window).scrollTop() > 50) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').on('click', function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});