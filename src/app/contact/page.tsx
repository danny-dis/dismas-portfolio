import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Dismas Muriuki Mutabari about full-time remote software roles, web applications and developer tools.',
}

export default function ContactPage() {
  return (
    <div className="site-width inner-page">
      <header className="page-header">
        <p className="eyebrow">CONTACT / AVAILABLE FULL-TIME, REMOTELY</p>
        <h1>
          Tell me what
          <br />
          you’re building.
        </h1>
        <p className="copy">
          If you’re hiring for a full-time remote software role, tell me about
          the team and the work. I’m also open to developer-tool and open-source
          collaborations.
        </p>
      </header>
      <div className="narrative-grid">
        <div>
          <section className="story-section">
            <h2>Email me directly</h2>
            <a
              href="mailto:muriukidismas9@gmail.com"
              className="text-link break-all"
            >
              muriukidismas9@gmail.com
            </a>
            <p className="copy mt-3">
              Include the goal, where the project stands and what help you need.
              A repository link is useful if you have one.
            </p>
          </section>
          <section className="story-section">
            <h2>Find the code</h2>
            <a
              href="https://github.com/danny-dis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              github.com/danny-dis ↗
            </a>
            <p className="copy mt-3">
              My public projects cover AI infrastructure, coding tools and
              local-first applications.
            </p>
          </section>
          <section className="story-section">
            <h2>Connect on LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/dismas-muriuki-b970b91b7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Dismas Muriuki Mutabari on LinkedIn ↗
            </a>
          </section>
          <section className="story-section">
            <h2>Location</h2>
            <p className="copy">
              Kenya · East Africa Time (UTC+3). Available full-time for remote
              software work, with flexibility across time zones.
            </p>
          </section>
        </div>
        <section aria-labelledby="message-heading">
          <h2 id="message-heading" className="section-heading mb-6">
            Or leave a message.
          </h2>
          <ContactForm />
          <p className="copy mt-4 text-sm">
            If the form can’t send, use the email address above.
          </p>
        </section>
      </div>
    </div>
  )
}
