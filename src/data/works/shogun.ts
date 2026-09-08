import type { ChartNode, ChartRelationship } from '../../lib/relationship-chart';

/**
 * ドラマ『SHOGUN 将軍』シーズン1（2024）人物ガイド用の相関図データ。
 * 人物が多いため、1枚に詰め込まず2枚に分割している。
 *
 * 出典（一次情報・公式に準じる情報。記事本文には URL をベタ書きしない）:
 *   - Disney+ 日本公式『SHOGUN 将軍』作品ページ／特設サイト「SHOGUNの城」
 *     https://disneyplus.disney.co.jp/program/shogun
 *     https://dcam.disney.co.jp/disneyplus_jp/shogun/characters.html
 *   - FX 公式「Shōgun Viewers Guide / Characters」（トップレベルの人物紹介のみ）
 *     https://www.fxnetworks.com/shows/shogun/viewers-guide/characters
 *   - FX Networks 公式 YouTube「Shōgun - Official Trailer」（動画 ID: yAN5uspO_hk）
 *   人物の日本語表記は Disney+ 日本公式に合わせ、Wikipedia 日本語版・大手メディアで補助確認している。
 *
 * ネタバレ配慮:
 *   - 各人物の「物語開始時点の立場・家族関係」だけを扱う。
 *   - 死亡／生存／裏切り／寝返り／忠誠の変化／後半の身分・役職／大坂での計画／
 *     関ヶ原の結果／最終話／シーズン2の情報には一切触れない。
 *   - 村次の「密偵」としての役割は書かない（「網代村の長」まで）。
 *   - すべての関係は type: 'neutral'（同色・中立）。色や配置に善悪・敵味方の意味はない。
 *   - 石堂と虎永は「ともに五大老」という中立表現のみ。「敵」とは書かない。
 *   - 矢印は「親 → 子」「仕える人 → 主君」という向きだけに限定する。
 *   - FX の個別キャラクターページ／Episode Guide／Podcast／Season 2 ページは事実確認に使わない。
 */

/* ------------------------------------------------------------------ *
 * 相関図1：虎永・按針・鞠子の周辺
 * ------------------------------------------------------------------ */

export const shogunToranagaNodes: ChartNode[] = [
  { id: 'nagakado', name: '長門', initial: '長', x: 82, y: 13 },
  { id: 'toranaga', name: '虎永', initial: '虎', x: 56, y: 21 },
  { id: 'hiromatsu', name: '広松', initial: '広', x: 36, y: 39 },
  { id: 'buntaro', name: '文太郎', initial: '文', x: 20, y: 60 },
  { id: 'mariko', name: '鞠子', initial: '鞠', x: 50, y: 64 },
  { id: 'blackthorne', name: '按針', initial: '按', x: 74, y: 80 },
];

export const shogunToranagaRelationships: ChartRelationship[] = [
  {
    from: 'hiromatsu',
    to: 'toranaga',
    label: '腹心',
    type: 'neutral',
    labelPos: 0.42,
    note: '戸田広松は吉井虎永の腹心（古くからの重臣）',
  },
  {
    from: 'toranaga',
    to: 'nagakado',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: '吉井虎永 → 吉井長門（長門は虎永の息子）',
  },
  {
    from: 'hiromatsu',
    to: 'buntaro',
    label: '父',
    type: 'neutral',
    directed: true,
    labelPos: 0.55,
    note: '戸田広松 → 戸田文太郎（文太郎は広松の息子）',
  },
  {
    from: 'buntaro',
    to: 'mariko',
    label: '夫婦',
    type: 'neutral',
    labelPos: 0.5,
    note: '戸田文太郎 − 戸田鞠子（夫婦）',
  },
  {
    from: 'mariko',
    to: 'blackthorne',
    label: '通訳',
    type: 'neutral',
    labelPos: 0.45,
    note: '戸田鞠子 − ジョン・ブラックソーン／按針（鞠子はブラックソーンとの意思疎通を助ける通訳）',
  },
];

/* ------------------------------------------------------------------ *
 * 相関図2：伊豆・網代・大坂の主要人物
 * ------------------------------------------------------------------ */

export const shogunIzuOsakaNodes: ChartNode[] = [
  { id: 'yabushige', name: '藪重', initial: '藪', x: 24, y: 16 },
  { id: 'ishido', name: '石堂', initial: '石', x: 80, y: 18 },
  { id: 'toranaga', name: '虎永', initial: '虎', x: 52, y: 33 },
  { id: 'omi', name: '央海', initial: '央', x: 16, y: 52 },
  { id: 'ochiba', name: '落葉の方', initial: '落', x: 84, y: 54 },
  { id: 'muraji', name: '村次', initial: '村', x: 37, y: 78 },
];

export const shogunIzuOsakaRelationships: ChartRelationship[] = [
  {
    from: 'yabushige',
    to: 'omi',
    label: '甥',
    type: 'neutral',
    directed: true,
    labelPos: 0.55,
    note: '樫木藪重 → 樫木央海（央海は藪重の甥）',
  },
  {
    from: 'omi',
    to: 'muraji',
    label: '網代',
    type: 'neutral',
    labelPos: 0.5,
    note: '樫木央海 − 村次（央海は網代の領主、村次は網代村の長）',
  },
  {
    from: 'yabushige',
    to: 'toranaga',
    label: '仕える',
    type: 'neutral',
    directed: true,
    labelPos: 0.5,
    note: '樫木藪重は吉井虎永に仕える伊豆の領主',
  },
  {
    from: 'ishido',
    to: 'toranaga',
    label: '五大老',
    type: 'neutral',
    labelPos: 0.5,
    note: '石堂和成 − 吉井虎永（ともに五大老の一人。物語の開始時点で政治的に対立する立場にある）',
  },
  {
    from: 'ishido',
    to: 'ochiba',
    label: '大坂城',
    type: 'neutral',
    labelPos: 0.55,
    note: '石堂和成 − 落葉の方（石堂は大坂城の守護者、落葉の方は世継ぎとともに大坂城で暮らす）',
  },
];
