let delaySaveText = 3000;
let textarea = document.querySelector(".notepad__textarea");

const KEY_TEXT = getDateNow(true);

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

window.addEventListener("DOMContentLoaded", () => {
  getTextLocalStorage();

  let saveText = debounce((event) => {
    saveTextInLocalStorage(event);
  }, delaySaveText);
  textarea.addEventListener("input", saveText);
  textarea.addEventListener("focus", (event) => {
    if (event.target.value === "...") event.target.value = "";
  });
});
