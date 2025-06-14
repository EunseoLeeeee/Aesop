$(document).ready(function () {






    const store_li = new Swiper(".store_li", {



        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        centeredSlides: false,
        loop: true,
        slidesPerView: 2.5,
        spaceBetween: 30,

           breakpoints: {
               768: {
                   slidesPerView: 4,
                   spaceBetween: 30,
               },
               1200: {
                   slidesPerView: 4,
                   spaceBetween: 30,
               },
           },
       
       
       
       
           scrollbar: {
               el: ".swiper-scrollbar",
               hide: false,
           },
        

    });


    // $(".lnb .lnb_tit .on").show().siblings().hide();

    // $(".lnb .lnb_tit .on").hover(function () {
    //     $(".lnb .lnb_tit li").fadeToggle();
    // });

    
    //수정해야함 


});
