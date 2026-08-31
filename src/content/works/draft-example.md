---
title: "【下書きサンプル】未公開の作品ガイド"
slug: "draft-example"
description: "draft: true の作品。開発サーバー（npm run dev）ではプレビューできますが、本番ビルドと sitemap には含まれません。動作確認後は削除して構いません。"
category: "drama"
spoilerPolicy: "minimal"
publishedAt: 2026-08-31
draft: true
featured: false
---

このファイルは `draft: true` の動作確認用です。

- `npm run dev` では `/works/draft-example/` にアクセスでき、noindex が付きます。
- `npm run build`（本番）では生成されず、`sitemap-index.xml` にも含まれません。
- 一覧ページ（`/works/`）にも表示されません。
