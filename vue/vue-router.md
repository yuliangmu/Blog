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

| 声明式                     | 编程式             |
| -------------------------- | ------------------ |
| `<router-link :to="{...}"` | `router.push(...)` |

## 命名路由

## 命名视图

## 重定向和别名

## 路由组件传参

## HTML5 History 模式
