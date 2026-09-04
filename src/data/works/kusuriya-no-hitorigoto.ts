import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * TVアニメ『薬屋のひとりごと』第1期 序盤ガイド用の人物関係データ。
 *
 * 出典（アニメ第1期公式サイトで序盤から公開されている設定のみ。本文には URL をベタ書きしない）:
 *   - アニメ『薬屋のひとりごと』公式サイト（第1期）「CHARACTER」
 *     https://kusuriyanohitorigoto.jp/season1/#chara
 *   権利表記: ©日向夏・イマジカインフォス／「薬屋のひとりごと」製作委員会
 *
 * ネタバレ配慮:
 *   - 第1期終盤の展開・事件の真相・犯人・人物の秘密・生死・退場・恋愛の結末には触れない。
 *   - 壬氏／羅漢／阿多妃まわりの重大な関係・秘密には触れない。第2期以降で判明する情報も不可。
 *   - すべての関係は type: 'neutral'（同色・中立）。色・矢印に敵味方・善悪・将来の関係を示さない。
 *   - directed（矢印）は使わない。描くのは「序盤で分かるつながり」だけ。
 *   - 上級妃どうしは線を引かず、「同じ上級妃（四夫人）」という所属は本文で説明する。
 */

/** x,y はキャンバス(縦長)に対する % 位置。猫猫を中心に、上級妃を上部にまとめて配置する。 */
export const kusuriyaNodes: ChartNode[] = [
  { id: 'gyokuyou', name: '玉葉妃', initial: '玉', x: 22, y: 13 },
  { id: 'rifa', name: '梨花妃', initial: '梨', x: 44, y: 10 },
  { id: 'lishu', name: '里樹妃', initial: '里', x: 66, y: 12 },
  { id: 'ah-duo', name: '阿多妃', initial: '阿', x: 86, y: 21 },
  { id: 'maomao', name: '猫猫', initial: '猫', x: 37, y: 52 },
  { id: 'jinshi', name: '壬氏', initial: '壬', x: 73, y: 44 },
  { id: 'gaoshun', name: '高順', initial: '高', x: 89, y: 64 },
  { id: 'xiaolan', name: '小蘭', initial: '小', x: 24, y: 84 },
];

export const kusuriyaRelationships: ChartRelationship[] = [
  {
    from: 'maomao',
    to: 'gyokuyou',
    label: '翡翠宮で関わる',
    type: 'neutral',
    labelPos: 0.5,
    note: '猫猫 − 玉葉妃（玉葉妃の宮「翡翠宮」で関わるようになる）',
  },
  {
    from: 'maomao',
    to: 'jinshi',
    label: '仕事で関わる',
    type: 'neutral',
    labelPos: 0.42,
    note: '猫猫 − 壬氏（後宮の仕事を通じて関わる）',
  },
  {
    from: 'jinshi',
    to: 'gaoshun',
    label: '補佐',
    type: 'neutral',
    labelPos: 0.5,
    note: '壬氏 − 高順（高順が壬氏のそばで補佐する）',
  },
  {
    from: 'maomao',
    to: 'xiaolan',
    label: '親しい',
    type: 'neutral',
    labelPos: 0.5,
    note: '猫猫 − 小蘭（後宮の下女どうしで親しい）',
  },
];
