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
        case "plus":
            return add(a, b);
            break;

        case "minus":
            return subtract(a, b);
            break;

        case "multiplier":
            return multiply(a, b);
            break;

        case "divider":
            return devide(a, b);
            break;
    }

}

const mainDisplay = document.querySelector("#main-display");
const tempDisplay = document.querySelector("#temp-display");
const numbers = Array.from(document.querySelectorAll(".number"));
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const operation = document.querySelector("#operation");
const clear = document.querySelector("#clear");

const regex = /[0-9]+/;
let a;
let b;
let result;
let displayValue;
let operator;


window.addEventListener("click", (e) => {
    /* if (e.target.className == "number") {
        if (!(regex.test(display.textContent))) {
            display.textContent = "";
        }

        display.textContent += e.target.textContent;
        displayValue = display.textContent;
        console.log(displayValue);
    } */

    if (e.target.className === "number") {
        mainDisplay.textContent += e.target.textContent;
        displayValue = mainDisplay.textContent;
        //console.log(displayValue);
    }
});

addition.addEventListener("click", () => {
    if (a != undefined) {
        if (result) {
            mainDisplay.textContent = "";
            tempDisplay.textContent = result;
        } else {
            b = Number(displayValue);
            result = operate(operator, a, b);
            tempDisplay.textContent = result;
            mainDisplay.textContent = "";
            a = result;
        }
    } else {
        a = Number(displayValue);
        mainDisplay.textContent = "";
    }
    operator = "plus";
});

subtraction.addEventListener("click", () => {
    if (a != undefined) {
        if (result) {
            mainDisplay.textContent = "";
            tempDisplay.textContent = result;
        } else {
            b = Number(displayValue);
            result = operate(operator, a, b);
            tempDisplay.textContent = result;
            mainDisplay.textContent = "";
            a = result;
        }
    } else {
        a = Number(displayValue);
        mainDisplay.textContent = "";
    }
    operator = "minus";
});

multiplication.addEventListener("click", () => {
    if (a != undefined) {
        if (result) {
            mainDisplay.textContent = "";
            tempDisplay.textContent = result;
        } else {
            b = Number(displayValue);
            result = operate(operator, a, b);
            tempDisplay.textContent = result;
            mainDisplay.textContent = "";
            a = result;
        }
    } else {
        a = Number(displayValue);
        mainDisplay.textContent = "";
    }
    operator = "multiplier";
});

division.addEventListener("click", () => {
    if (a != undefined) {
        if (result) {
            mainDisplay.textContent = "";
            tempDisplay.textContent = result;
        } else {
            b = Number(displayValue);
            result = operate(operator, a, b);
            tempDisplay.textContent = result;
            mainDisplay.textContent = "";
            a = result;
        }
    } else {
        a = Number(displayValue);
        mainDisplay.textContent = "";
    }
    operator = "divider";
});

operation.addEventListener("click", () => {
    tempDisplay.textContent = "";
    b = Number(displayValue);
    mainDisplay.textContent = "";
    result = operate(operator, a, b);
    mainDisplay.textContent = result;
    a = result;
});

clear.addEventListener("click", () => {
    mainDisplay.textContent = "";
    tempDisplay.textContent = "";
    a = undefined;
    b = undefined;
});

window.addEventListener("click", (e) => {
    //console.log(typeof e.target.textContent);
});