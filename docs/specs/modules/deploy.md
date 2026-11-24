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

- Trigger: push `main`, `pull_request` ou `workflow_dispatch`
- pnpm + Node 22
- `pnpm install --frozen-lockfile`
- `pnpm lint` e `pnpm typecheck` antes do build
- `pnpm build` (inclui `postexport.mjs` para redirect `/` → `/en/`)
- Playwright E2E (`pnpm test:e2e`) após o build
- Upload de artifact `./out` e deploy só em `push` / `workflow_dispatch` (PRs rodam lint+typecheck+build+e2e sem publicar)
- Environment `github-pages` apenas no job de deploy

Ambiente:

- Site estático puro; sem variáveis de ambiente obrigatórias

## Restrições

- Não adicionar features que exijam Node server em runtime (SSR dinâmico, Route Handlers com estado, middleware i18n)
- Lockfile deve permanecer pnpm (`pnpm-lock.yaml`)
- Deploy artifact é sempre `./out`

## Arquivos-chave

- `next.config.mjs`
- `.github/workflows/main.yml`
- `package.json` (`packageManager`, scripts)
- `pnpm-lock.yaml`
