// Темная тема
theme_icon_header = document.getElementById("theme-icon-header")
theme_icon_burger = document.getElementById("theme-icon-burger")
currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.add("dark");
    theme_icon_header.src = theme_icon_header.getAttribute('data-sun');
    theme_icon_burger.src = theme_icon_burger.getAttribute('data-sun');
}

function switchTheme()
{
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark'))
    {
        theme_icon_header.src = theme_icon_header.getAttribute('data-sun');
        theme_icon_burger.src = theme_icon_header.getAttribute('data-sun');
        localStorage.setItem("theme", "dark");
    }
    else
    {
        theme_icon_header.src = theme_icon_header.getAttribute('data-moon');
        theme_icon_burger.src = theme_icon_header.getAttribute('data-moon');
        localStorage.setItem("theme", "light");
    }
}

theme_icon_header.addEventListener("click", function(event) {
    switchTheme();
});

theme_icon_burger.addEventListener("click", function(event) {
    switchTheme();
});



// Шапка сайта при скролле
let header = $('.header-line');

$(window).scroll(function() 
{
    if($(this).scrollTop() > 300) 
    {
        header.css({
            'padding': '5px 0',
            'transition': '.5s'
        });
    } 
    else 
    {
        header.css({
            'padding': '15px 0',
            'transition': '.5s'
        });
    }
});



// Бургер меню
function burgerClick(x) {
    x.classList.toggle("change");

    if (document.getElementById("burger-overlay").style.height == "100%")
    {
        document.getElementById("burger-overlay").style.height = "0%";
        document.querySelector("body").style.overflow = "auto"
    }
    else {
        document.getElementById("burger-overlay").style.height = "100%";
        document.querySelector("body").style.overflow = "hidden"
    }
}

const burger_btns = document.querySelectorAll('.burger-menu-btn');

for (let burger_btn of burger_btns){
    burger_btn.addEventListener("click", function(event) {
        document.querySelector(".burger-menu").classList.toggle("change");
        document.getElementById("burger-overlay").style.height = "0%";
    });
}



// Анимация при скроле
wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();