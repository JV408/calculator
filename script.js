let currentValue = '';
let previousValue = '';
let operator = ''; 
let operatorClicked = false;
let result = 0;

const numbers = document.querySelectorAll('[data-number]')
const operators = document.querySelectorAll('[data-operator]')
const equal = document.querySelector('[data-equal]')
const clearall = document.querySelector('[data-clearall]')
const decimal = document.querySelector('[data-decimal]')
const del = document.querySelector('[data-del]')
const currentDisplay = document.querySelector('.currentOperand')
const previousDisplay = document.querySelector('.previousOperand')
    
function appendNumber(numValue) {
    currentValue += numValue;
    currentDisplay.textContent += numValue;
}

function appendOperator(opValue) {
    if (operatorClicked) {
        operate();
        previousValue = result;
    } else {
        previousValue = currentValue;
    }
    currentValue = '';
    operator = opValue;
    previousDisplay.textContent = previousValue + operator;
    currentDisplay.textContent = '';
    operatorClicked = true;
}

function appendDecimal () {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        currentDisplay.textContent = currentValue;
    }
}

function appendClear () {
    currentDisplay.textContent = '';
    previousDisplay.textContent = '';
    currentValue = '';
    previousValue = '';
    operatorClicked = false;
}

function operate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    
    if (operator === '+') {
        result = previousValue + currentValue;
    }
    else if (operator === '-') {
        result = previousValue - currentValue;
    }
    else if (operator === '*') {
        result = previousValue * currentValue;
    }
    else if (operator === '/') {
        result = previousValue / currentValue;
    }
    result = result.toString();
    currentDisplay.textContent = result;
    return result;
}

numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        appendNumber(btn.textContent);
    })
})

operators.forEach(op => {
    op.addEventListener('click', () => {
        appendOperator(op.textContent);
    })
})

decimal.addEventListener('click', () => {
    appendDecimal();
})

clearall.addEventListener('click', () => {
    appendClear();
})

equal.addEventListener('click', () => {
        currentValue = operate().toString();
        currentDisplay.textContent = currentValue;
        previousDisplay.textContent = '';
})

