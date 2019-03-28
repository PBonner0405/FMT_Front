(function ($) {
    "use strict";
    
    var layout_classes = "menu-collapsed boxed-layout default";
    var topbar_classes = "top-bar-primary-color top-bar-success-color top-bar-info-color top-bar-warning-color top-bar-danger-color top-bar-red-darken-1 top-bar-red-darken-4 top-bar-red-accent-2 top-bar-pink-lighten-3 top-bar-pink-lighten-1 top-bar-pink-darken-4 top-bar-purple-darken-4 top-bar-purple-accent-3 top-bar-dark-2 top-bar-dark-3";
    var sidebar_classes = "sidebar-primary-color sidebar-success-color sidebar-info-color sidebar-warning-color sidebar-danger-color sidebar-red-darken-1 sidebar-red-darken-4 sidebar-red-accent-2 sidebar-pink-lighten-3 sidebar-pink-lighten-1 sidebar-pink-darken-4 sidebar-purple-darken-4 sidebar-purple-accent-3 sidebar-dark-2 sidebar-dark-3 template-dark template-light";
    var pattern_classes = "bg-pattern-1 bg-pattern-2 bg-pattern-3 bg-pattern-4 bg-pattern-5 bg-pattern-6 bg-pattern-7 bg-pattern-8 bg-pattern-9 bg-pattern-10 bg-pattern-11 bg-pattern-12";
    var navbar_classes = "navbar-img-1 navbar-img-2 navbar-img-3 navbar-img-4 navbar-img-5 navbar-img-6 navbar-img-7 navbar-img-8";
    var all_classes = layout_classes + topbar_classes + sidebar_classes + pattern_classes + navbar_classes;
    
    // :: niceScroll Active Code
    if ($.fn.niceScroll) {
        $("#settingsPanel").niceScroll();
    }

    // :: Settings Panel Active Code
    $(".settings-on-off").on("click", function () {
        $(".settings-panel").toggleClass("settings-active");
    });

    $(".layout_option").each(function () {
        $(this).on("click", function () {
            var getValue = $(this).attr("data-value");
            $("body").removeClass(layout_classes).addClass(getValue);
            $(".layout_option").removeClass("active");
            $(this).addClass("active");
        });
    });

    $(".mode_option").each(function () {
        $(this).on("click", function () {
            var getValue = $(this).attr("data-value");
            $("body").removeClass(sidebar_classes).addClass(getValue);
            $(".mode_option").removeClass("active");
            $(this).addClass("active");
        });
    });

    $(".topbar_option").each(function () {
        $(this).on("click", function () {
            var getValue = $(this).attr("data-value");
            $("body").removeClass(topbar_classes).addClass(getValue);
            $(".topbar_option").removeClass("active");
            $(this).addClass("active");
        });
    });

    $(".leftSidebar_option").each(function () {
        $(this).on("click", function () {
            var getValue = $(this).attr("data-value");
            $("body").removeClass(sidebar_classes).addClass(getValue);
            $(".leftSidebar_option").removeClass("active");
            $(this).addClass("active");
        });
    });

    $(".box_layout_pattern").each(function () {
        $(this).on("click", function () {
            var getValue = $(this).attr("data-value");
            $("body").removeClass(pattern_classes).addClass(getValue);
            $(".box_layout_pattern").removeClass("active");
            $(this).addClass("active");
        });
    });

    $(".navbar_img_option").each(function () {
        $(this).on("click", function () {
            var getValue = $(this).attr("data-value");
            $("body").removeClass(navbar_classes).addClass(getValue);
            $(".navbar_img_option").removeClass("active");
            $(this).addClass("active");
        });

    });

    $(".matmin-reset-btn").on("click", function () {
        $("body").removeClass(all_classes);
    });

})(jQuery);