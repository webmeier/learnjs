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
    1. Ternary Operators
    2. And and OR operators
    3. Early returns
    4. Template literals
    5. Enhanced object literals
    6. Destructuring
    7. Default arguments
    8. Rest and spread operators
    9. Functional array methods
    10. Method chaining
9. Best Practices
    1. Write declarative code
    2. Build functions with one purpose
    3. Understanding Scope
    4. Understanding State
    5. Reduce side effects
    6. Don't reassign
    7. Don't mutate
    8. Prevent objects from mutating
    9. Prevent arrays from mutating
10. Creating HTML Elements
    1. Changing text and HTML
    2. Creating HTML elements
    3. Adding multiple HTML elements at once
    4. Removing elements
    5. 🛠 Improving carousel
    6. 🛠 Building a calculator
    7. 🛠 building a popover
11. Forms and dates
    1. Intro to Forms
    2. Getting form fields
    3. Form fields and their events
    4. Persistent data
    4. 🛠 building an autocomplete input
    5. 🛠 building a todo-list
12. Asynchronous JavaScript (Ajax)
    1. What is AJAX
        1. Two ways to do AJAX
            1. XHR
            2. Fetch API
        2. With libraries (like jQuery.ajax, Axios)
    2. Promises
    3. Async/await
    4. The Fetch API
    5. Understanding JSON
    6. Understanding REST APIs
    7. Handling errors
    8. Using Axios
    9. 🛠 building a loading indicator
    10. 🛠 building a twitter feed
    11. 🛠 building a google maps component
13. Scroll and browser resize events
    1. Scroll and resize events
    2. Debouncing and throttling
    4. 🛠 building an auto-hiding sticky nav
    5. 🛠 building a same-page-scroll link
    6. 🛠 building an infinite-scrolling page
    7. 🛠 building a scrollspy
14. Dealing with Dates
    1. The Date Object
        1. Getting Day
        2. Getting Month
        3. Getting Year
        4. Getting Hours
        5. Getting minutes
        6. Getting seconds
        7. Unix Timestamps
15. Drag and drop
    8. 🛠 building a drag & drop component
16. Accessibility
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
17. Keyboard support
    1. Keyboard events
        1. Why add keyboard support
    2. Building...
18. Progressive enhancement
    1. What is progressive enhancement
    2. Feature detection and polyfilling
    3. What if there's no JavaScript
    4. Detecting vendor prefixes
    5. 🛠 Carousel transform vendor prefix
    4. 🛠 Enhancing everything that comes before...
19. Integrating components
    1. PubSub pattern
    2. Custom events
    3. Organizing code with ES6 imports
20. Object Oriented Programming
    1. Object literal shorthands
    2. What is Object Oriented Programming?
    3. This in Javascript
    4. Javascript Classes
    5. Inheritance
    6. Prototype in Javascript
    7. Inheritance with Prototype
    8. Constructing objects
    9. Composition and inheritance
    10. Closures
    11. Private and public variables
    12. Call, bind and apply
    13. How to use OOP?
21. Creating libraries
    1. TBC
22. Single page applications
    1. Authentication
    2. Routing
    3. 🛠 Card generator application
    4. Transitioning to frameworks

Extra thoughts that I haven't managed to consolidate.

1. String methods
2. requestAnimationFrame
3. Tasks, microtasks and paint tasks
4. Regular expressions
5. Recursion

## Notes to self:

Modal accessibility: https://css-tricks.slack.com/archives/C7VGZ9UGK/p1522088746000015
Focus trapping (esp modal: https://css-tricks.com/a-css-approach-to-trap-focus-inside-of-an-element/)
Easier animations: https://twitter.com/zellwk/status/960371089615368192