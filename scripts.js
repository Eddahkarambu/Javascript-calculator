const numberButtons = document.getElementById("numbers");
const operationButtons = document.getElementById("operations");
const equalsButton = document.getElementById("equals");


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }  
}
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
const clear =() => {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
    allClearButton.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
      })
};
const delet = () => {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
    deleteButton.addEventListener('click', button => {
        calculator.delet()
        calculator.updateDisplay()
      })
}

const appendNumber = (number) => {
    numbers.forEach(button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText)
          calculator.updateDisplay()
        })
    })
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

const chooseOperation = (operation) => {
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText)
          calculator.updateDisplay()
        })
    })
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

const compute = () => {
    equals.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
    })
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
    
}


const updateDisplay = () => {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
}

getDisplayNumber=(number)=> {
    const floatNumber = parseFloat(number)
    if (isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
}

