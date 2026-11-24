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
