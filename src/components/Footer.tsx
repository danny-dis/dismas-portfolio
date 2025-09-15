import Link from 'next/link'
import { Github, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary-400 mb-4">
              Dismas Muriuki
            </h3>
            <p className="text-dark-300 mb-4 max-w-md">
              Backend dev & DB junkie — a strong believer in peer-to-peer technology and blockchain tech. 
              I build dependable systems and mentor junior devs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/danny-dis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:muriukidismas9@gmail.com"
                className="text-dark-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-dark-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-dark-400 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-dark-100 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                >
                  Resume <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/danny-dis/danny-dis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-400 hover:text-primary-400 transition-colors inline-flex items-center gap-1"
                >
                  Profile Repo <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center">
          <p className="text-dark-400 text-sm">
            © {currentYear} Dismas Muriuki. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
          <p className="text-dark-500 text-xs mt-2">
            FOSS is one of my biggest philosophies — free as in freedom.
          </p>
        </div>
      </div>
    </footer>
  )
}
