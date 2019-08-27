# 阅读 Vue Router 文档笔记

标题是按照文档的顺序排序的，记录每一个章节里的重难点

## 起步

```js
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
```

第 4 步将 `router` 挂载到跟实例上，就可以在所有的组件里通过 `this.$router` 访问路由。`this.$router` 和 `router` 使用起来完全一样，使用 `this.$router` 的原因是我们并不想在每个独立需要封装路由的组件中都导入路由

> 当需要在其它地方使用路由时，比如 `vuex`，需要先导入 `import { router } from '@/router/index'` 后再使用

此外，`this.$router` 访问的是路由实例，常用于路由到不同地址。`this.$route` 访问的是当前路由，常用于地址栏传参

## 动态路由匹配

> 我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 `User` 组件，对于所有 `ID` 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果

```js
const User = {
  template: '<div>User</div>'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User },
    // 可以设置多段“路径参数”，对应的值都会设置到 $route.params 中
    { path: '/user/:username/post/:post_id', component: User }
  ]
})
```

| 模式                            | 匹配路径              | \$route.params                         |
| ------------------------------- | --------------------- | -------------------------------------- |
| `/user/:username`               | `/user/evan`          | `{ username: 'evan' }`                 |
| `/user/:username/post/:post_id` | `/user/evan/post/123` | `{ username: 'evan', post_id: '123' }` |

项目 deal 中商品详情页采用了动态路径参数，在获取商品 ID 时，就使用 `this.$route.params.id` 获取

除了 `$route.params` 外，`$route` 对象还提供了其它有用的信息，参见 [API 文档](https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1)

### 捕获所有路由或 404 Not found 路由

这里直接看[文档](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1)

### 注意事项

当使用路由参数时，例如从 `/user/foo` 导航到 `/user/bar`，原来的组件实例会**被复用**，导致。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用

若需要对参数的变化作出响应，可以简单地 watch (监测变化) `$route` 对象（参见 deal），或者使用 2.2 中引入的 `beforeRouteUpdate` [导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

## 嵌套路由

这节注意下这句话

> 要注意，以 `/` 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径

此外，还有空的子路由作用要知道，[demo](https://jsfiddle.net/yyx990803/L7hscd8h/)

## 编程式的导航

### `router.push(location, onComplete?, onAbort?)`

> 想要导航到不同的 URL，则使用 `router.push` 方法。这个方法会向 history 栈添加一个**新的记录**，所以，当用户点击浏览器后退按钮时，则回到之前的 URL

点击 `<router-link>` 时，这个方法会在内部调用，所以点击 `<router-link :to="...">` 等同于调用 `router.push(...)`

| 声明式                     | 编程式             |
| -------------------------- | ------------------ |
| `<router-link :to="{...}"` | `router.push(...)` |

### `router.replace(location, onComplete?, onAbort?)`

> 跟 `router.push` 很像，唯一的不同就是，它**不会**向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录

### `router.go(n)`

> 这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 `window.history.go(n)`

## 命名路由

建议首选**命名**路由，看个例子

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user', // 命名路由
      component: User,
      children: [
        path: 'profile',
        name: 'profile',
        component: Profile,
      ]
    }
  ]
})
```

如果当前是用户 ID 为 `123` 即 `'/user/123'`，要查看他的资料，使用命名路由

```js
this.$router.push({ name: 'profile' })
```

如果使用路径，则需要这样写

```js
this.$router.push({ path: `/user/${this.$route.params.userId}/profile }` })
```

显然使用命名路由更加简洁且不容易出错

## 命名视图

项目 deal 的顶部导航栏、页脚和回到顶部组件都可以考虑更改为命名视图

deal 中的做法是使用了**嵌套**展示，这样会导致所有的页面都有页头页脚和回到顶部，如果不需要怎么办？（可以判断路由隐藏，但是很 low 好不好）

```html
<div class="index">
  <!-- 页头 -->
  <deal-header />
  <!-- 主体内容 -->
  <div class="main">
    <router-view />
  </div>
  <!-- 页脚 -->
  <deal-footer />
  <!-- 回到顶部 -->
  <back-to-top />
</div>
```

mkt 中的做法是需要的地方都 `import` 一遍，灵活性相比 deal 更好，但还是不够优雅，会到处写满 `import`

```html
<template>
  <div id="app">
    <top-nav />
    <router-view />
  </div>
</template>
<script>
  import TopNav from '...'
  export default {
    components: {
      TopNav
    }
  }
</script>
```

如果采用命名视图，只需在路由里面配置就好了

```html
<template>
  <div>
    <router-view name="header"></router-view>
    <router-view />
  </div>
</template>

<script>
  const router = new VueRouter({
    routes: [
      {
        path: '/home',
        name: 'Home',
        components: {
          default: Home,
          header: Header // Header 需要 import
        }
      }
    ]
  })
</script>
```

这里有个 [demo](https://medium.com/vue-by-example/vue-router-named-routes-and-reusable-components-1772eb8ff8ac)

## 重定向和别名

## 路由组件传参

在组件中使用 `$route` 会使之与其对应路由形成高度**耦合**，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}
const router = new VueRouter({
  routes: [{ path: '/user/:id', component: User }]
})
```

可以通过 `props` 解耦，这样便可以在任何地方使用该组件，使得该组件更易于重用和测试

```js
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，必须分别为每个命名视图添加 `props` 选项
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})
```

！！特别注意

通过 `this.$router.push({ name: '...', params: { id: 333 } })` 导航到一个路由后，访问 `$route.params` 是 `{ id: 333 }`, 但是当你在新页面刷新时会变成 `{ id: "333" }`

## HTML5 History 模式

## 导航守卫

## 路由元信息

## 过度动效

## 数据获取

## 滚动行为

## 路由懒加载
