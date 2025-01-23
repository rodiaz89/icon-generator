import { createIcon, FormatIconObject } from "./src/index.js";

const iconConfig = {
    iconSvg: "006_03_sensor",
    shape: "marker",
    mode: "success",
} as FormatIconObject;

console.log(createIcon(iconConfig));