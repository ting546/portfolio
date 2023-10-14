$(function() {
    $(".burger").on("click", function() {
        $("body").toggleClass("lock");
        $(".menu__nav").toggleClass("nav-active");
        $(this).toggleClass("burger-active");
    });
    $(".questions__arrow").on("click", function() {
        if ($(".questions__items").hasClass("one")) {
            $(".questions__arrow").not($(this)).removeClass('questions__arrow-active');
            $(".questions__active-text").not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("questions__arrow-active").next().slideToggle(300);
    });

    $(".team__slider").slick({
        centerMode: true,
        centerPadding: "0px",
        arrows: false,
        slidesToShow: 4,
        dots: true,
        autoplay: true,

        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 649,
                settings: {
                    centerMode: true,
                    centerPadding: "100px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    centerPadding: "80px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 516,
                settings: {
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});
AOS.init();
AOS.init({
    offset: 160, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});