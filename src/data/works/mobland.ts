import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 『モブランド（MobLand）』人物相関図データ。
 *
 * 出典（人物関係の確認元。記事本文には URL をベタ書きしない）:
 *   - Paramount+ "MobLand: Who Are The Harrigans?"
 *     https://www.paramountplus.com/sneak-peak/mobland-who-are-the-harrigans/
 *   - Paramount+ "Harrigans vs. Stevensons"
 *     https://www.paramountplus.com/sneak-peak/harrigans-vs-stevensons-mobland/
 *   - Paramount+ "MobLand Season 2 Cast"
 *     https://www.paramountplus.com/sneak-peak/mobland-season-2-cast/
 *   - Paramount+ "MobLand Season 2 Everything You Need To Know"
 *     https://www.paramountplus.com/sneak-peak/mobland-season-2-everything-you-need-to-know/
 *
 * ネタバレ配慮: 生死・裏切り・終盤の対立・エディの出生上の秘密などは
 * ここにも本文にも含めない。公式情報に無い関係を推測で足さない。
 *
 * 配置方針: 機械的な family tree にしない。全体は縦方向に流れるが、
 * 上下左右を少しずらして「自分で人物を置いて線を引いた相関図」に見せる。
 *   上部     … ハリー / コンラッド / メイヴ
 *   中上部   … セラフィーナ / ブレンダン / ケヴィン / ベラ
 *   中〜下部 … ジャン / エディ / リッチー
 *   下部     … ジーナ / トミー
 */

/** x,y はキャンバス(縦長)に対する % 位置。 */
export const moblandNodes: ChartNode[] = [
  { id: 'harry', name: 'ハリー', initial: 'ハ', x: 8, y: 12, group: 'fixer' },
  { id: 'konrad', name: 'コンラッド', initial: 'コ', x: 41, y: 5, group: 'harrigan' },
  { id: 'maeve', name: 'メイヴ', initial: 'メ', x: 74, y: 10, group: 'harrigan' },
  { id: 'seraphina', name: 'セラフィーナ', initial: 'セ', x: 23, y: 22, group: 'harrigan' },
  { id: 'brendan', name: 'ブレンダン', initial: 'ブ', x: 85, y: 30, group: 'harrigan' },
  { id: 'kevin', name: 'ケヴィン', initial: 'ケ', x: 42, y: 40, group: 'harrigan' },
  { id: 'bella', name: 'ベラ', initial: 'ベ', x: 83, y: 50, group: 'harrigan' },
  { id: 'jan', name: 'ジャン', initial: 'ジ', x: 14, y: 58, group: 'dasouza' },
  { id: 'eddie', name: 'エディ', initial: 'エ', x: 55, y: 63, group: 'harrigan' },
  { id: 'richie', name: 'リッチー', initial: 'リ', x: 86, y: 68, group: 'stevenson' },
  { id: 'gina', name: 'ジーナ', initial: 'ジ', x: 29, y: 87, group: 'dasouza' },
  { id: 'tommy', name: 'トミー', initial: 'ト', x: 87, y: 88, group: 'stevenson' },
];

export const moblandRelationships: ChartRelationship[] = [
  { from: 'konrad', to: 'maeve', label: '夫婦', type: 'other', labelPos: 0.5, note: 'コンラッド − メイヴ（夫婦）' },

  { from: 'konrad', to: 'brendan', label: '父', type: 'family', directed: true, labelPos: 0.74, note: 'コンラッド → ブレンダン（父）' },
  { from: 'konrad', to: 'kevin', label: '父', type: 'family', directed: true, labelPos: 0.6, note: 'コンラッド → ケヴィン（父）' },
  { from: 'konrad', to: 'seraphina', label: '父', type: 'family', directed: true, labelPos: 0.58, labelOffset: 4, note: 'コンラッド → セラフィーナ（父・婚外子）' },
  { from: 'maeve', to: 'brendan', label: '母', type: 'family', directed: true, labelPos: 0.66, note: 'メイヴ → ブレンダン（母）' },
  { from: 'maeve', to: 'kevin', label: '母', type: 'family', directed: true, labelPos: 0.2, note: 'メイヴ → ケヴィン（母）' },

  { from: 'kevin', to: 'bella', label: '夫婦', type: 'other', labelPos: 0.5, note: 'ケヴィン − ベラ（夫婦）' },
  { from: 'kevin', to: 'eddie', label: '父', type: 'family', directed: true, labelPos: 0.52, note: 'ケヴィン → エディ（父）' },
  { from: 'bella', to: 'eddie', label: '母', type: 'family', directed: true, labelPos: 0.55, note: 'ベラ → エディ（母）' },

  { from: 'harry', to: 'jan', label: '夫婦', type: 'other', labelPos: 0.48, note: 'ハリー − ジャン（夫婦）' },
  { from: 'harry', to: 'gina', label: '父', type: 'family', directed: true, labelPos: 0.62, note: 'ハリー → ジーナ（父）' },
  { from: 'jan', to: 'gina', label: '母', type: 'family', directed: true, labelPos: 0.5, note: 'ジャン → ジーナ（母）' },

  { from: 'harry', to: 'kevin', label: '友人', type: 'friend', curve: 0.44, labelPos: 0.72, note: 'ハリー − ケヴィン（友人・刑務所時代からの付き合い）' },
  {
    from: 'harry',
    to: 'konrad',
    label: 'フィクサー',
    type: 'other',
    directed: true,
    labelPos: 0.32,
    labelOffset: 3,
    note: 'ハリー → コンラッド／ハリガン家（フィクサーとして仕える）',
  },
  {
    from: 'konrad',
    to: 'richie',
    label: '敵対',
    type: 'rival',
    curve: -0.05,
    labelPos: 0.47,
    note: 'コンラッド／ハリガン家 − リッチー／スティーヴンソン家（敵対）',
  },
  { from: 'richie', to: 'tommy', label: '父', type: 'family', directed: true, labelPos: 0.5, note: 'リッチー → トミー（父）' },
];
