1. Introduction to Ajax
  1. What is Ajax
  2. XML
  3. XMLHttpRequest
  4. Sending a request with XMLHttpRequest (fetching repos from Github)
  5. Note on Rate limits (cause Github has a rate limit of 60/h)
2. Understanding JSON
  1. What is JSON
  2. Converting between JSON and JavaScript
  3. Parsing the response (from the previous lesson)
  4. Massaging the data
  5. Displaying data onto the DOM
  6. Handling other types of data
3. The Fetch API
  1. Fetch vs XHR
  2. Fetching with Fetch
  3. Handling Fetch's response
4. JavaScript Promises
  1. What are promises
  2. How to use promises
  3. How to construct promises
  4. Example of a real promise (Fetch)
5. Requesting multiple resources at once
  1. Event-driven XHR vs Promise driven Fetch (When you request a resource multiple times)
  2. Promise.all
  3. Promise.race
6. Requests and responses
  1. The anatomy of a request
    1. Endpoint
    2. Method
    3. Headers
    4. Body
  2. The anatomy of a response
    1. Status
    2. Headers
    3. Payload
7. Sending a post request
  1. Basic authentication
  3. How to send a post request (like creating a repo on Github)
8. Authenticating with Oauth
  1. How to authenticate with Ouath using Github as an example
9. Understanding CURL
  1. Why need to understand CURL
  2. Sending a request with CURL
    1. Setting method
    2. Setting headers
    3. Setting body (with and without line breaks)
  3. Basic Auth with CURL
  4. Verbose mode (for reading response headers)
10. Understanding API Documentations
  1. How to read API documentations
  2. API Versions
  3. API Headers
11. Handling errors
  1. Why handle errors
  2. HTTP statuses
  3. Handling errors with Fetch
  4. Removing boilerplate code
12. Using Axios
  1. Get request with Axios
  2. Post request with Axios
13. Dealing with paginated responses
  1. Why some responses are paginated
  2. How to request all pages
    1. Recursion
    2. Watching the header for clues
14. Building some components:
  1. Building a loading indicator
  2. A Twitter search component (requires Oauth)
  3. A Google Maps component (requires an API key for auth)
15. Async and await
  1. What is async await
  2. How async await works
  3. Promise catch for async functions (so we don't need try catch!)
  4. awaiting multiple items at once
  5. awaiting in loops
16. Updating the components
  1. Async/await with twitter component
  2. Async/await with Google maps component
17. Understanding CORS
  1. CORS Headers

Ajax with Grahp QL (This is obviously not firmed up yet, as you can tell)
  1. What is GraphQL
    1. Rest vs Graph
    2. Why use Graph
  2. Querys and Mutations
  3. Querying Github's GraphQL API
  4. Creating component that lists multiple Github Repos (using graph). (Open to ideas regarding component)