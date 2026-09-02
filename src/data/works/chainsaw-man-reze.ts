import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 劇場版『チェンソーマン レゼ篇』鑑賞前ガイド用の人物関係データ。
 *
 * 出典（公式サイトで公開されている設定のみ。記事本文には URL をベタ書きしない）:
 *   - TVアニメ『チェンソーマン』公式サイト INTRODUCTION / CHARACTER
 *     https://chainsawman.dog/tvseries/introduction/
 *     https://chainsawman.dog/tvseries/character/
 *   - 劇場版『チェンソーマン レゼ篇』公式サイト STORY / CHARACTER
 *     https://chainsawman.dog/movie_reze/story/
 *     https://chainsawman.dog/movie_reze/character/
 *
 * ネタバレ配慮:
 *   - TVアニメ第1期の結末、登場人物の生死・離脱には触れない。
 *   - レゼの正体・能力・所属・目的、レゼ篇の戦闘や物語の結末には触れない。
 *   - すべての関係は type: 'neutral'（同色・中立）。矢印や色に敵味方・結末の意味を持たせない。
 *     マキマ→デンジ のみ「上司→部下」という組織上の向きとして矢印を付ける。
 *   - 描くのはデンジを中心とした「出会い」の関係だけ。
 */

/** x,y はキャンバス(縦長)に対する % 位置。デンジを中心に少し散らして配置する。 */
export const chainsawRezeNodes: ChartNode[] = [
  { id: 'pochita', name: 'ポチタ', initial: 'ポ', x: 21, y: 14 },
  { id: 'makima', name: 'マキマ', initial: 'マ', x: 78, y: 12 },
  { id: 'denji', name: 'デンジ', initial: 'デ', x: 49, y: 44 },
  { id: 'aki', name: 'アキ', initial: 'ア', x: 13, y: 64 },
  { id: 'power', name: 'パワー', initial: 'パ', x: 86, y: 62 },
  { id: 'reze', name: 'レゼ', initial: 'レ', x: 52, y: 90 },
];

export const chainsawRezeRelationships: ChartRelationship[] = [
  {
    from: 'denji',
    to: 'pochita',
    label: '契約／心臓',
    type: 'neutral',
    labelPos: 0.5,
    note: 'デンジ − ポチタ（「チェンソーの悪魔」ポチタと契約し、その心臓を持つ）',
  },
  {
    from: 'makima',
    to: 'denji',
    label: '上司',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: 'マキマ → デンジ（公安対魔特異4課の上司。デンジが憧れる相手）',
  },
  {
    from: 'aki',
    to: 'denji',
    label: '先輩／同居',
    type: 'neutral',
    labelPos: 0.38,
    note: '早川アキ − デンジ（デンジの先輩デビルハンター。同じ家で共同生活）',
  },
  {
    from: 'power',
    to: 'denji',
    label: 'バディ／同居',
    type: 'neutral',
    labelPos: 0.38,
    note: 'パワー − デンジ（バディを組む。アキの家で共同生活）',
  },
  {
    from: 'reze',
    to: 'denji',
    label: '雨宿りで出会う',
    type: 'neutral',
    labelPos: 0.44,
    note: 'レゼ − デンジ（雨宿り中に偶然出会う）',
  },
];
