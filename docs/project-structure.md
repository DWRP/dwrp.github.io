# Project Structure

Portfolio site built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Static export (`output: "export"`) for GitHub Pages.

## Architecture

- App Router + static generation per locale (`/[locale]/`)
- **next-intl v4** with `createNextIntlPlugin`, `i18n/{routing,request,navigation}.ts`, and `generateStaticParams` (no middleware — required for static export)
- SEO metadata + JSON-LD rendered per locale in the static HTML
- Theme via `ThemeProvider` + localStorage; active nav via React context

## Root

```
dwrp.github.io/
├── .github/workflows/main.yml   # lint, typecheck, build, e2e, deploy
├── docs/                        # multilingual docs + this file
├── e2e/                         # Playwright suites
├── messages/                    # en, pt-BR, es, zh-CN
├── public/                      # static assets
├── scripts/
│   ├── analyze.mjs              # bundle analyzer helper
│   └── postexport.mjs           # root `/` → `/en/` redirect for GH Pages
├── src/
├── LICENSE
├── next.config.mjs              # export + trailingSlash + next-intl plugin
├── package.json                 # packageManager: pnpm
├── playwright.config.ts
├── pnpm-lock.yaml
├── pnpm-workspace.yaml          # pnpm build approvals (not a monorepo)
├── postcss.config.mjs
└── tsconfig.json
```

## Source (`src/`)

```
src/
├── app/
│   ├── layout.tsx              # pass-through root layout
│   ├── page.tsx                # fallback root; postexport writes redirect HTML
│   ├── [locale]/
│   │   ├── layout.tsx          # fonts, html lang, providers, metadata
│   │   └── page.tsx            # portfolio page (RSC)
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── JsonLd.tsx
│   ├── layout/                 # Header, Footer, MainShell
│   ├── motion/                 # FadeIn, FadeInView, BounceHint
│   ├── providers/              # ThemeProvider, ActiveNavProvider
│   ├── sections/               # Hero…Contact + SectionHeader
│   ├── icons/
│   └── ui/                     # shadcn primitives
├── hooks/
│   └── usePrefersReducedMotion.ts
├── i18n/
│   ├── routing.ts
│   ├── request.ts
│   └── navigation.ts
├── lib/
│   ├── metadata.ts
│   ├── motion.ts
│   ├── siteConfig.ts
│   └── utils.ts
├── styles/globals.css
└── locales.ts                  # re-exports from i18n/routing
```

## Notes

- Tailwind v4 is CSS-first (`globals.css`); there is no `tailwind.config.ts`.
- Package manager of truth is **pnpm** (`pnpm-lock.yaml` + CI).
- Locale URLs use `localePrefix: "always"` (`/en/`, `/pt-BR/`, …).
- Changelog lives at [`docs/CHANGELOG.md`](./CHANGELOG.md).
