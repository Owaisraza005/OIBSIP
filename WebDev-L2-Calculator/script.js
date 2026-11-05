const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");

let expression = "";

// Update the calculator display
function updateDisplay() {
    expressionDisplay.textContent = expression || "0";

    if (!expression) {
        resultDisplay.textContent = "0";
    }
}

// Check whether a character is an operator
function isOperator(character) {
    return ["+", "-", "*", "/"].includes(character);
}

// Add a number or operator to the expression
function appendValue(value) {
    const lastCharacter = expression.slice(-1);

    if (value === ".") {
        const currentNumber = expression.split(/[+\-*/]/).pop();

        if (currentNumber.includes(".")) return;

        if (!currentNumber) {
            expression += "0";
        }
    }

    if (isOperator(value)) {
        if (!expression && value !== "-") return;

        if (isOperator(lastCharacter)) {
            if (value === "-" && lastCharacter !== "-") {
                expression += value;
            } else {
                expression = expression.slice(0, -1) + value;
            }
        } else {
            expression += value;
        }
    } else {
        expression += value;
    }

    resultDisplay.textContent = "";
    updateDisplay();
}

// Convert expression into numbers and operators
function tokenize(input) {
    const tokens = [];
    let number = "";

    for (let i = 0; i < input.length; i++) {
        const character = input[i];

        const isUnaryMinus =
            character === "-" &&
            (i === 0 || isOperator(input[i - 1]));

        const isUnaryPlus =
            character === "+" &&
            (i === 0 || isOperator(input[i - 1]));

        if (
            (character >= "0" && character <= "9") ||
            character === "." ||
            isUnaryMinus ||
            isUnaryPlus
        ) {
            number += character;
        } else if (isOperator(character)) {
            if (number === "" || number === "+" || number === "-") {
                throw new Error("Invalid expression");
            }

            tokens.push(Number(number));
            tokens.push(character);
            number = "";
        } else {
            throw new Error("Invalid character");
        }
    }

    if (number === "" || number === "+" || number === "-") {
        throw new Error("Incomplete expression");
    }

    const finalNumber = Number(number);

    if (!Number.isFinite(finalNumber)) {
        throw new Error("Invalid number");
    }

    tokens.push(finalNumber);

    return tokens;
}

// Perform arithmetic without eval()
function calculate(input) {
    const tokens = tokenize(input);

    // First pass: multiplication and division
    const intermediate = [tokens[0]];

    for (let i = 1; i < tokens.length; i += 2) {
        const operator = tokens[i];
        const nextNumber = tokens[i + 1];

        if (operator === "*") {
            const previousNumber = intermediate.pop();
            intermediate.push(previousNumber * nextNumber);
        } else if (operator === "/") {
            if (nextNumber === 0) {
                throw new Error("Cannot divide by zero");
            }

            const previousNumber = intermediate.pop();
            intermediate.push(previousNumber / nextNumber);
        } else {
            intermediate.push(operator, nextNumber);
        }
    }

    // Second pass: addition and subtraction
    let answer = intermediate[0];

    for (let i = 1; i < intermediate.length; i += 2) {
        const operator = intermediate[i];
        const nextNumber = intermediate[i + 1];

        if (operator === "+") {
            answer += nextNumber;
        } else if (operator === "-") {
            answer -= nextNumber;
        }
    }

    if (!Number.isFinite(answer)) {
        throw new Error("Invalid calculation");
    }

    return Number(answer.toPrecision(12));
}

// Calculate and display the result
function showResult() {
    if (!expression) return;

    try {
        const answer = calculate(expression);
        resultDisplay.textContent = answer;
    } catch (error) {
        resultDisplay.textContent = error.message;
    }
}

// Clear the calculator
function clearCalculator() {
    expression = "";
    resultDisplay.textContent = "0";
    updateDisplay();
}

// Remove the last character
function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    resultDisplay.textContent = "";
    updateDisplay();
}

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;
        const action = button.dataset.action;

        if (action === "clear") {
            clearCalculator();
        } else if (action === "backspace") {
            deleteLastCharacter();
        } else if (action === "calculate") {
            showResult();
        } else if (value !== undefined) {
            appendValue(value);
        }
    });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if ((key >= "0" && key <= "9") || key === ".") {
        appendValue(key);
    } else if (isOperator(key)) {
        appendValue(key);
    } else if (key === "Enter" || key === "=") {
        showResult();
    } else if (key === "Backspace") {
        deleteLastCharacter();
    } else if (key === "Escape") {
        clearCalculator();
    }
});

updateDisplay();