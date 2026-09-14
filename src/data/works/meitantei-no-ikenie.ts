import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 小説『名探偵のいけにえ―人民教会殺人事件―』（白井智之、新潮社）人物ガイド用の相関図データ。
 *
 * 出典（公式のあらすじ・作品紹介の範囲のみ。本文の展開・真相には一切触れない）:
 *   - 新潮社 公式作品ページ『名探偵のいけにえ―人民教会殺人事件―』
 *     https://www.shinchosha.co.jp/book/353522/
 *   - 新潮社 プレスリリース（文庫版発売・2026年7月29日発売）
 *     https://prtimes.jp/main/html/rd/p/000003142.000047877.html
 *   人物の表記・読みは、上記に加えて国内の書評・読書メディアの記載を補助的に確認している。
 *
 * ネタバレ配慮:
 *   - 扱うのは「公式あらすじで公開されている、名前・立場・導入部の関係」だけ。
 *   - 事件の真相・犯人・トリック・「奇蹟」の正体・各人物の生死・終盤の展開・結末には
 *     一切触れない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に善悪・犯人性の意味はない。
 *   - 矢印は「助手 → 雇い主」「調べている人 → 調べられている対象」という
 *     導入部で明確な向きだけに限定する。
 */

/* 相関図：物語冒頭（人民教会へ向かう時点）で公開されている人物関係 */
export const meitanteiNoIkenieNodes: ChartNode[] = [
  { id: 'otoya', name: '大塒', initial: '大', x: 50, y: 15 },
  { id: 'ririko', name: 'りり子', initial: 'り', x: 20, y: 50 },
  { id: 'hiru', name: '乃木野', initial: '乃', x: 80, y: 50 },
  { id: 'jim', name: 'ジム', initial: 'ジ', x: 46, y: 85 },
];

export const meitanteiNoIkenieRelationships: ChartRelationship[] = [
  {
    from: 'ririko',
    to: 'otoya',
    label: '助手',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: '有森りり子 → 大塒宗（りり子は私立探偵・大塒の助手）',
  },
  {
    from: 'otoya',
    to: 'hiru',
    label: '知人',
    type: 'neutral',
    labelPos: 0.5,
    note: '大塒宗 − 乃木野蒜（知人どうし。大塒と行動をともにするルポライター）',
  },
  {
    from: 'ririko',
    to: 'jim',
    label: '調査',
    type: 'neutral',
    directed: true,
    labelPos: 0.55,
    note: '有森りり子 → ジム・ジョーデン（りり子は、ジムが率いる人民教会を調べるため渡航した）',
  },
];
