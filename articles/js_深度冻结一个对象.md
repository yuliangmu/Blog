# Object.freeze()

> The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. `freeze()` returns **the same object** that was passed in. -- [MDN][1]

**注意：**

1. 一个对象被冻结后，将不能修改它指向的原型（`__proto__`）。但是原型对象上的数据结构依然可以更改

2. 返回的还是原来那个对象（冻结后的） 

## Shallow freeze

> The result of calling `Object.freeze()` only applies to the **immediate properties** of `object` itself and will prevent future property addition, removal or value re-assignment operations only on `object`. If the value of those properties are objects themselves, those objects are not frozen and may be the target of property addition, removal or value re-assignment operations.

**解释：**

调用 `Object.freeze(object)` 的效果仅作用于 `object` 的 **immediate properties**。被冻结后 `object` 不能添加新的 `key`，不能删除的 `object` 的 **immediate properties** 和为其重新赋值。如果 **immediate properties** 存储的是引用类型值的地址，那么这个地址是不可变的（被冻结了嘛），但它指向的那个引用类型值并没有被冻结。

shallow freeze 的例子：

```js
const employee = {
  name: 'Mayank',
  designation: 'Developer',
  address: {
    street: 'Rohini',
    city: 'Delhi'
  }
}

Object.freeze(employee)

employee.name = 'Dummy' // fails silently in non-strict mode
employee.address.city = 'Noida' // attributes of child object can be modified

console.log(employee.address.city) // Output: "Noida"
```

虽然冻结了 `employee`，但是仍然可以修改 `employee.address` 的数据结构，如上例中 `city` 被改变了。

BTW: 其实这个东西就是引用类型那一套，当 `Object.freeze(employee)` 后，`employee.address` 指向的那个内存地址所保存的数据就不能改变了（效果类似 `const`），但是 `employee.address` 指向的数据结构是否可变，不受 `Object.freeze()` 影响。

## Deep freeze

> To make an object immutable, recursively freeze each property which is of type object (deep freeze).

```js
/**
 * @desc: 深度冻结一个对象
 * @param {object} - 需要冻结的对象
 * @return: 传入的对象（深度冻结）
 */

function deepFreeze(object) {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object)

  // Freeze properties before freezing self
  for (let name of propNames) {
    let value = object[name]
    // 运算符优先级：typeof > === > && > 条件运算符 > =
    object[name] =
      value && typeof value === 'object' ? deepFreeze(value) : value
  }

  return Object.freeze(object)
}
```

使用案例：

```js
const employee = {
  name: 'Mayank',
  designation: 'Developer',
  address: {
    street: 'Rohini',
    city: 'Delhi'
  }
}

deepFreeze(employee)

employee.address.city = 'Noida' // fails silently in non-strict mode
console.log(employee.address.city) // 'Delhi' 城市名没有改变
console.log(delete employee.address.city) // false 不能删除 city，address已经被冻结
```

## References

[`Object.freeze()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze 'MDN')

[`const`本质](http://es6.ruanyifeng.com/#docs/let#%E6%9C%AC%E8%B4%A8 '阮一峰 ECMAScript6 入门')

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze 'Object.freeze()'
