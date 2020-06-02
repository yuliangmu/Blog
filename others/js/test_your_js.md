# “奇怪”的 JS

记录一些“怪异”（易错）的 JS 片段

## 连等赋值问题

```js
var a = { n: 1 }
var b = a
a.x = a = { n: 2 }

console.log(a.x) // ?
console.log(b.x) // ?
```

参考

[Segmentfault](https://segmentfault.com/q/1010000002637728)

[Associativity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Associativity)
