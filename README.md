# Este será un proyecto test estamos

Web estática en español (HTML/CSS) que describe este proyecto de prueba.

**Sitio publicado:** https://moibaldenegro.github.io/este-sera-un-proyecto-test-estamos/

## Estructura

- `site/` — el sitio: `site/index.html` y `site/css/styles.css`.
- `tests/` — pruebas con el test runner integrado de Node (`node --test`).
- `.github/workflows/pages.yml` — workflow de despliegue.
- `docs/` — visión, arquitectura y backlog.

## Editar el sitio

Modifica el contenido en `site/index.html` y los estilos en `site/css/styles.css`. No hay paso de compilación: lo que está en `site/` es lo que se publica.

## Correr en local

Requiere Node.js 20 o superior. Desde la raíz del proyecto:

```bash
npx --yes serve site
```

También puedes abrir `site/index.html` directamente en el navegador.

## Pruebas

```bash
npm test
```

No tiene dependencias que instalar (usa `node --test tests/`).

## Despliegue

Cada push a `main` (o ejecución manual con `workflow_dispatch`) lanza el workflow **Deploy to GitHub Pages**: instala Node 20, corre `npm test` y, si pasa, publica la carpeta `site/` en GitHub Pages. Si las pruebas fallan, no se despliega.

Requisito único: en *Settings → Pages* del repositorio, **Source** debe estar en **GitHub Actions**.
