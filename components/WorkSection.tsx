import { Mic, ExternalLink, Code, Cloud, Brain, FileText, Zap, Download } from 'lucide-react'

export default function WorkSection() {
  const products = [
    {
      id: 'voiteki',
      name: 'ボイテキ！',
      description: '音声解析AI SaaSツール',
      fullDescription: '音声データをAIで自動分析・要約・可視化する音声解析AI SaaSツール。コールセンターの応対品質向上とカスハラ対策を支援します。',
      features: [
        '音声テキスト化機能（95%以上の精度）',
        '感情分析機能（エネルギー・心理状態・発話傾向）',
        'NGワード検出機能（カスハラ対策）',
        '自動要約機能（営業・研修・会議分析）'
      ],
      status: 'PRODUCTS',
      icon: Mic,
      technologies: [
        { name: 'Python + FastAPI', icon: Code, description: 'バックエンド開発' },
        { name: 'Next.js + MUI', icon: Code, description: 'フロントエンド設計' },
        { name: 'AWS', icon: Cloud, description: 'クラウド基盤' },
        { name: 'AI解析', icon: Brain, description: '音声解析機能' }
      ],
      link: 'https://www.voitex.site/what-is-voitex'
    },
    {
      id: 'quicksum',
      name: 'QuickSum',
      description: 'ACW削減AI要約ツール',
      fullDescription: 'コールセンターのACW（アフターコールワーク）を大幅に削減するAI要約ツール。平均1分のACWを約10秒に短縮し、オペレーターの業務効率を向上させます。',
      features: [
        'ACW時間を1分→10秒に短縮',
        '要約品質の統一（ばらつき防止）',
        '最大100人同時接続対応',
        '1日10,000〜20,000件処理可能'
      ],
      status: 'PRODUCTS',
      icon: FileText,
      technologies: [
        { name: 'Gemini API', icon: Brain, description: 'AI要約エンジン' },
        { name: 'Python', icon: Code, description: 'バックエンド処理' },
        { name: 'AWS', icon: Cloud, description: 'クラウドインフラ' },
        { name: '高負荷対応', icon: Zap, description: '並列処理' }
      ],
      link: 'https://www.voitex.site/quicksum'
    },
    {
      id: 'voitex-rec',
      name: 'ボイテキレック！',
      description: '音声録音・管理ツール',
      fullDescription: '音声データの録音・保存・管理を効率化するツール。ボイテキ！シリーズとの連携により、音声解析ワークフローを一元管理できます。',
      features: [
        '高品質音声録音機能',
        'ファイル管理・整理機能',
        'ボイテキ！シリーズとの連携',
        'セキュアなデータ保存'
      ],
      status: 'PRODUCTS',
      icon: Mic,
      technologies: [
        { name: 'WebRTC', icon: Code, description: '音声録音技術' },
        { name: 'AWS S3', icon: Cloud, description: 'ファイルストレージ' },
        { name: '暗号化', icon: Code, description: 'セキュリティ' },
        { name: 'API連携', icon: Zap, description: 'システム連携' }
      ],
      link: 'https://www.voitex.site/voitex-rec'
    },
    {
      id: 'voitex-converter',
      name: 'ボイテキコンバーター！',
      description: '音声ファイル変換ツール',
      fullDescription: '様々な音声ファイル形式をボイテキ！で解析可能な形式に変換するツール。WAV、MP3、FLAC、OGGなど多様な形式に対応します。',
      features: [
        '多形式音声ファイル対応',
        '高品質音声変換',
        'バッチ処理機能',
        'ボイテキ！最適化出力'
      ],
      status: 'PRODUCTS',
      icon: Download,
      technologies: [
        { name: 'FFmpeg', icon: Code, description: '音声変換エンジン' },
        { name: 'Python', icon: Code, description: '処理ロジック' },
        { name: 'AWS', icon: Cloud, description: 'クラウド処理' },
        { name: '並列処理', icon: Zap, description: '高速変換' }
      ],
      link: 'https://www.voitex.site/voitex-converter'
    }
  ]

  return (
    <section id="work" className="section-padding bg-base-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-brand-dark mb-4">プロダクト</h2>
          <p className="text-lg text-text-dark">私たちが開発する革新的なアプリケーション</p>
        </div>
        
        <div className="space-y-12">
          {products.map((product, index) => {
            const IconComponent = product.icon
            
            return (
              <div key={product.id} id={product.id} className="bg-base-white rounded-2xl shadow-lg overflow-hidden">
                {/* ヘッダー部分 */}
                <div className="bg-gradient-to-r from-brand to-brand-dark p-8 text-white">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-white/20 rounded-full mr-6">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                      <p className="text-xl text-white/90">{product.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="bg-accent-gold text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {product.status}
                    </span>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      製品サイト
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
                
                {/* コンテンツ部分 */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* 左側：説明と機能 */}
                    <div>
                      <h4 className="text-xl font-semibold text-text-brand-dark mb-4">プロダクト概要</h4>
                      <p className="text-text-dark mb-6 leading-relaxed">
                        {product.fullDescription}
                      </p>
                      
                      <h4 className="text-xl font-semibold text-text-brand-dark mb-4">主な機能</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-text-dark">
                            <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* 右側：技術スタック */}
                    <div>
                      <h4 className="text-xl font-semibold text-text-brand-dark mb-4">技術スタック</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {product.technologies.map((tech, techIndex) => {
                          const TechIcon = tech.icon
                          return (
                            <div key={techIndex} className="bg-base-light-gray rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                              <div className="flex justify-center mb-2">
                                <div className="p-2 bg-brand rounded-full">
                                  <TechIcon className="w-6 h-6 text-white" />
                                </div>
                              </div>
                              <h5 className="font-semibold text-text-dark text-sm mb-1">{tech.name}</h5>
                              <p className="text-xs text-text-dark">{tech.description}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA部分 */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center"
                      >
                        製品サイトを見る
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                      <a 
                        href="https://forms.gle/tjA7ix7Ky5MsGqiU9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        開発について相談する
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}