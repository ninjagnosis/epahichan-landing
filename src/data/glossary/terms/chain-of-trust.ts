import type { Term } from '../types';

const term: Term = {
  slug: 'chain-of-trust',
  term: 'Chain of trust',
  aka: ['Certificate chain', 'Certification path', 'Trust chain'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'Chain of trust: how certificate chains work',
  description: 'A chain of trust links a signer’s certificate through intermediate certificates to a trusted root. How the chain is built and what breaks it.',
  short: 'A chain of trust is the series of certificates that links a signer’s certificate, step by step, to a root certificate that the checking software already trusts.',
  body: [
    'Nobody can know every signer. Instead, software trusts a short list of root authorities, and those authorities vouch for others. Each certificate in the chain is signed by the one above it. If every link checks out, the signer’s certificate is accepted.',
    'This is the working core of [PKI](/glossary/pki). The same idea secures websites and signed PDFs.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Chain of trust meaning',
      p: [
        'Trust is passed down like a reference. The root says it vouches for an intermediate authority. The intermediate says it vouches for the signer. A person who trusts the root can therefore trust the signer without meeting them.',
      ],
    },
    {
      id: 'links',
      h: 'The links in a chain',
      p: [
        'A typical chain has three levels:',
      ],
      list: [
        'End-entity certificate: the signer’s own [certificate](/glossary/digital-signature-certificate).',
        'Intermediate certificate: belongs to an authority that issues day-to-day certificates. There may be more than one.',
        'Root certificate: the top, self-signed and installed in advance. See [root certificate](/glossary/root-certificate).',
      ],
    },
    {
      id: 'validation',
      h: 'How a chain is checked',
      p: [
        'Software builds the path and then tests every link. It confirms that each signature is correct, that each certificate is inside its dates, that each one above is allowed to issue certificates (a rule in its basic constraints extension), and that none has been [revoked](/glossary/certificate-revocation). If any test fails the whole chain fails.',
      ],
    },
    {
      id: 'why-intermediates',
      h: 'Why roots use intermediates',
      p: [
        'The root key is the most valuable key in the system. It is kept offline, often in a [hardware security module](/glossary/hsm) in a locked room, and used rarely. Day-to-day issuing is done by intermediates. If an intermediate is compromised, the root can revoke it without replacing itself everywhere.',
      ],
    },
    {
      id: 'breaks',
      h: 'What breaks a chain',
      p: [
        'A missing intermediate is the commonest fault: the signer’s software must include it, or the checker cannot build the path. Other causes are an expired link, a revoked link, or a root the checker does not trust. In a signed PDF, the intermediates are usually embedded so that the document can be checked alone. The post [what is a certificate authority](/blog/what-is-a-certificate-authority) covers the roles in plain language.',
      ],
    },
    {
      id: 'example',
      h: 'A worked example',
      p: [
        'Suppose a customer signs a loan agreement. The PDF holds the customer’s certificate and an intermediate certificate. The reader checks the customer’s certificate against the intermediate, the intermediate against a root already in its trust store, and stops there. Three signatures were checked and three date ranges compared.',
        'If the reader lacks the root, it shows the signer as unknown even though every signature is mathematically correct. Adding the root to the trust store, or opening the file in a reader that already has it, fixes the display without touching the document. This is the usual reason a signature looks fine in one program and doubtful in another.',
      ],
    },
    {
      id: 'steps',
      h: 'Step by step: how a reader builds the chain',
      p: [
        'The reader starts with the signer’s certificate and reads its issuer name and the authority key identifier. It looks for a certificate with that subject in the file, then in the device store. It repeats until it reaches a certificate whose issuer is itself.',
        'Then it works downward. It checks the root against the trust store, then verifies each signature from the root down to the signer. At every step it also confirms the dates and that the key usage allows issuing certificates. Only if every step passes is the signer’s certificate called trusted. Each of these steps can fail separately, which is why error messages differ.',
      ],
    },
    {
      id: 'nepal',
      h: 'Chains in Nepal',
      p: [
        'In Nepal, licensed certifying authorities operate under the framework of the [Electronic Transactions Act](/glossary/electronic-transactions-act), with the Office of the Controller of Certification supervising them. The chain for an ePahichan certificate ends at a root that PDF readers must trust, and which roots a given reader trusts is a matter of that reader’s own programme.',
        'If you receive a document and the reader shows an unknown signer, check the issuer name in the certificate against the licensed authorities before deciding anything.',
      ],
    },
  ],
  faq: [
    { q: 'What is a chain of trust in simple words?', a: 'A line of certificates where each is vouched for by the one above, ending at a root that your software trusts.' },
    { q: 'How long is a certificate chain?', a: 'Often two to four certificates: the signer, one or two intermediates and the root.' },
    { q: 'What is a broken chain of trust?', a: 'One where a link is missing, expired, revoked or untrusted, so the signer’s certificate cannot be accepted.' },
    { q: 'Who decides which roots are trusted?', a: 'The makers of the operating system, browser or PDF reader, according to their programmes, and in some settings the organisation running the device.' },
  ],
  related: ['root-certificate', 'x509-certificate', 'pki', 'certifying-authority'],
};

export default term;
