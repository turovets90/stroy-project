$(document).ready(function(){

    /* перевод картинки svg в код */
    $('.icon img, img.icon').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });
    /* end перевод картинки svg в код */


    $(".m_slider").slick({
        infinite: true,
        arrows: false,
        dots: true,
        //autoplay: true,
        //speed: 3000,
        //autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $('.hamburger').click(function () {
        $('.main_menu_container').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu_container .mm_close').click(function () {
            $('.main_menu_container').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu_container.open").length) {
            $(".main_menu_container.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });

    $('.arrow').click(function(){
        $(this).toggleClass('act').next().slideToggle();
    });

    $('.serv_menu .hamburger2').click(function () {
        $('.serv_menu_container').slideDown();
        //$('html').toggleClass('page-noscroll');

        $('.serv_menu_container .sm_close').click(function () {
            $('.serv_menu_container').slideUp();
            //$('html').removeClass('page-noscroll');
        });
        return false;
    });

    $(".ma_slider").slick({
        infinite: true,
        arrows: true,
        dots: false,
        //fade: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $(".d_slider").slick({
        infinite: true,
        arrows: false,
        dots: true,
        //fade: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '155px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '30px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ],
        dotsClass: 'slider-paging-number',
        customPaging: function (slick) { return (slick.currentSlide + 1) + ' ' + slick.slideCount; }
    }).on('afterChange', function (event, slick, currentSlide) {

        $(this).find('*[role="tablist"]').find('li').eq(0).text(slick.options.customPaging.call(this, slick, currentSlide));

    });


    $(".reviews_slider").slick({
        infinite: true,
        arrows: true,
        dots: true,
        //autoplay: true,
        //speed: 3000,
        //autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    });



});


