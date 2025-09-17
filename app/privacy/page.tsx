import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, FileText } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand to-brand-dark text-white section-padding">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            トップページに戻る
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-xl text-white/90">
            個人情報の取り扱いに関する方針
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-base-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="bg-base-light-gray border-l-4 border-brand p-6 mb-8 rounded-r-lg">
              <p className="text-text-dark leading-relaxed mb-0">
                株式会社ノウデル（以下、当社）は、ステークホルダーの皆様から取得した個人情報の重要性を認識し、保護することを当社の事業活動の基本であると共に経営上の最重要な課題の一つと考えています。
              </p>
              <p className="text-text-dark leading-relaxed mb-0 mt-4">
                本プライバシーポリシーでは、当社の個人情報の取り扱いに関する方針を説明します。
              </p>
            </div>

            <div className="space-y-8">
              {/* 1. 個人情報の定義 */}
              <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-text-brand-dark mb-4 flex items-center">
                  <span className="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">1</span>
                  個人情報の定義
                </h2>
                <p className="text-text-dark leading-relaxed">
                  個人情報とは、氏名、住所、電話番号、メールアドレス、生年月日など、特定の個人を識別できる情報、または他の情報と照合することにより特定の個人を識別できる情報を指します。
                </p>
              </div>

              {/* 2. 個人情報保護方針 */}
              <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-text-brand-dark mb-4 flex items-center">
                  <span className="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">2</span>
                  個人情報保護方針
                </h2>
                <ul className="space-y-3 text-text-dark">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2"></span>
                    個人情報保護法および関連するその他の法令・規範を遵守します。
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2"></span>
                    個人情報保護に関する社内規定を実施し、維持し、継続的な改善に努めます。
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2"></span>
                    個人情報の取得段階から、適切な安全管理措置を講じ、不正アクセス、漏えい、滅失、き損等の予防に努めます。
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2"></span>
                    個人情報に関するお問い合わせや開示請求に迅速に対応します。
                  </li>
                </ul>
              </div>

              {/* 3. 個人情報の利用について */}
              <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-text-brand-dark mb-4 flex items-center">
                  <span className="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">3</span>
                  個人情報の利用について
                </h2>
                <div className="space-y-4 text-text-dark">
                  <p>当社は、お客様から個人情報をご提供頂く場合、予め利用目的を明示し、その範囲内で利用します。</p>
                  <p>明示した利用目的を超える場合は、事前にお客様の同意を得るものとします。</p>
                </div>
              </div>

              {/* 4. 利用目的 */}
              <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-text-brand-dark mb-4 flex items-center">
                  <span className="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">4</span>
                  利用目的
                </h2>
                <ul className="grid md:grid-cols-2 gap-3 text-text-dark">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                    お客様との商談や打ち合わせ
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                    商品や資料の発送
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                    サービスやイベント案内の送付
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                    顧客サポートやメンテナンスの提供
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                    お問い合わせやご相談への対応
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                    サービス開発やアンケート調査の実施
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                    契約の履行
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                    採用応募者への情報提供および採用業務の管理
                  </li>
                </ul>
              </div>

              {/* 5. 個人情報の第三者への開示 */}
              <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-text-brand-dark mb-4 flex items-center">
                  <span className="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">5</span>
                  個人情報の第三者への開示
                </h2>
                <div className="space-y-4 text-text-dark">
                  <p>当社は、以下の場合を除き、お客様の個人情報を第三者に開示または提供しません。</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2"></span>
                      お客様の同意がある場合
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2"></span>
                      法令に基づく場合
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2"></span>
                      人の生命、身体または財産の保護のために必要な場合
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2"></span>
                      利用目的達成のために必要な範囲で委託する場合
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-brand rounded-full mr-3 mt-2"></span>
                      事業の承継が行われる場合
                    </li>
                  </ul>
                  <p className="mt-4">また、取得しようとしている個人情報に関しても、漏えい等が発生した場合には、法令に基づき適切に報告・通知を行います。</p>
                </div>
              </div>

              {/* 6-10. その他の項目 */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-text-brand-dark mb-4 flex items-center">
                    <span className="bg-brand text-white px-2 py-1 rounded text-sm font-medium mr-3">6</span>
                    利用・提供の拒否
                  </h2>
                  <p className="text-text-dark text-sm leading-relaxed">
                    お客様は、お問い合わせフォームを通じて、個人情報の利用や提供の停止を希望する旨をご連絡いただけます。当社はお客様のご希望に対し、速やかに対応いたします。
                  </p>
                </div>

                <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-text-brand-dark mb-4 flex items-center">
                    <span className="bg-brand text-white px-2 py-1 rounded text-sm font-medium mr-3">7</span>
                    変更及び通知
                  </h2>
                  <p className="text-text-dark text-sm leading-relaxed">
                    本プライバシーポリシーの内容は、必要に応じて変更される場合があります。改訂されたプライバシーポリシーは、当社ウェブサイトに掲載することでお知らせいたします。
                  </p>
                </div>

                <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-text-brand-dark mb-4 flex items-center">
                    <span className="bg-brand text-white px-2 py-1 rounded text-sm font-medium mr-3">8</span>
                    訂正及び削除
                  </h2>
                  <p className="text-text-dark text-sm leading-relaxed">
                    お客様の個人情報の内容に誤りがある場合や削除をご希望の場合は、お問い合わせフォームよりご連絡ください。当社は速やかに対応いたします。
                  </p>
                </div>

                <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-bold text-text-brand-dark mb-4 flex items-center">
                    <span className="bg-brand text-white px-2 py-1 rounded text-sm font-medium mr-3">9</span>
                    苦情及び相談
                  </h2>
                  <p className="text-text-dark text-sm leading-relaxed mb-2">
                    苦情やご相談については、以下の連絡先までお問い合わせください。
                  </p>
                  <div className="text-sm text-text-dark">
                    <p>電話番号: 050-8882-5857</p>
                    <p>メールアドレス: info@knowdel.jp</p>
                  </div>
                </div>
              </div>

              {/* 10. 個人情報の共同利用 */}
              <div className="bg-base-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-text-brand-dark mb-4 flex items-center">
                  <span className="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">10</span>
                  個人情報の共同利用
                </h2>
                <p className="text-text-dark leading-relaxed">
                  当社は、個人情報を共同利用することはありません。もし共同利用が必要になった場合は、改めてお客様に通知し同意を得るものとします。
                </p>
              </div>
            </div>

            {/* 制定・改定日 */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-base-light-gray rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-sm text-text-dark mb-1">制定日</p>
                    <p className="font-semibold text-text-brand-dark">2023年8月1日</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-dark mb-1">最終改定日</p>
                    <p className="font-semibold text-text-brand-dark">2024年12月22日</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-text-brand-dark font-semibold">株式会社ノウデル</p>
                  <p className="text-text-dark">代表取締役 片ケ瀬 敏夫</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <Link
                href="/"
                className="inline-flex items-center text-accent-gold hover:text-brand font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                トップページに戻る
              </Link>

              <div className="flex gap-4">
                <a
                  href="https://forms.gle/tjA7ix7Ky5MsGqiU9"
                  target="_blank"
                  rel="noopener noreferrer"
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