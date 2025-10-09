# dwrp.github.io

[![Preview](https://img.shields.io/badge/preview-在线预览-brightgreen)](https://dwrp.github.io)
[![License](https://img.shields.io/badge/许可证-MIT-blue)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/作者-Douglas%20Pardim-orange)](https://github.com/dwrp)
[![CI/CD](https://github.com/dwrp/dwrp.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/dwrp/dwrp.github.io/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)

> 🌍 **语言**: [English](../README.md) | [Português](./README-pt-BR.md) | [Español](./README-es.md) | **中文**

欢迎来到我的个人网站！此仓库包含我的专业作品集的源代码，我在这里展示我的职业历程、掌握的技术、开发的项目以及联系信息。

## 🎯 关于项目

采用最现代的 Web 技术构建的个人网站，专注于性能、SEO 和用户体验。该项目实现了简洁、可扩展且完全针对搜索引擎优化的架构。

### ✨ 特色

- **现代化登陆页**: 流畅动画和鲜艳渐变的现代设计
- **完全响应式**: 在桌面、平板和移动设备上的完美体验
- **多语言**: 完整支持葡萄牙语、英语、西班牙语和简体中文
- **SEO 优化**: 完整的 meta 标签、Open Graph、Twitter Cards 和 JSON-LD structured data
- **性能**: 使用 Next.js 15 和 React 19 优化的静态构建
- **主题**: 明暗模式切换

## 🚀 使用的技术

### 核心
- **[Next.js 15.5](https://nextjs.org/)** - 具有 SSG/SSR 功能的 React 框架
- **[React 19.2](https://react.dev/)** - 用于构建用户界面的 JavaScript 库
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript 的类型化超集

### UI/UX
- **[Tailwind CSS](https://tailwindcss.com/)** - 实用优先的 CSS 框架
- **[Shadcn UI](https://ui.shadcn.com/)** - 可重用的 UI 组件库
- **[Framer Motion](https://www.framer.com/motion/)** - React 动画库
- **[Lucide Icons](https://lucide.dev/)** - 现代图标库

### 国际化
- **[next-intl](https://next-intl-docs.vercel.app/)** - Next.js 国际化
- 原生支持 4 种语言（pt-BR、en、es、zh-CN）

### DevOps
- **[GitHub Pages](https://pages.github.com/)** - 静态站点托管
- **[GitHub Actions](https://github.com/features/actions)** - 自动化 CI/CD

## 📋 功能

### 页面部分

- **🎨 Hero**: 展示职业统计数据和社交链接
- **👤 关于我**: 专业信息和核心能力
- **💼 经验**: 详细职业历史的交互式时间线
- **🛠️ 技能**: 按领域分类的技能（前端、后端、移动端、DevOps）
- **🎓 教育**: 学术背景和专业认证
- **🚀 项目**: 按类型过滤的精选项目展示
- **📧 联系**: 联系信息和社交媒体链接

### 技术特性

- ✅ **固定导航**: 带有活动部分指示器的持久菜单
- ✅ **响应式菜单**: 移动设备的侧边导航
- ✅ **语言切换**: 支持 4 种语言，在 localStorage 中持久化
- ✅ **主题切换**: 明暗模式，用户偏好设置
- ✅ **流畅动画**: 使用 Framer Motion 的过渡和效果
- ✅ **完整 SEO**: Meta 标签、Open Graph、Twitter Cards、JSON-LD
- ✅ **动态站点地图**: 自动生成以实现更好的索引
- ✅ **优化的 Robots.txt**: 爬虫配置

## 🏗️ 项目结构

```
dwrp.github.io/
├── docs/                    # 项目文档
│   ├── README-pt-BR.md     # 葡萄牙语文档
│   ├── README-es.md        # 西班牙语文档
│   ├── README-zh-CN.md     # 中文文档
│   └── project-structure.md # 详细项目结构
├── messages/               # i18n 翻译文件
│   ├── en.json            # 英语
│   ├── pt-BR.json         # 巴西葡萄牙语
│   ├── es.json            # 西班牙语
│   └── zh-CN.json         # 简体中文
├── public/                # 静态资源
│   ├── cover.jpeg         # 预览图片（Open Graph）
│   ├── cover2.jpeg        # 备用图片
│   ├── dwrp.svg           # Logo
│   └── favicon.ico        # Favicon
├── src/
│   ├── app/               # App Router（Next.js 15）
│   │   ├── layout.tsx     # 带 metadata 的根布局
│   │   ├── page.tsx       # 主页面
│   │   ├── page-content.tsx # 带 i18n 和 JSON-LD 的内容
│   │   ├── robots.ts      # robots.txt 生成器
│   │   ├── sitemap.ts     # sitemap.xml 生成器
│   │   └── sections/      # 主要部分（Header、Main、Footer）
│   ├── components/
│   │   ├── sections/      # 部分组件
│   │   └── ui/            # Shadcn UI 组件
│   ├── hooks/
│   │   └── useClientLocale.ts # 语言管理 hook
│   ├── lib/
│   │   ├── metadata.ts    # SEO 和 JSON-LD 实用程序
│   │   └── utils.ts       # 通用实用程序
│   ├── store/             # 全局状态（Zustand）
│   ├── styles/            # 全局样式
│   └── locales.ts         # 语言配置
├── CHANGELOG.md           # 更改历史
├── package.json
└── README.md              # 主文档

```

有关结构的更多详细信息，请参阅 [project-structure.md](./project-structure.md)。

## 🔧 如何使用

### 先决条件

- Node.js 18+ 或更高版本
- Yarn 或 NPM

### 安装

```bash
# 克隆仓库
git clone https://github.com/dwrp/dwrp.github.io.git

# 进入目录
cd dwrp.github.io

# 安装依赖
yarn install
# 或
npm install
```

### 开发

```bash
# 启动开发服务器
yarn dev
# 或
npm run dev

# 访问 http://localhost:3000
```

### 生产构建

```bash
# 生成静态构建
yarn build
# 或
npm run build

# 构建将在 /out 目录中生成
```

### 部署

当推送到 `main` 分支时，通过 GitHub Actions 自动部署。应用程序发布到 GitHub Pages。

## 🌐 国际化（i18n）

项目支持 4 种语言：

- 🇧🇷 **巴西葡萄牙语**（pt-BR）- 默认语言
- 🇺🇸 **英语**（en）
- 🇪🇸 **西班牙语**（es）
- 🇨🇳 **简体中文**（zh-CN）

翻译通过 `messages/` 文件夹中的 JSON 文件管理。用户选择的语言存储在 localStorage 中，以在会话之间持久化。

## 🎨 自定义

### 颜色和主题

可以通过编辑 `src/styles/globals.css` 文件自定义颜色。该项目使用 CSS 变量以便于自定义：

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... 其他变量 */
}
```

### 内容

网站的所有内容都可以在 `messages/*.json` 中的翻译文件中编辑。只需更新所需语言的文本即可。

### 图片

替换 `public/` 文件夹中的图片，保持相同的文件名，或更新 `src/lib/metadata.ts` 中的引用。

## 📊 SEO 和性能

该项目实现了 SEO 最佳实践：

- **完整的 Meta 标签**：标题、描述、关键词、作者
- **Open Graph**：完整支持 Facebook、LinkedIn
- **Twitter Cards**：带图片的优化卡片
- **JSON-LD**：Structured data（Person、Website、Breadcrumb）
- **Sitemap XML**：自动生成
- **Robots.txt**：配置为优化索引
- **规范 URL**：避免重复内容
- **Hreflang**：适当的多语言支持

### Lighthouse 分数

网站在 Lighthouse 中获得优秀分数：
- 性能：95+
- 可访问性：100
- 最佳实践：100
- SEO：100

## 🤝 贡献

欢迎贡献！请随时：

1. Fork 项目
2. 创建功能分支（`git checkout -b feature/MyFeature`）
3. 提交更改（`git commit -m 'Add MyFeature'`）
4. 推送到分支（`git push origin feature/MyFeature`）
5. 打开 Pull Request

## 📄 许可证

该项目根据 [MIT 许可证](../LICENSE) 授权 - 有关详细信息，请参阅 LICENSE 文件。

## 📞 联系

- **网站**：[https://dwrp.github.io](https://dwrp.github.io)
- **GitHub**：[@dwrp](https://github.com/dwrp)
- **LinkedIn**：[Douglas Pardim](https://linkedin.com/in/douglaspardim)
- **邮箱**：douglas.pardim@exemplo.com

## 🙏 致谢

- [Next.js Team](https://nextjs.org/) - 出色的框架
- [Vercel](https://vercel.com/) - 灵感和工具
- [Shadcn](https://ui.shadcn.com/) - 优雅的 UI 组件
- 开源社区

---

**用 ❤️ 构建，作者 Douglas Pardim**

*最后更新：2025年1月*

