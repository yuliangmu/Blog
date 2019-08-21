# CSS 选择器

兼容性：IE9↑

1. [组合选择器](#组合选择器)
1. [属性选择器](#属性选择器)
1. [伪类选择器](#伪类选择器)
1. [伪元素选择器](#伪元素选择器)

## 组合选择器

### 紧邻兄弟选择器（Adjacent sibling combinator）

Syntax: `A + B`

**`+`** 匹配所有紧邻的兄弟元素。例如：`h2 + p` 匹配**所有挨着** `h2` 的 `p` 元素

### 一般兄弟选择器（General sibling combinator）

Syntax: `A ~ B`

**`~`** 匹配所有的兄弟元素。例如：`h2 + p` 匹配**所有**和 `h2`为兄弟的 `p` 元素

### 子选择器\*\*（Child combinator）

Syntax: `A > B`

**`>`** 匹配所有第一个元素的直接子元素。例如：`ul > li` 匹配**所有** 以 `ul` 为**父元素**的 `li` 元素。（注意继承属性）

### 后代选择器（Descendant combinator）

Syntax: `A B`

## 属性选择器

参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

## 伪类选择器

常用伪类选择器 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes)

### `:not`

否定伪类，匹配与选择器列表不匹配的元素

```css
/* 选择所有不包含类名为 `fancy` 的 `<p>` 元素 */
p:not(.fancy) {
  color: green;
}
```

### **`:first-child`**

匹配父元素的**第一个**子元素（首先要是第一个子元素，然后匹配元素名字）

```css
p:first-child {
  color: lime;
  background-color: black;
}
```

```html
<div>
  <p>这段文字会被选中!</p>
  <p>这段不会</p>
</div>
<div>
  <h2>这段文字不会被选中，因为它不是 p 元素</h2>
  <p>这段文字不会被选中，因为它不是第一个子元素</p>
</div>
```

[demo](https://codepen.io/yuliangmu/pen/wNGORy)

### `:last-child`

同 `first-child` 规则

### `:nth-child()`

注意：子元素下标从 **1** 开始，参数格式为 `An+B`，A 和 B 必须为整数。当要选择奇数项和偶数项时，可以直接使用关键字 `odd` 和 `even`，分别表示 `2n+1`和 `2n+0`

`:nth-child()` 和 `:nth-of-type()` 的区别可以参考这个 [demo](https://codepen.io/yuliangmu/pen/XOdQWW?editors=1100)

### `:first-of-type`

同 `first-child`，多个 type 限制

### `:last-of-type`

同 `last-child` 规则，多个 type 限制

### `:nth-of-type()`

同 `:nth-child()` 规则，多个 type 限制

[demo](https://codepen.io/yuliangmu/pen/XOdvWr)

### `:only-child`

匹配属于父元素的唯一子元素（没有兄弟元素），等同于 `:first-child:last-child` 或 `:nth-child(1):nth-last-child(1)`

[demo](https://codepen.io/yuliangmu/pen/WPwVRL)

> 这种选择器其实还是有必要用，更加语义化，且如果更改 DOM 结构有影响时，可以及时作出更改

### `:only-of-type`

同 `:only-child`，多个 type 条件

[demo](https://codepen.io/yuliangmu/pen/BMKXZO)

## 伪元素选择器

### `::selection`

应用于文档中被用户高亮的部分（例如用户点击或拖动鼠标选择的文本），具体案例可以参考 [CSS-TRICKS](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Firefox, IOS Safari 兼容性注意一下：[caniuse](https://caniuse.com/#search=%3A%3Aselection)。[demo](https://codepen.io/yuliangmu/pen/jdrNbb)

### `::first-letter`

应用于块级元素中第一行的第一个字母，并且文字所处行之前没有其它内容（比如图片和内联的表格）。[demo](https://codepen.io/yuliangmu/pen/GzqKjL?editors=1100)

## 参考资料

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
