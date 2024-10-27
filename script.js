let display = document.getElementById('display');
let clearButton = document.getElementById('clear');
let backspaceButton = document.getElementById('backspace');
let equalsButton = document.getElementById('equals');

let currentNumber = '';
let previousNumber = '';
let operation = '';

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        switch ((link unavailable)) {
            case 'clear':
                clearCalculator();
                break;
            case 'backspace':
                backspace();
                break;
            case 'equals':
                calculateResult();
                break;
            default:
                handleInput(button.textContent);
        }
    });
});
// Handle user input
function handleInput(input) {
    if (input === '+' || input === '-' || input === '*' || input === '/') {
        operation = input;
        previousNumber = currentNumber;
        currentNumber = '';
    } else {
        currentNumber += input;
        display.value = currentNumber;
    }
}

// Clear calculator
function clearCalculator() {
    currentNumber = '';
    previousNumber = '';
    operation = '';
    display.value = '';
}

// Backspace
function backspace() {
    currentNumber = currentNumber.slice(0, -1);
    display.value = currentNumber;
}
// Calculate result
function calculateResult() {
    let result;
    switch (operation) {
        case '+':
            result = parseFloat(previousNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(previousNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(previousNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(previousNumber) / parseFloat(currentNumber);
            break;
        default:
            result = parseFloat(currentNumber);
    }
    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operation = '';
}

