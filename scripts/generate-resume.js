const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const { marked } = require('marked');

const mdPath = path.join(__dirname, '..', '..', 'Dismas_Muriuki_CV.md');
const pdfPath = path.join(__dirname, '..', 'public', 'resume.pdf');

const md = fs.readFileSync(mdPath, 'utf8');
const tokens = marked.lexer(md);

const doc = new PDFDocument({ size: 'A4', margin: 50 });
const stream = fs.createWriteStream(pdfPath);
doc.pipe(stream);

// Parse inline markdown
function parseInline(elements, opts = {}) {
  if (!elements) return;
  for (const el of elements) {
    switch (el.type) {
      case 'text':
      case 'codespan':
      case 'strong':
      case 'em':
      case 'del':
      case 'escape': {
        let text = el.text;
        const isStrong = el.type === 'strong';
        const isEm = el.type === 'em';
        const isCode = el.type === 'codespan';
        if (isStrong) doc.font('Helvetica-Bold');
        if (isEm) doc.font('Helvetica-Oblique');
        if (isCode) doc.font('Courier');
        doc.text(text, { continued: true });
        if (isStrong || isEm || isCode) doc.font('Helvetica');
        break;
      }
      case 'link':
        doc.text(el.text, { continued: true, link: el.href });
        break;
      default:
        if (el.text) doc.text(el.text, { continued: true });
    }
  }
}

let afterTitle = false;

for (const token of tokens) {
  switch (token.type) {
    case 'heading': {
      if (token.depth === 1) {
        doc.font('Helvetica-Bold').fontSize(20).text(token.text, { align: 'center' });
        doc.moveDown(0.3);
        afterTitle = true;
      } else if (token.depth === 2) {
        doc.moveDown(0.8);
        doc.font('Helvetica-Bold').fontSize(13).fillColor('#0d9488');
        doc.text(token.text.toUpperCase());
        doc.fillColor('black').font('Helvetica');
        doc.moveTo(doc.x, doc.y + 2).lineTo(545, doc.y + 2).strokeColor('#0d9488').stroke();
        doc.moveDown(0.4);
      } else if (token.depth === 3) {
        doc.moveDown(0.5);
        doc.font('Helvetica-Bold').fontSize(11);
        doc.fillColor('#1e293b');
        doc.text(token.text);
        doc.fillColor('black').font('Helvetica');
        doc.moveDown(0.2);
      } else {
        doc.moveDown(0.4);
        doc.font('Helvetica-Bold').fontSize(10).text(token.text);
        doc.font('Helvetica');
        doc.moveDown(0.2);
      }
      break;
    }

    case 'paragraph': {
      // Check if it's a contact line with pipes
      const text = token.text || '';
      if (text.includes('📧') && text.includes('|')) {
        doc.font('Helvetica').fontSize(9);
        doc.text(text.replace(/\|/g, '  •  '), { align: 'center' });
        doc.moveDown(0.3);
      } else {
        doc.font('Helvetica').fontSize(10);
        const inline = marked.parseInline(text);
        // Simple approach: strip HTML tags for now but handle links
        const lines = text.split(/<br\s*\/?>/);
        lines.forEach((line, i) => {
          const clean = line.replace(/<[^>]+>/g, '');
          doc.text(clean, { align: 'left' });
          if (i < lines.length - 1) doc.moveDown(0.1);
        });
        doc.moveDown(0.3);
      }
      break;
    }

    case 'list': {
      doc.font('Helvetica').fontSize(10);
      token.items.forEach((item, idx) => {
        const bullet = item.task ? (item.checked ? '☑' : '☐') : '•';
        doc.text(`  ${bullet} `, { continued: true });
        // Parse inline items
        parseInline(item.tokens);
        if (idx < token.items.length - 1) doc.moveDown(0.15);
      });
      doc.moveDown(0.3);
      break;
    }

    case 'hr': {
      doc.moveDown(0.3);
      doc.moveTo(doc.x, doc.y).lineTo(545, doc.y).strokeColor('#e2e8f0').stroke();
      doc.moveDown(0.3);
      break;
    }

    case 'blockquote': {
      doc.moveDown(0.2);
      doc.font('Helvetica-Oblique').fontSize(9).fillColor('#475569');
      const text = token.text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
      doc.text(text, { indent: 20 });
      doc.fillColor('black').font('Helvetica');
      doc.moveDown(0.3);
      break;
    }

    default:
      break;
  }
}

doc.end();
stream.on('finish', () => console.log('PDF created:', pdfPath, '(' + fs.statSync(pdfPath).size + ' bytes)'));
stream.on('error', (e) => console.error('Error:', e));
