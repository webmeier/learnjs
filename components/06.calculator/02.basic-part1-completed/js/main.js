// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const isOperator = string =>
  string === 'add' ||
  string === 'subtract' ||
  string === 'multiply' ||
  string === 'divide'

const add = (n1, n2) => n1 + n2
const subtract = (n1, n2) => n1 - n2
const multiply = (n1, n2) => n1 * n2
const divide = (n1, n2) => n1 / n2

const calculate = (num1, operator, num2) => {
  const n1 = parseFloat(num1)
  const n2 = parseFloat(num2)

  if (operator === 'add') return add(n1, n2)
  if (operator === 'subtract') return subtract(n1, n2)
  if (operator === 'multiply') return multiply(n1, n2)
  if (operator === 'divide') return divide(n1, n2)
}

const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.keys')
const result = document.querySelector('.result')

keys.addEventListener('click', e => {
  const key = e.target
  const keyContent = key.textContent
  const action = key.dataset.action
  const displayedNum = result.textContent
  const previousKey = calculator.dataset.previousKey

  Array.from(key.parentNode.children).forEach(el => el.classList.remove('is-depressed'))

  if (!action) {
    if (displayedNum === '0' || previousKey === 'operator') {
      result.textContent = keyContent
    } else {
      result.textContent = displayedNum + keyContent
    }
    calculator.dataset.previousKey = 'number'
  }

  if (action === 'decimal') {
    if (previousKey === 'operator') {
      result.textContent = '0.'
    } else if (displayedNum === '0') {
      result.textContent = displayedNum + '.'
    } else if (!displayedNum.includes('.')) {
      result.textContent = displayedNum + '.'
    }
    calculator.dataset.previousKey = 'decimal'
  }

  if (isOperator(action)) {
    const firstValue = calculator.dataset.firstValue

    if (!firstValue) {
      calculator.dataset.firstValue = displayedNum
    } else if (previousKey === 'operator') {
      result.textContent = displayedNum
    } else {
      const modValue = calculator.dataset.modValue
      const operator = calculator.dataset.operator
      let calcValue

      if (!firstValue || !operator) {
        calcValue = displayedNum || 0
        calculator.dataset.firstValue = displayedNum
      } else if (modValue) {
        calcValue = calculate(firstValue, operator, modValue)
      } else {
        calculator.dataset.modValue = displayedNum
        calcValue = calculate(firstValue, operator, displayedNum)
      }

      result.textContent = calcValue
      calculator.dataset.firstValue = calcValue
    }

    key.classList.add('is-depressed')
    calculator.dataset.previousKey = 'operator'
    calculator.dataset.operator = action
  }

  if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const modValue = calculator.dataset.modValue
    const operator = calculator.dataset.operator
    let calcValue

    if (!firstValue || !operator) {
      calcValue = displayedNum
      calculator.dataset.firstValue = displayedNum
    } else if (modValue) {
      calcValue = calculate(firstValue, operator, modValue)
    } else {
      calcValue = calculate(firstValue, operator, displayedNum)
      calculator.dataset.modValue = displayedNum
    }

    result.textContent = calcValue
    calculator.dataset.firstValue = calcValue

    calculator.dataset.previousKey = 'operator'
  }

  if (!isOperator(action) && action !== 'calculate') {
    calculator.dataset.modValue = ''
  }

  if (action === 'clear') {
    if (keyContent === 'AC') {
      calculator.dataset.firstValue = ''
      calculator.dataset.modValue = ''
      calculator.dataset.previousKey = ''
      calculator.dataset.operator = ''
    } else {
      result.textContent = 0
      key.textContent = 'AC'
    }
  }

  if (action !== 'clear' && action !== 'calculate') {
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'C'
  }
})
