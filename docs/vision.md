# Visión del producto

## Problema
Se está probando la Agentic Factory desde otro equipo dentro de la red. Hace falta una web sencilla que explique de qué trata esta prueba y que demuestre el ciclo completo: idea → código → despliegue público en GitHub Pages.

## Usuarios
- Miembros del equipo que evalúan la factory y quieren ver un resultado desplegado.
- Cualquier visitante con el enlace que quiera entender qué es esta prueba.

## Alcance del MVP (verificable)
- [ ] Una página estática (`index.html` + CSS, sin build ni frameworks) en español.
- [ ] Secciones: título, qué es este proyecto de prueba, qué es la factory y cómo se probó (idea → issue → agentes → despliegue), y pie con enlace al repositorio.
- [ ] Diseño limpio y responsive (legible en móvil y escritorio).
- [ ] HTML semántico, `lang="es"`, meta viewport y title; contraste adecuado.
- [ ] Despliegue automático a GitHub Pages con GitHub Actions al hacer push a `main`.
- [ ] La URL pública (`https://moibaldenegro.github.io/este-sera-un-proyecto-test-estamos/`) responde 200 y muestra el contenido.
- [ ] README con enlace al sitio y cómo editarlo.

## Fuera de alcance
Backend, base de datos, autenticación, CMS, analítica, dominio propio, multilenguaje, frameworks JS.

## Supuestos
- "Detallando esto" = la web describe el propio proyecto de prueba y la factory (el contenido lo redacta el agente a partir de la idea del issue).
- Idioma: español. Sin dominio propio; se usa la URL de github.io.
- El repo es público o su plan permite GitHub Pages; si Pages no está habilitado, se configura con la fuente "GitHub Actions" (puede requerir a una persona).
- Rutas relativas en los assets, porque se sirve bajo `/este-sera-un-proyecto-test-estamos/`.

## Stack
HTML5 + CSS3 puros, carpeta `site/` o raíz; GitHub Actions (`actions/configure-pages`, `upload-pages-artifact`, `deploy-pages`). Sin dependencias.

## Criterios de éxito
- El sitio está accesible públicamente en la URL de Pages.
- Cada push a `main` lo redespliega sin intervención.
- Lighthouse (accesibilidad/SEO) ≥ 90 en la página.
