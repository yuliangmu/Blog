# 执行上下文及作用域

## 1. 基本概念

### 执行上下文（Execution Context）

当 JavaScript 代码**执行**一段可执行代码时（全局代码、函数代码和 eval 代码），会创建对应的执行上下文。执行上下文定义了变量或函数有权访问的其它数据，决定了它们各自的行为

执行上下文栈（Execution Context Stack）：当程序中创建了很多执行上下文时该怎么管理？所以 JavaScript 引擎创建了执行上下文栈用于管理执行上下文

变量对象（Variable Object）：每个执行上下文都有一个与之关联的变量对象，执行上下文中定义的所有变量和函数声明都保存在这个对象中

活动对象（Activation Object）：函数上下文中的代码执行时，其变量对象被激活，我们用活动对象来表示变量对象

### 作用域（Scope）

变量作用域：一个变量的作用域是程序源代码中定义这个变量的区域。全局变量拥有全局作用域，在 JavaScript 代码中的任何地方都有定义

函数作用域（Function Scope）：JavaScript 没有[块级作用域](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)，取而代之地使用了函数作用域，变量在声明它们的函数体以及这个函数体嵌套的任意函数体内都是有定义的

词法作用域（Lexical Scoping）：JavaScript 采用的是词法作用域，也叫静态作用域。因此，函数的执行依赖于变量作用域，这个作用域是在函数**定义时决定的**，而**不是函数调用时决定的**

作用域链（Scope Chain）：在定义一个函数时会保存一个包含所有父变量对象的作用域链，这个属性被保存在函数内部的`[[scope]]`属性中。在**调用**这个函数时，会为函数创建一个执行上下文，然后通过复制函数的`[[scope]]`属性中的对象构建起执行上下文的作用域链。其用途是保证对执行上下文有权访问的所有变量和函数的有序访问

## 2. 函数的作用域在定义时决定

```js
var value = 1

function foo() {
  console.log(value)
}

function bar() {
  var value = 2
  foo()
}

bar() // 结果是？
```

调用`bar`函数会先从`foo`函数内部查找是否有局部变量`value`，如果没有，就根据书写的位置，查找上面一层的代码，也就是`value`等于 1，所以结果会打印 1

若 JavaScript 采用动态作用域（函数的作用域在函数调用时决定），调用`bar`函数，依然是从`foo`函数内部查找是否有局部变量`value`。如果没有，就从调用函数的作用域，也就是`bar`函数内部查找`value`变量，所以结果会打印 2

继续看例子：

```js
var a = 10

var o = {
  a: 11,
  b: {
    fn: function() {
      console.log(a)
    }
  }
}

o.b.fn() // 结果是？
```

函数`fn`的作用域链为`[AO, Global.VO]`，而`Global.VO`中包括了变量`a`和变量`o`，所以执行结果为 10

《JavaScript 权威指南》上的例子（P183）

```js
var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f()
}
checkscope() // 结果是？
```

```js
var scope = 'global scope'
function checkscope() {
  var scope = 'local scope'
  function f() {
    return scope
  }
  return f
}
checkscope()() // 结果是？
```

两段代码的执行结果都是`local scope`，因为 JavaScript 采用的是词法作用域，函数的作用域是在函数定义的时候创建的

执行`f()`时，它们作用域链都为`[f.AO, checkscope.AO, Global.VO]`，所以结果一样。但它俩有什么区别呢？

## 3. 执行上下文栈

上一节最后的例子执行结果都为`local scope`，是因为 JS 采用了词法作用域。而它们的不同体现在执行上下文栈的变化不一样。

为了模拟执行上下文栈的行为，定义其为一个数组：

```js
ECStack = []
```

当 JavaScript 开始要解释执行代码的时候，最先遇到的是全局代码，所以初始化的时候首先就会向`ECStack`压入一个全局执行上下文，用`globalContext`表示。并且只有当整个应用程序结束的时候，`ECStack`才会被清空，所以程序结束之前，ECStack 最底部永远有个 `globalContext`。

现在 JavaScript 遇到下面这段代码

```js
function fun3() {
  console.log('fun3')
}

function fun2() {
  fun3()
}

function fun1() {
  fun2()
}

fun1()
```

当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出

下面是伪代码模拟过程

```js
// fun1()
ECStack.push(<fun1> functionContext)

// fun1 中调用了 fun2，还要创建 fun2 的执行上下文
ECStack.push(<fun2> functionContext)

// fun2 还调用了 fun3
ECStack.push(<fun3> functionContext)

// fun3 执行完毕
ECStack.pop()

// fun2 执行完毕
ECStack.pop()

// fun1 执行完毕
ECStack.pop()

// fun1() 执行完毕后，栈将其执行上下文弹出，把控制权返回给之前的执行上下文
// JavaScript 接着执行后面的代码，但是 ECStack 最底层永远有个 globalContext
```

现在回到上一节的问题，模拟一下它们的执行上下文栈变化

第一段模拟：

```js
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext);
ECStack.pop();
ECStack.pop();
```

第二段模拟：

```js
ECStack.push(<checkscope> functionContext);
ECStack.pop();
ECStack.push(<f> functionContext);
ECStack.pop();
```

## 4. 执行过程

执行上下文的代码分成两个阶段进行处理：分析和执行

1.进入执行上下文（创建阶段）

在这个阶段中，执行上下文会分别创建变量对象，建立作用域链，以及确定`this`的指向

2.代码执行

在创建完成之后，就会开始执行代码，这个时候，会完成变量赋值，函数引用，以及执行其它代码

### 4.1 进入执行上下文

当进入执行上下文时，这时候还没有执行代码

变量对象会包括

1. 函数的所有形参（如果是函数上下文）
   - 由名称和对应值组成的一个变量对象的属性被创建
   - 没有实参，属性值设为`undefined`
2. 函数声明
   - 由名称和对应值（函数对象）组成一个变量对象的属性被创建
   - 如果变量对象已存在相同名称的属性，则**完全替换**这个属性
3. 变量声明
   - 由名称和对应值（`undefined`）组成一个变量对象的属性被创建
   - 如果变量名称跟已经声明的形式参数或函数相同，则变量声明**不会干扰**已经存在的这类属性

举个例子：

```js
function foo(a) {
  var b = 2
  function c() {}
  var d = function() {}
  b = 3
}

foo(1)
```

当进入执行上下文后，这时候的`AO`是：

```js
AO = {
  arguments: {
    0: 1,
    length: 1
  },
  a: 1,
  b: undefined,
  c: reference to function c() {},
  d: undefined
}
```

### 4.2 代码执行

在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

```js
AO = {
  arguments: {
    0: 1,
    length: 1
  },
  a: 1,
  b: 3,
  c: reference to function c() {},
  d: reference to FunctionExpression "d"
}
```

小结：

- 全局上下文的变量对象初始化是全局对象

- 函数上下文的变量对象初始化只包括 Arguments 对象

- 在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

- 在代码执行阶段，会再次修改变量对象的属性值

## 5. 作用域链

以一个函数的创建和激活两个时期来说明作用域链是如何创建和变化的

### 5.1 函数创建

函数的作用域在**函数定义**的时候就决定了。

函数内部有一个`[[scope]]`属性，当函数创建的时候，就会保存所有父变量对象到其中，可把`[[scope]]`看作所有父变量对象的层级链，但是`[[scope]]`并不代表**完整**的作用域链

举个例子

```js
function foo() {
  function bar() {
    ...
  }
}
```

函数创建时，各自的`[[scope]]`为：

```js
foo.[[scope]] = [
  globalContext.VO
]

bar.[[scope]] = [
  fooContext.AO,
  globalContext.VO
]
```

### 5.2 函数激活

当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用域链的前端

这时候执行上下文的作用域链，我们命名为`Scope`

```js
Scope = [AO].concat([[Scope]])
```

至此，作用域链创建完毕

下面以一个例子说明函数执行上下文中作用域链和变量对象的创建过程

```js
var scope = 'global scope'
function checkscope() {
  var scope2 = 'local scope'
  return scope2
}
checkscope()
```

执行过程

1、`checkscope`函数被创建，保存作用域链到函数内部属性`[[scope]]`

```js
checkscope.[[scope]] = [
  globalContext.VO
]
```

2、进入`checkscope`函数，创建`checkscope`函数执行上下文，`checkscope`函数执行上下文被压入执行上下文栈

```js
ECStack = [checkscopeContext, globalContext]
```

3、`checkscope`函数并不立刻执行，开始做准备工作，第一步复制函数`[[scope]]`属性创建作用域链

```js
checkscopeContext = {
  Scope: checkscope.[[scope]]
}
```

4、第二步：用`arguments`创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明

```js
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  Scope: checkscope.[[scope]]
}
```

5、第三步：将活动对象压入`checkscope`作用域链顶端

```js
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  Scope: [AO, [[Scope]]]
}
```

6、准备工作完成，开始执行函数，随着函数的执行，修改`AO`的属性值

```js
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: 'local scope'
  },
  Scope: [AO, [[Scope]]]
}
```

7、查找到`scope2`的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出

```js
ECStack = [globalContex]
```

## 例子

```js
var foo = { n: 1 }

;(function(foo) {
  console.log(foo.n) // 1
  foo.n = 3 // 修改的全局中的 foo
  // 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性
  var foo = { n: 2 }
  console.log(foo.n) // 2 (覆盖)
})(foo)

console.log(foo.n) // 3
// 最终顺序打印 1 2 3
```

```js
var foo = { n: 1 }

;(function(foo) {
  console.log(foo.n) // 1
  var foo = { n: 2 }
  foo.n = 3
  console.log(foo.n) // 3
})(foo)

console.log(foo.n) // 1
// 最终顺序打印 1 3 1
```

## References

[深入系列](https://github.com/mqyqingfeng/Blog#%E6%B7%B1%E5%85%A5%E7%B3%BB%E5%88%97%E7%9B%AE%E5%BD%95)
