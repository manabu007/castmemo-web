/// <reference path="../.astro/types.d.ts" />

interface Window {
  /** Analytics 用データレイヤー（GA4 / GTM 導入時に利用） */
  dataLayer: Record<string, unknown>[];
}
