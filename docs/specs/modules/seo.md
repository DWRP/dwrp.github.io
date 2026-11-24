# Módulo — SEO

## Responsabilidades

- Metadata HTML (title, description, keywords, robots)
- Open Graph e Twitter Cards
- JSON-LD (Person, Breadcrumb, WebSite)
- `robots.txt` e `sitemap.xml` estáticos

## Comportamento esperado

- `layout.tsx` chama `generateSeoMetadata("en")` no build (metadata server usa inglês por default; i18n de conteúdo é client-side)
- `generateSeoMetadata` lê `messages/{locale}.json` → `Index.seo`
- Alternates de idioma na metadata apontam para `/` nos quatro locales
- Imagens sociais: `https://dwrp.github.io/cover.jpeg` e `cover2.jpeg`
- JSON-LD injetado no cliente em `page-content.tsx` conforme locale (scripts `application/ld+json` regenerados ao trocar idioma)
- `robots.ts`: allow `/`, disallow `/private/`, sitemap `https://dwrp.github.io/sitemap.xml`
- `sitemap.ts`: URL canônica do site; `alternates.languages` atualmente `en` e `pt-BR` (gap conhecido vs. quatro locales da UI)

## Restrições

- Manter `dynamic = "force-static"` em robots/sitemap
- Não depender de APIs server em runtime (Pages estático)
- Atualizar textos SEO nos quatro JSON ao mudar positioning

## Arquivos-chave

- `src/lib/metadata.ts`
- `src/app/layout.tsx`
- `src/app/page-content.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `messages/*.json` → `Index.seo`
- `public/cover.jpeg`, `public/cover2.jpeg`
