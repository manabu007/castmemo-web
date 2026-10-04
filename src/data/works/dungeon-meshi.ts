import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 『ダンジョン飯』（九井諒子・KADOKAWA）人物関係の相関図データ。
 *
 * 扱う範囲: 第1話の時点で示される、探索パーティーの顔ぶれだけ。
 *   - 公式作品サイト（delicious-in-dungeon.com）の登場人物欄に掲載されている4名。
 *   - 人物の過去・能力の詳細・後半の展開・関係の変化には触れない。
 * すべて type: 'neutral'（同色・中立）。線の色や配置に善悪の意味はない。
 */

export const dungeonMeshiNodes: ChartNode[] = [
  { id: 'laios', name: 'ライオス', initial: 'ラ', x: 50, y: 28 },
  { id: 'marcille', name: 'マルシル', initial: 'マ', x: 18, y: 74 },
  { id: 'chilchuck', name: 'チルチャック', initial: 'チ', x: 50, y: 84 },
  { id: 'senshi', name: 'センシ', initial: 'セ', x: 82, y: 74 },
];

export const dungeonMeshiRelationships: ChartRelationship[] = [
  {
    from: 'laios',
    to: 'marcille',
    label: '仲間',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ライオス − マルシル（同じパーティーの仲間）',
  },
  {
    from: 'laios',
    to: 'chilchuck',
    label: '仲間',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ライオス − チルチャック（同じパーティーの仲間）',
  },
  {
    from: 'laios',
    to: 'senshi',
    label: '仲間',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ライオス − センシ（同じパーティーの仲間）',
  },
];
