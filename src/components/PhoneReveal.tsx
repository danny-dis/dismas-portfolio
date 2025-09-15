'use client'

import { useState } from 'react'
import { Eye, EyeOff, Copy, Check } from 'lucide-react'

interface PhoneRevealProps {
  phoneNumber: string
  obfuscatedNumber: string
}

export default function PhoneReveal({ phoneNumber, obfuscatedNumber }: PhoneRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (error) {
      console.error('Failed to copy phone number:', error)
    }
  }

  return (
    <div className="flex items-center space-x-3">
      <span className="text-dark-200 font-mono">
        {isRevealed ? phoneNumber : obfuscatedNumber}
      </span>
      
      <div className="flex space-x-2">
        <button
          onClick={() => setIsRevealed(!isRevealed)}
          className="p-2 text-dark-400 hover:text-primary-400 transition-colors rounded-lg hover:bg-dark-700"
          aria-label={isRevealed ? 'Hide phone number' : 'Reveal phone number'}
        >
          {isRevealed ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
        
        {isRevealed && (
          <button
            onClick={handleCopy}
            className="p-2 text-dark-400 hover:text-primary-400 transition-colors rounded-lg hover:bg-dark-700"
            aria-label="Copy phone number"
          >
            {isCopied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        )}
      </div>
    </div>
  )
}
