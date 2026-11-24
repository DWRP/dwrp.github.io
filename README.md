# dwrp.github.io

[![Preview](https://img.shields.io/badge/preview-live-brightgreen)](https://dwrp.github.io)
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![Author](https://img.shields.io/badge/author-Douglas%20Pardim-orange)](https://github.com/dwrp)
[![CI/CD](https://github.com/dwrp/dwrp.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/dwrp/dwrp.github.io/actions)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

> **Languages**: **English** | [Português](./docs/README-pt-BR.md) | [Español](./docs/README-es.md) | [中文](./docs/README-zh-CN.md)
>
> **Documentation**: [Full Documentation](./docs/) | [Project Structure](./docs/project-structure.md) | [Changelog](./docs/CHANGELOG.md)

Personal portfolio site: introduction, skills, experience, projects, and contact.

## Technologies

### Core
- **[Next.js 16](https://nextjs.org/)** — App Router with static export
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — typed JavaScript

### UI/UX
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first CSS
- **[Shadcn UI](https://ui.shadcn.com/)** — reusable components
- **[Framer Motion](https://www.framer.com/motion/)** — animation
- **[Lucide Icons](https://lucide.dev/)** — icons

### Internationalization
- **[next-intl](https://next-intl.dev/)** — App Router i18n with per-locale SSG (`/[locale]/`)
- Languages: `en`, `pt-BR`, `es`, `zh-CN`

### DevOps
- **[GitHub Pages](https://pages.github.com/)** — static hosting
- **[GitHub Actions](https://github.com/features/actions)** — CI/CD with pnpm
- **[Playwright](https://playwright.dev/)** — E2E (i18n, responsive, performance)

## Features

- Hero, About, Experience, Skills, Education, Projects, Contact
- Fixed navigation with active section indicator
- Locale URLs (`/en/`, `/pt-BR/`, …) with static HTML per language
- Dark / light theme with persistence
- SEO: per-locale metadata, Open Graph, Twitter Cards, JSON-LD, hreflang
- Dynamic sitemap and robots.txt

## Getting Started

### Prerequisites
- Node.js 22+
- [pnpm](https://pnpm.io/) 9+ (lockfile managed via `packageManager` field)

### Installation

```bash
git clone https://github.com/dwrp/dwrp.github.io.git
cd dwrp.github.io
pnpm install
```

### Development

```bash
pnpm dev
# http://localhost:3000/en/
```

### Production Build

```bash
pnpm build
# output in /out (root redirects to /en/)
```

### Other scripts

```bash
pnpm lint
pnpm typecheck
pnpm analyze     # bundle analyzer (ANALYZE=true)
pnpm test:e2e    # Playwright against out/ (run build first)
pnpm test:e2e:ui
```

## License

[MIT](./LICENSE)

## Contact

- **Website**: [https://dwrp.github.io](https://dwrp.github.io)
- **GitHub**: [@dwrp](https://github.com/dwrp)
- **LinkedIn**: [Douglas Pardim](https://linkedin.com/in/douglas-pardim)

---

Built by Douglas Pardim · Last updated: November 2026
