import type { Term } from '../types';

const term: Term = {
  slug: 'root-certificate',
  term: 'Root certificate',
  aka: ['Root CA certificate', 'Trust anchor', 'Root CA'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'Root certificate: meaning, trust anchors and how they work',
  description: 'A root certificate is the self-signed certificate at the top of a chain of trust. Why software trusts it and what happens if it is compromised.',
  short: 'A root certificate is the self-signed certificate at the top of a chain of trust. Software trusts it because it was installed in advance, not because anyone else vouches for it.',
  body: [
    'Every [chain of trust](/glossary/chain-of-trust) has to end somewhere. The end is the root certificate. It is signed by its own key, so it cannot prove itself. Trust comes from outside: the operating system, browser or PDF reader ships with a list of roots that its maker has decided to trust.',
    'Roots are also called trust anchors. Everything below them, intermediate and signer certificates, is trusted only because a path leads back to one.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Root certificate meaning',
      p: [
        'A root certificate is an [X.509 certificate](/glossary/x509-certificate) where the issuer and the subject are the same. The authority signs its own certificate with its own [private key](/glossary/private-key). That is legal and normal for a root. For any other certificate, being self-signed is a warning, as explained in [self-signed certificate](/glossary/self-signed-certificate).',
      ],
    },
    {
      id: 'trust-store',
      h: 'Where roots are kept: trust stores',
      p: [
        'The list of trusted roots is the trust store. Apple, Microsoft, Google, Mozilla and Adobe each run their own programmes with audit and policy requirements. A root must pass audits to be admitted, and the maker can remove it if the authority breaks the rules. A root accepted by one store is not automatically accepted by another, which is why a certificate can work in one PDF reader and show as unknown in another.',
      ],
    },
    {
      id: 'national',
      h: 'Root certificates and national authorities',
      p: [
        'Countries that license certifying authorities often have a national root. In Nepal, the Office of the Controller of Certification oversees licensed authorities under the [Electronic Transactions Act](/glossary/electronic-transactions-act); see [OCC Nepal](/glossary/occ-nepal). Which roots a given PDF reader trusts is a separate question from legal recognition: the reader’s own trust store decides what it shows as verified.',
      ],
    },
    {
      id: 'security',
      h: 'Protecting a root key',
      p: [
        'Because every certificate below depends on the root key, roots are issued rarely and the key is kept offline in a [hardware security module](/glossary/hsm). A ceremony with several people and a written script is used each time it is touched. If a root key is compromised, every certificate beneath it has to be replaced, so the cost of failure is high.',
      ],
    },
    {
      id: 'risks',
      h: 'Risks of installing roots',
      p: [
        'Adding a root to a device is a strong act. Anything the root vouches for, including certificates for websites, will then be accepted without warning. Companies sometimes install their own root on staff devices to inspect traffic, which is legitimate inside the company and a risk anywhere else.',
        'Check the fingerprint of a root against a value published by the authority through a second channel before installing it. Never install a root because an email, a pop-up or a stranger asked you to. On shared computers, ask the administrator, who controls the trust store.',
      ],
    },
    {
      id: 'ex',
      h: 'Example: a signature that shows as unknown',
      p: [
        'A supplier emails a signed PDF. On the finance team’s older laptop, the reader shows the signer as unknown. On a manager’s newer laptop the same file shows as valid. The file is identical. The difference is that the manager’s system has the issuing authority’s root in its trust store and the older one does not.',
        'The fix is to update the operating system or reader, or to import the authority’s root after confirming its fingerprint through a second channel. It is not to ask the supplier to sign again. This is also why a business that receives many signed documents should test its readers against the authorities it expects.',
      ],
    },
    {
      id: 'fingerprint',
      h: 'Checking a root’s fingerprint',
      p: [
        'A fingerprint is the hash of the certificate, shown as a string of hexadecimal pairs. An authority publishes its root fingerprints on its own website and in its policy documents. Comparing the fingerprint on your device with the one published gives confidence that the root has not been swapped.',
        'The comparison should use a channel other than the one that gave you the root. If both come from the same compromised page, matching fingerprints prove nothing.',
      ],
    },
  ],
  faq: [
    { q: 'What is a root certificate?', a: 'The top certificate in a chain, signed by itself and installed in software ahead of time as a trusted starting point.' },
    { q: 'Why is a root certificate self-signed?', a: 'There is no authority above it. Its trust comes from being included in a trust store, not from another signature.' },
    { q: 'Should I install a root certificate someone sends me?', a: 'Only if you are sure of the source. Installing a root makes your device trust everything it vouches for.' },
    { q: 'Do root certificates expire?', a: 'Yes, but they last much longer than signer certificates, often ten to twenty years or more.' },
  ],
  related: ['chain-of-trust', 'self-signed-certificate', 'certifying-authority', 'pki'],
};

export default term;
