import { defineConfig } from 'astro/config';
import { loadBrand } from './src/brand/load.mjs';
import { buildTokens } from './src/brand/tokens.mjs';
import { remarkBrandTokens } from './src/brand/remark.mjs';
import { brandModule } from './src/brand/vite-plugin.mjs';

// Who this site is for: the brand document (docs/brand.md). A build without one stops here.
const brand = loadBrand();

// Static build, no trailing slashes. The sitemap is written after the build
// from dist/ (scripts/sitemap.mjs).
export default defineConfig({
  markdown: { shikiConfig: { theme: "github-light" }, remarkPlugins: [remarkBrandTokens(buildTokens(brand))] },
  site: brand.site.url,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', assets: 'assets', inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  compressHTML: true,
  vite: {
    plugins: [brandModule(brand)],
    server: { allowedHosts: true },
    // resvg is a native module used only at build time for OG images.
    ssr: { external: ['@resvg/resvg-js'] },
    optimizeDeps: { exclude: ['@resvg/resvg-js'] },
    build: { rollupOptions: { external: [/\.node$/] } },
  },
});
