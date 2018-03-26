Once you've select your headers, you want to add an event listener to each of them. When the header is clicked, you want to add an `is-open` class to the `.accordion`, which is the parent element of the header. You can traverse to the parent element with parentNode.

```js
accordionHeaders.forEach(header => {
  header.addEventListener('click', _ => {
    header.parentNode.classList.toggle('is-open')
  })
})
```


<figure>
  <img src="../../images/components/accordion/01-open-with-js.gif" alt="Adding and removing is-open on the header on alternate clicks">
  <figcaption>Adding and removing is-open on the header on alternate clicks</figcaption>
</figure>


Quiz question: Do you know why you can listen for a click on the accordion headers instead of on each `<button>` element?

Answer: The `click` event bubbles upwards from the `<button>` to the accordion header!



## A better event listener

The `querySelectorAll` method works, but it's not the best way because you're adding too many event listeners.

A better way is to use the event delegation pattern. If you use the event delegation pattern, you only need one event listener (instead of 4 in this example).

To use the delegation pattern, you need to listen to an ancestor element that contains all your accordion headers. This ancestor element should be as close as possible to your accordions.

For the accordions we're building, I grouped all accordions into an `.accordion-container` element, which would be the delegator.

```html
<div class="accordion-container jsAccordionContainer"> ... </div>
```

```js
const accordionContainer = document.querySelector('.jsAccordionContainer')
accordionContainer.addEventListener('click', e => {
  // Do something here
})
```

In the delegator (the `accordionContainer`), you want to listen for a `click` event on the `.jsAccordionHeader` elements. There are a few ways to do so. But first, let's take a look at what `event.target` returns.

```js
accordionContainer.addEventListener('click', e => {
  console.log(e.target)
})
```

<figure>
  <img src="../../images/components/accordion/01-etarget.gif" alt="event.target returs the element that was clicked">
  <figcaption>event.target returs the element that was clicked</figcaption>
</figure>

As you can see, `event.target` returns the element that was clicked. If you click on the indicator, the `event.target` returns the SVG used for the indicator. If you click on the paragraph text, `event.target` returns the paragraph.

This is a problem for us because we want to listen to a `click` event on `.jsAccordionHeader`, not any element within `.jsAccordion` (especially not those within the accordion content!).

What to do? You can solve this problem by checking for the existence of `.jsAccordionHeader` in your event listener.

```js
accordionContainer.addEventListener('click', e => {
  const header = e.target.closest('.jsAccordionHeader')
  console.log(header)
})
```

<figure>
  <img src="../../images/components/accordion/01-delegate-header.gif" alt="Clicking on anything within content returns null while clicking on anything within the header returns the accordion header">
  <figcaption>Clicking on anything within content returns null while clicking on anything within the header returns the accordion header</figcaption>
</figure>

Once you've located the `.jsAccordionHeader`, you can toggle the `.accordion` with `header.parentNode.classList` as before.

```js
accordionContainer.addEventListener('click', e => {
  const header = e.target.closest('.jsAccordionHeader')
  if (header) {
    header.parentNode.classList.toggle('is-open')
  }
})
```

<figure>
  <img src="../../images/components/accordion/01-complete.gif" alt="Completed accodion">
  <figcaption>Completed accordion</figcaption>
</figure>

With this, you've learned how to build accordions!