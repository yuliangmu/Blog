# `Array.prototype.reduce()`

> The `reduce()` method executes a **reducer** function (that you provide) on each element of the array, resulting in a single output value. —— [MDN][1]

## Syntax

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]]), [, initialValue])
```

**NOTE**

1. If `initialValue` is not provided, `reduce()` will execute the callback function starting at index 1, skipping the first index. If `initialValue` is provided, it will start at index 0.
1. Calling `reduce()` on an empty array without an initialValue will throw a `TypeError`.

## Examples

### Sum all the values of an array

```js
const sum = [0, 1, 2, 3].reduce((acc, cur) => {
  return acc + cur
}, 0)
// sum is 6
```

### Sum of values in an object array :+1: :heart:

To sum up the values contained in an array of objects, you **must** supply an initialValue, so that each item passes through your function.

在下面的对象数组中，若不提供初始值，`acc` 初始值将会是 `{ x: 1 }`，导致和预期（求和）不符。

```js
const initialValue = 0
const sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (acc, cur) => acc + cur.x,
  initialValue
)

console.log(sum) // logs 6
```

### Counting instances of values in an object :+1:

```js
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
const reducer = (acc, cur) => {
  acc[cur] = acc[cur] ? ++acc[cur] : 1

  return acc
}

// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
const countedNames = names.reduce(reducer, {})
```

### Grouping objects by a property :tada:

```js
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
]

const groupBy = (objArr, prop) => {
  return objArr.reduce((acc, cur) => {
    const key = cur[prop]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(cur)

    return acc
  }, {})
}

// {"20":[{"name":"Max","age":20},{"name":"Jane","age":20}],"21":[{"name":"Alice","age":21}]}
const groupedPeople = groupBy(people, 'age')
```

### Remove duplicate items in array

```js
const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
const myOrderedArray = myArray.reduce((acc, cur) => {
  if (acc.indexOf(cur) === -1) {
    acc.push(cur)
  }

  return acc
}, [])

console.log(myOrderedArray) // ["a", "b", "c", "e", "d"]
```

## References

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
