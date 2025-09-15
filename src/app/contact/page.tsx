import { Metadata } from 'next'
import { Mail, MapPin, Github, ExternalLink } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PhoneReveal from '@/components/PhoneReveal'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Dismas Muriuki for collaborations, mentoring, or discussions about decentralized systems and blockchain technology.',
}

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-100 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Whether you're interested in collaborating on decentralized systems, 
            need mentoring, or just want to chat about building the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-dark-100 mb-6">
                Let's Connect
              </h2>
              <p className="text-dark-300 mb-8">
                I'm always excited to discuss new projects, share knowledge, and connect with 
                fellow developers who are passionate about building decentralized, privacy-focused solutions.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="glass rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="text-primary-400" size={24} />
                  <h3 className="text-lg font-semibold text-dark-100">Email</h3>
                </div>
                <a
                  href="mailto:muriukidismas9@gmail.com"
                  className="text-dark-300 hover:text-primary-400 transition-colors"
                >
                  muriukidismas9@gmail.com
                </a>
                <p className="text-sm text-dark-400 mt-2">
                  Best for detailed discussions and project inquiries
                </p>
              </div>

              <div className="glass rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <span className="text-primary-400 text-lg">📱</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-100">Phone</h3>
                </div>
                <PhoneReveal 
                  phoneNumber="+254 745 893 448"
                  obfuscatedNumber="+254 *** *** ***"
                />
                <p className="text-sm text-dark-400 mt-2">
                  For urgent matters or quick discussions
                </p>
              </div>

              <div className="glass rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Github className="text-primary-400" size={24} />
                  <h3 className="text-lg font-semibold text-dark-100">GitHub</h3>
                </div>
                <a
                  href="https://github.com/danny-dis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-300 hover:text-primary-400 transition-colors inline-flex items-center space-x-1"
                >
                  <span>github.com/danny-dis</span>
                  <ExternalLink size={16} />
                </a>
                <p className="text-sm text-dark-400 mt-2">
                  Check out my projects and contribute to open source
                </p>
              </div>

              <div className="glass rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="text-primary-400" size={24} />
                  <h3 className="text-lg font-semibold text-dark-100">Location</h3>
                </div>
                <p className="text-dark-300">Meru County, Kenya</p>
                <p className="text-sm text-dark-400 mt-2">
                  Open to remote collaborations worldwide
                </p>
              </div>
            </div>

            {/* What I'm Looking For */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold text-dark-100 mb-4">
                What I'm Looking For
              </h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Collaborations on decentralized systems and P2P networks</li>
                <li>• Open source contributors for my projects</li>
                <li>• Mentoring opportunities with junior developers</li>
                <li>• Discussions about blockchain and privacy technology</li>
                <li>• Schools interested in the Decentralized Voting System</li>
                <li>• Coffee chats with fellow developers (virtual or in-person)</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-dark-100 mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="glass rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-dark-100 mb-4">
              Response Time
            </h2>
            <p className="text-dark-300 mb-6">
              I typically respond to emails within 24-48 hours. For urgent matters, 
              please mention "URGENT" in your subject line or reach out via phone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold text-primary-400 mb-2">Project Inquiries</h3>
                <p className="text-dark-400">24-48 hours</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-400 mb-2">Mentoring Requests</h3>
                <p className="text-dark-400">2-3 days</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary-400 mb-2">General Questions</h3>
                <p className="text-dark-400">1-2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
