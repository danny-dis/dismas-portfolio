import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const work = [
  ['dmr-x', 'DMR-X', 'AI gateway and model routing'],
  ['mote', 'MOTE', 'A small Rust agent engine'],
  ['chimera', 'Chimera', 'A workspace for coding agents'],
  ['drift', 'Drift', 'Ideas and research, kept locally'],
]

export default function Hero() {
  return (
    <section className="hero site-width" aria-labelledby="intro-title">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">DISMAS MURIUKI / SOFTWARE BUILDER</p>
          <h1 id="intro-title">
            I build AI tools
            <br />
            and the interfaces
            <br />
            <span>around them.</span>
          </h1>
          <p className="hero-intro">
            I’m Dismas, a developer in Kenya. I build web applications and AI
            tools with TypeScript, React and Python. My recent work includes
            model routing and coding-agent workspaces.
          </p>
          <div className="link-row">
            <a href="#work" className="button button-primary">
              Explore the work <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Read my CV <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-meta">
            <span>Based in Kenya · UTC+3</span>
            <span>Available full-time for remote work</span>
          </div>
        </div>
        <aside className="work-index" aria-label="Selected project index">
          <p className="index-heading">A LOOK INSIDE THE WORK</p>
          {work.map(([id, name, description], index) => (
            <Link className="index-row" href={`/projects/${id}`} key={id}>
              <span className="index-number" aria-hidden="true">
                0{index + 1}
              </span>
              <span>
                <strong>{name}</strong>
                <small>{description}</small>
              </span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </aside>
      </div>
    </section>
  )
}
