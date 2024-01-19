import { getMessage, getID } from "./const.js";
import { getDateNow, openMessagePopup } from "./uiScript.js";

let delaySaveText = 1000;
let textarea = document.querySelector(".notepad__textarea");
let btnLogin = document.querySelector(".btnLogin");

const KEY_TEXT = getDateNow();

function saveTextInLocalStorage(event) {
  if (event.target.value === "...") {
    event.target.value = "";
  }
  localStorage.setItem(KEY_TEXT, event.target.value);
}

function getTextLocalStorage() {
  if (localStorage.getItem(KEY_TEXT))
    textarea.value = localStorage.getItem(KEY_TEXT);
  else {
    let textareaHidden = document.querySelector(
      ".hiddenTextarea[data-typenote=DAIRY]"
    );
    if (!textareaHidden) textarea.value = "...";
    else textarea.value = textareaHidden.value;
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
    if (isAuth === 1) openMessagePopup(getMessage().success_signup);
    if (isAuth === 2) openMessagePopup(getMessage().success_login);
    btnLogin.src = btnLogin.src.replace("log_in", "exit");
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
