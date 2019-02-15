# Answers for module 12

## Lesson 1: Intro to Ajax

Answer these questions:

1. **What is AJAX?**. Asynchronous JavaScript and XML.
2. **Why do we use Ajax?**. To fetch resources.
3. **What is a request?**. Information you send to the server
4. **What is a response?**. Information you get back from the server.
5. **What is a fetch?**. The action of sending a request and getting a response is called a fetch.
6. **What is a rate limit?**. The maximum number of requests you can make in a specific timeframe

Do this:

1. Send a request to Github. Ask for a list of your repositories.
2. Log the response from the server.

```js
const request = new XMLHttpRequest()
request.addEventListener('load', ev => { console.log(ev.target.response) })
request.open('get', 'https://api.github.com/users/zellwk/repos')
request.send()
```

## Lesson 2: Understanding JSON

Answer these questions:

1. **What is JSON?**. JavaScript object notation
2. **How do you convert JavaScript to JSON?**. `JSON.stringify(object)`
3. **How do you convert JSON back to JavaScript?**. `JSON.parse(jsonString)`

Do this:

1. Fetch my Github repositories
2. Create an array of repositories that have more than 50 stars.
3. Display this list in the DOM

```js
const request = new XMLHttpRequest()
request.addEventListener('load', ev => {
  const repos = JSON.parse(ev.target.response)
  const htmlString = repos.map(repo => {
    return {
      name: repo.name,
      url: repo['html_url'],
      stars: repo['stargazers_count']
    }
  })
    .filter(repo => repo.stars > 50)
    .map(repo => `<li>${repo.name}: ${repo.stars} stars</li>`)
    .join('')

  const ol = document.createElement('ol')
  ol.innerHTML = htmlString
  document.body.appendChild(ol)
})
request.open('get', 'https://api.github.com/users/zellwk/repos')
request.send()
```

## Lesson 3: Fetch API

1. Send a request to Github with Fetch. Ask for a list of your repositories.
2. Display a list of repositories that have more than 50 stars.

```js
fetch('https://api.github.com/users/zellwk/repos')
  .then(r => r.json())
  .then(repos => {
    const htmlString = repos.map(repo => {
      return {
        name: repo.name,
        url: repo['html_url'],
        stars: repo['stargazers_count']
      }
    })
      .filter(repo => repo.stars > 50)
      .map(repo => `<li>${repo.name}: ${repo.stars} stars</li>`)
      .join('')

    const ol = document.createElement('ol')
    ol.innerHTML = htmlString
    document.body.appendChild(ol)
  })
```

## Lesson 5: Promises

Answer these questions:

1. **What is a promise?** An JavaScript object that can resolve or reject at a later time.
2. **What happens when a promise resolves?**. You can work on the result by calling `then`.
3. **What happens when a promise rejects?**. You can catch the error with `catch`.
4. **Can you chain multiple `then` methods?**. Yes
5. **When is `finally` called?**. After all `then` and `catch` calls.

## Lesson 6: Requests and Responses

Answer these questions:

1. **What is an endpoint?**
	1. The endpoint is the URL you send a request to. It is made up of three things:
		1. The root endpoint
		2. The path
		3. Query parameters
2. **What are the five kinds of requests you can send?**
	1. GET
	2. POST
	3. PUT
	4. PATCH
	5. DELETE
3. **What is a get request used for?**. Getting data
4. **What is a post request used for?**. Creating data
5. **What is a payload?**. Information the data sends to you.
6. **What are headers?**. Extra information you send to the server (and server back to you).

## Lesson 7: Post request

- Send a GET Request to Typicode to request for the 56th post.

```js
fetch('https://jsonplaceholder.typicode.com/posts', {

})
```
2. Send a POST request to create a post
  1. Do this with XHR
  2. Do this with Fetch
3. Send a PUT request to change the 23rd post
  1. Do this with XHR
  2. Do this with Fetch
4. Delete the 90th post
