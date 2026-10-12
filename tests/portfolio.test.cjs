const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const ts = require('typescript')
const { createRequire } = require('node:module')
const root = path.resolve(__dirname, '..')

function loadTs(relative) {
  const filename = path.join(root, relative)
  const source = fs.readFileSync(filename, 'utf8')
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText
  const module = { exports: {} }
  const localRequire = createRequire(filename)
  vm.runInNewContext(output, { module, exports: module.exports, require: localRequire, process, console, URL }, { filename })
  return module.exports
}

module.exports = { loadTs, root }

test('featured work reflects the current public AI projects', () => {
  const { getFeaturedProjects } = loadTs('src/lib/projects.ts')
  const ids = Array.from(getFeaturedProjects(), p => p.id)
  assert.deepEqual(ids, ['dmr-x', 'mote', 'chimera', 'drift'])
})

test('portfolio copy uses supported positioning and consistent education', () => {
  const footer = fs.readFileSync(path.join(root, 'src/components/Footer.tsx'), 'utf8')
  assert.doesNotMatch(footer, /production-grade|16\+/)
  assert.match(footer, /design/i)
  for (const file of ['src/app/page.tsx', 'src/app/about/page.tsx']) {
    const source = fs.readFileSync(path.join(root, file), 'utf8')
    assert.match(source, /expected graduation 2027/i)
    assert.doesNotMatch(source, /completed my BSc.*coursework/i)
  }
})

test('CV is repository-owned, accurate and application-ready', () => {
  const cvPath = path.join(root, 'content/resume.json')
  assert.ok(fs.existsSync(cvPath), 'CV source must be checked into the portfolio repository')
  const cv = JSON.parse(fs.readFileSync(cvPath, 'utf8'))
  assert.equal(cv.name, 'Dismas Muriuki Mutabari')
  assert.match(cv.education, /expected graduation 2027/i)
  assert.equal(cv.email, 'muriukidismas9@gmail.com')
  assert.deepEqual(cv.projects.map(p => p.id), ['dmr-x', 'mote', 'voting', 'chimera'])
  assert.doesNotMatch(JSON.stringify(cv), /production-grade|Lead Engineer|57\+|244\+/)
})

test('unverified legacy blog drafts are not published or directly accessible', async () => {
  const blog = loadTs('src/lib/blog.ts')
  const posts = await blog.getAllBlogPosts()
  assert.equal(posts.some(p => /Astra|Fable|Rankings September 2025/.test(p.title)), false)
  assert.equal(await blog.getBlogPostBySlug('gpt-6-astra-agi-era'), null)
})

test('project pages use the same evidence-backed features as their cards', () => {
  const source = fs.readFileSync(path.join(root, 'src/app/projects/[slug]/page.tsx'), 'utf8')
  assert.match(source, /project\.features\.map/)
  assert.doesNotMatch(source, /57\+|244\+|function getProjectFeatures/)
})

test('site metadata points to the confirmed live deployment', () => {
  for (const file of ['src/app/layout.tsx', 'src/app/robots.ts', 'src/app/sitemap.ts', 'src/app/blog/[slug]/page.tsx']) {
    const source = fs.readFileSync(path.join(root, file), 'utf8')
    assert.doesNotMatch(source, /https:\/\/dismas\.dev/)
    assert.match(source, /https:\/\/dismas-portfolio\.vercel\.app/)
  }
})

test('npm manifest dependencies match the committed lockfile', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
  const lock = JSON.parse(fs.readFileSync(path.join(root, 'package-lock.json'), 'utf8')).packages['']
  for (const section of ['dependencies', 'devDependencies']) assert.deepEqual(pkg[section], lock[section])
})

test('favicon and social preview are real nonempty image assets', () => {
  const icon = fs.readFileSync(path.join(root, 'public/favicon.ico'))
  assert.ok(icon.length > 100)
  const image = fs.readFileSync(path.join(root, 'public/og-image.png'))
  assert.deepEqual(Array.from(image.subarray(0, 8)), [137,80,78,71,13,10,26,10])
})
