import { setID, getMessage } from "./const.js";
import { getDateNow } from "./uiScript.js";

let delaySaveText = 1500;
let textarea = document.querySelector(".notepad__textarea");
let message = document.querySelector(".popupMessage__message");
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
  else textarea.value = "...";
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
  if (isAuth) {
    setID(new URL(window.location.href).searchParams.get("id"));
    isAuth === 1
      ? (message.innerHTML = getMessage().success_signup)
      : (message.innerHTML = getMessage().success_login);
    btnLogin.src = btnLogin.src.replace("log_in", "exit");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  checkSignUp();
  getTextLocalStorage();

  let saveText = debounce((event) => {
    saveTextInLocalStorage(event);
  }, delaySaveText);
  textarea.addEventListener("input", saveText);
  textarea.addEventListener("focus", (event) => {
    if (event.target.value === "...") event.target.value = "";
  });
});
