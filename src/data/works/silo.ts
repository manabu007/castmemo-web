import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * Apple TV『SILO／サイロ』シーズン1 序盤ガイド用の人物関係データ。
 *
 * 出典（2023年のシーズン1公式情報のみ。Season 2/3 の情報は使わない）:
 *   - Apple TV Press（2023年3月6日）「Silo」ファーストルック／全世界配信日発表
 *     https://www.apple.com/tv-pr/news/2023/03/apple-tv-unearths-first-look-at-gripping-new-series-silo-and-sets-global-premiere-for-friday-may-5-2023/
 *   - Apple TV Press（2023年4月6日）「Silo」シーズン1公式予告編
 *     https://www.apple.com/tv-pr/news/2023/04/apple-tv-brings-hugh-howeys-bestselling-trilogy-to-life-in-new-trailer-for-silo-premiering-globally-friday-may-5/
 *   - Apple TV 公式 YouTube「Silo — Official Trailer」（シーズン1・動画 ID: 8ZYhuvIv1pA）
 *   キャスト名の表記は Apple TV 作品ページ・国内の映画／ドラマ情報媒体で補助確認している。
 *   原作: ヒュー・ハウイーの小説シリーズ。
 *
 * ネタバレ配慮:
 *   - 登場人物の名前・所属・シーズン1序盤で分かる関係だけを扱う。
 *   - 生死・退場・外の世界の真相・各部門の内情・ジョージに関わる出来事・
 *     シーズン1終盤・最終話・続くシーズンの情報には一切触れない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に敵味方・善悪・
 *     将来の関係を推測させる意味を持たせない。
 *   - directed（矢印）は使わない。描くのは「序盤で分かるつながり」だけ。
 *   - 全員を1つのネットワークにつなぐための線は足さない。序盤で押さえたい
 *     3つの関係グループ（夫婦／ジュリエット周辺／別部署どうしのバーナードとシムズ）を並べて配置する。
 */

/** x,y はキャンバス(縦長)に対する % 位置。3つの関係グループを上下に並べる。 */
export const siloNodes: ChartNode[] = [
  { id: 'holston', name: 'ホルストン', initial: 'ホ', x: 28, y: 11 },
  { id: 'allison', name: 'アリソン', initial: 'ア', x: 64, y: 11 },
  { id: 'juliette', name: 'ジュリエット', initial: 'ジュ', x: 32, y: 37 },
  { id: 'george', name: 'ジョージ', initial: 'ジョ', x: 74, y: 36 },
  { id: 'walker', name: 'ウォーカー', initial: 'ウ', x: 32, y: 64 },
  { id: 'bernard', name: 'バーナード', initial: 'バ', x: 28, y: 90 },
  { id: 'sims', name: 'シムズ', initial: 'シ', x: 76, y: 90 },
];

export const siloRelationships: ChartRelationship[] = [
  {
    from: 'holston',
    to: 'allison',
    label: '夫婦',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ホルストン・ベッカー − アリソン・ベッカー（夫婦）',
  },
  {
    from: 'juliette',
    to: 'george',
    label: '親しい間柄',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ジュリエット・ニコルズ − ジョージ・ウィルキンス（親しい間柄）',
  },
  {
    from: 'juliette',
    to: 'walker',
    label: '機械部',
    type: 'neutral',
    labelPos: 0.68,
    note: 'ジュリエット・ニコルズ − マーサ・ウォーカー（機械部を通じて関わる）',
  },
  {
    from: 'bernard',
    to: 'sims',
    label: '別部署',
    type: 'neutral',
    labelPos: 0.5,
    note: 'バーナードはIT部門、シムズは司法部門に関わる人物（それぞれ別の部署）',
  },
];
