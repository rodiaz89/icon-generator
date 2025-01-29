import { createIcon, iconList, baseList } from "../../../dist/src/index.js";

const iconListContainer = document.getElementById("icon-list");

iconList.forEach((icon) => {
  const iconBlockContainer = document.createElement("div");
  iconBlockContainer.classList.add("icon-block");
  iconBlockContainer.innerHTML = `<h2>${icon.value}</h2>`;

  const iconName = icon.value;

  const iconBlockGroupContainer = document.createElement("div");
  iconBlockGroupContainer.classList.add("icon-block-group");

  baseList.forEach((base) => {
    let baseName = base.value;

    const iconConfig = {
      iconSvg: iconName,
      shape: baseName,
      mode: "selected",
    };

    const iconSvg = createIcon(iconConfig);

    const iconElement = document.createElement("div");
    iconElement.classList.add("icon-element");
    iconElement.innerHTML = iconSvg;
    iconBlockGroupContainer.appendChild(iconElement);
  });

  iconBlockContainer.appendChild(iconBlockGroupContainer);
  iconListContainer.appendChild(iconBlockContainer);
});
