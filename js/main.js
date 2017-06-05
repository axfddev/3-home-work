$(function() {
    svg4everybody();
    var $images = $('.slider__item');
    var active = 0;
    var timer

    $('.slider__btn--next').on('click', function() {
        clearInterval(timer);
        nextImage();
        starTimer();
    });

    $('.slider__btn--pre').on('click', function() {
        clearInterval(timer);
        prevImage();
        starTimer();
    });

    starTimer();

    function starTimer(){
        timer = setInterval(function() {
            nextImage()
        }, 3000);
    }

    function nextImage() {
        $images.eq(active++).toggleClass('slider__item--visible');
        if(active >= $images.length) active = 0;
        $images.eq(active).toggleClass('slider__item--visible');
    }

    function prevImage() {
        $images.eq(active--).toggleClass('slider__item--visible');
        if (active < 0) active = $images.length - 1;
        $images.eq(active).toggleClass('slider__item--visible');
    }
});