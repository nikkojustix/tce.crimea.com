$(function () {
	$('.slider__inner').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 600,
		fade: true,
		cssEase: 'linear'
	});

	$('.burger').on('click', function () {
		$('.burger__btn').toggleClass('burger__btn--active');
		$('.menu').toggleClass('menu--active');
		$('.wrapper').toggleClass('wrapper--disable')
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
			$(this).toggleClass('menu__link--pressed');
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

	$('.this-year').text((new Date).getFullYear());

	$('.contacts__title--active').next().slideDown();
	$('.contacts__title').on('click', function () {
		$('.contacts__content').not($(this).next()).slideUp();
		$('.contacts__title').not($(this)).removeClass('contacts__title--active');
		$(this).toggleClass('contacts__title--active').next().slideToggle();
	});

	$('.post__full-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.post__thumbs-slider',
		adaptiveHeight: true,
		infinite: false
	});

	$('.post__thumbs-slider').slick({
		slidesToShow: 1,
		asNavFor: '.post__full-slider',
		centerMode: true,
		focusOnSelect: true,
		infinite: false,
		arrows: false,
		variableWidth: true,
		swipeToSlide: true
	});
});