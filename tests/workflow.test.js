const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const yml = fs.readFileSync(path.join(__dirname, '..', '.github', 'workflows', 'pages.yml'), 'utf8');

test('workflow de Pages tiene triggers, permisos y pasos requeridos', () => {
  for (const s of ['workflow_dispatch', 'branches: [main]', 'contents: read', 'pages: write',
    'id-token: write', 'group: pages', 'npm test', 'actions/configure-pages',
    'actions/upload-pages-artifact', 'path: site', 'actions/deploy-pages']) {
    assert.ok(yml.includes(s), `falta ${s}`);
  }
  assert.ok(!yml.includes('\t'), 'YAML no debe usar tabs');
});
