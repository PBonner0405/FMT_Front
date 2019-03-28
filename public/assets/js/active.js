(function ($) {
    "use strict";

    // :: Variables Active Code
    var matmin_window = $(window);
    var breakpoint = 1199;
    var dd = $("dd");
    var fullScreen = $("body")[0];

    // :: Preloader Active Code
    matmin_window.on("load", function () {
        $(".matmin-preloader").fadeOut("1000", function () {
            $(this).remove();
        });
    });

    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
    }

    // :: Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: Popover Active Code
    if ($.fn.popover) {
        $('[data-toggle="popover"]').popover();
    }

    // :: FooTable Active Code
    if ($.fn.footable) {
        $(".footable").footable();
    }

    // :: Dropdown Active Code
    if ($.fn.dropdown) {
        $("dropdown-toggle").dropdown();
    }

    // :: Accordian Active Code
    dd.filter(":nth-child(n+3)").hide();
    $("dl").on("click", "dt", function () {
        $(this).next().slideDown(700).siblings("dd").slideUp(700);
    });

    // :: PreventDefault a Click
    $('a[href="#"]').on("click", function ($) {
        $.preventDefault();
    });

    // :: Trigger Active Code
    $(".top-trigger").on("click", function () {
        $("body").toggleClass("menu-collapsed");
    });

    // :: Countdown Active Code
    if ($.fn.countdown) {
        $("#clock").countdown("2026/11/10", function (event) {
            $(this).html(event.strftime("<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>"));
        });
    }

    // :: Nice Select Active Code
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    // :: Countdown 2 Active Code
    if ($.fn.countdown) {
        $("#clock-2").countdown("2026/11/12", function (event) {
            $(this).html(event.strftime("<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>"));
        });
    }

    // :: Window Fullscreen Code
    $("#fullScreenMode").on("click", function () {
        if (screenfull.enabled) {
            screenfull.request(fullScreen);
        }
    });
})(jQuery);