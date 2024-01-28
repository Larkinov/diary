import { getMessage, getID } from "./const.js";
import { openMessagePopup } from "./eventsUI.js";
import { getDateNow } from "./uiScript.js";

let delaySaveText = 500;
let textarea = document.querySelector(".notepad__textarea");
let btnLogin = document.querySelector(".btnLogin");

const TITLE_KEY = getDateNow();

function saveTextInLocalStorage(event) {
  if (event.target.value === "...") {
    event.target.value = "";
  }
  localStorage.setItem(TITLE_KEY, event.target.value);
}

function getTextThisDay() {
  let f = null;
  let notes = document.querySelectorAll(".hiddenTextarea");
  notes.forEach((note) => {
    if (note.dataset.titlenote == getDateNow(true))
      f = note.value;
  });
  if(f) return f; else return false;
}

function getTextLocalStorage() {
  if (getTextThisDay()) {
    textarea.value = getTextThisDay();
  } else {
    if (localStorage.getItem(TITLE_KEY))
      textarea.value = localStorage.getItem(TITLE_KEY);
  }
}

function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

function checkSignUp() {
  let isAuth = new URL(window.location.href).searchParams.get("auth");
  if (isAuth || getID() !== "null") {
    if (isAuth == 1 && isFirstMessageAuth())
      openMessagePopup(getMessage().success_signup);

    if (isAuth == 2 && isFirstMessageAuth())
      openMessagePopup(getMessage().success_login);

    btnLogin.src = btnLogin.src.replace("log_in", "exit");
  }
}

function isFirstMessageAuth() {
  if (localStorage.getItem("auth")) {
    localStorage.setItem("auth", "2");
    return false;
  } else {
    localStorage.setItem("auth", "1");
    return true;
  }
}

function control() {
  checkSignUp();
  getTextLocalStorage();

  let saveText = debounce((event) => {
    saveTextInLocalStorage(event);
  }, delaySaveText);
  textarea.addEventListener("input", saveText);
  textarea.addEventListener("focus", (event) => {
    if (event.target.value === "...") event.target.value = "";
  });
}

control();
