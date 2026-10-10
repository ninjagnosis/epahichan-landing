// One 1200x630 share image per page: the page's title on the ePahichan
// stage with the mark. Built at build time with satori and resvg.
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import satori from 'satori';

// resvg is a native addon. Loading it with require at run time keeps Vite
// from trying to bundle its .node binary (which fails on Linux builders).
const { Resvg } = createRequire(import.meta.url)('@resvg/resvg-js') as typeof import('@resvg/resvg-js');
import { products } from '../../data/products';
import { solutions } from '../../data/solutions';
import { glossary } from '../../data/glossary';

const font = (w: number) => readFileSync(`node_modules/@fontsource/poppins/files/poppins-latin-${w}-normal.woff`);
const mark = `data:image/png;base64,${readFileSync('public/brand/epahichan-mark-192.png').toString('base64')}`;

export async function getStaticPaths() {
  const posts = await getCollection('blog');
  const pages: { slug: string; title: string }[] = [
    { slug: 'index', title: 'A digital signature for every Nepali' },
    { slug: 'how-signing-works', title: 'How a digital signature works' },
    { slug: 'contact', title: 'Contact ePahichan' },
    { slug: 'blog', title: 'ePahichan insights' },
    { slug: 'terms', title: 'Terms of service' },
    { slug: 'privacy', title: 'Privacy policy' },
    { slug: 'delete-account', title: 'Delete your account' },
    { slug: '404', title: 'Page not found' },
    ...products.map((p) => ({ slug: `products/${p.slug}`, title: p.headline })),
    ...solutions.map((s) => ({ slug: `solutions/${s.slug}`, title: s.headline })),
    { slug: 'glossary', title: 'Digital signature glossary' },
    ...glossary.map((t) => ({ slug: `glossary/${t.slug}`, title: t.full ? `${t.term}: ${t.full}` : t.term })),
    ...posts.map((p) => ({ slug: `blog/${p.id}`, title: p.data.title })),
    ...[...new Set(posts.flatMap((p) => p.data.tags))].map((t) => ({ slug: `blog/tag/${t}`, title: `${t.replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase())} articles` })),
  ];
  const n = Math.ceil(posts.length / 10);
  for (let i = 2; i <= n; i++) pages.push({ slug: `blog/page/${i}`, title: `ePahichan insights, page ${i}` });
  return pages.map((p) => ({ params: { slug: p.slug }, props: { title: p.title } }));
}

export async function GET({ props }: APIContext) {
  const { title } = props as { title: string };
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: { width: 1200, height: 630, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 72, background: '#6F0006', color: '#FFFFFF', fontFamily: 'Poppins' },
        children: [
          {
            type: 'div',
            props: {
              style: { display: 'flex', alignItems: 'center', gap: 20 },
              children: [
                { type: 'img', props: { src: mark, width: 96, height: 87 } },
                { type: 'div', props: { style: { fontSize: 40, fontWeight: 600 }, children: 'ePahichan' } },
              ],
            },
          },
          { type: 'div', props: { style: { fontSize: title.length > 40 ? 64 : 80, fontWeight: 600, lineHeight: 1.1, maxWidth: 1000 }, children: title } },
          { type: 'div', props: { style: { fontSize: 30, color: '#F2C9CB' }, children: 'epahichan.com' } },
        ],
      },
    },
    { width: 1200, height: 630, fonts: [{ name: 'Poppins', data: font(400), weight: 400 }, { name: 'Poppins', data: font(600), weight: 600 }] },
  );
  const png = new Resvg(svg).render().asPng();
  return new Response(png, { headers: { 'content-type': 'image/png' } });
}
