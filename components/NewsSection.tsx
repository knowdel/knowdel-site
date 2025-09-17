export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: 'KTGS社「ボイテキ！」を正式リリース｜ノウデルが開発を担当',
      date: '2025.08.01',
      category: 'お知らせ',
      excerpt: '株式会社ノウデル（本社：東京都中野区）は、2025年8月1日にケーティージーエス合同会社（以下KTGS）より正式リリースされた音声解析クラウドサービス「ボイテキ！」のシステム開発・UI設計・クラウド基盤構築を担当いたしました。'
    }
  ]

  return (
    <section className="bg-base-light-gray section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-brand-dark mb-4">お知らせ</h2>
        </div>
        
        <div className="grid gap-6">
          {news.map((item) => (
            <div key={item.id} className="card hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-brand text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
                {item.date && (
                  <span className="text-sm text-gray-500">
                    {item.date}
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-text-dark mb-3 hover:text-accent-gold transition-colors duration-200">
                <a href={`/news/${item.id}`}>
                  {item.title}
                </a>
              </h3>
              
              <p className="text-text-dark mb-4 leading-relaxed">
                {item.excerpt}
              </p>
              
              <a 
                href={`/news/${item.id}`}
                className="text-accent-gold hover:text-brand font-medium text-sm"
              >
                続きを読む →
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="/news" className="text-accent-gold hover:text-brand font-medium">
            お知らせ一覧 →
          </a>
        </div>
      </div>
    </section>
  )
}
