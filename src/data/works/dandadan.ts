import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 『ダンダダン』（龍幸伸・集英社）人物関係の相関図データ。
 *
 * 扱う範囲: 第1巻の紹介で示される、主人公2人と身近な人物だけ。
 *   - 集英社の作品紹介（1巻）と、公式アニメサイトの登場人物欄に掲載された人物。
 *   - 超常的な出来事の詳細・人物の能力や過去・後半の関係の変化には触れない。
 * すべて type: 'neutral'（同色・中立）。線の色や配置に善悪の意味はない。
 */

export const dandadanNodes: ChartNode[] = [
  { id: 'momo', name: 'モモ', initial: 'モ', x: 24, y: 40 },
  { id: 'okarun', name: 'オカルン', initial: 'オ', x: 76, y: 40 },
  { id: 'seiko', name: '星子', initial: '星', x: 50, y: 82 },
];

export const dandadanRelationships: ChartRelationship[] = [
  {
    from: 'momo',
    to: 'okarun',
    label: '同級生',
    type: 'neutral',
    labelPos: 0.5,
    note: '綾瀬桃 − 高倉健（オカルン）（同級生）',
  },
  {
    from: 'momo',
    to: 'seiko',
    label: '祖母',
    type: 'neutral',
    labelPos: 0.5,
    note: '綾瀬桃 − 綾瀬星子（モモの祖母）',
  },
];
