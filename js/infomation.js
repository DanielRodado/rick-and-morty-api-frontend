"use strict";

const currentPage = location.pathname.includes("index");

export const rick = {
    black: {
        src: `${
            currentPage ? "./" : "../../"
        }assets/img/icons8-rick-sanchez-400.png`,
        alt: "Rick Sanchez black and white",
    },
    color: {
        src: `${
            currentPage ? "./" : "../../"
        }assets/img/icons8-rick-sanchez-color-400.png`,
        alt: "Rick Sanchez in color",
    },
};

export const morty = {
    black: {
        src: `${
            currentPage ? "./" : "../../"
        }assets/img/icons8-morty-smith-400.png`,
        alt: "Morty Smith black and white",
    },
    color: {
        src: `${
            currentPage ? "./" : "../../"
        }assets/img/icons8-morty-smith-color-400.png`,
        alt: "Morty Smith in color",
    },
}; 