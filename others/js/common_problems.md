# JavaScript 常见问题

## 向回调方法传递参数

通常情况下，我们不能给回调函数传递参数。 比如:

```js
function callback() {
  console.log('Hi human')
}

document.getElementById('someelem').addEventListener('click', callback)
```

但是可以通过闭包传递参数

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

也可以使用 [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

```js
var alertText = function(text) {
  alert(text)
}

document.getElementById('someelem').addEventListener('click', alertText.bind(this, 'hello'))
```

参考：[jsTips](http://www.jstips.co/en/javascript/passing-arguments-to-callback-functions/)

这里有一个实际应用的例子：[CodePen](https://codepen.io/yuliangmu/pen/BbVJLd?editors=1011)
