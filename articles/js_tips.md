# JavaScript TIPS

## 字符串和数值相互转换

项目中前后台交互传递数值的数据时，常会有字符串和数值之间互相转换的需求：

### [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

字符串转数值建议首先考虑用这个方法。[StackOverflow](https://stackoverflow.com/questions/1133770/convert-a-string-to-an-integer-in-javascript?answertab=active#tab-top)

### [`parseInt(string, radix)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

> The `parseInt()` function parses **a string argument** and returns an integer of the specified radix (the base in mathematical numeral systems).

使用注意：这个方法是用于将 **String** 转换为 **Number** 类型的，而不是对数字取整，所以要正确应用，建议始终带上 **`radix`**。如果是数值取整，请使用 `Math.floor(num)`

## 向回调方法传递参数

通常情况下，我们不能给回调函数传递参数。 比如:

```js
function callback() {
  console.log('Hi human')
}

document.getElementById('someelem').addEventListener('click', callback)
```

但通过借助闭包可以实现传递参数给回调函数：

```js
function callback(a, b) {
  return function() {
    console.log('sum = ', a + b)
  }
}

let x = 1
let y = 2
document.getElementById('someelem').addEventListener('click', callback(x, y))
```

还有一种方法是使用 [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) 方法：

```js
var alertText = function(text) {
  alert(text)
}

document
  .getElementById('someelem')
  .addEventListener('click', alertText.bind(this, 'hello'))
```

参考：[jsTips](http://www.jstips.co/en/javascript/passing-arguments-to-callback-functions/)

这里有一个实际应用的例子：[CodePen](https://codepen.io/yuliangmu/pen/BbVJLd?editors=1011)

## 深浅拷贝

走心点还是使用 Lodash 把： [\_cloneDeep](https://lodash.com/docs/4.17.11#cloneDeep)。但在使用之前，先看下[这个回答](https://www.zhihu.com/question/52965788/answer/132843912)

下面提到的了解一下，实际项目中遇到这样的需求回来填坑。

### 浅拷贝

- `concat()`

- `slice()`

- `...运算符`

- `Object.assign()`

老实的浅拷贝：

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

参考：[冴羽](https://github.com/mqyqingfeng/Blog/issues/32)

### 深拷贝

> 如果两个对象是一个东西，为什么不用同一份？如果两个对象不是同一个东西，为什么要复制？参见[这个回答](https://www.zhihu.com/question/52965788/answer/132843912)

深拷贝简单实现（未考虑 `null`，DOM 对象，正则对象，事件对象等，重点理解思路）

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

不老实的深拷贝：

- `JSON.parse(JSON.stringify(souceObj))`

此方法有很多需要注意的地方，参考[这里](https://www.jianshu.com/p/b084dfaad501)

### 扩展阅读

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)

- [从零实现 jQuery 的 extend](https://github.com/mqyqingfeng/Blog/issues/33)
