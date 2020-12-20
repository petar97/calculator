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

function clearData() {
    mainDisplay.textContent = "0";
    tempDisplay.textContent = "";
    a = undefined;
    b = undefined;
    result = undefined;
}

/* 
FUNCTION BREAKPOINT
*/

const mainDisplay = document.querySelector(".main-display");
const tempDisplay = document.querySelector(".temp-display");
const numbers = Array.from(document.querySelectorAll(".number"));
const operators = Array.from(document.querySelectorAll(".operator"))
const operation = document.querySelector("#operation");
const clear = document.querySelector("#clear");
const datas = Array.from(document.querySelectorAll("td"));
const changeOperator = document.querySelector("#change-operator");

const regex = /[A-z]+/;
let a;
let b;
let result;
let displayValue;
let operator;

mainDisplay.textContent = "0";

window.addEventListener("click", (e) => {
    datas.forEach(data => {
        if (data.classList.contains("pressed")) {
            data.classList.remove("pressed");
        }
    });

    if (e.target.tagName === "TD") {
        e.target.classList.add("pressed");
    }
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        

        if (regex.test(mainDisplay.textContent)) {
            mainDisplay.classList.remove("mainText");
            clearData();
        }

        if (mainDisplay.textContent.startsWith("0") ||
            mainDisplay.textContent == result) {
            mainDisplay.textContent = "";
        }

        if (mainDisplay.textContent.length < 13) {
            if (number.id === "change-operator") {
                mainDisplay.textContent = -mainDisplay.textContent;
            } else {
                mainDisplay.textContent += number.textContent;
            }
            displayValue = mainDisplay.textContent;
        }
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
    if (mainDisplay.textContent == "0" && 
    a == undefined && b == undefined) {
        mainDisplay.textContent = "0";
    } else {
        tempDisplay.textContent = "";
        b = Number(displayValue);
        result = operate(operator, a, b);

        

        if (result.toString().length < 13) {
            if (result == "Infinity") {
                mainDisplay.classList.add("mainText");
                mainDisplay.textContent = "Risky bussines you'r trying there...";
            } else {
                mainDisplay.textContent = roundToTwo(result);
                a = result;
            }
        } else {
            mainDisplay.textContent = "Too big of a number...";
        }
    }
});

clear.addEventListener("click", () => {
    clearData();
});

/* window.addEventListener("click", (e) => {
    console.log(typeof e.target.tagName);
}); */