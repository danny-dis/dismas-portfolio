const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const { EventEmitter } = require('node:events')
const root = path.resolve(__dirname, '..')
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')
const cv = JSON.parse(read('content/resume.json'))
const linkedin = 'https://www.linkedin.com/in/dismas-muriuki-b970b91b7'

test('education separates completed studies from the pending degree award', () => {
  assert.match(cv.education, /studies completed/i)
  assert.match(cv.education, /award expected.*2027/i)
  assert.doesNotMatch(cv.summary + cv.education, /undergraduate|in progress|currently studying|graduated in 2027/i)
  for (const file of ['src/app/page.tsx', 'src/app/about/page.tsx']) {
    const source = read(file).replace(/\s+/g, ' ')
    assert.match(source, /completed my computer science studies/)
    assert.match(source, /award.*expected.*2027/)
    assert.doesNotMatch(source, /studying computer science|Today I’m studying|BSc Computer Science \(in progress\)/)
  }
})

test('full-time remote availability is explicit in the introduction and CV', () => {
  assert.match(read('src/components/Hero.tsx'), /full-time.*remote/)
  assert.match(cv.summary, /full-time remote/)
  assert.match(cv.location, /Kenya.*UTC\+3/)
})

test('confirmed LinkedIn is available from Contact, footer and CV sources', () => {
  assert.equal(cv.linkedin, linkedin)
  for (const file of ['src/app/contact/page.tsx', 'src/components/Footer.tsx']) {
    const source = read(file)
    assert.ok(source.includes(`href="${linkedin}"`), file)
    assert.match(source, /LinkedIn/)
  }
  const markdown = read('docs/CV.md')
  for (const text of [cv.summary, cv.education, linkedin]) assert.ok(markdown.includes(text), text)
})

test('PDF generator actually renders the LinkedIn field from canonical data', () => {
  const rendered = []
  class FakePdf {
    constructor() { this.page = { width: 595 }; this.y = 42 }
    pipe() { return this }
    text(text) { rendered.push(String(text)); return this }
    font() { return this }
    fontSize() { return this }
    fillColor() { return this }
    moveDown() { return this }
    moveTo() { return this }
    lineTo() { return this }
    strokeColor() { return this }
    lineWidth() { return this }
    stroke() { return this }
    bufferedPageRange() { return { count: 1 } }
    end() {}
  }
  vm.runInNewContext(read('scripts/generate-resume.js'), {
    __dirname: path.join(root, 'scripts'), console, process,
    require: (name) => name === 'pdfkit' ? FakePdf : name === 'node:fs' ? { ...fs, createWriteStream: () => new EventEmitter() } : require(name),
  })
  assert.ok(rendered.includes(linkedin))
  assert.ok(rendered.includes(cv.education))
})
