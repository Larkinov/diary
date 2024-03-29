import {
  getMessage,
  getID,
  deleteID,
  getTypeNote,
  setTypeNote,
  getDeleteNote,
} from "./const.js";
import { closeAllPopup, openMessagePopup, openPopup } from "./eventsUI.js";
import { addNewNote } from "./loadingNotes.js";

let copyright = document.querySelector(".copyright");

let notepadTitleNote = document.querySelector(".notepad__titleNote");

let btnLogin = document.querySelector(".btnLogin");

let btnAddNote = [...document.querySelectorAll(".blockNotes__btnAddNote")];

let btnSave = document.querySelector(".notepad__save");
let btnFormSubmit = document.querySelector("#btnSubmit");
let form = document.querySelector("form");

let inputDate = document.querySelector("input[name='date']");
let inputID = document.querySelector("input[name='id']");
let inputTypeNote = document.querySelector("input[name='typeNote']");
let inputTitle = document.querySelector("input[name='title']");

let inputNewNoteTitle = document.querySelector("input[name='titleNewNote']");
let errorInputNewNote = document.querySelector(".titleNewNote__error");

let btnsTypeNote = document.querySelectorAll(".blockNotes__btnNotes");
let btnsTypeDairy = document.querySelectorAll(".blockNotes__btnDairy");

let btnAddNewNote = document.querySelector(".formAddNewNote__btn");

let titleProfile = document.querySelector(".popupInfo__titleProfile");
let usernameText = document.querySelector(".popupInfo__username");

function getRuNameMonth(month) {
  let nameMonth = "";
  switch (month) {
    case 0:
      nameMonth = "Января";
      break;
    case 1:
      nameMonth = "Февраля";
      break;
    case 2:
      nameMonth = "Марта";
      break;
    case 3:
      nameMonth = "Апреля";
      break;
    case 4:
      nameMonth = "Мая";
      break;
    case 5:
      nameMonth = "Июня";
      break;
    case 6:
      nameMonth = "Июля";
      break;
    case 7:
      nameMonth = "Августа";
      break;
    case 8:
      nameMonth = "Сентября";
      break;
    case 9:
      nameMonth = "Октября";
      break;
    case 10:
      nameMonth = "Ноября";
      break;
    case 11:
      nameMonth = "Декабря";
      break;
  }
  return nameMonth;
}

function getRuNameDay(day) {
  let nameDay = "";
  switch (day) {
    case 0:
      nameDay = "Воскресенье";
      break;
    case 1:
      nameDay = "Понедельник";
      break;
    case 2:
      nameDay = "Вторник";
      break;
    case 3:
      nameDay = "Среда";
      break;
    case 4:
      nameDay = "Четверг";
      break;
    case 5:
      nameDay = "Пятница";
      break;
    case 6:
      nameDay = "Суббота";
      break;
  }
  return nameDay;
}

export function getDateNow(addWordYear) {
  let date = new Date();
  let dateNow =
    date.getDate() +
    " " +
    getRuNameMonth(date.getMonth()) +
    " " +
    date.getFullYear();
  dateNow = addWordYear ? dateNow + "г." : dateNow;
  return dateNow;
}

export function getDateYMD() {
  let date = new Date();
  let month = date.getMonth();
  month++;
  if (month < 10) month = "0" + month;
  let dateNow = date.getFullYear() + "-" + month + "-" + date.getDate();
  return dateNow;
}

function getTitle() {
  btnAddNote.forEach((btn) => {
    btn.style = "display:none";
  });
  return getDateNow(true);
}

function hideNote(type) {
  document.querySelectorAll(".blockNotes__note").forEach((note) => {
    if (note.dataset.typenote === type) note.style = "display:none";
    else note.style = "display:block";
  });
}

function clickTypeNote(btns, hideType) {
  let typeNote = getTypeNote();
  hideType === typeNote.DAIRY
    ? (typeNote.value = typeNote.NOTES)
    : (typeNote.value = typeNote.DAIRY);
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (hideType === typeNote.NOTES) {
        btnAddNote.forEach((btn) => {
          btn.style = "display:none";
        });
      } else
        btnAddNote.forEach((btn) => {
          btn.style = "display:block";
        });
      setTypeNote(typeNote);
      hideNote(hideType);
    });
  });
}

function clickAddNewNote() {
  if (!inputNewNoteTitle.value)
    errorInputNewNote.style = "display:inline-block";
  else {
    closeAllPopup();
    if (getID() !== "null") {
      addNewNote(inputNewNoteTitle.value, getTypeNote().NOTES);
      inputNewNoteTitle.value = "";
      openMessagePopup(getMessage().success_add);
    } else openMessagePopup(getMessage().error_save_withoutLogin);
  }
}

function clickBtnLogin(e) {
  if (getID() !== "null") {
    e.preventDefault();
    let popupLogin = document.querySelector(".popupLogin");
    openPopup(popupLogin, true, true);
  }
}

function clickBtnSave() {
  if (getID() !== "null") {
    inputID.value = getID();
    inputTypeNote.value = getTypeNote().value;
    inputTitle.value = notepadTitleNote.innerHTML;
    localStorage.removeItem("success");
    form.action = "./mySql/addUpdateNote.php";
    btnFormSubmit.click();
  } else {
    openMessagePopup(getMessage().error_save_withoutLogin);
  }
}

function addUserInfo() {
  let username = "";
  localStorage.getItem("username")
    ? (username = localStorage.getItem("username"))
    : (username = new URL(window.location.href).searchParams.get("name"));

  if (username) {
    usernameText.innerHTML = "Имя: " + username;
    titleProfile.innerHTML = "Профиль";
  }
}

window.onload = () => {
  addUserInfo();

  let typeDairy = getTypeNote();
  typeDairy.value = typeDairy.DAIRY;
  setTypeNote(typeDairy);

  btnLogin.addEventListener("click", (e) => clickBtnLogin(e));
  btnSave.addEventListener("click", clickBtnSave);

  btnAddNewNote.addEventListener("click", clickAddNewNote);
  inputNewNoteTitle.addEventListener("focus", () => {
    errorInputNewNote.style = "display:none";
  });

  hideNote(getTypeNote().NOTES);
  inputDate.value = getDateYMD();

  copyright.innerHTML = new Date().getFullYear() + " ©";
  notepadTitleNote.innerHTML = getTitle();

  clickTypeNote(btnsTypeDairy, getTypeNote().NOTES);
  clickTypeNote(btnsTypeNote, getTypeNote().DAIRY);

  document.querySelector(".answerYes").addEventListener("click", () => {
    deleteID();
  });
  document.querySelector(".answerNo").addEventListener("click", () => {
    closeAllPopup();
  });
  document.querySelector(".answerDeleteYes").addEventListener("click", (e) => {
    localStorage.removeItem("delete");
    form.action = "./mySql/deleteNote.php";
    let data = getDeleteNote();
    inputID.value = getID();
    inputTitle.value = data[0];
    inputDate.value = data[1];
    btnFormSubmit.click();
  });
  document.querySelector(".answerDeleteNo").addEventListener("click", () => {
    closeAllPopup();
  });
};
