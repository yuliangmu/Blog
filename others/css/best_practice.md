# CSS 最佳实践

兼容：IE9↑

- [使用 IE 盒模型](#使用-ie-盒模型)
- [清除浮动](#清除浮动)
- [属性书写顺序](#属性书写顺序)
- [伪元素选择器](#伪元素选择器)
- [Misc](#Misc)

## 使用 IE 盒模型

> [CSS-Tricks](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

```css
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
```

## 清除浮动

> [StackOverflow](https://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use/1633170#1633170)

```css
.container::after {
  content: ''; /* 这改用双引号(Fuck Formatting tools) */
  display: block;
  clear: both;
}
```

> 附：如果不考虑 IE [兼容性](https://caniuse.com/#search=flexbox)，可以愉快地使用 `flex` 和 `grid`

## 属性书写顺序

> [CSS-Tricks](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

这一条暂定，多实践选择适合自己的

```css
.selector {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  /* 先定框框大小 */
  width: 100px;
  height: 100px;
  /* 再由内向外 */
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* Color */
  background: #000;
  color: #fff;

  /* Text */
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;

  /* Other */
  cursor: pointer;
}
```

CSS3 属性顺序注意: [CSS-TRICKS](https://css-tricks.com/ordering-css3-properties/)

## 伪元素选择器

伪元素选择器使用**两个冒号**，区别于伪类

```css
selector::pseudo-element {
  property: value;
}
```

## Misc

不要给 `id`、`class` 选择器添加类型选择器进行限定，对性能和维护都有影响

```css
/* good */
#error,
.danger-message {
  color: #c00;
}

/* bad */
dialog#error,
p.danger-message {
  color: #c00;
}
```

### flex 简写

Flex 容器

| 简写    | 表示                              |
| ------- | --------------------------------- |
| `d-f`   | `display: flex;`                  |
| `ff-rn` | `flex-flow: row nowrap;`          |
| `ff-rw` | `flex-flow: row wrap;`            |
| `ff-cn` | `flex-flow: column nowrap;`       |
| `ff-cw` | `flex-flow: column wrap;`         |
| `jc-fs` | `justify-content: flex-start;`    |
| `jc-fe` | `justify-content: flex-end;`      |
| `jc-c`  | `justify-content: center;`        |
| `jc-sb` | `justify-content: space-between;` |
| `jc-sa` | `justify-content: space-around;`  |
| `jc-se` | `justify-content: space-evenly;`  |
| `ai-fs` | `align-items: flex-start;`        |
| `ai-fe` | `align-items: flex-end;`          |
| `ai-c`  | `align-items: center;`            |
| `ai-b`  | `align-items: baseline;`          |
| `ai-s`  | `align-items: stretch;`           |
| `ac-fs` | `align-content: flex-start;`      |
| `ac-fe` | `align-content: flex-end;`        |
| `ac-c`  | `align-content: center;`          |
| `ac-sb` | `align-content: space-between;`   |
| `ac-sa` | `align-content: space-around;`    |
| `ac-s`  | `align-content: stretch;`         |

Flex 子项（这个不用把。）

<!-- | 简写    | 表示                              |
| ------- | --------------------------------- | -->

## References

[Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#CSS_Style_Rules)
