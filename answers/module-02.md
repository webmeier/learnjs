# Answers for Module 2

## Lesson 6: Strings Numbers, and Booleans

- Create a `String` and `console.log` it

```javascript
console.log('Hello world') // Hello world
```

- Add two strings together

```javascript
console.log('Hello' + 'world') // Helloworld
console.log('Hello' + ' ' + 'world') // Hello world
```

- Create a `Number` and `console.log` it

```javascript
console.log(27) // 27
```

- Add two numbers together

```javascript
console.log(27 + 73) // 100
```

- Subtract one number from another number

```javascript
console.log(50 - 30) // 20
```

- Multiply two numbers

```javascript
console.log(5 * 10) // 50
```

- Divide one number by another number

```javascript
console.log(100 / 10) // 10
```

- Get the remainder of 500 divided by 3.

```javascript
console.log(500 % 3) // 2
```

- Create a `Boolean` and `console.log` it

```javascript
console.log(true) // true
```

---

## Lesson 7: Declaring variables

- Declare a string with `const`.

```javascript
const string = 'Hello world'
```

- Declare a variable with `let`. Call this variable `sum`. Set it to 0.
- Declare two more variables, `num1` and `num2`. Set these to 300 and 50.
- 4. Reassign `sum` with the sum of `num1` and `num2`.

```javascript
let sum = 0
console.log(sum) // 0

let num1 = 300
let num2 = 50
sum = num1 + num2
console.log(sum) // 350
```

---

## Lesson 8: Functions

- Make a function named logger that `console.log` the argument you passed into it.

```javascript
// Creating the function
function logger (arg) {
	console.log(arg)
}

// Using the function
logger(`I'm the king of the world!`) // I'm the king of the world!
```

- Make a function called `add` that adds two numbers together.

```javascript
// Creating the function
function add (num1, num2) {
	return num1 + num2
}

// Using the function
const result = add(56, 44)
console.log(result) // 100
```

- Make a function called `multiply` that multiplies two numbers together.

```javascript
// Creating the function
function multiply (num1, num2) {
	return num1 * num2
}

// Using the function
const result = add(20, 10)
console.log(result) // 200
```

---

## Lesson 9: Arrow functions

- Make a function named `ten` that takes in zero arguments and return the value 10. Try using both `()` and `_` syntax.

```javascript
// With _
const ten = _ => 10

// Verifying `ten` returns 10
const result = ten()
console.log(result) // 10
```

```javascript
// With ()
const ten = () => 10

// Verifying `ten` returns 10
const result = tenWithBrackets()
console.log(result) // 10
```

-  Make a function named `logger` that takes in one argument. It logs the argument you passed into it. Try it with and without parenthesis `()`.

```javascript
// Without ()
const logger = arg => {
	console.log(arg)
}
```

```javascript
// With ()
const logger = (arg) => {
	console.log(arg)
}
```

- Make a function called `add` that adds two numbers together. Try it with and without implicit returns

```javascript
// With implicit return
const add = (num1 , num2) => num1 + num2
```

```javascript
// Without implicit return
const add = (num1 , num2) => {
	return num1 + num2
}
```

- Make a function called `multiply` that multiplies two numbers together. Try it with and without implicit returns

```javascript
// With implicit return
const multiply = (num1 , num2) => num1 * num2
```

```javascript
// Without implicit return
const multiply = (num1 , num2) => {
	return num1 * num2
}
```

## Lesson 10: Objects

- Make an empty object

```javascript
const human = {}
```

- Make a property for your object that can be accessed with a dot notation. Get the value of this property.


```javascript
const human = {
	firstName: 'Zell'
}

// Accessing the `firstName` property
console.log(human.firstName) // Zell
```

- Make a property for your object that can only be accessed with the bracket notation. Get the value of this property.

```js
const human = {
	'first name': 'Zell'
}

// Accessing the `first name` property
console.log(human.['first name']) // Zell
```

- Set the value of a property with the dot notation

```js
const human = {
	'firstName': 'Zell'
}

// Setting another property
human.lastName = 'Liew'

// Accessing the `lastName` property
console.log(human.lastName]) // Zell
```

- Set the value of a property with the square bracket notation

```js
const human = {
	'firstName': 'Zell'
}

// Setting another property with bracket notation
human['lastName'] = 'Liew'

// Accessing the `lastName` property
console.log(human.lastName]) // Zell
```

- Make a method. Call this method

```js
const human = {
	sayName: () {
		console.log('My name is Zell')
	}
}

// Calling the method
human.sayName() // My name is Zell
```

```js
const human = {
	sayAge: (age) {
		console.log('I am ' + age + ' years old')
	}
}

// Calling the method
human.sayAge(30) // I am 30 years old
```

---

## Lesson 11: If/else

```js
if (someValue) {
  // Executes if true
} else {
  // Executes if false
}
```

Would the `if` statement execute:

1. If `someValue` is `false`? *No*
2. If `someValue` is `true`? *Yes*
3. If `someValue` is `null`? *No*
4. If `someValue` is `undefined`? *No*
5. If `someValue` is `0`? *No*
6. If `someValue` is `-1`? *Yes*
7. If `someValue` is `''`? *No*
8. If `someValue` is `'has a value!'`? *Yes*
9. If `someValue` is `{}`? *Yes*
10. If `someValue` is `{ isHavingFun: true }`? *Yes*
11. If `someValue` is `[]`? *Yes*
12. If `someValue` is `['one', 'two', 'three']`? *Yes*

---

## Lesson 12: Not operator

What's the result of each of these expressions?

1. `!2550284`. *false*
2. `!true`. *false*
3. `!NaN`. *true*
4. `!{}`. *false*
5. `!!'Pandas are adorable!'`. *true*
5. `!!''`. *false*

## Lesson 14: BOM and DOM

```js
console.log(document)
```

## Lesson 15: Selecting an element

For this HTML:

```html
<ul id="star-wars-characters">
  <li class="character luke" data-type="hero">Luke Skywalker</li>
  <li class="character yoda" data-type="master">Yoda</li>
  <li class="character badboy" data-type="villain">Darth Vader</li>
</ul>
```

- Get the `#star-wars-characters` list with `id` and `tag` selectors.

```js
// With id
const characters = document.querySelector('#star-wars-characters')

// With tag
const characters = document.querySelector('ul')
```

- From the `#star-wars-characters` list, get Luke Skywalker with `class`, `tag` and `attribute` selectors

```js
// With class
const luke = characters.querySelector('.luke')

// With tag
const luke = characters.querySelector('li')

// With attribute
const luke = characters.querySelector('[data-type=hero]')
```

- From the `#star-wars-characters` list, get Yoda with `class` and `attribute` selectors

```js
// With class
const yoda = characters.querySelector('.yoda')

// With attribute
const yoda = characters.querySelector('[data-type=master]')
```

- From the `#star-wars-characters` list, get Darth Vader with `class` and `attribute` selectors

```js
// With class
const darthVader = characters.querySelector('.badboy')

// With attribute
const darthVader = characters.querySelector('[data-type=villain]')
```

---

## Lesson 16: Changing classes

Practice adding, removing, checking for classes and toggling classes with `Element.classList`. Work through the examples in this HTML:

```html
<div class="add">Add a "red" class to me!</div>

<div class="remove">Remove the class, "remove" from me!</div>

<div class="contains1" >Do I have a "blue" class?</div>
<div class="contains2 blue">Do I have a "blue" class?</div>

<div class="toggle">Do I have a "red" class? If yes, remove it. If no, add it.</div>
```

- Add a "red" class to me!

```js
const add = document.querySelector('.add')
add.classList.add('red')
```

- Remove the class, "remove" from me!

```js
const remove = document.querySelector('.remove')
remove.classList.remove('remove')
```

- Do I have a "blue" class?

```js
const div1 = document.querySelector('.contains1')
const div2 = document.querySelector('.contains2')

div1.classList.contains('blue') // false
div2.classList.contains('blue') // true
```

- Do I have a "red" class? If yes, remove it. If no, add it.

```js
const div = document.querySelector('.toggle')
div.classList.toggle('red')
```

---

## Lesson 17: Listening to events

- Write an `click` event listener. Log something into the console so you know the listener works.

```js
document.body.addEventListener('click', evt => {
	console.log('Clicked!')
})
```

```js
const button = document.querySelector('button')
button.addEventListener('click', evt => {
	button.classList.toggle('clicked')
})
```
