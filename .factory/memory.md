# Memoria de Este sera un proyecto test estamos

Decisiones, convenciones y aprendizajes que cualquier agente futuro debe conocer.
Agrega entradas cortas y fechadas; no borres las de otros salvo que ya no sean ciertas.

- 2026-11-24: Producto = web estática simple (HTML/CSS) en español que describe el proyecto de prueba, desplegada en GitHub Pages con Actions. Ver docs/vision.md.
- 2026-11-24: Arquitectura en docs/architecture.md: HTML/CSS en `site/`, tests con `node --test` (sin deps), workflow `.github/workflows/pages.yml`. Backlog en docs/backlog.md.
- 2026-11-24: Issue #9 (CI rojo Pages): causa = Pages sin habilitar (Source: GitHub Actions); no es arreglable desde código. Requiere acción humana.
- 2026-11-24: CSS en site/css/styles.css (mobile-first, breakpoint 768px, colores con contraste AA vía variables :root).
- 2026-11-24: #8: URL pública da 404 (Pages sin habilitar); meta description añadida; Lighthouse pendiente hasta que Pages funcione.
- 2026-11-24: #9: añadido enablement:true en configure-pages (best effort). Si falla, humano debe hacer repo público y Pages Source=GitHub Actions; no puedo hacerlo (gh bloqueado).
- 2026-11-24: Issue #10 (mismo CI rojo Pages): sin log; tests 9/9 OK; sigue requiriendo que un humano habilite Pages (Source=GitHub Actions). No se cambió código.
