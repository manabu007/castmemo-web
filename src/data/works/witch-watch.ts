import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 『ウィッチウォッチ』（篠原健太・集英社）人物関係の相関図データ。
 *
 * 扱う範囲: 第1巻の紹介で示される主人公2人と、序盤に関わる人物。
 *   - 集英社の作品紹介（1巻）と、公式アニメサイトの登場人物欄に掲載された人物。
 *   - 人物の正体・秘密・後半の関係の変化には触れない。
 * すべて type: 'neutral'（同色・中立）。線の色や配置に善悪の意味はない。
 */

export const witchWatchNodes: ChartNode[] = [
  { id: 'morihito', name: '守仁', initial: '守', x: 50, y: 46 },
  { id: 'nico', name: 'ニコ', initial: 'ニ', x: 18, y: 46 },
  { id: 'kanshi', name: '監志', initial: '監', x: 82, y: 22 },
  { id: 'keigo', name: '圭護', initial: '圭', x: 82, y: 78 },
];

export const witchWatchRelationships: ChartRelationship[] = [
  {
    from: 'nico',
    to: 'morihito',
    label: '幼馴染',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ニコ − 守仁（幼馴染。守仁はニコの使い魔）',
  },
  {
    from: 'morihito',
    to: 'kanshi',
    label: '対立',
    type: 'neutral',
    labelPos: 0.5,
    note: '守仁 − 監志（種族間の問題で、監志が守仁を敵対視）',
  },
  {
    from: 'morihito',
    to: 'keigo',
    label: '同居',
    type: 'neutral',
    labelPos: 0.5,
    note: '守仁 − 圭護（乙木家に使い魔として入居）',
  },
];
