import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  vite: {
    server: {
      // Caddy (TEC-36) proxies epahichan.dev.techworkcompany.com to this
      // dev server on a different Host header than localhost; Vite blocks
      // unrecognized hosts by default.
      allowedHosts: ['epahichan.dev.techworkcompany.com'],
    },
  },
});
