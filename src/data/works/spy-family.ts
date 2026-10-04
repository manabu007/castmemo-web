import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 『SPY×FAMILY』（遠藤達哉・集英社）人物関係の相関図データ。
 *
 * 扱う範囲: 第1巻の冒頭で示される「表向きの関係」だけ。
 *   - 3人はそれぞれ事情を抱えて、表向きは家族として暮らしている。
 *   - 各人物の正体・能力の詳細・任務の内容・後半の展開には触れない。
 * すべて type: 'neutral'（同色・中立）。線の色や配置に善悪の意味はない。
 */

export const spyFamilyNodes: ChartNode[] = [
  { id: 'loid', name: 'ロイド', initial: 'ロ', x: 22, y: 34 },
  { id: 'anya', name: 'アーニャ', initial: 'ア', x: 78, y: 34 },
  { id: 'yor', name: 'ヨル', initial: 'ヨ', x: 50, y: 80 },
];

export const spyFamilyRelationships: ChartRelationship[] = [
  {
    from: 'loid',
    to: 'anya',
    label: '表向き父娘',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ロイド − アーニャ（表向きは父と娘）',
  },
  {
    from: 'loid',
    to: 'yor',
    label: '表向き夫婦',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ロイド − ヨル（表向きは夫婦）',
  },
  {
    from: 'anya',
    to: 'yor',
    label: '表向き母娘',
    type: 'neutral',
    labelPos: 0.5,
    note: 'アーニャ − ヨル（表向きは母と娘）',
  },
];
