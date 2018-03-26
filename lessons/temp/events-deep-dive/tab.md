
```js
const tabList = document.querySelector('.tabs')

tabList.addEventListener('click', e => {
  // Proceed with event delegation pattern
})
```

In this event delegation pattern, you'll be interested to know if the `<a>` link of each tab is clicked (you'll find out why in a bit).

```js
tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }

  // 1. Find correct tab to open.
  // 2. Hide previous active tab
  // 3. Open right tab
})
```

```css
/* Preventing events from bubbling in CSS */
.tab > a * {
  pointer-events: none;
}
```

In your JavaScript, you can get the value of the `href` attribute through `Element.getAttribute`.

```js
tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }

  const href = e.target.getAttribute('href')
  console.log(href)
})
```