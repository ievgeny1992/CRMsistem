$( document ).ready(function() {
    var $burgerMenu = $('.js-burger-menu');
    var $burgerText = $('.js-burger-menu__text');
    var $header = $('.header');
    var $headerMenuWrap = $('.header-menu__wrap');

    $burgerMenu.on('click', function() {
        $header.toggleClass('header__opened');
        $headerMenuWrap.toggleClass('header-menu__wrap_opened');

        $(this).toggleClass('burger-menu--opened');
        $(this).toggleClass('burger-menu--closed');

        if($(this).hasClass('burger-menu--opened')){
            $burgerText.text(' ');
        } else {
            $burgerText.text('Меню');
        }
    });
});