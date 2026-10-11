const fs = require('node:fs')
const path = require('node:path')
const PDFDocument = require('pdfkit')
const cv = JSON.parse(fs.readFileSync(path.join(__dirname, '../content/resume.json'), 'utf8'))
const output = path.join(__dirname, '../public/resume.pdf')
const doc = new PDFDocument({ size: 'A4', margin: 42, bufferPages: true, info: { Title: `${cv.name} - CV`, Author: cv.name, Subject: 'Independent project experience: software, AI systems and frontend' } })
const stream = fs.createWriteStream(output)
doc.pipe(stream)
const width = doc.page.width - 84
const teal = '#0f766e'
const ink = '#172033'
function paragraph(text, options = {}) {
  doc.font('Helvetica').fontSize(9.1).fillColor(ink).text(text, { width, lineGap: 2, ...options })
}
function section(title) {
  doc.moveDown(0.55)
  doc.font('Helvetica-Bold').fontSize(10).fillColor(teal).text(title.toUpperCase(), { width, characterSpacing: 0.7 })
  doc.moveTo(42, doc.y + 3).lineTo(doc.page.width - 42, doc.y + 3).strokeColor('#cbd5e1').lineWidth(0.5).stroke()
  doc.moveDown(0.55)
}
doc.font('Helvetica-Bold').fontSize(23).fillColor(ink).text(cv.name, { width })
doc.moveDown(0.2)
doc.font('Helvetica').fontSize(11).fillColor(teal).text(cv.title, { width })
doc.moveDown(0.35)
paragraph(cv.location, { lineGap: 1 })
paragraph(cv.email, { link: `mailto:${cv.email}`, lineGap: 1 })
paragraph(cv.github, { link: cv.github, lineGap: 1 })
paragraph(cv.portfolio, { link: cv.portfolio, lineGap: 1 })
section('Profile')
paragraph(cv.summary)
section('Skills')
for (const skill of cv.skills) paragraph(`${skill.label}: ${skill.text}`, { lineGap: 1 })
section('Selected independent projects')
for (const project of cv.projects) {
  doc.font('Helvetica-Bold').fontSize(9.8).fillColor(ink).text(project.title, { width })
  doc.font('Helvetica').fontSize(8).fillColor(teal).text(project.url, { width, link: project.url, lineGap: 1 })
  paragraph(project.bullets.map(b => `• ${b}`).join('\n'), { lineGap: 1 })
  doc.font('Helvetica-Oblique').fontSize(8).fillColor('#475569').text(project.stack, { width })
  doc.moveDown(0.45)
}
section('Education & availability')
paragraph(cv.education)
paragraph(cv.additional, { lineGap: 1 })
const pages = doc.bufferedPageRange()
if (pages.count !== 1) throw new Error(`CV must be one page, got ${pages.count}; adjust spacing before publishing`)
doc.end()
stream.on('finish', () => console.log(`CV generated: ${output} (${fs.statSync(output).size} bytes; 1 page)`))
stream.on('error', error => { console.error(error); process.exitCode = 1 })
