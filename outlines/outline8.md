## The outline (draft 8)

1. JavaScript and its ecosystem
    1. How to use this course
    2. What is JavaScript and what its used for
    3. Varying versions of JavaScript
    4. JavaScript frameworks and libraries
2. The absolute basics
    1. Your JavaScript file
    2. Preparing your text editor
    3. The console
    4. Comments
    5. You don't need semicolons
    6. Strings, numbers, and booleans
    7. Declaring variables
    8. Functions
    9. Arrow functions
    10. Intro to objects
    11. If/else statements
    12. The NOT operator
    13. Null and undefined
    14. The BOM and the DOM
    15. Selecting an element
    16. Changing classes
    17. Listening to events
    18. Callbacks
3. Building simple components
    1. How to think like a developer
    2. How to use the starter template
    3. Do this for every component
    4. 🛠 building an off-canvas menu
    5. 🛠 building a modal window
    6. Lessons from the building process
    7. Debugging errors
    8. How to use a linter
4. Arrays and loops
    1. Intro to arrays
    2. For loops
    3. The forEach loop
    4. Selecting multiple elements
    5. Node vs Elements
    6. 🛠 Building an accordion
5. DOM basics
    1. Id, classes, tags, and attributes
    2. Changing CSS with JavaScript
    3. Getting CSS with JavaScript
    4. Changing attributes
    5. Finding an element's size and position
    6. DOM Traversals
    7. 🛠 Building a tabbed component
    8. 🛠 Building a carousel
    9. 🛠 Building a carousel (part 2)
6. Events deep dive
    1. The listening element
    2. Default behaviors
    3. Event propagation
    4. Event delegation
    5. Removing event listeners
    6. 🛠 Improving the modal window
    7. 🛠 Improving the accordion
    8. 🛠 Improving the tabbed component
    9. 🛠 Improving the carousel
7. Transitions and Animations
    1. CSS transitions
    2. CSS animations
    3. Jank-free animations
    4. Integrating CSS transitions and animations with Javascript
    6. 🛠 Animating the off canvas menu
    7. 🛠 Animating the accordions
    8. 🛠 Animating the carousel
    9. Animating with JavaScript
    10. The Greensock Animation API (gsap)
    11. 🛠 Animating the modal window
8. Useful JavaScript features
    1. Ternary operators
    2. And and OR operators
    3. Early returns
    4. Template literals
    5. Destructuring
    6. Default parameters
    7. Enhanced object literals
    8. Rest and spread operators
    9. Useful array methods
    10. Array.prototype.reduce
    11. Looping through objects
    12. Implicit return with objects
    13. 🛠 Improving the according
    14. 🛠 Improving the carousel
9. Best Practices
    1. Write declarative code
    2. Build functions with one purpose
    3. Understanding Scope
    4. Understanding State
    5. Don't reassign
    6. Don't mutate
    7. Prevent objects from mutating
    8. Prevent arrays from mutating
    9. Write pure functions
    10. 🛠 Refactoring the off-canvas
    11. 🛠 Refactoring modal window
    12. 🛠 Refactoring accordion
    13. 🛠 Refactoring tabbed component
    14. 🛠 Refactoring carousel
10. Creating HTML Elements
    1. Changing text and HTML
    2. Creating HTML elements
    3. Adding multiple HTML elements at once
    4. Removing elements
    5. 🛠 Improving carousel
    6. 🛠 Building a calculator
    7. 🛠 Building a calculator (part 2)
    8. 🛠 Refactoring the calculator
    9. 🛠 Building a popover
    10. 🛠 Building a popover (part 2)
    11. 🛠 Building a popover (part 3)
11. Forms
    1. Intro to Forms
    2. Getting form fields
    3. Form fields and their events
    4. 🛠 building a todo-list
    5. 🛠 building an autocomplete input
12. Dealing with Dates
    1. The Date Object
        1. Getting Day
        2. Getting Month
        3. Getting Year
        4. Getting Hours
        5. Getting minutes
        6. Getting seconds
        7. Unix Timestamps
    2. Building a datepicker
12. Asynchronous JavaScript
    1. Introduction to Ajax
    2. Understanding JSON
    3. The Fetch API
    4. Data Types
    5. JavaScript Promises
    6. Requests and responses
    7. Sending post requests
    8. Authentication
    9. Handling errors
    10. Viewing response headers
    11. CORS and JSONP
    12. XHR or Fetch
    13. Using an Ajax library
    14. Understanding API Documentations
    15. Understanding CURL
    16. Hands on: Building a loading indicator
    17. Hands on: Improving the popover
    18. Hands on: Improving the carousel
13. Advanced asynchronous JavaScript
    1. Requesting many resources at once
    2. Getting Response headers in JavaScript
    3. Dealing with paginated responses (part 1)
    4. Dealing with paginated responses (part 2)
    5. Async and await
    6. Timeouts
    6. Async loops
14. Scroll and browser resize events
    1. Handling Scroll events
    2. Handling Mouse events
    3. Handling Touch events
    4. Hands on: building an auto-hiding sticky nav
    5. Hands on: building a same-page-scroll link
    6. Hands on: building an infinite-scrolling page
    7. Hands on: building a scrollspy
    8. Hands on: building a drag & drop component
    9. Hands on: improving the carousel
    10. Hands on: improving the date picker
15. Progressive enhancement
    1. The progressive enhancement mindset
        1. Progressive enhancement vs graceful degradation
    2. Polyfilling
        1. Detect features
        2. Polyfill if none
    3. Vendor prefixes
    4. If JavaScript is turned off...
    5. 🛠 Carousel transform vendor prefix
    4. 🛠 Enhancing everything that comes before...
16. Keyboard support
    1. Keyboard events
        1. Detecting key
    2. Building...
17. Accessibility
    1. Accessibility and JavaScript
    2. How to use a screen reader
        1. How to open up screen reader
        2. Navigating with the keyboard
            1. Tab
            2. Numbers (any?)
            3. Space
            4. Enter
    3. Visibility
        1. Invisible elements
        2. Visible to screen readers?
        3. Example: accordion should not be visible to screen readers when hidden.
        4. State of the accordion too
        5. Visibility hidden
        6. Display none
        7. Hidden element
        8. Focus states?
    4. Aria attributes
    5. Live regions
    6. Building...
18. Drag and drop (Skip drag drop first; return later)
    1. Drag events
    2. 🛠 building a drag & drop component
20. Object Oriented Programming
    1. What is Object Oriented Programming?
    2. This in Javascript
    3. Javascript Classes
    4. Inheritance
    5. Prototype in Javascript
    6. Inheritance with Prototype
    7. Constructing objects
    8. Composition and inheritance
    9. Closures
    10. Private and public variables
    11. Call, bind and apply
    12. Factory functions... Need to slot this in somehow
21. Integrating components
    1. PubSub pattern
    2. Custom events
    3. ES6 imports
    4. Decoupling
22. The MVC Pattern (Possibly here, for Carousel, Todo, etc. But might not need. Depends on their actual complexity)
    1. MVC, MVP and MVVM
    2. Note: Possibly build the single page application first before coming back to MVC. Easier to explain this way, and students can see the difference between non MVC and MVC code.
23. Single page applications
    1. Authentication
    2. Routing
    3. 🛠 Card generator application
    4. Transitioning to frameworks
24. Advanced animations
    1. Jank free animations
    2. Request animation frame?
    2. The Flip technique
        1. Flip and translate
        2. Flip and scale
    3. Parent-child Flips
        1. What happens (https://codepen.io/zellwk/pen/WKyKje)
        1. Direct flip
            1. Reverse scale (1 / scale) for children items
            2. Note that padding and margins also scale... so if whitespace is a concern, don't scale at all!
        2. Two-step opacity flip
            1. Children get opacity 0 first.
            2. Once parent flipped properly, reveal children.
    4. Examples

Extra thoughts that I haven't managed to consolidate.

String manipulation
    1. String methods
    2. Regular expressions
    3. Creating calculator (advanced)

1. requestAnimationFrame
2. Tasks, microtasks and paint tasks
3. Recursion
4. Bonus: Creating libraries?

## Notes to self:

Might be good to teach these:
    1. `pop`,
    2. `push`
    3. `while` loop

Modal accessibility: https://css-tricks.slack.com/archives/C7VGZ9UGK/p1522088746000015
Focus trapping (esp modal: https://css-tricks.com/a-css-approach-to-trap-focus-inside-of-an-element/)
Easier animations: https://twitter.com/zellwk/status/960371089615368192

In MVP, the P observes models and updates views when models change. The P effectively binds models to views, a responsibility which was previously held by controllers in MVC.

MVVM = two-way data binding

On Babel and Polyfills
https://zellwk.slack.com/archives/C7RQ6GJSG/p1527826048000082?thread_ts=1527772136.000165&cid=C7RQ6GJSG

Autocomplete accessibility https://accessibility.blog.gov.uk/2018/05/15/what-we-learned-from-getting-our-autocomplete-tested-for-accessibility/

7. Persistent data --> Let's shift this away
8. 🛠 Improving the todo-list

Scrollmagic for scrolling? http://scrollmagic.io Create something along this lines

Flip for animations:
https://aerotwist.com/blog/flip-your-animations/