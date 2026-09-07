import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * 映画『エブリシング・エブリウェア・オール・アット・ワンス』
 * （Everything Everywhere All at Once, 2022）人物ガイド用の相関図データ。
 *
 * 出典（一次情報。記事本文には URL をベタ書きしない）:
 *   - A24 公式作品ページ（Synopsis / Cast / Directors）
 *     https://a24films.com/films/everything-everywhere-all-at-once
 *   - GAGA 日本公式サイト「ABOUT THE MOVIE」（物語の入口・人物）
 *     https://gaga.ne.jp/eeaao/about/
 *   - GAGA（ギャガ株式会社）作品情報ページ（日本公開日・配給・監督）
 *     https://www.gaga.co.jp/screening/エブリシング・エブリウェア・オール・アット・/
 *   - A24 公式 YouTube「Everything Everywhere All At Once | Official Trailer HD | A24」
 *     https://www.youtube.com/watch?v=wxN1T1uxQ2g
 *   人物のカタカナ表記の補助確認に映画データベース（eiga.com）を参照している
 *   （ベッキー／ディアドラ の表記確認のみ。本文の主要な事実は A24・GAGA 公式を優先）。
 *
 * ネタバレ配慮:
 *   - 扱うのは「ワン一家が国税局へ行き、マルチバースという要素が物語に入ってくる」
 *     という物語の入口まで。
 *   - 敵・黒幕の正体／ジョイに関する物語の核心／別宇宙での姿・正体／終盤の展開／
 *     家族関係の最終的な結論／エンディングには一切触れない。
 *   - 相関図は「物語冒頭のワン一家と現実世界での人物関係」だけ。
 *     別宇宙版の人物（Alpha Waymond 等）はノードを作らない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に善悪・結末の意味はない。
 *   - 矢印は「親 → 子」という向きだけに限定する。
 */

/* 相関図：物語冒頭のワン一家と周辺人物 */
export const eeaaoNodes: ChartNode[] = [
  { id: 'gonggong', name: 'ゴンゴン', initial: 'ゴ', x: 20, y: 11 },
  { id: 'deirdre', name: 'ディアドラ', initial: 'ディ', x: 82, y: 14 },
  { id: 'evelyn', name: 'エヴリン', initial: 'エ', x: 40, y: 42 },
  { id: 'waymond', name: 'ウェイモンド', initial: 'ウェ', x: 77, y: 45 },
  { id: 'joy', name: 'ジョイ', initial: 'ジョ', x: 36, y: 78 },
  { id: 'becky', name: 'ベッキー', initial: 'ベ', x: 76, y: 78 },
];

export const eeaaoRelationships: ChartRelationship[] = [
  {
    from: 'gonggong',
    to: 'evelyn',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.8,
    note: 'ゴンゴン → エヴリン（ゴンゴンはエヴリンの父）',
  },
  {
    from: 'evelyn',
    to: 'waymond',
    label: '夫婦',
    type: 'neutral',
    labelPos: 0.5,
    note: 'エヴリン・ワン − ウェイモンド・ワン（夫婦。ふたりでコインランドリーを経営している）',
  },
  {
    from: 'evelyn',
    to: 'joy',
    label: '母',
    type: 'neutral',
    directed: true,
    labelPos: 0.7,
    note: 'エヴリン → ジョイ（エヴリンはジョイの母）',
  },
  {
    from: 'waymond',
    to: 'joy',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.63,
    note: 'ウェイモンド → ジョイ（ウェイモンドはジョイの父）',
  },
  {
    from: 'joy',
    to: 'becky',
    label: '恋人',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ジョイ − ベッキー（交際している恋人どうし）',
  },
  {
    from: 'deirdre',
    to: 'evelyn',
    label: '税務監査',
    type: 'neutral',
    labelPos: 0.62,
    note: 'ディアドラ − エヴリン（ディアドラはワン一家の税務監査を担当する国税局の人物）',
  },
];
