var calcScreen = document.querySelector(".calculator__screen");
var operations = ["+", "-", "x", "/", "%"];

function resetScreen() {
    calcScreen.textContent = "";
}

function toggleBrackets() {
    // code
}

function displayOnScreen(value) {
        calcScreen.textContent += value;
}

function deleteLastChar() {
    calcScreen.textContent = calcScreen.textContent.slice(0,-1);
}

function calculate() {
    try{
        var current = calcScreen.textContent;
        if (calcScreen.textContent.includes("x")) {
            calcScreen.textContent=calcScreen.textContent.replace("x","*");
        }
        calcScreen.textContent = eval(calcScreen.textContent);
    }catch(error){
        alert("Syntax Error");
        calcScreen.textContent=current;
    }
}

// function isOperation(char) {
//     return operations.some((e)=> e===char);
// }