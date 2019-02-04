# Answers for Module 5

## Lesson 2: Changing CSS with JavaScript

Create a button.

```html
<button> Click me! </button>
```

Do the following when the button is clicked:

1. Change the button's color
2. Change the button's backgroundColor
3. Change the button's width
4. Change the button's height

```js
const button = document.querySelector('button')
button.addEventListener('click', evt => {
  button.style.color = 'blue'
	button.style.backgroundColor = 'orangered'
	button.width = '500px'
	button.height = '3em'
})
```

## Lesson 3: Getting CSS with JavaScript

Say you have the following HTML. Get its styles with both the `style` property and `getComputedStyle`. What's the difference between the values of these properties?

```html
<div style="color: red; background-color: white; font-size: 5em">Big red text!</div>
```

```js
const div = document.querySelector('div')
const style = div.style
const computedStyle = getComputedStyle(div)
```

## Lesson 4: Changing Attributes

Try these tasks:

1. Set an attribute with `Element.setAttribute`
2. Get an attribute with `Element.getAttribute`
3. Get an attribute with `Element.dataset`
4. Set an attribute with `Element.dataset`
5. Remove attribute with `Element.removeAttribute`

Let's assume we have this html:

```html
<div> This is a div </div>
```

```js
const div = document.querySelector('div')

// Set attribute with `setAttribute`
div.setAttribute('data-play', true)

// Get the attribute we just set
const attr = div.getAttribute('data-play')
console.log(attr) // true

// Set attribute with dataset
div.dataset.stripes = 3

// Get attribute with dataset
const stripes = div.dataset.stripes
console.log(stripes) // 3

// Remove attribute
div.removeAttribute('data-play')
div.removeAttribute('data-stripes)
console.log(div) // The div should have no attributes now.
```

## Lesson 8: Dom traversals

With this HTML, do the tasks below:

```js
<div class="characters">
  <ul class="hobbits">
    <li>Frodo Baggins</li>
    <li>Samwise "Sam" Gamgee</li>
    <li>Meriadoc "Merry" Brandybuck</li>
    <li>Peregrin "Pippin" Took</li>
    <li>Bilbo Baggins</li>
  </ul>
  <ul class="humans">
    <li>Gandalf</li>
    <li>Saruman</li>
    <li>Aragorn</li>
    <li>Boromir</li>
    <li>Faramir</li>
  </ul>
  <ul class="elves">
    <li>Legolas</li>
    <li>Glorfindel</li>
    <li>Elrond</li>
    <li>Arwen Evenstar</li>
  </ul>
  <ul class="enemies">
    <li>Sauron</li>
    <li>Nazgûl</li>
  </ul>
</div>
```

- Select `.characters` with `document.querySelector`

```js
const characters = document.querySelector('.characters')
```

- Select `.humans` from `.characters`

```js
const humansDiv = characters.querySelector('.humans')
```

- Select all humans with `querySelectorAll`, starting from `.humans`

```js
const humans = humansDiv.querySelectorAll('li')
```

- Select all hobbits with `children`
- Select the Merry (the hobbit)

```js
const hobbitsDiv = characters.querySelector('.hobbits)
const hobbits = hobbitsDiv.children
const merry = hobbits[2]
```

- Select `.enemies` from Sauron

```js
const elvesDiv = merry.parentElement.nextElementSibling.nextElementSibling
```

- Select Glorfindel from `.elves`

```js
const glorfindel = elvesDiv.children[1]
```

- Select Elrond from Glorfindel

```js
const elrond = glorfindel.nextElementSibling
```

- Select Legolas from Glorfindel

```js
const elrond = glorfindel.previousElementSibling
```

- Select the `.characters` div from Nazgûl

```js
const nazgul = document.querySelector('.enemies').chlidren[1]
const characters = nazgul.closest('.characters')
```
