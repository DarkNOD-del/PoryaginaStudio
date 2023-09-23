// Ленивая загрузка

jQuery(document).ready(function ($) {
    const hs = $(window).innerHeight();

    function lazyShowImage(){
        const sp = $(window).scrollTop() + hs;

        $('img.lazy').each( function (i, e) {
            if (sp > $(e).offset().top) {
                $(e).attr('src', $(e).data('src'));
                $(e).removeClass('lazy');
            }
        })
    }

    lazyShowImage();

    $(document).scroll(lazyShowImage);
})