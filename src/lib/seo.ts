import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONE_JSONLD, LOCALES, PARENT_COMPANY, SITE_NAME, SITE_URL } from '../config/site';
import { content } from '../jurisdictions';

/** The one URL a page is known by: lowercase, no query, no .html, no trailing slash except root. */
export function canonicalFor(path: string): string {
  let p = (path || '/').split(/[?#]/)[0].toLowerCase();
  p = p.replace(/\.html$/, '').replace(/\/index$/, '/');
  if (p !== '/') p = p.replace(/\/+$/, '');
  if (!p.startsWith('/')) p = `/${p}`;
  return p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`;
}

export const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`);

export function titleFor(page?: string): string {
  if (!page || page === SITE_NAME) return SITE_NAME;
  return `${page} · ${SITE_NAME}`;
}

const ORG_ID = `${SITE_URL}/#organization`;

export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: abs('/brand/icon-512.png'),
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_JSONLD,
    address: { '@type': 'PostalAddress', addressLocality: ADDRESS.locality, addressCountry: ADDRESS.country },
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', telephone: CONTACT_PHONE_JSONLD, email: CONTACT_EMAIL, areaServed: ADDRESS.country, availableLanguage: LOCALES.supported },
    ...(PARENT_COMPANY ? { parentOrganization: { '@type': 'Organization', '@id': PARENT_COMPANY.id, name: PARENT_COMPANY.name, url: PARENT_COMPANY.url } } : {}),
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: LOCALES.default,
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const all = [{ name: 'Home', path: '/' }, ...items];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: canonicalFor(it.path),
    })),
  };
}

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
    areaServed: { '@type': 'Country', name: ADDRESS.countryName },
    inLanguage: LOCALES.default,
    ...(p.seoTitle ? { alternateName: p.seoTitle } : {}),
    ...(p.gets?.length ? { featureList: p.gets } : {}),
    provider: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/** FAQ markup for questions shown on the page (never for hidden text). */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/** A solution page: the service the brand provides to one kind of organization. */
export function serviceJsonLd(s: { slug: string; name: string; description: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Digital signatures for ${s.name.toLowerCase()}`,
    serviceType: 'Digital signature and document signing',
    description: s.description,
    url: canonicalFor(`/solutions/${s.slug}`),
    areaServed: { '@type': 'Country', name: ADDRESS.countryName },
    audience: { '@type': 'BusinessAudience', name: s.name },
    provider: { '@id': ORG_ID },
  };
}

const ymd = (d: Date) => d.toISOString().slice(0, 10);

export function articleJsonLd(post: {
  slug: string;
  title: string;
  description: string;
  date: Date;
  updated?: Date;
  image: string;
  tags?: string[];
  words?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: ymd(post.date),
    dateModified: ymd(post.updated ?? post.date),
    image: abs(post.image),
    url: canonicalFor(`/blog/${post.slug}`),
    mainEntityOfPage: canonicalFor(`/blog/${post.slug}`),
    author: { '@type': 'Organization', '@id': ORG_ID, name: SITE_NAME },
    publisher: { '@id': ORG_ID },
    inLanguage: LOCALES.default,
    ...(post.tags?.length ? { keywords: post.tags.map((t) => t.replace(/-/g, ' ')).join(', '), articleSection: post.tags[0].replace(/-/g, ' ') } : {}),
    ...(post.words ? { wordCount: post.words } : {}),
    about: { '@type': 'Thing', name: content.copy.seo.aboutPosts },
  };
}

/** The glossary as a set of defined terms. */
export function definedTermSetJsonLd(terms: { slug: string; term: string; short: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${SITE_URL}/glossary#set`,
    name: `${SITE_NAME} glossary of digital signature and identity terms`,
    url: canonicalFor('/glossary'),
    hasDefinedTerm: terms.map((t) => ({ '@type': 'DefinedTerm', name: t.term, description: t.short, url: canonicalFor(`/glossary/${t.slug}`) })),
  };
}

/** One glossary term. */
export function definedTermJsonLd(t: { slug: string; term: string; full?: string; short: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: t.term,
    ...(t.full ? { alternateName: t.full } : {}),
    description: t.short,
    url: canonicalFor(`/glossary/${t.slug}`),
    inDefinedTermSet: `${SITE_URL}/glossary#set`,
  };
}
