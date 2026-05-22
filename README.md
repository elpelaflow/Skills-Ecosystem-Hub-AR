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
