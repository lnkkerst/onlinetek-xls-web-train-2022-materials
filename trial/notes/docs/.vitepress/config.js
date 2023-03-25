import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'onlinetek-web 笔记',
  description: '有用的东西',

  base: '/slides/onlinetek-train-2022/notes/',

  lastUpdated: true,

  markdown: {
    headers: {
      level: [0, 0]
    }
  },

  themeConfig: {
    sidebar: {
      '/': sidebar()
    }
  }
});

function sidebar() {
  return [
    {
      text: '杂项',
      collapsible: true,
      items: [
        { text: '如何解决疑难杂症', link: '/misc/how-to-solve-problems.md' },
        {
          text: 'VSCode 插件推荐清单',
          link: '/misc/vscode-extensions-recommend.md'
        },
        { text: '(前端)ES6 常用语法', link: '/misc/es6-features/index.md' },
        {
          text: '(前端)ESLint 的使用 & TypeScript 安利',
          link: '/misc/eslint-usage/index.md'
        }
      ]
    },
    {
      text: '试用期',
      collapsible: true,
      items: [
        { text: 'ch01-补充内容', link: '/trial/ch01-additional-content.md' },
        { text: 'ch03-补充内容', link: '/trial/ch03-additional-content.md' }
      ]
    },
    {
      text: '正式培训',
      collapsibale: true,
      items: [
        {
          text: 'Node.js 以及 npm 的安装与使用',
          link: '/formal/20221124-node-install/index.md'
        },
        { text: 'Git 的安装', link: '/formal/20230107-git-install/index.md' }
      ]
    }
  ];
}
