import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-inner">
        <div>
          <Link href="/" className="wordmark">
            dismas<span>.</span>
          </Link>
          <p>Code, design and a preference for open source.</p>
          <p>© {new Date().getFullYear()} Dismas Muriuki Mutabari · Kenya</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="mailto:muriukidismas9@gmail.com">Email</a>
          <a
            href="https://github.com/danny-dis"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/dismas-muriuki-b970b91b7"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            CV ↗
          </a>
          <Link href="/blog">Notes</Link>
        </nav>
      </div>
    </footer>
  )
}
