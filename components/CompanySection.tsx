import { MapPin, Clock, Users, Target, Phone, Mail } from 'lucide-react'

export default function CompanySection() {
  const companyInfo = {
    name: '株式会社ノウデル',
    founded: '2023年8月',
    ceo: '代表取締役 片ケ瀬敏夫',
    address: '〒164-0003 東京都中野区東中野5-10-5 フォーカルビル4B',
    phone: '050-8882-5857',
    business: 'アプリケーションソフトの企画、制作',
    mission: '学び。提供。それが株式会社ノウデル の使命です。',
    philosophy: '財産である人材を尊重し、技術をもってお客様の情報基盤を支える',
    purpose: '私たちは、経営目的を「顧客の創造」と定義します。企業の目的とは、価値を提供し、利益を出し、お客様に必要とされ、会社を存続させることです。しかし、利益は結果であって目的ではないと考えます。',
    nameOrigin: 'knowdel(ノウデル)はKnowledge Deliverを略しています。お客様に学んだ知識を提供し、役立てることを重視しています。私たちが学ぶひとつの知識がお客様の喜びに繋がるよう日々精進します。'
  }

  const access = [
    'JR総武線 東中野駅徒歩6分',
    '大江戸線 東中野駅徒歩12分',
    '東西線 落合駅 徒歩5分'
  ]

  return (
    <section id="company" className="section-padding bg-base-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-brand-dark mb-4">会社概要</h2>
          <p className="text-lg text-text-dark mb-6">私たちについて</p>
          <div className="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-xl font-semibold leading-relaxed">
              一生懸命勉強して身に着けた知識を顧客に提供してともに成長していく会社
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-text-brand-dark mb-6">株式会社ノウデルについて</h3>
            <div className="space-y-6">
              <div className="bg-base-light-gray rounded-lg p-6">
                <h4 className="text-lg font-semibold text-text-brand-dark mb-3">経営理念</h4>
                <p className="text-text-dark leading-relaxed">
                  {companyInfo.philosophy}
                </p>
              </div>
              
              <div className="bg-base-light-gray rounded-lg p-6">
                <h4 className="text-lg font-semibold text-text-brand-dark mb-3">経営目的</h4>
                <p className="text-text-dark leading-relaxed">
                  {companyInfo.purpose}
                </p>
              </div>

              <div className="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-3">会社名の由来</h4>
                <p className="text-white leading-relaxed">
                  {companyInfo.nameOrigin}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-base-light-gray rounded-lg p-8">
            <h4 className="text-xl font-semibold text-text-brand-dark mb-6">会社情報</h4>
            <div className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-text-dark mb-1">会社名</dt>
                <dd className="text-text-dark font-medium">{companyInfo.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-text-dark mb-1">設立</dt>
                <dd className="text-text-dark">{companyInfo.founded}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-text-dark mb-1">役員</dt>
                <dd className="text-text-dark">{companyInfo.ceo}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-text-dark mb-1">所在地</dt>
                <dd className="text-text-dark">{companyInfo.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-text-dark mb-1">電話番号</dt>
                <dd className="text-text-dark">{companyInfo.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-text-dark mb-1">事業内容</dt>
                <dd className="text-text-dark">{companyInfo.business}</dd>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-300">
              <h4 className="text-lg font-semibold text-text-brand-dark mb-4">アクセス</h4>
              <div className="space-y-2 text-sm text-text-dark mb-4">
                {access.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              
              {/* Googleマップ */}
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.1234567890123!2d139.686123456789!3d35.71234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQyJzQ0LjQiTiAxMznCsDQxJzEwLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md"
                  title="株式会社ノウデル所在地"
                ></iframe>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  ※地図をクリックするとGoogleマップで詳細を確認できます
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}