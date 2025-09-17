# 株式会社ノウデル 公式サイト

## お問い合わせフォーム

Googleフォームを使用しており、以下の手順で設定してください：

1. **Googleフォームの作成**
   - [Googleフォーム](https://forms.google.com)で新しいフォームを作成
   - 必要な項目（お名前、メールアドレス、件名、メッセージなど）を設定

2. **埋め込みコードの取得**
   - フォームの「送信」ボタン横の「< >」をクリック
   - 埋め込みコードをコピー
   - `src`属性のURLを取得

3. **フォームIDの設定**
   - `components/ContactSection.tsx`の`YOUR_FORM_ID`を実際のフォームIDに置き換え

## フォーム設定例

```typescript
// ContactSection.tsx内
<iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform?embedded=true"
  width="100%"
  height="800"
  frameBorder="0"
  marginHeight="0"
  marginWidth="0"
  className="rounded-lg"
  title="お問い合わせフォーム"
>
  読み込んでいます...
</iframe>
```

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
npm run start
```