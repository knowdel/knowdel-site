import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* メインビジュアル背景 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-main.jpg"
            alt="株式会社ノウデル メインビジュアル"
            fill
            className="object-cover"
            priority
          />
        </div>

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8">
            {/* メインタイトル */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                学び。提供。
              </h1>
              <div className="w-24 h-1 bg-white mx-auto"></div>
            </div>

            {/* サブタイトル */}
            <p className="text-xl md:text-3xl lg:text-4xl font-light text-white max-w-4xl mx-auto leading-relaxed">
              それが株式会社ノウデルの使命です。
            </p>

            {/* 説明文 */}
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
              音声認識技術を活用した革新的なアプリケーションで、<br className="hidden md:block" />
              人々の学習とコミュニケーションを支援します。
            </p>

          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link 
              href="#work" 
              className="group relative px-8 py-4 bg-brand text-white font-bold text-lg rounded-full hover:bg-accent-gold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              プロダクトを見る
            </Link>
            <a
              href="https://forms.gle/tjA7ix7Ky5MsGqiU9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-brand transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
