'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { ContactFormData } from '@/types'

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        'Network error. Please check your connection and try again.'
      )
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (status === 'success') {
    return (
      <div className="glass rounded-lg p-8 text-center" role="status">
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
        <h3 className="mb-2 text-xl font-semibold text-dark-100">
          Message Sent!
        </h3>
        <p className="mb-4 text-dark-300">
          Your message has been sent. I’ll reply by email.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-primary-400 transition-colors hover:text-primary-300"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-6 rounded-lg p-8">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-dark-200"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-dark-600 bg-dark-700 px-4 py-3 text-dark-100 placeholder-dark-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-dark-200"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-dark-600 bg-dark-700 px-4 py-3 text-dark-100 placeholder-dark-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-dark-200"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="resize-vertical w-full rounded-lg border border-dark-600 bg-dark-700 px-4 py-3 text-dark-100 placeholder-dark-400 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="What are you working on, and where could I help?"
        />
      </div>

      {status === 'error' && (
        <div
          className="flex items-center space-x-2 rounded-lg border border-red-800 bg-red-900/20 p-3 text-red-400"
          role="alert"
        >
          <AlertCircle size={20} />
          <span className="text-sm">{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="button button-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-center text-xs text-dark-400">
        * All fields are required. Please don’t include passwords or other
        sensitive information.
      </p>
    </form>
  )
}
