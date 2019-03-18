<!--
 * @Desc: 插槽的基本使用
 * @Name: 插槽
 * @Author: Mine
 * @Date: 2019-03-18 10:36:53
 * @LastEditTime: 2019-03-18 15:53:23
 -->

# 插槽

和 HTML 一样，我们经常需要向组件传递内容，这时候就需要使用到[插槽](https://cn.vuejs.org/v2/guide/components-slots.html)

> 注意：Vue 版本需要高于 v2.6.0

## 1. 基本使用

```html
<slot-demo>通过 Slot 插入的内容</slot-demo>
```

```js
Vue.component('slot-demo', {
  template: `
    <div>
      <h2>Slot 基础用法</h2>
      <slot></slot>
    </div>
  `
})
```

demo: [CodePen](https://codepen.io/yuliangmu/pen/ywEJxv?editors=1010)

## 2. 具名插槽

有时我们需要多个插槽。例如对于一个带有如下模板的 `<base-layout>` 组件：

```html
<div class="container">
  <header>
    <!-- 我们希望把页头放这里 -->
  </header>
  <main>
    <!-- 我们希望把主要内容放这里 -->
  </main>
  <footer>
    <!-- 我们希望把页脚放这里 -->
  </footer>
</div>
```

对于这样的情况，`<slot>` 元素有一个特殊的特性：**`name`**。这个特性可以用来定义额外的插槽：

```html
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <!-- 不带 name 的 <slot> 出口会带有隐含的名字“default” -->
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

在向具名插槽提供内容的时候，我们可以在一个 `<template>` 元素上使用 `v-slot` 指令，并以 `v-slot` 的参数的形式提供其名称：

```html
<base-layout>
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>

  <p>A paragraph for the main content.</p>
  <p>And another one.</p>

  <template v-slot:footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

现在 `<template>` 元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有 `v-slot` 的 `<template>` 中的内容都会被视为默认插槽的内容。

然而，如果你希望更明确一些，仍然可以在一个 `<template>` 中包裹默认插槽的内容

## 3. 作用域插槽

插槽内容不能直接访问子组件中的数据，但可以通过在 `<slot>` 元素上绑定需要在父组件中使用的数据，从而让父组件访问子组件的数据

```html
<!-- user 定义在子组件中，不能在父组件直接访问 -->
<current-user>
  {{ user.firstName }}
</current-user>
```

```js
Vue.component('current-user', {
  data: {
    user: {
      firstName: 'Yong',
      lastName: 'Liang'
    }
  },
  // 为了让 user 在父级的插槽内容可用，将 user 作为一个 <slot> 元素的特性绑定上去
  // 绑定在 <slot> 元素上的特性（下面的 user）被称为插槽 prop
  template: `
    <span>
      <slot v-bind:user="user">
        {{ user.lastName }}
      </slot>
    </span>
  `
})
```

现在在父级作用域中，我们可以给 `v-slot` 带一个值来定义我们提供的插槽 prop 的名字，示例中我们选择将包含所有插槽 prop 的对象命名为 `slotProps`，但也可以使用任意你喜欢的名字。

```html
<!-- 通过给 <slot> 绑定插槽 prop，现在可以正常访问子组件中定义的数据 user -->
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>
</current-user>
```

demo: [CodePen](https://codepen.io/yuliangmu/pen/ywEJxv)

### 3.1 独占默认插槽的缩写语法

在上述情况下，当被提供的内容**只有默认插槽**时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 `v-slot` 直接用在组件上：

```html
<current-user v-slot:default="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```

这种写法还可以更简单。就像假定未指明的内容对应默认插槽一样，不带参数但 `v-slot` 被假定对应默认插槽：

```html
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
</current-user>
```

注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确：

```html
<!-- 无效，会导致警告 -->
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
  <template v-slot:other="otherSlotProps">
    slotProps is NOT available here
  </template>
</current-user>
```

只要出现**多个插槽**，请始终为所有的插槽使用完整的基于 `<template>` 的语法：

```html
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>

  <template v-slot:other="otherSlotProps">
    ...
  </template>
</current-user>
```

### 3.2 解构插槽 Prop

作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里：

```js
function (slotProps) {
  // 插槽内容
}
```

这意味着 `v-slot` 的值实际上可以是任何能够作为函数定义中的参数的 JavaScript 表达式。所以在支持的环境下 (单文件组件或现代浏览器)，你也可以使用 ES2015 解构来传入具体的插槽 prop，如下：

```html
<current-user v-slot="{ user }">
  {{ user.firstName }}
</current-user>
```

这样可以使模板更简洁，尤其是在该插槽提供了多个 prop 的时候。它同样开启了 prop 重命名等其它可能，例如将 `user` 重命名为 `person`：

```html
<current-user v-slot="{ user: person }">
  {{ person.firstName }}
</current-user>
```

你甚至可以定义后备内容，用于插槽 prop 是 undefined 的情形：

```html
<current-user v-slot="{ user = { firstName: 'Guest' } }">
  {{ user.firstName }}
</current-user>
```

demo: [CodePen](https://codepen.io/yuliangmu/pen/ywEJxv)

## 其它示例

[Codepen](https://codepen.io/yuliangmu/pen/VRdWbN?editors=1010)
