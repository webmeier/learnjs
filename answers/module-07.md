# Answers to Module 7

## Lesson 1: CSS Transitions

- Change an element's `opacity` from 1 to 0 over 1 second when you hover on it.

```css
.element:hover {
	opacity: 0;
	transition: opacity 1s;
}
```

- Try using `ease`, `ease-in`, `ease-out`, `ease-in-out` timing functions.

```css
/* Change ease to other timing functions as necessary */
.element:hover {
	opacity: 0;
	transition: opacity 1s ease;
}
```

- Create your own timing function with Cubic bezier.

```css
.element:hover {
	opacity: 0;
	transition: opacity 1s cubic-bezier(0.57,-0.43, 0.27, 1.11);
}
```

## Lesson 2: CSS Animations

- Create a `@keyframes` declaration

```css
@keyframes jump {
	0% {
		transform: translateY(0px);
	}
	10% {
		transform: translateY(-30px);
	}
	20% {
		transform: translateY(0px);
	}
	35% {
		transform: translateY(-60px);
	}
}
```

- Write the animation with the `animation` shorthand

```css
/* Background, width, and height lets you see the element moving */
.element {
	position: relative;
	height: 100px;
	width: 100px;
	background-color: red;
	top: 500px;
	animation: 3s jump infinite;
}
```

- Experiment with `animation-iteration-count`.

```css
.element {
	position: relative;
	height: 100px;
	width: 100px;
	background-color: red;
	top: 500px;
	animation: jump;
	animation-duration: 3s;
	animation-iteration-count: 2;
}
```

- Experiment with `animation-direction`

```css
.element {
	position: relative;
	height: 100px;
	width: 100px;
	background-color: red;
	top: 500px;
	animation: jump;
	animation-duration: 3s;
	animation-iteration-count: 2;
	animation-direction: reverse;
}
```

- Pause and play our CSS animation with `animation-play-state`.

```css
.element {
	position: relative;
	height: 100px;
	width: 100px;
	background-color: red;
	top: 500px;
	animation: jump;
	animation-duration: 3s;
	animation-iteration-count: 2;
	animation-direction: reverse;
	animation-play-state: paused;
}

.element:hover {
	animation-play-state: running;
}
```

## Lesson 4: Integrating CSS transitions and animations with JavaScript

- Create three elements with three different `transition-property` and `transition-duration`. Use `transitionend` to remove elements when their transition completes.

(I'm just going to create one element for this answer. You can create the other two for practice)

```css
.element {
	position: relative;
	height: 100px;
	width: 100px;
	background-color: red;
}

.element:hover {
	transition: translateX(100px);
}
```

```js
const element = document.querySelector('.element')

element.addEventListener('transitionend', e => {
  const el = e.currentTarget
  el.parentNode.removeChild(el)
})
```

- Create three elements with three different animations. Use `animationend` to remove elements when their transition completes.

(Again, I'm going to create one element for this answer. You can create the other two for practice)

```css
@keyframes move {
	0% {
		transform: tranlateX(0);
	}
	100% {
		transform: translateX(100px);
	}
}

.element {
	position: relative;
	height: 100px;
	width: 100px;
	background-color: red;
	animation: 1s move paused;
}
```

```js
const element = document.querySelector('.element')

element.addEventListener('click', ev => {
  ev.currentTarget.style.animationPlayState = 'running'
})

element.addEventListener('animationend', e => {
  const el = e.currentTarget
  el.parentNode.removeChild(el)
})
```

## Lesson 9: Greensock Animation API

- Install GSAP into your project.

```html
<body>
  <!-- ... -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
	<script src="js/main.js"></script>
</body>
```

- Create a tween that moves an object from 200px from the left to the right.

```js
const element = document.querySelector('.element')

element.addEventListener('click', ev => {
  TweenMax.to(element, 1, { x: 200 })
})
```

- Create a tween that moves an object 200px from the top to the bottom.

```js
const element = document.querySelector('.element')

element.addEventListener('click', ev => {
  TweenMax.to(element, 1, { y: 200 })
})
```

- Create a tween that turns an object invisible.

```js
const element = document.querySelector('.element')

element.addEventListener('click', ev => {
  TweenMax.to(element, 1, { opacity: 0 })
})
```

- Chain five tweens with TimelineMax

```js
const element = document.querySelector('.element')
const tl = new TimelineMax()

element.addEventListener('click', ev => {
  tl.to(element, 1, { x: 200 })
  tl.to(element, 1, { y: 200 })
  tl.to(element, 1, { x: 0 })
  tl.to(element, 1, { y: 0 })
  tl.to(element, 1, { opacity: 0 })
})
```
