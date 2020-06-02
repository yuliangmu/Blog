# `Array.prototype.reduce()`

> The [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method executes a **reducer** function (that you provide) on each element of the array, resulting in a single output value.

## Syntax

```js
arr.reduce(callback(accumulator, currentValue[, index[, array]]), [, initialValue])
```

:exclamation: Note

1. If `initialValue` is not provided, `reduce()` will execute the callback function starting at index 1, skipping the first index. If `initialValue` is provided, it will start at index `0`.
1. Calling `reduce()` on an empty array without an initialValue will throw a `TypeError`.

## Examples

### 求 number 数组中所有项的和

```js
const sum = [0, 1, 2, 3].reduce((acc, cur) => {
  return acc + cur
}, 0)
```

### 计算数组中每一项出现的次数

```js
const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
const reducer = (acc, cur) => {
  acc[cur] = acc[cur] ? ++acc[cur] : 1

  return acc
}

// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
const countedNames = names.reduce(reducer, {})
```

### 移除数组中的重复项

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

### :+1: Grouping objects by a property

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
