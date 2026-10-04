import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 『ハイキュー!!』（古舘春一・集英社）人物関係の相関図データ。
 *
 * 扱う範囲: 第1巻の冒頭で示される、烏野高校バレー部の主な顔ぶれだけ。
 *   - 公式の人物紹介（ハイキュー!!.com キャラ紹介）と、集英社の作品紹介に掲載された人物。
 *   - 試合の結果・後半の関係の変化・ポジション争いの行方には触れない。
 * すべて type: 'neutral'（同色・中立）。線の色や配置に善悪の意味はない。
 */

export const haikyuNodes: ChartNode[] = [
  { id: 'hinata', name: '日向', initial: '日', x: 50, y: 26 },
  { id: 'kageyama', name: '影山', initial: '影', x: 82, y: 42 },
  { id: 'sawamura', name: '澤村', initial: '澤', x: 18, y: 42 },
  { id: 'tanaka', name: '田中', initial: '田', x: 22, y: 82 },
  { id: 'tsukishima', name: '月島', initial: '月', x: 78, y: 82 },
];

export const haikyuRelationships: ChartRelationship[] = [
  {
    from: 'hinata',
    to: 'kageyama',
    label: 'コンビ',
    type: 'neutral',
    labelPos: 0.5,
    note: '日向翔陽 − 影山飛雄（コートを駆けるコンビ）',
  },
  {
    from: 'hinata',
    to: 'sawamura',
    label: 'チームメイト',
    type: 'neutral',
    labelPos: 0.5,
    note: '日向翔陽 − 澤村大地（烏野高校バレー部）',
  },
  {
    from: 'kageyama',
    to: 'tsukishima',
    label: 'チームメイト',
    type: 'neutral',
    labelPos: 0.5,
    note: '影山飛雄 − 月島蛍（烏野高校バレー部）',
  },
  {
    from: 'sawamura',
    to: 'tanaka',
    label: 'チームメイト',
    type: 'neutral',
    labelPos: 0.5,
    note: '澤村大地 − 田中龍之介（烏野高校バレー部）',
  },
];
