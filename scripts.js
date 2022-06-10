const numberButtons = document.querySelectorAll("[id='numbers']");
const operationButtons = document.querySelectorAll("[id='operations']");
const equalsButton = document.getElementById("equals");
const deleteButton = document.getElementById('delete')
const allClearButton = document.getElementById('clear')
const previousOperandTextElement = document.getElementById('data-previous-operand')
const currentOperandTextElement = document.getElementById('data-current-operand')

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
  } 
   subtract = (num1,num2) => {
    const answer= num1-num2;
    return answer 
  }
  
   add = (num1,num2) => {
    const answer= num1+num2; 
    return answer
  }
  
  
   multiply = (num1,num2) => {
    const answer= num1*num2; 
    return answer    
  }
  
  
   divide = (num1,num2) => {
      const answer= num1/num2; 
      return answer   
  }
  
  
   operate =(operation,num1,num2) =>{
    if (operation === "-"){
       return this.subtract(num1,num2)
    }
  
    if (operation === "+"){
       return this.add(num1,num2)
    }
  
    if (operation === "*"){
      return this.multiply(num1,num2)
    }
   
  
    if (operation === "/"){
      return this.divide(num1,num2)
    }
   
  }
  
  clear =() => {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined

};
 delet = () => {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  
  appendNumber = (number) => {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

 chooseOperation = (operation) => {
   
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

compute = () => {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
     computation = this.operate(this.operation,prev,current)   
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
    
}


  updateDisplay = () => {
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
  const stringNumber = number.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
    integerDisplay = ''
  } else {
    integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`
  } else {
    return integerDisplay
  }
}

}
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement) 


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})


equals.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})


deleteButton.addEventListener('click', button => {
  calculator.delet()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

