
## Another way to close the modal

You also want to close the modal when the user clicks outside of the modal content, like this:

<figure>
  <img src="../../images/components/modal/01-modal-close-on-overlay.gif" alt="Modal closes when the a user clicks outside the modal">
  <figcaption>Modal closes when the a user clicks outside the modal</figcaption>
</figure>

You can't build this right now, not with the JavaScript you've learned so far. We'll come back in a later model to build this functionality.

To do so, you need to add a `click` event listener to the `.modal-container`. Since JavaScript is involved, let's also give a `jsModalContainer` class to the `.modal-container`.

```html
<div class="modal-container jsModalContainer">...</div>
```

```js
const overlay = document.querySelector('.jsModalContainer')

overlay.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})
```

This works. The modal window closes when you click on the overlay (`.modal-container`).

Unfortunately, the modal window also closes when you click on the modal content! This is unexpected and highly disruptive. You don't want the modal to close when someone clicks on the content because people tend to click around when they read.

<figure>
  <img src="../../images/components/modal/01-modal-closed-in-content.gif" alt="Modal closes when content is clicked, but this should not happen!">
  <figcaption>Modal closes when content is clicked, but this should not happen!</figcaption>
</figure>

Can you guess why the modal window closes with the current code?

The reason is because `click` is an event that bubbles upwards. It bubbles from the `.modal__content` up to the `.modal-container`.

To prevent the `click` event from bubbling upwards, you need to stop its propagation. You can stop its propagation anywhere on the target itself or any of its ancestor elements. In this case, stopping the propagation on `.modal` is ideal because `.modal` is the container that creates the visual modal window.

```html
<div class="modal jsModal"> ... </div>
```

```js
const modal = document.querySelector('.jsModal')

modal.addEventListener('click', e => e.stopPropagation())
```

## Cleaning up the code

At this point, you may have realized that the event listeners added to `closeButton` and `overlay` are exactly the same:

```js
closeButton.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})

overlay.addEventListener('click', _ => {
  document.body.classList.remove('modal-is-open')
})
```

This is not ideal because you're repeating yourself. Since this code exists more than once, you can abstract them into a separate function. Let's call this function `closeModal`, which describes exactly what the code within should do.

```js
const closeModal = _ => document.body.classList.remove('modal-is-open')

overlay.addEventListener('click', closeModal)
closeButton.addEventListener('click', closeModal)
```

Ah, much better now.

Optionally, you may also want to create a `openModal` function since it reads much easier than `document.body.classList.add('modal-is-open')`. Abstracting single-use code into a readable function like what we've done here is also a common practice that helps with code readability.

```js
const openModal = _ => document.body.classList.add('modal-is-open')

toggleButton.addEventListener('click', openModal)
```


As you can already see by now, quite a bit thought needs to go into the CSS when you create the modal. Doing so allows you to write simple JavaScript where you change a single class and the entire component works.

You've also learned to use `event.stopPropogation` and how to abstract code into readable functions.