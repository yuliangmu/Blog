# Markdown 备忘清单

## 目录

- [锚点链接](##锚点链接)
- [提取链接](##提取链接)
- [待办事项](##待办事项)
- [表格](##表格)
- [使用 emoji](##使用-emoji)

## 锚点链接

```md
[标题 1](#title)
[标题 2](#title)
[标题 3](#title-three)
[3.3. Github 标题](#33-github-标题)

# title

## Title

### Title Three

### 3.3. Github 标题
```

> ①.如果标题中包含空格，使用 **`-`** 代替
>
> ②.标题中的大写要转换成小写
>
> ③.多级序号需要去除 **`.`**

## 提取链接

当 `.md` 文件中链接过多时，易读性会变得很差，这时可以把链接提取出来：

**语法：**

```md
I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/ 'Google'
[2]: http://search.yahoo.com/ 'Yahoo Search'
[3]: http://search.msn.com/ 'MSN Search'
```

**效果：**

I get 10 times more traffic from [Google][1] than from
[Yahoo][2] or [MSN][3].

[1]: http://google.com/ 'Google'
[2]: http://search.yahoo.com/ 'Yahoo Search'
[3]: http://search.msn.com/ 'MSN Search'

## 带链接的图片（[图床](https://sm.ms/)）

[![download.png](https://i.loli.net/2019/03/19/5c90ba6880dc2.png)](https://i.loli.net/2019/03/19/5c90ba6880dc2.png)

## 待办事项

**语法：**

`- [ ] todo`

`- [x] done`

`- [x] ~~line-through~~`

**效果：**

- [ ] todo

- [x] done

- [x] ~~line-through~~

## 表格

**语法：**

```md
| text-align: left; | text-align: center; | text-align: right; |
| ----------------- | :-----------------: | -----------------: |
| foo               |         bar         |                baz |
```

**效果：**

| text-align: left; | text-align: center; | text-align: right; |
| ----------------- | :-----------------: | -----------------: |
| foo               |         bar         |                baz |

参考：[gfw-table](https://github.github.com/gfm/#tables-extension-)

## 使用 emoji

**语法：**

```md
:libra: :heart: :+1:
```

**效果：**

:libra: :heart: :+1:

关键词参考：[emoji-cheat-sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)

## 参考

[阮一峰-写作规范](https://github.com/ruanyf/document-style-guide)
