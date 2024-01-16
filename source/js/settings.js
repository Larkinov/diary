import { getStyleTheme } from "./const.js";


function init(){
    
    let styleTheme = getStyleTheme();
    let theme = document.querySelector("#theme");

    theme.addEventListener("click",(event)=>{
        if(event.target.checked){
            document.documentElement.style.setProperty(styleTheme.MAIN_COLOR[0], styleTheme.MAIN_COLOR[2]);
        }
        else{
            document.documentElement.style.setProperty(styleTheme.MAIN_COLOR[0], styleTheme.MAIN_COLOR[1]);
        }
    })
}

init();