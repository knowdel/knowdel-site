import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import ArticleContentWithLightbox from '@/components/ArticleContentWithLightbox'

// 静的生成用のパラメータを生成
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ]
}

export default async function NewsArticle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  const newsData = {
    '6': {
      id: 6,
      title: '完全クローズド環境で動くAI基盤「ROOTA」の開発を担当',
      date: '2026.07.31',
      category: 'お知らせ',
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-lg text-text-dark leading-relaxed mb-6">— 株式会社ノウデルのAI活用への取り組み —</p>
          <p class="text-text-dark leading-relaxed mb-8">2026年3月に着手した、クローズドネットワーク環境で動作するRAG型AI基盤の構築が、製品<strong class="text-brand">「ROOTA（ルータ）」</strong>として形になりました。当社は本製品の企画・開発を担当しています。</p>
          <p class="text-text-dark leading-relaxed mb-8">社内の規程やマニュアルをAIに読ませたい。けれども、その情報を外部のサービスへ送ることはできない。この2つを同時に満たすことが、開発の出発点でした。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">設計</span>
            データを「学習させない」のではなく、「渡さない」
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">クラウドのAIサービスでは、「入力データを学習に使わない」という設定が用意されていることがあります。しかしそれは、データが通った上での取り決めにすぎません。</p>
          <p class="text-text-dark leading-relaxed mb-4">ROOTAは、そもそもデータを外に出しません。入力・回答・会話履歴・学習させた文書と、そこから作られる検索用データまで、すべてお客様の社内ネットワークの中に留まります。外部のAIサービスやAPIへの送信はありません。</p>
          <p class="text-text-dark leading-relaxed mb-8">利用状況を外部へ送る仕組みも無効にし、画面表示に使うフォントやアイコンまで製品内に同梱しました。外部のCDNからも読み込みません。<strong>通信そのものが発生しない構成</strong>にすることで、「設定を間違えると漏れる」という状態をなくしています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">分離</span>
            部門やグループ会社ごとに、構造で分ける
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">複数の部門やグループ会社で同じ基盤を使う場合、互いのデータが見えてはいけません。</p>
          <p class="text-text-dark leading-relaxed mb-4">ROOTAでは、会話履歴・学習させた文書・利用者情報を、運用に合わせた単位ごとに分離しています。データベースは行レベルセキュリティで保護し、文書の検索領域も単位ごとに分けているため、<strong>他の単位の文書が回答や引用に混ざることは構造上起きません</strong>。</p>
          <p class="text-text-dark leading-relaxed mb-4">この点は自動テストと実機の両方で検証しています。設定の書き方で守るのではなく、仕組みとして成立することを重視しました。</p>
          <p class="text-text-dark leading-relaxed mb-8">また、管理者が利用状況を把握できる一方で、<strong>会話の本文は管理者にも見えない</strong>設計にしています。「使われているのは知りたいが、中身は見せたくない」という運用実態に合わせたものです。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">構成</span>
            社内のサーバーだけで完結する
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">ROOTAは、お客様の社内ネットワークに置いたサーバー群だけで動きます。</p>
          <p class="text-text-dark leading-relaxed mb-4">利用者がアクセスするのはROOTAの画面だけで、データベースやAI処理基盤、LLMサーバーに直接つながる経路はありません。すべて社内ネットワークの内側に閉じています。</p>
          <p class="text-text-dark leading-relaxed mb-4">言語モデルは社内のGPUサーバー上でオープンモデルを動かし、日本語の文書検索には日本語に特化した埋め込みモデルを使っています。どちらも外部のAPIを呼びません。<strong>運用時にインターネット接続を必要としない構成</strong>です。</p>
          <p class="text-text-dark leading-relaxed mb-8">送付はコンテナ形式にまとめており、お客様の環境の中で組み上がります。検証環境と本番環境で同じものが動くため、動作環境の違いによる不具合を持ち込みません。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">機能</span>
            検索から、業務エージェントの自作まで
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">開発を進める中で、お客様の関心は「AIと話せること」から「<strong>自分たちの業務そのものを任せること</strong>」へ移っていきました。</p>
          <p class="text-text-dark leading-relaxed mb-4">そこで、利用者が画面から業務エージェントを組み立てられる機能を用意しました。入力するファイル、処理の手順、出力する形式を画面で並べることで、プログラムを書かずに業務の流れを組めます。</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li><strong>文書を根拠に回答する</strong> — 社内文書を検索し、どのファイルのどこを見たか示しながら答える</li>
            <li><strong>帳票を読み取る</strong> — 紙の帳票をスキャンし、様式に沿って項目を取り出す</li>
            <li><strong>音声を扱う</strong> — 通話や会議の音声を文字にし、内容を確認・修正できる形にする</li>
            <li><strong>結果をファイルで出す</strong> — 既存の業務システムに取り込める形式で出力する</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-4">社内文書はPDF・Word・Excel・PowerPointなど主要な形式に対応し、画像を添付して質問することもできます。回答はWordやPDFとしてそのまま持ち出せます。</p>
          <p class="text-text-dark leading-relaxed mb-4">ここで重視したのは、<strong>業務ごとの違いを設定データ側に置く</strong>ことです。帳票の様式や、出力する項目をコードではなく設定として持ちます。そのため、別の業務に広げるときにプログラムを書き換える必要がありません。</p>
          <p class="text-text-dark leading-relaxed mb-8">実際に、性質の異なる複数の業務エージェントが同じ基盤の上で動いています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">品質</span>
            検索の精度を、測りながら作る
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">社内文書を根拠に回答する仕組みは、「それらしく答える」を返すだけでは実務で使えません。根拠として引いた文書がずれれば、利用者が引用元を開いたときに無関係な内容が出てきます。</p>
          <p class="text-text-dark leading-relaxed mb-4">そこで開発では、<strong>あらかじめ正解を用意した問いの集合を作り、変更のたびに採点する</strong>方法を採りました。「資料に書かれていない問い」も意図的に含め、<strong>答えられないときに答えないこと</strong>も測っています。</p>
          <p class="text-text-dark leading-relaxed mb-4">閾値の調整や検索方式の変更は、この採点結果を見ながら進めています。感応ではなく数字で判断できるようにしたことで、改善を積み上げられるようになりました。</p>
          <p class="text-text-dark leading-relaxed mb-8">この過程では、思ったどおりにならなかったことも記録に残しています。検索の閾値を上げれば精度が上がると考えていたものの、実際には利用者の問いかけの言葉と文書の中の言葉が噛み合っていないことが原因だった、といった事例です。<strong>原因を取り違えたまま調整を重ねない</strong>ためにも、測定と記録を欠かさない方針をとっています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">今後</span>
            業務ごとのエージェントを増やす
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">基盤としての形は整いました。今後は、実際の業務に合わせたエージェントを増やしていきます。</p>
          <p class="text-text-dark leading-relaxed mb-4">紙の帳票を業務システムへ取り込む工程や、大量の書類を読んで報告書の下書きを作る工程など、<strong>人手で時間がかかっていた作業</strong>から順に取り組んでいます。</p>
          <p class="text-text-dark leading-relaxed mb-8">いずれも、担当者の判断を置き換えるものではありません。<strong>根拠を示し、下書きを用意し、人が確認して直す</strong>という形を基本にしています。最終的な判断と責任は、あくまでどこまでも担当者に残ります。</p>
          <p class="text-text-dark leading-relaxed mb-8">当社は引き続き、ROOTAの開発を担当してまいります。</p>

          <div class="bg-base-light-gray border border-gray-200 rounded-lg p-6 my-8">
            <h3 class="text-lg font-semibold text-text-brand-dark mb-3">関連記事</h3>
            <div class="space-y-3">
              <a href="/news/3" class="flex items-center p-4 bg-base-white border border-gray-200 rounded-lg hover:border-brand transition-colors group">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">RAG</span>
                <span class="text-accent-gold group-hover:text-brand font-medium">クローズドネットワーク環境でのRAG型AI基盤の構築を開始</span>
                <span class="ml-auto text-gray-500">→</span>
              </a>
              <a href="/news/4" class="flex items-center p-4 bg-base-white border border-gray-200 rounded-lg hover:border-brand transition-colors group">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">音声</span>
                <span class="text-accent-gold group-hover:text-brand font-medium">クローズド環境で音声分析とAI基盤を連携させる取り組みを開始</span>
                <span class="ml-auto text-gray-500">→</span>
              </a>
            </div>
          </div>

          <div class="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6 my-8 text-center">
            <h3 class="text-lg font-semibold mb-2">お気軽にご相談ください</h3>
            <p class="text-white">クローズド環境でのAI基盤・業務エージェントのご検討は、ぜひお気軽にご相談ください。</p>
            <a href="/contact" class="inline-block mt-4 bg-white text-brand font-semibold py-2 px-6 rounded-lg hover:bg-accent-gold transition-colors">お問い合わせ</a>
          </div>
        </div>
      `
    },
    '5': {
      id: 5,
      title: 'FUJIRAGの開発を担当 — 音声データ活用とRAG技術を融合した新たな取り組み',
      date: '2026.04.09',
      category: 'お知らせ',
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-lg text-text-dark leading-relaxed mb-6">— 株式会社ノウデルのAI活用への取り組み —</p>
          <p class="text-text-dark leading-relaxed mb-8">近年、生成AIやRAG（Retrieval-Augmented Generation）技術の進展により、企業内のナレッジ活用や情報検索の高度化が急速に進んでいます。一方で、コールセンターや営業活動において蓄積される音声・会話データの活用は、依然として多くの企業にとって課題となっています。</p>

          <p class="text-text-dark leading-relaxed mb-4">音声データには、顧客のニーズや現場の知見が多く含まれているものの、</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li>必要な情報を即座に検索・活用できない</li>
            <li>ナレッジとして体系化されていない</li>
            <li>AIと連携した高度な活用が難しい</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">といった課題が存在します。こうした背景のもと、株式会社ノウデルでは、音声解析技術とRAG基盤を融合した新たな取り組みとして、<strong class="text-brand">FUJIRAG</strong>の開発を担当いたしました。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">概要</span>
            FUJIRAGについて
          </h2>
          <p class="text-text-dark leading-relaxed mb-8">FUJIRAGは、音声・テキストデータを横断的に活用し、必要な情報へ迅速にアクセスできるRAG型AIシステムです。音声認識・要約・ナレッジ検索といった複数の技術を統合することで、会話データのナレッジ化、必要な情報の即時検索、業務支援へのAI活用を実現します。</p>
          <p class="text-text-dark leading-relaxed mb-8">また、ノウデルがこれまで培ってきた音声解析およびAI基盤構築のノウハウを活かし、実運用を見据えた構成で設計・開発を行いました。</p>

          <div class="bg-base-light-gray border border-gray-200 rounded-lg p-6 my-8">
            <h3 class="text-lg font-semibold text-text-brand-dark mb-4">サービスサイト</h3>
            <a href="https://fujirag.voitex.biz/" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-base-white border border-gray-200 rounded-lg hover:border-brand transition-colors group shadow-sm">
              <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">FUJIRAG</span>
              <span class="text-accent-gold group-hover:text-brand font-medium">FUJIRAG サービスサイト</span>
              <span class="ml-auto text-gray-500 group-hover:text-gray-400">↗</span>
            </a>
          </div>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">技術</span>
            技術的な特徴
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">FUJIRAGでは、以下の技術要素を組み合わせています。</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li>音声データの文字起こしおよび構造化</li>
            <li>要約・分析による情報の整理</li>
            <li>RAGによるナレッジ検索の高度化</li>
            <li>Webインターフェースによる直感的な利用</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">これにより、従来は活用が難しかった音声データを、企業の意思決定や業務改善に活かすことが可能となります。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">今後</span>
            今後の展開
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">株式会社ノウデルでは、FUJIRAGの開発を通じて、音声データとAIを組み合わせた実用的なソリューションの提供をさらに強化してまいります。</p>
          <p class="text-text-dark leading-relaxed mb-4">今後は、</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li>より高度なナレッジ検索機能の拡張</li>
            <li>企業環境に応じたカスタマイズ対応</li>
            <li>AI活用基盤とのさらなる連携</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">などを推進し、現場で「使えるAI」の実現を目指してまいります。</p>

          <div class="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6 my-8 text-center">
            <h3 class="text-lg font-semibold mb-2">お問い合わせ</h3>
            <p class="text-white">FUJIRAGおよびAI基盤開発に関するご相談は、お気軽にお問い合わせください。</p>
            <a href="/contact" class="inline-block mt-4 bg-white text-brand font-semibold py-2 px-6 rounded-lg hover:bg-accent-gold transition-colors">お問い合わせ</a>
          </div>
        </div>
      `
    },
    '1': {
      id: 1,
      title: 'KTGS社「ボイテキ！クライアント」iPhoneアプリ正式リリース｜ノウデルが開発を担当',
      date: '2025.09.25',
      category: 'お知らせ',
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-lg text-text-dark leading-relaxed mb-8">株式会社ノウデル（本社：東京都中野区）は、2025年9月25日にケーティージーエス合同会社（以下KTGS）より正式リリースされたiPhoneアプリ「<span class="font-bold text-brand">ボイテキ！クライアント</span>」の開発を担当いたしました。</p>
          
          <div class="bg-base-light-gray border-l-4 border-brand p-6 my-8 rounded-r-lg">
            <p class="text-brand font-medium mb-2 text-sm uppercase tracking-wide">アプリ概要</p>
            <p class="text-text-dark">「ボイテキ！クライアント」は、対面商談での音声記録を簡単にし、営業活動の効率化を支援する専用iPhoneアプリです。</p>
          </div>
          
          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">開発背景</span>
            開発の背景と目的
          </h2>
          <p class="text-text-dark leading-relaxed mb-8">Appleの審査を通過し、App Storeで配信開始された本アプリは、営業担当者が商談に集中しながら確実な記録を実現するための専用ツールとして開発されました。</p>
          
          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">主な機能</span>
            アプリの主要機能
          </h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-base-white border border-gray-200 rounded-lg p-6 hover:border-brand transition-colors shadow-sm">
              <h3 class="font-semibold text-text-dark mb-3 flex items-center">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">録音</span>
                ワンタップ録音
              </h3>
              <p class="text-sm text-text-dark">ワンタップで録音開始・停止、録音前の承諾確認機能</p>
            </div>
            <div class="bg-base-white border border-gray-200 rounded-lg p-6 hover:border-brand transition-colors shadow-sm">
              <h3 class="font-semibold text-text-dark mb-3 flex items-center">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">品質</span>
                高品質録音
              </h3>
              <p class="text-sm text-text-dark">高品質WAV形式での録音、録音内容の即座再生機能</p>
            </div>
            <div class="bg-base-white border border-gray-200 rounded-lg p-6 hover:border-brand transition-colors shadow-sm">
              <h3 class="font-semibold text-text-dark mb-3 flex items-center">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">連携</span>
                クラウド連携
              </h3>
              <p class="text-sm text-text-dark">ボイテキ！への自動アップロード、録音ファイルの一元管理</p>
            </div>
            <div class="bg-base-white border border-gray-200 rounded-lg p-6 hover:border-brand transition-colors shadow-sm">
              <h3 class="font-semibold text-text-dark mb-3 flex items-center">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">確認</span>
                即座確認
              </h3>
              <p class="text-sm text-text-dark">録音後すぐに再生して内容を確認、品質チェックも可能</p>
            </div>
          </div>
          
          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">活用シーン</span>
            主な活用シーン
          </h2>
          <div class="space-y-4 mb-8">
            <div class="flex items-start space-x-4 p-4 bg-base-light-gray rounded-lg">
              <span class="text-2xl">🤝</span>
              <div>
                <h3 class="font-semibold text-text-dark">対面商談・営業活動</h3>
                <p class="text-sm text-text-dark">お客様との商談内容を確実に記録し、後で振り返りやフォローアップに活用</p>
              </div>
            </div>
            <div class="flex items-start space-x-4 p-4 bg-base-light-gray rounded-lg">
              <span class="text-2xl">👥</span>
              <div>
                <h3 class="font-semibold text-text-dark">顧客との打ち合わせ</h3>
                <p class="text-sm text-text-dark">要件確認や仕様検討の会議内容を記録し、プロジェクト管理に活用</p>
              </div>
            </div>
            <div class="flex items-start space-x-4 p-4 bg-base-light-gray rounded-lg">
              <span class="text-2xl">🏢</span>
              <div>
                <h3 class="font-semibold text-text-dark">社内会議・研修</h3>
                <p class="text-sm text-text-dark">社内会議や研修の内容を記録し、知識共有や振り返りに活用</p>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6 my-8">
            <h3 class="text-lg font-semibold mb-3">開発成果</h3>
            <p class="text-white">ノウデルでは、iOSアプリ開発の豊富な経験を活かし、ユーザビリティと機能性を両立した高品質なアプリを開発しました。</p>
          </div>
          
          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">App Store配信</span>
            App Storeでの配信開始
          </h2>
          <p class="text-text-dark leading-relaxed mb-8">「ボイテキ！クライアント」は、2025年9月25日よりApple App Storeで無料ダウンロード可能です。App Storeでの検索は「ボイテキ」でお探しください。</p>
          
          <div class="bg-base-light-gray border border-gray-200 rounded-lg p-6 my-8">
            <h3 class="text-lg font-semibold text-text-brand-dark mb-4">関連リンク</h3>
            <div class="space-y-3">
              <a href="https://www.voitex.site/news/voitex-iphone-app-voitexclient-official-release" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-base-white border border-gray-200 rounded-lg hover:border-brand transition-colors group shadow-sm">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">製品サイト</span>
                <span class="text-accent-gold group-hover:text-brand font-medium">ボイテキ！クライアント リリース記事（KTGS）</span>
                <span class="ml-auto text-gray-500 group-hover:text-gray-400">↗</span>
              </a>
              <a href="https://www.voitex.site/" target="_blank" rel="noopener noreferrer" class="flex items-center p-4 bg-base-white border border-gray-200 rounded-lg hover:border-brand transition-colors group shadow-sm">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">製品サイト</span>
                <span class="text-accent-gold group-hover:text-brand font-medium">ボイテキ！公式サイト（KTGS）</span>
                <span class="ml-auto text-gray-500 group-hover:text-gray-400">↗</span>
              </a>
              <a href="/contact" class="flex items-center p-4 bg-base-white border border-gray-200 rounded-lg hover:border-brand transition-colors group shadow-sm">
                <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">お問い合わせ</span>
                <span class="text-accent-gold group-hover:text-brand font-medium">アプリ開発に関するご相談・お問い合わせ</span>
                <span class="ml-auto text-gray-500 group-hover:text-gray-400">→</span>
              </a>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6 my-8 text-center">
            <h3 class="text-lg font-semibold mb-2">お気軽にご相談ください</h3>
            <p class="text-white">iOSアプリ開発やモバイルアプリを活用したプロダクト開発をご検討中の企業様は、ぜひお気軽にご相談ください。</p>
          </div>
        </div>
      `
    },
    '2': {
      id: 2,
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
    },
    '3': {
      id: 3,
      title: 'クローズドネットワーク環境でのRAG型AI基盤の構築を開始',
      date: '2026.03.07',
      category: 'お知らせ',
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-lg text-text-dark leading-relaxed mb-6">— 株式会社ノウデルのAI活用への取り組み —</p>
          <p class="text-text-dark leading-relaxed mb-8">近年、ChatGPTをはじめとする大規模言語モデル（LLM）の登場により、企業におけるAI活用の可能性は急速に広がっています。問い合わせ対応の効率化、社内ナレッジ検索、業務支援など、LLMを活用したさまざまな取り組みが検討されています。</p>
          <p class="text-text-dark leading-relaxed mb-8">しかし実際の企業環境では、AI導入にあたって次のような課題に直面するケースが少なくありません。</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li>社内データを外部クラウドに送信できない</li>
            <li>顧客情報や機密情報を扱うためセキュリティ要件が厳しい</li>
            <li>クローズドネットワーク環境での運用が求められる</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">こうした背景から、企業ネットワーク内で完結するAI基盤の構築が重要なテーマとなっています。株式会社ノウデルでは現在、こうした企業ニーズに対応するため、クローズドネットワーク環境で利用可能な<strong class="text-brand">RAG（Retrieval Augmented Generation）型AI基盤</strong>の構築に取り組んでいます。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">RAG</span>
            社内ナレッジを活用するRAG型AI
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">今回構築を進めているシステムは、LLMに社内文書を参照させながら回答を生成する<strong>RAG（Retrieval Augmented Generation）</strong>というアーキテクチャを採用しています。RAGでは、ユーザーからの質問に対してまず関連文書を検索し、その情報をもとにAIが回答を生成します。</p>
          <p class="text-text-dark leading-relaxed mb-4">概念的には次のような構成になります。</p>
          <div class="bg-base-light-gray rounded-lg p-4 mb-6 font-mono text-sm text-center text-text-dark">
            ユーザー質問 → 文書検索（VectorDB） → LLMによる回答生成
          </div>
          <figure class="my-8 max-w-[25%] min-w-[200px] mx-auto cursor-pointer hover:opacity-90 transition-opacity" data-lightbox-src="/images/RAG-processing-flow.png" title="クリックで拡大">
            <img src="/images/RAG-processing-flow.png" alt="RAG処理フロー" class="w-full rounded-lg border border-gray-200 shadow-md" />
            <figcaption class="text-center text-sm text-gray-500 mt-2">RAG処理フロー（クリックで拡大）</figcaption>
          </figure>
          <p class="text-text-dark leading-relaxed mb-8">この仕組みにより、社内マニュアルや業務ナレッジ、各種資料などをAIが参照しながら回答できるようになります。企業においては、いわば<strong>「社内ナレッジを活用するAIアシスタント」</strong>としての役割が期待されています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">環境</span>
            AIエッジサーバーによるローカルLLM環境
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">今回のAI基盤では、ローカル環境でLLMを実行する構成を採用しています。検証環境には、AI推論用途に最適化されたエッジコンピューティング機器である<strong>MSI EdgeXpert</strong>を使用しています。</p>
          <figure class="my-8 cursor-pointer hover:opacity-90 transition-opacity" data-lightbox-src="/images/RAG-AI-configuration.png" title="クリックで拡大">
            <img src="/images/RAG-AI-configuration.png" alt="RAG・AI構成図" class="w-full rounded-lg border border-gray-200 shadow-md" />
            <figcaption class="text-center text-sm text-gray-500 mt-2">RAG・AI構成（検証環境）（クリックで拡大）</figcaption>
          </figure>
          <p class="text-text-dark leading-relaxed mb-4">この環境上で、</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li>ローカルLLMの実行</li>
            <li>RAGによる文書検索</li>
            <li>社内ネットワーク内でのAI応答</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">といったAI基盤の構築を進めています。インターネット接続を必要とせず、社内ネットワーク内で完結するAI環境を実現することを目指しています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">セキュリティ</span>
            企業利用を想定したアクセス制御
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">企業環境においてAIシステムを導入する際には、情報アクセスの制御も重要なポイントになります。多くの企業では、複数の事業部や部署が存在しており、それぞれが異なる業務情報や顧客データを扱っています。</p>
          <p class="text-text-dark leading-relaxed mb-4">そのため今回のAI基盤では、</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li>部門ごとのナレッジ分離</li>
            <li>ユーザーのロールに応じたアクセス制御</li>
            <li>他事業部データへのアクセス制限</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">といった仕組みを取り入れ、企業環境に適したAI利用モデルの検証を進めています。これにより、セキュリティ要件を満たしながらAIを活用できる基盤の構築を目指しています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">実務</span>
            RAG構築における実務的な課題
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">AIシステムの構築を進める中で見えてきたのは、LLMそのものよりも社内文書データの扱いが重要なテーマになるという点です。企業のナレッジは多くの場合、Word・Excel・PowerPointといったオフィス文書として蓄積されています。</p>
          <p class="text-text-dark leading-relaxed mb-8">これらの文書をAIが扱いやすい形に整理し、検索可能なナレッジとして整備することが、RAGシステムの精度に大きく影響します。現在は、これらの文書をテキストデータとして抽出し、ベクトルデータベースへ登録することで、AIが参照可能なナレッジ基盤の整備を進めています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">今後</span>
            今後の展開
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">株式会社ノウデルでは、今回の取り組みを通じて以下のテーマに取り組んでいきます。</p>
          <ul class="list-disc pl-6 mb-6 space-y-2 text-text-dark">
            <li>クローズド環境でのLLM運用最適化</li>
            <li>社内ナレッジ活用のためのRAGシステム高度化</li>
            <li>企業向けAI活用基盤の整備</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">AIの企業活用は今後さらに拡大していくと考えられます。その中でも、セキュリティ要件を満たしたAI基盤は重要なテーマの一つです。株式会社ノウデルでは、引き続き企業環境に適したAI活用の研究・開発を進め、実務で活用できるAI基盤の構築を目指していきます。</p>

          <div class="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6 my-8 text-center">
            <h3 class="text-lg font-semibold mb-2">お気軽にご相談ください</h3>
            <p class="text-white">クローズド環境でのAI基盤・RAGシステムのご検討は、ぜひお気軽にご相談ください。</p>
            <a href="/contact" class="inline-block mt-4 bg-white text-brand font-semibold py-2 px-6 rounded-lg hover:bg-accent-gold transition-colors">お問い合わせ</a>
          </div>
        </div>
      `
    },
    '4': {
      id: 4,
      title: 'クローズド環境で音声分析とAI基盤を連携させる取り組みを開始',
      date: '2026.03.10',
      category: 'お知らせ',
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-lg text-text-dark leading-relaxed mb-6">— 株式会社ノウデルのAI活用への取り組み —</p>
          <p class="text-text-dark leading-relaxed mb-8">近年、ChatGPTをはじめとする大規模言語モデル（LLM）の活用が広がる一方で、コールセンターの通話や商談録音といった<strong>音声・会話データ</strong>をどう活用するかも、企業にとって重要なテーマになりつつあります。文字起こしや感情分析、要約・レポート生成までを社内で一気通貫で扱いたいというニーズは、とくに機密性の高い業種で強く聞かれます。</p>
          <p class="text-text-dark leading-relaxed mb-8">しかし実際には、音声データの活用にあたって次のような課題があります。</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li>通話や商談音声を外部クラウドに送信できない</li>
            <li>文字起こし・感情解析・要約までを社内で完結させたい</li>
            <li>すでに稼働している社内のAI基盤（LLM・RAG・チャット）と連携させたい</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">こうした背景から、株式会社ノウデルでは、クローズドネットワーク環境で利用可能な<strong class="text-brand">RAG型AI基盤</strong>（<a href="/news/3" class="text-accent-gold hover:text-brand font-medium underline">前回ご紹介した取り組み</a>）に加え、<strong>音声分析システム「ボイテキ２！」の設計を進めています</strong>。今回は、既存のAI基盤と同じ環境で"同居"させる構成で、音声を社外に出さずに活用する取り組みの概要をご紹介します。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">ボイテキ２！</span>
            音声分析システム「ボイテキ２！」とは
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">今回設計を進めているボイテキ２！は、オンプレミス環境で動作する音声分析システムです。処理の流れはおおまかに次のとおりです。</p>
          <div class="bg-base-light-gray rounded-lg p-4 mb-6 font-mono text-sm text-center text-text-dark">
            音声・動画の取り込み → 文字起こし（STT） → 感情解析（SER） → 発話と感情のマージ → 要約・レポート生成（LLM）
          </div>
          <ul class="list-disc pl-6 mb-6 space-y-2 text-text-dark">
            <li>結果は<strong>解析一覧・詳細画面</strong>で確認でき、発話本文・感情の変化・音声再生を連動して確認できる構成を想定しています。</li>
            <li>経営者・営業・品質管理・人事など<strong>役割ごとの視点（レンズ）</strong>で同じ解析結果を見られるようにし、業務に応じた活用を目指しています。</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">重要なのは、<strong>音声と解析結果をすべて社内に閉じたまま</strong>利用できる点です。機微な通話データをクラウドに送らず、社内のLLMやRAGと組み合わせて、要約やチャット検索までをクローズド環境で完結させることを目指しています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">連携</span>
            既存AI基盤との"同居"構成
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">当社では、LLM・RAG・チャットUIを備えた<strong>RAG型AI基盤（FUJI RAG）をすでにDockerで運用しています</strong>。今回のボイテキ２！は、その環境に新たに1システムとして相乗りさせる形で設計しました。</p>
          <div class="space-y-6 mb-8">
            <div class="bg-base-light-gray rounded-lg p-6">
              <h3 class="font-semibold text-text-brand-dark mb-2">既存AI基盤から利用するもの</h3>
              <p class="text-text-dark text-sm leading-relaxed">LLM（要約・レポート生成）とチャットUI（解析結果を自然言語で検索）は、既存のFUJI RAGをそのまま利用します。将来的には、音声解析の結果をRAGに登録し、既存のチャット画面から検索できるようにする予定です。</p>
            </div>
            <div class="bg-base-light-gray rounded-lg p-6">
              <h3 class="font-semibold text-text-brand-dark mb-2">ボイテキ２！側で完結するもの</h3>
              <p class="text-text-dark text-sm leading-relaxed">音声の取り込み、文字起こし・感情解析の制御、解析結果の保存、一覧・詳細のAPI、音声の再生配信などは、ボイテキ２！専用のデータベースとストレージで完結させます。既存のAI基盤のデータベースには触れません。</p>
            </div>
            <div class="bg-base-light-gray rounded-lg p-6">
              <h3 class="font-semibold text-text-brand-dark mb-2">既存システムに影響を与えない取り決め</h3>
              <p class="text-text-dark text-sm leading-relaxed">別のDockerプロジェクト名・別ポートで起動し、既存のAI基盤の設定は変更しない方針にしています。「既存をいじらず、必要な機能だけを追加する」ことを意識した構成です。</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">環境</span>
            コンテナ化とオンプレサーバー
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">今回の構成では、アプリケーションに加え、<strong>データベースやオブジェクトストレージ（S3互換）、文字起こし・感情解析エンジンもコンテナ化</strong>する方針としています。これにより、再現性の確保やリソースの分離、バージョン管理がしやすくなります。</p>
          <p class="text-text-dark leading-relaxed mb-8">本番環境では、AI推論や音声処理に適したオンプレサーバーを想定しており、クローズドネットワーク内で音声の取り込みから解析・要約・チャット連携までが完結する構成を目指しています。<a href="/news/3" class="text-accent-gold hover:text-brand font-medium underline">前回ご紹介したRAG型AI基盤</a>と同一のネットワーク上で動作させ、社内データを外部に送信しない運用を前提としています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">セキュリティ</span>
            セキュリティ・アクセス制御
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">企業環境で音声分析を導入する際には、<strong>どのデータを誰が参照できるか</strong>の制御が重要です。今回の設計では、次のような仕組みを取り入れています。</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li>ユーザーの<strong>ロール（役割）</strong>に応じたアクセス制御</li>
            <li><strong>役割別レンズ</strong>による表示内容の切り替え（経営者向け・営業向け・品質管理向けなど）</li>
            <li>音声の<strong>再生のみ許可</strong>し、ダウンロードは提供しない方針（情報漏洩リスクの低減）</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">これにより、セキュリティ要件を満たしつつ、部署や役割に応じた音声データの活用を目指しています。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">実務</span>
            設計で意識していること
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">音声分析システムの構築では、<strong>文字起こしや感情解析の精度</strong>に加え、<strong>既存のAI基盤との連携のしやすさ</strong>が実務上重要になります。今回の設計では、次の点を意識しています。</p>
          <ul class="list-disc pl-6 mb-8 space-y-2 text-text-dark">
            <li>文字起こし（Whisper系）や感情解析エンジンは<strong>別コンテナ</strong>として用意し、必要に応じてモデルの差し替えやスケール調整がしやすい構成にする</li>
            <li>解析結果の<strong>状態管理</strong>（処理中・完了・一部失敗など）を明確にし、運用時の確認や再実行がしやすいようにする</li>
            <li>画面は<strong>モダンなデザイン</strong>と<strong>レスポンシブ対応</strong>を必須とし、発話・感情グラフ・音声再生が連動する<strong>3ペイン構成</strong>で、効率的な確認ができるようにする</li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">これらの方針をもとに、実務で使いやすい音声分析基盤の実装を進めていく予定です。</p>

          <h2 class="text-2xl font-bold text-text-brand-dark mt-12 mb-6 flex items-center">
            <span class="bg-brand text-white px-3 py-1 rounded text-sm font-medium mr-4">今後</span>
            今後の展開
          </h2>
          <p class="text-text-dark leading-relaxed mb-4">株式会社ノウデルでは、今回の取り組みを通じて以下のテーマに取り組んでいきます。</p>
          <ul class="list-disc pl-6 mb-6 space-y-2 text-text-dark">
            <li>クローズド環境での<strong>音声分析とRAG型AI基盤の連携</strong></li>
            <li>役割別レンズや感情イベントを活かした<strong>業務向けレポート・ダッシュボード</strong>の拡充</li>
            <li>文字起こし・感情解析の<strong>コンテナ化と運用の安定化</strong></li>
          </ul>
          <p class="text-text-dark leading-relaxed mb-8">音声・会話データの活用は、コールセンターや営業、人事・研修など、多くの業務領域でニーズが高まっています。その中でも、社内データを外部に送信せず、既存のAI基盤と連携して活用できる環境は、企業にとって重要なテーマの一つです。株式会社ノウデルでは、引き続きクローズド環境に適したAI・音声活用の研究・開発を進め、実務で使える基盤の構築を目指していきます。</p>

          <div class="bg-base-light-gray border border-gray-200 rounded-lg p-6 my-8">
            <h3 class="text-lg font-semibold text-text-brand-dark mb-3">関連記事</h3>
            <a href="/news/3" class="flex items-center p-4 bg-base-white border border-gray-200 rounded-lg hover:border-brand transition-colors group">
              <span class="bg-brand text-white px-2 py-1 rounded text-xs font-medium mr-3">RAG</span>
              <span class="text-accent-gold group-hover:text-brand font-medium">クローズドネットワーク環境でのRAG型AI基盤の構築を開始</span>
              <span class="ml-auto text-gray-500">→</span>
            </a>
          </div>

          <div class="bg-gradient-to-r from-brand to-brand-dark text-white rounded-lg p-6 my-8 text-center">
            <h3 class="text-lg font-semibold mb-2">お気軽にご相談ください</h3>
            <p class="text-white">クローズド環境での音声分析・AI基盤連携のご検討は、ぜひお気軽にご相談ください。</p>
            <a href="/contact" class="inline-block mt-4 bg-white text-brand font-semibold py-2 px-6 rounded-lg hover:bg-accent-gold transition-colors">お問い合わせ</a>
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
            <ArticleContentWithLightbox html={article.content} />
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
