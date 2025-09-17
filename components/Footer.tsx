import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">株式会社ノウデル</h3>
            <p className="text-gray-300 mb-4">
              学び。提供。それが株式会社ノウデルの使命です。
            </p>
            <div className="text-gray-300 text-sm">
              <p>〒164-0003</p>
              <p>東京都中野区東中野5-10-5</p>
              <p>フォーカルビル4B</p>
              <p>営業時間：平日10:00～18:00</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors duration-200">
                  NEWS
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">プロダクト</h3>
            <ul className="space-y-2">
              <li>
                <a href="#voiteki" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">
                  ボイテキ！
                </a>
              </li>
              <li>
                <a href="#quicksum" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">
                  QuickSum
                </a>
              </li>
              <li>
                <a href="#voitex-rec" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">
                  ボイテキレック！
                </a>
              </li>
              <li>
                <a href="#voitex-converter" className="text-gray-300 hover:text-accent-gold transition-colors duration-200">
                  ボイテキコンバーター！
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-300 text-sm">
              Copyright © 株式会社ノウデル
            </p>
            <div className="flex space-x-6">
              <a 
                href="/privacy" 
                className="text-gray-300 hover:text-accent-gold text-sm transition-colors duration-200"
              >
                プライバシーポリシー
              </a>
              <a
                href="https://forms.gle/tjA7ix7Ky5MsGqiU9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-gold text-sm transition-colors duration-200"
              >
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
