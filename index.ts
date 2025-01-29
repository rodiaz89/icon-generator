import { createIcon, FormatIconObject } from "./src/index.js";

const iconConfig = {
    iconSvg: "002_01_pump",
    shape: "pin",
    mode: "rgb(0, 255, 255)",
    backgroundColor: "rgb(0, 0, 0)",
    iconColor: "rgb(0, 0, 0)",
} as FormatIconObject;

console.log(createIcon(iconConfig));