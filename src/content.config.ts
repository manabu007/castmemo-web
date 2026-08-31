import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

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
  }),
});

export const collections = { works };
