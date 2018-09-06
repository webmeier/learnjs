# recursive XHR

Let's say the API doesn't tell you what the final page is. But you know you can get the next page through the `page` parameter.

If the API doesn't send you any hints, you will need to make sequential requests, one by one. On each request, you check if there are more items to be sent. If there are, you request for more.

If there are no items, the server sends back an empty array.

```
```

For this example, I'm going to set `per_page` to `10` to create more pages for fetching.

You can do this with XHR or Fetch. I'm going to show you how to do it with XHR.

First, you send a request as normal.

```js
const request = new XMLHttpRequest()
request.addEventListener('load', e => {
  let repos = JSON.parse(e.target.response)
})

request.open('get', 'https://api.github.com/users/zellwk/repos?per_page=20')
request.send()
```

Whether you send a second request depends on the number of items loaded. If less than ten times are sent back, you know there's not more pages to request for. If the server sends you ten items, there's a high chance that there are more items in the list.

```js
const repos = JSON.parse(e.target.response)
if (repos.length === 10) {
  // Request for more resources
} else {
  // Do whatever you need with repos
}
```

To request for more resources, you need to create a second request. In this request, you need to set the `page` query parameter to 2.

``` js
if (repos.length === 10) {
  const request2 = new XMLHttpRequest()
  request2.addEventListener('load', e => {
    // Handle second request
  })
  request2.open('get', 'https://api.github.com/users/zellwk/repos?per_page=10&page=2')
  request2.send()
} else {
  // Do whatever you need with repos
}
```

You want to join the repos together in the second request. This way, you have an array of all resources by the time you send the final request.

If there are 10 items in repos2, you'll want to send another request. If not, you can start doing whatever you want.

```js
const repos2 = JSON.parse(e.target.response)
repos = repos.concat(repos2)

if (repos2.length === 10) {
  // Make a third request
} else {
  // Do whatever you want
}
```

This process repeats itself until the server sends you less than 10 repositories. Since process repeats, we can create a function to request for every repository.

### Creating a recursive function

A recursive function is a function that calls itself until certain conditions are matched. It can be used to create something similar to a for-loop, and you can test for different things.

```js
const recursiveRequest = _ => {
  const request = new XMLHttpRequest()
  request.addEventListener('load', e => {
    // Handle request
  })
  request.open('get', 'https://api.github.com/users/zellwk/repos?per_page=20')
  request.send()
}

recursiveRequest()
```

Change link variable.

```js
const recursiveRequest = link => {
  const request = new XMLHttpRequest()
  request.addEventListener('load', e => { /* Handle request */})
  request.open('get', link)
  request.send()
}

recursiveRequest('https://api.github.com/users/zellwk/repos?per_page=20')
```

We know we're going to make a lot of requests. We don't want to write four lines of JavaScript per request. We can use a function to help us make requests.

```js
const makeRequest = (link, callback) => {
  const request = new XMLHttpRequest()
  request.addEventListener('load', callback)
  request.open('get', link)
  request.send()
}
```

We can write our recursiveRequest request function as:

```js
const recursiveRequest = link => {
  makeRequest(link, e => {
    // Handle request
  })
}
```

This is much easier to deal with. So let's move on and attempt to handle an event. Our first event.

First, we need to parse the responses into to JSON.

```js
const recursiveRequest = link => {
  makeRequest(link, e => {
    const requestedRepos = JSON.parse(e.target.response)
  })
}
```

Since we requested for some repos, we want to concatenate these repos to an initial repos array. This way, we can store our repos.

```js
const recursiveRequest = (link, repos = []) => {
  makeRequest(link, e => {
    const requestedRepos = JSON.parse(e.target.response)
    repos = repos.concat(requestedRepos)
  })
}
```

If there are more than 20 repos, we want to make another request.

If there are less than 20 repos, we want to do something with the repos. To do something with the repos, we need to provide a callback since this function is asynchronous.

That means we need to provide a callback function to `recursiveRequest`.

```js
const recursiveRequest = (link, callback, repos = []) => {
  makeRequest(link, e => {
    const requestedRepos = JSON.parse(e.target.response)
    repos = repos.concat(requestedRepos)

    if (requestedRepos.length === 20) {
      // make another request
    } else {
      callback(repos)
    }
  })
}
```

If there are more than twenty repos per page, we want to request for second page. Otherwise, we want to do something with the repos.

Next, we want to let the user determine how many items we're fetching per page. We shouldn't hard code 20. So need to give our function a `perPage` parameter.

```js
const recursiveRequest = (link, perPage, callback, repos = []) => {
  makeRequest(link, e => {
    const requestedRepos = JSON.parse(e.target.response)
    repos = repos.concat(requestedRepos)

    if (requestRepos.length === perPage) {
      // make another request
    } else {
      callback(repos)
    }
  })
}

// Usage
recursiveRequest('some-link', 20, e => {/* Do something */})
```

Next, let's make the next request. To make a second request, we need to run `makeRequest` again. This time, we need to provide different values. We need to set the `page` parameter to 2.

```js
if (requestRepos.length === perPage) {
  makeRequest('some-link&page=2', perPage, e => {/* Handle second request */}, repos)
}
```

Here' we know that the event handle is exactly the same. We don't want to call `makeRequest` again, because it only handles one request. Instead we want to call `recursiveRequest`, because it will make more requests until the repo count isn't equal to the perPage variable.

```js
if (requestRepos.length === perPage) {
  recursiveRequest(`${link}&page=2,`, perPage, callback, repos)
}
```

But we need to change the link such that we're fetching subsequent pages. That means we need a `page` variable. This variable can begin at page 1.

```js
const recursiveRequest = (link, perPage, callback, repos = [], page = 1) => {
  makeRequest(link, e => {
    const requestedRepos = JSON.parse(e.target.response)
    repos = repos.concat(requestedRepos)

    if (requestRepos.length === perPage) {
      recursiveRequest(`${link}&page=${page}`, perPage, callback, repos, page + 1)
    } else {
      callback(repos)
    }
  })
}

// Usage
recursiveRequest('some-link', 20, e => {/* Do something */})
```

Finally, five variables are too much. Let's use convert our variables into an object so the recursiveRequest is easier to use. This way, we can organize our parameters in a way that makes sense without asking the user (us also, in this case) to worry about the order of parameters.

```js
const makeRequest = (link, callback) => {
  const request = new XMLHttpRequest()
  request.addEventListener('load', callback)
  request.open('get', link)
  request.send()
}

const recursiveRequest = ({
  link,
  page = 1,
  perPage,
  callback,
  repos = []
} = {}) => {
  makeRequest(link, e => {
    const requestedRepos = JSON.parse(e.target.response)
    repos = repos.concat(requestedRepos)

    if (requestedRepos.length === perPage) {
      recursiveRequest({
        link: `${link}&page=${page}`,
        page: page + 1,
        perPage,
        callback,
        repos
      })
    } else {
      callback(repos)
    }
  })
}

// Usage
recursiveRequest({
  link: 'https://api.github.com/users/zellwk/repos?per_page=20',
  perPage: 20,
  callback(repos) {
    console.log(repos)
  }
})
```
