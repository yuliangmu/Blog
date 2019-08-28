# vscode 编辑器

## 工作区设置

```js
{
  // 编辑器
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "editor.mouseWheelZoom": true,
  "editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.tabSize": 2,
  "files.autoSave": "onFocusChange",
  // 插件：prettier
  "prettier.eslintIntegration": true,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  // 插件：vetur https://www.cnblogs.com/Alan2016/p/9528893.html
  "vetur.format.defaultFormatter.js": "vscode-typescript"
}
```

## 代码片段（snippets）

1. `Command + P`，输入 `snippets`，选择 `Preference: Configure User Snippets`

1. 如果已经创建过，选择 `Existing Snippets` 配置即可，没有则新建

## CSS 缩写

| 简写    | 表示                  |
| ------- | --------------------- |
| `p10`   | `padding: 10px;`      |
| `pl10`  | `padding-left: 10px;` |
| `m10`   | `margin: 10px;`       |
| `ml10`  | `margin-left: 10px;`  |
| `t10`   | `top: 10px;`          |
| `f10`   | `font: 10px;`         |
| `fw500` | `font-weight: 500;`   |
| `h10px` | `height: 10px;`       |
| `w10`   | `width: 10px;`        |

## 常用快捷键

### 打开 Terminal

**`Command + J`**（首选）

**`Control +` `**（在 markdown 等有些文件中，有时会无效）

### 光标快速定位

**`Command + ↑/↓`** 文件顶部/尾部

**`Command + ←/→`** 行首/行尾（同 `Home/End`）:+1:

**`Option + ←/→`** 按单词为单位左右移动光标 :+1:

**`Option + Control + ←/→`** 按单词大小写分解移动光标

~~**`Control + ↑/↓`** 滚动页面 (Mac 不行)~~

### 页签切换

**`Control + Tab`** 页签切换 :m:

**`Command + Option + ←/→`** 页签切换

**`Control + Command + →`** 当前文件在分组中查看 :+1:

**`Option + Click`** 按住 `Option` 点击文件，实现分组打开

### 搜索

**`Command + Shift + F`** 搜索

**`Option + Shift + F`** 先选择指定目录，再搜索

### 删除上一个单词

**`Option + Backspace`**

## 资源

[Visual Studio Code](https://code.visualstudio.com/)
