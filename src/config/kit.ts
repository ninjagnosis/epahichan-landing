// What the site-kit package reads from this site beyond the constants in
// config/site.ts: header, share cards, llms.txt and wording. The footer and the
// blog pages are the site's own.
import type { SiteKit } from '@ninjainfosys/site-kit/contract';
import fontInter from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
import font600 from '@fontsource/poppins/files/poppins-latin-600-normal.woff2?url';
import { products } from '../data/products';
import { solutions } from '../data/solutions';
import { orgJsonLd } from '../lib/page-meta';
import { APP_URL, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, DEVELOPERS_URL, SITE_URL } from './site';

export const kit: SiteKit = {
  blog: {
    label: 'Insights',
    name: 'ePahichan insights',
    description: '',
    rssDescription: 'Guides on digital signatures, identity and signing documents in Nepal.',
    pageDescription: () => '',
    tagDescription: () => '',
    about: 'Digital signatures in Nepal',
    imageCredit: 'ePahichan',
  },
  seo: {
    hreflang: 'en-np',
    ogLocale: 'en_US',
    logo: '/brand/epahichan-mark-512.png',
    orgJsonLd,
  },
  head: {
    preloadFonts: [fontInter, font600],
    icons: [
      { rel: 'icon', href: '/brand/epahichan-mark.svg', type: 'image/svg+xml' },
      { rel: 'icon', href: '/brand/epahichan-mark-32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'apple-touch-icon', href: '/brand/epahichan-mark-192.png' },
    ],
  },
  header: {
    homeLabel: 'ePahichan home',
    logo: { kind: 'mark', light: '/brand/epahichan-mark.svg', dark: '', alt: '', width: 40, height: 36, text: 'ePahichan' },
    utility: {
      lead: { href: '/how-signing-works', text: 'Make a signature in your browser' },
      links: [
        { href: DEVELOPERS_URL, label: 'Developers' },
        { href: '/contact', label: 'Contact' },
        { href: APP_URL, label: 'Open the app' },
      ],
    },
    groups: [
      {
        id: 'products',
        label: 'Products',
        base: '/products',
        links: products.map((p) => ({ href: `/products/${p.slug}`, label: p.name })),
        feature: { title: 'Build signing into your application', href: DEVELOPERS_URL, cta: 'Developer documentation' },
      },
      {
        id: 'solutions',
        label: 'Solutions',
        base: '/solutions',
        links: solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.name })),
        feature: { title: 'Make a digital signature yourself', href: '/how-signing-works', cta: 'Try it in your browser' },
      },
    ],
    plain: [
      { href: '/how-signing-works', label: 'How it works' },
      { href: '/blog', label: 'Insights' },
      { href: '/contact', label: 'Contact' },
    ],
    action: { href: APP_URL, label: 'Open the app' },
    mobileLinks: [
      { href: DEVELOPERS_URL, label: 'Developers' },
      { href: '/privacy', label: 'Privacy' },
    ],
    mobileCall: { href: '/contact', label: 'Contact us' },
  },
  cta: {
    heading: 'Get your digital signature certificate',
    actions: [
      { href: APP_URL, label: 'Open the app', class: 'btn-light' },
      { href: '/contact', label: 'Talk to us', class: 'btn-secondary' },
    ],
  },
  og: {
    background: '#6F0006',
    ink: '#FFFFFF',
    muted: '#F2C9CB',
    mark: { file: 'brand/epahichan-mark-192.png', png: true, width: 96, height: 87 },
    pages: () => [
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
    ],
  },
  glossary: {
    name: 'ePahichan glossary of digital signature and identity terms',
    ogTitle: 'Digital signature glossary',
    indexTitle: 'Glossary: digital signature, certificate and key terms explained',
    indexDescription: 'Plain definitions of the terms behind digital signatures in Nepal: certificate, certifying authority, private key, hash, timestamp, KYC and NIN.',
  },
  llms: {
    description: 'ePahichan is a digital signature and digital identity app for Nepal. People apply for a digital signature certificate with their citizenship and a selfie, then sign PDFs from their phone. Organizations add signing and ID checks to their own applications through an API. Certificates are issued by Nepal Certifying Company.',
    facts: [`- Contact: ${CONTACT_EMAIL}, ${CONTACT_PHONE_DISPLAY}`],
    before: () => [
      { title: 'Products', items: products.map((p) => `- [${p.name}](${SITE_URL}/products/${p.slug}): ${p.short}`) },
      { title: 'Solutions', items: solutions.map((s) => `- [${s.name}](${SITE_URL}/solutions/${s.slug}): ${s.short}`) },
    ],
    after: () => [
      {
        title: 'Company',
        items: [
          `- [Try a signature in your browser](${SITE_URL}/how-signing-works)`,
          `- [Glossary](${SITE_URL}/glossary)`,
          `- [Contact](${SITE_URL}/contact)`,
          `- [Privacy](${SITE_URL}/privacy)`,
          `- [Terms](${SITE_URL}/terms)`,
        ],
      },
    ],
  },
};
