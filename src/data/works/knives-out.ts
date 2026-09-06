import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 映画『ナイブズ・アウト／名探偵と刃の館の秘密』（Knives Out, 2019）
 * 人物ガイド用の相関図データ。
 *
 * 出典（一次情報。記事本文には URL をベタ書きしない）:
 *   - Lionsgate 公式 Synopsis
 *     https://app.powster.com/lionsgateus/knives-out/us/synopsis/
 *   - Lionsgate Movies 公式予告編（YouTube）
 *     https://www.youtube.com/watch?v=qGqiHJTsRkQ
 *   - Lionsgate 配下で公開されている公式脚本（家族関係の確認に使用）
 *     https://lionsgate.brightspotcdn.com/fb/14/23cd58a147afbb5c758ecb3dff0a/knivesout-final.pdf
 *
 * ネタバレ配慮:
 *   - 犯人／犯行方法／動機／事件の真相／遺言の内容／終盤の展開・結末には一切触れない。
 *   - ここで描くのは「家族・立場の関係」だけ。事件への関与や疑いを示す線は引かない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色・配置に善悪や犯人を示す意味はない。
 *   - 矢印は「親（世代が上）→ 子（世代が下）」「探偵 → 調査対象」という
 *     方向が分かりやすい場合のみに限定する。
 */

/** x,y はキャンバス(縦長)に対する % 位置。ハーランを頂点にゆるい家系図として配置する。 */
export const knivesOutNodes: ChartNode[] = [
  { id: 'blanc', name: 'ブラン', initial: 'ブ', x: 13, y: 8 },
  { id: 'harlan', name: 'ハーラン', initial: 'ハ', x: 50, y: 8 },
  { id: 'marta', name: 'マルタ', initial: 'マ', x: 87, y: 8 },
  { id: 'linda', name: 'リンダ', initial: 'リ', x: 22, y: 33 },
  { id: 'walt', name: 'ウォルト', initial: 'ウ', x: 52, y: 33 },
  { id: 'joni', name: 'ジョニ', initial: 'ジョ', x: 85, y: 33 },
  { id: 'richard', name: 'リチャード', initial: 'チ', x: 12, y: 51 },
  { id: 'donna', name: 'ドナ', initial: 'ド', x: 68, y: 51 },
  { id: 'ransom', name: 'ランサム', initial: 'ラ', x: 26, y: 84 },
  { id: 'jacob', name: 'ジェイコブ', initial: 'ジェ', x: 53, y: 84 },
  { id: 'meg', name: 'メグ', initial: 'メ', x: 85, y: 78 },
];

export const knivesOutRelationships: ChartRelationship[] = [
  {
    from: 'blanc',
    to: 'harlan',
    label: '調査',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: 'ブノワ・ブラン → ハーラン（ハーランの死について調べる探偵）',
  },
  {
    from: 'marta',
    to: 'harlan',
    label: '介護',
    type: 'neutral',
    labelPos: 0.5,
    note: 'マルタ・カブレラ − ハーラン（マルタはハーランの介護を担当している。血縁関係はない）',
  },
  {
    from: 'harlan',
    to: 'linda',
    label: '娘',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: 'ハーラン → リンダ（リンダはハーランの長女）',
  },
  {
    from: 'harlan',
    to: 'walt',
    label: '息子',
    type: 'neutral',
    directed: true,
    labelPos: 0.35,
    note: 'ハーラン → ウォルト（ウォルトはハーランの息子）',
  },
  {
    from: 'harlan',
    to: 'joni',
    label: '義理の娘',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ハーラン − ジョニ（ジョニはハーランの義理の娘。メグの母）',
  },
  {
    from: 'linda',
    to: 'richard',
    label: '夫婦',
    type: 'neutral',
    labelPos: 0.5,
    note: 'リンダ − リチャード（夫婦）',
  },
  {
    from: 'walt',
    to: 'donna',
    label: '夫婦',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ウォルト − ドナ（夫婦）',
  },
  {
    from: 'linda',
    to: 'ransom',
    label: '息子',
    type: 'neutral',
    directed: true,
    labelPos: 0.32,
    note: 'リンダ → ランサム（母と息子）',
  },
  {
    from: 'richard',
    to: 'ransom',
    label: '息子',
    type: 'neutral',
    directed: true,
    labelPos: 0.66,
    note: 'リチャード → ランサム（父と息子）',
  },
  {
    from: 'walt',
    to: 'jacob',
    label: '息子',
    type: 'neutral',
    directed: true,
    labelPos: 0.28,
    note: 'ウォルト → ジェイコブ（父と息子）',
  },
  {
    from: 'donna',
    to: 'jacob',
    label: '息子',
    type: 'neutral',
    directed: true,
    labelPos: 0.72,
    note: 'ドナ → ジェイコブ（母と息子）',
  },
  {
    from: 'joni',
    to: 'meg',
    label: '娘',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: 'ジョニ → メグ（母と娘）',
  },
];
