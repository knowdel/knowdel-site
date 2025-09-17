import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'

// 静的生成用のパラメータを生成
export async function generateStaticParams() {
  return [
    { id: '1' }
  ]
}

export default async function NewsArticle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const newsData = {
    '1': {
      id: 1,
      title: 'KTGS社「ボイテキ！」を正式リリース｜ノウデルが開発を担当',
      date: '2025.08.01',
      category: 'お知らせ',
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-lg text-text-dark leading-relaxed mb-8">株式会社ノウデル（本社：東京都中野区）は、2025年8月1日にケーティージーエス合同会社（以下KTGS）より正式リリースされた音声解析クラウドサービス「<span class="font-bold text-brand">ボイテキ！</span>」のシステム開発・UI設計・クラウド基盤構築を担当いたしました。</p>
          
          <div class="bg-base-light-gray border-l-4 border-brand p-6 my-8 rounded-r-lg">
            <p class="text-brand font-medium mb-2 text-sm uppercase tracking-wide">プロダクト概要</p>
            <p class="text-text-dark">「ボイテキ！」は、カスハラ（カスタマーハラスメント）や応対品質向上の課題を、録音音声から"見える化"するAI解析ツールです。</p>
          </div>
          
          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">開発背景</span>
            開発の背景と目的
          </h2>
          <p class="text-text-dark leading-relaxed mb-8">KTGS社とともに、コールセンターや企業の音声業務における「記録・証跡・評価」をより客観的かつ定量的に支援するため、録音データを対象としたバッチ処理型の音声解析システムを共同で企画・開発しました。</p>
          
          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">技術領域</span>
            ノウデルが担当した開発領域
          </h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-base-white border border-gray-200 rounded-lg p-6 hover:border-brand transition-colors shadow-sm">
              <h3 class="font-semibold text-text-dark mb-3 flex items-center">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">Backend</span>
                バックエンド開発
              </h3>
              <p class="text-sm text-text-dark">音声ファイルのアップロード・解析処理を担うバックエンド（Python + FastAPI）</p>
            </div>
            <div class="bg-base-white border border-gray-200 rounded-lg p-6 hover:border-brand transition-colors shadow-sm">
              <h3 class="font-semibold text-text-dark mb-3 flex items-center">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">AI</span>
                AI機能実装
              </h3>
              <p class="text-sm text-text-dark">感情・NGワード抽出、要約AIの組み込み</p>
            </div>
            <div class="bg-base-white border border-gray-200 rounded-lg p-6 hover:border-brand transition-colors shadow-sm">
              <h3 class="font-semibold text-text-dark mb-3 flex items-center">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">Frontend</span>
                フロントエンド設計
              </h3>
              <p class="text-sm text-text-dark">Web管理画面のUI/UX設計（Next.js + MUI）</p>
            </div>
            <div class="bg-base-white border border-gray-200 rounded-lg p-6 hover:border-brand transition-colors shadow-sm">
              <h3 class="font-semibold text-text-dark mb-3 flex items-center">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">Cloud</span>
                クラウド構築
              </h3>
              <p class="text-sm text-text-dark">AWS（S3・Cognito等）とのクラウド連携構築</p>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6 my-8">
            <h3 class="text-lg font-semibold mb-3">開発成果</h3>
            <p class="text-white">ノウデルでは、AI・音声解析・クラウドインフラの融合により、使いやすさと高い拡張性を両立したシステムを構築しました。</p>
          </div>
          
          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">将来展望</span>
            今後の展望
          </h2>
          <p class="text-text-dark leading-relaxed mb-8">「ボイテキ！」は、今後API連携やスマホアプリ対応などを予定しており、より広い業種・現場での導入が期待されています。ノウデルは、今後も現場の声に寄り添ったプロダクト開発を支援してまいります。</p>
          
          <div class="bg-base-light-gray border border-gray-200 rounded-lg p-6 my-8">
            <h3 class="text-lg font-semibold text-text-brand-dark mb-4">関連リンク</h3>
            <div class="space-y-3">
              <a href="https://www.voitex.site/" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-base-white border border-gray-200 rounded-lg hover:border-brand transition-colors group shadow-sm">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">製品サイト</span>
                <span class="text-accent-gold group-hover:text-brand font-medium">製品紹介サイト（販売元KTGS）</span>
                <span class="ml-auto text-gray-500 group-hover:text-gray-400">↗</span>
              </a>
              <a href="/contact" class="flex items-center p-4 bg-base-white border border-gray-200 rounded-lg hover:border-brand transition-colors group shadow-sm">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">お問い合わせ</span>
                <span class="text-accent-gold group-hover:text-brand font-medium">開発に関するご相談・お問い合わせ</span>
                <span class="ml-auto text-gray-500 group-hover:text-gray-400">→</span>
              </a>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6 my-8 text-center">
            <h3 class="text-lg font-semibold mb-2">お気軽にご相談ください</h3>
            <p class="text-white">音声解析やAIを活用したプロダクト開発をご検討中の企業様は、ぜひお気軽にご相談ください。</p>
          </div>
        </div>
      `
    }
  }

  const article = newsData[id as keyof typeof newsData]

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">記事が見つかりません</h1>
          <Link href="/news" className="btn-primary">
            お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white section-padding">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/news" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            お知らせ一覧に戻る
          </Link>
          
          <div className="flex items-center text-sm text-white/80 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {article.date}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-base-white">
        <div className="max-w-5xl mx-auto">
          <article>
            <div 
              className="text-text-dark leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link 
                href="/news" 
                className="inline-flex items-center text-accent-gold hover:text-brand font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                お知らせ一覧に戻る
              </Link>
              
              <div className="flex gap-4">
                <a 
                  href="/contact" 
                  className="bg-brand hover:bg-accent-gold text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  お問い合わせ
                </a>
                <a 
                  href="/" 
                  className="bg-accent-blue-gray hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  トップページ
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
