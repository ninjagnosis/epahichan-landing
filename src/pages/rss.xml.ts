import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { published } from '../lib/blog';

// Drafts never reach the feed, even on the dev server.
export async function GET(context: APIContext) {
  const items = published(await getCollection('blog'));
  return rss({
    title: 'ePahichan insights',
    description: 'Guides on digital signatures, identity and signing documents in Nepal.',
    site: context.site!,
    items: items.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}`,
      categories: p.data.tags,
    })),
    customData: '<language>en</language>',
  });
}
