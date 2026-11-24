# Project Structure Documentation

## Overview

This document describes the structure of **dwrp.github.io** — a personal portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Project Architecture

The project follows the Next.js App Router with:

- Static Site Generation (`output: "export"`)
- Client-side internationalization (compatible with static export)
- SEO via metadata, Open Graph, Twitter Cards, and JSON-LD
- Modular section components
- Zustand for theme, locale sync, and active menu state

Related docs:

- [Spec-Driven Development](./sdd.md)
- [Product & module specs](./specs/)
- [Changelog](./CHANGELOG.md)

## Root Directory Structure

```
dwrp.github.io/
├── .github/
│   └── workflows/
│       └── main.yml          # Build + deploy to GitHub Pages (pnpm)
├── .cursor/
│   └── rules/
│       └── sdd.mdc           # Cursor rule for Spec → Implement → Verify
├── docs/
│   ├── README-pt-BR.md
│   ├── README-es.md
│   ├── README-zh-CN.md
│   ├── CHANGELOG.md
│   ├── project-structure.md  # This file
│   ├── sdd.md                # SDD workflow
│   └── specs/                # Product and module specs
├── messages/                 # i18n catalogs
│   ├── en.json
│   ├── pt-BR.json
│   ├── es.json
│   └── zh-CN.json
├── public/                   # Static assets copied to /out
│   ├── cover.jpeg
│   ├── cover2.jpeg
│   ├── dwrp.svg
│   └── favicon.ico
├── src/                      # Application source
├── AGENTS.md                 # Entry point for coding agents
├── components.json           # shadcn/ui config
├── eslint.config.mjs
├── next.config.mjs           # output: "export", trailingSlash, images
├── package.json              # packageManager: pnpm
├── pnpm-lock.yaml
├── pnpm-workspace.yaml       # allowBuilds for native deps (not a multi-app monorepo)
├── postcss.config.mjs        # Tailwind 4 PostCSS plugin
├── README.md
└── tsconfig.json
```

Generated (not committed as source of truth): `.next/`, `out/`, `node_modules/`.

## Source Directory (`src/`)

### App Router (`src/app/`)

```
src/app/
├── layout.tsx            # Root layout + generateMetadata (default locale en)
├── page.tsx              # Entry → PageContent
├── page-content.tsx      # Client shell: i18n provider, theme class, JSON-LD, sections
├── robots.ts             # /robots.txt
├── sitemap.ts            # /sitemap.xml
└── sections/
    ├── Header.tsx        # Nav, locale select, theme toggle
    ├── Main.tsx          # Main content wrapper
    └── Footer.tsx        # Footer links and credits
```

**Key files:**

- **`layout.tsx`**: HTML shell, global CSS, SEO metadata via `generateSeoMetadata("en")` at build time.
- **`page-content.tsx`**: Loads `messages/{locale}.json`, wraps `NextIntlClientProvider`, syncs `document.documentElement.lang` and `.dark` class, injects JSON-LD, composes Header / Main sections / Footer.
- **`robots.ts`**: Allows `/`, disallows `/private/`, points to sitemap.
- **`sitemap.ts`**: Single URL for the site; language alternates currently list `en` and `pt-BR` (client i18n still supports four locales).

### Components (`src/components/`)

```
src/components/
├── sections/
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── SkillsSection.tsx
│   ├── EducationSection.tsx
│   ├── ProjectsSection.tsx
│   └── ContactSection.tsx
├── ui/                   # shadcn-style primitives
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── select.tsx
│   └── textarea.tsx
├── icons/
│   └── brand.tsx
└── Loading.tsx
```

Section components use next-intl translations, responsive Tailwind layouts, Framer Motion where appropriate, and semantic HTML / ARIA for accessibility.

### Hooks, lib, store, styles

```
src/hooks/
└── useClientLocale.ts    # preferred-locale in localStorage + browser detect

src/lib/
├── metadata.ts           # SEO Metadata + Person / Breadcrumb / WebSite JSON-LD
└── utils.ts              # cn() via clsx + tailwind-merge

src/store/
└── app.ts                # Zustand: theme, lang, activeMenu (persist key "app")

src/styles/
└── globals.css           # Tailwind 4 @import, @theme inline, :root / .dark tokens

src/locales.ts            # locales, Locale type, defaultLocale ("en")
```

**`useClientLocale`:** reads/writes `preferred-locale`, detects `pt` / `es` / `zh` / default `en`, exposes `[locale, setLocale]`.

**`useAppStore`:** `theme` (`light` | `dark`, default `dark`), `lang`, `activeMenu`, persisted under localStorage key `app`.

**Styling:** Tailwind CSS 4 via `@import "tailwindcss"` and `@theme inline` in CSS — there is no `tailwind.config.ts`.

## Internationalization

Locales: `en` (default), `pt-BR`, `es`, `zh-CN` — defined in `src/locales.ts`.

Catalog shape (each `messages/*.json`):

```json
{
  "Index": {
    "nav": {},
    "hero": {},
    "about": {},
    "experience": {},
    "skills": {},
    "education": {},
    "projects": {},
    "contact": {},
    "footer": {},
    "seo": {}
  }
}
```

i18n is **client-side only** (no middleware, no `/[locale]` routes) so static export to GitHub Pages remains valid.

## Build Output (`out/`)

Produced by `pnpm build` (`next build` with `output: "export"`):

```
out/
├── _next/
├── 404.html
├── index.html
├── robots.txt
├── sitemap.xml
└── …assets from public/
```

## Key Patterns

1. **SSG / static export** — entire site pre-rendered; deploy artifact is `./out`.
2. **Client i18n** — locale in localStorage; no SSR locale routing.
3. **SEO** — build-time metadata (English default), client JSON-LD, robots + sitemap.
4. **Theming** — CSS variables + `.dark` on `<html>`; toggle updates Zustand + classList.
5. **State** — Zustand for cross-cutting UI; React state/hooks for local concerns.

## Import Aliases

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

## Scripts

- `pnpm dev` — development server
- `pnpm build` — production static export → `/out`
- `pnpm start` — Next start (limited usefulness with static export)
- `pnpm lint` — ESLint

## Development Workflow

1. `pnpm install`
2. `pnpm dev` → http://localhost:3000
3. Edit `src/` and/or `messages/`
4. For behavior changes, update `docs/specs/` in the same change (see [sdd.md](./sdd.md))
5. `pnpm lint` / `pnpm build`
6. Push to `main` → GitHub Actions deploys Pages

## Deployment

[`.github/workflows/main.yml`](../.github/workflows/main.yml):

1. Push to `main` (or `workflow_dispatch`)
2. Checkout, setup pnpm + Node 22
3. `pnpm install --frozen-lockfile`
4. `pnpm next build`
5. Upload `./out` and deploy with `actions/deploy-pages`

## Conventions

- React components: PascalCase (`HeroSection.tsx`)
- Utilities: camelCase (`metadata.ts`)
- Config: kebab-case or tool defaults (`next.config.mjs`)
- Specs: kebab-case under `docs/specs/`

---

**Last updated:** November 2026  
**Maintainer:** Douglas Pardim
