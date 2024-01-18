import { getStyleTheme, getTheme, } from "../../source/js/const.js";


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

function init() {
  function changeTheme(theme) {
    for (const key in styleTheme) changeProperty(styleTheme[key], theme);
  }

  let theme = getTheme();
  let styleTheme = getStyleTheme();
  changeTheme(theme.value);
}

init();