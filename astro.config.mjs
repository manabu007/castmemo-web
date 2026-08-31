// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import { SITE_URL } from './src/consts';

// 静的サイト生成（SSG）。Cloudflare Pages にはこの dist/ をそのまま配信できる。
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      // draft 作品ページなど、公開したくない URL を sitemap から除外する。
      filter: (page) => !page.includes('/_'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
