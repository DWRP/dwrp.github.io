# Produto — dwrp.github.io

## Visão

Portfolio pessoal estático de Douglas Pardim: apresentar trajetória, skills, educação, projetos e contato, com boa performance, SEO e suporte a múltiplos idiomas.

## Objetivos

- Landing page única com seções (Hero → Contact) e navegação por âncora
- Export estático (`output: "export"`) hospedado no GitHub Pages
- Quatro idiomas no cliente: `en`, `pt-BR`, `es`, `zh-CN`
- Tema claro/escuro com persistência
- SEO: meta tags, Open Graph, Twitter Cards, JSON-LD, robots, sitemap
- Acessibilidade básica: HTML semântico, labels ARIA onde necessário

## Fora de escopo

- Backend, formulário de contato com API, autenticação
- Rotas por locale (`/[locale]/`) ou middleware de i18n (incompatível com o modelo estático atual)
- Blog / MDX, páginas internas de detalhe de projeto
- Dependência de MCP ou banco local para specs (specs vivem em Git em `docs/specs/`)

## Critérios de sucesso

- `pnpm build` gera `./out` deployável
- Site sobe em https://dwrp.github.io via Actions em push na `main`
- Troca de idioma atualiza textos sem reload de rota
- Troca de tema aplica classe `.dark` no `<html>` e persiste
- Lighthouse: Performance alta, Accessibility/SEO próximos de 100 (meta histórica do projeto)

## Stack de referência

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4, shadcn/ui, Framer Motion, Zustand, next-intl
- pnpm como package manager

## Arquivos-chave

- `src/app/` — shell da aplicação
- `src/components/sections/` — seções de conteúdo
- `messages/*.json` — conteúdo traduzido
- `next.config.mjs` — export estático
- `.github/workflows/main.yml` — CI/CD
