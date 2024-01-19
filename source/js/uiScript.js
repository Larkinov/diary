import {
  getMessage,
  getID,
  deleteID,
  getTypeNote,
  setTypeNote,
} from "./const.js";

let copyright = document.querySelector(".copyright");

let notepadTitleNote = document.querySelector(".notepad__titleNote");

let btnInfo = document.querySelector(".btnInfo");
let popupInfo = document.querySelector(".popupInfo");
let popupContainerInfo = document.querySelector(".popupContainerInfo");

let btnSettings = document.querySelector(".btnSettings");
let popupSettings = document.querySelector(".popupSettings");
let popupContainerSettings = document.querySelector(".popupContainerSettings");

let btnLogin = document.querySelector(".btnLogin");
let popupLogin = document.querySelector(".popupLogin");
let popupContainerLogin = document.querySelector(".popupContainerLogin");

let btnAddNote = [...document.querySelectorAll(".blockNotes__btnAddNote")];
let popupAddNote = document.querySelector(".popupAddNote");
let popupContainerAddNote = document.querySelector(".popupContainerAddNote");

let btnSave = document.querySelector(".notepad__save");
let btnFormSubmit = document.querySelector("#btnSubmit");
let popupMessage = document.querySelector(".popupMessage");
let popupContainerMessage = document.querySelector(".popupContainerMessage");

let closePopup = document.querySelectorAll(".closePopup");

let sidebarContainer = document.querySelector(".sidebar__container");
let sidebar = document.querySelector(".sidebar");
let btnSidebar = document.querySelector(".notepad__burgerMenu");

let inputDate = document.querySelector("input[name='date']");
let inputID = document.querySelector("input[name='id']");
let inputTypeNote = document.querySelector("input[name='typeNote']");
let inputTitle = document.querySelector("input[name='title']");

let btnsTypeNote = document.querySelectorAll(".blockNotes__btnNotes");
let btnsTypeDairy = document.querySelectorAll(".blockNotes__btnDairy");

let btnAddNewNote = document.querySelector(".formAddNewNote__btn");

function closeElement(event, elementsOpen, elementClose) {
  let checking = elementsOpen.filter((elem) =>
    event.composedPath().includes(elem)
  );
  if (checking.length === 0) {
    elementClose.style = "display:none";
  }
}

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

function getDateYMD() {
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
  let note = document.querySelector(".blockNotes__note[data-typenote=DAIRY]");
  if (!note) return getDateNow(true);
  else return note.dataset.titlenote;
}

function clickOpenPopup(btn, popup) {
  btn.forEach((elem) => {
    elem.addEventListener("click", () => {
      popup.style = "display:flex";
    });
  });
}

function hideNote(type) {
  document.querySelectorAll(".blockNotes__note").forEach((note) => {
    if (note.dataset.typenote === type) note.style = "display:none";
    else note.style = "display:block";
  });
}

function clickTypeNote(btns, hideType) {
  let typeNote = getTypeNote();
  typeNote.value = hideType;
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (typeNote.value === typeNote.NOTES) {
        btnAddNote.forEach((btn) => {
          btn.style = "display:none";
        });
      } else
        btnAddNote.forEach((btn) => {
          btn.style = "display:block";
        });
      setTypeNote(typeNote);
      hideNote(typeNote.value);
    });
  });
}

function clickAddNewNote(){
  console.log("clickasdas");
}

export function openMessagePopup(message) {
  popupContainerMessage.style = "display:flex";
  document.querySelector(".popupMessage__message").innerHTML = message;
}

window.onload = () => {
  hideNote(getTypeNote().NOTES);
  inputDate.value = getDateYMD();

  copyright.innerHTML = new Date().getFullYear() + " ©";
  notepadTitleNote.innerHTML = getTitle();

  closePopup.forEach((obj) => {
    obj.addEventListener("click", () => {
      popupContainerSettings.style = "display:none";
      popupContainerInfo.style = "display:none";
      popupContainerMessage.style = "display:none";
      popupContainerLogin.style = "display:none";
      popupContainerAddNote.style = "display:none";
    });
  });

  clickOpenPopup([btnInfo], popupContainerInfo);
  clickOpenPopup([btnSettings], popupContainerSettings);
  clickOpenPopup(btnAddNote, popupContainerAddNote);
  clickOpenPopup([btnSidebar], sidebarContainer);

  clickTypeNote(btnsTypeDairy, getTypeNote().NOTES);
  clickTypeNote(btnsTypeNote, getTypeNote().DAIRY);

  btnLogin.addEventListener("click", (e) => {
    if (getID() !== "null") {
      e.preventDefault();
      popupContainerLogin.style = "display:flex";
    }
  });

  document.querySelector(".answerYes").addEventListener("click", () => {
    deleteID(getDateNow());
  });
  document.querySelector(".answerNo").addEventListener("click", () => {
    popupContainerLogin.style = "display:none";
  });

  btnAddNewNote.addEventListener("click",clickAddNewNote)

  btnSave.addEventListener("click", () => {
    if (getID() !== "null") {
      inputID.value = getID();
      inputTypeNote.value = getTypeNote().value;
      inputTitle.value = getDateNow(true);
      btnFormSubmit.click();
    } else {
      openMessagePopup(getMessage().error_save_withoutLogin);
    }
  });

  document.addEventListener("click", (e) => {
    closeElement(e, [btnSidebar, sidebar], sidebarContainer);
    closeElement(e, [btnInfo, popupInfo], popupContainerInfo);
    closeElement(e, [btnSettings, popupSettings], popupContainerSettings);
    closeElement(e, [btnSave, popupMessage], popupContainerMessage);
    closeElement(e, [btnLogin, popupLogin], popupContainerLogin);
    closeElement(e, [...btnAddNote, popupAddNote], popupContainerAddNote);
  });
};
