// ePahichan's own Organization data, read by the kit through config/kit.ts.
// Self-contained (reads only config/site) so there is no import cycle through the kit.
import { ADDRESS, CONTACT_EMAIL, CONTACT_PHONE_JSONLD, PARENT_COMPANY_ID, PARENT_COMPANY_NAME, PARENT_COMPANY_URL, SITE_NAME, SITE_URL } from '../config/site';

const ORG_ID = `${SITE_URL}/#organization`;
const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`);

export function orgJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: abs('/brand/epahichan-mark-512.png'),
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_JSONLD,
    address: { '@type': 'PostalAddress', addressLocality: ADDRESS.locality, addressCountry: ADDRESS.country },
    contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', telephone: CONTACT_PHONE_JSONLD, email: CONTACT_EMAIL, areaServed: 'NP', availableLanguage: ['en', 'ne'] },
    parentOrganization: { '@type': 'Organization', '@id': PARENT_COMPANY_ID, name: PARENT_COMPANY_NAME, url: PARENT_COMPANY_URL },
  };
}

