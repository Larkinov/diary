let popup = document.querySelector(".popup");
let popupContainer = document.querySelector(".popupContainer");
let btnClosePopup = document.querySelector(".closePopup");

let btnInfo = document.querySelector(".btnInfo");
let popupInfo = document.querySelector(".popupInfo");

let btnSettings = document.querySelector(".btnSettings");
let popupSettings = document.querySelector(".popupSettings");

let btnAddNote = [...document.querySelectorAll(".blockNotes__btnAddNote")];
let popupAddNote = document.querySelector(".popupAddNote");

let popupLogin = document.querySelector(".popupLogin");
let popupMessage = document.querySelector(".popupMessage");

let allPopup = [popupInfo, popupSettings, popupAddNote, popupLogin, popupMessage];
let elementsOpen = [...document.querySelectorAll(".eventPopup")];

function addSidebarEvents() {
    let sidebarContainer = document.querySelector(".sidebar__container");
    let sidebar = document.querySelector(".sidebar");
    let btnSidebar = document.querySelector(".notepad__burgerMenu");
  
    btnSidebar.addEventListener("click", () => {
      sidebarContainer.style = "display:block";
    });
    document.body.addEventListener("click", (e) => {
      if (
        !e.composedPath().includes(sidebar) &&
        !e.composedPath().includes(btnSidebar)
      )
        sidebarContainer.style = "display:none";
    });
}


export function closeAllPopup() {
  allPopup.forEach((elem) => {
    elem.style = "display:none";
  });
  popup.style = "display:none";
  popupContainer.style = "display:none";
}

export function openPopup(popupElement, isSmall=false, isCentral=false) {
  popupElement.style = "display:block";
  isSmall ? popup.classList.add("popupSmall") :popup.classList.remove("popupSmall");
  isCentral ? popup.classList.add("popupCentral") :popup.classList.remove("popupCentral");
  popup.style = "display:block";
  popupContainer.style = "display:flex";
}


export function openMessagePopup(message) {
  openPopup(popupMessage, true, true);
  document.querySelector(".popupMessage__message").innerHTML = message;
}

function addEventCloseElement(event) {
  let checking = elementsOpen.filter((elem) =>
    event.composedPath().includes(elem)
  );
  if (checking.length === 0 && !event.composedPath().includes(popup)) {
    closeAllPopup();
  }
}

function clickOpenPopup(btn, popupElem, isSmall=false, isCentral=false) {
  btn.addEventListener("click", () => {
    openPopup(popupElem, isSmall,isCentral);
  });
}


window.addEventListener("DOMContentLoaded", () => {
  addSidebarEvents();
  clickOpenPopup(btnInfo, popupInfo);
  clickOpenPopup(btnSettings, popupSettings, true);
  btnAddNote.forEach((btn) => {
    clickOpenPopup(btn, popupAddNote, true);
  });

  btnClosePopup.addEventListener("click", closeAllPopup);

  document.body.addEventListener("click", (e) =>
    addEventCloseElement(e)
  );
});
