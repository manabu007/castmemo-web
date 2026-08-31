import { getCollection, type CollectionEntry } from 'astro:content';

export type WorkEntry = CollectionEntry<'works'>;

/** 作品エントリの URL スラッグ（frontmatter の slug 優先、なければ ID） */
export function workSlug(entry: WorkEntry): string {
  return entry.data.slug ?? entry.id;
}

/** 作品ページの絶対パス（末尾スラッシュあり） */
export function workPath(entry: WorkEntry): string {
  return `/works/${workSlug(entry)}/`;
}

/**
 * 公開対象の作品一覧を返す。
 * - draft は本番ビルドでは除外（開発サーバーでは表示してプレビュー可）
 * - featured → publishedAt の新しい順に並べる
 */
export async function getPublishedWorks(): Promise<WorkEntry[]> {
  const isDev = import.meta.env.DEV;
  const entries = await getCollection('works', ({ data }) => isDev || !data.draft);

  return entries.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return b.data.publishedAt.getTime() - a.data.publishedAt.getTime();
  });
}

/** トップページ用の注目作品（featured 優先、最大 limit 件） */
export async function getFeaturedWorks(limit = 6): Promise<WorkEntry[]> {
  const works = await getPublishedWorks();
  return works.slice(0, limit);
}
