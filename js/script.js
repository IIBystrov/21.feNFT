"use strict";

// variables

let menu = document.querySelector(".header__menu");

let menuDot = document.querySelectorAll(".menu__dot");
let menuDotTop = menuDot[0];
let menuDotMiddle = menuDot[1];
let menuDotBottom = menuDot[2];

let headerNav = document.querySelector(".header__nav");
let navItem = document.querySelectorAll(".nav__item");
let headerBtn = document.querySelector(".header__btn");

let header = document.querySelector(".page__header");

let modal = document.querySelector(".page__modal");
let signUpBtn = document.querySelector(".btn--sign-up");
let closeBtn = document.querySelector(".modal__close-btn");


// eventListener

menu.addEventListener("click", toggleMenu);

signUpBtn.addEventListener("click", modalOpen);
closeBtn.addEventListener("click", btnClose);

// functions

function toggleMenu() {
    menuDotTop.classList.toggle("menu__dot--top");
    menuDotMiddle.classList.toggle("menu__dot--middle");
    menuDotBottom.classList.toggle("menu__dot--bottom");

    header.classList.toggle("page__header--active");
    
    headerNav.classList.toggle("header__nav--active");
    headerBtn.classList.toggle("header__btn--active");

    navItem.forEach(element => {
        element.classList.toggle("nav__item--active")
    });
}

function modalOpen() {
    modal.classList.add("page__modal--active");
}

function btnClose() {
    modal.classList.remove("page__modal--active");
}