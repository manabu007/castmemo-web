/**
 * CastMemo 風・人物相関図（RelationshipChart.astro）用の型とスタイル定義。
 *
 * 作品ごとに src/data/works/<slug>.ts などで nodes / relationships を用意し、
 * <RelationshipChart nodes={...} relationships={...} /> に渡す。
 */

/** 関係の種別。色・線種・凡例ラベルは RELATION_STYLES 参照。 */
export type RelationType = 'family' | 'friend' | 'rival' | 'other';

export interface ChartNode {
  /** 一意なID（relationships から参照する） */
  id: string;
  /** 円の下に表示する名前（短め推奨。フルネームは本文側で補う） */
  name: string;
  /** 円の中に大きく表示する1文字 */
  initial: string;
  /** キャンバス幅に対する水平位置(0–100)。機械的なグリッドにしない。 */
  x: number;
  /** キャンバス高さに対する垂直位置(0–100)。 */
  y: number;
  /** 円の色味の微調整グループ（NODE_GROUP_COLORS のキー） */
  group?: keyof typeof NODE_GROUP_COLORS;
}

export interface ChartRelationship {
  /** 起点ノードID */
  from: string;
  /** 終点ノードID */
  to: string;
  /** 線の途中に出すラベル（例: 夫婦 / 父 / 母 / 友人 / 敵対） */
  label: string;
  /** 関係種別（色・線種） */
  type: RelationType;
  /** true なら from → to の矢印を付ける（親子・仕える等） */
  directed?: boolean;
  /** テキスト版の関係リストで使う説明（省略時は label から生成） */
  note?: string;
  /** 線を膨らませて他の線との重なりを避けたいとき(-1〜1) */
  curve?: number;
  /** ラベルを線上のどこに置くか(0=起点, 0.5=中点, 1=終点)。既定 0.5 */
  labelPos?: number;
  /** ラベルを線に対して垂直方向へ手動でずらす量(viewBox単位, +/-)。既定は自動 */
  labelOffset?: number;
}

export interface RelationshipChartData {
  nodes: ChartNode[];
  relationships: ChartRelationship[];
}

/**
 * 関係種別ごとの見た目（濃いネイビー背景の上での色）。
 * - stroke … 関係線の色（family=green / friend=blue / rival=red / other=light gray）
 * - text   … ラベル文字の色（種別と同系。ほぼ黒の半透明タグの上で読める明度）
 * - dash   … 線種。色だけに依存しないよう rival は破線。加えてラベル文字も必ず表示。
 */
export const RELATION_STYLES: Record<
  RelationType,
  { color: string; text: string; dash: string; width: number; legend: string }
> = {
  family: { color: '#49d67f', text: '#8ff0b4', dash: '', width: 3.1, legend: '家族・親子' },
  friend: { color: '#5aa0ff', text: '#9cc6ff', dash: '', width: 3.1, legend: '友人・仲間' },
  rival: { color: '#f2706e', text: '#ffa6a4', dash: '10 7', width: 3.3, legend: '敵対' },
  other: { color: '#aeb4c8', text: '#ced3e2', dash: '', width: 2.7, legend: '夫婦・仕事・その他' },
};

/**
 * 円の背景色（関係線より目立つ、人物写真の代替ノードとしての色）。
 * 紫〜ブルー系で微妙な差をつける（CastMemo ブランドの範囲内）。
 * RelationshipChart 側で中心を少し明るくした放射グラデにして立体感を出す。
 */
export const NODE_GROUP_COLORS = {
  harrigan: '#5f4fd0',
  dasouza: '#3f6bda',
  stevenson: '#7047b6',
  fixer: '#4360dc',
  default: '#5b52c8',
} as const;
