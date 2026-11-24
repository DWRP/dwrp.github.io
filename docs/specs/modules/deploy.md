# Módulo — Deploy

## Responsabilidades

- Gerar site estático
- Publicar no GitHub Pages via Actions
- Manter config Next compatível com hosting estático

## Comportamento esperado

`next.config.mjs`:

- `output: "export"`
- `trailingSlash: true`
- `images.unoptimized: true` (necessário para export)
- `assetPrefix: "/"`
- Bundle analyzer opcional via `ANALYZE=true`

CI (`.github/workflows/main.yml`):

- Trigger: push `main` ou `workflow_dispatch`
- pnpm + Node 22
- `pnpm install --frozen-lockfile`
- `pnpm next build`
- Artifact `./out` → `actions/deploy-pages`

Ambiente:

- Variável de build opcional `NEXT_PUBLIC_API_URL` (vars do repo) — site atual é estático; não assumir API obrigatória

## Restrições

- Não adicionar features que exijam Node server em runtime (SSR dinâmico, Route Handlers com estado, middleware i18n)
- Lockfile deve permanecer pnpm (`pnpm-lock.yaml`)
- Deploy artifact é sempre `./out`

## Arquivos-chave

- `next.config.mjs`
- `.github/workflows/main.yml`
- `package.json` (`packageManager`, scripts)
- `pnpm-lock.yaml`
