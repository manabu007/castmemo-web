import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 『3月のライオン』（羽海野チカ・白泉社）人物関係の相関図データ。
 *
 * 扱う範囲: 第1巻の紹介で示される主人公と、川本家の3姉妹だけ。
 *   - 白泉社の作品ページ（1巻の紹介）と、公式サイトの登場人物欄に掲載された人物。
 *   - 家族の過去、父親や幸田家をめぐる事情、後半の人物関係の変化には触れない。
 * すべて type: 'neutral'（同色・中立）。線の色や配置に善悪の意味はない。
 */

export const marchLionNodes: ChartNode[] = [
  { id: 'rei', name: '零', initial: '零', x: 16, y: 42 },
  { id: 'akari', name: 'あかり', initial: 'あ', x: 50, y: 40 },
  { id: 'hinata', name: 'ひなた', initial: 'ひ', x: 82, y: 18 },
  { id: 'momo', name: 'モモ', initial: 'モ', x: 82, y: 72 },
];

export const marchLionRelationships: ChartRelationship[] = [
  {
    from: 'rei',
    to: 'akari',
    label: '交流',
    type: 'neutral',
    labelPos: 0.5,
    note: '零 − あかり（泥酔していた零を介抱して以来、交流が続く）',
  },
  {
    from: 'akari',
    to: 'hinata',
    label: '姉妹',
    type: 'neutral',
    labelPos: 0.5,
    note: 'あかり − ひなた（川本家の姉妹）',
  },
  {
    from: 'akari',
    to: 'momo',
    label: '姉妹',
    type: 'neutral',
    labelPos: 0.5,
    note: 'あかり − モモ（川本家の姉妹）',
  },
  {
    from: 'hinata',
    to: 'momo',
    label: '姉妹',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ひなた − モモ（川本家の姉妹）',
  },
];
