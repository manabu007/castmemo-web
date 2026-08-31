/*
 * ブランド素材（OGP画像・PNGファビコン・アプリアイコンのWeb最適化版）を生成する開発用スクリプト。
 *
 *   node scripts/generate-og.mjs      （= npm run generate:assets）
 *
 * - 外部サービス・外部素材は一切使わない。生成元は:
 *     - public/*.svg（OGP画像・ファビコン）
 *     - assets/source/app-icon.png（正式アプリアイコンの元画像。Web からは直接参照しない）
 * - sharp は Astro の依存として既に入っているものを利用する（新規追加なし）。
 * - 生成物はコミット対象。生成元を差し替えたら再実行する。
 */
import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = new URL('../', import.meta.url);
const p = (rel) => fileURLToPath(new URL(rel, root));
const exists = (rel) =>
  access(p(rel)).then(
    () => true,
    () => false,
  );

const log = (out, buf) => console.log(`generated ${out}  (${buf.length.toLocaleString()} bytes)`);

// 1) SVG 由来のブランド素材
const svgTargets = [
  { src: 'public/og-default.svg', out: 'public/og-default.png', width: 1200, height: 630 },
  { src: 'public/favicon.svg', out: 'public/favicon-32.png', width: 32, height: 32 },
];

for (const t of svgTargets) {
  const svg = await readFile(p(t.src));
  const png = await sharp(svg, { density: 384 })
    .resize(t.width, t.height, { fit: 'cover' })
    .png()
    .toBuffer();
  await writeFile(p(t.out), png);
  log(t.out, png);
}

// 2) 正式アプリアイコン（assets/source/app-icon.png）がある場合:
//    - Web 表示用の軽量版（256 / 512）を public/images/ に生成（元画像は Web から直接参照しない）
//    - apple-touch-icon も正式アイコンから生成
//    無い場合は icon-source.svg（自作）から apple-touch-icon を生成
const ICON_SOURCE = 'assets/source/app-icon.png';
const hasRealIcon = await exists(ICON_SOURCE);

if (hasRealIcon) {
  const src = await readFile(p(ICON_SOURCE));
  for (const size of [256, 512]) {
    const out = `public/images/app-icon-${size}.png`;
    const png = await sharp(src)
      .resize(size, size, { fit: 'cover' })
      .png({ compressionLevel: 9, palette: true })
      .toBuffer();
    await writeFile(p(out), png);
    log(out, png);
  }
  const apple = await sharp(src).resize(180, 180, { fit: 'cover' }).png().toBuffer();
  await writeFile(p('public/apple-touch-icon.png'), apple);
  log('public/apple-touch-icon.png', apple);
} else {
  const svg = await readFile(p('public/icon-source.svg'));
  const apple = await sharp(svg, { density: 384 }).resize(180, 180, { fit: 'cover' }).png().toBuffer();
  await writeFile(p('public/apple-touch-icon.png'), apple);
  log('public/apple-touch-icon.png (from public/icon-source.svg)', apple);
}
