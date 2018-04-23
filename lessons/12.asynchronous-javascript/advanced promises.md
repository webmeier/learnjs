Need to talk about handling errors! 😱

## Promises vs. Callbacks

There are three reasons why developers prefer promises over callbacks:

1. Promises reduces the amount of nested code
2. Promises allow you to visualize the execution flow easily
3. Promises let you handle all errors at once at the end of the chain.

To see these three benefits in action, let's write some JavaScript code that does some asynchronous things with both callbacks and promises.

For this process, imagine you're running an online shop. You need to charge a customer whenever he buys something, then, you enter their information into your database. Lastly, you'll send them an email:

1. Charge a customer
2. Add customer to database
3. Send email to customer

Let's break in down step by step. First of all, you need a way to get information from your frontend to your backend. Normally, you'd use a post request for these operations.

If you use Express and Node, your initial code might look like the following. Don't worry if you don't know any Node or Express. They're not the main part of the article. Just follow along:

```js
// A little bit of NodeJS here. This is how you'll get data from the frontend through your API.
app.post('/buy-thing', (req, res) => {
  const customer = req.body

  // Charge customer here
})
```

Let's go through the first step with callback-based code first. Here, you want to charge a customer. If this charge is successful, you add their information to a database. If the charge fails, you throw an error, so your server can handle the error.

The code looks like this:

```js
// Callback based code
app.post('/buy-thing', (req, res) => {
  const customer = req.body

  // First operation: charge the customer
  chargeCustomer(customer, (err, charge) => {
    if (err) throw err

    // Add to database here
  })
})
```

Now, let's switch to promise-based code. Likewise, you charge a customer. If the charge is successful, you add their information to the database with a `then` call. If the charge fails, you handle it automatically within the `catch` call:

```js
// Promised based code
app.post('/buy-thing', (req, res) => {
  const customer = req.body

  // First operation: charge the customer
  chargeCustomer(customer)
    .then(/* Add to database */)
    .catch(err => console.log(err))
})
```

Moving on, you add your customer information to your database when the charge succeeds. If your database operation succeeds, you send an email to your customer. Otherwise, you throw an error.

With these steps in mind, the callback-based code looks like this:

```js
// Callback based code
app.post('/buy-thing', (req, res) => {
  const customer = req.body

  chargeCustomer(customer, (err, charge) => {
    if (err) throw err

    // Second operation: Add to database
    addToDatabase(customer, (err, document) => {
      if (err) throw err

      // Send email here
    })
  })
})
```

For the promised-based code, if your database operation succeeds, you send the email in the next `then` call. If your database operation fails, the error automatically gets handled in the final `catch` statement:

```js
// Promised based code
app.post('/buy-thing', (req, res) => {
  const customer = req.body

  chargeCustomer(customer)
    // Second operation: Add to database
    .then(_ => addToDatabase(customer))
    .then(/* Send email */)
    .catch(err => console.log(err))
})
```

Moving on to the last step, you send an email to your customer when the database operation succeeds. If this emails is sent successfully, you notify your frontend with a success message. Otherwise, you throw an error:

Here's how the callback-based code looks like:

```js
app.post('/buy-thing', (req, res) => {
  const customer = req.body

  chargeCustomer(customer, (err, charge) => {
    if (err) throw err

    addToDatabase(customer, (err, document) => {
      if (err) throw err

      sendEmail(customer, (err, result) => {
        if (err) throw err

        // Tells frontend success message.
        res.send('success!')
      })
    })
  })
})
```

And here's how the promise-based code looks like:

```js
app.post('/buy-thing', (req, res) => {
  const customer = req.body

  chargeCustomer(customer)
    .then(_ => addToDatabase(customer))
    .then(_ => sendEmail(customer) )
    .then(result => res.send('success!')))
    .catch(err => console.log(err))
})
```

See why it's much easier to write asynchronous code with promises instead of callbacks? You switch from callback hell into the happy-chain-land 😂.

## Firing off multiple promises at once.

An additional benefit promises have over callbacks is that you can fire off two (or many) promises at the same time if the operations aren't dependent on each other, but both results are needed to perform a third action.

To do so, you use the `Promise.all` method, then pass in an array of promises you'd like to wait for. Your `then` argument would then be an array that contains the results from your promises:

```js
const friesPromise = getFries()
const burgerPromise = getBurger()
const drinksPromise = getDrinks()

const eatMeal = Promise.all([
  friesPromise,
  burgerPromise,
  drinksPromise
])
  .then([fries, burger, drinks] => {
    console.log(`Chomp. Awesome ${burger}! 🍔`)
    console.log(`Chomp. Delicious ${fries}! 🍟`)
    console.log(`Slurp. Ugh, shitty drink ${drink} 🤢 `)
  })
```

(Note: there's also a method called `Promise.race`, but I haven't found a proper use case for it. You can check it out [here](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)).

Finally, let's talk about browser support! Why learn promises if you can't use it in production. Right?

## Wrapping up

You learned all about promises in this article. In short, promises are rad. It helps you write asynchronous code without taking a step into callback hell.

Although you probably want to use promises whenever you can, there are cases where callbacks makes sense too. Don't forget about callbacks 😉.

If you have a question, leave it in the comments below and I'll get back to you as soon as I can.