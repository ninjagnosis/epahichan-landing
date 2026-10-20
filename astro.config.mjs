import { defineConfig } from 'astro/config';
import siteKit from '@ninjainfosys/site-kit/integration';

// Static build, no trailing slashes. The sitemap is written after the build
// from dist/ (site-kit sitemap).
export default defineConfig({
  markdown: { shikiConfig: { theme: "github-light" } },
  site: 'https://epahichan.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', assets: 'assets', inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  compressHTML: true,
  integrations: [siteKit()],
  vite: {
    server: { allowedHosts: true },
  },
});
