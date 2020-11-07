const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

class Calculator {
    operator = '';

    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    addToScreen(str) {
        if (this.operator === 'res') {this.currentOperandTextElement.innerText = ''; this.operator = ''}
        if ( (str === '.' && !~this.currentOperandTextElement.innerText.indexOf(".")) || str !== '.' ) {
            this.currentOperandTextElement.innerText += str.toString();
        }
    }
            // .toLocaleString('en', { maximumFractionDigits: 0 })
    clear() {
        this.previousOperandTextElement.innerText = '';
        this.currentOperandTextElement.innerText = '';
        this.operator = '';
    }

    operationSqrt() {
        if (this.currentOperandTextElement.innerText[0] !== '-' ) {
            this.currentOperandTextElement.innerText =
                Math.sqrt(parseFloat(this.currentOperandTextElement.innerText));
        } else {
            this.currentOperandTextElement.innerText = 'Error';
            setTimeout(() => this.currentOperandTextElement.innerText = '',1000)
        }
    }

    operation(type) {
        this.operator = type;
        if (type === 'sqrt') { this.operationSqrt();
        } else {
            this.previousOperandTextElement.innerText = this.currentOperandTextElement.innerText + ' ' + type;
            this.currentOperandTextElement.innerText = '';
        }
    }

    equal() {
        switch (this.operator) {
            case "+":
                this.currentOperandTextElement.innerText =
                    (parseFloat(previousOperandTextElement.innerText.slice(0,-2)) +
                    parseFloat(this.currentOperandTextElement.innerText)).toFixed(12) * 1;
                break;
            case "-":
                this.currentOperandTextElement.innerText =
                    (parseFloat(previousOperandTextElement.innerText.slice(0,-2)) -
                    parseFloat(this.currentOperandTextElement.innerText)).toFixed(12) * 1;
                break;
            case "*":
                this.currentOperandTextElement.innerText =
                    (parseFloat(previousOperandTextElement.innerText.slice(0,-2)) *
                    parseFloat(this.currentOperandTextElement.innerText)).toFixed(12) * 1;
                break;
            case "÷":
                this.currentOperandTextElement.innerText =
                    (parseFloat(previousOperandTextElement.innerText.slice(0,-2)) /
                    parseFloat(this.currentOperandTextElement.innerText)).toFixed(12) * 1;
                break;
            case "**":
                this.currentOperandTextElement.innerText =
                    (Math.pow(parseFloat(previousOperandTextElement.innerText.slice(0,-2)),
                    parseFloat(this.currentOperandTextElement.innerText))).toFixed(12) * 1;
                break;
            //default ;
        }
        this.previousOperandTextElement.innerText = ''
        this.operator = 'res';
    }

} // End of class Calculator

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.addToScreen(button.innerText)
    });
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentOperandTextElement.innerText !== '' &&
            currentOperandTextElement.innerText !== '-' &&
            currentOperandTextElement.innerText !== '.'
        ) {
            if (this.operator !== '' && this.operator !== 'res') {equalsButton.click()}
            this.operator = button.innerText;
            calculator.operation(button.innerText);
        } else if (currentOperandTextElement.innerText === '' && button.innerText === '-') {
            currentOperandTextElement.innerText = '-'
        }
    })
});

allClearButton.addEventListener("click", () => {
    calculator.clear();
});

deleteButton.addEventListener("click", () => {
    currentOperandTextElement.innerText = currentOperandTextElement.innerText.slice(0,-1);
    if (calculator.operator === 'res') {this.operator = ''}
});

equalsButton.addEventListener("click", () => {
    if (currentOperandTextElement.innerText !== '.' &&
        currentOperandTextElement.innerText !== '') {
        calculator.equal();
    }
});
