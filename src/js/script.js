$( document ).ready(function() {
    var $burgerMenu = $('.js-burger-menu');
    var $burgerText = $('.js-burger-menu__text');
    var $header = $('.header');
    var $headerMenuWrap = $('.header-menu__wrap');
    var $jsScroll = $('.js-scroll');
    var $progress = $('.future-business__progress');

    function ShowHideBurgerMenu() {
        $header.toggleClass('header__opened');
        $headerMenuWrap.toggleClass('header-menu__wrap_opened');

        $burgerMenu.toggleClass('burger-menu--opened');
        $burgerMenu.toggleClass('burger-menu--closed');

        if($burgerMenu.hasClass('burger-menu--opened')){
            $burgerText.text(' ');
        } else {
            $burgerText.text('Меню');
        }
    }

    $jsScroll.click(function() {
        var element = $(this).data('link');

        ShowHideBurgerMenu();

        $([document.documentElement, document.body]).animate({
            scrollTop: $("." + element).offset().top
        }, 1000);
    });

    $burgerMenu.on('click', function() {
        ShowHideBurgerMenu();
    });

    $.each($progress, function() {
        value = $(this).data('progress');
        $(this).css('width', value + '%');

        if (value == 100) {
            $(this).addClass('future-business__progress_full')
        }
    });

});