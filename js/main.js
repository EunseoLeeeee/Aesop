$(document).ready(function () {



    // $(".depth2").hide();
    // $(".gnb>li").hover(function () {
    //     $(this).find(".depth2").stop().fadeToggle();
    // });


    $(".search").hide();
    $(".util> .search_btn").click(function () {
        $(".search").fadeIn();
    });
    $(".search .close").click(function () {
        $(".search").fadeOut();
    });


    const best = new Swiper(".best", {



        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,

        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },




        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },


    });



    $("nav").hide()
    $(".menu").click(function () {
        $("nav").fadeIn();
    });
    $(".close").click(function () {
        $("nav").fadeOut();
    });




    $(".top").click(function () {
        $(window).scrollTop();
    });



    if ($(window).width() <= 768) {
        $("#campaign p").find("br").hide();
    }

    // 창 크기가 변경될 때마다 실행되도록 이벤트를 추가
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $("#campaign p").find("br").hide();
        } else {
            // 768px 초과일 경우 <br> 태그를 다시 보이게 처리
            $("#campaign p").find("br").show();
        }
    });





});