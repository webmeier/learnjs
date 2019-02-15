# Answers for Module 8

## Lesson 1: Ternary operators

- Which function executes in the code below? `walk()` or `stop()`?

```js
const lightColor = 'red'

lightColor === green
  ? walk()
  : stop()
```

Answer: Stop.

- Find the index of `apple` in the `fruitBasket`.
- Then, use a ternary operator to decide between two functions, `eat()` or `wash()`.
- If the `index` of the apple is 2, run `eat()`. Otherwise, run `wash()`.

```js
const fruitBasket = ['apple', 'pear', 'orange']
const index = fruitBasket.indexOf('apple')

index === 2
	? eat()
	: wash()
```

- What is `finalNum` in the following code?

```js
const num = 5
const square = num => num * num
const add = num => num + num

const finalNum = num > 5 ? square(num) : add(num)
```

Answer: 10

## Lesson 2: AND and OR operators

What value would you get for each of the following expressions?

1. `'Benjamin' && 'Thaddeus'`. Answer: `Thaddeus`
2. `'Benjamin' || 'Thaddeus'`. Answer: `Benjamin`
3. `'' && null`. Answer: `''`
4. `'' || null`. Answer: `null`
5. `2550284 && 0`. Answer: 0
6. `2550284 || 0`. Answer: 2550284

## Lesson 4: Template Literals

- `console.log` a string that contains a variable with template literals

```js
const thing = 'world'
console.log(`Hello ${thing}`)
```

- `console.log` a string that spans multiple lines with template literals

```js
console.log(`This
is
a
string
that
spans
many
many
many
lines`)
```

## Lesson 5: Destructuring

Perform these actions with the following set of data:

1. Get the first two items in `posts` with destructuring.
2. Get the `id` and `title` of the first post with destructuring.
3. Rename the `title` of the first post to `content` while you destructure.
4. The first post doesn't have a description. Create one as you desctructure. Set it to `Nothing is better than leaving the description empty`.

const posts = [{
  id: 800,
  title: 'This is 💩'
}, {
  id: 801,
  title: 'Pooing is a natural thing.'
}, {
  id: 802,
  title: 'Poo jokes are getting irritating'
}]

- Get the first two items in `posts` with destructuring.

```js
const [post1, post2] = posts
```

- Get the `id` and `title` of the first post with destructuring.

```js
const [post1] = posts
const {title, id} = post1
console.log(title) // This is 💩
console.log(id) // 800
```

- Rename `title` of the first post to `content` while you destructure.

```js
const [post1] = posts
const {title: content} = post1
console.log(content) // This is 💩
```

- The first post doesn't have a description. Create one as you desctructure. Set it to `Nothing is better than leaving the description empty`.

```js
const [post1] = posts
const {
	description = 'Nothing is better than leaving the description empty'
} = post1
console.log(description) // 'Nothing is better than leaving the description empty'
```

## Lesson 6: Default parameters

- Create a function, `signUpForPlan`, that takes in one parameter, `plan`. `plan` defaults to `basic`.

```js
const signUpForPlan = (plan = 'basic') => {
	// Stuff
}
```

- Create a function, `createEmployee` that takes in an object that has five properties:
	1. First Name
	2. Last Name
	3. Age
	4. Gender
	5. Position (default position to `associate`)

```js
const createEmployee = (
	firstName,
	lastName,
	age,
	gender,
	position = 'associate'
= {}) => {
	// Stuff
}
```

## Enhanced Object Literals

- Create a property with property value shorthands

```js
const name = 'Zell'
const gender = 'male'

const zell = {
	name,
	gender
}

console.log(zell.name) // Zell
console.log(zell.gender) // male
```

- Create a method with method shorthands

```js
const zell = {
  sayMyName: function () { console.log("I'm Zell") }
}
```

- Add two dynamic variables into Javascript with computed property names

const property = 'name'
```js
const property = 'name'
const person = {
  [property]: 'Zell',
  ['full' + property]: 'Zell Liew'
}

console.log(person.fullname) // Zell Liew
```

## Lesson 8: Rest and Spread

- Spread an array in a `console.log`

```js
const array = ['one', 'two', 'three']
console.log(...array)
```

- Spread an array when calling a function

```js
addThemUp(...array)
```

Concatenate arrays with spread

```js
const one = [1, 2, 3]
const two = [4, 5, 6]
const combined = [...one, ...two]
console.log(combined) // [1, 2, 3, 4, 5, 6]
```

- Use the rest operator as a function argument

```js
const addThemup = (...args) => {
	console.log(...args)
}
```

- Destructure an array; pack items into a variable with rest.

```js
const array = ['one', 'two', 'three']
const [one, ...rest] = array
console.log(one) // one
console.log(rest) // [two, three]
```

- Destructure an object; pack remaining properties with rest.

```js
const zell = {
	firstName: 'Zell',
	lastName: 'Liew',
	gender: 'male'
}
const {firstName, ...rest} = zell
console.log(firstName) // Zell
console.log(rest) // {lastName: "Liew", gender: "male"}
```

7. Spread an object into another object.

-

```js
const person = {
	firstName: 'Zell',
	lastName: 'Liew',
}

const male = {
	gender: 'male'
}

const zell = {...person, ...male}
```

## Lesson 9: Useful array methods

Complete these exercises with the following data:

1. Find the index of `Thomas Edison`.
2. Find the object that contains `Winston Churchill`.
3. Create an array that contains people that died before 1940.
4. Create an array that contains people that are alive between 1850 and 1970.
5. Create an array that contains the `firstName`, `lastName` and `yearsLived` for each person (where `yearsLived` is the number of years the person lived).
6. Get the total number of `yearsLived` of the people who were alive between 1750 and 1900.

```js
const people = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearBorn: 1706, yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearBorn: 1847, yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearBorn: 1882, yearOfDeath: 1945 },
  { firstName: 'Napolean', lastName: 'Bonaparte', yearBorn: 1769, yearOfDeath: 1821 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearBorn: 1809, yearOfDeath: 1865 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearBorn: 1869, yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearBorn: 1874, yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearBorn: 1809, yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearBorn: 1879, yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearBorn: 1881, yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearBorn: 1770, yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearBorn: 1901, yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearBorn: 1863, yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearBorn: 1955, yearOfDeath: 2012 }
]
```

- Find the index of `Thomas Edison`.

```js
const index = people.findIndex(person => {
	const { firstName, lastName } = person
	return firstName === 'Thomas' && lastName === 'Edison'
})
```

- Find the object that contains `Winston Churchill`.

```js
const churchill = people.find(person => {
	const { firstName, lastName } = person
	return firstName === 'Winston' && lastName === 'Churchill'
})
```

- Create an array that contains people that died before 1940.

```js
const diedBefore1940 = people.filter(person => person.yearOfDeath < 1940)
```

- Create an array that contains people that are alive between 1850 and 1970.

```js
const aliveBetween1850And1970 = people.filter(person => {
  const { yearBorn, yearOfDeath } = person
  return yearBorn > 1850 && yearOfDeath < 1970
})
```

Create an array that contains the `firstName`, `lastName` and `yearsLived` for each person (where `yearsLived` is the number of years the person lived).

```js
const peeps = people.map(person => {
  const yearsLived = person.yearOfDeath - person.yearBorn
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    yearsLived
  }
})
```

- Get the total number of `yearsLived` of the people who were alive between 1750 and 1900.

```js
const aliveBetween1750And1900 = people.filter(person => {
  const { yearBorn, yearOfDeath } = person
  return yearBorn > 1750 && yearOfDeath < 1900
})

let totalYearsLived = 0
aliveBetween1750And1900.forEach(person => {
  const { yearBorn, yearOfDeath } = person
  const yearsLived = yearOfDeath - yearBorn
  totalYearsLived = totalYearsLived + yearsLived
})

console.log(totalYearsLived) // 238
```

## Lesson 11: Looping through objects

- Loop through an array created with `Object.keys`

```js
const fruitBasket = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const fruits = Object.keys(fruitBasket)
fruits.forEach(fruit => {
	console.log(`There are ${fruit}s in the fruitBasket`)
})
```

- Loop through an array created with `Object.values`

```js
const fruitBasket = {
  apple: 28,
  orange: 17,
  pear: 54,
}

const values = Object.values(fruitBasket)
values.forEach(num => {
	console.log(num)
})
```

- Loop through an array created with `Object.entries`

```js
const fruitBasket = {
  apple: 28,
  orange: 17,
  pear: 54
}

const fruits = Object.entries(fruitBasket)
fruits.forEach(([fruit, num]) => {
  console.log(`There are ${num} ${fruit}s in the fruitBasket`)
})
```

## Lesson 12: Implicit return for objects

- Create an arrow function that uses implicit returns to return an object.

```js
const arrow _ => ({key: 'value'})
```
