'use client'

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

type Props = { html: string }

export default function ArticleContentWithLightbox({ html }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const triggers = container.querySelectorAll<HTMLElement>('[data-lightbox-src]')
    const handleClick = (e: Event) => {
      e.preventDefault()
      const src = (e.currentTarget as HTMLElement).getAttribute('data-lightbox-src')
      if (src) setLightboxSrc(src)
    }

    triggers.forEach((el) => el.addEventListener('click', handleClick))
    return () => triggers.forEach((el) => el.removeEventListener('click', handleClick))
  }, [html])

  return (
    <>
      <div
        ref={containerRef}
        className="text-text-dark leading-relaxed"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxSrc(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Escape' && setLightboxSrc(null)}
          aria-label="閉じる"
        >
          <button
            type="button"
            onClick={() => setLightboxSrc(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="閉じる"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="bg-white rounded-lg shadow-2xl p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxSrc}
              alt="拡大表示"
              className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
