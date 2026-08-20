# Portafolio · Daniel Morales

Portafolio profesional de [Daniel Morales](https://dmoralestech.me), Ingeniero de Software Semi Senior especializado en aplicaciones cloud-native con **Golang** y **Google Cloud (GCP)**, con experiencia full stack en React, Java y Node.js.

## Stack

- **React 18** + **TypeScript**
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Font Awesome** para iconografía

## Scripts

```bash
npm install       # Instalar dependencias
npm run dev       # Servidor de desarrollo (puerto 3000)
npm run build     # Build de producción en /dist
npm run lint      # ESLint
npm run preview   # Previsualizar el build
```

## Estructura

```
src/
├── components/    # Header, Home, AboutMe, Skills, Curriculum (experiencia y certificaciones), Services, FAQ, Footer, Loader
├── assets/img/    # Foto de perfil, CV y certificados
├── App.tsx        # Composición de secciones, tema oscuro, loader
└── main.tsx       # Punto de entrada
```

## Características

- Enfoque en recorrido profesional: experiencia laboral, formación y certificaciones verificables
- Modo oscuro/claro con persistencia en `localStorage` y detección del sistema
- Scrollspy en la navegación
- Loader de entrada
- Simulador de entrevista interactivo (FAQ)
- SEO: Open Graph, Twitter Cards, Schema.org y PWA manifest
