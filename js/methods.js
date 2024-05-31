"use strict";

export const random = () => {
    return Math.floor(Math.random() * 2);
};

const createImg = (obj) => {
    return `<img src="${obj.src}" alt="${obj.alt}">`;
};

export const printImg = ($HTMLElement, obj) => {
    $HTMLElement.innerHTML += createImg(obj.black);
    $HTMLElement.innerHTML += createImg(obj.color);
};