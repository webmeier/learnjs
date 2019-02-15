# Answers for module 10

## Lesson 1: Text and Content

- Change an element's text with `textContent`

```js
const element = document.querySelector('.element')
element.textContent = 'New text!'
```

- Change an element's inner HTML with `innerHTML`

```js
const element = document.querySelector('.element')
element.innerHTML = '<strong>Bold text!</strong>'
```

## Lesson 2: Creating HTML Elements

Practice creating and adding elements to the DOM. Say you have the following HTML

```html
<div class="characters">
  <ul class="hobbits">
    <li>Frodo Baggins</li>
    <li>Samwise "Sam" Gamgee</li>
    <li>Meriadoc "Merry" Brandybuck</li>
    <li>Peregrin "Pippin" Took</li>
  </ul>
  <ul class="elves">
    <li>Glorfindel</li>
    <li>Elrond</li>
    <li>Arwen Evenstar</li>
  </ul>
  <ul class="humans">
    <li>Gandalf</li>
    <li>Saruman</li>
    <li>Boromir</li>
    <li>Faramir</li>
  </ul>
</div>
```

- Create a list item, `<li>Bilbo Baggins</li>`, and add it as the last item in `.hobbits`

```js
const bilbo = document.createElement('li')
bilbo.textContent = 'Bilbo Baggins'

const hobbits = document.querySelector('.hobbits')
hobbits.appendChild(bilbo)
```

Create a list item, `<li>Legolas</li>`, and insert it as the first item in `.elves`.

```js
const legolas = document.createElement('li')
legolas.textContent = 'Legolas'

const elves = document.querySelector('.elves')
elves.insertBefore(legolas, elves.children[0])
```

Create a list item, `<li>Aragorn</li>`, and insert it before `<li>Boromir</li>`.


```js
const aragon = document.createElement('li')
aragon.textContent = 'Aragon'

const humans = document.querySelector('.humans')
const boromir = humans.children[2]
humans.insertBefore(aragon, boromir)
```

## Lesson 3: Adding multiple elements to the DOM

Say you have the following HTML:

```html
<div class="characters">
  <ul class="elves">
    <li>Legolas</li>
    <li>Arwen Evenstar</li>
  </ul>
</div>
```

Do these with both methods you learned:

Add a list of humans to `.characters`. This list should have a `humans` class and contains five list items—Gandalf, Saruman, Aragon, Boromir, and Faramir.

```js
// Method 1: Replacing innerHTML
const characters = document.querySelector('.characters')
const humans = document.createElement('ul')
humansDiv.classList.add('humans')
humans.innerHTML = `
  <li>Gandalf</li>
  <li>Saruman</li>
  <li>Aragon</li>
  <li>Boromir</li>
  <li>Faramir</li>
`

characters.appendChild(humans)
```

```js
// Method 2: Appending a document fragment
const humansToAdd = ['Gandalf', 'Saruman', 'Aragon', 'Boromir', 'Faramir']
const characters = document.querySelector('.characters')

const humansDiv = document.createElement('ul')
humansDiv.classList.add('humans')
const frag = document.createDocumentFragment()

for (const human of humansToAdd) {
  const li = document.createElement('li')
  li.textContent = human
  frag.appendChild(li)
}

humansDiv.appendChild(frag)
characters.appendChild(humansDiv)
`

characters.appendChild(humans)
```

2. Add two list items—Glorifendel and Elrond—before Arwen Evenstart. Use the document fragment method.

```js
const elvesToAdd = ['Glorifendel', 'Elrond']
const elvesDiv = document.querySelector('.elves')

const frag = document.createDocumentFragment()

for (const elf of elvesToAdd) {
  const li = document.createElement('li')
  li.textContent = elf
  frag.appendChild(li)
}

elvesDiv.insertBefore(frag, elvesDiv.children[1])
```

## Lesson 4: Removing HTML Elements

```html
<ol class="humans">
  <li>Gandalf</li>
  <li>Saruman</li>
  <li>Aragorn</li>
  <li>Boromir</li>
  <li>Faramir</li>
</ol>
```

1. Remove Aragon from the HTML.
2. Add it to the end of the list.

```js
const humans = document.querySelector('.humans')
const aragon = humans.children[2]
humans.removeChild(aragon)
humans.appendChild(aragon)
```
