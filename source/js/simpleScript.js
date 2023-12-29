let copyright = document.querySelector(".copyright");
let btnInfo = document.querySelector(".btnInfo");
let btnSettings = document.querySelector(".btnSettings");
let popupInfo = document.querySelector(".popupInfo");
let popupSettings = document.querySelector(".popupSettings");


let closePopup = document.querySelectorAll(".closePopup");
let popups = document.querySelectorAll(".popup");

window.onload = () => {
    copyright.innerHTML = new Date().getFullYear()+" ©";

    closePopup.forEach((obj)=>{
        obj.addEventListener("click",()=>{
            popups.forEach((popup)=>{
                popup.style = "display:none";
            })
        })
    })

    btnInfo.addEventListener("click",()=>{
        popupInfo.style = "display:flex";
    })
    btnSettings.addEventListener("click",()=>{
        popupInfo.style = "display:flex";
    })


    document.addEventListener( 'click', (e) => {
        let withinBoundaries = e.composedPath().includes("popup");
        console.log(withinBoundaries,e.composedPath());
        if ( ! withinBoundaries ) {
            popups.forEach((popup)=>{
                popup.style = "display:none";
            })
        }
    })
}