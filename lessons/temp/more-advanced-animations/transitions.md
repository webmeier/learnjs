
## Transitioning in vs transitioning out

Sometimes, you want the properties to transition in and out differently. You want the duration, timing-function or delay to be different. (See the modal window animation when you learn to create accessible interfaces. This one is high-level).

To do so, you write another set of `transition-` properties.

```css
.button {
  background-color: #33ae74;
  transition: background-color 0.5s ease-out;
}

.button:hover {
  background-color: #1ce;
  transition-duration: 2s;
}
```

When you write transition properties in the triggering class/pseudo class, the transition properties in the triggering class/pseudo class overwrites the original transition properties you've stated in the base class.

So, in the example above, when you hover on the button, the background color takes 2 seconds to change from `#33ae74` to `#1ce`.

When you hover out from the button, the background color only takes 0.5s to change back to `#1ce` because the `transition-duration` of 2s no longer exists.

This is a little mind-boggly, so read what I've written again. And read it one more time. Read at least three times and practice the heck out of it until this behavior becomes second nature.
