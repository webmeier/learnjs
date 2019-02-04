# Answers for module 4

## Lesson 1: Intro to Arrays

Make an empty array that contains nothing.

```js
const emptyArray = []
```

Make an array that contains three items.

```js
const filledArray = ['one', 'two', 'three']
```

The following questions require you to make use of the `people` array provided below.

```js
let people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Napolean Bonaparte',
  'Abraham Lincoln',
  'Mother Theresa',
  'Mahatma Gandhi',
  'Winston Churchill',
  'Charles Darwin',
  'Albert Einstein',
  'Pablo Picasso',
  'Ludwig Beethoven',
  'Walt Disney',
  'Henry Ford',
  'Steve Jobs'
]
```

- What is the index of Mahatma Gandhi in this list of people?

```js
const gandhiIndex = people.indexOf('Mahatma Gandhi')
```

- Get `Pablo Picasso` from the `people` array.

```js
const picassoIndex = people.indexOf('Pablo Picasso')
const picasso = people[picassoIndex]
```

- Set `Walt Disney` to `Disneyland`.

```js
const disneyIndex = people.indexOf('Wailt Disney')
people[disneyIndex] = 'Disneyland'
```

- Add your best friend's name to the end of the list

```js
people = people.concat('John')
```

- Add another friend's name to the start of the list

```js
people = ['Mary'].concat(people)
```

- Add your name after `Winston Churchill` in the list

```js
const churchillIndex = people.indexOf('Winston Churchill')
const part1 = people.slice(0, churchillIndex + 1)
const part2 = ['Zell Liew']
const part3 = people.slice(churchillIndex + 1)

people = part1.concat(part2, part3)
```

- Remove `Benjamin Franklin` from this list

```js
people = people.slice(1)
```

- Remove `Steve Jobs` from this list

```js
people = people.slice(0, people.length - 1)
```

```js
const napoleanIndex = people.indexOf('Napolean Bonaparte')
people = [].concat(
  people.slice(0, napoleanIndex),
  people.slice(napoleanIndex + 1)
)
```

## Lesson 02: For loops

Here's the array of numbers to use for this exercise:

```js
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]
```

- Loop through the numbers and `console.log` each number within

```js
for (const num of numbers) {
	console.log(num)
}
```

- Loop through the numbers. If the numbers are greater than 5, `console.log` them.

```js
for (const num of numbers) {
	if (num > 5 ) console.log(num)
}
```

- Create a new array. Add all numbers that are greater than 10 into this new array. (Hint: You have to loop through the `numbers` array first)

**Note:** In this situation, it's easier to use `push` instead of `concat`. I intend to update the lessons to teach when to use `push` and when to use `concat` properly. This will have to wait until I complete the course though.

```js
let array = []
for (const num of numbers) {
	if (num > 10 ) {
		array = array.concat(num)
	}
}

// If you're using `push` instead of `concat`
let array = []
for (const num of numbers) {
	if (num > 10 ) {
		array.push(num)
	}
}
```

- Create a new array. Multiply all numbers by 5 and put them into the new array. (Hint: You have to loop through the `numbers` array first).

```js
let array = []
for (const num of numbers) {
	array = array.concat(num * 5)
}

// If you're using `push` instead of `concat`
let array = []
for (const num of numbers) {
	array.push(num * 5)
}
```

## Lesson 3: forEach loop

Here's the list of people to use for this exercise:

```js
const people = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
  { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
  { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
]
```

- `console.log` the first name of each person in the array.

```js
people.forEach(person => {
	console.log(person.firstName)
})
```

- Make a second array that contains only the first name of each person.

```js
let firstNames = []
people.forEach(person => {
	firstNames = firstNames.concat(person.firstName)
})

// As with previous lesson, this is easier with a `push`.
let firstNames = []
people.forEach(person => {
	firstNames.push(person.firstName)
})
```

- Make a third array that contains people that have died after 1950.

```js
let diedAfter1950 = []
people.forEach(person => {
	if (person.yearOfDeath > 1950) {
		diedAfter1950 = diedAfter1950.concat(person)
	}
})

// Likewise, easier with `push`
// let diedAfter1950 = []
people.forEach(person => {
	if (person.yearOfDeath > 1950) {
		diedAfter1950.push(person)
	}
})
```

- Find index of Charles Darwin in the array.

```js
// If something cannot be found, index should be -1
let darwinIndex = -1

people.forEach((person, index) => {
	if (person.firstName === 'Charles' && person.lastName === 'Darwin') {
		darwinIndex = index
	}
})
```

## Selecting multiple elements

Practice selecting Elements with `querySelectorAll`.

```html
<div id="star-wars">
  <div class="character" data-type="good-guy">Luke Skywalker</div>
  <div class="character" data-type="good-guy">Yoda</div>
  <div class="character" data-type="villain">Darth Vader</div>
</div>
```

- Select all good guys with attributes
- Give good guys a `yay` class

```js
const goodGuys = document.querySelectorAll('[data-type="good-guy"]')

// Giving yay class
Array.from(goodGuys).forEach(elem => elem.classList.add('yay'))
```

- Select all villains with attributes
- Give villains a `nay` class

```js
const badGuys = document.querySelectorAll('[data-type="villain"]')

// Giving nay class
Array.from(badGuys).forEach(elem => elem.classList.add('nay'))
```

- Select all characters through the `character` class.
- Give all characters a `star-wars` class

```js
const characters = document.querySelectorAll('.character')
Array.from(characters).forEach(elem => elem.classList.add('star-wars'))
```
