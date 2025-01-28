import { createIcon, FormatIconObject } from "./src/index.js";

const iconConfig = {
    iconSvg: "002_01_pump",
    shape: "stack",
    mode: "error",
    backgroundColor: "rgb(255, 255, 255)",
    iconColor: "rgb(255, 0, 0)",
} as FormatIconObject;

console.log(createIcon(iconConfig));