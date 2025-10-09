# dwrp.github.io

[![Preview](https://img.shields.io/badge/preview-en%20vivo-brightgreen)](https://dwrp.github.io)
[![License](https://img.shields.io/badge/licencia-MIT-blue)](https://opensource.org/licenses/MIT)
[![Author](https://img.shields.io/badge/autor-Douglas%20Pardim-orange)](https://github.com/dwrp)
[![CI/CD](https://github.com/dwrp/dwrp.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/dwrp/dwrp.github.io/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)

> 🌍 **Idiomas**: [English](../README.md) | [Português](./README-pt-BR.md) | **Español**

¡Bienvenido a mi sitio web personal! Este repositorio contiene el código fuente de mi portafolio profesional, donde presento mi trayectoria, tecnologías que domino, proyectos desarrollados e información de contacto.

## 🎯 Sobre el Proyecto

Sitio web personal construido con las más modernas tecnologías web, enfocado en rendimiento, SEO y experiencia del usuario. El proyecto implementa una arquitectura limpia, escalable y completamente optimizada para motores de búsqueda.

### ✨ Destacados

- **Landing Page Moderna**: Diseño contemporáneo con animaciones fluidas y gradientes vibrantes
- **Totalmente Responsivo**: Experiencia perfecta en desktop, tablet y móvil
- **Multilingüe**: Soporte completo para Portugués, Inglés, Español y Chino Simplificado
- **SEO Optimizado**: Meta tags completas, Open Graph, Twitter Cards y JSON-LD structured data
- **Rendimiento**: Build estático optimizado con Next.js 15 y React 19
- **Temas**: Alternancia entre modo claro y oscuro

## 🚀 Tecnologías Utilizadas

### Core
- **[Next.js 15.5](https://nextjs.org/)** - Framework React con SSG/SSR
- **[React 19.2](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado de JavaScript

### UI/UX
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **[Shadcn UI](https://ui.shadcn.com/)** - Componentes UI reutilizables
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animaciones
- **[Lucide Icons](https://lucide.dev/)** - Iconos modernos

### Internacionalización
- **[next-intl](https://next-intl-docs.vercel.app/)** - i18n para Next.js
- Soporte nativo para 4 idiomas (pt-BR, en, es, zh-CN)

### DevOps
- **[GitHub Pages](https://pages.github.com/)** - Alojamiento estático
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD automatizado

## 📋 Funcionalidades

### Secciones del Sitio

- **🎨 Hero**: Presentación con estadísticas de carrera y enlaces sociales
- **👤 Sobre Mí**: Información profesional y competencias principales
- **💼 Experiencia**: Timeline interactiva con historial profesional detallado
- **🛠️ Habilidades**: Categorización de skills por área (Frontend, Backend, Mobile, DevOps)
- **🎓 Educación**: Formación académica y certificaciones profesionales
- **🚀 Proyectos**: Showcase de proyectos destacados con filtros por tipo
- **📧 Contacto**: Información de contacto y enlaces a redes sociales

### Recursos Técnicos

- ✅ **Menú Fijo**: Navegación persistente con indicador de sección activa
- ✅ **Menú Responsivo**: Drawer lateral en dispositivos móviles
- ✅ **Cambio de Idiomas**: Selector de idioma con persistencia en localStorage
- ✅ **Modo Oscuro/Claro**: Sistema de temas con preferencia del usuario
- ✅ **Animaciones Suaves**: Transiciones y efectos con Framer Motion
- ✅ **SEO Completo**: Meta tags, Open Graph, Twitter Cards, JSON-LD
- ✅ **Sitemap Dinámico**: Generación automática para mejor indexación
- ✅ **Robots.txt**: Configuración optimizada para crawlers

## 🏗️ Estructura del Proyecto

```
dwrp.github.io/
├── docs/                    # Documentación del proyecto
│   ├── README-pt-BR.md     # Documentación en portugués
│   ├── README-es.md        # Documentación en español
│   └── project-structure.md # Estructura detallada del proyecto
├── messages/               # Archivos de traducción (i18n)
│   ├── en.json            # Inglés
│   ├── pt-BR.json         # Portugués de Brasil
│   ├── es.json            # Español
│   └── zh-CN.json         # Chino Simplificado
├── public/                # Archivos estáticos
│   ├── cover.jpeg         # Imagen de preview (Open Graph)
│   ├── cover2.jpeg        # Imagen alternativa
│   ├── dwrp.svg           # Logo
│   └── favicon.ico        # Favicon
├── src/
│   ├── app/               # App Router (Next.js 15)
│   │   ├── layout.tsx     # Layout raíz con metadata
│   │   ├── page.tsx       # Página principal
│   │   ├── page-content.tsx # Contenido con i18n y JSON-LD
│   │   ├── robots.ts      # Generador de robots.txt
│   │   ├── sitemap.ts     # Generador de sitemap.xml
│   │   └── sections/      # Secciones principales (Header, Main, Footer)
│   ├── components/
│   │   ├── sections/      # Componentes de sección
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/            # Componentes Shadcn UI
│   ├── hooks/
│   │   └── useClientLocale.ts # Hook de gestión de idioma
│   ├── lib/
│   │   ├── metadata.ts    # Utilidades de SEO y JSON-LD
│   │   └── utils.ts       # Utilidades generales
│   ├── store/             # Estado global (Zustand)
│   ├── styles/            # Estilos globales
│   └── locales.ts         # Configuración de idiomas
├── CHANGELOG.md           # Historial de cambios
├── package.json
└── README.md              # Documentación principal

```

Para más detalles sobre la estructura, vea [project-structure.md](./project-structure.md).

## 🔧 Cómo Usar

### Prerrequisitos

- Node.js 18+ o superior
- Yarn o NPM

### Instalación

```bash
# Clone el repositorio
git clone https://github.com/dwrp/dwrp.github.io.git

# Entre en la carpeta
cd dwrp.github.io

# Instale las dependencias
yarn install
# o
npm install
```

### Desarrollo

```bash
# Inicie el servidor de desarrollo
yarn dev
# o
npm run dev

# Acceda a http://localhost:3000
```

### Build de Producción

```bash
# Genere el build estático
yarn build
# o
npm run build

# El build será generado en la carpeta /out
```

### Deploy

El deploy es automático vía GitHub Actions cuando hay push en la rama `main`. La aplicación es publicada en GitHub Pages.

## 🌐 Internacionalización (i18n)

El proyecto soporta 4 idiomas:

- 🇧🇷 **Portugués de Brasil** (pt-BR) - Idioma predeterminado
- 🇺🇸 **Inglés** (en)
- 🇪🇸 **Español** (es)
- 🇨🇳 **Chino Simplificado** (zh-CN)

Las traducciones son gestionadas a través de archivos JSON en la carpeta `messages/`. El idioma es seleccionado por el usuario y almacenado en localStorage para persistencia entre sesiones.

## 🎨 Personalización

### Colores y Temas

Los colores pueden ser personalizados editando el archivo `src/styles/globals.css`. El proyecto utiliza CSS Variables para fácil personalización:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... otras variables */
}
```

### Contenido

Todo el contenido del sitio puede ser editado en los archivos de traducción en `messages/*.json`. Simplemente actualice los textos en los idiomas deseados.

### Imágenes

Reemplace las imágenes en la carpeta `public/` manteniendo los mismos nombres de archivo, o actualice las referencias en `src/lib/metadata.ts`.

## 📊 SEO y Rendimiento

El proyecto implementa las mejores prácticas de SEO:

- **Meta Tags Completas**: Título, descripción, keywords, autor
- **Open Graph**: Soporte completo para Facebook, LinkedIn
- **Twitter Cards**: Cards optimizados con imágenes
- **JSON-LD**: Structured data (Person, Website, Breadcrumb)
- **Sitemap XML**: Generado automáticamente
- **Robots.txt**: Configurado para optimizar indexación
- **URLs Canónicas**: Evita contenido duplicado
- **Hreflang**: Soporte multilingüe adecuado

### Puntuación Lighthouse

El sitio alcanza puntuaciones excelentes en Lighthouse:
- Rendimiento: 95+
- Accesibilidad: 100
- Mejores Prácticas: 100
- SEO: 100

## 🤝 Contribuyendo

¡Las contribuciones son bienvenidas! Siéntase libre de:

1. Hacer un fork del proyecto
2. Crear una rama para su feature (`git checkout -b feature/MiFeature`)
3. Hacer commit de sus cambios (`git commit -m 'Añade MiFeature'`)
4. Push a la rama (`git push origin feature/MiFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](../LICENSE) - vea el archivo LICENSE para detalles.

## 📞 Contacto

- **Sitio Web**: [https://dwrp.github.io](https://dwrp.github.io)
- **GitHub**: [@dwrp](https://github.com/dwrp)
- **LinkedIn**: [Douglas Pardim](https://linkedin.com/in/douglaspardim)
- **Email**: douglas.pardim@ejemplo.com

## 🙏 Agradecimientos

- [Next.js Team](https://nextjs.org/) - Framework increíble
- [Vercel](https://vercel.com/) - Por la inspiración y herramientas
- [Shadcn](https://ui.shadcn.com/) - Por los componentes UI elegantes
- Comunidad Open Source

---

**Desarrollado con ❤️ por Douglas Pardim**

*Última actualización: Enero 2025*

