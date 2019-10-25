# git 备忘清单

- [常用命令](#常用命令)
- [常见问题](#常见问题)
- [参考](#参考)

## 常用命令

- `git commit -am "[descriptive message]"` 快速提交版本库

- `git checkout .` 丢弃工作区的所有修改

- `git reset HEAD .` 将所有添加到暂存区的文件恢复到工作区

- `git reset --hard` 丢弃工作区和暂存区的所有改动（等价于 `git reset HEAD . && git checkout .`）

- `git reset --hard [commit]` 回退到指定版本（`HEAD^`）

  ---

- `git checkout -b [branch-name]` 新建并切换到新分支

- `git branch -a` 查看所有分支

- `git checkout [branch-name]` 切换到指定分支（`git checkout -`）

- `git branch -d [branch-name]` 删除本地分支

- `git merge [branch-name] --squash` 合并分支时将分支的 commit 合并为一条

- `git merge --no-ff -m "[descriptive message]" [branch-name]` 不使用 fast-forward 合并

  ---

- `git remote add [origin-name] [url]` 添加远程仓库，并为其命名（默认为 origin）

- `git checkout -b [local-branch] origin/[remote-branch]` 新建本地分支并拉取远程分支

- `git push [remote-name] [branch-name]` 上传本地分支

- `git push [remote-name] --delete [branch-name]` 删除远程分支

## 常见问题

### 本地仓库怎么关联多个远程仓库

参考：[知乎](https://www.zhihu.com/question/46543115/answer/101761754)

### `git merge --no-ff` 和 `git merge --squash` 是什么意思

![merge-difference.png](https://i.loli.net/2019/03/19/5c90e04054b06.png)

参考：[Segmentfault](https://segmentfault.com/q/1010000002477106/a-1020000002519351)

## 参考

[Git Cheat Sheets](https://github.github.com/training-kit/)

[速查表-阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

[教程-廖雪峰](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

[教程-Pro Git](https://git-scm.com/book/en/v2)

[git 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)
