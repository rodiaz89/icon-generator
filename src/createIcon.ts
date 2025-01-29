import { baseList } from "./assets/constants/index.js";
import { getSingleIcon } from "./createSingleIcon.js";
import { FormatIconObject } from "./types.js";

/**
 * Create an icon from the icon object.
 * @param iconObject - The icon object.
 * @returns The icon.
 */
export function createIcon(iconObject: FormatIconObject): string {
  const {
    shape,
    iconSvg = undefined,
    mode = undefined,
    backgroundColor = undefined,
    iconColor = undefined,
  } = iconObject;

  const baseIcon = getSingleIcon(
    shape,
    mode,
    backgroundColor,
    iconColor,
    iconSvg
  );

  const [innerWidth, innerHeight] = getDimensions(shape);

  const finalIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${innerWidth}px" height="${innerHeight}px" viewBox="0 0 ${innerWidth} ${innerHeight}">
      ${baseIcon}
    </svg>
  `;

  return finalIcon;
}

const getDimensions = (shape: string) => {
  const myShape = baseList.find((base) => base.value === shape);
  return [myShape!.widthDefault, myShape!.heightDefault];
};
