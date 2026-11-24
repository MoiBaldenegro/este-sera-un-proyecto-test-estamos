const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'site', 'index.html'), 'utf8');

test('html declara lang="es"', () => {
  assert.match(html, /<html[^>]*\slang=["']es["']/i);
});

test('tiene meta viewport', () => {
  assert.match(html, /<meta[^>]*name=["']viewport["'][^>]*>/i);
});

test('tiene title no vacío', () => {
  assert.match(html, /<title>\s*\S[^<]*<\/title>/i);
});

test('tiene landmarks header, main y footer', () => {
  for (const tag of ['header', 'main', 'footer']) {
    assert.match(html, new RegExp(`<${tag}[\s>]`, 'i'));
  }
});

test('tiene las tres secciones requeridas', () => {
  const sections = html.match(/<section[\s>]/gi) || [];
  assert.ok(sections.length >= 3);
  for (const h of ['El proyecto', 'La factory', 'Cómo se probó']) {
    assert.match(html, new RegExp(`<h2[^>]*>\s*${h}\s*</h2>`));
  }
});

test('footer enlaza al repositorio', () => {
  const footer = html.match(/<footer[\s\S]*<\/footer>/i)[0];
  assert.match(footer, /href=["']https:\/\/github\.com\/MoiBaldenegro\/este-sera-un-proyecto-test-estamos["']/);
});

test('enlaza la hoja de estilos con ruta relativa y el archivo existe', () => {
  const m = html.match(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/i);
  assert.ok(m, 'falta <link rel="stylesheet">');
  assert.doesNotMatch(m[1], /^(\/|[a-z]+:)/i, 'la ruta debe ser relativa');
  const css = path.join(__dirname, '..', 'site', m[1]);
  assert.ok(fs.existsSync(css));
  assert.ok(fs.statSync(css).size > 0);
});

test('tiene meta description de 50 a 160 caracteres', () => {
  const m = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
  assert.ok(m, 'falta meta description');
  assert.ok(m[1].length >= 50 && m[1].length <= 160, `longitud ${m[1].length}`);
});
