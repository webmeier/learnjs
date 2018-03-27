## Positioning the slides with JavaScript

You need to select the slides with JavaScript before you can position them. Let's add a `jsTrack` class to the track, then use the `children` property to select our slides.

```html
<ul class="carousel__track jsTrack">...</ul>
```

```js
const track = document.querySelector('.jsTrack')
const slides = Array.from(track.children)
```

To get the width of a slide, you can use `getBoundingClientRect()`. To do so, you select the first slide with `slides[0]`, then use `getBoundingClientRect()` on it.

```js
const rect = slides[0].getBoundingClientRect()
console.log(rect)
```

<figure>
  <img src="../../images/components/carousel/basic-part-1/dom-rect.png" alt="Image of a console that shows the DOM Rect of a slide">
  <figcaption>The positional information of the first slide</figcaption>
</figure>

We're interested in the `width` property that returns from `getBoundingClientRect()`. That slide width is hence `rect.width`.

```js
const rect = slides[0].getBoundingClientRect()
const slideWidth = rect.width

console.log(slideWidth) // 1024 (or another number, depending on the width of your slide)
```

You can shorten the code by chaining the `width` property directly after `getBoundingClientRect()` if you wish to. I highly recommend you do so because you'll keep track of one less variable.

```js
const slideWidth = slides[0].getBoundingClientRect().width
```

Once you know the width of each slide, you can loop through the `slides` to set the `left` property. Let's do that manually for now.

We know the first slide is going to be `left: 0px`, the second slide's `left` property is going to be one `slideWwidth`, the third slide's left property is going to be two `slideWidth`s, and so on.

```js
slides[0].style.left = '0px'
slides[1].style.left = slideWidth + 'px'
slides[2].style.left = slideWidth * 2 + 'px'
```

To make the calculations consistent, you can substitute the above with this:

```js
slides[0].style.left = slideWidth * 0 + 'px'
slides[1].style.left = slideWidth * 1 + 'px'
slides[2].style.left = slideWidth * 2 + 'px'
```

Did you notice that you can use the zero-based index of each slide to calculate the correct `left` value? Now you see the pattern, we can switch to a `forEach` loop to do the same thing.

```js
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
})
```

<figure>
  <img src="../../images/components/carousel/basic-part-1/positioned-slides.png" alt="Slides are positioned properly now">
  <figcaption>Slides are positioned as they should</figcaption>
</figure>




## Clicking on the dots

When we click on a dot, we want to see the slide that corresponds to the dot.

- The first dot should show the first slide
- The second dot should show the second slide
- The third dot should show the third slide


Since there are three dots, let's create an event listener with the event delegation pattern.

```js
const dotContainer = document.querySelector('.jsDotContainer')

dotContainer.addEventListener('click', e => {
  if (!e.target.matches('button')) return
})
```

```css
.carousel__dot > * {
  pointer-events: none;
}
```

To switch to the `targetSlide` (the slide of the clicked dot), we need to know a few things:

1. What's the current slide?
2. Which dot was clicked?
3. How to find the target slide from the clicked dot?

We already know the first two things:

```js
dotContainer.addEventListener('click', e => {
  let currentSlide

  for (let slide of slides) {
    if (slide.classList.contains('is-selected')) {
      currentSlide = slide
    }
  }
})
```

```js
dotContainer.addEventListener('click', e => {
  // ...
  const clickedDot = e.target
})
```

### Finding targetSlide

If you look at the HTML for `.carousel__track` and `.carousel__nav`, you should see a pattern.

```html
<ul class="carousel__track jsTrack">
  <li class="carousel__slide is-selected">...</li>
  <li class="carousel__slide">...</li>
  <li class="carousel__slide">...</li>
</ul>
```

```html
<div class="carousel__nav jsDotContainer">
  <button class="carousel__dot is-selected"></button>
  <button class="carousel__dot"></button>
  <button class="carousel__dot"></button>
</div>
```

If you click on the third dot, you should switch to the third slide. To find the third slide, you can find the `index` of the clicked dot.

Remember: index is the position of an item in an array.

- If the first dot gets clicked, index will be 0.
- If the second dot gets clicked, index will be 1.
- If the third dot gets clicked, index will be 2.

To find the index of the clicked dot, you can loop through `dotContainer` and compare the `<button>` element with `clickedDot` with `===`. (Why is this so? Can you solve the mystery?)

To get the index, you can use a `for` loop instead of a `for...of` loop:

```js
dotContainer.addEventListener('click', e => {
  // ...
  const dots = dotContainer.children
  let targetIndex

  for (let index = 0; index < dots.length; index++) {
    if (dots[index] === clickedDot) {
      targetIndex = index
    }
  }
})
```

Once you have `targetIndex`, you'll be able to get `targetSlide`. (Why is this so? Have a think! Remember to ask the community if you're having problems with any questions).

```js
dotContainer.addEventListener('click', e => {
  // ...
  const targetSlide = slides[targetIndex]
})
```

Once you know `targetSlide`, you'll know how to update slides and dots.

```js
dotContainer.addEventListener('click', e => {
  // ...

  // Update slides
  const amountToMove = targetSlide.style.left
  track.style.left = '-' + amountToMove
  currentSlide.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')

  // Update dots
  const currentDot = dotContainer.querySelector('.is-selected')
  currentDot.classList.remove('is-selected')
  clickedDot.classList.add('is-selected')
})
```

<figure>
  <img src="../../images/components/carousel/basic-part-2/dots.gif" alt="GIF that shows the effects of clicking on dots so far">
  <figcaption>Clicking on dots updates the slides and dots</figcaption>
</figure>

### Updating arrows when clicking on dots

To update arrows, you need to know which dot was clicked.

- If the first dot is clicked, hide `prevButton` and show `nextButton`
- If the last dot is clicked, hide `nextButton` and show `prevButton`
- If the second dot is clicked, show both buttons.

You can tell if the first dot is clicked by the index. If the index is 0, the first dot is clicked.

```js
dotContainer.addEventListener('click', e => {
  // ...
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden')
    nextButton.classList.remove('is-hidden')
  }
})
```

Similarly, in our case right now, the last dot is clicked if the index is 2. If there's a different number of slides in the carousel, the index changes.

- If there are 4 slides in the carousel, the final slide's index is 3.
- If there are 5 slides in the carousel, the final slide's index is 4.
- If there are 6 slides in the carousel, the final slide's index is 5.

Here, you can see that the final slide's is index always `numberOfSlides - 1`. You can find the `numberOfSlides` through `slides.length`.

```js
dotContainer.addEventListener('click', e => {
  // ...
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden')
    nextButton.classList.remove('is-hidden')
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden')
    nextButton.classList.add('is-hidden')
  }
})
```

If the index falls between between 0 and `slides.length`, you show both previous and next buttons.

```js
dotContainer.addEventListener('click', e => {
  // ...
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden')
    nextButton.classList.remove('is-hidden')
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden')
    nextButton.classList.add('is-hidden')
  } else {
    prevButton.classList.remove('is-hidden')
    nextButton.classList.remove('is-hidden')
  }
})
```

<figure>
  <img src="../../images/components/carousel/basic-part-2/dots-completed.gif" alt="The complete interaction when a user clicks on the dots">
  <figcaption>The complete interaction when a user clicks on the dots</figcaption>
</figure>
