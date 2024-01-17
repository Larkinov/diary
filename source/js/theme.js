import { getStyleTheme, getDarkImage, getTheme, setTheme } from "./const.js";


function changeProperty(nameProperty, theme) {
  switch (theme) {
    case "LIGHT":
      document.documentElement.style.setProperty(
        nameProperty[0],
        nameProperty[1]
      );
      break;
    case "DARK":
      document.documentElement.style.setProperty(
        nameProperty[0],
        nameProperty[2]
      );
      break;
  }
}

function changeImageTheme(images, imagesSrc, theme) {
  for (const key in imagesSrc) {
    images.forEach((element) => {
      if (element.src.indexOf(imagesSrc[key][0]) !== -1) {
        switch (theme) {
          case "LIGHT":
            element.src = element.src.replace(
              imagesSrc[key][1],
              imagesSrc[key][0]
            );
            break;
          case "DARK":
            element.src = element.src.replace(
              imagesSrc[key][0],
              imagesSrc[key][1]
            );
            break;
        }
      }
    });
  }
}

function init() {
  function changeTheme(theme) {
    for (const key in styleTheme) changeProperty(styleTheme[key], theme);
    changeImageTheme(images, imagesSrc, theme);
  }

  let theme = getTheme();
  let styleTheme = getStyleTheme();
  let inputTheme = document.querySelector("#theme");
  let images = [...document.querySelectorAll("img")];
  let imagesSrc = getDarkImage();

  theme.value === theme.light
    ? (inputTheme.checked = false)
    : (inputTheme.checked = true);
  changeTheme(theme.value);

  inputTheme.addEventListener("click", (event) => {
    event.target.checked //add more theme?
      ? (theme.value = theme.dark)
      : (theme.value = theme.light);
    changeTheme(theme.value);
    setTheme(theme);
  });
}

init();