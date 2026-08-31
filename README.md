# CastMemo 公式Webサイト

iOS アプリ「**CastMemo**」（小説・ドラマ・映画・漫画の登場人物を、自分だけのメモと相関図で整理できるアプリ）の公式 Web サイトです。

Flutter で作られている **アプリ本体とは別リポジトリ／別プロジェクト**です。このフォルダ（`castmemo-web`）以外には触れません。

目的は、作品別の「登場人物ガイド」を継続的に追加し、Google 検索から CastMemo アプリへの流入をつくるメディア型の公式サイトの土台です。本番 URL は `https://castmemo.app`。

---

## 使用技術

| 領域 | 採用 | 理由 |
| --- | --- | --- |
| フレームワーク | [Astro](https://astro.build/) v7（静的サイト生成 / `output: 'static'`） | コンテンツ中心・SEO 重視・JS 最小に最適 |
| 言語 | TypeScript（`astro/tsconfigs/strict`） | 型安全 |
| コンテンツ管理 | Astro Content Collections（`src/content/works/`） | 作品ページを Markdown / MDX で量産できる |
| Markdown 拡張 | `@astrojs/mdx` | 本文に将来コンポーネント（相関図・CTA 等）を埋め込めるようにする |
| サイトマップ | `@astrojs/sitemap` | ビルド時に `sitemap-index.xml` を自動生成 |
| スタイル | **Astro 標準のスコープ付き CSS + 1 枚のグローバル CSS**（`src/styles/global.css`） | 下記参照 |
| JS | 最小限（モバイルメニューは `<details>` で JS ゼロ、Analytics シムのみ ~350 bytes・外部 JS バンドル 0） | パフォーマンス優先 |

外部 UI ライブラリ・アイコンフォント・外部 Web フォントは使用していません。

### Tailwind CSS を入れなかった理由

- ページ数が少なく（公開 8 ページ + 作品テンプレート）、デザインシステムも CSS カスタムプロパティで管理できる規模。
- ライト/ダークのハイブリッド構成もセマンティックトークン（`--color-*`）の差し替えで実現でき、依存とビルド設定を増やさずに済む。
- 「JS/外部依存は必要最小限」という方針に合う。
- 将来ページが大きく増えてユーティリティ CSS の恩恵が明確になった段階で、`npx astro add tailwind` で後入れ可能。

---

## ブランドデザイン

CastMemo アプリの実 UI（濃紺背景・少し明るいネイビーのカード・紫〜青グラデーション・白文字）に合わせた**ハイブリッド構成**です。

- **ブランドエリア**（Hero / CTA / ヘッダー / フッター / 一部セクション）… ダークネイビー + 紫/青グラデーション。`global.css` の `.brand` クラスでトークンをダークに差し替える。
- **読み物エリア**（作品ガイド本文 / 長文 / FAQ）… 白〜淡いラベンダー背景 + 濃い文字（`:root` の既定トークン）。長文の可読性を優先し、本文はダークにしない。

カラーは `src/styles/global.css` の CSS カスタムプロパティに一元管理。主な値:

| 用途 | 変数 | 値 |
| --- | --- | --- |
| Deep Navy（アプリ背景相当） | `--navy-900` | `#16172a` |
| Card Navy | `--navy-700` | `#282a44` |
| Purple アクセント | `--purple` | `#7c5cff` |
| Blue アクセント | `--blue` | `#4f7cff` |
| ブランドグラデーション | `--gradient-brand` | `linear-gradient(120deg, #7c5cff, #4f7cff)` |
| Light Lavender（読み物の淡い背景） | `--lavender-50` | `#f6f3ff` |
| Text Dark | `--color-text`（既定） | `#1c1c2b` |
| Text Light | `--text-on-dark` | `#f7f7fb` |
| リンク/強調（ライト背景・4.5:1 以上） | `--color-accent` | `#5a3ff0` |

グラデーションはメイン CTA・見出しの一語・Hero の装飾ラインなど要所のみに使用。

---

## 動作環境

- **Node.js 22 LTS**（`.nvmrc` = `22`、`package.json` engines = `>=22.12.0`）。`nvm use` 推奨。
- npm

```bash
nvm use            # → Node 22
npm install
```

`npm install` 後、esbuild / sharp の postinstall がブロックされている場合は `npm approve-scripts esbuild` を実行（`package.json` の `allowScripts` に記録済み）。sharp は Astro の依存として同梱されており、ブランド素材の生成にのみ利用します（新規追加ではありません）。

---

## ローカル開発

```bash
npm run dev        # 開発サーバー: http://localhost:4321
```

- 開発サーバーでは `draft: true` の作品もプレビューできます（`noindex` 付き）。
- Astro 7 の dev サーバーは常駐します。停止: `npx astro dev stop`。

## ビルド

```bash
npm run build            # astro check（型チェック）→ astro build。出力先: dist/
npm run preview          # dist/ をローカル配信して確認
npm run check            # 型チェックのみ
npm run generate:assets  # public/*.svg から OGP画像・PNGファビコンを再生成
```

`npm run build` は型エラーがあると失敗します（CI 向け）。

---

## 作品ガイド記事の追加方法

1. `src/content/works/` に `<slug>.md`（または `.mdx`）を追加する。
2. frontmatter を書く（スキーマは `src/content.config.ts`）:

   ```yaml
   ---
   title: "作品タイトル"
   slug: "work-slug"          # 省略時はファイル名。URL は /works/<slug>/
   description: "meta description / 一覧カードに使う説明"
   category: "novel"          # novel | drama | movie | manga | anime | other
   releaseYear: 2024          # 任意
   spoilerPolicy: "none"      # none | minimal | moderate
   publishedAt: 2026-09-01
   updatedAt: 2026-09-10      # 任意
   draft: false               # true の間は本番ビルド・sitemap に出ない
   featured: false            # true でトップページ優先表示
   sample: false              # true で「サンプル」バッジ・注意書きを表示
   ogImage: "/path.png"       # 任意。個別 OGP 画像
   ---
   ```

3. 本文に主要人物・人物関係・簡易相関図・CTA などを Markdown / MDX で書く。
4. `title` / `description` / `canonical` / OGP / `Article` JSON-LD は frontmatter から自動生成されます。
5. ページは `/works/<slug>/` に生成されます。

### サンプル記事について

- `src/content/works/sample-work.md` … 表示確認用のダミー記事（`sample: true`）。**削除して構いません**（ファイルを消すだけで一覧・sitemap から自動的に外れます）。
- `src/content/works/draft-example.md` … `draft: true` の動作確認用。同上。

---

## ブランド素材（画像）

SVG（`public/`）と正式アイコンの元画像（`assets/source/app-icon.png`）を元に `npm run generate:assets`（= `node scripts/generate-og.mjs`）で PNG を生成します。**外部サービス・外部素材は一切使いません。**

| ファイル | 用途 | 生成元 |
| --- | --- | --- |
| `public/og-default.png`（1200×630） | 既定の OGP/Twitter 画像 | `public/og-default.svg` |
| `public/favicon-32.png`（32×32） | PNG フォールバックファビコン | `public/favicon.svg` |
| `public/favicon.svg` | メインファビコン（人物3ノード+関係線） | 手書き |
| `public/apple-touch-icon.png`（180×180） | iOS ホーム画面アイコン | `assets/source/app-icon.png`（無ければ `public/icon-source.svg`） |
| `public/images/app-icon-256.png` / `-512.png` | Web 表示用の軽量アプリアイコン（1x/2x） | `assets/source/app-icon.png` |

SVG や正式アイコンの元画像を差し替えたら `npm run generate:assets` を再実行してコミットしてください。

### アプリアイコン

- **元画像**: `assets/source/app-icon.png`（正式アイコン）。**Web からは直接参照せず、配信もされません**（`public/` の外に置いています）。
- `npm run generate:assets` が元画像から軽量版 `public/images/app-icon-256.png` / `app-icon-512.png` と `public/apple-touch-icon.png` を生成します。
- `src/components/AppIcon.astro` は `app-icon-256/512.png`（1x/2x）を Hero・App 紹介ページ・フッターで使用。生成物が無い場合のみ自作 SVG プレースホルダーを表示します。
- アイコンを差し替えるときは `assets/source/app-icon.png` を置き換えて `npm run generate:assets` を実行 → 生成物をコミット。

### アプリ画面デモ `src/components/AppScreenshot.astro`

- `public/images/app-screenshot-home.png` が**あれば**スマホフレーム内にその画像を表示。
- **無ければ**、HTML/CSS 製の CastMemo ホーム画面風デモ UI を表示（コンテナクエリ単位でフレーム幅に追従）。**実在の作品名・人物名・作品画像・外部素材は一切なし**。作品はすべて架空（`星降る街`／`沈黙の庭`／`北風の手紙`／`夏の記憶`／`遠い波音`）で、作品画像の代わりに頭文字アイコンを表示。文言はコンポーネント冒頭の配列を書き換えるだけで変更できます。
- **TODO(人間・任意)**: 実アプリのスクリーンショットを載せたい場合は、実在作品由来の画像を含まない画面を `public/images/app-screenshot-home.png` に配置すれば自動的に切り替わります。

---

## SEO 実装

- 各ページ: `<title>` / meta description / `<link rel="canonical">` / OGP / Twitter Card / robots メタ / `lang="ja"` / `theme-color`（`src/components/Seo.astro`, `BaseLayout.astro`）。
- OGP: 既定で `public/og-default.png`（`src/consts.ts` の `DEFAULT_OG_IMAGE`）。作品ページは frontmatter `ogImage` で個別指定可。画像が無い場合は `twitter:card` を `summary` にフォールバック。
- `sitemap-index.xml` + `sitemap-0.xml` をビルド時に自動生成。`draft` 作品は含まれません。
- `public/robots.txt` に sitemap を明記。
- 構造化データ（JSON-LD, `src/components/JsonLd.astro`）:
  - トップ: `WebSite` + `SoftwareApplication`
  - App 紹介: `SoftwareApplication`
  - 作品記事: `Article`
  - 評価・価格・レビュー件数などは **一切含めていません**（実態がないため）。

---

## App Store CTA

- `src/consts.ts` の `APP_STORE_URL` で URL を一元管理（App Store ID `6768948102` は公開情報）。各ページに直書きしない。
- 共通コンポーネント `src/components/AppStoreButton.astro`。
  - 外部リンク（`target="_blank" rel="noopener external"`）。
  - `location`（押された位置）、`workSlug`（作品ページからの遷移）、`variant`（`primary`=紫→青グラデ / `ghost`）を props で受け取り、`data-analytics-*` 属性として出力。
- クリック計測: `src/layouts/BaseLayout.astro` 内の Analytics シムが `[data-analytics-event]` のクリックを `window.dataLayer` に push（`event: 'app_store_click'`, `location`, `work`, `href`）。
- **現時点で GA タグ・測定 ID は入れていません。** GA4 / GTM のスニペットを `BaseLayout.astro` に追加すれば計測が有効になります。

---

## Cloudflare Pages で公開するときの設定

今回は実デプロイ・DNS 変更はしません。設定値のみ:

| 項目 | 値 |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22`（環境変数 `NODE_VERSION=22` で指定） |

- 出力は完全な静的ファイル（`dist/`）。SPA ルーティング設定は不要。
- `dist/404.html` が Cloudflare Pages のカスタム 404 として使われます。
- `trailingSlash: 'always'`（`/works/slug/`）。

---

## 今後、人間側で行う必要がある作業

- プライバシーポリシー（`src/pages/privacy/index.astro`）の**正式内容の確認・作成**（法務確認。Analytics 導入時にも更新が必要）。
- お問い合わせ窓口の決定と `src/pages/contact/index.astro` の更新（現在はプレースホルダー）。
- ~~正式アプリアイコンの配置~~ … 完了（元画像 `assets/source/app-icon.png`）。差し替え時は元画像を置き換えて `npm run generate:assets` を再実行。
- （任意）`public/images/app-screenshot-home.png` … 権利上問題のない実スクリーンショットを載せたい場合のみ配置。現状は HTML/CSS 製デモ UI（架空作品）で代替済み。
- Google Analytics（GA4）アカウント作成 → 測定 ID を取得 → `BaseLayout.astro` にスニペット追加。
- Google Search Console 登録、sitemap 送信。
- Cloudflare Pages プロジェクト作成・DNS 設定。
- 実コンテンツ（作品ガイド記事）の作成。

---

## 将来の英語版について

- 文言・URL・App Store URL は `src/consts.ts` に集約済み。
- フッターに English リンクを差し込むコメント位置あり（`src/components/Footer.astro`）。
- Astro の i18n ルーティング（`/en/`）を後から追加できる構成。今回は言語切替 UI なし。

---

## ディレクトリ構成

```
castmemo-web/
├─ astro.config.mjs
├─ tsconfig.json
├─ .nvmrc                     # 22
├─ scripts/
│  └─ generate-og.mjs         # ブランド素材(PNG)生成: npm run generate:assets
├─ assets/
│  └─ source/
│     └─ app-icon.png         # 正式アプリアイコンの元画像(Webからは参照/配信しない)
├─ public/
│  ├─ favicon.svg / og-default.svg / icon-source.svg   # 生成元(SVG)
│  ├─ og-default.png / apple-touch-icon.png / favicon-32.png  # 生成物
│  ├─ robots.txt
│  └─ images/
│     ├─ app-icon-256/512.png     # 生成物(Web表示用の軽量版アプリアイコン)
│     └─ app-screenshot-home.png  # 任意。あれば実画像、無ければ CSS デモUI
└─ src/
   ├─ consts.ts               # サイト情報・URL・ナビ・ブランド色（直書き禁止の集約先）
   ├─ content.config.ts       # Content Collections スキーマ
   ├─ env.d.ts
   ├─ styles/global.css       # デザインシステム（CSS 変数・.brand トークン差し替え）
   ├─ layouts/
   │  └─ BaseLayout.astro     # 共通レイアウト + <head> + Analytics シム
   ├─ components/
   │  ├─ Seo.astro / JsonLd.astro
   │  ├─ Header.astro         # ダーク・<details> モバイルメニュー
   │  ├─ Footer.astro         # ダーク
   │  ├─ AppStoreButton.astro # 紫→青グラデCTA・data-analytics-*
   │  ├─ AppCtaBanner.astro   # ダークCTA バナー
   │  ├─ AppIcon.astro        # アプリアイコン（軽量版→生→SVGプレースホルダーの順）
   │  ├─ AppScreenshot.astro  # スマホフレーム内デモ（実画像→CSS製デモUI・架空作品）
   │  └─ WorkCard.astro
   ├─ lib/
   │  ├─ works.ts             # 作品クエリ（draft 除外・並び替え）
   │  ├─ labels.ts            # カテゴリ・ネタバレ方針の日本語ラベル
   │  └─ assets.ts            # public/ のファイル存在チェック
   ├─ content/works/
   │  ├─ sample-work.md       # サンプル（削除可）
   │  └─ draft-example.md     # draft 動作確認（削除可）
   └─ pages/
      ├─ index.astro
      ├─ 404.astro
      ├─ works/index.astro
      ├─ works/[slug].astro
      ├─ app/index.astro
      ├─ guide/index.astro
      ├─ articles/index.astro
      ├─ privacy/index.astro
      └─ contact/index.astro
```
