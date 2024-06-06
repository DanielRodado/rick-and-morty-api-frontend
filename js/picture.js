"use strict";

import { rick, morty } from "./infomation.js";
import { randomNumber, printImg } from "./methods.js";

const $containerImg = document.getElementById("pictures");

const infoImages = [rick, morty];

printImg($containerImg, infoImages[randomNumber()]);
