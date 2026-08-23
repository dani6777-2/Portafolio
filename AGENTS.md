# AGENTS.md — Daniel Morales Portfolio

## Proyecto
Portafolio personal en Astro 5 + React islands + Tailwind 3 + JetBrains Mono.
Estética terminal/hacker. Orientado a inglés/español con i18n propio (sin librería externa).

## Comandos (siempre correr antes de terminar una tarea)
- Verificación completa: `npm run verify` (chequeo de traducciones + build)
- Solo build: `npm run build`
- Dev server: `npm run dev`

## Despliegue local (Docker)
```sh
docker build -t portafolio-dani . && \
docker rm -f portafolio-dani && \
docker run -d --name portafolio-dani -p 8080:80 --restart unless-stopped portafolio-dani
```
El sitio se sirve en http://localhost:8080. Los assets con hash se cachean 1 año en nginx.

## Convenciones
- Traducciones en `src/i18n/translations.ts`: bloques `es` y `en` como `Record<string, string>`.
  Toda clave usada con `t('...')` DEBE existir en ambos idiomas. El verificador
  (`scripts/check-translations.mjs`) lo valida en `npm run verify` y `npm test`.
- Secciones Astro en `src/sections/` (estáticas, 0 JS).
- Componentes React interactivos en `src/components/` (islands: client:load o client:visible).
- Paleta terminal: bg `#0a0a0a`, card `#111111`, green `#00ff41`, cyan `#00d4ff`,
  text `#b0b0b0`, dim `#3a3a3a`, white `#e0e0e0`.
- Tipografía: JetBrains Mono (todo monospace).
- No hardcodear strings de UI: usar claves de traducción.
- Layout base en `src/layouts/Layout.astro` contiene SEO, schema.org JSON-LD, og/twitter meta.

## Estado
v6 (diseño terminal/hacker). Secciones: Hero, About, Experience, Projects, Skills,
Certs, FAQ, Connect + Terminal Loader (solo 1 vez por sesión).
React islands: TerminalLoader, TerminalNav, LangToggle, FaqAccordion.