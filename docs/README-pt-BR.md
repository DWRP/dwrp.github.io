# dwrp.github.io

[![Preview](https://img.shields.io/badge/preview-live-brightgreen)](https://dwrp.github.io)
[![License](https://img.shields.io/badge/licença-MIT-blue)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/autor-Douglas%20Pardim-orange)](https://github.com/dwrp)
[![CI/CD](https://github.com/dwrp/dwrp.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/dwrp/dwrp.github.io/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)

> 🌍 **Idiomas**: [English](../README.md) | **Português** | [Español](./README-es.md)

Bem-vindo ao meu site pessoal! Este repositório contém o código fonte do meu portfólio profissional, onde apresento minha trajetória, tecnologias que domino, projetos desenvolvidos e informações de contato.

## 🎯 Sobre o Projeto

Site pessoal construído com as mais modernas tecnologias web, focado em performance, SEO e experiência do usuário. O projeto implementa uma arquitetura limpa, escalável e totalmente otimizada para motores de busca.

### ✨ Destaques

- **Landing Page Moderna**: Design contemporâneo com animações fluidas e gradientes vibrantes
- **Totalmente Responsivo**: Experiência perfeita em desktop, tablet e mobile
- **Multilíngue**: Suporte completo para Português, Inglês, Espanhol e Chinês Simplificado
- **SEO Otimizado**: Meta tags completas, Open Graph, Twitter Cards e JSON-LD structured data
- **Performance**: Build estático otimizado com Next.js 15 e React 19
- **Temas**: Alternância entre modo claro e escuro

## 🚀 Tecnologias Utilizadas

### Core
- **[Next.js 15.5](https://nextjs.org/)** - Framework React com SSG/SSR
- **[React 19.2](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado do JavaScript

### UI/UX
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Shadcn UI](https://ui.shadcn.com/)** - Componentes UI reutilizáveis
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Lucide Icons](https://lucide.dev/)** - Ícones modernos

### Internacionalização
- **[next-intl](https://next-intl-docs.vercel.app/)** - i18n para Next.js
- Suporte nativo para 4 idiomas (pt-BR, en, es, zh-CN)

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
├── docs/                    # Documentação do projeto
│   ├── README-pt-BR.md     # Documentação em português
│   ├── README-es.md        # Documentação em espanhol
│   └── project-structure.md # Estrutura detalhada do projeto
├── messages/               # Arquivos de tradução (i18n)
│   ├── en.json            # Inglês
│   ├── pt-BR.json         # Português do Brasil
│   ├── es.json            # Espanhol
│   └── zh-CN.json         # Chinês Simplificado
├── public/                # Arquivos estáticos
│   ├── cover.jpeg         # Imagem de preview (Open Graph)
│   ├── cover2.jpeg        # Imagem alternativa
│   ├── dwrp.svg           # Logo
│   └── favicon.ico        # Favicon
├── src/
│   ├── app/               # App Router (Next.js 15)
│   │   ├── layout.tsx     # Layout raiz com metadata
│   │   ├── page.tsx       # Página principal
│   │   ├── page-content.tsx # Conteúdo com i18n e JSON-LD
│   │   ├── robots.ts      # Gerador de robots.txt
│   │   ├── sitemap.ts     # Gerador de sitemap.xml
│   │   └── sections/      # Seções principais (Header, Main, Footer)
│   ├── components/
│   │   ├── sections/      # Componentes de seção
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/            # Componentes Shadcn UI
│   ├── hooks/
│   │   └── useClientLocale.ts # Hook de gerenciamento de idioma
│   ├── lib/
│   │   ├── metadata.ts    # Utilitários de SEO e JSON-LD
│   │   └── utils.ts       # Utilitários gerais
│   ├── store/             # Estado global (Zustand)
│   ├── styles/            # Estilos globais
│   └── locales.ts         # Configuração de idiomas
├── CHANGELOG.md           # Histórico de mudanças
├── package.json
└── README.md              # Documentação principal

```

Para mais detalhes sobre a estrutura, veja [project-structure.md](./project-structure.md).

## 🔧 Como Usar

### Pré-requisitos

- Node.js 18+ ou superior
- Yarn ou NPM

### Instalação

```bash
# Clone o repositório
git clone https://github.com/dwrp/dwrp.github.io.git

# Entre na pasta
cd dwrp.github.io

# Instale as dependências
yarn install
# ou
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
yarn dev
# ou
npm run dev

# Acesse http://localhost:3000
```

### Build de Produção

```bash
# Gere a build estática
yarn build
# ou
npm run build

# A build será gerada na pasta /out
```

### Deploy

O deploy é automático via GitHub Actions quando há push na branch `main`. A aplicação é publicada no GitHub Pages.

## 🌐 Internacionalização (i18n)

O projeto suporta 4 idiomas:

- 🇧🇷 **Português do Brasil** (pt-BR) - Idioma padrão
- 🇺🇸 **Inglês** (en)
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
- **LinkedIn**: [Douglas Pardim](https://linkedin.com/in/douglaspardim)
- **Email**: douglas.pardim@exemplo.com

## 🙏 Agradecimentos

- [Next.js Team](https://nextjs.org/) - Framework incrível
- [Vercel](https://vercel.com/) - Pela inspiração e ferramentas
- [Shadcn](https://ui.shadcn.com/) - Pelos componentes UI elegantes
- Comunidade Open Source

---

**Desenvolvido com ❤️ por Douglas Pardim**

*Última atualização: Janeiro 2025*

