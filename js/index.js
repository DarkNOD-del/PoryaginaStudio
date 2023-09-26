// Портфолио

$('.slideshow').each( function() {
    var $slideshow = $(this);
    $slideshow.imagesLoaded( function() {
        $slideshow.skidder({
        slideClass    : '.slide',
        animationType : 'css',
        scaleSlides   : true,
        maxWidth      : 1300,
        maxHeight     : 500,
        paging        : true,
        autoPaging    : false,
        pagingWrapper : ".skidder-pager",
        pagingElement : ".skidder-pager-dot",
        swiping       : true,
        leftaligned   : false,
        cycle         : true,
        jumpback      : false,
        speed         : 400,
        autoplay      : true,
        autoplayResume: true,
        interval      : 2000,
        transition    : "slide",
        afterSliding  : function() {},
        afterInit     : function() {}
        });
    });
});

$(window).smartresize(function(){
    $('.slideshow').skidder('resize');
});