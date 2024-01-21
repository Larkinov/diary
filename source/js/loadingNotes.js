import { getMessage } from "./const.js";
import { openMessagePopup,} from "./uiScript.js";

let blockNotes = document.querySelectorAll(".blockNotes__container");
let alltextareaHidden = document.querySelectorAll(".hiddenTextarea");
let notepad = document.querySelector(".notepad__textarea");
let notepadTitleNote = document.querySelector(".notepad__titleNote");
let inputTypeNote = document.querySelector("input[name='typeNote']");
let inputTitle = document.querySelector("input[name='title']");

const CLASS_STYLE_NOTE = "blockNotes__note";

function getSuccessOperation() {
  let success = new URL(window.location).searchParams.get("success");

  switch (success) {
    case "1":
      openMessagePopup(getMessage().success_update);
      break;
    case "2":
      openMessagePopup(getMessage().success_add);
      break;
  }
}

function createNoteElement(title, type, text){
  let div = document.createElement('div');
  div.classList.add(CLASS_STYLE_NOTE);
  div.dataset.typenote = type;
  div.dataset.titlenote = title;
  div.addEventListener("click",()=>{
    notepad.value = text;
    notepadTitleNote.innerHTML = div.dataset.titlenote;
    inputTitle.value = div.dataset.titlenote;
    inputTypeNote.value = type;
  })
  div.innerHTML = title;
  return div;
}

function createNotes(){
  alltextareaHidden.forEach(textarea=>{
    blockNotes.forEach(block=>{
      block.append(createNoteElement(textarea.dataset.titlenote,textarea.dataset.typenote, textarea.value));
    })
  })
}

export function addNewNote(title,type){

  let hiddenTextarea = document.createElement("textarea");
  hiddenTextarea.classList.add("hiddenTextarea");
  hiddenTextarea.hidden = true;
  hiddenTextarea.dataset.titlenote = title;
  hiddenTextarea.dataset.typenote = type;
  hiddenTextarea.value = "";
  inputTitle.value = title;
  inputTypeNote.value = type;

  blockNotes.forEach(block=>{
    block.append(createNoteElement(title, type, ""));
  })
}

function loadingNotes() {
  createNotes();
  getSuccessOperation();
}

loadingNotes();
