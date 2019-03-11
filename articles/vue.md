# vue

## 风格指南

先认识几个词：

1. PascalCase 大驼峰
2. camelCase 小驼峰
3. kebab-case 烤肉串？？？

### [组件名为多个单词](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6%E5%90%8D%E4%B8%BA%E5%A4%9A%E4%B8%AA%E5%8D%95%E8%AF%8D-%E5%BF%85%E8%A6%81)

组件名应该始终是多个单词的，根组件 `App` 除外。

这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

### [组件/实例的选项的顺序](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6-%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%80%89%E9%A1%B9%E7%9A%84%E9%A1%BA%E5%BA%8F-%E6%8E%A8%E8%8D%90)

精简版如下：

```js
export default {
  // 1. 副作用 (触发组件外的影响)
  el: '#app',
  // 2. 模板依赖 (模板内使用的资源)
  components: {},
  directives: {},
  filters: {},
  // 3. 接口（组件的接口）
  props: {},
  // 4. 本地状态（本地的响应式属性）
  data: (){},
  computed: {},
  // 5. 事件（通过响应式事件触发的回调）
  watch: {},
  beforeCreate() {},
  ...
  destroyed() {},
  // 6. 非响应式的属性（不依赖响应系统的实例属性）
  methods: {}
```

完整顺序请参考本条目链接

### [元素特性的顺序](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6-%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%80%89%E9%A1%B9%E7%9A%84%E9%A1%BA%E5%BA%8F-%E6%8E%A8%E8%8D%90)

元素 (包括组件) 的特性应该有统一的顺序。

1、定义 (提供组件的选项)

- **`is`**

2、列表渲染 (创建多个变化的相同元素)

- **`v-for`**

3、条件渲染 (元素是否渲染/显示)

- **`v-if`**

- **`v-else-if`**

- **`v-else`**

- **`v-show`**

- **`v-cloak`**

4、渲染方式 (改变元素的渲染方式)

- **`v-pre`**

- **`v-once`**

5、全局感知 (需要超越组件的知识)

- **`id`**

6、唯一的特性 (需要唯一值的特性)

- **`ref`**

- **`key`**

- **`slot`**

7、双向绑定 (把绑定和事件结合起来)

- **`v-model`**

8、其它特性 (所有普通的绑定或未绑定的特性)

9、事件 (组件事件监听器)

- **`v-on`**

10、内容 (覆写元素的内容)

- **`v-html`**
- **`v-text`**

<!-- ### [模板中的组件名大小写](https://cn.vuejs.org/v2/style-guide/#%E6%A8%A1%E6%9D%BF%E4%B8%AD%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90◊)

在单文件组件和字符串模板中组件名应该总是 PascalCase 的 —— 但是在 DOM 模板中总是 kebab-case 的。[模板区别](https://segmentfault.com/q/1010000008148754)

这里的名字有点绕。在单文件组件里使用引入的其它组件，这样使用：

```html
<template>
  <ButtonCounter />
</template>
<script>
  import ButtonCounter from '@/views/components/ButtonCounter.vue'
</script>
```

字符串模板： -->

### [Prop 名大小写](https://cn.vuejs.org/v2/style-guide/#Prop-%E5%90%8D%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

在声明 prop 的时候，其命名应该始终使用 **camelCase**，而在模板和 JSX 中应该始终使用 **kebab-case**。

```js
props: {
  greetingText: String
}
```

```html
<!-- 这里注意一下，自己的代码都没有遵循 -->
<WelcomeMessage greeting-text="hi" />
```

### [简单的计算属性](https://cn.vuejs.org/v2/style-guide/#%E7%AE%80%E5%8D%95%E7%9A%84%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

1. 首先组件模板应该**只包含**简单的表达式（展示这个值**是什么**，而不是如何计算），复杂的表达式则应该重构为计算属性或方法。

2. 然后应该把复杂计算属性分割为**尽可能多**的更简单的属性

```js
// ！！！反例
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}
```

```js
// 好例子
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```

### [`scoped` 中的元素选择器](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6-%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%80%89%E9%A1%B9%E7%9A%84%E9%A1%BA%E5%BA%8F-%E6%8E%A8%E8%8D%90)

元素选择器应该避免在 scoped 中出现。

在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的（参照本条目链接）。

## 开发中用到的包

- Cookies 操作: [vue-cookies](https://github.com/cmp-cc/vue-cookies)

- 复制剪切板操作: [vue-clipboard2](https://github.com/Inndy/vue-clipboard2)
