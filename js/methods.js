"use strict";

export const randomNumber = () => {
    return Math.floor(Math.random() * 2);
};

const createImg = (image) => {
    return `<img src="${image.src}" alt="${image.alt}">`;
};

export const printImg = ($HTMLElement, image) => {
    $HTMLElement.innerHTML += createImg(image.black);
    $HTMLElement.innerHTML += createImg(image.color);
};