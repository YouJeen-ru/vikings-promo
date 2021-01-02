$(function(){

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active')
    })

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
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false

    });

});