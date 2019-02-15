# Answers to Module 6

## Lesson 1: The listening element

1. Get the listening element with `this`.
2. Get the listening element with `Event.currentTarget`.

```html
<button>Click me</button>
```

```js
const button = document.querySelector('button')
button.addEventListener('click', function (evt) {
  console.log(button === this) // true
  console.log(button === evt.currentTarget) // true
})
```

## Lesson 2: Default behavior

Prevent the default behavior a link with `href` that points to `google.com`:

```html
<a href="https://google.com">Prevent link from opening google.com!</a>
```

```js
const link = document.querySelector('a')
link.addEventListener('click', ev => {
	ev.preventDefault()
})
```

Prevent the default behavior of a checkbox:

```html
<input type="checkbox" />
```

```js
const checkbox = document.querySelector('input')
checkbox.addEventListener('click', ev => {
	ev.preventDefault()
})
```

## Lesson 3: Event Propagation

Add an event listener in the capturing phase

```js
document.body.addEventListener('click', ev => { /* Do something */}, true)
```

Add an event listener in the bubbling phase

```js
document.body.addEventListener('click', ev => { /* Do something */})
```

Answer these questions:

1. Which phase comes first? The capturing phase or the bubbling phase? *Capturing*
2. What event listeners are fired in the capturing phase? *Event listeners with `useCapture` set to true.*
3. What event listeners are fired in the target phase? *All event listeners on the listening element.*
4. What event listeners are fired in the bubbling phase? *Event listeners without `useCapture` (or `useCapture` set to false)*
5. How do you stop an event from bubbling? *Use `e.stopPropagation()`*.

## Lesson 4: Event delegation

Here's a list of famous people. Do the following:

1. Create an event listener that uses the event delegation pattern.
2. Log the element if the target matches `li`
3. Try using both pointer events and `closest` to filter the event target

<ul>
  <li><a href="#">Benjamin Franklin</a></li>
  <li><a href="#">Thomas Edison</a></li>
  <li><a href="#">Franklin Roosevelt</a></li>
  <li><a href="#">Napolean Bonaparte</a></li>
  <li><a href="#">Abraham Lincoln</a></li>
</ul>

```js
// With `closest`
const list = document.querySelector('ul')
list.addEventListener('click', ev => {
  if (ev.target.closest('li')) {
	  console.log(ev.target)
  }
})
```

(With pointer events)

```css
li a {
	pointer-events: none;
}
```

```js
// With pointer events `closest`
const list = document.querySelector('ul')
list.addEventListener('click', ev => {
  if (ev.target.matches('li')) {
	  console.log(ev.target)
  }
})
```

## Lesson 5: Removing Event Listeners

Do the following:

- Add a `click` event listener.
- Remove the event listener you've added.

```js
function listenForOneClick () {
  this.removeEventListener('click', listenForOneClick)
}

const button = document.querySelector('button')
button.addEventListener('click', listenForOneClick)
```

- Create an event listener that listens for five clicks.

```js
const listenForFiveClicks = e => {
  const elem = e.currentTarget
  const prevCount = parseInt(elem.dataset.count) || 0
  const currentCount = prevCount + 1

  elem.dataset.count = currentCount
  console.log(`clicked ${currentCount} times`)

  if (currentCount === 5) {
    elem.removeEventListener('click', listenForFiveClicks)
  }
}

const button = document.querySelector('button')
button.addEventListener('click', listenForFiveClicks)
```
