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
  "editor.wordWrap": "on",
  "files.autoSave": "onFocusChange",

  // 插件：prettier
  "prettier.eslintIntegration": true,
  "prettier.printWidth": 120,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  // 插件：vetur https://www.cnblogs.com/Alan2016/p/9528893.html
  "vetur.format.defaultFormatter.js": "vscode-typescript"
}
```

## 常用快捷键

- [ ] `Home、End` 键快速跳转到行首行尾 (PC + Mac) :+1:

- [ ] `Ctrl + ↑/↓` 滚动页面 (PC + Mac) :+1:

## 常见问题

### 在指定文件夹内搜索

在需要查找的目录中右键，点击 **Find in Folder** (⌥+Shift+F)
