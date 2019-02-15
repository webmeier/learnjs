# Answers for Module 11

## Lesson 1: Intro to forms

Create a form with the form tag. Make sure your form has at least one field and a submit button.

```html
<form method="post" action="/some-url">
  <label for="first-name">First name</label>
  <input type="text" name="first-name" id="first-name">
  <button type="submit">Submit form</button>
</form>
```

Prevent a form's default behavior, create `console.log` statements after preventing the default behavior, then continue the submission process.

```js
const form = document.querySelector('form')
form.addEventListener('click', ev => {
	ev.preventDefault()

	console.log('do stuff')

	form.submit()
})
```

## Lesson 3: Form fields and their events

1. Create a text field
	1. Get the value of the field when the `input` event occurs
	2. Get the value of the field when the `focus` event occurs
	3. Get the value of the field when `focusout` or `blur` events occur

```html
<input type="text" />>
```

```js
const input = document.querySelector('input')
input.addEventListener('input', ev => {
  console.loc(ev.target.value)
})

input.addEventListener('focus', ev => {
  console.loc(ev.target.value)
})

input.addEventListener('blur', ev => {
  console.loc(ev.target.value)
})
```

Create five checkboxes

	1. Check three of the five checkboxes
	2. Get checked checkboxes with JavaScript
	3. Get checked checkboxes when the `change` event fires

```html
<input type="checkbox" name="checkbox1" value="1" checked />
<input type="checkbox" name="checkbox2" value="2"  />
<input type="checkbox" name="checkbox3" value="3"  />
<input type="checkbox" name="checkbox4" value="4" checked />
<input type="checkbox" name="checkbox5" value="5" checked />
```

```js
// Getting checked checkboxes
const checkboxes = [...document.querySelectorAll('input')]
const checkedCheckboxes = checkboxes.filter(checkbox => checkbox.checked)
console.log(checkedCheckboxes)
```

```js
// Get all checked checkbox when change fires
document.addEventListener('change', ev => {
  const checkboxes = [...document.querySelectorAll('input')]
  const checkedCheckboxes = checkboxes.filter(checkbox => checkbox.checked)
  console.log(checkedCheckboxes)
})
```

3. Create five radio buttons
	1. Select a radio button
	2. Get the value of the selected radio
	3. Get the value of the selected radio when the `change` event fires

```html
<div class="radio">
	<label for="r1">Radio 1</label>
	<input type="radio" value="r1" checked />
</div>
<div class="radio">
	<label for="r2">Radio 2</label>
	<input type="radio" value="r2" />
</div>
<div class="radio">
	<label for="r3">Radio 3</label>
	<input type="radio" value="r3" />
</div>
<div class="radio">
	<label for="r4">Radio 4</label>
	<input type="radio" value="r4" />
</div>
<div class="radio">
	<label for="r5">Radio 5</label>
	<input type="radio" value="r5" />
</div>
```

```js
// Getting the value of the seleced radio
const checkedRadio = document.querySelector('input[checked]')
const value = checkedRadio.value
console.log(value) // r1
```

```js
// Get the value of the selected radio when the `change` event fires
document.addEventListener('change', ev => {
  const checkedRadio = document.querySelector('input[checked]')
  const value = checkedRadio.value
  console.log(value)
})
```

4. Create a textarea
	1. Get the value of the textarea when the `input` event occurs
	2. Get the value of the textarea when the `focus` event occurs
	3. Get the value of the textarea when `focusout` or `blur` events occur

```html
<textarea> </textarea>
```

```js
const textarea = document.querySelector('textarea')
textarea.addEventListener('textarea', ev => {
  console.loc(ev.target.value)
})

textarea.addEventListener('focus', ev => {
  console.loc(ev.target.value)
})

textarea.addEventListener('blur', ev => {
  console.loc(ev.target.value)
})
```

## Lesson 4: Sanitize your output

Sanitize the following strings. What are their sanitized outputs?

1. `<img src=x onerror=alert(1)>`
2. `<svg><g/onload=alert(2)</svg>`
3. `<iframe src=jAva&Tab;script:alert(3)><iframe>`

```html
<body>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/1.0.7/purify.min.js"></script>
	<script src="js/main.js"></script>
</body>
```

Sanitize `<img src=x onerror=alert(1)>`:

```js
const sanitized = DOMPurify.sanitize(`<img src=x onerror=alert(1)>`)
console.log(sanitized) // <img src="x">
```


Sanitize `<svg><g/onload=alert(2)</svg>`:

```js
const sanitized = DOMPurify.sanitize(`<svg><g/onload=alert(2)</svg>`)
console.log(sanitized) // <svg><g></g></svg>
```


Sanitize `<iframe src=jAva&Tab;script:alert(3)><iframe>`:

```js
const sanitized = DOMPurify.sanitize(`<iframe src=jAva&Tab;script:alert(3)><iframe>`)
console.log(sanitized) // ''
```
