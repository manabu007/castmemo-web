import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * TBS 金曜ドラマ『Tシャツが乾くまで』（2026年7月期）人物ガイド用の相関図データ。
 *
 * 出典（一次情報・公式に準じる情報。記事本文には URL をベタ書きしない）:
 *   - TBS 金曜ドラマ『Tシャツが乾くまで』公式サイト
 *     https://www.tbs.co.jp/tshirt_ga_kawakumade_tbs/
 *     （公式サイトは今回の作業環境から直接取得できなかったため、
 *      下記の百科事典・大手エンタメ媒体の記載と突き合わせて確認している）
 *   - Wikipedia 日本語版「Tシャツが乾くまで」（キャスト・スタッフ・放送日程）
 *     https://ja.wikipedia.org/wiki/Tシャツが乾くまで
 *   - ORICON NEWS / WEBザテレビジョン / 日刊SPA! / リアルサウンド等の作品・キャスト情報
 *
 * ネタバレ配慮:
 *   - 各人物の「初登場時点の立場」と「公式に公開されている関係」だけを扱う。
 *   - 「第3金曜日の秘密」の中身、2組の夫婦のあいだに隠された関係、事故のその後、
 *     終盤で判明する展開・結末には一切触れない。
 *   - サプライズ出演・"謎の男"など、正体が伏せられている人物はノードに含めない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に善悪・結末の意味はない。
 *   - 矢印は「親 → 子」「勤め先へ」「上司 → 部下」という向きだけに限定する。
 *   - ノード名は短縮表記。フルネームは note（テキスト版の関係リスト）に書く。
 */

/* 相関図：初登場時点で公開されている2組の夫婦と、その周辺 */
export const tshirtNodes: ChartNode[] = [
  { id: 'araki', name: '荒木', initial: '荒', x: 9, y: 12 },
  { id: 'chizuru', name: '千鶴', initial: '千', x: 40, y: 12 },
  { id: 'sakiko', name: '咲子', initial: '咲', x: 27, y: 33 },
  { id: 'mitsuru', name: '充', initial: '充', x: 24, y: 56 },
  { id: 'naoto', name: '直人', initial: '直', x: 14, y: 80 },
  { id: 'itsuki', name: '樹生', initial: '樹', x: 60, y: 13 },
  { id: 'miki', name: '実樹', initial: '実', x: 82, y: 14 },
  { id: 'azusa', name: 'あずさ', initial: 'あ', x: 66, y: 37 },
  { id: 'koji', name: '宮内', initial: '宮', x: 82, y: 62 },
  { id: 'sho', name: '翔', initial: '翔', x: 53, y: 64 },
];

export const tshirtRelationships: ChartRelationship[] = [
  {
    from: 'araki',
    to: 'chizuru',
    label: '恋人',
    type: 'neutral',
    labelPos: 0.5,
    note: '荒木拓真 − 大井田千鶴（交際している恋人どうし）',
  },
  {
    from: 'chizuru',
    to: 'sakiko',
    label: '上司',
    type: 'neutral',
    directed: true,
    labelPos: 0.66,
    note: '大井田千鶴 → 瀬尾咲子（千鶴は結婚情報誌の編集長で、咲子の上司）',
  },
  {
    from: 'sakiko',
    to: 'mitsuru',
    label: '夫婦',
    type: 'neutral',
    labelPos: 0.5,
    note: '瀬尾咲子 − 瀬尾充（夫婦）',
  },
  {
    from: 'naoto',
    to: 'mitsuru',
    label: '勤め先',
    type: 'neutral',
    directed: true,
    labelPos: 0.44,
    note: '矢野直人 → 瀬尾充（直人は、充がオーナーを務める喫茶店「ひこうき」の従業員）',
  },
  {
    from: 'itsuki',
    to: 'azusa',
    label: '夫婦',
    type: 'neutral',
    labelPos: 0.6,
    note: '園田樹生 − 園田あずさ（夫婦）',
  },
  {
    from: 'itsuki',
    to: 'miki',
    label: '兄妹',
    type: 'neutral',
    labelPos: 0.5,
    note: '園田樹生 − 園田実樹（実樹は樹生の妹。名古屋で会社を立ち上げている）',
  },
  {
    from: 'itsuki',
    to: 'sho',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: '園田樹生 → 園田翔（翔は樹生とあずさの息子）',
  },
  {
    from: 'azusa',
    to: 'sho',
    label: '母',
    type: 'neutral',
    directed: true,
    labelPos: 0.52,
    note: '園田あずさ → 園田翔（翔は樹生とあずさの息子）',
  },
  {
    from: 'azusa',
    to: 'koji',
    label: '勤め先',
    type: 'neutral',
    directed: true,
    labelPos: 0.6,
    note: '園田あずさ → 宮内幸次（あずさは、宮内が店主を務める古書店でパート勤務をしている）',
  },
];
