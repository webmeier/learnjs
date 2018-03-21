## Working with multiple Elements

Say you have three paragraphs of text. You want to add the `.red` class to all of them.

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
```

To do so, you first select them all with `querySelectorAll`. Then, you add the class `red` to each paragraph element through a `forEach` loop:

```js
const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(p => p.classList.add('red'))
```

You need to go through the extra `forEach` step because `classList` is not available on a NodeList. It's only available on an `Element`.

## Exercise

When you're done, try adding a class of `superhero` to each hero in following HTML with `querySelectorAll`, `forEach` and `classList.add`.

```html
<ul class="superheroes">
  <li>Wonderwoman</li>
  <li>Superman</li>
  <li>Ironman</li>
  <li>Batman</li>
  <li>The Flash</li>
  <li></li>
</ul>
```
