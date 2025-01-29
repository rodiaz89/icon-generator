import { createIcon, iconList } from "../../../dist/src/index.js";

const iconListContainer = document.getElementById("icon-list");

iconList.forEach((icon) => {
  const iconBlockContainer = document.createElement("div");
  iconBlockContainer.classList.add("icon-block-element");
  iconBlockContainer.innerHTML = `<p>${icon.value}</p>`;

  const iconName = icon.value;

  const iconConfig = {
    iconSvg: iconName,
    shape: "marker",
    mode: "selected",
  };

  const iconSvg = createIcon(iconConfig);

  const iconElement = document.createElement("div");
  iconElement.classList.add("icon-element");
  iconElement.innerHTML = iconSvg;

  iconBlockContainer.appendChild(iconElement);
  iconListContainer.appendChild(iconBlockContainer);
});
