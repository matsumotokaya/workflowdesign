# Workflow Design - Portfolio

松本夏弥（Kaya Matsumoto）のデザイナーポートフォリオサイト。

## コンセプト

Pentagram / Takram に代表される、**ミニマルだが上質な**クリエイティブエージェンシーサイトを目指す。

### デザイン方針

- **Typography-Driven**: 大胆なタイポグラフィが主役。余白を贅沢に使う
- **Monochrome Base**: 白黒ベースに、アクセントとしてのみカラーを使用
- **Micro-Interactions**: ハンバーガーメニュー（2本線→×）、ホバーエフェクト、スクロールアニメーション等、細部のインタラクションにこだわる
- **Content-First**: シンプルな構成で、プロジェクト作品が映えるレイアウト
- **Responsive Excellence**: モバイルファーストで、デバイスごとに最適化されたUX

### サイト構成

1. **Hero** - 名前 + 肩書き + キャッチコピー（タイポグラフィアニメーション）
2. **Work** - プロジェクトグリッド（ホバーで詳細表示）
3. **About** - プロフィール + 経歴 + スキル
4. **Contact** - 連絡先 + ソーシャルリンク
5. **Footer** - ミニマルフッター

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 15 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS v4 |
| アニメーション | Framer Motion |
| ホスティング | Vercel |
| フォント | Google Fonts (Inter + Noto Sans JP) |

## 多言語対応（予定）

- 🇯🇵 日本語（初期実装）
- 🇺🇸 English
- 🇹🇼 繁體中文
- 🇨🇳 简体中文
- 🇰🇷 한국어

next-intl を使用した i18n 対応を後日実装。

## デザイン詳細

### タイポグラフィ
- 見出し: Inter (Light/Regular)
- 本文日本語: Noto Sans JP
- サイズ: clamp() によるフルードタイポグラフィ

### カラーパレット
- Primary: `#000000` (Black)
- Background: `#FAFAFA` (Off-white)
- Accent: `#666666` (Gray)
- Border: `#E5E5E5`

### アニメーション
- ページロード: テキストフェードイン + スライドアップ
- スクロール: Intersection Observer による段階的表示
- ホバー: スケール + オパシティ変化
- ナビゲーション: 2本線ハンバーガー ↔ × のスムーズ変形
- ページ遷移: フェード（Framer Motion）

## 開発

```bash
npm install
npm run dev
```

## デプロイ

Vercel に自動デプロイ（main ブランチ push 時）。
