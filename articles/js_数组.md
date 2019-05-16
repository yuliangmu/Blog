# 数组

> Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新 —— [Vue 文档](https://cn.vuejs.org/v2/guide/list.html#%E6%95%B0%E7%BB%84%E6%9B%B4%E6%96%B0%E6%A3%80%E6%B5%8B)

> 变异方法 (mutation method)，会改变被这些方法调用的原始数组。相比之下，也有非变异 (non-mutating method) 方法，不会改变原始数组，总是返回一个新数组

## 变异方法

```js
1. push()
2. pop()
3. shift()
4. unshift()
5. splice()
6. sort()
7. reverse()
```

## 非变异方法

非变异方法不会改变原始数组，但会返回一个**新数组**，例如：`filter()`, `concat()` 和 `slice()` 。Vue 中使用非变异方法时，可以用新数组替换旧数组（高效且会触发试图更新）

### map()

> [demo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Using_map_generically)

> [StackOverflow](https://stackoverflow.com/a/38259440)

```js
var map = Array.prototype.map
var a = map.call('Hello World', function(x) {
  return x.charCodeAt(0)
})
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```
