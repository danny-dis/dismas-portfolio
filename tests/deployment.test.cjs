const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const root = path.resolve(__dirname, '..')

test('Vercel uses the same frozen npm dependency graph as passing CI', () => {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'))
  assert.equal(config.framework, 'nextjs')
  assert.equal(config.installCommand, 'npm ci')
  assert.equal(config.buildCommand, 'npm run build')
  const lock = JSON.parse(fs.readFileSync(path.join(root, 'package-lock.json'), 'utf8'))
  assert.equal(lock.packages['node_modules/next'].version, '14.2.35')
})
