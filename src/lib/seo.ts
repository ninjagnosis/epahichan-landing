// Structured data. The generic builders live in the kit, the Organization data
// in lib/page-meta.ts; the product and service markup is ePahichan's own.
import { SITE_NAME } from '../config/site';
import { ORG_ID, canonicalFor } from '@ninjainfosys/site-kit/lib/seo';

export * from '@ninjainfosys/site-kit/lib/seo';

/** No `offers`: the site carries no prices. */
export function softwareJsonLd(p: { slug: string; name: string; short: string; seoTitle?: string; gets?: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: p.name.startsWith(SITE_NAME) ? p.name : `${SITE_NAME} ${p.name}`,
    description: p.short,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, Android, iOS',
    url: canonicalFor(`/products/${p.slug}`),
    areaServed: { '@type': 'Country', name: 'Nepal' },
    inLanguage: 'en',
    ...(p.seoTitle ? { alternateName: p.seoTitle } : {}),
    ...(p.gets?.length ? { featureList: p.gets } : {}),
    provider: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/** A solution page: the service ePahichan provides to one kind of organization. */
export function serviceJsonLd(s: { slug: string; name: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Digital signatures for ${s.name.toLowerCase()}`,
    serviceType: 'Digital signature and document signing',
    description: s.description,
    url: canonicalFor(`/solutions/${s.slug}`),
    areaServed: { '@type': 'Country', name: 'Nepal' },
    audience: { '@type': 'BusinessAudience', name: s.name },
    provider: { '@id': ORG_ID },
  };
}

