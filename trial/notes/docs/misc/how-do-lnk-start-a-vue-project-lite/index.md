# lnk. 写一个 Vue 项目的时候会准备什么(伪)

仅供参考

[[toc]]

## 空模板

### 初始化

首先是创建空模板项目并初始化 git repo

```bash
npm create vite@latest example-vue-project
# 依次选择
# Vue.js
# JavaScript or TypeScript
cd example-vue-project
npm install
git init
```

### 配置 eslint (和 prettier)

然后是安装配置 [eslint](https://eslint.org/) 和 [prettier](https://github.com/prettier/prettier/)

其中，prettier 是一个格式化工具，eslint 是一个语法规则和代码风格的检查工具，两者功能有重复部分，但我喜欢一起用 😎

```bash
npm install -D eslint prettier eslint-config-prettier @antfu/eslint-config
```

`eslint` 和 `prettier` 是主程序，`eslint-config-prettier` 是让 eslint 尊重 prettier 的一个配置，防止两个工具冲突（比如一个要求行末有分号一个要求行末没分号），`@antfu/eslint-config` 是别人写好的 eslint 的规则，比较对我口味，就直接拿来用了。

配置 eslint：

`.eslintrc.json`

```jsonc
{
  "extends": ["@antfu", "prettier"]
}
```

配置 prettier：

`.prettierrc`

```jsonc
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "none",
  "arrowParens": "avoid",
  "printWidth": 80,
  "useTabs": false,
  "quoteProps": "as-needed",
  "bracketSpacing": true,
  "rangeStart": 0,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "ignore"
}
```

只是比较对我口味的配置。

多人参与的项目中建议在项目中放好 eslint （和 prettier）的配置，规范所有人的代码风格。

### 配置 lint-staged

配置 [lint-staged](https://github.com/okonet/lint-staged)，用于在 commit 时强制检查和格式化代码。

```bash
npm install -D lint-staged
```

`.lintstagedrc`

```jsonc
{
  "*.{ts,vue}": "eslint --cache --fix",
  "*.{ts,vue,md,json,jsonc}": "prettier --write"
}
```

### 安装 vite 相关插件

我比较喜欢用的插件：

[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 组件自动导入
[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) API 自动导入
[unocss](https://github.com/unocss/unocss) 支持 Tailwind CSS 风格的 css 引擎

### 好麻烦，我不想自己写 😢

方案一：写好一次，到处 copy

方案二：用别人写好的模板

- <https://github.com/antfu/vitesse>
- <https://github.com/antfu/vitesse-lite>

更多 vite 相关（插件、模板等）请看 [awesome-vite](https://github.com/vitejs/awesome-vite)
