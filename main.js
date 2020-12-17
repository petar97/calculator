function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function devide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "addition":
            return add(a, b);
            break;

        case "subtraction":
            return subtract(a, b);
            break;

        case "multiplication":
            return multiply(a, b);
            break;

        case "division":
            return devide(a, b);
            break;
    }

}

function roundToTwo(num) {
    if (num % 1 == 0) {
        return num;
    } else {
        return +(Math.round(num + "e+2")  + "e-2");
    }
}

function onClickOperator(operatorSign) {
    if (a != undefined) {
        if (result) {
            tempDisplay.textContent = mainDisplay.textContent;
            mainDisplay.textContent = "";
            result = undefined;
        } else {
            b = Number(displayValue);
            result = operate(operator, a, b);
            tempDisplay.textContent = roundToTwo(result);
            mainDisplay.textContent = "";
            a = result;
            result = undefined;
        }
    } else {
        a = Number(displayValue);
        mainDisplay.textContent = "";
        tempDisplay.textContent = a;
    }
    operator = operatorSign.id;
}

const mainDisplay = document.querySelector("#main-display");
const tempDisplay = document.querySelector("#temp-display");
const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"))
const operation = document.querySelector("#operation");
const clear = document.querySelector("#clear");

const regex = /[0-9]+/;
let a;
let b;
let result;
let displayValue;
let operator;

mainDisplay.textContent = "0";

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (a == undefined) {
            mainDisplay.textContent = "";
        } 
        mainDisplay.textContent += number.textContent;
        displayValue = mainDisplay.textContent;
    })
});


operators.forEach(operator => {
    operator.addEventListener("click", () => {
        switch(operator.id) {
            case "addition":
                onClickOperator(operator);
                break;

            case "subtraction":
                onClickOperator(operator);
                break;

             case "multiplication":
                onClickOperator(operator);
                break;
                        
            case "division":
                onClickOperator(operator);
                break;
                                    
        }
    })
});

operation.addEventListener("click", () => {
    tempDisplay.textContent = "";
    b = Number(displayValue);
    result = operate(operator, a, b);
    mainDisplay.textContent = roundToTwo(result);
    a = result;
});

clear.addEventListener("click", () => {
    mainDisplay.textContent = "0";
    tempDisplay.textContent = "";
    a = undefined;
    b = undefined;
    result = undefined;
});

window.addEventListener("click", (e) => {
    //console.log(typeof e.target.textContent);
});