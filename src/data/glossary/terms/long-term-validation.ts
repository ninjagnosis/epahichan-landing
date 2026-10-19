import type { Term } from '../types';

const term: Term = {
  slug: 'long-term-validation',
  term: 'Long-term validation',
  full: 'Long-term validation (LTV)',
  aka: ['LTV', 'LTV signature', 'Long-term signature validation', 'LTA'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'Long-term validation (LTV): keeping signatures verifiable',
  description: 'Long-term validation stores a timestamp, certificate chain and revocation proof in a signed file so it can be verified years later.',
  short: 'Long-term validation (LTV) means storing, inside a signed document, the evidence needed to check its signature later: a trusted timestamp, the certificate chain and the revocation answers.',
  body: [
    'A signature is checked against facts that change. Certificates expire, authorities shut down servers and algorithms weaken. Without extra care, a document that was properly signed in 2026 may show as unverified in 2036. LTV prevents that by capturing the evidence at signing time.',
    'In PDFs this is done with the higher [PAdES](/glossary/pades) levels. The idea applies to any signed file.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Long-term validation meaning',
      p: [
        'Validation is the check that a signature is good. Long-term means that the check can be repeated well after the signer’s certificate has expired. The signed file becomes self-contained: it carries its own proof, so the verifier does not need to reach the original authority.',
      ],
    },
    {
      id: 'ingredients',
      h: 'What an LTV file contains',
      p: [
        'Four items are needed:',
      ],
      list: [
        'The signature and signer [certificate](/glossary/digital-signature-certificate).',
        'The full [chain of trust](/glossary/chain-of-trust) up to the root.',
        'Revocation proof from the time of signing: an [OCSP](/glossary/ocsp) answer or a [CRL](/glossary/crl).',
        'A [trusted timestamp](/glossary/trusted-timestamp) showing the signature existed at that moment.',
      ],
    },
    {
      id: 'why',
      h: 'Why it is needed',
      p: [
        'After a certificate expires, it is no longer possible to ask whether it was revoked in the past, and a plain signature gives no proof of when it was made. With the timestamp and embedded answers, a verifier can show that at the time of signing the certificate was valid and not revoked. That is why a loan agreement or property deed signed today can still be relied on after the certificate has lapsed. A plain-language version is in [signature after the certificate expires](/blog/signature-after-certificate-expires).',
      ],
    },
    {
      id: 'lta',
      h: 'LTV and archive timestamps',
      p: [
        'Even the embedded proof ages. The hash or key algorithm may weaken. PAdES-LTA adds a document timestamp that can be renewed every few years with stronger algorithms, extending the proof indefinitely. Not every document needs this, but records kept for decades do.',
      ],
    },
    {
      id: 'check',
      h: 'How to tell if a file is LTV-enabled',
      p: [
        'In a PDF reader, the signature panel often shows a line such as LTV enabled. If it says the signature is valid but not LTV-enabled, it depends on live checks. See signature validation for how readers decide.',
      ],
    },
    {
      id: 'ex',
      h: 'Example: a loan agreement checked ten years later',
      p: [
        'A bank signs a loan agreement in 2026 using a certificate that expires in 2028. In 2036 a court asks whether the signature was valid when made. With a plain signature, the bank would need the authority’s old revocation records, which may no longer exist.',
        'With an LTV file, the timestamp from 2026, the certificate chain and the revocation answers are inside the PDF. The reader shows that the certificate was valid and unrevoked at the time. The bank can answer the question without asking anyone for archived records.',
      ],
    },
    {
      id: 'when',
      h: 'When to use long-term validation',
      p: [
        'Use it for documents that must stay provable longer than the certificate on them: loan agreements, property papers, employment contracts and anything subject to legal retention. For short-lived items, such as a delivery note kept for a few months, a basic signature is enough.',
        'The cost is small. The file grows by a few kilobytes for the embedded answers and a timestamp, and the signing service needs to fetch revocation data at signing time. The Signing API and app produce files for the signing service’s configured level, so check what your files contain by opening the signature panel before you rely on them years later.',
      ],
    },
    {
      id: 'steps',
      h: 'Step by step: how LTV is built at signing',
      p: [
        'The signing service computes the document hash and signs it. It then asks a time-stamping authority to timestamp the signature. Next, it collects the certificate chain and asks for OCSP answers or downloads CRLs covering every certificate in the chain. It places these in the document security store and, for the archive level, adds a document timestamp over the whole thing.',
        'If any of these steps is skipped, the file may still verify today but not later. Ask your signing provider to confirm which steps it performs at signing time.',
      ],
    },
  ],
  faq: [
    { q: 'What is LTV in digital signatures?', a: 'Long-term validation: embedding timestamp, certificate chain and revocation proof in the signed file so it can be verified later.' },
    { q: 'Does a signature become invalid when the certificate expires?', a: 'Not if the signature was made while the certificate was valid and carries proof of the time. LTV preserves that proof.' },
    { q: 'Which PAdES levels are LTV?', a: 'PAdES-LT and PAdES-LTA. PAdES-T has a timestamp but not the embedded revocation proof.' },
    { q: 'Can I add LTV to a document later?', a: 'Sometimes, if it is done while the evidence is still obtainable. After the certificate has expired and revocation data is gone, it is too late.' },
  ],
  related: ['pades', 'trusted-timestamp', 'certificate-revocation', 'signature-validation'],
};

export default term;
