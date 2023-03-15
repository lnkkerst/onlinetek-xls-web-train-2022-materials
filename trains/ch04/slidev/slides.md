---
theme: seriph
defaults:
  layout: default
layout: cover
# hideInToc: true
background: ''
title: JS, Interaction and Backend
exportFilename: 'ch02-javascript-basics.pdf'
lineNumbers: true
monaco: true
selectable: true
record: true
routerMode: 'hash'
favicon: '/favicon.ico'
---

# JS, Interaction and Backend

---
hideInToc: true
---

## 目录

<div mt="4"></div>

<Toc max-depth="3" />

---

## JavaScript

<div mt="6"></div>

- JSON
- this binding
- OOP
- Error handling
- Concurrency
- Functional programming

---

### JSON

JavaScript Object Notation

```json
{
  "name": "slidev",
  "private": true,
  "scripts": {
    "build": "slidev build",
    "dev": "slidev --open",
    "export": "slidev export"
  },
  "dependencies": {
    "@slidev/cli": "^0.36.11",
    "@slidev/theme-default": "*",
    "@slidev/theme-seriph": "*"
  }
}
```

- `number`, `boolean`, `string`, `null`, `array`, `object` 和 JavaScript
  一一对应
- 字符集 必须是 UTF-8
- 属性名必须有双引号，字符串必须有双引号

---

#### `JSON.stringify()`

将 JavaScript 数据转换成 JSON 格式（字符串）

```javascript
JSON.stringify('abc') // ""abc""
JSON.stringify(1) // "1"
JSON.stringify(false) // "false"
JSON.stringify([]) // "[]"
JSON.stringify([1, "false", false]) // '[1,"false",false]'
JSON.stringify({ name: "张三" }) // '{"name":"张三"}'
```
<hr>
<div mt="3"></div>

#### `JSON.parse()`

和上面的对着干

```javascript
JSON.parse('true') // true
JSON.parse('"foo"') // "foo"
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
JSON.parse('null') // null

var o = JSON.parse('{"name": "张三"}');
o.name // 张三
```

---

### this binding

```javascript
const a = {
  foo: function() {
    console.log(this);
  }
}

a.foo(); // {foo: ƒ}

let c = a.foo;
c(); // Window {...
```

<v-click>

```javascript
const a = {
  foo: () => {
    console.log(this);
  }
}

a.foo(); // Window {...

let c = a.foo;
c(); // Window {...
```
</v-click>

<v-click>

`Function.prototype.call()`

</v-click>

---

### OOP

- prototype
- class

---

#### prototype

每个对象都有他的原型对象

```javascript
let arr = [11, 45, 14]
```

```plaintext
arr ----> Array.prototype ----> Object.prototype ----> null
```

他们之间的关系:

```javascript
let arr = [11, 45, 14];
arr.foo(); // TypeError

Object.prototype.foo = () => console.log("prototype is interesting 🥰")
arr.foo() // prototype is interesting 🥰

Array.prototype.foo = () => console.log("prototype is eval 😠");
arr.foo(); // prototype is eval 😠

Array.foo() // prototype is interesting 🥰
```

---

#### 构造函数

```javascript
function Animal(name) {
  this.name = name;
  this.run = function() {
    console.log(`${this.name} is running...`);
  }
}

const a = new Animal("dog");
a.run() // dog is running...
```

---

#### 继承

```javascript
function inherits(Child, Parent) {
  let F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

function Chicken(name) {
  Animal.call(this, name);
  this.run = function() {
    console.log(`${this.name} is flying...`);
  }
}

inherits(Chicken, Animal);

const k = new Chicken("***");
k.run() // *** is flying...
```

<v-click>

🐶 都不用

</v-click>

---

#### class

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running...`);
  }
}

class Chicken extends Animal {
  constructor(name) {
      super(name);
    }
  run() {
    console.log(`${this.name} is flying...`);
  }
}
```

---

## Error handling

<div mt="6"></div>

- `try ... catch ... finally`
- `throw`

---

### `try ... catch ... finally`



---
