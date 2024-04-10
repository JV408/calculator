let currentValue = '';
let previousValue = '';
let operator = ''; 

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
}

function appendOperator(opValue) {
    operator = opValue;
    previousValue = currentValue;
    currentValue = '';
}

function appendDecimal () {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
}

function appendClear () {
    currentDisplay.textContent = '';
    previousDisplay.textContent = '';
    currentValue = '';
    previousValue = '';
}

function operate() {
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    
    if (operator === '+') {
        return previousValue += currentValue;
    }
    else if (operator === '-') {
        return previousValue -= currentValue;
    }
    else if (operator === '*') {
        return previousValue *= currentValue;
    }
    else if (operator === '/') {
        return previousValue /= currentValue;
    }
}

numbers.forEach(btn => {
    btn.addEventListener('click', () => {
        appendNumber(btn.textContent);
        currentDisplay.textContent += btn.textContent;
    })
})

operators.forEach(op => {
    op.addEventListener('click', () => {
        appendOperator(op.textContent);
        previousDisplay.textContent = previousValue + operator;
        currentDisplay.textContent = currentValue;
    })
})

decimal.addEventListener('click', () => {
    appendDecimal();
    currentDisplay.textContent = currentValue;
})

clearall.addEventListener('click', () => {
    appendClear();
})

equal.addEventListener('click', () => {
        currentValue = operate().toString();
        currentDisplay.textContent = currentValue;
        previousDisplay.textContent = '';
})

