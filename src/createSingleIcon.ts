import { baseList, iconList, modeList } from "./assets/constants/index.js";
import {
  BASE_FORMAT_BADGE,
  BASE_FORMAT_BADGE_STACK,
  BASE_FORMAT_CLUSTER,
  MODE_FORMAT_SELECTED,
} from "./types.js";

export function getSingleIcon(
  shape: string,
  mode: string | undefined,
  backgroundColor: string | undefined,
  iconColor: string | undefined,
  iconSvg: string | undefined
): string {
  let baseIcon = getBaseIcon(
    shape,
    mode ? mode : MODE_FORMAT_SELECTED,
    backgroundColor ? backgroundColor : "rgb(255, 255, 255)"
  );

  const defaultIconColor = getDefaultIconColor(shape);

  //Validate if, at this point myIconColor is a rgb color
  if (iconColor && !iconColor.match(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/)) {
    throw new Error(
      `Icon color not found for color: ${iconColor}. Please use a rgb color.`
    );
  }

  let icon = getIcon(
    iconSvg ? iconSvg : "",
    iconColor ? iconColor : defaultIconColor,
    shape
  );

  baseIcon = baseIcon.replace("{{__slot__}}", icon);

  return baseIcon;
}

/**
 * Get the base icon.
 * @param shape - The shape.
 * @param mode - The mode.
 * @param backgroundColor - The background color.
 * @returns The base icon.
 */
const getBaseIcon = (shape: string, mode: string, backgroundColor: string) => {
  let baseIcon = baseList.find((base) => base.value === shape);
  let myBaseIcon = null;

  if (!baseIcon) {
    throw new Error(`Base icon not found for shape: ${shape}`);
  } else {
    myBaseIcon = baseIcon.icon;
  }

  let modeIcon = getMode(mode);
  let backgroundColorIcon = getBackgroundColor(backgroundColor);

  if (modeIcon) {
    myBaseIcon = myBaseIcon.replace("{{__mode__}}", modeIcon);
  }

  if (backgroundColorIcon) {
    myBaseIcon = myBaseIcon.replace(
      "{{__backgroundColor__}}",
      backgroundColorIcon
    );
  }

  return myBaseIcon;
};

const getMode = (mode: string) => {
  let myModeIcon = mode;

  //Check if mode is in the list (ej: error, warning, success, etc)
  let modeIcon = modeList.find((locatedMode) => locatedMode.value === mode);

  if (modeIcon) {
    myModeIcon = modeIcon.color;
  }

  //Validate if, at this point mode is a rgb color
  if (!myModeIcon.match(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/)) {
    throw new Error(
      `Mode not found for mode: ${mode}. Please use a rgb color or a valid mode.`
    );
  }

  return myModeIcon;
};

const getBackgroundColor = (backgroundColor: string) => {
  let myBgColor = "rgb(255, 255, 255)";

  if (backgroundColor) {
    myBgColor = backgroundColor;
  }

  //Validate if, at this point backgroundColor is a rgb color
  if (!myBgColor.match(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/)) {
    throw new Error(
      `Background color not found for color: ${backgroundColor}. Please use a rgb color.`
    );
  }

  return myBgColor;
};

const getIcon = (iconSvg: string, iconColor: string, shape: string) => {
  let myIcon = "";

  if (iconSvg) {
    let iconMatched = iconList.find((format) => format.value === iconSvg);

    if (iconMatched) {
      let myMode = baseList.find((locatedMode) => locatedMode.value === shape);

      let componentIcon = iconMatched.icon.replace(
        "{{__iconColor__}}",
        iconColor
      );

      myIcon = `<g transform="translate(${myMode?.translateX}, ${myMode?.translateY}) scale(${myMode?.scale})" fill="${iconColor}">
                  ${componentIcon}
                </g>`;
    }
  }

  return myIcon;
};

const getDefaultIconColor = (shape: string) => {
  let myIconColor = "rgb(0, 0, 0)";

  if (
    shape == BASE_FORMAT_BADGE ||
    shape == BASE_FORMAT_BADGE_STACK ||
    shape == BASE_FORMAT_CLUSTER
  ) {
    myIconColor = "rgb(255, 255, 255)";
  }

  return myIconColor;
};
