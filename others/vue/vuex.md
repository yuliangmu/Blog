# Vuex

## Getter

### 给 getter 传参

在对 store 里的数组进行查询时，可以让 getter **返回一个函数**，来实现给 getter [传参](<(https://vuex.vuejs.org/zh/guide/getters.html#%E9%80%9A%E8%BF%87%E6%96%B9%E6%B3%95%E8%AE%BF%E9%97%AE)>)

```js
getters: {
  // ...
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id)
  }
}
```

```js
store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }
```

### `mapGetters` 辅助函数

`mapGetters` 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性

`mapGetters` 和 `mapState` 最终目的都是获取 state，但是前者要多经过一层 getter 再获取 state

## Mutation

1. 在 Vuex 中，mutation 都是**同步**事务。(例如，当调用了两个包含异步回调的 mutation 来改变状态，无法确定什么时候回调和哪个先回调)

1. Mutation 需遵守 Vue 的响应规则。因此，最好提前在 store 中初始化好所有所需属性。当需要在对象上添加新属性时，需使用 `Vue.set(obj, 'newProp', 123)` 或者用新对象**替换**老对象 `state.obj = { ...state.obj, newProp: 123 }`

## Action

Action 类似于 mutation，不同在于 Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作

**注意** Action 函数接受一个与 store 实例具有相同方法和属性的 **context** 对象。实践中，我们会经常用到参数解构来简化代码

```js
actions: {
  increment ({ commit }) {
    commit('increment')
  }
}
```

## 严格模式

在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到

```js
const store = new Vuex.Store({
  // 开启严格模式
  strict: true,
})
```

但是**不要在发布环境下启用严格模式！**，严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失

类似于插件，我们可以让构建工具来处理这种情况

```js
const store = new Vuex.Store({
  // 生产环境关闭严格模式
  strict: process.env.NODE_ENV !== 'production',
})
```

## 表单处理

当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 `v-model` 会比较棘手

```js
<input v-model="obj.message">
```

假设这里的 `obj` 是在计算属性中返回的一个属于 Vuex store 的对象，在用户输入时，`v-model` 会试图直接修改 `obj.message`。在严格模式中，由于这个修改不是在 mutation 函数中执行的, 这里会抛出一个错误

用“Vuex 的思维”去解决这个问题的方法是：给 `<input>` 中绑定 `value`，然后侦听 `input` 或者 `change` 事件，在事件回调中调用 action

```html
<input :value="message" @input="updateMessage" />
```

```js
// ...
computed() {
...mapState({
  message: state => state.obj.message
})
},

methods: {
  updateMessage(e) {
    this.$store.dispatch('updateMessage', e.target.value)
  },
},
```

下面是 mutation 函数

```js
// ...
mutations: {
  updateMessage(state, message) {
    state.obj.message = message
  }
}
```

另一个方法是使用带有 setter 的双向绑定计算属性

```html
<input v-model="message" />
```

```js
// ...
computed: {
  message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  }
}
```
