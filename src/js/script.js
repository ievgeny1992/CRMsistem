$( document ).ready(function() {
    //WOW
    new WOW().init();

    //Custom WOW
    var progress = new WOW({
        boxClass:     'future-business__progress',
        callback:    
        function(box) {
            loadProgress(box);
            console.log(box);
        }
    });
    progress.init();

    //Parallax JS
    var scene = document.getElementById('js-parallax');
    var parallaxInstance = new Parallax(scene);

    var $burgerMenu = $('.js-burger-menu');
    var $burgerText = $('.js-burger-menu__text');
    var $header = $('.header');
    var $headerMenuWrap = $('.header-menu__wrap');
    var $jsScroll = $('.js-scroll');

    function loadProgress(self) {
        value = $(self).data('progress');

        if (value == 100) {
            $(self).addClass('future-business__progress_full')
        }

        if ( value !== 'auto' ) {
            value = value + '%';
        } else {
            value = '100px';
        }
        
        $(self).css('width', value);
    }

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
});