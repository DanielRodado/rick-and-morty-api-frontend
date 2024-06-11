"use strict";

import { rick, morty } from "./infomation.js";
import { randomNumber, printImg } from "./methods.js";

const $containerImg = document.getElementById("pictures");
const $buttonScroll = document.getElementById("scrollButton");

const infoImages = [rick, morty];

printImg($containerImg, infoImages[randomNumber()]);

window.addEventListener("scroll", () => {
    scrollY > 200
        ? $buttonScroll.classList.add("show")
        : $buttonScroll.classList.remove("show");
});

$buttonScroll.addEventListener("click", () => {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
