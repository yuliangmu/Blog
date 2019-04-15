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

## 常用快捷键

### 光标快速定位

**`Command + ↑/↓`** 文件顶部/尾部

**`Command + ←/→`** 行首/行尾（同 `Home/End`）:+1:

**`Option + ←/→`** 按单词为单位左右移动光标 :+1:

~~**`Control + ↑/↓`** 滚动页面 (PC，和 Mac 冲突)~~

### 页签切换

**`Control + Tab`** 页签切换 :m:

**`Command + Option + ←/→`** 页签切换

**`Control + Command + →`** 当前文件在分组中查看 :+1:

**`Option + Click`** 按住 `Option` 点击文件，实现分组打开

### 搜索

**`Command + Shift + F`** 搜索

**`Option + Shift + F`** 先选择指定目录，再搜索

## 资源

[Visual Studio Code](https://code.visualstudio.com/)
