import { Youtube, ExternalLink } from 'lucide-react'

const getYouTubeThumbnail = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

export default function MediaSection() {
  const mediaItems = [
    {
      id: 1,
      title: 'Heart Station',
      date: '2026.02.02',
      description: 'MC 藍田真優 ゲスト 片ケ瀬敏夫（株式会社ノウデル代表取締役）',
      url: 'https://www.youtube.com/watch?v=u9xONb_v3Lw',
      videoId: 'u9xONb_v3Lw',
    },
    {
      id: 2,
      title: '社長！あなたの会社教えてください。',
      program: '株式会社ノウデル',
      url: 'https://www.youtube.com/watch?v=z9_IiTXWUnY',
      videoId: 'z9_IiTXWUnY',
    },
  ]

  return (
    <section className="section-padding bg-base-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-brand-dark mb-4">メディア実績</h2>
          <p className="text-lg text-text-dark">メディア出演・掲載実績をご紹介します</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mediaItems.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row gap-4 p-0 bg-base-light-gray rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 border border-transparent hover:border-accent-gold/30"
            >
              <div className="relative flex-shrink-0 w-full sm:w-64 aspect-video bg-gray-200">
                <img
                  src={getYouTubeThumbnail(item.videoId)}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                    <Youtube className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0 p-6 flex flex-col justify-center">
                {item.program && (
                  <span className="text-xs font-semibold text-brand uppercase tracking-wide">
                    {item.program}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-text-dark mt-1 group-hover:text-accent-gold transition-colors">
                  {item.title}
                </h3>
                {item.date && (
                  <span className="text-sm text-gray-500">{item.date}放送</span>
                )}
                {item.description && (
                  <p className="text-sm text-text-dark mt-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
                <span className="inline-flex items-center gap-1 text-accent-gold text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  YouTubeで視聴する
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
