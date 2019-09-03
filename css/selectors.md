# CSS 选择器

兼容 IE9↑

- [组合选择器](#组合选择器)
- [伪类选择器](#伪类选择器)
- [伪元素选择器](#伪元素选择器)
- [属性选择器](#属性选择器)

## 组合选择器

### 紧邻兄弟选择器

The **adjacent sibling combinator** (**`+`**) separates two selectors and matches the second element only if it **immediately follows** the first element, and both are children of the same parent element. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator)

Syntax: **`A + B`**

**`+`** 匹配所有紧邻的兄弟（具体点，最大的弟弟）元素，例如 `h2 + p` 匹配 `h2` 最大的那个弟弟 `p`

### 一般兄弟选择器

The **general sibling combinator** (**`~`**) separates two selectors and matches the second element only if it **follows** the first element (though not necessarily immediately), and both are children of the same parent element. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator)

Syntax: **`A ~ B`**

**`~`** 匹配所有的兄弟（具体点，弟弟）元素，例如 `h2 + p` 匹配 `h2` 所有的弟弟 `p`

### 子选择器

The **child combinator** (**`>`**) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the children of elements matched by the first.

Syntax: **`A > B`**

**`>`** 匹配所有第一个元素的直接子元素，例如 `ul > li` 匹配以 `ul` 为**父元素**的 `li` 元素

### 后代选择器

<!-- markdownlint-disable MD038 -->
The **descendant combinator** — typically represented by a single space (**` `**) character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor element matching the first selector. Selectors that utilize a descendant combinator are called descendant selectors. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator)

Syntax: **`A B`**

## 伪类选择器

A CSS **pseudo-class** is a keyword added to a selector that specifies a special state of the selected element(s). -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#Index_of_standard_pseudo-classes)

下面列举一些常用伪类选择器

### `:not`

The **`:not()`** CSS pseudo-class represents elements that do not match a list of selectors. Since it prevents specific items from being selected, it is known as the negation pseudo-class.

```css
/* 选择所有不包含类名为 `fancy` 的 `<p>` 元素 */
p:not(.fancy) {
  color: green;
}
```

### `:first-child`

The **`:first-child`** CSS pseudo-class represents the first element among a group of sibling elements. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)

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

### `:last-child`

The **`:last-child`** CSS pseudo-class represents the last element among a group of sibling elements. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)

### `:nth-child()`

The **`:nth-child()`** CSS pseudo-class matches elements based on their position in a group of siblings. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)

**注意**：子元素下标从 **1** 开始，参数格式为 `An+B`，A 和 B 必须为整数。当要选择奇数项和偶数项时，可以直接使用关键字 `odd` 和 `even`，分别表示 `2n+1`和 `2n+0`

### `:only-child`

The **`:only-child`** CSS pseudo-class represents an element without any siblings. This is the same as `:first-child:last-child` or `:nth-child(1):nth-last-child(1)`, but with a lower specificity.

### `:first-of-type`

The **`:first-of-type`** CSS pseudo-class represents the first element of its type among a group of sibling elements. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type)

### `:last-of-type`

The **`:last-of-type`** CSS pseudo-class represents the last element of its type among a group of sibling elements. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type)

### `:nth-of-type()`

The **`:nth-of-type()`** CSS pseudo-class matches elements of a given type, based on their position among a group of siblings. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)

### `:only-of-type`

The **`:only-of-type`** CSS pseudo-class represents an element that has no siblings of the same type. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type)

同 `:only-child`，多个 type 条件

## 伪元素选择器

### `::selection`

The **`::selection`** CSS pseudo-element applies styles to the part of a document that has been highlighted by the user (such as clicking and dragging the mouse across text). -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)

Firefox, IOS Safari 兼容性 [caniuse](https://caniuse.com/#search=%3A%3Aselection)

### `::first-letter`

The **`::first-letter`** CSS pseudo-element applies styles to the first letter of the first line of a block-level element, but only when not preceded by other content (such as images or inline tables). -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter)

## 属性选择器

The CSS **attribute selector** matches elements based on the presence or value of a given attribute. -- [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

## 参考

[CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
