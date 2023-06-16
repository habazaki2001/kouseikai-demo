
$(window).bind('load', function () {
    "use strict";
    if ($('.main_slider').length > 0) {
        $('.mv_bg').addClass('init');
        var mainSlider = $('.main_slider').slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            arrows: false,
            centerMode: false,
            centerPadding: 0,
            pauseOnHover: false,
            fade: true,
            variableWidth: false,
            draggable: true,
            pauseOnFocus: false
        });
        mainSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.main_slider li:nth-child(' + (nextSlide + 1) + ')').addClass('zoomed');
        });
        mainSlider.on('afterChange', function (event, slick, currentSlide) {
            var slideIndex = currentSlide;
            if (slideIndex === 0) {
                slideIndex = 2;
            }
            $('.main_slider li:nth-child(' + (slideIndex) + ')').removeClass('zoomed');
        });
    }


    // nav
    $(".hamburger").click(function () {
        $(this).toggleClass("is_active");
        $("nav").fadeToggle(100);
        if ($('.hamburger ').hasClass('is_active')) {
            $('.h_box .h_inner').addClass("is_active")
            $('.h_box.scroll_fixed').addClass("is_active");
            $('.to_top').removeClass('show')
            $("body").css("overflow", "hidden");
            
        }
        else {
            $('.h_box .h_inner').removeClass("is_active")
            $('.h_box.scroll_fixed').removeClass("is_active");
            $("body").css("overflow", "scroll");
        }
    });
  
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 90) {
            if ($('.hamburger ').hasClass('is_active') !== true) {
                $('.h_box').addClass('scroll_fixed');
            }
        }
        else {
            if ($('.hamburger ').hasClass('is_active') !== true) {
                $('.h_box').removeClass('scroll_fixed');
            }

        }
    });
    // tabs
    const tabWrapper = document.querySelector(".tab-wrapper");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-contents");

    tabWrapper.addEventListener("click", (e) => {
        const id = e.target.dataset.target;
        if (id) {
            // remove active from other buttons
            tabBtns.forEach((btn) => {
                btn.classList.remove("active");
                e.target.classList.add("active");
            });
            // hide other tabContents
            tabContents.forEach((content) => {
                content.classList.remove("active");
            });
            const currentContent = document.getElementById(id);
            currentContent.classList.add("active");
        }
    });



});
