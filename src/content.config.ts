import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { AMAZON_ASSOCIATE_TAG } from './consts';

/**
 * 紙の本（漫画・小説）の商品情報。任意。
 *
 * 表紙画像は Amazon の CDN（m.media-amazon.com）を直接参照する。
 * ダウンロード・保存・proxy・画像最適化は行わない。
 *
 * amazonUrl（Amazon アソシエイトのリンク）と coverUrl は任意。
 * - 下書き（draft: true）では未取得のままでよい。
 * - 公開（draft: false）の紙の本では amazonUrl が必須（作品スキーマ側で検証）。
 *
 * URL が書かれている場合は、draft かどうかに関係なく次を必ず検証する:
 * - ISBN-13 の 4〜12 桁目が ASIN（紙の本は ISBN-10 と同じ値）と一致すること
 * - amazonUrl が https の www.amazon.co.jp で、/dp/<asin> の商品番号が asin と一致し、
 *   tag が AMAZON_ASSOCIATE_TAG であること
 * - coverUrl が https://m.media-amazon.com/ で始まること
 */
const paperBook = z
  .object({
    /** 作品名（表紙の alt・商品情報に使う） */
    title: z.string(),
    /** 巻表記（例: 1巻） */
    volume: z.string(),
    author: z.string(),
    publisher: z.string(),
    /** 第1巻の発売年 */
    firstVolumeYear: z.number().int(),
    isbn13: z.string().regex(/^978\d{10}$/, 'ISBN-13 は 978 で始まる13桁の数字'),
    /** 紙の本の ASIN（ISBN-10 と同じ10桁） */
    asin: z.string().regex(/^\d{9}[\dX]$/, 'paper ASIN は ISBN-10 形式。Kindle の B で始まる ASIN は不可'),
    /** Amazon アソシエイトのリンク（紙版の商品ページ）。下書きでは未取得でよい */
    amazonUrl: z.string().optional(),
    /** 表紙画像の URL（Amazon CDN を直接参照）。未取得なら「表紙画像なし」を表示 */
    coverUrl: z.string().optional(),
    /** 出版社の作品ページ（任意） */
    officialUrl: z.string().optional(),
  })
  .superRefine((book, ctx) => {
    if (book.isbn13.slice(3, 12) !== book.asin.slice(0, 9)) {
      ctx.addIssue({ code: 'custom', message: 'ISBN-13 と ASIN（ISBN-10）が一致しません' });
    }
    if (book.coverUrl !== undefined && !book.coverUrl.startsWith('https://m.media-amazon.com/')) {
      ctx.addIssue({
        code: 'custom',
        path: ['coverUrl'],
        message: 'coverUrl は https://m.media-amazon.com/ の URL を直接指定してください',
      });
    }
    if (book.amazonUrl === undefined) return;

    let url: URL;
    try {
      url = new URL(book.amazonUrl);
    } catch {
      ctx.addIssue({ code: 'custom', path: ['amazonUrl'], message: 'amazonUrl が正しい URL ではありません' });
      return;
    }
    if (url.protocol !== 'https:' || url.hostname !== 'www.amazon.co.jp') {
      ctx.addIssue({ code: 'custom', path: ['amazonUrl'], message: 'amazonUrl は https://www.amazon.co.jp/ の URL である必要があります' });
    }
    const dpAsin = url.pathname.match(/\/dp\/([^/]+)/)?.[1];
    if (dpAsin !== book.asin) {
      ctx.addIssue({ code: 'custom', path: ['amazonUrl'], message: 'amazonUrl の商品番号（/dp/）が asin と一致しません' });
    }
    if (url.searchParams.get('tag') !== AMAZON_ASSOCIATE_TAG) {
      ctx.addIssue({
        code: 'custom',
        path: ['amazonUrl'],
        message: `amazonUrl の tag は ${AMAZON_ASSOCIATE_TAG} である必要があります`,
      });
    }
  });

/**
 * 作品ガイド（作品別の登場人物ガイド）。
 *
 * src/content/works/ に .md または .mdx を追加すると、
 * 自動的に /works/[slug]/ として作品ページになる。
 *
 * schema はあえて最小限。主要人物・人物関係・簡易相関図・CTA などは
 * 本文（Markdown / MDX）側で自由に記述する想定。
 */
const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: z.object({
    /** ページ H1 / 一覧カード / パンくずに使うタイトル */
    title: z.string(),
    /**
     * <title> タグ・OGP タイトルに使う文字列（SEO 用の長め表記）。
     * 省略時は `title` に " | CastMemo" を付けたものを使う。
     */
    seoTitle: z.string().optional(),
    /**
     * URL に使うスラッグ（/works/[slug]/）。
     * 省略時はファイル名がそのまま ID として使われる。
     */
    slug: z.string().optional(),
    /** meta description / OGP / 一覧カードの説明文 */
    description: z.string(),
    /** 作品カテゴリ */
    category: z.enum(['novel', 'drama', 'movie', 'manga', 'anime', 'other']),
    /** 公開・放送・出版年 */
    releaseYear: z.number().int().optional(),
    /**
     * ネタバレ方針。読者に「どこまで踏み込むか」を明示するための宣言。
     * - none: ネタバレなし（人物名と初登場時点の情報のみ）
     * - minimal: 序盤の展開に軽く触れる
     * - moderate: 中盤までの関係性の変化に触れる
     */
    spoilerPolicy: z.enum(['none', 'minimal', 'moderate']).default('none'),
    /** 公開日 */
    publishedAt: z.coerce.date(),
    /** 最終更新日（省略時は publishedAt を使う） */
    updatedAt: z.coerce.date().optional(),
    /** 下書き。true の場合、本番ビルド・sitemap に含めない */
    draft: z.boolean().default(false),
    /** トップページなどで優先表示する */
    featured: z.boolean().default(false),
    /**
     * 動作確認用のサンプル記事。true の場合、一覧・詳細に「サンプル」バッジと
     * 注意書きを表示する（本番記事と混同させないため）。
     */
    sample: z.boolean().default(false),
    /** OGP 画像を個別指定したい場合のパス（サイト内 or 絶対 URL） */
    ogImage: z.string().optional(),
    /**
     * true の場合、記事テンプレート末尾の定型 CastMemo CTA バナーを出さない。
     * 記事本文側で独自の CTA を配置したいときに使う。
     */
    hideDefaultCta: z.boolean().default(false),
    /**
     * 紙の本の商品情報（任意）。指定すると記事冒頭に表紙・基本情報・
     * Amazon 紙版ボタン・アソシエイト表記を表示し、Book の構造化データを出す。
     */
    book: paperBook.optional(),
  }).superRefine((data, ctx) => {
    // 公開記事の紙の本は、アソシエイトの商品リンクを必須にする（下書きは未取得でよい）
    if (data.book && !data.draft && data.book.amazonUrl === undefined) {
      ctx.addIssue({
        code: 'custom',
        path: ['book', 'amazonUrl'],
        message: '公開記事（draft: false）の紙の本には amazonUrl（Amazon アソシエイトリンク）が必須です。未取得なら draft: true のままにしてください',
      });
    }
  }),
});

export const collections = { works };
