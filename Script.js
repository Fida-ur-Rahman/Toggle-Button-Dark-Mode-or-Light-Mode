let Modebtn = document.querySelector("#Mode");

let CurrMode = "light";
Modebtn.addEventListener('click',()=>{
    if(CurrMode == "light" ){
        CurrMode == "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        CurrMode == "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(CurrMode);
});