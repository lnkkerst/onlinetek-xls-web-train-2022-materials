# ES6 常用语法糖

我主观认为常用的 ES6 特性，只是列清单和简单例子，详细可去查 MDN。

[[toc]]

## `let` & `const`

`let` 声明的变量具有块级作用域
`const` 可以声明常量（不可变的量，注意声明引用类型时引用的数据仍可变）

```javascript
{
  let a = 10;
  var b = 1;
}

a; // ReferenceError: a is not defined.
b; // 1
```

## 解构赋值

```javascript
let a = 1;
let b = 1;
let c = 1;
```

可以写成这样：

```javascript
let [a, b, c] = [1, 2, 3];
```

允许嵌套和默认值：

```javascript
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo; // 1
bar; // 2
baz; // 3

let [foo = true] = [];
foo; // true
```

对象也有类似的：

```javascript
let { foo, bar: baz } = { foo: 'aaa', bar: 'bbb' };
foo; // "aaa"
baz; // "bbb"

var { x = 3 } = {};
x; // 3

var { x, y = 5 } = { x: 1 };
x; // 1
y; // 5
```

这两种可以嵌套，不多赘述

## 模板字符串

类似于 Python 的 `f'{expression}'`

```javascript
let person = lnk;
let greet = `hello, ${person}`; // 'hello, lnk'
```

`${}` 会被里面表达式的内容替换掉

支持多行字符串

```javascript
$('#result').append(
  'There are <b>' +
    basket.count +
    '</b> ' +
    'items in your basket, ' +
    '<em>' +
    basket.onSale +
    '</em> are on sale!'
);
```

可以写成：

```javascript
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```

## 函数默认参数

函数可以指定默认参数，支持解构赋值

默认参数：

```javascript
// 默认求二次方，传入第二个参数可以指定其它指数
function powX(x, k = 2) {
  let res = 1;
  for (let i = 1; i <= k; ++i) {
    res *= x;
  }
  return res;
}

powX(10); // 100
powX(10, 3); // 1000
```

解构赋值：

```javascript
function getUsers({ id, level, active = true } = {}) {
  console.log(id);
  console.log({ id, level, active });
}
```

## 数组和对象的扩展运算符

扩展运算符 `...` 可以取出数组或对象的内容并展开

```javascript
let a = [1, 2, 3];
let b = [4, ...a];
b; // [4, 1, 2, 3]
```

```javascript
let a = {
  foo: '1',
  bar: '2'
};

let b = {
  ...a,
  bar: '3'
};

console.log(b); // { foo: '1', bar: '3' }
```

## 对象相关

### 属性简写

```javascript
let id = uuidv4();
let user = {
  id: id
};
```

可以简写成

```javascript
let id = uuidv4();
let user = { id };
```

:::tip
`console.log({id, username})` 要比 `console.log(id, username)` 直观的多
:::

### 属性名表达式

```javascript
let namedKey = `${id}_${name}`;
let records = {
  namedKey: score
};
```

可以写成

```javascript
let records = {
  [`${id}_${name}`]: score
};
```

## 指数运算符

```javascript
2 ** 10; // 1024
```

## 链式判断

```javascript
// 错误的写法
const firstName = message.body.user.firstName || 'default';

// 正确的写法
const firstName =
  (message &&
    message.body &&
    message.body.user &&
    message.body.user.firstName) ||
  'default';
```

因为链上某一处可能为 `undefined`，所以必须采用后面的写法

可以写成如下形式：

```javascript
const firstName = message?.body?.user?.firstName || 'default';
```

`?.` 遇到 `undefined` 或 `null` 就停止并返回

调用方法也是类似：

```javascript
if (myForm.checkValidity?.() === false) {
  // 表单校验失败
  return;
}
```

## `??` 运算符

类似 `||`，但只对 `null` 和 `undefined` 才返回右侧的值

## 箭头函数

```javascript
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};
```

箭头函数内部 `this` 为定义时上层作用域的 `this`，和运行时上下文无关

## Proxy

拦截对对象的操作，vue 的基石
