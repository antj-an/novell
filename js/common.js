$(function() {

	var tablet = 990;

	jQuery('.scrollbar-inner').scrollbar();


// Toogle menu

	$('#toggle').on('click', function() {
		$(this).toggleClass('on');
		$('.hidden-menu').toggleClass('showMenu');
	});

// Toggle submenu
$(".hidden-menu li.menu-item-has-children > a").on("click", function (e) {
     if (window.innerWidth < tablet) {
        if (!$(this).hasClass("clicked")) {
            e.preventDefault();
            $(this).next("ul").slideToggle("fast");
            //$(this).addClass("clicked");
        }
    }
});


// Sticky navbar

	$(window).on('scroll', function(){
		var $header = $('#header'),
		    pos = $('.header-top').outerHeight(),
		    pad = $('.header-bottom').outerHeight();
		
		if ( $(window).scrollTop() >= pos ) {
			$header.addClass('fixed');
			$header.css("padding-bottom", pad);
		} else {
			$header.removeClass('fixed');
			$header.css("padding-bottom", "");
		}
	});


//Search

	$('.search .btn-search').on('click', searchClick);
	$('.search span').on('click', searchClick);

	function searchClick(e){
		var	form = $(this).closest("form"),
			input = form.find(".search-field");

		if (!input.val()) {
			e.preventDefault();
			form.toggleClass("expanded");
		}
		if (form.hasClass("expanded")) {
	        input.focus();
	    }

	}




	$('.search .search-field').on("focusout", function (e) {
		    if (!$(this).val()) {
		        $(this).closest("form").removeClass("expanded");
		    }
	});

// Carousel

	var rtl = false;

		if ($('html').attr('dir') === "rtl") {
			rtl = true
		}

		if ($('.goods-carousel').length) {
			$('.goods-carousel').slick({
				rtl: rtl,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				speed: 300,
				prevArrow: '<div class="prev"></div>',
				nextArrow: '<div class="next"></div>',
				responsive: [
				{
					breakpoint: 1220,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			})
		}

	if ($('.other-prod-slider').length) {
		$('.other-prod-slider').slick({
			rtl: rtl,
			arrows: true,
			dots: false,
			infinite: true,
			draggable: true,
			swipe: true,
			swipeToSlide: false,
			slidesToShow: 4,
			focusOnSelect: false,
			prevArrow: '<div class="prev"></div>',
			nextArrow: '<div class="next"></div>',
			touchThreshold: 10,
			responsive: [
				{
					breakpoint: 690,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1
					}
				}
			]
		})
	}

		if ($('.other-posts-slider').length) {
		$('.other-posts-slider').slick({
			rtl: rtl,
			arrows: true,
			dots: false,
			infinite: true,
			draggable: true,
			swipe: true,
			swipeToSlide: false,
			slidesToShow: 4,
			focusOnSelect: false,
			prevArrow: '<div class="prev"></div>',
			nextArrow: '<div class="next"></div>',
			touchThreshold: 10,
			responsive: [
				{
					breakpoint: 690,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1
					}
				}
			]
		})
	}

// Selects
	
	$('.js-dropdown').SumoSelect({
		csvDispCount: 0,
		floatWidth: 0
	});

// Sticky sidebar

	$(window).on('scroll', sticky_aside);

	

	function sticky_aside() {
		if ($(".sticky-sidebar").length) {
			var $container = $(".sticky-container"),
				$sticky = $(".sticky-aside-wrap"),
				sticky_h = $sticky.outerHeight(),
				min_h = sticky_h + 40,
				max_h = $(".sticky-content").outerHeight() ,
				header_h = $("#header").outerHeight(),
				w_scrool = $(window).scrollTop(),
				top_pos = $container.offset().top - header_h,
				bot_pos = $container.offset().top - header_h + $container.outerHeight();

			if (window.innerWidth > tablet) {
				if (min_h < max_h) {
					if (w_scrool >= top_pos && ((sticky_h + w_scrool) < bot_pos)) {
						$sticky.css("position", "fixed")
						console.log(max_h);
					} else {
						$sticky.css("position", "absolute")
					}

					if ((sticky_h + w_scrool) >= bot_pos) {
						$sticky.css("top", "auto").css("bottom", "0")
					} else {
						if (w_scrool < top_pos) {
							$sticky.css("top", "0" + "px").css("bottom", "auto")
						} else {
							$sticky.css("top", header_h + "px").css("bottom", "auto")
						}
					}
				} else {
					$sticky.css("position", "static")
				}
			} else {
				$sticky.css("position", "static")
			}
		}
	}

// aside-toggle
	

	$('.right-sidebar .block-title').on('click', function() {
		$(this).toggleClass('on');
		$('.category-list').slideToggle('showList');
	});

// inputs with plus/minus

$("body").on("click", '.btn-count', function () {
	var input = $(this).siblings(".input");
	var val = parseFloat(input.val());
	if ($(this).hasClass("btn-count-minus")) {
		if (val > 1) input.val(--val)
	}
	if ($(this).hasClass("btn-count-plus")) {
		if (val < 999) input.val(++val)
	}
	input.change();
});


$(document).bind("change keyup input click", "input.input-count", function (e) {
	var input = $(e.target);
	if (input.hasClass('input-count')) {
		//prevent symbols
		if (input.val().match(/[^0-9]/g)) {
			input.val(input.val().replace(/[^0-9]/g, ''));
		}
	}
});






});

