// # START EDITING YOUR JAVASCRIPT HERE
// ===============

const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.keys')
const result = document.querySelector('.result')

const isOperator = string =>
  string === 'add' ||
  string === 'subtract' ||
  string === 'multiply' ||
  string === 'divide'

const getKeyType = element => {
  const action = element.dataset.action

  if (!action) return 'number'
  if (action === 'decimal') return 'decimal'
  if (isOperator(action) || action === 'calculate') return 'operator'
}

const add = (n1, n2) => parseFloat(n1) + parseFloat(n2)
const subtract = (n1, n2) => parseFloat(n1) - parseFloat(n2)
const multiply = (n1, n2) => parseFloat(n1) * parseFloat(n2)
const divide = (n1, n2) => parseFloat(n1) / parseFloat(n2)

const getOperation = operator => {
  if (operator === 'add') return add
  if (operator === 'subtract') return subtract
  if (operator === 'multiply') return multiply
  if (operator === 'divide') return divide
}

const calculate = (displayedNum, { operator, firstValue, modValue }) => {
  const operation = getOperation(operator)

  if (!firstValue || !operator) return displayedNum || 0
  if (modValue) return operation(firstValue, modValue)
  return operation(firstValue, displayedNum)
}

const createResultString = (key, displayedNum, state) => {
  const action = key.dataset.action
  const keyType = getKeyType(key)
  const keyContent = key.textContent
  const { previousKeyType } = state

  if (keyType === 'number') {
    return displayedNum === '0' || previousKeyType === 'operator'
      ? keyContent
      : displayedNum + keyContent
  }

  if (keyType === 'decimal') {
    if (previousKeyType === 'operator') return '0.'
    if (displayedNum === '0') return displayedNum + '.'
    if (!displayedNum.includes('.')) return displayedNum + '.'
    return displayedNum
  }

  if (isOperator(action)) {
    if (previousKeyType === 'operator') return displayedNum
    return calculate(displayedNum, state)
  }

  if (action === 'calculate') return calculate(displayedNum, state)
  if (action === 'clear') return 0
}

const updateState = (calculator, key, displayedNum, calculatedValue) => {
  const { action } = key.dataset
  const { firstValue, modValue, operator } = calculator.dataset

  Array.from(key.parentNode.children).forEach(el => el.classList.remove('is-depressed'))

  // Update Operator (+, -, *, /)
  if (isOperator(action)) {
    calculator.dataset.operator = action
    key.classList.add('is-depressed')
  }

  // Update firstValue
  if (isOperator(action) || action === 'calculate') {
    if (!firstValue || !operator) calculator.dataset.firstValue = displayedNum
    else calculator.dataset.firstValue = calculatedValue
  }

  // update modValue
  if (isOperator(action) || action === 'calculate') {
    if (!modValue) calculator.dataset.modValue = displayedNum
  } else {
    calculator.dataset.modValue = ''
  }

  // update previousKeyType
  calculator.dataset.previousKeyType = getKeyType(key)

  // Clear states
  if (action === 'clear' && key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.previousKey = ''
    calculator.dataset.operator = ''
  }

  if (action === 'clear' && key.textContent === 'CE') {
    key.textContent = 'AC'
  }

  if (action !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }
}

keys.addEventListener('click', e => {
  const key = e.target
  if (!key.matches('button')) return

  const displayedNum = result.textContent
  const calculatedValue = createResultString(key, displayedNum, calculator.dataset)

  result.textContent = calculatedValue

  updateState(calculator, key, displayedNum, calculatedValue)
})
