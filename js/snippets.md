# JavaScript 代码片段

<!-- markdownlint-disable -->

## Array

### 通过 ID 查找对象数组中的项

```js
const objArr = [{ id: 2, name: '王花花' }, { id: 3, name: '李拴蛋' }]
objArr.find(el => el.id === 3) // { id: 3, name: '李拴蛋' }
```

[StackOverflow](https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects)

## String

### 将字符串首字母大写

```js
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''))
```

<details>
  <summary>Examples</summary>

```js
capitalize('fooBar') // 'FooBar'
capitalize('fooBar', true) // 'Foobar'
```

</details>

### 将字符串中的每个单词首字母大写

```js
const capitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase())
```

<details>
  <summary>Examples</summary>

```js
capitalizeEveryWord('hello world!') // 'Hello World!'
```

</details>

## 参考

- [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code)
