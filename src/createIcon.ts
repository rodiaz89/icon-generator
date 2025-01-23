import {
  baseList,
  iconList,
  modeList,
} from "./assets/constants/index.js";
import {
  BASE_FORMAT_BADGE,
  BASE_FORMAT_BADGE_STACK,
  BASE_FORMAT_CLUSTER,
  FormatIconObject,
} from "./types.js";

/**
 * Create an icon from the icon object.
 * @param iconObject - The icon object.
 * @returns The icon.
 */
export function createIcon(iconObject: FormatIconObject): string {
  const { iconSvg, shape, mode, backgroundColor, iconColor } = iconObject;

  let baseIcon = getBaseIcon(
    shape,
    mode ? mode : "selected",
    backgroundColor ? backgroundColor : "#FFFFFF"
  );

  const defaultIconColor = getDefaultIconColor(shape);

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
  let modeIcon = modeList.find(
    (locatedMode) => locatedMode.value === mode
  );
  let myModeIcon = mode;

  if (modeIcon) {
    myModeIcon = modeIcon.color;
  }

  return myModeIcon;
};

const getBackgroundColor = (backgroundColor: string) => {
  let myBgColor = "#FFFFFF";

  if (backgroundColor) {
    myBgColor = backgroundColor;
  }

  return myBgColor;
};

const getIcon = (iconSvg: string, iconColor: string, shape: string) => {
  let myIcon = "";

  if (iconSvg) {
    let iconMatched = iconList.find(
      (format) => format.value === iconSvg
    );

    if (iconMatched) {
      let myMode = baseList.find(
        (locatedMode) => locatedMode.value === shape
      );

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
  let myIconColor = "#000000";

  if (shape == BASE_FORMAT_BADGE || shape == BASE_FORMAT_BADGE_STACK || shape == BASE_FORMAT_CLUSTER) {
    myIconColor = "#FFFFFF";
  }

  return myIconColor;
};
