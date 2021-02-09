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
    $('.menu').toggleClass('menu--active');
  });


  $('.menu__item').has('ul').addClass('menu__item--has-submenu');

  if ($(window).width() >= 768) {
    $('.menu__item').on('mouseenter', function () {
      $(this).addClass('menu__item--hover');
      $(this).children('.submenu').addClass('submenu--opened');
    });
    $('.menu__item').on('mouseleave', function () {
      $(this).removeClass('menu__item--hover');
      $(this).children('.submenu').removeClass('submenu--opened');
    });
  } else {
    $('.menu__item--has-submenu').children('.menu__link').on('click', function () {
      $(this).toggleClass('menu__item--pressed');
      $(this).siblings('.submenu').toggleClass('submenu--opened');
    });
  }

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