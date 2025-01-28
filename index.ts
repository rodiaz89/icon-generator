import { createIcon, FormatIconObject } from "./src/index.js";

const iconConfig = {
    iconSvg: "009_01_dma_meter",
    shape: "stack",
    mode: "error",
    backgroundColor: "#FFFFFF",
    iconColor: "#FF0000",
} as FormatIconObject;

console.log(createIcon(iconConfig));