import { defineConfig } from 'astro/config';

// Static build, no trailing slashes. The sitemap is written after the build
// from dist/ (scripts/sitemap.mjs).
export default defineConfig({
  markdown: { shikiConfig: { theme: "github-light" } },
  site: 'https://epahichan.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', assets: 'assets', inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  compressHTML: true,
  vite: {
    server: { allowedHosts: true },
    // resvg is a native module used only at build time for OG images.
    ssr: { external: ['@resvg/resvg-js'] },
    optimizeDeps: { exclude: ['@resvg/resvg-js'] },
    build: { rollupOptions: { external: [/\.node$/] } },
  },
});
