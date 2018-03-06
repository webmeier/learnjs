# JS Fundamentals

1. Welcome!
  1. How to use this course

2. Before you begin
  1. Syntax and linting
  2. ES6 is JavaScript
  3. How to think like a developer
  4. Adopt the accessibility mindset

3. DOM basics (TBC)
  1. Selecting DOM Nodes
    1. What is DOM
    2. What is DOM Node
    3. Select Node with querySelector
    4. Select Node with id, class, tag and attributes
  2. Listening for events
    1. What is event
    2. Asynchronous JavaScript
    3. Understanding callbacks (Link out?)
    4. Adding event listeners
    5. Getting the node that fired the event
    6. Possible event types
      1. Mouse
      2. Keyboard
      3. Form
      4. Resize/scroll
      5. ...
  3. Changing classes
    1. classList.add
    2. classList.remove
    3. classList.toggle
  4. Getting and setting attributes
    1. What are attributes
    2. Why use attributes
    3. `data-` or not?
    4. How to get attributes
    5. How to set attributes
  5. Basic animations
    1. Separate style and logic
  6. Learning to debug
  7. Building an accordion (Video)
  8. Building a sidebar navigation (Video)

4. Intermediate DOM (TBC)
  1. Selecting multiple DOM Nodes
    1. Select Nodes with querySelectorAll
    2. Converting to NodeList to arrays (if needed)
  2. Event bubbling, capturing and delegation
    1. How events work
    2. Why delegate events
    3. How to delegate (Element.matches or tagname)
  3. Handling keyboard events
    1. The event object (go into details? Explore this).
    1. Keydown, keypress, keyup
    2. Usually keyup. Unless you want keydown. Either would do.
    3. Keycode vs keys?
  4. Linking CSS Transitions with JavaScript
    1. The `transitionEnd` event.
  4. Build Calculator UI (video)
  5. Build Tab UI
  6. Build Carousel (video)

5. Text and Content
  1. Getting and setting text content from nodes
    1. textContent/innerHTML
    2. form.value
  2. Creating DOM nodes
    1. `document.createElement`
    2. Template Strings to the rescue
    3. `.map` and `.join`.
  3. DOM traversals
    1. querySelector within elements
    1. `parentNode`
    2. `children`
    3. `nextSibling`
    4. `previousSibling`
  4. Adding and removing DOM Nodes
    1. Change innerHTML = change
    2. Append. Append at index
    3. removeChild.
  5. Handling `form` events
  5. Build autocomplete component
  6. Build Todo list

6. Ajax ajax ajax!
  1. What is Ajax?
    1. Ajax = asynchronous JS and XML.
    2. Asynchronous JS Link to callback article. Check out event loop.
    3. Now use JSON
  2. Understanding JSON
    1. Format
    2. JSON.stringify
    3. JSON.parse
  3. Using Ajax with Fetch API
    1. XHR and Fetch API
    2. Promises (Link)
    3. What is Fetch API
    4. Libraries
      1. jQuery
      2. Axios
      3. zl-fetch
  4. Understanding API documentation
    1. Not all in JS. Some in cURL/terminal format. Break it down to understand.
    2. URL
    3. Header?
    4. Body/content?
  5. Brushing up your Array prowess
    1. API usually returns alot of data.
    2. Need to filter for the right data.
    3. FP stuff like Lodash comes in handy
    4. But ES6 methods help alot too.
    5. See appendix on arrays
  6. Debouncing and throttling for performance
  7. Build: Ajax autocomplete (Search for list of movies)
  8. Build: Google Map API
  9. Build: Progressbar

7. Date and Time
  1. Intervals and Timeouts
  2. The Date Object
  3. Getting seconds, minutes, hours and days
  Build: CSS Clock
  Build: Countdown timer

8. Scroll scroll!
  1. Handling the `scroll` event
  Build: Infinite Scoll
  Build: Auto-hiding sticky nav
  Build: Same-page scroll
  Build: Scrollspy

9. Fun with mouse events
  1. Handling mouse events.
  2. Build: Drag + Drop
  3. Build: Swipe cards
  4. Build: Hover + bg move

10. Taking it up a level
  1. Custom Events
  2. Complex animations
    1. Cubic bezier?
    2. Web animation API (Not usable yet)
    3. GSAP?
  3. Integrating two or more components
  Build: Modal + Loader

11. The OOP Way
  1. See Objects in detail.
  2. Build a component the OOP way.

Moving objects across a page.

12. Extra fun with other Web API
  1. LocalStorage
  2. Location
  3. Notifications
  4. Canvas???
  5. Make a game, maybe?

13. Next steps
  1. Enhance Accessibility
  2. Learn a framework
    1. Tips on learning a framework.
  3. Learn best practices and improve! (maybe?)

# Core concepts / Appendix

String, Numbers, null, undefined, Boolean
If/else loop
For lop

1. Arrays
  1. What are arrays used for?
  2. How to use arrays?
  1. Common array methods
    1. Length
  1. Modifying arrays
    1. Immutable
      1. Slice
      2. forEach
      3. map
      4. reduce
      5. filter
      6. sort?
     2. Mutable
      1. push
      2. pop

2. Objects
  1. properties
  2. methods
  3. prototypes
  4. OOP
  5. inheritance

3. Asynchronous JavaScript
  1. Event Loop
  2. Callbacks
  3. Promises
  4. Async/await

4. Functions
  1. Closures
  2. Scopes
  3. Higher order functions


Calendar widget for jsf (some airline industry as example maybe). Also explain why use js
JSF REsponsive sitebar (separate style with functionality) (Like change the button etc. but only need to listen for a simple click event)

Before buying JavaScript Fundamentals, you should already know what these mean and how to use them:

1. Strings
2. Numbers
3. Arrays
4. Objects
5. Functions

If you don't already know what they are, you should read/watch these free resources before buying JavaScript Fundamentals:

- [Udacity – Intro to JavaScript](https://www.udacity.com/course/intro-to-javascript--ud803)
- [You don't know JS – Up and going](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/README.md#you-dont-know-js-up--going)
- [Code School – JavaScript Road Trip Parts 1, 2 and 3](https://www.codeschool.com/learn/javascript)