import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * HBOドラマ『メディア王 ～華麗なる一族～』（原題: Succession）シーズン1
 * 人物ガイド用の相関図データ。
 *
 * 出典（2018年のシーズン1公式情報のみ。Season 2/3/4 の情報は使わない）:
 *   - HBO 公式 YouTube「Succession: Season 1 | Official Trailer | HBO」
 *     （シーズン1・動画 ID: OzYxJV_rmE8、2018年4月26日公開）
 *   - HBO 公式ショップ「Succession: The Complete First Season」ページ
 *     https://shop.hbo.com/products/succession
 *   - U-NEXT 公式『メディア王～華麗なる一族～ シーズン1』作品ページ
 *     https://video.unext.jp/title/SID0057596
 *   人物の日本語表記は、上記に加えて Wikipedia 日本語版・映画.com 等の国内資料で補助確認している。
 *   クリエイター: ジェシー・アームストロング。
 *
 * ネタバレ配慮:
 *   - 各人物の「シーズン1序盤で分かる立場」と「ロイ家の家族関係」だけを扱う。
 *   - 後継者が誰になるか／ローガンの健康状態のその後／ローガンの生死／
 *     ケンダルの展開／会社の買収・売却・株主・取締役会／各シーズンの結果／
 *     GoJo・マットソン／最終話・シリーズの結末には一切触れない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に「後継候補」「ライバル」
 *     「対立」「敵味方」の意味は持たせない。
 *   - 矢印は「親 → 子」の向きだけに限定する。夫婦・交際には矢印を付けない。
 *   - 家系図として読みやすいことを優先し、グレッグはノードに含めない。
 */

/* 相関図：シーズン1序盤で分かるロイ家の家族関係。ローガンを頂点に4人の子どもを並べる。 */
export const successionNodes: ChartNode[] = [
  { id: 'logan', name: 'ローガン', initial: 'ロ', x: 44, y: 14 },
  { id: 'marcia', name: 'マーシャ', initial: 'マ', x: 77, y: 14 },
  { id: 'connor', name: 'コナー', initial: 'コ', x: 12, y: 52 },
  { id: 'kendall', name: 'ケンダル', initial: 'ケ', x: 37, y: 52 },
  { id: 'roman', name: 'ローマン', initial: 'ロ', x: 62, y: 52 },
  { id: 'shiv', name: 'シヴ', initial: 'シ', x: 87, y: 52 },
  { id: 'tom', name: 'トム', initial: 'ト', x: 87, y: 86 },
];

export const successionRelationships: ChartRelationship[] = [
  {
    from: 'logan',
    to: 'marcia',
    label: '夫婦',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ローガン・ロイ − マーシャ・ロイ（夫婦）',
  },
  {
    from: 'logan',
    to: 'connor',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.64,
    note: 'ローガン → コナー（コナーはローガンの息子）',
  },
  {
    from: 'logan',
    to: 'kendall',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.56,
    note: 'ローガン → ケンダル（ケンダルはローガンの息子）',
  },
  {
    from: 'logan',
    to: 'roman',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.56,
    note: 'ローガン → ローマン（ローマンはローガンの息子）',
  },
  {
    from: 'logan',
    to: 'shiv',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.64,
    note: 'ローガン → シヴ（シヴはローガンの娘）',
  },
  {
    from: 'shiv',
    to: 'tom',
    label: '交際',
    type: 'neutral',
    labelPos: 0.5,
    note: 'シヴとトム・ワムズガンズは交際している',
  },
];
