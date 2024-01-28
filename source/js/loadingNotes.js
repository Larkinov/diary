import { getMessage, getTypeNote, setDeleteNote } from "./const.js";
import { openMessagePopup, openPopup } from "./eventsUI.js";
import { getDateNow, getDateYMD } from "./uiScript.js";

let blockNotes = document.querySelectorAll(".blockNotes__container");
let alltextareaHidden = [...document.querySelectorAll(".hiddenTextarea")];
let notepad = document.querySelector(".notepad__textarea");
let notepadTitleNote = document.querySelector(".notepad__titleNote");
let inputTypeNote = document.querySelector("input[name='typeNote']");
let inputTitle = document.querySelector("input[name='title']");
let inputDate = document.querySelector("input[name='date']");
let popupDelete = document.querySelector(".popupDelete");

const CLASS_STYLE_NOTE = "blockNotes__note";

function getSuccessOperation() {
  let success = new URL(window.location).searchParams.get("success");

  switch (success) {
    case "1":
      if (isFirstMessageSuccess())
        openMessagePopup(getMessage().success_update);
      break;
    case "2":
      if (isFirstMessageSuccess()) openMessagePopup(getMessage().success_save);
      break;
  }
}

function isFirstMessageSuccess() {
  if (
    localStorage.getItem("success") &&
    (localStorage.getItem("success") === "1" ||
      localStorage.getItem("success") === "2")
  ) {
    return false;
  } else {
    localStorage.setItem(
      "success",
      new URL(window.location).searchParams.get("success")
    );
    return true;
  }
}

function createNoteElement(title, type, date, text) {
  let btnDelete = document.createElement("button");
  btnDelete.innerHTML = "х";
  btnDelete.classList.add("blockNotes__noteDelete");
  btnDelete.classList.add("eventPopup");
  btnDelete.addEventListener("click", () => {
    openPopup(popupDelete, true, true);
    setDeleteNote(title, date);
  });

  let div = document.createElement("div");
  div.classList.add(CLASS_STYLE_NOTE);
  div.dataset.typenote = type;
  div.dataset.titlenote = title;
  div.addEventListener("click", () => {
    notepad.value = text;
    notepadTitleNote.innerHTML = div.dataset.titlenote;
    inputTitle.value = div.dataset.titlenote;
    inputTypeNote.value = type;
    inputDate.value = date;
  });
  div.innerHTML = title;
  if (type === getTypeNote().NOTES)
    div.append(btnDelete);

  return div;
}

function createNotes() {
  alltextareaHidden.forEach((textarea) => {
    blockNotes.forEach((block) => {
      block.append(
        createNoteElement(
          textarea.dataset.titlenote,
          textarea.dataset.typenote,
          textarea.dataset.datenote,
          textarea.value
        )
      );
    });
  });
}

function createFirstDiaryNote() {
  if (
    alltextareaHidden.filter(
      (text) => text.dataset.titlenote === getDateNow(true)
    ).length <= 0
  ) {
    addNewNote(getDateNow(true), getTypeNote().DAIRY);
  }
}

export function addNewNote(title, type) {
  let hiddenTextarea = document.createElement("textarea");
  hiddenTextarea.classList.add("hiddenTextarea");
  hiddenTextarea.hidden = true;
  hiddenTextarea.dataset.titlenote = title;
  hiddenTextarea.dataset.typenote = type;
  hiddenTextarea.value = "";
  inputTitle.value = title;
  inputTypeNote.value = type;
  blockNotes.forEach((block) => {
    block.append(createNoteElement(title, type, getDateYMD(), ""));
  });
}

function loadingNotes() {
  createNotes();
  createFirstDiaryNote();
  getSuccessOperation();
}

loadingNotes();
