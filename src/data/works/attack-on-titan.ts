import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * TVアニメ『進撃の巨人』Season 1（2013年放送開始）人物ガイド用の相関図データ。
 *
 * 出典（Season 1公式情報のみ。Season 2 / Season 3 / The Final Season / 完結編 /
 * 原作終盤の設定・展開は一切使わない）:
 *   - TVアニメ『進撃の巨人』Season 1公式サイト
 *     https://shingeki.tv/season1/
 *   - Season 1公式「スタッフ・キャスト」
 *     https://shingeki.tv/season1/staff/
 *   - Season 1公式「物語」イントロダクション／第1話・第3話
 *     https://shingeki.tv/season1/story/
 *   キャラクターページ（https://shingeki.tv/season1/character/）は、
 *   人物名・CV・開始時点の基本プロフィールの確認のみに使用し、年表部分は使わない。
 *   人物の日本語表記は Wikipedia 日本語版で補助確認している。
 *
 * ネタバレ配慮:
 *   - 各人物の「名前・声優・初期所属／役職と、第1〜3話程度で分かる人物関係」だけを扱う。
 *   - 巨人にまつわる設定・各人物の正体や能力・背景の秘密・訓練後の最終的な所属・
 *     生死・敵味方の変化・作戦の結果・Season 1後半以降の展開・結末には一切触れない。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に敵味方・優劣の意味はない。
 *   - directed（矢印）は使わない。家族・兄妹・養子・恋愛・守る・依存などの
 *     解釈的なラベルも使わない。
 *   - 線を引くのはエレン・ミカサ・アルミンの3人の関係だけ。ジャン・アニ・サシャ・コニーは
 *     「第104期の同期の例」として下に並べるだけで、人物どうしを線で結ばない
 *     （特定のペアに特別な関係があるように見えるのを避けるため）。
 */

/**
 * x,y はキャンバス(縦長)に対する % 位置。
 * 上のグループ=まず覚える3人（ミカサ・アルミンを上、エレンを中央に置いた逆三角形）。
 * 下のグループ=第104期の同期4人を横一列に（線なし）。
 */
export const attackOnTitanNodes: ChartNode[] = [
  { id: 'mikasa', name: 'ミカサ', initial: 'ミ', x: 20, y: 15 },
  { id: 'armin', name: 'アルミン', initial: 'ア', x: 80, y: 15 },
  { id: 'eren', name: 'エレン', initial: 'エ', x: 50, y: 45 },
  { id: 'jean', name: 'ジャン', initial: 'ジ', x: 13, y: 82 },
  { id: 'annie', name: 'アニ', initial: 'ア', x: 38, y: 82 },
  { id: 'sasha', name: 'サシャ', initial: 'サ', x: 63, y: 82 },
  { id: 'connie', name: 'コニー', initial: 'コ', x: 88, y: 82 },
];

export const attackOnTitanRelationships: ChartRelationship[] = [
  {
    from: 'eren',
    to: 'mikasa',
    label: '親しい間柄',
    type: 'neutral',
    labelPos: 0.4,
    note: 'エレンとミカサは、物語開始時点から行動をともにしている親しい間柄',
  },
  {
    from: 'eren',
    to: 'armin',
    label: '友人',
    type: 'neutral',
    labelPos: 0.4,
    note: 'エレンとアルミンは友人',
  },
  {
    from: 'mikasa',
    to: 'armin',
    label: '友人',
    type: 'neutral',
    labelPos: 0.5,
    note: 'ミカサとアルミンは友人',
  },
];
