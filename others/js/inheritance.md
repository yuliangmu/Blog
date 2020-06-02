# JavaScript 继承

许多 OO 语言都支持两种继承方式：接口继承和实现继承。接口继承只继承方法签名，而实现继承则继承实际的方法

ECMAScript 中，函数没有签名，故无法实现接口继承，只支持实现继承，而且其实现继承主要是依靠原型链来实现的

## 1. 原型链继承

```js
function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function() {
  return this.property
}

function SubType() {
  this.subproperty = false
}

SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function() {
  return this.subproperty
}

var instance = new SubType()
console.log(instance.getSuperValue()) // true
// instance 并没有 constructor 属性，实则是访问的 instance.__proto__.constructor
console.log(instance.constructor === SuperType) // true
```

原型链的问题来自包含引用类型值的原型

此外，创建子类型的实例时，不能向超类型的构造函数中传递参数

```js
function SuperType() {
  this.colors = ['red', 'blue', 'green']
}

function SubType() {}

SubType.prototype = new SuperType()

var instance1 = new SubType()
instance1.colors.push('black')
console.log(instance1.colors) // ["red", "blue", "green", "black"]

var instance2 = new SubType()
console.log(instance2.colors) // ["red", "blue", "green", "black"]
```

## 2. 借用构造函数

借用构造函数（constructor stealing）也叫做伪造对象或经典继承，思想是在子类型构造函数的内部调用超类型构造函数

```js
function SuperType() {
  this.colors = ['red', 'blue', 'green']
}

function SubType() {
  // 调用
  SuperType.call(this)
}

var instance1 = new SubType()
instance1.colors.push('black')
console.log(instance1.colors) // ["red", "blue", "green", "black"]

var instance2 = new SubType()
console.log(instance2.colors) // ["red", "blue", "green"]
```

优点

- 避免了引用类型的属性被所有实例共享

- 可以在子类型构造函数中向超类型构造函数传递参数

```js
function SuperType(name) {
  this.name = name
  this.sayName = function() {
    conosole.log(this.name)
  }
}

function SubType() {
  SuperType.call(this, 'AMM')
  this.age = 23
}

var instance = new SubType()
console.log(instance.name) // AMM
console.log(instance.age) // 23
```

存在问题

- 方法都在构造函数中定义，因此函数复用就无从谈起

- 在超类型的**原型中**定义的方法，对子类型而言是不可见的，结果所有类型都只能使用构造函数模式

## 3. 组合继承

组合继承（combination inheritance），也叫伪经典继承。思想是使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承

```js
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function() {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType // 修正指向
SubType.prototype.sayAge = function() {
  console.log(this.age)
}

var instance1 = new SubType('AMM', 23)
instance1.colors.push('black')
console.log(instance1.colors) // ["red", "blue", "green", "black"]
instance1.sayName() // AMM
instance1.sayAge() // 23

var instance2 = new SubType('BMM', 24)
console.log(instance2.colors) // ["red", "blue", "green"]
instance2.sayName() // BMM
instance2.sayAge() // 24
```

优点

- 组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，是 JavaScript 中最常用的继承模式

- 可以使用 `instanceof` 和 `isPrototypeOf` 识别对象

## 4. 原型式继承

借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型

```js
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}
```

原型式继承要求必须有一个对象可以作为另一个对象的基础，如下例中的`person`对象

```js
var person = {
  name: 'AMM',
  friends: ['BMM', 'CMM', 'DMM']
}

var person1 = object(person)
person1.name = 'EMM' // 覆盖
person1.friends.push('FMM')

var person2 = object(person)
person2.name = 'GMM' // 覆盖
person2.friends.push('HMM')

console.log(person.friends) // ["BMM", "CMM", "DMM", "FMM", "HMM"]
```

从本质上讲，`object` 函数对传入其中的对象执行了一次浅复制。ES5 中通过新增 [Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) 方法规范了原型式继承。

缺点

包含引用类型的属性值始终都会共享相应的值，这点跟原型链继承一样

## 5. 寄生式继承

创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后返回对象

```js
function createAnother(original) {
  var clone = object(original) // 上一节定义的函数
  clone.sayHi = function() {
    // 增强对象
    console.log('hi')
  }
  return clone
}

// 使用举例
var person = {
  name: 'AMM',
  friends: ['BMM', 'CMM', 'DMM']
}

var person1 = createAnother(person)
person1.sayHi() // hi
```

上例基于`person`对象返回了一个新对象`person1`，其不仅具有`person`的所有属性和方法，而且还有自己的`sayHi`方法

缺点

使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率，这一点与构造函数模式类似

## 6. 寄生组合式继承

组合继承是 JavaScript 中最常用的继承模式，但是它也有自己的不足。最大的问题是无论什么情况下，都会调用两次超类型构造函数

```js
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function() {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name) // 第二次调用 SuperType()，参考 new 的模拟实现
  this.age = age
}

SubType.prototype = new SuperType() // 第一次调用 SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function() {
  console.log(this.age)
}

var instance1 = new SubType('AMM', 23)
instance1.colors.push('black')
console.log(instance1.colors) // ["red", "blue", "green", "black"]
instance1.sayName() // AMM
instance1.sayAge() // 23

var instance2 = new SubType('BMM', 24)
console.log(instance2.colors) // ["red", "blue", "green"]
instance2.sayName() // BMM
instance2.sayAge() // 24
```

两次调用`SuperType`，会产生两组`name`和`colors`属性：一组在实例上，一组在`SubType.prototype`中

寄生组合式继承：通过借用构造函数来继承属性，通过原型链的混成形式来继承方法

思路是不必为了制定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已

```js
function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype) // 创建对象
  prototype.constructor = subType // 增强对象
  subType.prototype = prototype // 指定对象
}
```

调用 `inheritPrototype` 函数的语句，去替换上面为子类型原型赋值的语句

```js
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function() {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name) // 第二次调用 SuperType()，参考 new 的模拟实现
  this.age = age
}

// SubType.prototype = new SuperType()  第一次调用 SuperType()
inheritPrototype(SubType, SuperType)

SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function() {
  console.log(this.age)
}

var instance1 = new SubType('AMM', 23)
instance1.colors.push('black')
console.log(instance1.colors) // ["red", "blue", "green", "black"]
instance1.sayName() // AMM
instance1.sayAge() // 23

var instance2 = new SubType('BMM', 24)
console.log(instance2.colors) // ["red", "blue", "green"]
instance2.sayName() // BMM
instance2.sayAge() // 24
```

优点

只调用了一次`SuperType`构造函数，并且因此避免了在`SubType.prototype`上创建不必要、多余的属性

原型链还能保持不变，能正常使用`instanceof`和`isPrototypeOf`
