# ESLint 的使用 & TypeScript 安利

ESLint 是一个语法规则和代码风格的检查工具，可以用来写代码时进行语法检查、风格检查

## 安装

建议将 ESLint 直接作为项目的开发时依赖：

```bash
npm install --save-dev eslint
```

执行：

```bash
npm exec eslint
```

也可以全局安装：

```bash
npm install --global eslint
```

## 初始化配置文件

执行：

```bash
#eslint --init
#npm exec eslint -- --init
npm init @eslint/config
```

回答询问的几个问题，会生成一个配置文件，在配置文件中可以配置代码风格等的检查。

## 检查

```bash
#eslit yourfile.js
npx eslint yourfile.js
```

检查文件中的错误。

可以在 vscode 中安装对应的插件，可以直接在编辑器里标出错误。

进阶使用（配置、fix 等功能）可以参阅[文档](https://eslint.org/docs/latest/)

## TypeScript

JavaScript 是动态类型语言，且变量声明时候不标记类型，会出现以下问题

```javascript
let a = new Date().toString();

function getStringLength(s) {
  return s.length;
}
```

在写 `new Date().toString();` 的时候，IDE 可以给我们很容易的标识出 `toString()` 以及其它方法，因为 IDE 可以比较容易的检测出变量的类型

而在写 `getStringLength` 方法时，变量 `s` 却没有任何补全和提示，因为 `s` 的类型只有运行时调用函数传入参数才能确定，即使我们期望 `s` 是一个字符串。

由于 JavaScript 原生也不支持类型标注，所以无能为力。好在我们有 TypeScript，为 JavaScript 加上了类型系统和一些高级功能。

```typescript
let a = new Date().toString();

function getStringLength(s: string) {
  return s.length;
}
```

`s: string` 表示 `s` 变量是一个 `string` 类型，这样我们在编写函数的时候就能得到 `s` 的补全，调用函数的时候，如果传入参数类型不对，TypeScript 也会给我们指出来。

除了这一点开发时的便利，引入类型系统也可以让 JavaScript 在开发大型应用时变得更加强壮。

编辑器的补全支持、静态检查等功能。

TypeScript 内容较多，有兴趣和余力的可以去学一下：

- [TypeScript 入门教程](https://ts.xcatliu.com/)
- [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)
- [官网](https://www.typescriptlang.org/)
- [TypeScript 使用指南手册](https://www.patrickzhong.com/TypeScript/)
