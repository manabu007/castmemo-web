import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 映画『グランド・ブダペスト・ホテル』（The Grand Budapest Hotel, 2014）
 * 人物ガイド用の相関図データ。
 *
 * 出典（一次情報。記事本文には URL をベタ書きしない）:
 *   - Searchlight Pictures 公式「The Grand Budapest Hotel」（Synopsis / Cast）
 *     https://www.searchlightpictures.com/thegrandbudapesthotel/
 *   - 20th Century Studios 日本公式『グランド・ブダペスト・ホテル』
 *     https://www.20thcenturystudios.jp/movies/grand-budapest-hotel
 *     （日本公式は今回の作業環境から取得できなかったため、下記の国内資料と突き合わせて確認）
 *   人物の日本語表記は、映画.com・Wikipedia 日本語版・映画スクエア等の国内資料で補助確認している。
 *
 * ネタバレ配慮:
 *   - 各人物の「初登場時点の立場」と「公式に公開されている関係」だけを扱う。
 *   - 殺人事件の真相／犯人／遺言の内容／絵画の行方／相続の結果／各人物のその後・生死／
 *     逃亡・逮捕の結果／終盤の展開・結末には一切触れない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に善悪・敵味方の意味はない。
 *   - 矢印は「親 → 子」の向きだけに限定する。
 */

/* 相関図：物語の入口で分かる人物関係 */
export const grandBudapestNodes: ChartNode[] = [
  { id: 'henckels', name: 'ヘンケルス', initial: 'ヘ', x: 19, y: 11 },
  { id: 'gustave', name: 'グスタヴ・H', initial: 'グ', x: 45, y: 22 },
  { id: 'madameD', name: 'マダムD', initial: 'D', x: 78, y: 18 },
  { id: 'zero', name: 'ゼロ', initial: 'ゼ', x: 36, y: 53 },
  { id: 'dmitri', name: 'ドミトリー', initial: 'ド', x: 84, y: 55 },
  { id: 'agatha', name: 'アガサ', initial: 'ア', x: 20, y: 77 },
];

export const grandBudapestRelationships: ChartRelationship[] = [
  {
    from: 'gustave',
    to: 'zero',
    label: '相棒',
    type: 'neutral',
    labelPos: 0.62,
    note: 'グスタヴ・H − ゼロ・ムスタファ（ホテルのコンシェルジュと新人ロビーボーイ。行動を共にする相棒）',
  },
  {
    from: 'zero',
    to: 'agatha',
    label: '恋人',
    type: 'neutral',
    labelPos: 0.68,
    note: 'ゼロ・ムスタファ − アガサ（交際している恋人どうし）',
  },
  {
    from: 'gustave',
    to: 'madameD',
    label: '常連客',
    type: 'neutral',
    labelPos: 0.5,
    note: 'グスタヴ・H − マダムD（マダムDはグランド・ブダペスト・ホテルの常連客で、グスタヴと親しい）',
  },
  {
    from: 'madameD',
    to: 'dmitri',
    label: '母',
    type: 'neutral',
    directed: true,
    labelPos: 0.6,
    note: 'マダムD → ドミトリー（ドミトリーはマダムDの息子）',
  },
  {
    from: 'henckels',
    to: 'gustave',
    label: '面識',
    type: 'neutral',
    labelPos: 0.58,
    note: 'ヘンケルスとグスタヴには以前から面識がある',
  },
];
