"use strict";

import { rick, morty } from "./infomation.js";
import { randomNumber, printImg } from "./methods.js";

const $containerImg = document.getElementById("pictures");

const InfoImages = [rick, morty];

printImg($containerImg, InfoImages[randomNumber()]);
