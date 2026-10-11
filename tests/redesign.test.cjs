const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const { createRequire } = require('node:module')
const root = path.resolve(__dirname, '..')
function load(relative) {
  const filename = path.join(root, relative)
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  }).outputText
  const module = { exports: {} }
  const local = createRequire(filename)
  const requireModule = (name) => {
    if (name.startsWith('@/'))
      return load(
        `src/${name.slice(2)}${name.startsWith('@/components/') ? '.tsx' : '.ts'}`
      )
    if (name.startsWith('.')) {
      for (const extension of ['.tsx', '.ts']) {
        const candidate = path.resolve(path.dirname(filename), name + extension)
        if (fs.existsSync(candidate))
          return load(path.relative(root, candidate))
      }
    }
    return local(name)
  }
  vm.runInNewContext(
    output,
    {
      module,
      exports: module.exports,
      require: requireModule,
      process,
      console,
      URL,
      Date,
    },
    { filename }
  )
  return module.exports
}
const render = (file, props) =>
  renderToStaticMarkup(React.createElement(load(file).default, props))
test('the hero introduces Dismas and his work without a role ticker', () => {
  const html = render('src/components/Hero.tsx')
  assert.match(html, /Dismas/)
  assert.match(html, /AI tools/)
  assert.doesNotMatch(html, /aria-live|digital experiences|Current role/)
  assert.match(html, /href="#work"/)
  assert.match(html, /href="\/resume.pdf"/)
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1)
})
test('every featured project explains the problem, decision and scope', () => {
  const { projects } = load('src/lib/projects.ts')
  for (const project of projects.filter((p) => p.featured)) {
    assert.ok(project.story, `${project.id} needs a concrete narrative`)
    for (const key of ['problem', 'decision', 'scope'])
      assert.ok(project.story[key].length > 40)
    const html = render('src/components/ProjectCard.tsx', {
      project,
      featured: true,
    })
    assert.match(html, /Architecture sketch/)
    assert.ok(html.includes(project.githubUrl))
    assert.ok(html.includes(`/projects/${project.id}`))
    assert.match(html, /Independent project/)
    assert.doesNotMatch(html, />Live<|live demo/)
  }
})
test('project detail exposes the project narrative and implementation boundary', () => {
  const html = render('src/app/projects/[slug]/page.tsx', {
    params: { slug: 'mote' },
  })
  for (const title of ['The problem', 'The decision', 'Scope and limits'])
    assert.ok(html.includes(title))
  assert.match(html, /operating-system sandbox/)
})
test('navigation provides a skip link and an explicitly controlled mobile menu', () => {
  const html = render('src/components/Header.tsx')
  assert.match(html, /href="#main-content"/)
  assert.match(html, /aria-expanded="false"/)
  assert.match(html, /aria-controls="mobile-navigation"/)
  assert.match(html, /aria-label="Main navigation"/)
})
test('public copy drops unsupported universal network and privacy promises', () => {
  for (const file of [
    'src/app/projects/page.tsx',
    'src/app/blog/page.tsx',
    'src/components/ContactForm.tsx',
  ]) {
    const source = fs.readFileSync(path.join(root, file), 'utf8')
    assert.doesNotMatch(
      source,
      /Every device\s+acts as both server|bigger the user base|maximum reusability|kept private and secure|building the future/
    )
  }
})
