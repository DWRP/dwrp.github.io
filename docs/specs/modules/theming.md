# Módulo — Theming

## Responsabilidades

- Alternar tema claro/escuro
- Persistir preferência do usuário
- Expor tokens de cor via CSS variables consumidos pelo Tailwind 4

## Comportamento esperado

- Temas: `light` | `dark`
- Default do store: `dark`
- Persistência Zustand sob chave localStorage `app`
- Classe `.dark` no `<html>` quando modo escuro ativo
- Toggle no Header sincroniza estado local (`isDarkMode`) → store → classList
- Tokens em `src/styles/globals.css`: `:root` e `.dark`, mapeados com `@theme inline`
- Variante dark: `@custom-variant dark (&:is(.dark *))`
- Sem `tailwind.config.ts` — configuração via CSS + PostCSS (`@tailwindcss/postcss`)

## Restrições

- Mudanças de paleta devem atualizar variáveis CSS, não hardcode espalhado
- Manter contraste adequado em ambos os temas
- Não remover persistência sem atualizar esta spec e UX documentada

## Arquivos-chave

- `src/store/app.ts`
- `src/app/page-content.tsx`
- `src/app/sections/Header.tsx`
- `src/styles/globals.css`
- `postcss.config.mjs`
