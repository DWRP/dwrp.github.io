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
- **[next-intl](https://next-intl-docs.vercel.app/)** — client-side i18n for static export
- Languages: `en`, `pt-BR`, `es`, `zh-CN`

### DevOps
- **[GitHub Pages](https://pages.github.com/)** — static hosting
- **[GitHub Actions](https://github.com/features/actions)** — CI/CD with pnpm

## Features

- Hero, About, Experience, Skills, Education, Projects, Contact
- Fixed navigation with active section indicator
- Language switcher with localStorage persistence
- Dark / light theme with persistence
- SEO: metadata, Open Graph, Twitter Cards, JSON-LD in static HTML
- Dynamic sitemap and robots.txt

> **Note on i18n + SSG:** language switching is client-side (required for `output: "export"`). Default metadata and JSON-LD ship in English; the HTML `lang` attribute updates in the browser.

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
# http://localhost:3000
```

### Production Build

```bash
pnpm build
# output in /out
```

### Other scripts

```bash
pnpm lint
pnpm typecheck
pnpm analyze   # bundle analyzer (ANALYZE=true)
```

## License

[MIT](./LICENSE)

## Contact

- **Website**: [https://dwrp.github.io](https://dwrp.github.io)
- **GitHub**: [@dwrp](https://github.com/dwrp)
- **LinkedIn**: [Douglas Pardim](https://linkedin.com/in/douglas-pardim)

---

Built by Douglas Pardim · Last updated: November 2026
