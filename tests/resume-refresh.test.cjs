const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const { EventEmitter } = require('node:events')
const root = path.resolve(__dirname, '..')
const cv = JSON.parse(fs.readFileSync(path.join(root, 'content/resume.json'), 'utf8'))

test('CV includes confirmed attachment duties and accurately attributed voting work', () => {
  assert.equal(cv.experience[0].title, 'Industrial Attachment — Centrino Technologies Limited')
  assert.equal(cv.experience[0].dates, 'June–August 2024 | Nairobi, Kenya')
  assert.match(cv.experience[0].bullets.join(' '), /video-based MySQL training.*knowledge-check assessments.*guidance/)
  const voting = cv.projects.find(p => p.id === 'voting')
  assert.match(voting.context, /Solo extension of an open-source project/)
  assert.match(voting.bullets.join(' '), /Subsequently rebuilt the local application/)
  assert.match(voting.bullets.join(' '), /integration remains in progress/)
  assert.doesNotMatch(JSON.stringify(cv), /Zophlic|live banking databases|national-election-grade|production-ready/i)
  assert.match(cv.otherProjects, /Happy Teens.*first university/)
  assert.match(cv.educationAdditional, /Nkubu.*B \(plain\)/)
})

test('CV generator renders experience, project context and additional education', () => {
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
  const fakeFs = { ...fs, createWriteStream: () => new EventEmitter() }
  vm.runInNewContext(fs.readFileSync(path.join(root, 'scripts/generate-resume.js'), 'utf8'), {
    __dirname: path.join(root, 'scripts'), console, process,
    require: name => name === 'pdfkit' ? FakePdf : name === 'node:fs' ? fakeFs : require(name),
  })
  const all = rendered.join('\n')
  assert.match(all, /Industrial Attachment — Centrino Technologies Limited/)
  assert.match(all, /June–August 2024/)
  assert.match(all, /video-based MySQL training/)
  assert.match(all, /Solo extension of an open-source project/)
  assert.match(all, /Subsequently rebuilt the local application/)
  assert.match(all, /Happy Teens/)
  assert.match(all, /Nkubu High School/)
})

test('Markdown CV matches all canonical project and attachment bullets', () => {
  const md = fs.readFileSync(path.join(root, 'docs/CV.md'), 'utf8')
  for (const project of cv.projects) {
    assert.ok(md.includes(project.title), project.title)
    for (const bullet of project.bullets) assert.ok(md.includes(bullet), bullet)
  }
  for (const job of cv.experience) {
    assert.ok(md.includes(job.title), job.title)
    for (const bullet of job.bullets) assert.ok(md.includes(bullet), bullet)
  }
  assert.doesNotMatch(md, /Zophlic|production-ready|national-election-grade/i)
})

test('editable Word CV is supplied as a real Office document', () => {
  const docx = fs.readFileSync(path.join(root, 'public/resume.docx'))
  assert.equal(docx.subarray(0, 2).toString(), 'PK')
  assert.ok(docx.length > 10000)
})
