import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  output: 'static',
  /*
    No `include` on purpose: astro-icon then inlines only the icons actually
    referenced by name in the source, so the rest of the Lucide set costs
    nothing — and none of it reaches the browser as JavaScript.
  */
  integrations: [icon()],
  /*
    Canonical origin — the production host, not the dev one, so canonical and
    hreflang point where the page will actually live. The dev URL stays out
    of the index by the noindex in BaseLayout and the disallow-all robots.txt,
    both of which come off together at launch.
  */
  site: 'https://epahichan.com',
  vite: {
    server: {
      // Caddy (TEC-36) proxies epahichan.dev.techworkcompany.com to this
      // dev server on a different Host header than localhost; Vite blocks
      // unrecognized hosts by default.
      allowedHosts: ['epahichan.dev.techworkcompany.com'],
    },
  },
});
