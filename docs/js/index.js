$(function () {

    // スライダーのjs
    $('.slick01').slick({
        autoplay:true,
        autoplaySpeed:3000,
        centerMode: true,
        centerPadding: '100px',
        dots:true,
        arrows: false,
    });

    $('.slick02').slick({
      autoplay:true,
      autoplaySpeed:2000,
      arrows: false,
    });

    $('.one-time').slick();

    $('.one-time_02').slick();

    $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
    });

});