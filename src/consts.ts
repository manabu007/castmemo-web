/**
 * サイト全体で共有する定数。
 * URL やアプリ ID は必ずここから参照し、各ページ／コンポーネントに直書きしないこと。
 */

/** 本番 URL（末尾スラッシュなし） */
export const SITE_URL = 'https://castmemo.app';

/** サイト名 */
export const SITE_NAME = 'CastMemo';

/** キャッチコピー */
export const SITE_TAGLINE = '登場人物を整理して、もっと作品を楽しむ。';

/** サイト説明文（デフォルトの meta description / OGP description） */
export const SITE_DESCRIPTION =
  '小説・ドラマ・映画・漫画の登場人物を、自分だけのメモと相関図で整理できるアプリ「CastMemo」の公式サイト。ネタバレに配慮した作品ガイドも公開しています。';

/** 既定のロケール */
export const SITE_LOCALE = 'ja';
export const SITE_LOCALE_OG = 'ja_JP';

/**
 * App Store 情報。
 * App Store ID は公開情報。URL は Apple の正式な形式で組み立て、直書きしない。
 */
export const APP_STORE_ID = '6768948102';
export const APP_STORE_APP_NAME = 'castmemo';
export const APP_STORE_URL = `https://apps.apple.com/app/${APP_STORE_APP_NAME}/id${APP_STORE_ID}`;

/**
 * OGP 用のデフォルト画像（サイト内の静的パス）。
 *
 * `scripts/generate-og.mjs` が CastMemo ブランドのみで作った
 * public/og-default.png（1200x630, 外部素材なし）を生成する。
 * `og-default.svg` はその生成元（人間が調整可能）。
 *
 * TODO(人間): デザインを詰めたい場合は og-default.svg を編集して
 *   `node scripts/generate-og.mjs` を再実行し PNG を更新する。
 */
export const DEFAULT_OG_IMAGE = '/og-default.png';

/** ブランドカラー（meta theme-color 等に使用。詳細は global.css） */
export const BRAND_COLOR_NAVY = '#16172a';
export const BRAND_COLOR_PURPLE = '#7c5cff';

/**
 * Google Analytics 4 の測定 ID。
 * 実際の Google タグ（gtag.js）は src/components/GoogleAnalytics.astro が出力し、
 * BaseLayout.astro の <head> から 1 回だけ読み込む。
 * 本番ビルド（import.meta.env.PROD）でのみ出力され、開発サーバーでは読み込まれない。
 */
export const GA4_MEASUREMENT_ID = 'G-3C85EM27E5';

/**
 * 将来 English 版を追加する場合の基準パス。
 * 現時点では日本語のみ。言語切替 UI は未実装。
 */
export const LOCALES = {
  ja: { label: '日本語', path: '/' },
  // en: { label: 'English', path: '/en/' },
} as const;

/** グローバルナビゲーション（ロゴがトップへのリンクを兼ねる） */
export const NAV_LINKS = [
  { label: '作品ガイド', href: '/works/' },
  { label: 'CastMemoについて', href: '/app/' },
  { label: 'ガイド', href: '/guide/' },
] as const;

/** フッターリンク */
export const FOOTER_LINKS = [
  { label: '作品ガイド', href: '/works/' },
  { label: 'CastMemoについて', href: '/app/' },
  { label: 'ガイド', href: '/guide/' },
  { label: '特集記事', href: '/articles/' },
  { label: 'プライバシーポリシー', href: '/privacy/' },
  { label: 'お問い合わせ', href: '/contact/' },
] as const;
