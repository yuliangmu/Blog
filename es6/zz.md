# `for in` 与 `for of`

> Both `for...in` and `for...of` statements iterate over something. The main difference between them is **in what they iterate over**.

先看[例子](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#Difference_between_for...of_and_for...in)：

```js
Object.prototype.objCustom = function() {}
Array.prototype.arrCustom = function() {}

const iterable = [3, 5, 7]
iterable.foo = 'hello'

for (const i in iterable) {
  console.log(i) // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i) // logs 0, 1, 2, "foo"
  }
}

for (const i of iterable) {
  console.log(i) // logs 3, 5, 7
}
```

## 相关

[StackOverflow](https://stackoverflow.com/a/34349073)
[张鑫旭](https://www.zhangxinxu.com/wordpress/2018/08/for-in-es6-for-of/)
[Segmentfault](https://segmentfault.com/q/1010000006658882)