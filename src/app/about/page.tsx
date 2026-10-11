import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Dismas Muriuki Mutabari, a software builder in Kenya studying computer science and building AI tools and interfaces.',
}

export default function AboutPage() {
  return (
    <div className="site-width inner-page">
      <header className="page-header">
        <p className="eyebrow">ABOUT / DISMAS MURIUKI MUTABARI</p>
        <h1>
          I got here by
          <br />
          figuring things out.
        </h1>
        <p className="copy">
          I’m a developer from Meru County, Kenya. I started with Linux on an
          Android phone, running it through Termux. A laptop came later. The
          curiosity was already there.
        </p>
      </header>
      <div className="about-grid">
        <div className="about-copy">
          <section className="story-section">
            <h2>What keeps me building</h2>
            <p>
              I’m interested in software I can understand and control. That
              leads me toward open source, self-hosted tools and systems whose
              parts can be used independently.
            </p>
            <p>
              My recent work is mostly around AI: routing requests in DMR-X,
              running bounded tool loops in MOTE, coordinating coding agents in
              Chimera, and keeping research and project ideas in Drift.
            </p>
            <Link href="/projects" className="text-link">
              Look through the projects{' '}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </section>
          <section className="story-section">
            <h2>Learning the interface side</h2>
            <p>
              The backend is only part of the work. I’m also developing my UI/UX
              practice through responsive React interfaces, component design and
              clearer task flows. I care about whether someone can tell what a
              tool is doing and what they should do next.
            </p>
          </section>
        </div>
        <div>
          <section className="story-section">
            <h2>Education</h2>
            <p className="copy">
              BSc Computer Science at Murang’a University of Technology, with
              expected graduation 2027.
            </p>
          </section>
          <section className="story-section">
            <h2>Away from the keyboard</h2>
            <p className="copy">
              Usually music, especially 90s R&amp;B, or a PUBG session. I also
              spend time looking through open-source projects to see how other
              people solve problems.
            </p>
          </section>
          <section className="story-section">
            <h2>Work together</h2>
            <p className="copy">
              I’m open to remote software and frontend opportunities,
              design-to-code work and open-source collaboration. I’m based in
              Kenya, UTC+3.
            </p>
            <div className="link-row mt-6">
              <Link href="/contact" className="button button-primary">
                Get in touch
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Read my CV ↗
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
