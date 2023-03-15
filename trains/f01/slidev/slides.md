---
theme: seriph
lineNumbers: true
css: unocss
layout: cover
hideInToc: true
background: ''
---

# JS & Module & Vite & Vue

---

<Toc />

---

# Promise

传统的 JavaScript 并发编程通过回调函数控制流程，容易出现回调地狱

```javascript
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const imgUrl1 = 'https://http.cat/503'Node.js & npm;
const imgUrl2 = 'https://http.cat/404';
const imgUrl3 = 'https://http.cat/401';

const img1 = new Image();
img1.src = imgUrl1;
img1.addEventListener('load', () => {
  ctx.drawImage(img1, 0, 0);
  const img2 = new Image();
  img2.src = imgUrl2;
  img2.addEventListener('load', () => {
    ctx.drawImage(img2, 100, 100);
    const img3 = new Image();
    img3.src = imgUrl3;
    img3.addEventListener('load', () => {
      ctx.drawImage(img3, 200, 200);
    });
  });
});
```

---

## 回调地狱

![callback hell](/callback-hell.jpg)

---

ES6 新增的 `Promise` 可以较为优雅地解决这个痛点

```javascript
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const imgUrl = ['https://http.cat/503', 'https://http.cat/404', 'https://http.cat/401']

function drawImage(imgUrl, x, y) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = function () {
      ctx.drawImage(img, x, y);
      resolve();
    };
  });
}

drawImage(imgUrl[0], 0, 0)
  .then(() => drawImage(imgUrl[1], 100, 100))
  .then(() => drawImage(imgUrl[2], 200, 200))
  .catch(err => {
    console.log(err);
  });
```

---

# async/await

还有更加优雅的 `async`/`await`，其内部实现原理比较复杂，感性理解下

```javascript
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const imgUrl = [ 'https://http.cat/503', 'https://http.cat/404', 'https://http.cat/401' ];

async function drawImage(imgUrl, x, y) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imgUrl;
    img.onload = function () {
      ctx.drawImage(img, x, y);
      resolve();
    };
  });
}

(async () => {
  await drawImage(imgUrl[0], 0, 0);
  await drawImage(imgUrl[1], 100, 100);
  await drawImage(imgUrl[2], 200, 200);
})();

```

---

# CommonJS

CommonJS 是 JavaScript 模块格式的一种，主要见于 Node.js

```javascript
// hello.js

'use strict';

let s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

module.exports = greet;
```

```javascript
// index.js

let greet = require('./hello');

greet('lnk');
```

不详细展开，需要请自行查阅

---

# ES6 Module

ES6 标准正式引入模块

```javascript
// hello.js

export function greet(name) {
  console.log(`hello ${name}!`);
}
```

```javascript
// index.js

import { throttle } from 'lodash-es';
import { greet } from './hello';
// 等同于下面这一句
// import greet from './hello';

greet("lnk");

const foo = throttle(() => console.log('mousemove!'), 1000);

document.addEventListener('mousemove', foo);
```

---

# Vite

好东西

开发时一般会利用模块系统，便于组织项目和使用依赖。

项目用于生产环境时，一般会将代码打包部署。

优点：

- 将所有 JS 代码文件打包成一个或几个，减少 HTTP 请求带来的损耗
- 兼容不支持模块功能的浏览器
- 便于和其它工具集成（Babel、TypeScript、Sass、TaildwindCSS等）
- 其它

Vite 是目前流行的前端构建工具，能够显著提升前端开发体验

[Vite 官网](https://cn.vitejs.dev/guide/)

---

# Vue

好东西

写前端的几乎是必须要会一种框架了，我们选的是 Vue

其它常见的 Web 前端框架还有：React、AngularJS、Svelte 等

官方文档的[教程](https://cn.vuejs.org/guide/introduction.html)必看

