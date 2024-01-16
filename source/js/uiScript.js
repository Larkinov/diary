let copyright = document.querySelector(".copyright");

let notepadDateNow = document.querySelector(".notepad__dateNow");

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

let inputDate = document.querySelector("input[name='date']");

function closeElement(event,elementsOpen, elementClose){
    let checking = elementsOpen.filter((elem)=>event.composedPath().includes(elem));
    if (checking.length===0) {
        elementClose.style = "display:none";
    }
}

function getRuNameMonth(month){
    let nameMonth = "";
    switch(month){
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
function getRuNameDay(day){
    let nameDay = "";
    switch(day){
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

function getDateNow(addWordYear){
    let date = new Date();
    let dateNow = date.getDate() + " " + getRuNameMonth(date.getMonth()) + " " + date.getFullYear();
    dateNow = addWordYear ? dateNow + "г." : dateNow;
    return dateNow;
}

function getDateYMD(){
    let date = new Date();
    let month = date.getMonth();
    month++;
    if(month<10)
        month="0"+month;
    let dateNow = date.getFullYear() + "-" + month + "-" + date.getDate();
    return dateNow;
}

window.onload = () => {
    inputDate.value = getDateYMD();

    copyright.innerHTML = new Date().getFullYear()+" ©";
    notepadDateNow.innerHTML = getDateNow(true);

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
