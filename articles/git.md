# git 速查表

待完善。全部重新看一遍。最好实验一下。。。 2018/12/17

## 1. 创建仓库

- **`git init`**

  在当前目录下新建一个 git 代码库

- **`git init <project-name>`**

  创建一个本地的仓库，并设置名字

- **`git clone <url>`**

  下载一个项目以及它所有的版本历史

## 2. 工作区

### 2.1 跟踪文件

> `git add` 命令使用文件或目录的路径作为参数，如果参数是目录的路径，该命令将递归地跟踪该目录下的所有文件

- **`git add <file1> <file2> ...`**

  添加指定文件到暂存区

- **`git add <dir>`**

  添加指定目录到暂存区，包括子目录

- **`git add *`**

  添加当前目录所有文件到暂存区（`*` 可换成 `.`）

- **`git rm --cached <file>`**

  停止追踪指定文件，但该文件会保留在工作区

### 2.2 查看差异

- **`git diff`**

  显示**工作区与暂存区**的差异（此命令比较的是工作目录中当前文件和暂存区域快照之间的差异，也就是修改之后还没有暂存起来的变化内容）

  > git diff 本身只显示**尚未暂存**的改动，而不是自上次提交以来所做的所有改动。 所以有时候你一下子暂存了所有更新过的文件后，运行 git diff 后却什么也没有，就是这个原因。

- **`git diff <file>`**

  显示指定文件**工作区与暂存区**的差异

- **`git diff HEAD`**

  显示**工作区与版本库**的差异

### 2.3 修改

- **`git reset --hard`**

  重置暂存区与工作区，与上一次 commit 保持一致

- **`git checkout -- <file>`**

  文件在工作区修改后未添加到暂存区，撤回到最近一次 commit 的内容（注意空格）

- **`git mv <file-original> <file-renamed>`**

  重命名文件，并且将重命名动作添加到暂存区

- **`git rm <file1> <file2> ...`**

  删除指定文件，同时将**删除动作**添加到暂存区（区别 `rm <file>`）

  若想要恢复这个文件，需要先 `git reset HEAD <filename>` 将文件从暂存区恢复到工作区 ，再 `git checkout -- <file>` 丢弃工作区中的修改

## 3. 暂存区

- **`git reset --hard`**

  重置暂存区与工作区，与上一次 commit 保持一致

  - **`git reset HEAD <file>...`**

  恢复指定文件从暂存区到工作区（unstage）

  - **`git checkout .`**

  恢复暂存区的所有文件到工作区

  - **`git checkout <file>`**

  恢复暂存区的指定文件到工作区（更新工作区）

  - **`git checkout -- <file>`**（注意空格）

  若已添加到暂存区后，在工作区又做了修改，文件撤回到最近一次 `git add` 后的内容（也就是把工作区后来未暂存的修改丢弃）

- **`git diff --cached`**

  显示**暂存区与版本库**的差异（V-1.6.1↑ 允许使用更语义化的`git diff --staged`，效果相同）

### 3.1

- **`git reset <file>`**

  重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不变

## 4. 版本库

### 4.1 提交到版本库

- **`git commit -m "提交说明"`**

  提交暂存区到仓库（版本记录）

- **`git commit <file1> <file2> ... -m "提交说明"`**

  提交暂存区的指定文件到仓库

- **`git commit -a -m "提交说明"`**

  省略 `git add` 操作，提交工作区（已追踪文件）自上次 `commit` 之后的变化

### 4.2 版本查看

- **`git log`**

  显示当前分支的版本历史（配置的`git lg`命令更好用，另外还配置了`git last`显示最近的一次提交）

- **`git log -p <filename>`**

  显示指定文件的所有修改（filename 改成-2 显示最近两次提交）

- **`git log --stat`**

  显示 commit 历史，以及每次 commit 发生变更的文件

- **`git reflog`**

  显示当前分支的最近几次提交（时光穿梭=>重返）

### 4.3 版本回退

- **`git reset --hard HEAD^`**

  回退到上一个版本（HEAD^^回退到上 2 个版本，HEAD~100 回退到上 100 个版本）

- **`git reset --hard <commit>`**

  重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致

- **`git reset --keep <commit>`**

  重置当前分支的 HEAD 为指定 commit，但保持暂存区和工作区不变

### 4.x 其它

- **`git checkout <commit> <file>`**

  恢复某个 commit 的指定文件到暂存区和工作区

- **`git diff <first-branch> <second-branch>`**

  显示两次提交之间的差异

## 7. 分支

### 7.1 查看分支

- **`git branch`**

  列出所有本地分支

- **`git branch -r`**

  列出所有远程分支

- **`git branch -a`**

  列出所有本地和远程分支

- **`git branch -v`**

  查看每一个分支的最后一次提交

### 7.2 新建/切换

- **`git branch <branch-name>`**

  新建一个分支，但依然停留在当前分支

- **`git checkout -b <branch-name>`**

  新建一个分支，并切换到该分支

- **`git checkout <branch-name>`**

  切换到指定分支，并更新工作区

- **`git check -`**

  切换到上一分支

### 7.3 合并/删除

- **`git merge <branch>`**

  合并指定分支到当前分支

- **`git merge --no-ff -m "说点什么" <brach-name>`**

  不使用 fast-forward 方式合并，保留分支的 commit 历史（使用 Fast-forward 合并分支，在分支删除后会丢失分支的 commit 历史）

- **`git branch -d <branch-name>`**

  删除分支（合并后）

- **`git push origin --delete <branch-name>`**

  **`git branch -dr <remote/branch>`**

  删除远程分支

## 8. 标签

Git 可以给历史中的某一个提交打上标签，以示重要，也方便查看

### 5.1 查看标签

- **`git tag`**

  列出所有 tag

- **`git show <tagname>`**

  查看 tag 信息

### 5.2 操作标签

- **`git tag <tagname> <commit>`**

  在指定 commit 新建一个 tag（通常用于后期补标签）

- **`git checkout -b <branch-name> <tagname>`**

  在特定的 tag 上创建一个新分支

- **`git tag -d <tagname>`**

  删除本地 tag

### 5.3 推送标签

> 默认情况下，git push 命令并不会传送标签到远程仓库服务器上。 在创建完标签后你必须显式地推送标签到共享服务器上

- **`git push <remote> <tagname>`**

  提交指定 tag

- **`git push <remote> --tags`**

  提交所有 tag

- **`git push <remote> :refs/tags/<tagname>`**

  删除远程 tag

## 8. 远程仓库

### 8.1 查看

- **`git remote`**

  远程库信息

- **`git remote -v`**

  远程库更详细的信息

- **`git remote show <remote-name>`**

  显示某个远程仓库的信息

- **`git remote add <shortname> <url>`**

  添加一个新的远程仓库，并命名

### 8.2 推送

- **`git push <remote-name> <branch-name>`**

  上传本地指定分支到远程仓库

- **`git push <remote> --force`**

  强行推送当前分支到远程仓库，即使有冲突

- **`git push <remote> --all`**

  推送所有分支到远程仓库

### 8.3 拉取

- **`git fetch <remote-name>`**

  这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。

  注意：如果你使用 clone 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 “origin” 为简写。 所以，git fetch origin 会抓取克隆（或上一次抓取）后新推送的所有工作。 必须注意 git fetch 命令会将数据拉取到你的本地仓库 - 它并不会自动合并或修改你当前的工作。 当准备好时你必须手动将其合并入你的工作。

- **`git pull <remote> <branch>`**

  取回远程仓库的变化，并与本地分支**合并**

## 9. 命令行常用操作

- **`touch <filename>`**

  创建新文件

- **`mkdir <dir>`**

  创建一个文件夹

- **`cat <filename>`**

  查看文件内容

- **`code <filename>`**

  使用 VSCode 打开文件，不存在则新建。注意需要配置

- **`history`**

  历史记录

- **`pwd`**

  当前路径

- **`ls`**（list）

  列出当前目录下的所有文件（要显示隐藏文件使用`ls -a`）

- **`cd <dir>`**（change directory）

  切换目录（`cd ../` 切换到上一个目录），可以使用通配符`*`，`cd m*`：若当前目录下只有一个以`m`开头的文件夹，那就会进入到这个文件夹

- **`rm <filename>`**

  删除本地文件，但是未添加到暂存区（并没有将其从 git 的记录中剔除。注意区别 `git rm`）

  若要恢复这个文件，使用 `git checkout -- <filename>` —— 将工作区中的修改丢弃

- **`clear`**

  让当前行显示在可视区第一行（区别 `reset`）

- **`reset`**

  清空控制台，会删掉记录（区别 `clear`）

- **`exit`**

  退出 Terminal

## 注意

1. 暂存区是共用的，在不同分支切换注意

2. git 保存的不是文件的变化或者差异，而是一系列不同时刻的文件快照

## 参考资料

[速查表-阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

[速查表-GitHub](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)

[教程-廖雪峰](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000) 强烈推荐入门

[教程-Pro Git](https://git-scm.com/book/en/v2) 官方免费书籍

[git 的奇淫技巧](https://github.com/521xueweihan/git-tips) 很多小技巧
