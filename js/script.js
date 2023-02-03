"use sctrict";

// variables

let menu = document.querySelector(".header__menu");

let menuDot = document.querySelectorAll(".menu__dot");
let menuDotTop = menuDot[0];
let menuDotMiddle = menuDot[1];
let menuDotBottom = menuDot[2];

let headerNav = document.querySelector(".header__nav");
let headerBtn = document.querySelector(".header__btn");

// eventListener

menu.addEventListener("click", toggleMenu);

// functions

function toggleMenu() {
    menuDotTop.classList.toggle("menu__dot--top");
    menuDotMiddle.classList.toggle("menu__dot--middle");
    menuDotBottom.classList.toggle("menu__dot--bottom");

    headerNav.classList.toggle("header__nav--active");
    headerBtn.classList.toggle("header__btn--active");
}