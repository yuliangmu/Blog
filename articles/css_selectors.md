# CSS 选择器

最近写的项目里面满篇的都是类选择器，不是说不好，只是很多情况下不用去专门给元素类名，直接通过选择器就可以办到

## 属性选择器

Attribute selector 个人实际开发中用的还比较少，先记录一下最常用的

- `[attr]`：匹配 `attr` 属性的元素

- `[attr=value]`：匹配 `attr` 属性，值为 `value` 的元素

- `[attr~=value]`：匹配 `attr` 属性，`value` 为以空格分隔的值列表中的一个

  ```css
  div[lang~='en-us'] {
    color: blue;
  }
  // <div lang="en-us en-gb en-au en-nz">Hello World!</div>
  ```

- `[attr|=value]`：匹配 `attr` 属性，值为 `value` 或以 `value-` 开头的元素，常用于匹配 language subcode matches

  ```css
  div[lang|='zh'] {
    color: red;
  }
  // <div lang="zh-CN">世界您好！</div>
  // <div lang="zh-TW">世界您好！</div>
  ```

- `[attr^=value]`：匹配 `attr` 属性，值为以 `value` **开头**的元素

- `[attr$=value]`：匹配 `attr` 属性，值为以 `value` **结尾**的元素

- `[attr*=value]`：匹配 `attr` 属性，值中含有 `value` 的元素

## 参考资料

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

```

```
