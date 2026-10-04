import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 『約束のネバーランド』（原作：白井カイウ／作画：出水ぽすか・集英社）人物関係の相関図データ。
 *
 * 扱う範囲: 作品の冒頭で示される、孤児院で共に暮らす3人の顔ぶれだけ。
 *   - 出版社の作品紹介で名前と「孤児院で共に暮らす」設定が公開されている3名。
 *   - 施設の真相・人物の秘密・血縁や身分・後の陣営・死亡には一切触れない。
 *     （作品紹介文に含まれる示唆的な表現も、記事では使わない）
 * すべて type: 'neutral'（同色・中立）。線の色や配置に善悪の意味はない。
 */

export const promisedNeverlandNodes: ChartNode[] = [
  { id: 'emma', name: 'エマ', initial: 'エ', x: 22, y: 34 },
  { id: 'norman', name: 'ノーマン', initial: 'ノ', x: 78, y: 34 },
  { id: 'ray', name: 'レイ', initial: 'レ', x: 50, y: 82 },
];

export const promisedNeverlandRelationships: ChartRelationship[] = [
  {
    from: 'emma',
    to: 'norman',
    label: '共に暮らす',
    type: 'neutral',
    labelPos: 0.5,
    note: 'エマ − ノーマン（同じ孤児院で共に暮らす）',
  },
  {
    from: 'emma',
    to: 'ray',
    label: '共に暮らす',
    type: 'neutral',
    labelPos: 0.5,
    note: 'エマ − レイ（同じ孤児院で共に暮らす）',
  },
  {
    from: 'norman',
    to: 'ray',
    label: '共に暮らす',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ノーマン − レイ（同じ孤児院で共に暮らす）',
  },
];
