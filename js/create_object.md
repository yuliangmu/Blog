# 创建对象

## 1. 工厂模式

[工厂模式](https://en.wikipedia.org/wiki/Factory_method_pattern)抽象了创建具体对象的过程，考虑到在 ECMAScript 中无法创建类，开发人员就发明了一种函数，用函数来封装以特定接口创建对象的细节。

```js
function createPerson(name, age) {
  var o = new Object() // 原料
  o.name = name // 加工
  o.age = age
  o.sayName = function() {
    console.log(this.name)
  }
  return o // 出厂
}

var person = createPerson('AMM', 23)
```

优点：解决了创建多个相似对象的问题

缺点：无法识别对象的类型（不能使用 instanceof）

## 2. 构造函数模式

```js
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = function() {
    console.log(this.name)
  }
}

var person1 = new Person('AMM', 23)
var person2 = new Person('BMM', 24)
```

优点：解决了对象的识别问题（`person instanceof Person`）

缺点：每实例化一个对象，方法都会重新创建（这里的`sayName`）

把方法定义转移到构造函数外部，可以解决方法不能复用的问题

```js
function Person(name, age) {
  this.name = name
  this.age = age
  this.sayName = sayName
}

function sayName() {
  console.log(this.name)
}

var person1 = new Person('AMM', 23)
var person2 = new Person('BMM', 24)
```

缺点

- 全局作用域中定义的函数（`sayName`）只能被某个对象（通过`new Person`实例化的对象）调用

- 若对象需要定义很多方法，就没封装性可言了

## 3. 原型模式

```js
function Person() {}

Person.prototype.name = 'AMM'
Person.prototype.age = 23
Person.prototype.sayName = function() {
  console.log(this.name)
}

var person = new Person()
person.sayName() // 'AMM'
```

优点：所有对象实例可以**共享**原型对象的属性和方法

缺点

- 省略了为构造函数传递初始化参数

- 最大的问题是共享（引用类型值）的本性所导致的

### 3.1 更简单的原型语法

使用对象字面量来**重写**整个原型对象，避免每添加一个属性和方法，就要敲一遍 `Person.prototype`

```js
function Person() {}

// 使用字面量重写原型对象会改变其`constructor`属性
Person.prototype = {
  constructor: Person, // 修正指向
  name: 'AMM',
  age: 23,
  sayName: function() {
    console.log(this.name)
  }
}

var person = new Person()
```

## 4. 组合模式

组合使用构造函数模式与原型模式。前者用于定义实例属性，后者用于定义方法和共享的属性

```js
function Person(name, age) {
  this.name = name
  this.age = age
  this.friends = ['CMM', 'DMM']
}

Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.log(this.name)
  }
}

var person1 = new Person('AMM', 23)
var person2 = new Person('BMM', 24)

person1.friends.push('EMM')
console.log(person1.friends) // ["CMM", "DMM", "EMM"]
console.log(person2.friends) // ["CMM", "DMM"]
console.log(person1.sayName === person2.sayName) // true
```

优点：该共享的共享，该私有的私有。认同度高、使用广泛

缺点：封装性差（构造函数和原型分开）

### 4.1 动态原型模式

动态原型模式把所有信息都封装在构造函数中

```js
function Person(name, age) {
  this.name = name
  this.age = age

  // 只在初次调用构造函数时执行
  if (typeof this.sayName !== 'function') {
    Person.prototype.sayName = function() {
      console.log(this.name)
    }
  }
}

var person = new Person('AMM', 23)
person.sayName() // AMM
```

:exclamation: 使用动态原型模式时，不能使用对象字面量重写原型。如果在**已经创建了实例**的情况下重写原型，那么就会切断**已有实例**与**新原型**之间的联系

```js
function Person(name, age) {
  this.name = name
  this.age = age
  // 只执行一次
  if (typeof this.sayName !== 'function') {
    // 原本的 Person.prototype 被对象字面量覆盖了
    Person.prototype = {
      constructor: Person,
      sayName: function() {
        console.log(this.name)
      }
    }
  }
}

var person1 = new Person('AMM', 23)
var person2 = new Person('BMM', 24)

person1.sayName() // 报错(Uncaught TypeError: p1.sayName is not a function)
person2.sayName() // BMM
```

调用`person1.sayName()`报错，因为`person1.__proto__`指向最初的`Person.prototype`，它并没有 `sayName` 方法

第一次实例化对象，`Person.prototype`会被重写，因此后面再新实例的对象（`person2`）已经和最初的`Person.prototype`没了联系，取而代之的是和重写后的`Person.prototype`建立起了联系，所以`person2.sayName()`可以正常执行

如果一定要使用字面量，可以在重写原型后，返回指定的对象

```js
function Person(name, age) {
  this.name = name
  this.age = age
  if (typeof this.sayName !== 'function') {
    Person.prototype = {
      constructor: Person,
      sayName: function() {
        console.log(this.name)
      }
    }
    // 第一次调用，显示指定返回值（参照 new 操作符）
    return new Person(name, age)
  }
}

var person1 = new Person('AMM', 23)
var person2 = new Person('BMM', 24)

person1.sayName() // AMM
person2.sayName() // BMM
```

## 5. 寄生构造函数模式

创建一个函数，作用仅仅是封装创建对象的代码，然后再返回新创建的对象

```js
function Person(name, age) {
  var o = new Object()
  o.name = name
  o.age = age
  o.sayName = function() {
    console.log(this.name)
  }
  return o
}

var person = new Person('AMM', 23)
console.log(person instanceof Person) // false
console.log(person instanceof Object) // true
person.sayName() // AMM
```

寄生构造函数模式使用`new`操作符调用。构造函数在不返回值的情况下，默认会返回新对象实例。而通过显示的返回一个对象，可以重写调用构造函数的返回值

不建议使用寄生构造函数模式，因为创建的对象与构造函数的原型属性之间没有联系（无法通过`instanceof`操作符确定对象类型）

### 5.1 应用

假设要创建一个有额外方法的特殊数组，在不直接修改 Array 构造函数的情况下，可以使用这个模式。

```js
function SpecialArray() {
  var values = new Array()
  values.push.apply(values, arguments)

  // 添加额外方法
  values.toPipedString = function() {
    return this.join('|')
  }

  return values
}

var colors = new SpecialArray('Red', 'Green', 'Blue')
console.log(colors.toPipedString()) // Red|Green|Blue
```

补充：`SpecialArray` 也可以当作普通函数使用，效果相同。但可能并不是作者的本意

```js
var colors2 = SpecialArray('Red', 'Green', 'Blue')
console.log(colors2.toPipedString()) // Red|Green|Blue
```

## 6. 稳妥构造函数模式

所谓稳妥对象，指的是没有公共属性，而且其方法也不引用`this`对象。适合在一些安全环境中（这些环境中会禁止使用`this`和`new`）使用

```js
function Person(name, age) {
  var o = new Object()

  // 可以在这里定义私有变量和函数

  o.sayName = function() {
    console.log(name)
  }
  return o
}

var person = Person('AMM', 23)
person.sayName() // AMM
```

变量`person`中保存的是一个稳妥对象，除了调用`sayName`方法外，没有别的方式可以访问其数据成员

与寄生构造函数模式有两点不同：1.创建新对象不引用`this` 2.不使用`new`操作符调用构造函数

与寄生构造函数模式类似，使用稳妥构造函数模式创建的对象与构造函数之间也没有什么关系，因此`instanceof`操作符对这种对象也没有意义
