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

  if ($(window).width() < 768) {
    $('.menu__item--has-submenu').on('click', function () {
      $(this).toggleClass('menu__item--pressed');
      $(this).children('.submenu').toggleClass('submenu--opened')
      // $(this).children('.submenu').css("clip", "auto");
      // $(this).children('.submenu').css("width", "auto");
      // $(this).children('.submenu').css("height", "auto");
      // $(this).children('.submenu').css("margin-top", "0");
      // $(this).children('.submenu').css("opacity", "1");
    })
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