// Навигация по сайту
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute("href");
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}



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