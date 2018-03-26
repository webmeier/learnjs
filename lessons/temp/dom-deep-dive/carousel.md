
You need to select the slides with JavaScript before you can position them. Let's add a `jsTrack` class to the track, then use the `children` property to select our slides.

```html
<ul class="carousel__track jsTrack">...</ul>
```

```js
const track = document.querySelector('.jsTrack')
const slides = Array.from(track.children)
```
