import Link from 'next/link'
import { Calendar, ArrowLeft, Newspaper, Clock, Tag } from 'lucide-react'

export default function News() {
  const news = [
    {
      id: 1,
      title: 'KTGS社「ボイテキ！クライアント」iPhoneアプリ正式リリース｜ノウデルが開発を担当',
      date: '2025.09.25',
      category: 'お知らせ',
      content: '株式会社ノウデル（本社：東京都中野区）は、2025年9月25日にケーティージーエス合同会社（以下KTGS）より正式リリースされたiPhoneアプリ「ボイテキ！クライアント」の開発を担当いたしました。',
      excerpt: '株式会社ノウデル（本社：東京都中野区）は、2025年9月25日にケーティージーエス合同会社（以下KTGS）より正式リリースされたiPhoneアプリ「ボイテキ！クライアント」の開発を担当いたしました。対面商談での音声記録を簡単にし、営業活動の効率化を支援する専用アプリです。',
      readTime: '4分で読める',
      featured: true
    },
    {
      id: 2,
      title: 'KTGS社「ボイテキ！」を正式リリース｜ノウデルが開発を担当',
      date: '2025.08.01',
      category: 'お知らせ',
      content: '株式会社ノウデル（本社：東京都中野区）は、2025年8月1日にケーティージーエス合同会社（以下KTGS）より正式リリースされた音声解析クラウドサービス「ボイテキ！」のシステム開発・UI設計・クラウド基盤構築を担当いたしました。',
      excerpt: '株式会社ノウデル（本社：東京都中野区）は、2025年8月1日にケーティージーエス合同会社（以下KTGS）より正式リリースされた音声解析クラウドサービス「ボイテキ！」のシステム開発・UI設計・クラウド基盤構築を担当いたしました。',
      readTime: '3分で読める',
      featured: false
    }
  ]

  return (
    <div className="min-h-screen bg-base-light-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              トップページに戻る
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full mr-4">
                <Newspaper className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-2">お知らせ</h1>
                <p className="text-xl md:text-2xl text-white/90">
                  ノウデルの最新情報
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-white/90 leading-relaxed">
                音声認識技術を活用した革新的なアプリケーションの開発を通じて、
                人々の学習とコミュニケーションを支援するノウデルの最新情報をお届けします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="section-padding bg-base-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {news.map((item) => (
              <article key={item.id} className={`bg-base-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                item.featured ? 'ring-2 ring-brand/20' : ''
              }`}>
                {/* ヘッダー部分 */}
                <div className="bg-gradient-to-r from-brand/5 to-accent-gold/5 p-6 border-b border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-3 md:mb-0">
                      <span className="inline-flex items-center bg-brand text-white text-sm font-semibold px-3 py-1 rounded-full">
                        <Tag className="w-3 h-3 mr-1" />
                        {item.category}
                      </span>
                      {item.featured && (
                        <span className="inline-flex items-center bg-accent-gold text-white text-sm font-semibold px-3 py-1 rounded-full">
                          ⭐ 注目
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-text-dark">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-text-brand-dark mb-4 hover:text-brand transition-colors duration-200">
                    <Link href={`/news/${item.id}`}>
                      {item.title}
                    </Link>
                  </h2>
                </div>
                
                {/* コンテンツ部分 */}
                <div className="p-6">
                  <div className="prose max-w-none">
                    <p className="text-text-dark leading-relaxed mb-6 text-lg">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                      <Link 
                        href={`/news/${item.id}`}
                        className="inline-flex items-center bg-brand hover:bg-accent-gold text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 mb-4 sm:mb-0"
                      >
                        続きを読む
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </Link>
                      
                      <div className="text-sm text-text-dark">
                        <span className="text-gray-500">最終更新: {item.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* ページネーション（将来の拡張用） */}
          <div className="mt-12 text-center">
            <div className="bg-base-white rounded-lg p-6 shadow-sm">
              <p className="text-text-dark mb-4">さらに多くのお知らせをお探しですか？</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-primary">
                  トップページに戻る
                </Link>
                <a 
                  href="https://forms.gle/tjA7ix7Ky5MsGqiU9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
