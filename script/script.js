var calcScreen = document.querySelector(".calculator__screen");
var bracketsCounter = 0;
var operators = ["+", "-", "x", "/", "%"];

function resetScreen() {
    calcScreen.textContent = "";
    bracketsCounter=0;
}

function toggleBrackets() {
    if(bracketsCounter===0 || isOperator(calcScreen.textContent.slice(-1)) || calcScreen.textContent.slice(-1)==="("){
            calcScreen.textContent += "(";
            bracketsCounter++;
    }
    else if(bracketsCounter>0 && !isOperator(calcScreen.textContent.slice(-1))){
        calcScreen.textContent += ")";
        bracketsCounter--;
    }
}

function displayOnScreen(value) {
        calcScreen.textContent += value;
}

function deleteLastChar() {
    if (calcScreen.textContent.slice(-1)==="(") {
        bracketsCounter--;
    }
    else if(calcScreen.textContent.slice(-1)===")"){
        bracketsCounter++;
    }
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

function isOperator(char) {
    return operators.some((e)=> e===char);
}