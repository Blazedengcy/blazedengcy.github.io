# Chengyan Deng · 邓枨严 — Academic Homepage

无需安装依赖或执行构建的静态学术主页。页面固定使用英文，支持手机导航、论文配图放大和 BibTeX 复制；保留中文姓名“邓枨严”及奖项的官方中文名称说明。

## 文件与预览

下载的 ZIP 中，以下文件位于最外层。解压后双击 `index.html` 即可预览；保留 `assets` 文件夹结构。

- `index.html`：个人介绍、News、论文、科研经历、教育、荣誉及学术服务。
- `styles.css`：电脑、手机和打印样式。
- `app.js`：导航、图片与引用弹窗；`citations` 保存 BibTeX。
- `assets/`：头像、论文配图、网站图标。
- `assets/logos/`：华为、OPPO、南京大学、清华大学、电子科技大学、合肥工业大学的机构标志。

开发目录中，上述网页文件位于 `dist/`。发布到 GitHub 时上传 `dist/` 内的内容，确保 `index.html` 在仓库最外层。

另附的 `chengyan-deng-homepage.html` 已把样式、脚本和图片内嵌，可单独下载打开；持续维护与发布建议使用 ZIP 中的分文件源码。

## 更新你现有的 GitHub 网页

你提供的图片地址以 `https://blazedengcy.github.io/dcy.github.io/` 开头，对应 GitHub Pages 项目网站。若当前使用的仓库是 `Blazedengcy/dcy.github.io`，继续更新该仓库即可，无需新建仓库或更改名称。

1. 下载并解压这份 ZIP，不要直接将 ZIP 文件作为网页上传。
2. 打开现有仓库 `https://github.com/Blazedengcy/dcy.github.io`。
3. 在原来放置 `index.html` 的目录中，选择 `Add file → Upload files`，上传并替换新版 `index.html`、`styles.css`、`app.js` 和 `assets` 文件夹，然后 `Commit changes`。
4. 本次头像使用用户新上传的 `dcy(1).png`（1086 × 1448），按原始字节复制为 `assets/dcy.png`。更新照片时，除了上传 `index.html`，还需同时覆盖 `assets/dcy.png`；保持 `assets` 文件夹结构即可。新增的清华大学徽章也随 `assets/logos/` 一并上传。华为标志已经内嵌到 `index.html`，不依赖单独上传的 SVG。
5. 等待 Pages 部署完成后，打开 `https://blazedengcy.github.io/dcy.github.io/`。如果仍显示旧内容，使用浏览器强制刷新。

此版本在本地完成了更新；它不会自动替换你 GitHub 仓库中的文件。发布是否成功，以仓库的 Pages 设置和部署结果为准。

## 如果仓库还没有启用 GitHub Pages

在现有仓库上传 `index.html`、`styles.css`、`app.js` 和整个 `assets` 文件夹，确保 `index.html` 在发布目录最外层。

进入 `Settings → Pages`，将 `Source` 设为 `Deploy from a branch`，分支选实际存放网页的分支（通常为 `main`），目录选 `/(root)`，点击 `Save`。更新可能需要最多约 10 分钟。

免费账号使用 `Public` 仓库。个人 GitHub Pro 可从私有仓库发布公开 Pages；仓库隐私与网站访问权限是两项不同设置。

网址取决于仓库名称：`dcy.github.io` 这样的项目仓库通常使用 `https://blazedengcy.github.io/dcy.github.io/`；只有名为 `blazedengcy.github.io` 的个人主页仓库才使用 `https://blazedengcy.github.io/`。如配置了自定义域名，则以 Pages 设置中显示的网址为准。

## 在线修改

在 GitHub 仓库打开目标文件，点击铅笔编辑按钮，修改后使用 `Commit changes` 提交到 `main`，Pages 将自动更新。

修改页面文字时，直接编辑 HTML 中的英文内容即可。论文引用在 `app.js` 的 `citations` 中更新。新增或更换论文图片时，同时检查 `img src` 和对应按钮的 `data-figure`。

| 想修改的内容 | 打开哪个文件 | 搜索什么 |
| --- | --- | --- |
| 开头个人简介、研究兴趣 | `index.html` | `class="bio"` |
| News 动态 | `index.html` | `class="news-list"` |
| 论文标题、作者及链接 | `index.html` | `id="gtasr"`、`id="ihmambasr"`、`id="op4ksr"` |
| 实习经历、教育、荣誉 | `index.html` | `id="experience"`、`id="education"`、`id="honors"` |
| Academic Services | `index.html` | `id="services"` |
| 三篇论文的 BibTeX | `app.js` | `const citations` |
| 字体、间距、颜色、姓名字距 | `styles.css` | 对应样式；中文姓名为 `.name-chinese` |

仅更新文字通常只需修改 `index.html`。本版包含样式调整和头像替换，发布时需一并上传 `styles.css` 和 `assets` 文件夹；`app.js` 中保留已更新的论文引用。

## 本版内容说明

- 简介顺序为：电子科技大学研三 → 导师 Li Yu → 南京大学 Kai Zhang 指导关系 → 毕业后前往清华大学（Tsinghua University）读博，导师为 Prof. Wenming Yang → 华为现任研究实习、此前 OPPO → 合肥工业大学学士学位。随后单独说明目前研究图像与视频生成，此前研究图像超分辨率；当前研究方向不再加粗。
- 兴趣标签为 Image generation、Video generation 和 Image super-resolution。
- 教育经历最上方为 Tsinghua University，Ph.D. (incoming)，Sep. 2027 — Jun. 2031 (expected)，明确为未来入学计划。电子科技大学与合肥工业大学保留学校、M.Eng. / B.Eng. 和日期，移除专业、绩点及排名。
- News 首条为 2026 年 10 月获得国家奖学金。ICML 录用时间为 2026 年 5 月，Pattern Recognition 录用时间为 2026 年 1 月；News 中的 GTASR、IHMambaSR 均为普通文字，不附超链接。
- Publications 中的 Paper、Code 等链接保持原样，GTASR 论文链接指向 arXiv；三条 BibTeX 按用户提供的条目更新。
- 论文标注：GTASR 仅保留 ICML 2026；OP4KSR 为 Preprint + Under review at AAAI 2026。
- 华为、OPPO、南京大学经历仅保留日期、标志、机构和职务；移除各条末尾研究介绍。
- Academic Services 使用一个 Reviewer 标题，下列 AAAI 2026、2027，ECCV 2026，以及 Pattern Recognition。
- 荣誉按时间排列：国家奖学金（2026 年 10 月）、Huawei Terminal Camera Academic Star（2025 年 10 月，普通文字，不附超链接）、安徽省优秀毕业生（2024 年 5 月）。
- 联系句为 “Looking for collaboration, kindly contact me via email.”；侧栏 Email 与联系句中的 email 两处入口均指向 `mailto:dengchengyan@std.uestc.edu.cn`。
- 左侧照片与中英文姓名居中显示，中文姓名“邓枨严”不增加字间距；身份简化为 Third-year M.Eng. Student，地点为 Chengdu & Shanghai, China。移除 Currently at Huawei 状态说明，学校名称以普通文字显示，不附超链接。教育经历中不重复列出 Advisor，导师信息在开头简介中保留。

## 机构标志来源

机构标志用于标明个人教育和实习经历，保留原始颜色与比例。各标志权利归对应机构所有。

- Huawei：官网 https://www.huawei.com/en/ 使用的竖版 SVG，https://www.huawei.com/-/media/htemplate-home/1.0.1.20251205144752/components/assets/img/favicon-logo.svg 。
- OPPO：官网 https://www.oppo.com/en/ 的机构标志，https://www.oppo.com/content/dam/oppo/common/file/image/logo.png 。
- 南京大学：档案馆“南京大学校标”，https://dawww.nju.edu.cn/info/3061/69011.htm ；原图 https://dawww.nju.edu.cn/__local/8/D1/36/80BA42FDEAF0EFC33128F2704AE_A8B786CF_3D81E.jpg 。
- 清华大学：官方章程 PDF 第 15 页“附件一 清华大学校徽”内嵌原图，https://www.tsinghua.edu.cn/__local/C/B6/1C/5682B1124834BFE4B7BB43744CF_C7C409E3_C2FAA.pdf ；官方视觉形象页面 https://vi.tsinghua.edu.cn/gk/xxbz/xh/bzjbzsy.htm 。原像素解码为 `assets/logos/tsinghua.png`（554 × 385，白底），保留原始颜色与构图。
- 电子科技大学：信息公开网官方章程封面内嵌校徽，https://xxgkw.uestc.edu.cn/__local/F/4D/16/4CD97B63EF422D92A64F7B09B4A_933C5274_B9C5D.pdf 。
- 合肥工业大学：学校“工大文化”页面 https://www.hfut.edu.cn/gdwh.htm ；原图 https://www.hfut.edu.cn/images/wh01.png 。

## 其他资料依据（2026-10-20）

- 用户提供的简历、导师链接及荣誉筛选要求。
- Li Yu：https://www.auto.uestc.edu.cn/info/1174/4407.htm
- Kai Zhang：https://cszn.github.io/
- Wenming Yang：https://scholar.google.com/citations?user=vsE4nKcAAAAJ&hl=zh-CN
- GTASR：https://arxiv.org/abs/2602.24240
- GTASR repository：https://github.com/Blazedengcy/GTASR
- IHMambaSR：https://doi.org/10.1016/j.patcog.2026.113057
- IHMambaSR repository：https://github.com/Blazedengcy/IHMambaSR
- OP4KSR：https://arxiv.org/abs/2605.13457
- GitHub Pages 文档：https://docs.github.com/en/pages/quickstart

布局参考用户提供的三份学术主页，网站代码与文案独立制作。

本轮排版修订：正文与辅助文字适度放大，其中论文类型标签和投稿状态均为 12px；简介中的当前研究方向“图像与视频生成”使用正文常规字重。

当前头像：用户新上传的 `dcy(1).png`（1086 × 1448），按原始字节复制到 `dist/assets/dcy.png`，网页引用 `assets/dcy.png`。
