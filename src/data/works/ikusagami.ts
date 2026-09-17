import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * Netflixシリーズ『イクサガミ』シーズン1 人物ガイド用の相関図データ。
 *
 * 出典（配信前〜配信直後にNetflixが公式発表した情報のみ。Season 2の内容は使わない）:
 *   - About Netflix（2025年2月3日）「イクサガミ」第一弾キャスト発表
 *     https://about.netflix.com/ja/news/last-samurai-standing-unveils-14-new-cast-members-ahead-of-november-debut
 *   - About Netflix（2024年4月18日）制作決定発表
 *     https://about.netflix.com/ja/news/last-samurai-standing-title-announcement
 *
 * ネタバレ配慮:
 *   - 扱うのは「Netflix公式が配信前に発表した、名前・役者・基本設定で分かる人物関係」だけ。
 *   - 蠱毒（木札の奪い合い）の結果・誰が勝敗を決めるか・誰と誰が戦うか・
 *     各人物の生死・離脱・正体・隠された血縁・過去の秘密・終盤の展開・結末には
 *     一切触れない。Season 2の内容も使わない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に敵味方・勝敗の意味はない。
 *   - directed（矢印）は使わない。家族・因縁のいずれも対等な関係として並べる。
 *   - 愁二郎を中心に、公式発表で明確な4つの関係だけを線で結ぶ。無理に全員をつながない。
 */

/** x,y はキャンバスに対する % 位置。愁二郎を中心に、4方向へ斜めに配置し、
 *  各人物の名前表示と線・ラベルが重ならないようにする。 */
export const ikusagamiNodes: ChartNode[] = [
  { id: 'shujiro', name: '愁二郎', initial: '愁', x: 45, y: 48 },
  { id: 'shino', name: '志乃', initial: '志', x: 20, y: 16 },
  { id: 'ayaha', name: '彩八', initial: '彩', x: 74, y: 15 },
  { id: 'shizo', name: '四蔵', initial: '四', x: 15, y: 82 },
  { id: 'mukotsu', name: '無骨', initial: '無', x: 79, y: 83 },
];

export const ikusagamiRelationships: ChartRelationship[] = [
  {
    from: 'shujiro',
    to: 'shino',
    label: '夫婦',
    type: 'neutral',
    labelPos: 0.5,
    note: '嵯峨愁二郎 − 嵯峨志乃（夫婦）',
  },
  {
    from: 'shujiro',
    to: 'ayaha',
    label: '義兄妹',
    type: 'neutral',
    labelPos: 0.5,
    note: '嵯峨愁二郎 − 衣笠彩八（義理の兄妹）',
  },
  {
    from: 'shujiro',
    to: 'shizo',
    label: '義兄弟',
    type: 'neutral',
    labelPos: 0.5,
    note: '嵯峨愁二郎 − 化野四蔵（義理の兄弟）',
  },
  {
    from: 'shujiro',
    to: 'mukotsu',
    label: '因縁',
    type: 'neutral',
    labelPos: 0.5,
    note: '嵯峨愁二郎 − 貫地谷無骨（因縁のある間柄）',
  },
];
