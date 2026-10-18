import type { PackCopy } from '../types';

// Page-level text that names Nepal, its law or its identity documents.
export const copy: PackCopy = {
  home: {
    title: '%%brand%%: digital signatures for Nepal',
    description: 'Get a digital signature certificate with your citizenship and a selfie, sign PDFs from your phone, or add signing to your application with the %%brand%% API.',
    ogTitle: 'A digital signature for every Nepali',
  },
  hero: {
    title: 'A digital signature for every Nepali',
    sub: 'Apply with your citizenship and a selfie. Sign PDFs from your phone. Anyone can check the signature.',
    exampleLabel: 'Example: a loan agreement signed with %%brand%%',
    exampleTitle: 'Loan agreement',
    exampleLines: [
      'Sita Sharma borrows Rs 5,00,000 from the lender and repays it in 36 monthly instalments.',
      'Both parties have read this agreement and sign it below.',
    ],
    exampleSigner: 'Sita Sharma',
    exampleRole: 'borrower',
    exampleValid: 'Signed with %%brand%%. Signature valid.',
  },
  trust: {
    heading: 'Why a signature holds up',
    points: [
      { icon: 'scale', h: 'Recognised by Nepali law', p: 'Section 5 of the Electronic Transactions Act, 2063 gives a digital signature legal validity where a signature is required, if it is made by the procedures in the Act and its Rules.' },
      { icon: 'badge-check', h: 'Certificates from %%caShort%%', p: 'Each signature carries the signer’s own certificate, issued by %%ca%%, the licensed certifying authority.' },
      { icon: 'file-lock', h: 'Changes show', p: 'Change one character of a signed PDF and the signature stops matching. Anyone can check, without asking us.' },
    ],
    note: 'Some documents are outside the Act, including deeds that transfer title to land, wills and negotiable instruments. A digital signature does not change that.',
  },
  law: {
    heading: 'What the law says',
    paragraph: 'Section 5 of the Electronic Transactions Act, 2063 gives a digital signature legal validity where the law requires a signature, if the signature is made by the procedures in the Act and the Rules made under it. The Act does not cover every document: deeds that transfer title to land, wills, negotiable instruments and powers of attorney are excluded.',
  },
  blog: {
    description: 'Guides on digital signatures in Nepal: how they work, what the law says, how to verify a signed PDF and how to add signing to your application.',
    pageDescription: 'Older %%brand%% guides on digital signatures, identity and signing documents in Nepal. Page {n} of {last}.',
    tagDescription: '%%brand%% articles about {label}: practical guides on digital signatures, identity and signing documents in Nepal.',
  },
  glossary: {
    description: 'Plain definitions of the terms behind digital signatures in Nepal: certificate, certifying authority, private key, hash, timestamp, KYC and NIN.',
  },
  notFound: {
    description: 'This page does not exist on %%siteHost%%. Try the home page, the products or the insights, or call us on %%companyPhone%%.',
  },
  contact: {
    description: 'Contact the %%brand%% team in %%city%% by phone or email about the app, the signing API or the ID check API.',
    developerApis: 'the signing API and the ID check API',
  },
  rss: { description: 'Guides on digital signatures, identity and signing documents in Nepal.' },
  llms: {
    summary:
      '%%brand%% is a digital signature and digital identity app for Nepal. People apply for a digital signature certificate with their citizenship and a selfie, then sign PDFs from their phone. Organizations add signing and ID checks to their own applications through an API. Certificates are issued by %%ca%%.',
  },
  seo: { aboutPosts: 'Digital signatures in Nepal' },
  tagAcronyms: ['nin'],
};
