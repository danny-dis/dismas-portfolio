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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
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
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (status === 'success') {
    return (
      <div className="glass rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-dark-100 mb-2">Message Sent!</h3>
        <p className="text-dark-300 mb-4">
          Thank you for reaching out. I'll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-primary-400 hover:text-primary-300 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-lg p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-dark-200 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-dark-200 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-dark-100 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
          placeholder="Tell me about your project, question, or just say hello..."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center space-x-2 text-red-400 bg-red-900/20 border border-red-800 rounded-lg p-3">
          <AlertCircle size={20} />
          <span className="text-sm">{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        {status === 'loading' ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-xs text-dark-400 text-center">
        * Required fields. Your information will be kept private and secure.
      </p>
    </form>
  )
}
