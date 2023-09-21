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

// Темная тема
theme_icon_header = document.getElementById("theme-icon-header")
theme_icon_burger = document.getElementById("theme-icon-burger")
currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    document.body.classList.add("dark");
    theme_icon_header.src = 'images/sun.png';
    theme_icon_burger.src = 'images/sun.png';
}

function switchTheme()
{
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark'))
    {
        theme_icon_header.src = 'images/sun.png';
        theme_icon_burger.src = 'images/sun.png';
        localStorage.setItem("theme", "dark");
    }
    else
    {
        theme_icon_header.src = 'images/moon.png';
        theme_icon_burger.src = 'images/moon.png';
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
            'transition': '.3s'
        });
    } 
    else 
    {
        header.css({
            'padding': '15px 0',
            'transition': '.3s'
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
        document.querySelector("body").style.overflow = "auto"
    });
}