import type { Term } from '../types';

const term: Term = {
  slug: 'certificate-revocation',
  term: 'Certificate revocation',
  aka: ['Revoked certificate', 'Certificate suspension', 'Revocation status'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'Certificate revocation: meaning, reasons, CRL and OCSP',
  description: 'Certificate revocation ends a digital certificate before its expiry date. Why it happens, how CRL and OCSP report it and what it does to past signatures.',
  short: 'Certificate revocation is when a certifying authority declares a digital certificate invalid before its expiry date, usually because the private key was lost, stolen or misused.',
  body: [
    'A certificate normally lasts for the period printed on it. Sometimes that is too long. If a phone is stolen or a key is exposed, someone else could sign in the holder’s name. Revocation is how the [certifying authority](/glossary/certifying-authority) cancels the certificate early and tells the world.',
    'Anyone checking a signature should ask whether the certificate was revoked. There are two standard ways to ask: a downloadable [certificate revocation list](/glossary/crl) and a live query to an [OCSP](/glossary/ocsp) service.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'What does certificate revocation mean',
      p: [
        'Revoking a certificate means the authority adds its serial number to a list of certificates that must no longer be trusted. The certificate file itself is unchanged and still looks fine, because it is only a signed record. The revocation status is published separately, which is why a checker has to look it up.',
        'Revocation is permanent in most cases. A related state, suspension (called certificate hold in RFC 5280), pauses a certificate and can be lifted. Whether an authority offers suspension depends on its policy.',
      ],
    },
    {
      id: 'reasons',
      h: 'Why certificates are revoked',
      p: [
        'RFC 5280 lists standard reason codes. In practice, the common ones are:',
      ],
      list: [
        'Key compromise: the [private key](/glossary/private-key) was lost, stolen or copied.',
        'Change of affiliation: the holder left the company named in the certificate.',
        'Superseded: a new certificate replaced this one.',
        'Cessation of operation: the holder no longer needs it.',
        'CA compromise: the issuing authority’s own key was exposed. This is rare and serious.',
      ],
    },
    {
      id: 'how',
      h: 'How revocation is checked',
      p: [
        'A verifier has two main tools. A CRL is a signed list of revoked serial numbers, published at an address inside the certificate and refreshed on a schedule. OCSP, defined in RFC 6960, lets software ask about one certificate and get a signed answer of good, revoked or unknown.',
      ],
      list: [
        'CRL: one download covers many certificates and works offline for a while, but can be large and out of date until the next release.',
        'OCSP: small, current answers, but needs the service to be online at check time.',
        'OCSP stapling: the signer attaches a recent OCSP answer so the verifier does not have to ask.',
      ],
    },
    {
      id: 'past',
      h: 'What revocation does to signatures already made',
      p: [
        'The key question is when the signature was made. A signature created before the revocation time may still be good, if there is proof of when it was made. That proof is a [trusted timestamp](/glossary/trusted-timestamp). A signature made after revocation is not valid.',
        'If the reason is key compromise and nobody can say when the key was first misused, the authority may set the revocation date earlier, which can put older signatures in doubt. Embedding revocation answers and timestamps inside the file, as in [long-term validation](/glossary/long-term-validation), preserves the evidence.',
      ],
    },
    {
      id: 'vs-expiry',
      h: 'Revocation vs expiry',
      p: [
        'Expiry is planned and printed on the certificate. Revocation is a surprise and recorded elsewhere. An expired certificate needs no list entry: any checker can read the end date. For what expiry means for old documents, read [signature after the certificate expires](/blog/signature-after-certificate-expires).',
      ],
    },
    {
      id: 'what-to-do',
      h: 'What to do if a signing key is lost',
      p: [
        'Tell the authority straight away, using whatever channel it gave you, so the certificate can be revoked. Then request a new one. With ePahichan, the signing key lives in the phone’s secure hardware and needs fingerprint or face to use, which makes misuse harder, but a lost phone should still be reported.',
      ],
    },
    {
      id: 'example',
      h: 'Example: a lost phone and a signed contract',
      p: [
        'A manager loses her phone on Monday. On Tuesday she calls the authority, which revokes her certificate with the reason key compromise. A contract she signed on Friday has a trusted timestamp from Friday, so the reader reports the signature valid at signing. A document dated Wednesday, signed with the same key by someone else, would fail because it falls after the revocation.',
        'The timestamp is the deciding evidence. Without it, the reader cannot say whether Friday’s signature came before or after the problem began.',
      ],
    },
  ],
  faq: [
    { q: 'What is certificate revocation?', a: 'It is the early cancellation of a digital certificate by the authority that issued it, published so that verifiers stop trusting it.' },
    { q: 'What is the difference between CRL and OCSP?', a: 'A CRL is a full list of revoked certificates downloaded periodically. OCSP is a live question about one certificate. Both give the same kind of answer.' },
    { q: 'Are signatures invalid after a certificate is revoked?', a: 'Not necessarily. Signatures made before the revocation time can remain valid when a trusted timestamp proves when they were made.' },
    { q: 'Can a revoked certificate be restored?', a: 'Usually no, so a new certificate is needed. A certificate placed on hold under suspension can be restored if the authority supports it.' },
  ],
  related: ['crl', 'ocsp', 'certifying-authority', 'trusted-timestamp', 'long-term-validation'],
};

export default term;
