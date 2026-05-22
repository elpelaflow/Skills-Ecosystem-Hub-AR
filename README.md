# Skills Ecosystem Hub AR

Aplicación web Vite + React para visualizar la familia de skills legales, regulatorias y operativas orientadas a Argentina.

## Objetivo

La web funciona como:

- portada del ecosistema;
- catálogo navegable de skills;
- ficha individual por repo;
- mapa de relaciones;
- índice de repos;
- capa de contexto para compartir una skill sin perder el sistema completo.

## Stack

- Vite
- React
- React Router

## Compatibilidad con GitHub Pages

La app quedó preparada para GitHub Pages usando `HashRouter`.

Eso implica rutas como:

- `/#/skills`
- `/#/skills/nda`
- `/#/categorias`

La ventaja es que GitHub Pages puede servir la app sin configuración extra de fallback para rutas internas.

## Rutas

- `/`
- `/skills`
- `/skills/:slug`
- `/categorias`
- `/categorias/:slug`
- `/mapa`
- `/framework`
- `/repos`

## Estructura

- `index.html`: entrada del sitio.
- `src/main.jsx`: bootstrap de React.
- `src/App.jsx`: layout, rutas y vistas.
- `src/data/skills.js`: dataset del ecosistema.
- `src/styles.css`: sistema visual del hub.

## Uso

```bash
npm install
npm run dev
```

Para build de producción:

```bash
npm run build
```

## Publicación en GitHub Pages

Flujo simple:

1. correr `npm run build`
2. subir el contenido de `dist/` a la rama que uses para Pages
3. configurar GitHub Pages para servir esa rama o carpeta

Como la app usa `HashRouter` y `base: "./"`, no depende de una raíz absoluta del sitio.
