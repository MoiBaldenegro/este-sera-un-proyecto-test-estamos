# Backlog (orden de ejecución)

1. [p0] Esqueleto ejecutable: `package.json`, `site/index.html` mínimo, `tests/site.test.js`, `npm test` pasa.
2. [p0] Contenido completo de la página (secciones del MVP).
3. [p1] CSS responsive y accesible.
4. [p0] Workflow de despliegue a Pages.
5. [p1] README (sitio, editar, correr, probar).
6. [p1] Verificar URL pública 200 y habilitar Pages (puede requerir persona).
7. [p2] Auditoría de accesibilidad/SEO (meta description, contraste, Lighthouse ≥ 90).

Hecho: visión (#1), arquitectura y backlog (#2).

## Verificación de despliegue y SEO (#8) — 2026-11-24

- Meta description añadida en `site/index.html` (con test).
- `curl -I https://moibaldenegro.github.io/este-sera-un-proyecto-test-estamos/` → **404** (Pages no está habilitado con fuente GitHub Actions; ver #9). Requiere una persona: Settings → Pages → Source: GitHub Actions, y re-ejecutar el workflow.
- Lighthouse accesibilidad/SEO: **pendiente**, no medible hasta que la URL pública responda 200. Puntajes por documentar aquí tras el despliegue.
