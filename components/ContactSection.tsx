export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-base-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-brand-dark mb-4">お問い合わせ</h2>
          <p className="text-lg text-text-dark">ご質問やご相談がございましたら、お気軽にお問い合わせください</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Googleフォームへのリンク */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-text-brand-dark mb-8">お問い合わせフォーム</h3>
            
            <div className="bg-base-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-text-brand-dark mb-4">お問い合わせはこちらから</h4>
                  <p className="text-text-dark mb-6 leading-relaxed">
                    お問い合わせフォームにて、お気軽にご相談ください。<br />
                    内容を確認の上、担当者より2営業日以内にご連絡いたします。
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a
                    href="https://forms.gle/tjA7ix7Ky5MsGqiU9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-brand hover:bg-accent-gold text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
                  >
                    お問い合わせフォームを開く
                  </a>
                  
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      新しいタブでフォームが開きます
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}