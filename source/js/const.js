export function getTheme() {
  const THEME = { name: "THEME", light: "LIGHT", dark: "DARK", value: "" };
  if (localStorage.getItem(THEME.name))
    THEME.value = localStorage.getItem(THEME.name);
  else THEME.value = THEME.light;
  return THEME;
}

export function setTheme(theme) {
  localStorage.setItem(theme.name, theme.value);
}

export function getStyleTheme() {
  const STYLE_THEME = {
    MAIN_COLOR: ["--main-color", "rgb(247, 241, 215)", "#1C274C"],
    NOTEPAD_COLOR: [
      "--notepad-color",
      "rgb(252, 252, 252)",
      "hsl(226, 41%, 47%)",
    ],
    NOTEPAD_TEXTAREA_COLOR: ["--notepad-textarea-color", "white", "#1C274C"],
    INTERACTIVE_COLOR: ["--interactive-color", "#1C274C", "rgb(247, 241, 215)"],
    INTERACTIVE_COLOR_HOVER: [
      "--interactive-color-hover",
      "hsl(226, 41%, 47%)",
      "rgb(217, 211, 185)",
    ],
    INTERACTIVE_COLOR_ACTIVE: [
      "--interactive-color-active",
      "#001d7e",
      "rgb(227, 221, 210)",
    ],
    SHADOW_COLOR: ["--shadow-color", "#1c274c7c", "rgb(57, 51, 55)"],
    SHADOW_COLOR_ACTIVE: [
      "--shadow-color-active",
      "#1c33817c",
      "rgb(87, 81, 85)",
    ],
    POPUPSHADOW_COLOR: [
      "--popupShadow-color",
      "rgba(0, 0, 0, 0.452)",
      "rgba(0, 0, 0, 0.452)",
    ],

    WHITE_TEXT: ["--white-text", "white", "black"],
  };
  return STYLE_THEME;
}

export function getDarkImage() {
  const DARK_IMAGES = {
    burgerMenu: ["burger-menu", "burger-menu-dark"],
    save: ["save", "save-dark"],
    settings: ["settings", "settings-dark"],
    info: ["info", "info-dark"],
    authorization: ["log_in", "log_in-dark"],
    exit: ["exit", "exit-dark"],
    add: ["add", "add-dark"],
  };
  return DARK_IMAGES;
}

export function getMessage() {
  const MESSAGE = {
    error_save_withoutLogin: "Вы не вошли в систему!",
    success_signup: "Вы успешно зарегистрированы!",
    success_login: "Вы вошли в профиль",
    success_update: "Запись обновлена",
    success_save: "Запись сохранена",
    success_add: "Новая запись добавлена",
  };
  return MESSAGE;
}

export function getTypeNote() {
  const TYPE_NOTE = {
    name: "TYPE_NOTE",
    DAIRY: "DAIRY",
    NOTES: "NOTES",
    value: "",
  };
  if (localStorage.getItem(TYPE_NOTE.name))
    TYPE_NOTE.value = localStorage.getItem(TYPE_NOTE.name);
  else TYPE_NOTE.value = TYPE_NOTE.DAIRY;
  return TYPE_NOTE;
}
export function setTypeNote(typeNote) {
  localStorage.setItem(typeNote.name, typeNote.value);
}

export function getID() {
  if (localStorage.getItem("ID") !== "null") return localStorage.getItem("ID");
  else return "null";
}

export function setID(id) {
  localStorage.setItem("ID", id);
  document.cookie = "id=" + id;
}
export function deleteID() {
  localStorage.clear();
  document.cookie = "id=null";
  document.location.href = "/";
}

export function getDeleteNote() {
  if (localStorage.getItem("DELETE_NOTE")){
    let data = localStorage.getItem("DELETE_NOTE").split("/");
    return data;
  }
  else return null;
}

export function setDeleteNote(title,date) {
  let data = title+"/"+date;
  localStorage.setItem("DELETE_NOTE",data)
}

export function deleteNote() {
  console.log(getDeleteNote());
}

function init() {
  if (new URL(window.location.href).searchParams.get("id") === null) {
    if (getID() === "null" || getID() === null) {
      setID("null");
    }
  } else {
    setID(new URL(window.location.href).searchParams.get("id"));
  }
}

init();
