import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { published } from '../lib/blog';
import { LOCALES, SITE_NAME } from '../config/site';
import { content } from '../jurisdictions';

// Drafts never reach the feed, even on the dev server.
export async function GET(context: APIContext) {
  const items = published(await getCollection('blog'));
  return rss({
    title: `${SITE_NAME} insights`,
    description: content.copy.rss.description,
    site: context.site!,
    items: items.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}`,
      categories: p.data.tags,
    })),
    customData: `<language>${LOCALES.default}</language>`,
  });
}
