"use sctrict";

// variables

let menu = document.querySelector(".header__menu");

let menuLine = document.querySelectorAll(".menu__line");
let menuLineTop = menuLine[0];
let menuLineMiddle = menuLine[1];
let menuLineBottom = menuLine[2];

// eventListener

menu.addEventListener("click", toggleMenu);

// functions

function toggleMenu() {
    menuLineTop.classList.toggle("menu__line--top");
    menuLineMiddle.classList.toggle("menu__line--middle");
    menuLineBottom.classList.toggle("menu__line--bottom");
}