# Windows 备忘清单

## 将 U 盘启动盘恢复

1. 磁盘管理里面查看 U 盘的索引（基本上都是 **1**）

2. `Win + R` 输入 `cmd` 打开 DOS 命令运行环境，输入 **`diskpart`**，回车确定，打开磁盘的 DOS 命令运行环境

3. 输入 **`select disk 1`**（即选择磁盘 1）选择 U 盘，按下回车，然后再输入 clean 命令，按下回车键进行清除

4. 在磁盘管理的面板中，右键点击 U 盘，选择新建简单卷，即可开始向导，一直点击“下一步”直至完成

> [参考](https://jingyan.baidu.com/article/2f9b480dedf94e41ca6cc272.html)
