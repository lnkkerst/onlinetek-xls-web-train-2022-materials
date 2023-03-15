# 关于第三次培训的补充内容

JavaScript

[[toc]]

## 培训时说的一些怪话

貌似我提了一句在 JavaScript 语句和表达式没啥区别，实际上还是有区别的，但关于 JavaScript 大家基本可以不去管它们的区别。

貌似我还口误了 `null` 是真值，大家就当我在发癫。

slide 上面有地方出错了，有时间再改（~~上课的时候都提到了~~

## 关于 JavaScript 加载的补充说明

### 加载方式

JavaScript 加载有两种方式：

1\. `<script></script>` 标签内嵌 JavaScript，代码直接写进内容里

```html
<script>
function hello(person) {
  alert("hello " + person);
}

hello("world");
</script>
```

2\. 给 `<script></script>` 指定 `src` 属性，表示要引入的 JavaScript 脚本文件的 URL

```html
<script src="/scripts/index.js"></script>
```

```javascript
// /scripts/index.js

function hello(person) {
  alert("hello " + person);
}

hello("world");
```

### 加载机制

浏览器默认是同步执行 JavaScript 代码，即 HTML 解析到 `<script></script>` 时会暂停解析，执行 JavaScript 代码，会造成阻塞的效果，这时有些情况需要注意：

- 如果在 JavaScript 代码里有对 HTML 节点的操作，想要操作的节点在 `<script></script>` 下面的话，执行 JavaScript 代码的时候由于还没解析到后面的内容，所以拿不到对应节点

解决方法是把所有自己写的代码放在 `<body></body>` 的最后面，或者是监听 `document` 的 `load` 事件

初次之外，`<script></script>` 也有属性：

- `async` 属性指定 JavaScript 代码异步执行，不会造成阻塞效果，注意这时候后面的节点有没有解析完仍然是不确定的
- `defer` 该属性指定 JavaScript 代码不是立即执行，而是页面解析完成后执行。
- `type` 属性指定加载脚本文件的类型，传统 JavaScript 脚本（就是我们现在正在写的这种）的类型是 `text/javascript`，默认值就是这个，所以可以忽略

还有其它的可以查文档

## 浏览器模型

之前我们讲到的操作都是针对网页，通过 JavaScript 我们还可以操控浏览器的一些行为

### `window` 对象

`window` 对象代表当前浏览器窗口，也是页面环境的顶层对象，所有未声明就赋值的变量会变成顶层对象的属性

```javascript
a = 1;
console.log(window.a); // 1
```

一些自带的方法，其实也是在 `window` 对象上的：

```javascript
alert('hello');

window.alert('hello');
```

`window` 对象上也有很多属性和方法，这里不赘述

### 其它

还有其它像是 `Navigator`（浏览器信息相关）、`Screen`（当前窗口所在屏幕信息相关）、`History`（当前窗口浏览历史相关）、`Location`（URL 相关）之类的对象，先用现查

个人建议可以把[网道里面的 JavaScript 教程](https://wangdoc.com/javascript/index.html)粗略浏览一遍，了解什么问题改去查什么，遇到具体情境再去查文档。

## 标准库

挑几个用的多点的，大家随便看看,,,

有些地方会涉及到“实例”这个概念，这个是面向对象的内容，你只要理解到实例属性和方法是对象对应的具体变量或值上面有的属性和方法就可以了。比如 `Object` 对象，因为所有对象都是 `Object` 对象的实例，所以 `Object` 对象上的实例属性和实例方法是所有对象都有的属性和方法。实例属性和实例方法是定义在 `Object.prototype` 上的（其它对象以此类推）。

### `Object`

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)  
[WangDoc](https://wangdoc.com/javascript/stdlib/object.html)

- [`Object.assign()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 这个可以用来做浅拷贝，不过更常见的浅拷贝方法是用 ES6 的扩展运算符
- [`Object.keys()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [`Object.Object.getOwnPropertyNames()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)

实例：

- [`Object.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- [`Object.prototype.hasOwnProperty()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

想深入可以了解[属性描述符](https://wangdoc.com/javascript/stdlib/attributes.html)，面向对象，ES6 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 等

### `Array`

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)  
[WangDoc](https://wangdoc.com/javascript/stdlib/array.html)

- [`Array.isArray()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

实例：

- [`Array.prototype.push()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`Array.prototype.pop()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- `shift(), unshift(), join(), concat(), reverse(), slice(), sort(), map(), forEach(), filter(), some(), every(), indexOf(), lastIndexOf(), find(), findIndex(), findLast(), findLastIndex(), fill(), entries(), keys(), values(), includes(), at(), toReversed(), toSorted()` 太多了懒得扒链接了，自己去 MDN 搜搜吧...

### Boolean

可以用来转换，但一般不用。。。

提一句包装对象，就是在 `number` `boolean` 这些原生数据类型的值或变量上访问属性或方法的时候，会自动转换成对应对象的实例然后再访问。。。

### Number

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)  
[WangDoc](https://wangdoc.com/javascript/stdlib/number.html)

几个定义在上面的常量：

- Number.POSITIVE_INFINITY
- Number.NEGATIVE_INFINITY
- Number.NaN
- Number.MIN_VALUE
- Number.MAX_SAFE_INTEGER
- Number.MIN_SAFE_INTEGER

实例：

- `Number.prototype.toFixed()`
- `Number.prototype.toPrecision()`

### String

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)  
[WangDoc](https://wangdoc.com/javascript/stdlib/string.html)

实例：

- `String.prototype.length`
- `String.prototype.slice()`
- `String.prototype.indexOf()`
- `String.prototype.lastIndexOf()`
- `String.prototype.trim()`
- `String.prototype.toLowerCase()`
- `String.prototype.toUpperCase()`
- `String.prototype.match()`
- `String.prototype.search()`
- `String.prototype.replace()`
- `String.prototype.split()`

### Function

函数的黑魔法！

延伸（真的是延伸！）阅读：

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
- [WangDoc](https://wangdoc.com/javascript/types/function.html)
- [this(MDN)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
- [this(WangDoc)](https://wangdoc.com/javascript/oop/this.html)
- [ES6(WangDoc)](https://wangdoc.com/es6/function.html)

### Math

建议是都看，涉及到数学运算跑不了的

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)  
[WangDoc](https://wangdoc.com/javascript/stdlib/math.html)

### Date

和日期处理有关的，用的比较少

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)  
[WangDoc](https://wangdoc.com/javascript/stdlib/date.html)

### RegExp

正则表达式，看下介绍，有兴趣的就学学吧。。。

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)  
[WangDoc](https://wangdoc.com/javascript/stdlib/regexp.html)

### JSON

必学，但大作业是用不到的

JSON 格式（JavaScript Object Notation 的缩写）是一种用于数据交换的文本格式

看起来长得和 JavaScript 的 object 真像

[MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/JSON)  
[WangDoc](https://wangdoc.com/javascript/stdlib/json.html)

### Proxy

可以不看

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)  
[WangDoc](https://wangdoc.com/es6/proxy.html)

### Reflect

`Object` 对象上的一些方法，可以不看

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)  
[WangDoc](https://wangdoc.com/es6/reflect.html)

### Promise

对目前来说的你们可能有丶难，想深入异步操作的可以看看

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)  
[WangDoc](https://wangdoc.com/es6/promise.html)

## 杂

有空可以看看（对于大作业可以说是都用不到）：

- 作用域
- this binding
- 高级函数（函数作为参数）
- 闭包
- JavaScript 的并发模型
- 面向对象
- ES6 module

etc...
