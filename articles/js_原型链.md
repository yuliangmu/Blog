# 原型链

## TODO

### 下面这个问题想一下

想之前可以先参考 [new 运算符](https://github.com/mqyqingfeng/Blog/issues/13)

`new` 实现的第四部：[new | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)

```js
function Foo() {}
let foo = new Foo()
// 原型链:	foo ---> Foo.prototype ---> Object.prototype ---> null

function Foo() {
  return {}
}
let foo = new Foo()
// 原型链:	foo ---> Object.prototype ---> null
```

```js
Function.__proto__ === Function.prototype // true

Object instanceof Function // true
Function instanceof Object // true

Object instanceof Object // true
Function instanceof Function // true
```

## 参考

[深入探究 Function & Object 鸡蛋问题](https://juejin.im/post/5cb4861ff265da036504efbc)
