import Link from 'next/link'
import { Mic, Users, MessageSquare } from 'lucide-react'

export default function ProductsSection() {
  const products = [
    {
      id: 'voiteki',
      name: 'ボイテキ！',
      description: '今この瞬間をテキスト化',
      status: 'PRODUCTS',
      icon: Mic,
      href: '/work#voiteki'
    },
    {
      id: 'eightman',
      name: 'エイトマン',
      description: '最大8名の話者分離議事録アプリ',
      status: 'UNDER CONSTRUCTION',
      icon: Users,
      href: '/work#eightman'
    },
    {
      id: 'peartext',
      name: 'ピアテキスト',
      description: '対面議事録アプリ',
      status: 'UNDER CONSTRUCTION',
      icon: MessageSquare,
      href: '/work#peartext'
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ノウデルの部屋</h2>
          <p className="text-lg text-gray-600">私たちが開発するプロダクトをご紹介します</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const IconComponent = product.icon
            return (
              <div key={product.id} className="card text-center group hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors duration-200">
                    <IconComponent className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    product.status === 'PRODUCTS' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {product.status}
                  </span>
                </div>
                
                <Link 
                  href={product.href}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                >
                  詳細を見る →
                </Link>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/work" className="btn-primary">
            すべてのプロダクトを見る
          </Link>
        </div>
      </div>
    </section>
  )
}
