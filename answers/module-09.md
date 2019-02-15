# Answers for Module 9

## Lesson 7: Preventing objects from mutating

- Combine two objects with `Object.assign`.

```js
const object1 = { wheels: 4 }
const object2 = { type: 'car' }

const merged = Object.assign({}, object1, object2)
```

- Combine two objects with `assignment`.

```js
// From https://github.com/bevacqua/assignment/blob/master/assignment.js
function assignment (result) {
  var stack = Array.prototype.slice.call(arguments, 1);
  var item;
  var key;
  while (stack.length) {
    item = stack.shift();
    for (key in item) {
      if (item.hasOwnProperty(key)) {
        if (typeof result[key] === 'object' && result[key] && Object.prototype.toString.call(result[key]) !== '[object Array]') {
          if (typeof item[key] === 'object' && item[key] !== null) {
            result[key] = assignment({}, result[key], item[key]);
          } else {
            result[key] = item[key];
          }
        } else {
          result[key] = item[key];
        }
      }
    }
  }
  return result;
}

const object1 = { wheels: 4 }
const object2 = { type: 'car' }

const merged = assignment(object1, object2)
```
