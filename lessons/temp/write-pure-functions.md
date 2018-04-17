# Write pure functions

A **pure function** has two characteristics:

1. It will return the same output for a given input.
2. It does not change external state. (Okay, actually it's not change external state, the correct term is it doesn't produce side effects, but we can talk about that and say actually side effects = changes in external state).

### It returns the same output for any given input

If you want to get the same output for any given input, you need to make sure your program only use input that is declared by the function.

For example, let's say you have two functions, `addTen` and `addAnotherTen`.

```js
function addTen (num) {
  return num + 10
}
```

```js
function addAnotherTen () {
  num = num + 10
}
```

If you pass 20 to `addTen`, `addTen` will always return 30, no matter how many times you call it.

On the other hand, the results from `addAnotherTen` depends on the program's state. It may change.

```js
// addTen's results remain consistent for a given input
console.log(addTen(20)) // 30
console.log(addTen(20)) // 30
console.log(addTen(20)) // 30
console.log(addTen(20)) // 30
console.log(addTen(20)) // 30
```

```js
// addAnotherTen's results changes because it uses external state
let num = 25
addAnotherTen() // num === 35
addAnotherTen() // num === 45
addAnotherTen() // num === 55
addAnotherTen() // num === 65
```

### It doesn't change external state

**Pure functions** doesn't change external state—the original input remains unchanged when you run a pure function.

```js
const num = 20
const result = addTen(20)

console.log(num) // 20
console.log(result) // 30
```

Answer these questions:

1. What is state?
2. What is a pure function?

Are the following functions pure? Why?

```js
// Function 1
function setTextContent (element, text) {
  element.textContent = text
}

// Function 2
function multiply (n1, n2) {
  return n1 * n2
}

// Function 3
function catch22 (callback) {
  const value = 22
  callback(22)
}

// Function 4
function createTextString () {
  return `<li>${item}<li>`
}
```
