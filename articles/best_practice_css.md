# CSS 最佳实践

兼容：IE9↑

目录：

- [使用 IE 盒模型](#使用-ie-盒模型)
- [清除浮动](#清除浮动)
- [属性书写顺序](#属性书写顺序)
- [选择器命名](#选择器命名)

## 使用 IE 盒模型

> [Inheriting box-sizing Probably Slightly Better Best-Practice][2]

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

> [What methods of ‘clearfix’ can I use?][3]

```css
.container::after {
  content: ''; /* 这改用双引号(Fuck Formatting tool) */
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

伪元素选择器使用**两个冒号**

```css
selector::pseudo-element {
  property: value;
}
```

## 选择器命名

### `box-` & `wrap-`

`box-` 用到**具体元素**上， `wrap-` 用于当前元素的**父元素**上

### `diplay` 简写 `d-`

```css
/* GitHub 使用的类似的 ：） */
.d-f {
  /* 等价于 .d-frn，建议使用完整的 .d-frn(默认值) */
  display: flex;
}
.d-frn {
  display: flex;
  flex-flow: row nowrap;
}
.d-frw {
  display: flex;
  flex-flow: row wrap;
}
.d-fcn {
  display: flex;
  flex-flow: column nowrap;
}
.d-fcw {
  display: flex;
  flex-flow: column wrap;
}
```

### `m-`

公用样式，添加自定义前缀减小污染，例如：

```scss
/* 图片等比例缩放并居中 */
.m-wrap-img {
  /* width: ; height: ; 需要给带 m-wrap-img 类的元素设置宽高 */
  display: flex;
  justify-content: center;
  align-items: center;
  // 注意嵌套
  > img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
```

## Misc

[不要使用标签选择器限制`id`或`class`选择器][1]

解释：在性能和维护性上，都有一定的影响

```css
/* good */
#error,
.danger-message {
  font-color: #c00;
}

/* bad */
dialog#error,
p.danger-message {
  font-color: #c00;
}
```

## References

[1]: https://github.com/fex-team/styleguide/blob/master/css.md#%E5%BC%BA%E5%88%B6-%E5%A6%82%E6%97%A0%E5%BF%85%E8%A6%81%E4%B8%8D%E5%BE%97%E4%B8%BA-idclass-%E9%80%89%E6%8B%A9%E5%99%A8%E6%B7%BB%E5%8A%A0%E7%B1%BB%E5%9E%8B%E9%80%89%E6%8B%A9%E5%99%A8%E8%BF%9B%E8%A1%8C%E9%99%90%E5%AE%9A 'FEX'
[2]: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/ 'CSS-Tricks'
[3]: https://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use/1633170#1633170 'StackOverflow'
