$(function(){

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 2,
            showinfo : 2
        }
    });


    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button  class="slick-btn slick-prev"><img src="../images/arrow-left.png" alt="arrowL"></button>',
        nextArrow: '<button  class="slick-btn slick-next"><img src="../images/arrow-right.png" alt="arrowR"></button>',
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false

    });

});