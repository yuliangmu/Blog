# Flex 布局

用于快速查询

## flex 容器

```css
.container {
  display: flex; /* or inline-flex */
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: wrap | nowrap | wrap-reverse;
  flex-flow: row nowrap; /* 上两个属性简写，推荐使用 */
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  align-items: flex-start | flex-end | center | baseline | stretch;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

> [Demo](https://codepen.io/yuliangmu/pen/aRYJPx/)

注意事项：

- 注意兼容 [caniuse][flexbox]

[flexbox]: (https://caniuse.com/#search=flexbox)

## flex 子项

> `float`, `clear` 和 `vertical-align` 属性对 flex 子项无效！

```css
.item {
  order: <integer>; /* default is 0 */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
  flex-grow: <number>; /* default 0 */
  flex-shrink: <number>; /* default 1 */
  flex-basis: <length> | auto; /* default auto */
  flex: none | [ < 'flex-grow' > < 'flex-shrink' >? || < 'flex-basis' > ];
}
```

注意事项：

**`order`**

默认为 `0`，子项会按照源文件中出现的顺序排序。设置数值大小改变先后顺序，可以设置 `-1`。

**`flex-basis`**

如果设置为 `0`，content 两边的空白空间不被纳入计算，如果设置为 `auto`，the extra space is distributed based on its flex-grow value。参考 [W3C](https://www.w3.org/TR/css-flexbox-1/images/rel-vs-abs-flex.svg) 图示

**`flex`**

[简写](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) 属性。默认值：`flex: initial;` => `flex: 0 1 auto;`，建议使用 **`flex: auto;` => `flex: 1 1 auto;`**，**`flex: none;` => `flex: 0 0 auto;`**，**`flex: 1;` => `flex: 1 1 0;`**。[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex#Syntax)

## 参考

- CSS-TRICKS: [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

- 张鑫旭：[Flexbox](https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/)

- MDN: [Flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox)

- W3C: [Demo](https://www.w3.org/TR/css-flexbox/#overview)
