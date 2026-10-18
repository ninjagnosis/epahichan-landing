import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { products } from '../data/products';
import { solutions } from '../data/solutions';
import { published } from '../lib/blog';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SITE_NAME, SITE_URL } from '../config/site';
import { content } from '../jurisdictions';

// Generated from the same data as the pages, so it never drifts.
export async function GET(_: APIContext) {
  const posts = published(await getCollection('blog'));
  const out = [
    `# ${SITE_NAME}`,
    '',
    `> ${content.copy.llms.summary}`,
    '',
    `- Contact: ${CONTACT_EMAIL}, ${CONTACT_PHONE_DISPLAY}`,
    '',
    '## Products',
    '',
    ...products.map((p) => `- [${p.name}](${SITE_URL}/products/${p.slug}): ${p.short}`),
    '',
    '## Solutions',
    '',
    ...solutions.map((s) => `- [${s.name}](${SITE_URL}/solutions/${s.slug}): ${s.short}`),
    '',
    '## Blog',
    '',
    ...(posts.length ? posts.map((p) => `- [${p.data.title}](${SITE_URL}/blog/${p.id}): ${p.data.description}`) : ['- No posts yet']),
    '',
    '## Company',
    '',
    `- [Try a signature in your browser](${SITE_URL}/how-signing-works)`,
    `- [Glossary](${SITE_URL}/glossary)`,
    `- [Contact](${SITE_URL}/contact)`,
    `- [Privacy](${SITE_URL}/privacy)`,
    `- [Terms](${SITE_URL}/terms)`,
    '',
  ];
  return new Response(out.join('\n'), { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
