import { getMessage } from "./const.js";
import { openMessagePopup } from "./uiScript.js";

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

function init() {
  getSuccessOperation();
  let notesContainer = document.querySelector(".blockNotes__container");
}

init();
