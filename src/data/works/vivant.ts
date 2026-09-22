import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * TBS系日曜劇場『VIVANT』人物ガイド用の相関図データ。
 *
 * 出典（TBS公式情報を最優先とする。正体・裏切り・死亡・結末・
 * 第2シーズンの重大な展開には一切触れない）:
 *   - TBS系日曜劇場『VIVANT』公式サイト
 *     https://www.tbs.co.jp/VIVANT_tbs/
 *   - TBS系日曜劇場『VIVANT』公式サイト 登場人物ページ
 *     https://www.tbs.co.jp/VIVANT_tbs/chara/
 *   - 日曜劇場『VIVANT』公式 X（続編キャスト発表・クランクアップ投稿等）
 *     https://x.com/TBS_VIVANT
 *   公式サイト・公式Xで確認できない補助情報に限り、NiEW（2025年10月）
 *   「VIVANT続編のキャスト26名が発表」（https://niewmedia.com/news/2510vivant/）等の
 *   国内の映画・ドラマ情報媒体の配信・放送時報道を補助的に確認している。
 *
 * ネタバレ配慮:
 *   - 扱うのは「公式に発表されている、名前・俳優・基本的な所属・関係」だけ。
 *   - 各人物の正体・裏切り・死亡・終盤の展開・最終話の結末・第2シーズンの重大な展開には
 *     一切触れない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に敵味方・善悪の意味はない。
 *   - directed（矢印）は使わない。
 *   - 乃木を中心に、公式情報で安全に言い切れる2つの関係だけを線で結ぶ。
 *     野崎・ノコルとの関係は、ネタバレなしで一言のラベルに単純化できないため、
 *     無理に線でつながず、ノードとしても含めない（PersonCard・組織整理の文章側で
 *     名前・俳優の範囲だけ個別に説明する）。
 *   - 【重要】乃木とノコルの関係（血縁・兄弟等）は第1シーズンの重要なネタバレのため、
 *     ノード・relationships・note のいずれにも一切含めない。ノコルをこの相関図データに
 *     追加する場合も、乃木との関係を示す線は絶対に作らないこと。
 */

/** x,y はキャンバスに対する % 位置。乃木を中心に、2方向へ配置する。 */
export const vivantNodes: ChartNode[] = [
  { id: 'nogi', name: '乃木', initial: '乃', x: 35, y: 45 },
  { id: 'yuzuki', name: '柚木', initial: '柚', x: 75, y: 20 },
  { id: 'kurosu', name: '黒須', initial: '黒', x: 65, y: 80 },
];

export const vivantRelationships: ChartRelationship[] = [
  {
    from: 'nogi',
    to: 'yuzuki',
    label: '出会う',
    type: 'neutral',
    labelPos: 0.5,
    note: '乃木憂助 − 柚木薫（バルカで出会う）',
  },
  {
    from: 'nogi',
    to: 'kurosu',
    label: '相棒',
    type: 'neutral',
    labelPos: 0.5,
    note: '乃木憂助 − 黒須駿（別班における乃木の相棒的存在）',
  },
];
