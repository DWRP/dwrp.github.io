# AGENTS

Guia para agentes de código (Cursor e similares) neste repositório.

## Antes de editar

1. Leia [`docs/specs/product.md`](docs/specs/product.md)
2. Leia o módulo relevante em [`docs/specs/modules/`](docs/specs/modules/)
3. Confirme o stack real em [`package.json`](package.json) — **não** assuma Yarn ou Next 15

## Fluxo obrigatório (SDD)

**Spec → Implement → Verify**

Detalhes: [`docs/sdd.md`](docs/sdd.md)

- Mudança de comportamento → atualizar a spec no mesmo trabalho
- Após mudanças: `pnpm lint` e, se afetar build/export, `pnpm build`

## Fatos do projeto (não inventar)

- Package manager: **pnpm** (`pnpm-lock.yaml`)
- Next.js **16** App Router, React **19**, Tailwind **4** (CSS, sem `tailwind.config.ts`)
- `output: "export"` → artefato `./out` → GitHub Pages
- i18n **client-side** (`messages/*.json`, `useClientLocale`) — sem middleware de locale
- Estado global: Zustand em `src/store/app.ts`
- Locales: `en` (default), `pt-BR`, `es`, `zh-CN`

## Onde olhar

| Assunto | Spec | Código |
|---------|------|--------|
| Produto | `docs/specs/product.md` | `src/app/`, `messages/` |
| i18n | `docs/specs/modules/i18n.md` | `src/hooks/useClientLocale.ts`, `messages/` |
| SEO | `docs/specs/modules/seo.md` | `src/lib/metadata.ts`, `robots.ts`, `sitemap.ts` |
| UI | `docs/specs/modules/ui-sections.md` | `src/components/sections/` |
| Tema | `docs/specs/modules/theming.md` | `src/store/app.ts`, `globals.css` |
| Deploy | `docs/specs/modules/deploy.md` | `next.config.mjs`, `.github/workflows/main.yml` |

Estrutura detalhada: [`docs/project-structure.md`](docs/project-structure.md)

## Preferências de mudança

- Diff mínimo; não refatorar fora do pedido
- Manter as quatro línguas sincronizadas ao tocar strings
- Não introduzir SSR/runtime Node que quebre o export estático
