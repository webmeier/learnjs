
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

You can get the value of the `href` attribute through `Element.getAttribute`.

```js
tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }

  const href = e.target.getAttribute('href')
  console.log(href)
})
```

Next, you need to exercise some traversal-fu to find the correct tab content. To do so, you can:

1. Get the `.tabbed-component` through `closest`
2. Find the tab content through `querySelector`.

```js
tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }

  const href = e.target.getAttribute('href')

  const targetTabContent = tabList.parentNode.querySelector(href)
  console.log(targetTabContent)
})
```

### Hiding the previous tab

To hide the previous tab and tab content, you need to remove the `is-selected` class from them. Can you understand what's happening in the following code?

```js
tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }

  const href = e.target.getAttribute('href')
  const targetTabContent = tabList.parentNode.querySelector(href)

  // Hiding previous tab and tab content
  const prevTabAndContent = tabList.parentNode.querySelectorAll('.is-selected')
  prevTabAndContent.forEach(elem => elem.classList.remove('is-selected'))
})
```

### Showing the selected tab and tab content

You can show the selected tab and tab content by adding the `is-selected` class to them.

You have already found the new tab content. What's next is to find the new tab, and you can add `is-selected` to both of them.

```js
tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }

  const href = e.target.getAttribute('href')

  // Hides previous tab and tabbed content
  const prevTabAndContent = tabList.parentNode.querySelectorAll('.is-selected')
  prevTabAndContent.forEach(elem => elem.classList.remove('is-selected'))

  // Shows new tab and tabbed content
  const targetTab = e.target.parentNode
  const targetTabContent = tabList.parentNode.querySelector(href)
  targetTab.classList.add('is-selected')
  targetTabContent.classList.add('is-selected')
})
```

## But the awkward jump...

When you click on a link with the `href` that begins with `#`, the browser automatically looks for the same id within the page. (So, if the `href` is `#tab1`, the browser looks for an element with `id="tab1`). This is the default behavior of a link that starts with `#`.

Once the browser finds the element, it jumps to the element automatically.

Although that is okay for a default behavior, you don't want this to happen when your user clicks on the tabbed component. To prevent this awkward jump from happening, you need to add `event.preventDefault` to your event handler.

```js
tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }
  e.preventDefault()

  // The rest of the code
})
```

## Cleaning up the code

We used `e.target` and `tabList.parentNode` twice. These properties can be hard to remember later on, so let's create sensible variables to hold them.

```js
tabList.addEventListener('click', e => {
  if (!e.target.matches('a')) { return }
  e.preventDefault()

  const link = e.target
  const href = link.getAttribute('href')
  const component = tabList.parentNode

  // Hides previous tab and tabbed content
  const prevTabAndContent = component.querySelectorAll('.is-selected')
  prevTabAndContent.forEach(elem => elem.classList.remove('is-selected'))

  // Shows new tab and tabbed content
  const targetTab = link.parentNode
  const targetTabContent = component.querySelector(href)
  targetTab.classList.add('is-selected')
  targetTabContent.classList.add('is-selected')
})
```
