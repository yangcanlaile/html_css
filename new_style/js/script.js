$(window).on('load', function () {
	
	'use strict';
	
	/* Preloader */	
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
	
	/* Portfolio Index */
	var PORTFOLIO = (function($) {
	var $grid = $('#grid'),	$filterOptions = $('.portfolio-menu'),
		setupFilters = function() {
			var $btns = $filterOptions.children();
				$btns.on('click', function() {
				var $this = $(this),
				isActive = $this.hasClass( 'active' ),
				group = isActive ? 'all' : $this.data('group');
					if ( !isActive ) {
						$('.portfolio-menu .active').removeClass('active');
					}
			$this.toggleClass('active');
			$grid.shuffle( 'shuffle', group );
			});
			$btns = null;
		},
				init = function() {
					setupFilters();
					$grid.shuffle({
						itemSelector: '.col-md-3, .col-md-4',
					});
				};
		return {init: init};
	}(jQuery));

	PORTFOLIO.init();
});

$(document).ready(function() {
	
	'use strict';
	
	/* Animations Home Page*/
	function onScrollInit( items, trigger ) {
	    items.each( function() {
	    var osElement = $(this),
	    osAnimationClass = osElement.attr('data-animation'),
	    osAnimationDelay = osElement.attr('data-animation-delay');
		          
	    osElement.css({
	    '-webkit-animation-delay':  osAnimationDelay,
	    '-moz-animation-delay':     osAnimationDelay,
	    'animation-delay':          osAnimationDelay
	    });
			
	    var osTrigger = ( trigger ) ? trigger : osElement;
	           
	    osTrigger.waypoint(function() {
	    osElement.addClass('animated').addClass(osAnimationClass);
	    },{
	        triggerOnce: true,
	        offset: '90%'
	    });
	    });
	    }
		onScrollInit( $('.scroll-animation') );
	    onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
	
	/* Swiper Slider Home Page */
	var swiper = new Swiper('#slide', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
		nextButton: '.swiper-top-next',
        prevButton: '.swiper-top-prev'
    });
	
	/* Carousel Index page */
	var swiper = new Swiper('#carousel', {
        slidesPerView: 5,
        paginationClickable: false,
        spaceBetween: 30,
        freeMode: true,
		loop: true,
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });
	
	/* Testimonials */
	var swiper = new Swiper('#testimonials-carousel', {
		pagination: '.testimonials-pagination',
		paginationClickable: true,
    });
	
	/* FAQ */
	$('.faq-block a').on('click', function() {
		$(this).toggleClass('active').next().slideToggle('slow');
		return false; 
	}); 
	   
	/* Tabs */	
	$('ul.tabs').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.parents('div.tabs').find('.tab-block').hide().eq($(this).index()).fadeIn(150);
		return false;
	});
		
	/* Gallery */
	var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop; 
	

    //Product
    $(".e-list").css("display", "none")

    $(".e-button").on("click", function() {
        if ($(this).hasClass("open")) {

            var e_button = $(".e-button i");

            $(".e-list").slideUp(function() {
                $(".e-button").removeClass("open");
            });
            if(e_button.hasClass("fa-angle-up")) {
                e_button.removeClass("fa-angle-up");
                e_button.addClass("fa-angle-down")
            }
        } else {
            $(this).addClass("open");

            var e_button = $(".e-button i");
            setTimeout(function() {
                $(".e-list").stop().slideDown();
            }, 100);
             if(e_button.hasClass("fa-angle-down")) {
                e_button.removeClass("fa-angle-down");
                e_button.addClass("fa-angle-up")
            }
        }
    });
    //产品旋转模型加载
    $("#myCar").vc3dEye({
        imagePath:"img/V300/",
        totalImages:38,
        imageExtension:"png"
    });

});
