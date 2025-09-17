'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // ローカルストレージからクッキー同意の状態を確認
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-accent-blue-gray text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* アイコンとメッセージ */}
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 mt-1">
              <Cookie className="w-5 h-5 text-accent-gold" />
            </div>
            <div className="flex-1">
              <p className="text-sm leading-relaxed">
                当サイトでは、ユーザー体験の向上とサイトの改善のためにクッキーを使用しています。
                これには、サイトの利用状況を分析するためのGoogle Analyticsが含まれます。
                詳細については、
                <Link 
                  href="/privacy" 
                  className="text-accent-gold hover:text-white underline transition-colors duration-200"
                >
                  プライバシーポリシー
                </Link>
                をご確認ください。
              </p>
            </div>
          </div>

          {/* ボタン群 */}
          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
            <button
              onClick={handleAccept}
              className="bg-brand hover:bg-accent-gold text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              同意する
            </button>
            <button
              onClick={handleDecline}
              className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              拒否する
            </button>
            <button
              onClick={handleAccept}
              className="text-gray-300 hover:text-white p-2 transition-colors duration-200"
              aria-label="閉じる"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
