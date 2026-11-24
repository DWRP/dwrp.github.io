# Specs

Fonte de verdade do comportamento do portfolio. Workflow: [../sdd.md](../sdd.md).

## Produto

- [product.md](./product.md) — visão, escopo, critérios de sucesso

## Módulos

- [modules/i18n.md](./modules/i18n.md) — idiomas e catálogos
- [modules/seo.md](./modules/seo.md) — metadata, JSON-LD, robots, sitemap
- [modules/ui-sections.md](./modules/ui-sections.md) — seções da página e shell
- [modules/theming.md](./modules/theming.md) — tema claro/escuro
- [modules/deploy.md](./modules/deploy.md) — export estático e GitHub Pages

## Como usar

1. Leia `product.md` e o módulo afetado antes de mudar código.
2. Atualize a spec no mesmo trabalho se o comportamento mudar.
3. Verifique com `pnpm lint` e `pnpm build`.
