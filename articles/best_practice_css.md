# CSS 最佳实践

兼容：IE9↑

## 目录

- [使用 IE 盒模型](#使用-ie-盒模型)
- [清除浮动](#清除浮动)
- [属性书写顺序](#属性书写顺序)

## 使用 IE 盒模型

> [CSS-TRICKS](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

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
  content: ''; /* 这改用双引号 */
  display: block;
  clear: both;
}
```

附：如果不考虑 IE [兼容性](https://caniuse.com/#search=flexbox)，可以愉快地使用 `flex` 和 `grid`

## 属性书写顺序

> [CSS-TRICKS](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)

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
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* Color */
  background: #000;
  color: #fff

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

伪元素选择器使用**两个冒号**

```css
selector::pseudo-element {
  property: value;
}
```
