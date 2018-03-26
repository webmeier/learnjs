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