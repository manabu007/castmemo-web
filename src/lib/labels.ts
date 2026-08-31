/** 作品カテゴリ・ネタバレ方針の日本語ラベル */

export const CATEGORY_LABELS: Record<string, string> = {
  novel: '小説',
  drama: 'ドラマ',
  movie: '映画',
  manga: '漫画',
  anime: 'アニメ',
  other: 'その他',
};

export const SPOILER_LABELS: Record<string, string> = {
  none: 'なし',
  minimal: '最小限',
  moderate: '中程度',
};

export const SPOILER_DESCRIPTIONS: Record<string, string> = {
  none: '登場人物の名前と初登場時点の情報のみ。先の展開には触れません。',
  minimal: '序盤の展開に軽く触れます。',
  moderate: '中盤までの人物関係の変化に触れます。',
};
