import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * TVアニメ『葬送のフリーレン』第1期（2023年放送開始）人物ガイド用の相関図データ。
 *
 * 出典（人物情報の一次根拠は2023年の放送前公式NEWS・公式PV。第1期後半／第2期／第3期の情報は使わない）:
 *   - TVアニメ公式NEWS（2023年3月8日）「主演声優、メインスタッフ発表！」
 *     https://frieren-anime.jp/news/49/
 *   - TVアニメ公式NEWS（2023年6月14日）「勇者一行キャラデザイン＆声優発表！」
 *     https://frieren-anime.jp/news/139/
 *   - TVアニメ公式NEWS（2023年8月7日）「新パーティーキャラデザイン＆声優発表！」
 *     https://frieren-anime.jp/news/197/
 *   - TVアニメ公式NEWS（2023年6月30日）初回放送・PV発表
 *     https://frieren-anime.jp/news/145/
 *   - TOHO animation 公式 YouTube「TVアニメ『葬送のフリーレン』PV」（動画 ID: f5ZEiJyqDKU）
 *   ※記事本文の「第1期 全28話」のみ、後日の公式NEWS（2025年12月9日 news/4514）で確認。
 *   現在（2026年）の公式CHARACTERページは第1期後半以降・第2期・第3期の情報が混在するため、
 *   この記事の人物情報の根拠には使用しない（記事の出典にも載せない）。
 *
 * ネタバレ配慮:
 *   - 扱うのは「2023年の放送前公式告知で公開されていた、名前・役割・基本的な関係」だけ。
 *   - 一級魔法使い試験・階級・各人物の能力の詳細・後の加入や離脱・後の目的地・
 *     魔族との戦いの結果・各人物の生死・第1期終盤・第2期以降には一切触れない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色で過去／現在／敵味方を表さない。
 *   - グループの違い（かつての勇者一行／新たな旅の仲間）は配置と本文で説明する。
 *   - 矢印は「育てた」「師匠」の向き（ハイター→フェルン／アイゼン→シュタルク）だけに使う。
 */

/**
 * x,y はキャンバスに対する % 位置。
 * 左＝かつての勇者一行（ヒンメル・ハイター・アイゼン）、中央＝フリーレン、
 * 右＝新たな旅の仲間（フェルン・シュタルク）。
 * ハイターとフェルン、アイゼンとシュタルクを上下で近くに置き、師弟の線を短くする。
 */
export const sousouNoFrierenNodes: ChartNode[] = [
  { id: 'himmel', name: 'ヒンメル', initial: 'ヒ', x: 14, y: 13 },
  { id: 'heiter', name: 'ハイター', initial: 'ハ', x: 12, y: 44 },
  { id: 'eisen', name: 'アイゼン', initial: 'ア', x: 15, y: 88 },
  { id: 'frieren', name: 'フリーレン', initial: 'フリ', x: 47, y: 51 },
  { id: 'fern', name: 'フェルン', initial: 'フェ', x: 86, y: 28 },
  { id: 'stark', name: 'シュタルク', initial: 'シュ', x: 86, y: 76 },
];

export const sousouNoFrierenRelationships: ChartRelationship[] = [
  {
    from: 'frieren',
    to: 'himmel',
    label: '勇者一行',
    type: 'neutral',
    labelPos: 0.58,
    note: 'フリーレンとヒンメルは、かつて共に魔王を倒した勇者一行の仲間',
  },
  {
    from: 'frieren',
    to: 'heiter',
    label: '勇者一行',
    type: 'neutral',
    labelPos: 0.44,
    note: 'フリーレンとハイターは、かつての勇者一行の仲間',
  },
  {
    from: 'frieren',
    to: 'eisen',
    label: '勇者一行',
    type: 'neutral',
    labelPos: 0.55,
    note: 'フリーレンとアイゼンは、かつての勇者一行の仲間',
  },
  {
    from: 'frieren',
    to: 'fern',
    label: '旅の仲間',
    type: 'neutral',
    labelPos: 0.55,
    note: 'フリーレンとフェルンは、新たな旅を共にする仲間',
  },
  {
    from: 'frieren',
    to: 'stark',
    label: '旅の仲間',
    type: 'neutral',
    labelPos: 0.6,
    note: 'フリーレンとシュタルクは、新たな旅を共にする仲間',
  },
  {
    from: 'heiter',
    to: 'fern',
    label: '育てた',
    type: 'neutral',
    directed: true,
    labelPos: 0.33,
    note: 'ハイターはフェルンを育てた人物',
  },
  {
    from: 'eisen',
    to: 'stark',
    label: '師匠',
    type: 'neutral',
    directed: true,
    labelPos: 0.45,
    note: 'アイゼンはシュタルクの師匠（シュタルクはアイゼンの弟子）',
  },
];
