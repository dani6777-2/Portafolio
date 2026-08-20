# AGENTS.md — Daniel Morales Portfolio

## Proyecto
Portafolio personal en React 18 + Vite 5 + Tailwind 3 + framer-motion + FontAwesome.
Orientado a inglés/español con i18n propio (sin librería externa).

## Comandos (siempre correr antes de terminar una tarea)
- Verificación completa: `npm run verify` (chequeo de traducciones + eslint + typecheck + build)
- Solo typecheck: `npm run typecheck`
- Solo lint: `npm run lint`
- Dev server: `npm run dev`

## Despliegue local (Docker)
```sh
docker build -t portafolio-dani . && \
docker rm -f portafolio-dani && \
docker run -d --name portafolio-dani -p 8080:80 --restart unless-stopped portafolio-dani
```
El sitio se sirve en http://localhost:8080. Los assets con hash se cachean 1 año en nginx.

## Convenciones
- Traducciones en `src/i18n/translations.tsx`: bloques `es` y `en` como `Record<string, string>`.
  Toda clave usada con `t('...')` DEBE existir en ambos idiomas. El verificador
  (`scripts/check-translations.mjs`) lo valida en `npm run verify` y `npm test`.
- Componentes en `src/components/`, estilos con utilidades Tailwind. Paleta: paper
  `#EFEBE3`, ink `#111110`, accent `#FF3B00`, muted `#5C5750`.
- Tipografías: Syne (display / headings), Inter (body), JetBrains Mono (mono).
- No hardcodear strings de UI en componentes: usar claves de traducción.
- El HTML raíz (`index.html`) contiene SEO, schema.org JSON-LD, og/twitter meta y PWA.

## Estado
v4 (diseño denso). Secciones: Hero, Manifesto, Experiencia, Proyectos, Skills,
Certificados, FAQ, Contacto + Loader intro (solo 1 vez por sesión).