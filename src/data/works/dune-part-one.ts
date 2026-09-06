import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 映画『DUNE／デューン 砂の惑星』（Dune, 2021）人物ガイド用の相関図データ。
 * 1枚に全員を詰め込むと 375px で読みづらいため、2枚に分割している。
 *
 * 出典（一次情報。記事本文には URL をベタ書きしない）:
 *   - Warner Bros. Japan 公式（ホームエンターテイメント）
 *     https://www.warnerbros.co.jp/home_entertainment/o5kdyecgb/
 *   - 映画『DUNE／デューン 砂の惑星』旧公式サイト（VOICE CAST / CHARACTER CHART / KEY WORDS）
 *     https://wwws.warnerbros.co.jp/dune-movie/1/
 *   - Legendary 公式 Dune（Synopsis / Official Trailer）
 *     https://www.legendary.com/film/dune/
 *   - Legendary 公式 制作開始発表
 *     https://www.legendary.com/dune-start-of-production/
 *   人物の日本語表記は Warner Bros. Japan 公式 VOICE CAST に合わせている。
 *
 * ネタバレ配慮:
 *   - 「皇帝の命令でアトレイデス家がアラキスへ移り住む」という入口までしか扱わない。
 *   - アトレイデス家のその後／裏切り／生死／襲撃／終盤の展開／Part Two の情報は書かない。
 *   - ユエ医師は「アトレイデス家の医師」まで。裏切り・妻・動機には一切触れない。
 *   - チャニは「アラキスに暮らすフレメンの女性」まで。ポールとの恋愛・運命は描かない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に善悪・結末の意味はない。
 *   - 矢印は「親 → 子」「仕える人 → 主君」「指南役 → 教わる人」という向きだけに限定する。
 *   - 旧公式サイトの相関図は事実確認にのみ利用し、画像は転載しない。独自データとして作成。
 */

/* ------------------------------------------------------------------ *
 * 相関図1：アトレイデス家とポールの周辺人物（＋ベネ・ゲセリット）
 * ------------------------------------------------------------------ */

export const duneAtreidesNodes: ChartNode[] = [
  { id: 'duncan', name: 'ダンカン', initial: 'ダ', x: 13, y: 22 },
  { id: 'leto', name: 'レト', initial: 'レ', x: 41, y: 25 },
  { id: 'yueh', name: 'ユエ', initial: 'ユ', x: 72, y: 23 },
  { id: 'jessica', name: 'ジェシカ', initial: 'ジェ', x: 50, y: 42 },
  { id: 'mohiam', name: 'モヒアム', initial: 'モ', x: 88, y: 58 },
  { id: 'gurney', name: 'ガーニイ', initial: 'ガ', x: 15, y: 53 },
  { id: 'paul', name: 'ポール', initial: 'ポ', x: 40, y: 80 },
];

export const duneAtreidesRelationships: ChartRelationship[] = [
  {
    from: 'leto',
    to: 'paul',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.26,
    note: 'レト・アトレイデス公爵 → ポール（ポールの父。アトレイデス家の当主）',
  },
  {
    from: 'jessica',
    to: 'paul',
    label: '母',
    type: 'neutral',
    directed: true,
    labelPos: 0.52,
    note: 'レディ・ジェシカ → ポール（ポールの母。ベネ・ゲセリットの一員）',
  },
  {
    from: 'jessica',
    to: 'mohiam',
    label: 'ベネ・ゲセリット',
    type: 'neutral',
    labelPos: 0.64,
    labelOffset: 6,
    note: 'レディ・ジェシカ − 教母ガイウス・ヘレネ・モヒアム（ともにベネ・ゲセリットの一員）',
  },
  {
    from: 'duncan',
    to: 'leto',
    label: '剣士',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: 'ダンカン・アイダホ → レト（アトレイデス家に仕える剣士）',
  },
  {
    from: 'yueh',
    to: 'leto',
    label: '医師',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: 'ドクター・ユエ → レト（アトレイデス家に仕える医師）',
  },
  {
    from: 'gurney',
    to: 'leto',
    label: '武人',
    type: 'neutral',
    directed: true,
    labelPos: 0.45,
    note: 'ガーニイ・ハレック → レト（アトレイデス家に仕える武人）',
  },
  {
    from: 'gurney',
    to: 'paul',
    label: '武術を指南',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: 'ガーニイ・ハレック → ポール（ポールの戦闘訓練に関わる）',
  },
];

/* ------------------------------------------------------------------ *
 * 相関図2：アラキスをめぐる人物・勢力
 * ------------------------------------------------------------------ */

export const duneArrakisNodes: ChartNode[] = [
  { id: 'baron', name: '男爵', initial: '男', x: 30, y: 18 },
  { id: 'rabban', name: 'ラッバーン', initial: 'ラ', x: 15, y: 66 },
  { id: 'piter', name: 'パイター', initial: 'パ', x: 54, y: 66 },
  { id: 'stilgar', name: 'スティルガー', initial: 'ス', x: 72, y: 26 },
  { id: 'chani', name: 'チャニ', initial: 'チ', x: 84, y: 68 },
];

export const duneArrakisRelationships: ChartRelationship[] = [
  {
    from: 'baron',
    to: 'rabban',
    label: 'ハルコンネン',
    type: 'neutral',
    labelPos: 0.72,
    note: 'ウラディミール・ハルコンネン男爵 − ラッバーン（ともにハルコンネン家の一員）',
  },
  {
    from: 'baron',
    to: 'piter',
    label: 'メンタート',
    type: 'neutral',
    labelPos: 0.6,
    note: 'ウラディミール・ハルコンネン男爵 − パイター・ド・フリース（パイターは男爵に仕えるメンタート）',
  },
  {
    from: 'stilgar',
    to: 'chani',
    label: 'フレメン',
    type: 'neutral',
    labelPos: 0.68,
    note: 'スティルガー − チャニ（ともにアラキスに暮らすフレメン）',
  },
];
