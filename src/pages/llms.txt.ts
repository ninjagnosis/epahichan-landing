import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { products } from '../data/products';
import { solutions } from '../data/solutions';
import { published } from '../lib/blog';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, SITE_URL } from '../config/site';

// Generated from the same data as the pages, so it never drifts.
export async function GET(_: APIContext) {
  const posts = published(await getCollection('blog'));
  const out = [
    '# ePahichan',
    '',
    '> ePahichan is a digital signature and digital identity app for Nepal. People apply for a digital signature certificate with their citizenship and a selfie, then sign PDFs from their phone. Organizations add signing and ID checks to their own applications through an API. Certificates are issued by Nepal Certifying Company.',
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
