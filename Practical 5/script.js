let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

document.getElementById("zero").onclick = function() {
    number("0");
};

document.getElementById("one").onclick = function() {
    number("1");
};

document.getElementById("two").onclick = function() {
    number("2");
};

document.getElementById("three").onclick = function() {
    number("3");
};

document.getElementById("four").onclick = function() {
    number("4");
};

document.getElementById("five").onclick = function() {
    number("5");
};

document.getElementById("six").onclick = function() {
    number("6");
};

document.getElementById("seven").onclick = function() {
    number("7");
};

document.getElementById("eight").onclick = function() {
    number("8");
};

document.getElementById("nine").onclick = function() {
    number("9");
};

document.getElementById("add").onclick = function() {
    setOperator("+");
};

document.getElementById("subtract").onclick = function() {
    setOperator("-");
};

document.getElementById("multiply").onclick = function() {
    setOperator("*");
};

document.getElementById("divide").onclick = function() {
    setOperator("/");
};

document.getElementById("equal").onclick = function() {
    calculate();
};

document.getElementById("clear").onclick = function() {
    clearDisplay();
};


function number(num) {

    if (operator == "") {
        firstNumber = firstNumber + num;
        display.value = firstNumber;
    }
    else {
        secondNumber = secondNumber + num;
        display.value = secondNumber;
    }
}


function setOperator(op) {
    operator = op;
}


function calculate() {

    let a = Number(firstNumber);
    let b = Number(secondNumber);
    let result;

    if (operator == "+") {
        result = a + b;
    }
    else if (operator == "-") {
        result = a - b;
    }
    else if (operator == "*") {
        result = a * b;
    }
    else if (operator == "/") {
        result = a / b;
    }

    display.value = result;

    firstNumber = result;
    secondNumber = "";
    operator = "";
}


function clearDisplay() {

    firstNumber = "";
    secondNumber = "";
    operator = "";

    display.value = "";
}


document.addEventListener("keydown", function(event) {

    if (event.key >= "0" && event.key <= "9") {
        number(event.key);
    }

    else if (event.key == "+" ||
             event.key == "-" ||
             event.key == "*" ||
             event.key == "/") {
        setOperator(event.key);
    }

    else if (event.key == "Enter" || event.key == "=") {
        calculate();
    }

    else if (event.key == "c" || event.key == "C") {
        clearDisplay();
    }

});