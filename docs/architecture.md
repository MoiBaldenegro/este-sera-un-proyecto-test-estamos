# Arquitectura

## Stack
HTML5 + CSS3 puros, sin build ni frameworks. Despliegue con GitHub Actions a GitHub Pages. Tests con Node ≥ 20 (`node:test`, sin dependencias npm) que validan el HTML/CSS estático.

## Estructura de carpetas
```
site/
  index.html        # única página (es, semántica)
  css/styles.css    # estilos responsive
tests/
  site.test.js      # valida existencia y contenido de site/
.github/workflows/
  pages.yml         # deploy a Pages en push a main
package.json        # solo scripts: "test": "node --test tests/"
README.md
docs/
```
Los assets usan rutas relativas (el sitio se sirve bajo `/este-sera-un-proyecto-test-estamos/`).

## Componentes
- **Sitio** (`site/`): header/título, secciones "El proyecto", "La factory", "Cómo se probó" (idea → issue → agentes → despliegue) y footer con enlace al repo.
- **Tests** (`tests/`): comprueban `lang="es"`, viewport, `<title>`, landmarks semánticos, secciones, enlaces relativos que existan, enlace al repo.
- **Workflow** (`pages.yml`): en push a `main` y `workflow_dispatch`: checkout → `npm test` → `configure-pages` → `upload-pages-artifact` (path `site`) → `deploy-pages`. Permisos: `contents: read`, `pages: write`, `id-token: write`; concurrency `pages`.

## Cómo correr y probar
- Ver local: abrir `site/index.html` o `npx serve site` / `python -m http.server -d site`.
- Tests: `npm test`.
- Despliegue: push a `main`. Requiere Settings → Pages → Source = "GitHub Actions" (acción humana si no está activo).
- URL: https://moibaldenegro.github.io/este-sera-un-proyecto-test-estamos/
