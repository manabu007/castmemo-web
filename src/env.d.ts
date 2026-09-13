/// <reference path="../.astro/types.d.ts" />

interface Window {
  /** Analytics 用データレイヤー（GA4 / GTM 導入時に利用） */
  dataLayer: Record<string, unknown>[];
  /**
   * GA4（gtag.js）。本番ビルドで src/components/GoogleAnalytics.astro が読み込む。
   * 開発サーバーや読み込み失敗時は undefined のままなので、呼び出し前に存在チェックする。
   */
  gtag?: (...args: unknown[]) => void;
}
