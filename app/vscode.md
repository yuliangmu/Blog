# Visual Studio Code

## 编辑器设置

<!-- markdownlint-disable -->
<details>
  <summary>settings.json</summary>
  <pre>
    {
      "editor.formatOnPaste": true,
      "editor.formatOnSave": true,
      "editor.formatOnType": true,
      "editor.minimap.enabled": false,
      "editor.mouseWheelZoom": true,
      "editor.renderWhitespace": "selection",
      "editor.tabSize": 2,
      "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
      },
      "files.autoSave": "onFocusChange",
      "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
      "workbench.startupEditor": "none",
      "window.zoomLevel": 0,
      "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      },
      "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
      }
      // prettier（vetur单独设置）
      "prettier.semi": false,
      "prettier.singleQuote": true,
      "prettier.trailingComma": "es5"
      "vetur.format.defaultFormatterOptions": {
        "prettier": {
          "semi": false,
          "singleQuote": true,
          "trailingComma": "es5"
        }
      }
    }
  </pre>
</details>
<!-- markdownlint-restore -->

## 快捷键整理

view [here](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)

**`⌘`** => **`⊞`**

**`⌃`** => **`Ctrl`**

**`⌥`** => **`Alt`**

**`⇧`** => **`Shift`**

> 等我买得起 Mac 那一天，我就...

|          | Mac            | Pc                                  | 备注                              |
| -------- | -------------- | ----------------------------------- | --------------------------------- |
| Terminal | ⌘ + J / ⌃ + \` | Ctrl + J/\`                         | Toggle 终端                       |
| Terminal | ⌃ + ⇧ + \`     | Ctrl + Shift + \`                   | 新建终端                          |
|          |                |                                     |                                   |
| Cursor   | ⌘ + ↑/↓        | Ctrl + Home/End                     | 首行/尾行                         |
| Cursor   | ⌘ + ←/→        | Home/End                            | 行首/行尾                         |
| Cursor   | ⌥ + ←/→        | Ctrl + ←/→                          | 以单词为单位左右移动光标          |
|          |                |                                     |                                   |
| Delete   | ⌥ + Del        | Alt + Del                           | 删除上一个单词                    |
| Delete   | ⌘ + ⇧ + K      | Ctrl + Shift + K                    | 删除当前行                        |
|          |                |                                     |                                   |
| Tabs     | ⌃ + Tab        | Ctrl + Tab                          | 页签切换                          |
|          |                |                                     |                                   |
| SideBar  | ⌘ + ⇧ + E      | Ctrl + Shift + E                    | 聚焦到 Explorer                   |
| SideBar  | ⌘ + ⇧ + F      | Ctrl + Shift + F                    | 搜索                              |
|          |                |                                     |                                   |
| Comment  |                | ~~Alt + Shift + A~~(和企微截图冲突) | 多行注释直接手动输入 /\*\* 后回车 |

## 代码片段（snippets）

view [here](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

## 资源

[Visual Studio Code](https://code.visualstudio.com/)
