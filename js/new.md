# new operator

```js
function objectFactory(Constructor, ...rest) {
  const instance = Object.create(Constructor.prototype)
  const result = Constructor.apply(instance, rest)
  return (typeof result === 'object' && result) || instance
}
```

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

- [讶羽](https://github.com/mqyqingfeng/Blog/issues/13)

- [YCK](https://juejin.im/post/5c7b963ae51d453eb173896e)
