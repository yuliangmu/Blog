# JavaScript 拷贝

> 如果两个对象是一个东西，为什么不用同一份？如果两个对象不是同一个东西，为什么要复制？

## 浅拷贝

- `concat()`

- `slice()`

- `...运算符`

- `Object.assign()`

常规浅拷贝实现

```js
const shallowCopy = function(obj) {
  if (typeof obj !== 'object') return
  const newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}
```

## 深拷贝

建议使用 Lodash [cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep)

深拷贝简单实现（未考虑 `null`，DOM 对象，正则对象，事件对象等）

```js
const deepCopy = function(obj) {
  if (typeof obj !== 'object') return
  const newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 如果是对象，递归调用深拷贝函数
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj
}
```

### References

[冴羽](https://github.com/mqyqingfeng/Blog/issues/32)

[从零实现 jQuery 的 extend](https://github.com/mqyqingfeng/Blog/issues/33)

[为什么要使用深拷贝？](https://www.zhihu.com/question/52965788/answer/132843912)
