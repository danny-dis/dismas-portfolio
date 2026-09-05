'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  shareUrl: string
  title: string
  description: string
}

export default function ShareButton({ shareUrl, title, description }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        text: description,
        url: shareUrl,
      })
    } else {
      navigator.clipboard.writeText(shareUrl)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center space-x-2 text-dark-400 hover:text-primary-400 transition-colors"
    >
      <Share2 size={18} />
      <span>Share this post</span>
    </button>
  )
}
