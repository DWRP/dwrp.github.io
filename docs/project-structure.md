# Project Structure Documentation

## Overview

This document describes the complete structure of the dwrp.github.io project - a modern portfolio website built with Next.js 15, React 19, and TypeScript.

## Project Architecture

The project follows Next.js 15 App Router architecture with a focus on:
- Static Site Generation (SSG)
- Client-side internationalization
- SEO optimization
- Component modularity
- Clean code principles

## Root Directory Structure

```
dwrp.github.io/
├── .github/                # GitHub configuration
│   └── workflows/          # GitHub Actions CI/CD
│       └── main.yml        # Build and deploy workflow
├── docs/                   # Project documentation
│   ├── README-pt-BR.md    # Documentation in Portuguese
│   ├── README-es.md       # Documentation in Spanish
│   └── project-structure.md # This file
├── messages/              # i18n translation files
│   ├── en.json           # English translations
│   ├── pt-BR.json        # Brazilian Portuguese translations
│   ├── es.json           # Spanish translations
│   └── zh-CN.json        # Simplified Chinese translations
├── out/                  # Production build output (generated)
├── public/               # Static assets
│   ├── cover.jpeg       # Social media preview image (1200x630)
│   ├── cover2.jpeg      # Alternative preview image
│   ├── dwrp.svg         # Logo/brand mark
│   └── favicon.ico      # Browser favicon
├── src/                 # Source code
├── .gitignore          # Git ignore rules
├── CHANGELOG.md        # Project changelog
├── components.json     # Shadcn UI configuration
├── next-env.d.ts       # Next.js TypeScript declarations
├── next.config.mjs     # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
├── README.md           # Main documentation (English)
├── README-pt.md        # Main documentation (Portuguese)
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── yarn.lock           # Yarn lock file
```

## Source Directory (`src/`)

### App Router (`src/app/`)

```
src/app/
├── layout.tsx           # Root layout with metadata generation
├── page.tsx            # Root page (imports PageContent)
├── page-content.tsx    # Main page content with i18n and JSON-LD
├── robots.ts           # robots.txt generator
├── sitemap.ts          # sitemap.xml generator
└── sections/           # Main layout sections
    ├── Header.tsx      # Header with navigation and theme toggle
    ├── Main.tsx        # Main content wrapper
    └── Footer.tsx      # Footer with links and credits
```

**Key Files:**

- **`layout.tsx`**: Root layout that wraps the entire application
  - Implements `generateMetadata()` for dynamic SEO
  - Includes `<html>` and `<body>` tags
  - Loads global styles
  - Sets up theme provider

- **`page.tsx`**: Entry point that imports and renders `PageContent`

- **`page-content.tsx`**: Main content component
  - Client component with internationalization
  - Dynamic JSON-LD injection based on locale
  - Updates HTML `lang` attribute
  - Orchestrates all page sections

- **`robots.ts`**: Generates `/robots.txt`
  - Allows all user agents
  - Blocks `/private/` directory
  - References sitemap

- **`sitemap.ts`**: Generates `/sitemap.xml`
  - Includes all locales
  - Sets change frequency and priority
  - Adds alternate language links

### Components (`src/components/`)

```
src/components/
├── sections/              # Page section components
│   ├── HeroSection.tsx   # Hero/intro with stats
│   ├── AboutSection.tsx  # About me section
│   ├── ExperienceSection.tsx  # Professional experience timeline
│   ├── SkillsSection.tsx     # Skills categorized by area
│   ├── EducationSection.tsx  # Education and certifications
│   ├── ProjectsSection.tsx   # Featured projects showcase
│   └── ContactSection.tsx    # Contact information
├── ui/                   # Shadcn UI components
│   ├── badge.tsx
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   ├── select.tsx
│   └── textarea.tsx
└── Loading.tsx          # Loading state component
```

**Section Components Architecture:**

Each section component follows a consistent pattern:
- Receives translations via props or context
- Implements responsive design
- Uses Framer Motion for animations
- Follows accessibility best practices
- Styled with Tailwind CSS

### Hooks (`src/hooks/`)

```
src/hooks/
└── useClientLocale.ts   # Client-side locale management
```

**`useClientLocale` Hook:**
- Manages current locale state
- Persists selection in localStorage
- Provides locale switching function
- Handles initial load from storage
- Used throughout the application

### Library Utilities (`src/lib/`)

```
src/lib/
├── metadata.ts          # SEO and JSON-LD utilities
└── utils.ts            # General utility functions (cn helper)
```

**`metadata.ts` Functions:**

1. **`generateSeoMetadata(locale)`**
   - Generates Next.js Metadata object
   - Includes title templates
   - Sets up Open Graph tags
   - Configures Twitter Cards
   - Adds canonical URLs and alternates
   - Returns complete metadata for SEO

2. **`generatePersonJsonLd(locale)`**
   - Creates Schema.org Person structured data
   - Includes professional information
   - Lists skills and technologies
   - References education and work history

3. **`generateBreadcrumbJsonLd(locale)`**
   - Creates breadcrumb navigation schema
   - Improves site navigation understanding

4. **`generateWebsiteJsonLd(locale)`**
   - Creates WebSite schema
   - Includes copyright and language info

**`utils.ts`:**
- `cn()` function for conditional className merging
- Uses clsx and tailwind-merge

### Store (`src/store/`)

```
src/store/
├── app.ts              # Application state (Zustand)
└── store.service.ts    # Store utilities
```

State management for:
- Theme preferences (dark/light)
- UI state (mobile menu open/closed)
- Potentially other global state

### Styles (`src/styles/`)

```
src/styles/
└── globals.css         # Global styles and CSS variables
```

**Global Styles Include:**
- Tailwind directives (@tailwind base/components/utilities)
- CSS custom properties for theming
- Dark mode variables
- Custom animations (fadeIn, slideUp, slideDown, float)
- Gradient utilities
- Glass morphism effects
- Utility classes

### Configuration Files (`src/`)

```
src/
└── locales.ts          # Locale configuration
```

**`locales.ts`:**
```typescript
export const locales = ["en", "pt-BR", "es", "zh-CN"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = locales[0];
```

## Internationalization (i18n) Structure

### Translation Files (`messages/`)

Each JSON file follows the same structure:

```json
{
  "Index": {
    "nav": { ... },
    "hero": { ... },
    "about": { ... },
    "experience": { ... },
    "skills": { ... },
    "education": { ... },
    "projects": { ... },
    "contact": { ... },
    "footer": { ... },
    "seo": { ... }
  }
}
```

**Translation Categories:**

1. **nav**: Navigation menu items and locale names
2. **hero**: Hero section content and CTAs
3. **about**: About section text and highlights
4. **experience**: Job history and achievements
5. **skills**: Technology categories and descriptions
6. **education**: Academic background and certifications
7. **projects**: Project information and filters
8. **contact**: Contact information and CTAs
9. **footer**: Footer content and credits
10. **seo**: SEO metadata (title, description, keywords, OG, Twitter)

## Build Output (`out/`)

Generated during build process (`yarn build`):

```
out/
├── _next/              # Next.js assets
│   ├── static/        # Static chunks and CSS
│   └── [hash]/        # Build manifest
├── 404.html           # 404 error page
├── index.html         # Main page
├── robots.txt         # Generated robots.txt
├── sitemap.xml        # Generated sitemap
└── [public assets]    # Copied from public/
```

## Key Technologies and Patterns

### 1. Static Site Generation (SSG)
- Entire site is pre-rendered at build time
- No server-side rendering required
- Perfect for GitHub Pages deployment
- Fast page loads and excellent SEO

### 2. Client-Side i18n
- No middleware (incompatible with static export)
- Locale stored in localStorage
- Dynamic content switching without page reload
- SEO handled via metadata and JSON-LD

### 3. SEO Optimization
- Dynamic metadata generation per locale
- Open Graph for social media
- Twitter Cards configuration
- JSON-LD structured data (Person, WebSite, Breadcrumb)
- Sitemap with hreflang alternates
- Proper robots.txt configuration

### 4. Component Architecture
- Modular section components
- Reusable UI components (Shadcn)
- Separation of concerns
- Props drilling avoided via hooks
- Consistent styling patterns

### 5. Styling Approach
- Tailwind utility-first CSS
- Custom CSS variables for theming
- Dark mode support via CSS classes
- Responsive design (mobile-first)
- Custom animations and transitions

### 6. State Management
- Zustand for global state
- React hooks for local state
- localStorage for persistence
- Minimal state overhead

## File Naming Conventions

- **React Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Utilities**: camelCase (e.g., `metadata.ts`)
- **Configuration**: kebab-case (e.g., `next.config.mjs`)
- **Documentation**: kebab-case (e.g., `project-structure.md`)
- **Translation files**: locale code (e.g., `pt-BR.json`)

## Import Aliases

Configured in `tsconfig.json`:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

**Usage:**
```typescript
import { useClientLocale } from "@/hooks/useClientLocale";
import { generateSeoMetadata } from "@/lib/metadata";
```

## Scripts (package.json)

- `yarn dev` - Start development server
- `yarn build` - Build for production (generates `/out`)
- `yarn start` - Start production server (not used with static export)
- `yarn lint` - Run ESLint

## Development Workflow

1. **Local Development**: `yarn dev` → http://localhost:3000
2. **Make Changes**: Edit files in `src/`
3. **Test**: Verify changes in browser
4. **Build**: `yarn build` to test static export
5. **Commit**: Git commit with descriptive message
6. **Push**: Push to `main` branch
7. **Deploy**: GitHub Actions automatically builds and deploys

## Deployment Process

GitHub Actions workflow (`.github/workflows/main.yml`):

1. Trigger on push to `main`
2. Checkout code
3. Setup Node.js
4. Install dependencies
5. Run build (`yarn build`)
6. Deploy `/out` to GitHub Pages

## Best Practices Followed

- ✅ TypeScript for type safety
- ✅ Component modularity
- ✅ Responsive design
- ✅ Accessibility (ARIA labels, semantic HTML)
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Code splitting (automatic with Next.js)
- ✅ Image optimization
- ✅ Clean code principles
- ✅ Git best practices
- ✅ Documentation

## Future Considerations

Potential improvements:
- Add more languages
- Blog section with MDX
- Project detail pages
- Contact form with backend
- Analytics integration
- A/B testing capabilities
- Progressive Web App (PWA) features

---

**Last Updated**: January 2025  
**Version**: 2.0  
**Maintainer**: Douglas Pardim

