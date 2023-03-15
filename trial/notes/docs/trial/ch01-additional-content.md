# 关于第一次培训的补充内容

[[toc]]

## 关于 URL 的补充内容

建议详细阅读[这个](https://wangdoc.com/html/url.html)。

## HTML 元素的嵌套规则

- 内联元素不能嵌套块级元素
- 有的元素只允许嵌套特定内容，具体可以去 [MDN Web Docs](https://developer.mozilla.org/en-US/)查，这个不用记，报错了再去查就是
- `p`，`h1~h6`元素里不能嵌套块级元素

## live server 插件的使用

最后因为时间问题，说的有些仓促。

### 安装

首先是在 vscode 的扩展商店里下载 live server （注意不要下错）。

![安装 live server](/images/trial/ch01-install-live-server-extension.png)

### 使用

有几种方法可以启动 live server (在插件的介绍页里面也有写)。

#### 状态栏按钮

在状态栏中点击对应的按钮（就是最下面那一栏）

![在状态栏中打开 live server](/images/trial/ch01-open-live-server-use-status-bar.png)

此时会弹出一个网页，默认会导航到你打开的文件夹下的 `index.html` 文件

#### 右键菜单

在你想要查看的 html 文件里，右键打开菜单，选择（Open with Live Server）。

或者在 vscode 的资源管理器里面，右键 html 文件，选择（Open with Live Server）。

![右键菜单打开 live server](/images/trial/ch01-open-live-server-use-right-click-menu.png)

这时会弹出一个网页，显示的是选择的 html 文件。

#### 命令面板

按快捷键 `F1` 或者 `Ctrl+Shift+P` 调出命令面板，搜索并选中 “Live Server: Open with Live Server”

![命令面板打开 live server](/images/trial/ch01-open-live-server-use-command-pallete.png)

::: tip

命令面板（Command Pallete）是 vscode 中十分实用的功能，几乎所有操作都可以在这里找到。

:::

关于 live server 弹出的网页，如果你仔细阅读并搞明白了 URL 这一节，你大概会明白这一步其实是 live server 搭建了一个以你打开的文件夹为根目录的本地服务器，通过这个 URL 可以根据你的文件目录结构访问你的项目文件。初次之外，live server 还提供了实用的功能，比如更改 html 文件内容时自动刷新。更多功能可以参考扩展介绍页面。

## 关于文件和路径的补充内容

这一块内容比较碎，也不好深入，简单了解即可。

### 文件路径

形如 `/home/lnk/codes/web/my-first-project/index.html`、`/home/lnk/codes/web/my-first-project/` 的为路径，前一个表示了一个文件（结尾不带`/`），后一个表示了一个文件夹（或者说目录，结尾不带 `/`）。实际上不带结尾的 `/` 的路径也可能表示一个目录。 上述路径以 `/` 开始，表示从根目录开始导航。

在操作系统中有分区的概念，把一块硬盘的空间分隔成很多块小空间。在 Windows 操作系统里，分区是可以用盘符来表示的。比如打开“我的电脑”或者“此电脑”，你会看到每一个分区名字前面有一个大写字母，这就是盘符。而你的 Windows 操作系统中的文件可以用盘符 + 相对于分区的路径来表示。比如 `C:\Program Files\Google\Chrome\Application\chrome.exe`，注意这里，Windows 下文件夹（目录）之间默认用 `\` 分隔，但实际上 `/` 也可以正确识别。

![windows 盘符](/images/trial/ch01-windows-partition-id.png)

![windows 路径](/images/trial/ch01-windows-path.png)

::: tip

推荐只使用 `/`

:::

### 绝对路径和相对路径

上面提到的路径全部都是绝对路径，绝对路径是指目录下的绝对位置，有了它直接到达目标位置。

而关于相对位置，顾名思义，就是由某个已知的路径引起的其它文件和它的路径关系。比如我现在位于`/home/` 文件夹，`lnk/` 就表示当前文件夹下的 `lnk` 文件夹，即 `/home/lnk/`。

还有一些关于相对路径的特殊表示

- `.` 表示当前文件夹，比如 `/home/./lnk/` 和 `/home/lnk/` 是同一个位置
- `..` 表示父级文件夹，比如 `/home/lnk/../` 和 `/home/` 是同一个位置

这些在绝对路径里面也是可以用的。

在 URL 的路径部分中，遵循相同的规则。

## 关于 HTML 一些重要内容的补充

### 注释

注释会被浏览器自动忽略，注释以 `<!--`开头，以 `-->`结尾，下面是一个注释的例子。

```html
<!--
  <p>hello world</p>
  浏览器会假装看不到我 😎
-->
```

## 关于 vscode 的其它实用功能

其它推荐插件可以在[这里](/misc/vscode-extensions-recommend.html)找到。

### 代码分析

通过代码分析，可以找出代码中的错误。

vscode 中可以通过安装插件 `HTMLHint` 实现。

![vscode htmlhint](/images/trial/ch01-vscode-htmlhint.png)

第一个下载量最多的那个插件已弃用，根据提示安装图中箭头所指插件。

安装完成后，代码中出错的地方会有标识（下划线），鼠标放上去会显示错误信息。

![vscode htmlhint float](/images/trial/ch01-vscode-htmlhint-example1.png)

在状态栏中找到下图所示按钮可以查看当前工作区所有错误。

![vscode htmlhint trouble](/images/trial/ch01-vscode-htmlhint-example2.png)

### 自动补全

这么多标签名属性名记不住怎么办？vscode 对 html
有开箱即用的自动补全支持！相信大家在写代码的时候已经体会到了。

![vscode 自动补全](/images/trial/ch01-vscode-complete.png)

### 用户代码片段

在使用 VScode 开发中经常会有一些重复使用的代码块，复制粘贴也很麻烦，这时可以在 VScode 中添加用户代码片段，输入简写即可快捷输入。

![配置用户代码片段](/images/trial/ch01-vscode-configure-snippets.png)

有的同学可能已经用过了，在 html 文件里面输入 `html` 就可以看到 `html:5` 的补全选项，选择它可以直接生成一个网页基本结构的代码。这个是 vscode 自带的代码片段。

![自带的代码片段](/images/trial/ch01-vscode-html5-snippets.png)

### 格式化代码

这里的格式化是指把代码转化成指定的格式，比如规范缩进等功能。

按 `Ctrl+Shift+P` 调出 vscode 的命令面板，找到 “Format Document” 并选中，可以格式化代码。

![格式化代码](/images/trial/ch01-vscode-format-document.png)

vscode 对 HTML 文件有自带的格式化支持，也可以尝试更加专业的前端代码格式化工具—— prettier。在 vscode 中有对应的插件。

![安装 prettier 插件](/images/trial/ch01-vscode-install-prettier-extension.png)

然后在命令面板中找到 “Format Document...” 并选中，然后再次选择 “Prettier”。关于
prettier 的配置和其他用法，可以查看插件主页和[官网](https://prettier.io/)

### 快捷键

比较常用的操作可以设定快捷键，vscode
也有自带的一些快捷键，可以在左下角齿轮图标-键盘快捷方式中查看和修改。

![vscode 快捷键](/images/trial/ch01-vscode-shortcuts.png)

如图，可以看到我这里格式化代码默认有个快捷键 `Ctrl-Shift-I`，可以自行修改。

更多内容待更新...
