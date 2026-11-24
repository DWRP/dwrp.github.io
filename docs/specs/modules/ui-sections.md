# Módulo — UI Sections

## Responsabilidades

- Shell da página (Header, Main, Footer)
- Seções de conteúdo do portfolio em ordem fixa
- Navegação por âncoras e indicação de seção ativa
- Layout responsivo e animações de presença

## Comportamento esperado

Ordem das seções no Main:

1. Hero
2. About
3. Experience
4. Skills
5. Education
6. Projects
7. Contact

Shell:

- **Header** — nav fixa, seletor de idioma, toggle de tema, menu mobile
- **Main** — wrapper das seções
- **Footer** — créditos e links

Outros:

- Seções usam traduções next-intl e componentes `ui/` (shadcn)
- Framer Motion para motion intencional, sem atrapalhar leitura
- Estado `activeMenu` no Zustand para destaque da seção ativa
- Ícone de marca em `components/icons/brand.tsx`
- Loading inicial enquanto mensagens i18n não carregaram

## Restrições

- Preferir uma composição de landing (não dashboard)
- Não quebrar âncoras/IDs usados pela navegação
- Novas seções exigem entrada na nav + chaves i18n + esta spec

## Arquivos-chave

- `src/app/page-content.tsx`
- `src/app/sections/Header.tsx`, `Main.tsx`, `Footer.tsx`
- `src/components/sections/*.tsx`
- `src/components/ui/*`
- `src/components/Loading.tsx`
