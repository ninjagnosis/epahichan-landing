import type { Term } from '../types';

const term: Term = {
  slug: 'crl',
  term: 'CRL',
  full: 'Certificate Revocation List',
  aka: ['Certificate revocation list', 'Revocation list'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'CRL meaning: what a Certificate Revocation List is',
  description: 'A CRL is a signed list of certificates a certifying authority has revoked. What it contains, how often it updates and how it differs from OCSP.',
  short: 'A CRL (Certificate Revocation List) is a signed list, published by a certifying authority, of the serial numbers of certificates it has revoked and that should no longer be trusted.',
  body: [
    'When a signature is checked, the software has to know whether the signer’s certificate is still good. The CRL is the older and simpler answer: the authority publishes one file listing every certificate it has cancelled, and checkers download it. The format is defined in RFC 5280.',
    'It is one half of [certificate revocation](/glossary/certificate-revocation). The other half is the live service [OCSP](/glossary/ocsp).',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'CRL full form and meaning',
      p: [
        'CRL stands for Certificate Revocation List. Each entry gives a certificate serial number, the date it was revoked and, optionally, a reason code such as key compromise. The list is signed by the authority, so a forged list is detected, and it carries two dates: when it was issued and when the next one is due.',
      ],
    },
    {
      id: 'how',
      h: 'How a CRL works',
      p: [
        'The steps are short:',
      ],
      list: [
        'The [certificate](/glossary/x509-certificate) holds a CRL distribution point, which is a web address.',
        'The checker downloads the list from that address and verifies the authority’s signature on it.',
        'It searches for the certificate’s serial number. If found, the certificate is revoked.',
        'It keeps the list until the next-update time, then fetches a new one.',
      ],
    },
    {
      id: 'limits',
      h: 'Limits of CRLs',
      p: [
        'A CRL is only as fresh as its last release. If a certificate is revoked an hour after the list is published, checkers will not know until the next release, which might be a day later. Large authorities have long lists, so downloads can be slow. Delta CRLs publish only the changes since a base list to reduce that cost.',
        'Where freshness matters, the verifier uses OCSP or embeds both kinds of proof in the file, as in [long-term validation](/glossary/long-term-validation).',
      ],
    },
    {
      id: 'vs-ocsp',
      h: 'CRL vs OCSP',
      p: [
        'A CRL is a list you download and search yourself. OCSP is a question to a server about a single certificate. Lists work offline and reveal nothing about which certificate you care about. OCSP gives faster, smaller answers but depends on the server being reachable. Many systems try one and fall back to the other.',
      ],
    },
    {
      id: 'delta',
      h: 'Delta CRLs and size',
      p: [
        'A full CRL grows as more certificates are revoked, because an entry stays until the certificate would have expired anyway. Large authorities therefore sometimes publish a base list plus smaller delta lists that carry only the changes since the base. A checker needs both to be current.',
        'The list also names its issuer and a number that rises with every release, which lets software notice a missing or replayed list. Software that cannot download a list has to choose between failing the check and carrying on with an older copy. Strict systems fail, and that choice should be written into the policy of any business that validates signatures at volume.',
      ],
    },
    {
      id: 'loan',
      h: 'Example: checking a loan agreement signed last month',
      p: [
        'A bank officer opens a PDF loan agreement that the borrower signed a month ago. The reader finds the CRL address inside the signer’s certificate, downloads the list and looks for the certificate’s serial number. It is not there, so the certificate was not revoked when the list was published. If the officer’s computer is offline, the reader may use a copy it saved earlier, and it will say so.',
        'Now suppose the borrower reported a lost phone yesterday and the authority revoked the certificate this morning. A signature made last month is still judged by the revocation time against the signing time. With a trusted timestamp inside the file, the signature stays good. Without one, the reader cannot show it came before the revocation, and may warn. The CRL tells you what happened. The timestamp tells you when.',
      ],
    },
    {
      id: 'example2',
      h: 'Reading a CRL',
      p: [
        'A CRL can be opened with standard tools. It shows the issuer, a this-update time, a next-update time, a list of revoked serial numbers with dates and reasons, and the issuer’s signature. RFC 5280 calls the issue date thisUpdate and the next scheduled release nextUpdate. The next-update field is a promise that a fresh list will appear by then, not a guarantee that nothing changed in between.',
        'Some tools label the issue date differently, for example as effective date, so do not be surprised if the names vary between programs.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of CRL?', a: 'Certificate Revocation List.' },
    { q: 'Who publishes a CRL?', a: 'The certifying authority that issued the certificates. Each authority publishes its own list.' },
    { q: 'How often is a CRL updated?', a: 'It depends on the authority’s policy. The list states its own next-update time, often within a day or a few days.' },
    { q: 'Does a CRL contain private information?', a: 'It holds serial numbers, dates and reason codes, not the holder’s identity details.' },
  ],
  related: ['certificate-revocation', 'ocsp', 'x509-certificate', 'certifying-authority'],
};

export default term;
