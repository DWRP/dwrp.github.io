# Project Structure

Portfolio site built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Static export (`output: "export"`) for GitHub Pages.

## Architecture

- App Router + static generation
- Client-side i18n (`next-intl` + `useClientLocale`) — no `[locale]` routes (SSG constraint)
- SEO metadata + JSON-LD in the static HTML layout
- Theme + active nav via Zustand; locale via dedicated localStorage key

## Root

```
dwrp.github.io/
├── .github/workflows/main.yml   # lint, typecheck, build, deploy
├── docs/                        # multilingual docs + this file
├── messages/                    # en, pt-BR, es, zh-CN
├── public/                      # static assets
├── scripts/analyze.mjs          # bundle analyzer helper
├── src/
├── LICENSE
├── next.config.mjs              # export + trailingSlash + images
├── package.json                 # packageManager: pnpm
├── pnpm-lock.yaml
├── pnpm-workspace.yaml          # pnpm build approvals (not a monorepo)
├── postcss.config.mjs
└── tsconfig.json
```

## Source (`src/`)

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, JsonLd, theme boot script
│   ├── page.tsx
│   ├── page-content.tsx    # NextIntl provider, locale/theme wiring
│   ├── robots.ts
│   ├── sitemap.ts
│   └── sections/           # Header, Main, Footer
├── components/
│   ├── JsonLd.tsx
│   ├── sections/           # page sections + SectionHeader
│   ├── icons/
│   └── ui/                 # shadcn primitives
├── hooks/
│   ├── useClientLocale.ts
│   └── usePrefersReducedMotion.ts
├── lib/
│   ├── metadata.ts
│   ├── motion.ts
│   ├── siteConfig.ts       # URLs, email, social, images
│   └── utils.ts
├── store/app.ts            # theme + activeMenu
├── styles/globals.css      # Tailwind v4 + design tokens
└── locales.ts
```

## Notes

- Tailwind v4 is CSS-first (`globals.css`); there is no `tailwind.config.ts`.
- Package manager of truth is **pnpm** (`pnpm-lock.yaml` + CI).
- Changelog lives at [`docs/CHANGELOG.md`](./CHANGELOG.md).
