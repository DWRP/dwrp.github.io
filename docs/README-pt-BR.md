# dwrp.github.io

[![Preview](https://img.shields.io/badge/preview-live-brightgreen)](https://dwrp.github.io)
[![License](https://img.shields.io/badge/licença-MIT-blue)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/autor-Douglas%20Pardim-orange)](https://github.com/dwrp)
[![CI/CD](https://github.com/dwrp/dwrp.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/dwrp/dwrp.github.io/actions)
[![Next.js](https://img.shields.io/badge/Next.js-16.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue)](https://react.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-12-yellow)](https://pnpm.io/)

> 🌍 **Idiomas**: [English](../README.md) | **Português** | [Español](./README-es.md) | [中文](./README-zh-CN.md)
>
> 📚 **Documentação**: [Estrutura](./project-structure.md) | [SDD](./sdd.md) | [Specs](./specs/) | [Changelog](./CHANGELOG.md) | [AGENTS](../AGENTS.md)

Bem-vindo ao meu site pessoal! Este repositório contém o código fonte do meu portfólio profissional, onde apresento minha trajetória, tecnologias que domino, projetos desenvolvidos e informações de contato.

## 🎯 Sobre o Projeto

Site pessoal construído com as mais modernas tecnologias web, focado em performance, SEO e experiência do usuário. O projeto implementa uma arquitetura limpa, escalável e totalmente otimizada para motores de busca.

### ✨ Destaques

- **Landing Page Moderna**: Design contemporâneo com animações fluidas e gradientes vibrantes
- **Totalmente Responsivo**: Experiência perfeita em desktop, tablet e mobile
- **Multilíngue**: Suporte completo para Português, Inglês, Espanhol e Chinês Simplificado
- **SEO Otimizado**: Meta tags completas, Open Graph, Twitter Cards e JSON-LD structured data
- **Performance**: Build estático otimizado com Next.js 16 e React 19
- **Temas**: Alternância entre modo claro e escuro

## 🚀 Tecnologias Utilizadas

### Core
- **[Next.js 16.4](https://nextjs.org/)** - Framework React com export estático (SSG)
- **[React 19.3](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[pnpm](https://pnpm.io/)** - Gerenciador de pacotes do projeto

### UI/UX
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário (via PostCSS / CSS)
- **[Shadcn UI](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Lucide Icons](https://lucide.dev/)** - Ícones modernos
- **[Zustand](https://zustand.docs.pmnd.rs/)** - Estado global (tema, idioma, menu ativo)

### Internacionalização
- **[next-intl](https://next-intl-docs.vercel.app/)** - i18n para Next.js (client-side)
- Suporte nativo para 4 idiomas (en, pt-BR, es, zh-CN)

### DevOps
- **[GitHub Pages](https://pages.github.com/)** - Hospedagem estática
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automatizado

## 📋 Funcionalidades

### Seções do Site

- **🎨 Hero**: Apresentação com estatísticas de carreira e links sociais
- **👤 Sobre**: Informações profissionais e principais competências
- **💼 Experiência**: Timeline interativa com histórico profissional detalhado
- **🛠️ Habilidades**: Categorização de skills por área (Frontend, Backend, Mobile, DevOps)
- **🎓 Educação**: Formação acadêmica e certificações profissionais
- **🚀 Projetos**: Showcase de projetos destacados com filtros por tipo
- **📧 Contato**: Informações de contato e links para redes sociais

### Recursos Técnicos

- ✅ **Menu Fixo**: Navegação persistente com indicador de seção ativa
- ✅ **Menu Responsivo**: Drawer lateral em dispositivos móveis
- ✅ **Troca de Idiomas**: Seletor de idioma com persistência no localStorage
- ✅ **Modo Escuro/Claro**: Sistema de temas com preferência do usuário
- ✅ **Animações Suaves**: Transições e efeitos com Framer Motion
- ✅ **SEO Completo**: Meta tags, Open Graph, Twitter Cards, JSON-LD
- ✅ **Sitemap Dinâmico**: Geração automática para melhor indexação
- ✅ **Robots.txt**: Configuração otimizada para crawlers

## 🏗️ Estrutura do Projeto

```
dwrp.github.io/
├── docs/                   # Documentação, SDD e specs
├── messages/               # Catálogos i18n (en, pt-BR, es, zh-CN)
├── public/                 # Assets estáticos
├── src/                    # App Router Next.js 16
│   ├── app/                # layout, page, robots, sitemap, Header/Main/Footer
│   ├── components/         # sections/, ui/, icons/
│   ├── hooks/              # useClientLocale
│   ├── lib/                # metadata, utils
│   ├── store/              # Zustand (app.ts)
│   ├── styles/             # globals.css (Tailwind 4)
│   └── locales.ts
├── AGENTS.md
├── package.json            # packageManager: pnpm
├── pnpm-lock.yaml
└── README.md
```

Detalhes: [project-structure.md](./project-structure.md). Specs de comportamento: [specs/](./specs/). Workflow de mudanças: [sdd.md](./sdd.md).

## 🔧 Como Usar

### Pré-requisitos

- Node.js 22+ (CI usa Node 22; 18+ pode funcionar localmente)
- pnpm 12+ (via Corepack ou instalação global)

### Instalação

```bash
git clone https://github.com/dwrp/dwrp.github.io.git
cd dwrp.github.io
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
# http://localhost:3000
```

### Build de Produção

```bash
pnpm build
# saída em /out
```

### Deploy

O deploy é automático via GitHub Actions quando há push na branch `main`. A aplicação é publicada no GitHub Pages.

## 🌐 Internacionalização (i18n)

O projeto suporta 4 idiomas:

- 🇺🇸 **Inglês** (en) — default no código (`defaultLocale`)
- 🇧🇷 **Português do Brasil** (pt-BR)
- 🇪🇸 **Espanhol** (es)
- 🇨🇳 **Chinês Simplificado** (zh-CN)

As traduções são gerenciadas através de arquivos JSON na pasta `messages/`. O idioma é selecionado pelo usuário e armazenado no localStorage para persistência entre sessões.

## 🎨 Customização

### Cores e Temas

As cores podem ser customizadas editando o arquivo `src/styles/globals.css`. O projeto utiliza CSS Variables para fácil customização:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... outras variáveis */
}
```

### Conteúdo

Todo o conteúdo do site pode ser editado nos arquivos de tradução em `messages/*.json`. Basta atualizar os textos nos idiomas desejados.

### Imagens

Substitua as imagens na pasta `public/` mantendo os mesmos nomes de arquivo, ou atualize as referências em `src/lib/metadata.ts`.

## 📊 SEO e Performance

O projeto implementa as melhores práticas de SEO:

- **Meta Tags Completas**: Título, descrição, keywords, autor
- **Open Graph**: Suporte completo para Facebook, LinkedIn
- **Twitter Cards**: Cards otimizados com imagens
- **JSON-LD**: Structured data (Person, Website, Breadcrumb)
- **Sitemap XML**: Gerado automaticamente
- **Robots.txt**: Configurado para otimizar indexação
- **URLs Canônicas**: Evita conteúdo duplicado
- **Hreflang**: Suporte multilíngue adequado

### Lighthouse Score

O site alcança pontuações excelentes no Lighthouse:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commitar suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](../LICENSE) - veja o arquivo LICENSE para detalhes.

## 📞 Contato

- **Website**: [https://dwrp.github.io](https://dwrp.github.io)
- **GitHub**: [@dwrp](https://github.com/dwrp)
- **LinkedIn**: [Douglas Pardim](https://linkedin.com/in/douglas-pardim)
- **Email**: douglas.skd@gmail.com

## 🙏 Agradecimentos

- [Next.js Team](https://nextjs.org/) - Framework incrível
- [Vercel](https://vercel.com/) - Pela inspiração e ferramentas
- [Shadcn](https://ui.shadcn.com/) - Pelos componentes UI elegantes
- Comunidade Open Source

---

**Desenvolvido com ❤️ por Douglas Pardim**

*Última atualização: Novembro 2026*

