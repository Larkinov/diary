let copyright = document.querySelector(".copyright");

let btnInfo = document.querySelector(".btnInfo");
let popupInfo = document.querySelector(".popupInfo");
let popupContainerInfo = document.querySelector(".popupContainerInfo");

let btnSettings = document.querySelector(".btnSettings");
let popupSettings = document.querySelector(".popupSettings");
let popupContainerSettings = document.querySelector(".popupContainerSettings");


let closePopup = document.querySelectorAll(".closePopup");
let popups = document.querySelectorAll(".popup");

let sidebarContainer = document.querySelector(".sidebar__container");
let sidebar = document.querySelector(".sidebar");
let btnSidebar = document.querySelector(".notepad__burgerMenu");


function closeElement(event,elementsOpen, elementClose){
    let checking = elementsOpen.filter((elem)=>event.composedPath().includes(elem));
    console.log(checking);
    if (checking.length===0) {
        elementClose.style = "display:none";
    }
}

window.onload = () => {
    copyright.innerHTML = new Date().getFullYear()+" ©";

    closePopup.forEach((obj)=>{
        obj.addEventListener("click",()=>{
            popupContainerSettings.style = "display:none";
            popupContainerInfo.style = "display:none";
        })
    })

    btnInfo.addEventListener("click",()=>{
        popupContainerInfo.style = "display:flex";
    })
    btnSettings.addEventListener("click",()=>{
        popupContainerSettings.style = "display:flex";
    })
    btnSidebar.addEventListener("click",()=>{
        sidebarContainer.style = "display:block";
    })


    document.addEventListener( 'click', (e) => {
        closeElement(e, [btnSidebar,sidebar], sidebarContainer);
        closeElement(e, [btnInfo,popupInfo], popupContainerInfo);
        closeElement(e, [btnSettings,popupSettings], popupContainerSettings);
    })
}