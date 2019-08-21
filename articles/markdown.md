# Markdown 备忘清单

- [链接](##链接)
- [待办事项](##待办事项)
- [摘要](##摘要)
- [表格](##表格)
- [使用 emoji](##使用-emoji)

## 链接

### 锚点链接

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

- 标题中包含空格，使用中划线 **`-`** 代替
- 标题中的大写要转换成小写
- 多级序号需要去除 **`.`**

### 提取链接

markdown 文件中链接过多时，可以把链接提取出来

```md
I get 10 times more traffic from [Google][1] than from [Yahoo][2].

<!-- 尾部的字符串会在鼠标 hover 链接时显示 -->

[1]: http://google.com/ 'Google'
[2]: http://search.yahoo.com/ 'Yahoo Search'
```

效果

I get 10 times more traffic from [Google][1] than from [Yahoo][2].

[1]: http://google.com/ 'Google'
[2]: http://search.yahoo.com/ 'Yahoo Search'

### 带链接的图片

[![download.png](https://i.loli.net/2019/03/19/5c90ba6880dc2.png)](https://i.loli.net/2019/03/19/5c90ba6880dc2.png)

> 这里使用了[图床](https://sm.ms/)

## 待办事项

> 仅 [GFM](https://github.github.com/gfm/) 支持

`- [ ] todo`

`- [x] done`

`- [x] ~~line-through~~`

效果

- [ ] todo

- [x] done

- [x] ~~line-through~~

## 摘要

可以使用 HTML 辅助写作，隐藏过长的内容

```html
<details>
  <summary>Examples</summary>
  这里放置需要折叠起来的内容
</details>
```

效果

<!-- markdownlint-disable -->
<details>
  <summary>Examples</summary>
  这里放置需要折叠起来的内容
</details>
<!-- markdownlint-restore -->

## 表格

```md
| 左对齐 | 居中对齐 | 右对齐 |
| ------ | :------: | -----: |
| foo    |   bar    |    baz |
```

效果

| 左对齐 | 居中对齐 | 右对齐 |
| ------ | :------: | -----: |
| foo    |   bar    |    baz |

> 参考 [gfw-table](https://github.github.com/gfm/#tables-extension-)

## 使用 emoji

GFM 提供了丰富的 emoji，使用非常方便

```md
:libra: :heart: :+1:
```

效果

:libra: :heart: :+1:

> 关键词参考 [emoji-cheat-sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
