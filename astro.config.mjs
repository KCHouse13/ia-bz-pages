import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://bunzl.intelligenceamplified.work',
  // Root redirects to the only published page.
  redirects: {
    '/': '/guides/customer/bunzl',
  },
  integrations: [
    tailwind(),
    mdx(),
    // No sitemap: every page here is unlisted (noindex) by design.
  ],
  output: 'static',
});
