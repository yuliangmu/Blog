# Vue.js

## 基础

### [事件处理方法](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E6%96%B9%E6%B3%95)

```html
<div id="app">
  <button v-on:click="greet">Greet</button>
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    name: 'Vue.js'
  },
  methods: {
    // 注意在html中不用传 event 参数  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    greet: function(event) {
      // `this` 在方法里指向当前 Vue 实例  <<<<<<<<<<<<<<<<<<<<<<<<<
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
vm.greet() // => 'Hello Vue.js!'
```

**注意：**

在内联语句处理器中访问原始的 DOM 事件。需要用特殊变量 **`$event`** 把它传入方法。（`$event` 在 [`$emit`](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC) 那也有使用）

```html
<button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

```js
// ...
methods: {
  warn: function (message, event) {
    // 现在我们可以访问原生事件对象，注意区别上一个例子
    if (event) event.preventDefault()
    alert(message)
  }
}
```

### **`v-for`**

避免 `v-if` 和 `v-for` 用在一起，直接看文档：[避免 `v-if` 和 `v-for` 用在一起](https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81)

### **`v-if`**

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。

但是如果想切换**多个元素**呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`

在 `<template>` 元素上使用 `v-if` 条件渲染分组，最终的渲染结果将不包含 `<template>` 元素。

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

[参考](https://cn.vuejs.org/v2/guide/conditional.html#%E5%9C%A8-lt-template-gt-%E5%85%83%E7%B4%A0%E4%B8%8A%E4%BD%BF%E7%94%A8-v-if-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%86%E7%BB%84)

### **`:key`**

直接看文档：[用 key 管理可复用的元素](https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0)

### 列表渲染这一章好生看，有很多重点

### [vue 刷新当前页面，重载页面数据](https://blog.csdn.net/yufengaotian/article/details/81238792)

这个可以看一下，官方不推荐直接用于程序代码中。[链接](https://cn.vuejs.org/v2/api/#provide-inject)

---

华丽的分割线

重新整理上面的知识点，目录按照 vue 文档来

## 深入了解组件

### 组件注册

组件名大小写

定义组件名的方式有两种，个人要求使用第一种（统一嘛，对吧。而且官方示例都是用的 kecab-case）。在 DOM 中使用时，第 2 种大驼峰的形式也必须转换为 kecab-case 使用：`<my-component-name></my-component-name>`

```js
// 1. 使用 kecab-case
Vue.component('my-component-name', {})
// 2. 使用 PascalCase
Vue.component('myComponentName', {})
```

备注：目前开发中还没有这样定义过组件，都是使用的单文件组件（命名使用的大驼峰）。但是要用时注意规范

### 自定义事件

**自定义组件的`v-model`** (可以结合下面的 demo 写一篇文章，因为这里有很多概念都不好理解，加深印象)

这个有点不好理解，结合这个 [demo](https://jsfiddle.net/mauromadeit/dzuvu4jd/?utm_source=website&utm_medium=embed&utm_campaign=dzuvu4jd) 就能理解了

**`.sync`修饰符**

- 参考文章: [Vue’s new and improved prop.sync](https://medium.com/front-end-weekly/vues-v-model-directive-vs-sync-modifier-d1f83957c57c)

- [掘金](https://juejin.im/post/5adc99f56fb9a07abd0d3ee7)

### 插槽

插槽这一章 vue2.6.0 后有很大的更新，deal 中使用的 2.5.17，所以要注意一下。以后升级版本了回来再仔细看一下

### 处理边界情况

这一章理解起来有点困难呀。。
