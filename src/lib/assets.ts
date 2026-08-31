import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, isAbsolute } from 'node:path';

/**
 * public/ 配下のファイルがビルド時に存在するかを確認するヘルパー。
 *
 * 画像（アプリアイコン・スクリーンショット・OGP など）を「あれば表示、
 * なければプレースホルダー」で扱うために使う。存在しないファイルへの
 * <img src> を出力しないことで、壊れた画像・無駄なリクエストを防ぐ。
 *
 * SSG（astro dev / astro build）実行時に評価される。
 * astro は常にプロジェクトルートで実行されるため process.cwd() を基準にする
 * （バンドル後は import.meta.url が当てにならないため）。
 */
const candidateRoots = [
  process.cwd(),
  fileURLToPath(new URL('../../', import.meta.url)),
];

export function publicAsset(path: string): string | null {
  const clean = path.replace(/^\/+/, '');
  for (const root of candidateRoots) {
    if (!root || isAbsolute(root) === false) continue;
    if (existsSync(join(root, 'public', clean))) return `/${clean}`;
  }
  return null;
}
