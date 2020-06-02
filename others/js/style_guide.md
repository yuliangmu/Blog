# JavaScript Style Guide

## 函数注释

- [强制] 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识
- [强制] 参数和返回值注释必须包含类型信息和说明
- [建议] 当函数是内部函数，外部不可访问时，可以使用 @inner 标识

示例：

```js
/**
 * @desc 函数描述
 * @param {string} p1 参数1的说明
 * @param {string} p2 参数2的说明，比较长
 *     那就换行了.
 * @param {number=} p3 参数3的说明（可选）
 * @return {Object} 返回值描述
 */
function foo(p1, p2, p3) {
  var p3 = p3 || 10
  return {
    p1: p1,
    p2: p2,
    p3: p3,
  }
}
```

- [强制] 对 Object 中各项的描述， 必须使用 @param 标识

```js
/**
 * @desc 函数描述
 * @param {Object} option 参数描述
 * @param {string} option.url option项描述
 * @param {string=} option.method option项描述，可选参数
 */
function foo(option) {
  // TODO
}
```

view [here](https://github.com/fex-team/styleguide/blob/master/javascript.md#248-%E5%87%BD%E6%95%B0%E6%96%B9%E6%B3%95%E6%B3%A8%E9%87%8A)
