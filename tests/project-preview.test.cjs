const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')
const root = path.resolve(__dirname, '..')
function loadProjects() {
  const module = { exports: {} }
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(path.join(root, 'src/lib/projects.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { module, exports: module.exports })
  return module.exports.projects
}

test('a genuine Drift interface preview is backed by a real, dimensioned PNG', () => {
  const preview = loadProjects().find((project) => project.id === 'drift').preview
  assert.ok(preview, 'Drift needs the verified interface capture')
  assert.match(preview.src, /^\/projects\/drift-.*\.png$/)
  const file = fs.readFileSync(path.join(root, 'public', preview.src))
  assert.deepEqual(Array.from(file.subarray(0, 8)), [137,80,78,71,13,10,26,10])
  assert.equal(file.readUInt32BE(16), preview.width)
  assert.equal(file.readUInt32BE(20), preview.height)
  assert.match(preview.alt, /empty.*question|question.*empty/i)
  assert.match(preview.caption, /local/i)
  assert.match(preview.caption, /no model run/i)
})

test('real previews retain an image alternative, dimensions and architecture context', () => {
  const preview = fs.readFileSync(path.join(root, 'src/components/ProjectPreview.tsx'), 'utf8')
  for (const source of ['alt={preview.alt}', 'width={preview.width}', 'height={preview.height}', 'preview.caption', 'preview.src']) assert.ok(preview.includes(source), source)
  const detail = fs.readFileSync(path.join(root, 'src/app/projects/[slug]/page.tsx'), 'utf8')
  assert.match(detail, /ProjectPreview/)
  assert.match(detail, /<ProjectDiagram/)
})

test('only the detail preview is prioritized when it is above the fold', () => {
  const component = fs.readFileSync(path.join(root, 'src/components/ProjectPreview.tsx'), 'utf8')
  const detail = fs.readFileSync(path.join(root, 'src/app/projects/[slug]/page.tsx'), 'utf8')
  assert.match(component, /priority = false/)
  assert.match(component, /priority=\{priority\}/)
  assert.match(detail, /<ProjectPreview preview=\{project\.preview\} priority\s*\/>/)
})
