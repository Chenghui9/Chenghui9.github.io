---
title: "How to start your own blog for free"
description: "How to create a blog with Astro blog templates and Github Pages"
tags: ["Personal blog", "Reasearch Homepage", "Project presentation", "note"]
pubDate: 2026-05-09
heroImage: '../../assets/blog-placeholder-1.jpg'
---

导师推荐我们建立自己的博客，用来记录学习笔记、科研想法、代码问题和生活记录。最开始我以为搭博客一定要买服务器、买域名、配置一堆复杂东西。后来发现，其实可以先用一个完全免费的方案开始：

```
Astro + GitHub Pages
```

这个方法不需要买服务器，也可以先不买域名。最后你会得到一个类似这样的免费网站：

```
https://yourname.github.io
```

这篇文章会从零开始记录整个过程，尽量写得适合完全没有网站经验的人。

## 1. 这个方案适合谁？

这个方法适合：

- 想免费拥有一个个人博客的人
- 想用 Markdown 写文章的人
- 想记录科研笔记、学习笔记或项目经验的人
- 不想一开始就买服务器和域名的人
- 愿意跟着教程复制命令的人

这个方法不太适合：

- 完全不想接触命令行的人
- 想做复杂后台、登录系统、数据库网站的人
- 只想像公众号一样打开网页直接写文章的人

简单来说，如果你想要一个长期属于自己的博客，并且愿意学习一点点基础操作，这个方案很合适。

## 2. 先理解整个流程

整个过程可以理解成这样：

```
在电脑上创建 Astro 博客
↓
把博客文件上传到 GitHub
↓
GitHub Actions 自动构建网站
↓
GitHub Pages 把网站发布到互联网上
```

几个名字可以先这样理解：

| 名词           | 可以怎么理解                   |
| -------------- | ------------------------------ |
| Astro          | 把 Markdown 文章变成网页的工具 |
| GitHub         | 存放博客代码和文章的地方       |
| GitHub Actions | 自动帮你构建和部署网站         |
| GitHub Pages   | 免费把网站发布到网上的服务     |

GitHub Pages 本质上是一个静态网站托管服务，可以从 GitHub 仓库发布网站文件；Astro 官方也支持用 GitHub Actions 把 Astro 网站部署到 GitHub Pages。

建议配图：这里可以放一张简单流程图，画出“本地电脑 → GitHub → GitHub Actions → GitHub Pages → 访问网站”。

## 3. 准备工具

你需要准备这些东西：

1. GitHub 账号
2. Node.js
3. Git
4. VS Code 或其他文本编辑器
5. PowerShell 或 CMD

Astro 当前要求 Node.js `v22.12.0` 或更高版本，并且不支持 v23 这种奇数版本。

安装好 Node.js 后，在 PowerShell 里输入：

```
node -v
npm -v
```

如果能看到版本号，就说明安装成功。

例如：

```
v24.15.0
11.2.1
```

如果你在 PowerShell 里运行 `npm -v` 时看到类似：

```
npm.ps1 cannot be loaded
```

这通常是 PowerShell 的脚本执行策略导致的。最简单的解决方法是先把 `npm` 写成：

```
npm.cmd
```

例如：

```
npm.cmd -v
```

后面的命令也都可以这样写。

成功标志：`node -v` 和 `npm.cmd -v` 都能显示版本号。

建议配图：Node.js 和 npm 版本检查成功的终端截图。

## 4. 创建 Astro 博客项目

先选择一个你想放博客的文件夹。例如我把它放在 D 盘：

```
cd D:\
mkdir Blog
cd Blog
```

然后运行：

```
npm.cmd create astro@latest yourname.github.io -- --template blog
```

这里要把 `yourname` 换成你的 GitHub 用户名。

例如，如果你的 GitHub 用户名是 `chenghui9`，就写：

```
npm.cmd create astro@latest chenghui9.github.io -- --template blog
```

Astro 官方推荐用 `npm create astro@latest` 来创建新项目，也支持通过 `--template` 参数使用模板。

中途如果它问你是否安装依赖，选择 Yes。

如果出现 timeout，不一定代表完全失败。你可以看项目文件夹是否已经创建出来。如果已经有了，比如：

```
chenghui9.github.io
```

那就进入项目手动安装依赖：

```
cd chenghui9.github.io
npm.cmd install
```

成功标志：项目文件夹中能看到 `package.json`、`astro.config.mjs`、`src` 等文件。

建议配图：项目文件夹截图，标出 `package.json` 和 `astro.config.mjs`。

## 5. 本地预览博客

进入项目目录：

```
cd D:\Blog\chenghui9.github.io
```

启动本地预览：

```
npm.cmd run dev
```

如果成功，会看到类似：

```
Local: http://localhost:4321/
```

在浏览器打开：

```
http://localhost:4321/
```

如果你看到了 Astro Blog 页面，说明本地博客已经可以运行了。

注意，这个地址只是你电脑上的本地预览。别人还不能通过这个地址访问你的网站。

成功标志：浏览器能打开 `http://localhost:4321/`，并看到 Astro Blog 页面。

建议配图：Astro Blog 本地预览截图。

## 6. 修改 Astro 配置

打开项目里的：

```
astro.config.mjs
```

把它改成类似这样：

```
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourname.github.io',
});
```

例如：

```
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chenghui9.github.io',
});
```

如果你的仓库名是：

```
username.github.io
```

这种特殊形式，一般不需要设置 `base`。Astro 官方说明，如果仓库名符合 `<username>.github.io` 这种模式，可以跳过 `base` 设置。

成功标志：`astro.config.mjs` 里有正确的 `site` 地址。

## 7. 创建 GitHub 仓库

打开 GitHub，新建一个 repository。

仓库名写：

```
yourname.github.io
```

例如：

```
chenghui9.github.io
```

这里最好使用小写。GitHub 官方文档说明，用户主页仓库名应写成 `username.github.io`，如果用户名包含大写字母，仓库名需要使用小写。

选择：

```
Public
```

然后创建仓库。

这里建议先不要勾选 README，因为我们本地已经有 Astro 项目文件了。

成功标志：GitHub 上出现一个新的空仓库，名字是 `yourname.github.io`。

建议配图：GitHub 新建仓库页面截图。

## 8. 把本地博客上传到 GitHub

回到 PowerShell，确认你在项目根目录：

```
cd D:\Blog\chenghui9.github.io
```

检查当前文件：

```
dir
```

你应该能看到：

```
package.json
astro.config.mjs
src
public
```

然后运行：

```
git init
git add .
git commit -m "Initial Astro blog"
```

如果出现：

```
Author identity unknown
```

说明 Git 还不知道你的名字和邮箱。运行：

```
git config --global user.name "yourname"
git config --global user.email "your-email@example.com"
```

然后再运行：

```
git commit -m "Initial Astro blog"
```

接下来连接 GitHub 仓库：

```
git branch -M main
git remote add origin https://github.com/yourname/yourname.github.io.git
git push -u origin main
```

把 `yourname` 换成你的 GitHub 用户名。

例如：

```
git remote add origin https://github.com/chenghui9/chenghui9.github.io.git
git push -u origin main
```

如果出现：

```
Repository not found
```

通常说明 GitHub 仓库还没创建，或者你登录错了 GitHub 账号。

成功标志：刷新 GitHub 仓库页面后，能看到本地项目里的文件已经上传上去了。

## 9. 添加 GitHub Pages 自动部署文件

现在要告诉 GitHub：

> 每次我上传博客修改后，请你自动帮我构建并发布网站。

需要创建这个文件：

```
.github/workflows/deploy.yml
```

在项目根目录运行：

```
mkdir .github -ErrorAction SilentlyContinue
mkdir .github\workflows -ErrorAction SilentlyContinue
notepad .github\workflows\deploy.yml
```

如果记事本问你是否创建新文件，选择 Yes。

然后复制下面内容：

```
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v6

      - name: Install, build, and upload your site
        uses: withastro/action@v6

  deploy:
    needs: build
    runs-on: ubuntu-latest

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
```

Astro 官方部署文档中也使用 `.github/workflows/deploy.yml`，通过 `withastro/action@v6` 构建，并通过 `actions/deploy-pages@v5` 发布到 GitHub Pages。

保存后运行：

```
git add .
git commit -m "Add GitHub Pages workflow"
git push
```

成功标志：GitHub 仓库里可以看到 `.github/workflows/deploy.yml` 文件。

## 10. 打开 GitHub Pages

进入 GitHub 仓库页面，点击：

```
Settings → Pages
```

在左边栏里，Pages 通常在：

```
Code and automation → Pages
```

进入后找到：

```
Build and deployment → Source
```

选择：

```
GitHub Actions
```

Astro 官方部署说明也要求在 GitHub Pages 设置里选择 GitHub Actions 作为 Source。

然后点击仓库上方的：

```
Actions
```

你应该会看到一个 workflow 正在运行，名字可能是：

```
Deploy to GitHub Pages
```

如果它变成绿色勾，说明部署成功。

成功标志：

```
build ✅
deploy ✅
Status: Success
```

建议配图：GitHub Actions 成功页面截图，标出绿色勾。

## 11. 打开你的免费网站

部署成功后，打开：

```
https://yourname.github.io
```

例如：

```
https://chenghui9.github.io
```

如果刚部署成功后打不开，可以等 1–3 分钟再刷新。

成功标志：浏览器能打开你的网站，并看到 Astro Blog 页面。

## 12. 写第一篇博客

Astro blog 模板里的文章通常放在：

```
src/content/blog/
```

你可以新建一个 Markdown 文件，例如：

```
src/content/blog/my-first-post.md
```

文章开头会有一段这样的内容：

```
---
title: 'My First Blog Post'
description: 'This is my first blog post built with Astro and GitHub Pages.'
pubDate: 'May 10 2026'
---
```

这部分叫 frontmatter，可以理解为“文章信息卡”：

| 字段        | 含义                     |
| ----------- | ------------------------ |
| title       | 文章标题                 |
| description | 文章简介                 |
| pubDate     | 发布时间                 |
| heroImage   | 封面图，可选，取决于模板 |

第二个 `---` 后面才是正文：

```
# My First Blog Post

This is my first blog post.

I built this blog using Astro and GitHub Pages.
```

写完后，先本地预览：

```
npm.cmd run dev
```

确认没有问题后上传：

```
git add .
git commit -m "Add first blog post"
git push
```

几分钟后，线上网站也会更新。

## 13. 以后怎么更新博客？

以后每次写完新文章，只需要三步：

```
git add .
git commit -m "Update blog"
git push
```

GitHub Actions 会自动重新部署网站。

也就是说，你不需要每次手动上传网页。只要 `git push`，网站就会自动更新。

## 14. 常见问题

### 问题 1：PowerShell 提示 `npm.ps1 cannot be loaded`

可以临时把 `npm` 写成：

```
npm.cmd
```

例如：

```
npm.cmd install
npm.cmd run dev
```

### 问题 2：Astro 创建项目时 timeout

可以进入项目文件夹后手动安装：

```
npm.cmd install
```

### 问题 3：Git 提示 Author identity unknown

设置用户名和邮箱：

```
git config --global user.name "yourname"
git config --global user.email "your-email@example.com"
```

### 问题 4：Git push 提示 `Repository not found`

检查三件事：

1. GitHub 上是否已经创建仓库
2. 仓库名是否是 `yourname.github.io`
3. 浏览器登录的 GitHub 账号是否正确

### 问题 5：GitHub Actions 失败，并显示 Jekyll

Astro 网站应该用 GitHub Actions 部署。如果看到 Jekyll 报错，通常说明 GitHub Pages 还在用默认构建方式。去：

```
Settings → Pages → Source
```

选择：

```
GitHub Actions
```

### 问题 6：Actions 已经成功，但网站还打不开

等几分钟再刷新。GitHub Pages 有时需要一点时间生效。

## 15. 总结

用 Astro + GitHub Pages 搭建免费博客，大致流程是：

```
安装 Node.js 和 Git
↓
创建 Astro blog 项目
↓
本地预览
↓
创建 GitHub 仓库
↓
上传代码
↓
添加 GitHub Actions 部署文件
↓
打开 GitHub Pages
↓
开始写 Markdown 博客
```

这个方案的最大优点是：

- 免费
- 文章可以用 Markdown 管理
- 不需要买服务器
- 可以长期维护
- 适合做个人主页、科研笔记和技术博客

对小白来说，最难的地方不是写博客，而是第一次配置环境。只要第一次部署成功，后面更新文章就很简单了：

```
git add .
git commit -m "Update blog"
git push
```