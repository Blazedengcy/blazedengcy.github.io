# Chengyan Deng · 邓枨严 — Academic Homepage

无需安装依赖或执行构建的静态学术主页。默认英文，支持中文切换、手机导航、论文配图放大和 BibTeX 复制。

## 文件与预览

下载的 ZIP 中，以下文件位于最外层。解压后双击 `index.html` 即可预览；保留 `assets` 文件夹结构。

- `index.html`：个人介绍、论文、科研经历、教育及荣誉。
- `styles.css`：电脑、手机和打印样式。
- `app.js`：中英文切换、导航、图片与引用弹窗；`citations` 保存 BibTeX。
- `assets/`：头像、论文配图、网站图标。
- `assets/logos/`：华为、OPPO、南京大学、电子科技大学、合肥工业大学的机构标志。

开发目录中，上述网页文件位于 `dist/`。发布到 GitHub 时上传 `dist/` 内的内容，确保 `index.html` 在仓库最外层。

另附的 `chengyan-deng-homepage.html` 已把样式、脚本和图片内嵌，可单独下载打开；持续维护与发布建议使用 ZIP 中的分文件源码。

## 首次发布到 GitHub Pages

1. 登录 GitHub，以 `Blazedengcy` 为所有者创建仓库 `blazedengcy.github.io`。
2. 免费账号使用 `Public` 仓库。个人 GitHub Pro 可从私有仓库发布公开 Pages；仓库隐私与网站访问权限是两项不同设置。
3. 在仓库中选择 `Add file → Upload files`，上传解压后的 `index.html`、`styles.css`、`app.js` 和整个 `assets` 文件夹，提交到 `main`。
4. 进入 `Settings → Pages`，将 `Source` 设为 `Deploy from a branch`，分支选 `main`，目录选 `/(root)`，点击 `Save`。
5. 等待发布完成。预期网址为 `https://blazedengcy.github.io/`；从提交到发布可能需要最多约 10 分钟。

本源码包并不代表 GitHub 仓库已创建或网页已经上线；是否发布成功，以仓库的 Pages 设置与部署结果为准。

## 在线修改

在 GitHub 仓库打开目标文件，点击铅笔编辑按钮，修改后使用 `Commit changes` 提交到 `main`，Pages 将自动更新。

英文内容可直接编辑 HTML；对应中文保存在同一元素的 `data-zh` 属性中，两种语言应同步修改。论文引用在 `app.js` 的 `citations` 中更新。新增或更换论文图片时，同时检查 `img src` 和对应按钮的 `data-figure`。

个人简介已注明电子科技大学硕士导师于力（Li Yu），以及在南京大学接受张凯（Kai Zhang）老师科研指导的经历。两位老师姓名均链接到用户指定的主页。荣誉仅保留“国家奖学金”和“安徽省优秀毕业生”，没有添加获奖年份。

## 机构标志来源

机构标志用于标明个人教育和实习经历，保留原始颜色与比例。各标志权利归对应机构所有。

- Huawei：官网 https://www.huawei.com/en/ 使用的竖版 SVG，https://www.huawei.com/-/media/htemplate-home/1.0.1.20251205144752/components/assets/img/favicon-logo.svg 。
- OPPO：官网 https://www.oppo.com/en/ 的机构标志，https://www.oppo.com/content/dam/oppo/common/file/image/logo.png 。
- 南京大学：档案馆“南京大学校标”，https://dawww.nju.edu.cn/info/3061/69011.htm ；原图 https://dawww.nju.edu.cn/__local/8/D1/36/80BA42FDEAF0EFC33128F2704AE_A8B786CF_3D81E.jpg 。
- 电子科技大学：信息公开网官方章程封面内嵌校徽，https://xxgkw.uestc.edu.cn/__local/F/4D/16/4CD97B63EF422D92A64F7B09B4A_933C5274_B9C5D.pdf 。
- 合肥工业大学：学校“工大文化”页面 https://www.hfut.edu.cn/gdwh.htm ；原图 https://www.hfut.edu.cn/images/wh01.png 。

## 其他资料依据（2026-10-20）

- 用户提供的简历、导师链接及荣誉筛选要求。
- Li Yu：https://www.auto.uestc.edu.cn/info/1174/4407.htm
- Kai Zhang：https://cszn.github.io/
- GTASR：https://proceedings.mlr.press/v306/deng26e.html
- GTASR repository：https://github.com/Blazedengcy/GTASR
- IHMambaSR：https://doi.org/10.1016/j.patcog.2026.113057
- IHMambaSR repository：https://github.com/Blazedengcy/IHMambaSR
- OP4KSR：https://arxiv.org/abs/2605.13457
- GitHub Pages 文档：https://docs.github.com/en/pages/quickstart

布局参考用户提供的三份学术主页，网站代码与文案独立制作。
