# git 备忘清单

## 目录

1. [常见需求](#常见需求)
1. [常见问题](#常见问题)
1. [命令行](#命令行)
1. [参考资料](#参考资料)

## 常见需求

- 丢弃工作区的所有修改： **`git checkout .`**

- 将所有添加到暂存区的文件恢复到工作区：**`git reset HEAD .`**

- 丢弃工作区和暂存区的所有改动，与上一次 commit 一致：**`git reset --hard`**

- 合并分支时不合并它的历史提交记录：**`git merge <branch> --squash`** :+1:

- 不使用 fast-forward 快速合并：**`git merge --no-ff -m "message" <branch>`**

- 删除本地分支：**`git branch -d <branch>`**

- 删除远程分支：**`git push origin --delete <branch-name>`**

- 查看所有分支：**`git branch -a`**

- 切换到上一次的分支：**`git checkout -`**

- 新建本地分支并拉取远程分支：**`git checkout -b <local-branch> origin/<remote-branch>`**

- 快速提交版本库：**`git commit -am "message"`**

- 版本回退： **`git reset --hard HEAD^`**，`HEAD^`可以改为指定 `commit`

- 添加远程仓库，并为其命名：**`git remote add <custom-name> <url>`**

## 常见问题

### `git mv <file>` 和 `mv <file>` 区别

A: 都是删除文件，前者会将删除动作添加到暂存区，后者需要手动添加

### 本地仓库关联多个远程仓库

参考：[知乎](https://www.zhihu.com/question/46543115/answer/101761754)

### `git merge --no-ff` 和 `git merge --squash` 作用

![merge-difference.png](https://i.loli.net/2019/03/19/5c90e04054b06.png)

参考：[Segmentfault](https://segmentfault.com/q/1010000002477106/a-1020000002519351)

## References

[速查表-阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

[速查表-GitHub](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)

[教程-廖雪峰](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

[教程-Pro Git](https://git-scm.com/book/en/v2)

[git 的奇淫技巧](https://github.com/521xueweihan/git-tips)
