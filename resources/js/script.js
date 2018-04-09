/*jslint browser: true*/
/*global $, jQuery, alert*/
/*exported formValidationSetup, refreshErrorMessages */
/*jshint unused:false*/

$(document).ready(function () {


    /* For the sticky navigation */

    $('.js--section-intro').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });


    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    /* Mobile navigation */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});

/* Work pics enlargement on hover */

$(".js--wel, jw--wem, .js--wer").each(function () {
    $(this).data("standardWidth", $(this).width());
});

$(".js--wel").hover(function () {
    $(this).animate({
        width: "30%",
    }, 800);
    $(".js--wer").animate({
        width: "20%",
    }, 800);
}, function () {
    $(this).parent().children().each(function () {
        $(this).animate({
            width: $(this).data("standardWidth")
        }, 800);
    });
});

$(".js--wer").hover(function () {
    $(this).animate({
        width: "30%",
    }, 800);
    $(".js--wel").animate({
        width: "20%",
    }, 800);
}, function () {
    $(this).parent().children().each(function () {
        $(this).animate({
            width: $(this).data("standardWidth")
        }, 800);
    });
});

$(".js--wem").hover(function () {
    $(this).animate({
        width: "35%",
    }, 800);
    $(".js--wer").animate({
        width: "20%",
    }, 800);
}, function () {
    $(this).parent().children().each(function () {
        $(".js--wel, .js--wer").animate({
            width: $(this).data("standardWidth")
        }, 800);
        $(".js--wem").animate({
            width: "30%"
        }, 800);
    });
});

/* Work pics darkening on hover */