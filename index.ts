import { createIcon, FormatIconObject } from "./src/index.js";

const iconConfig = {
    iconSvg: "020_01_res_cell_level",
    shape: "badge",
    mode: "success",
} as FormatIconObject;

console.log(createIcon(iconConfig));