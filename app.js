//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================
const prevDisp=document.querySelector(".previous-display")

const currDisp =document.querySelector(".current-display");
const btnContainer=document.querySelector(".buttons-container");

let currOperand="";
let previousOperand="";

//* CAPTURİNG
// ? butonları taşıyan container için event tanımlaması

btnContainer.addEventListener("click",(e)=>{
   //console.log(e.target);
   if(e.target.classList.contains("num")){
    appendNumber(e.target.textContent)
    updateDisplay()
   }

});

const appendNumber=(num)=>{
    currOperand=num;
}
const updateDisplay=()=>{
    currDisp.textContent=currOperand

}
