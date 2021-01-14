// console.log("Yes!!!");
// alert("Alert!!!!!");
// var username = prompt("Give me username");
// alert("Welcome " + username);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickEventHandler(){
    outputDiv.innerText = "Translation : " + txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler);