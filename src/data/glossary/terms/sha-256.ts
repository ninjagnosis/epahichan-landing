import type { Term } from '../types';

const term: Term = {
  slug: 'sha-256',
  term: 'SHA-256',
  full: 'Secure Hash Algorithm 256-bit',
  aka: ['SHA256', 'SHA-2', 'Secure Hash Algorithm 256', 'SHA-256 hash'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'SHA-256 meaning: what it is and how it is used in signatures',
  description: 'SHA-256 turns any data into a fixed 256-bit fingerprint. What it is, why it is used in digital signatures and how it differs from SHA-1 and encryption.',
  short: 'SHA-256 is a hash function that turns any data into a fixed 256-bit fingerprint, written as 64 hexadecimal characters. A one-character change to the data gives a completely different fingerprint.',
  body: [
    'SHA-256 belongs to the SHA-2 family, published by NIST in FIPS 180-4. It is the standard [hash](/glossary/hash) used when a [digital signature](/glossary/digital-signature) is made: the signer does not sign the whole file but its SHA-256 fingerprint.',
    'It is one-way. You can compute the fingerprint from the data, but you cannot rebuild the data from the fingerprint.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'SHA-256 meaning',
      p: [
        'SHA stands for Secure Hash Algorithm, and 256 is the output length in bits. Whether the input is one word or a 500 MB file, the output is always 32 bytes, or 64 characters such as 9f86d081... A hash is not encryption: nothing is hidden and nothing can be decrypted.',
      ],
    },
    {
      id: 'properties',
      h: 'What makes a hash function secure',
      p: [
        'Three properties matter:',
      ],
      list: [
        'Preimage resistance: given a fingerprint, you cannot find an input that produces it.',
        'Second-preimage resistance: given one input, you cannot find a different input with the same fingerprint.',
        'Collision resistance: you cannot find any two inputs with the same fingerprint.',
      ],
    },
    {
      id: 'signatures',
      h: 'How SHA-256 is used in digital signatures',
      p: [
        'The signer computes SHA-256 of the document, then signs that fingerprint with the private key using [RSA](/glossary/rsa) or [ECDSA](/glossary/ecdsa). The checker computes the fingerprint again and compares. If even one byte of the document has changed, the fingerprints differ and the signature fails. That is what makes a signed document [tamper-evident](/glossary/tamper-evident).',
      ],
    },
    {
      id: 'vs-sha1',
      h: 'SHA-256 vs SHA-1 and MD5',
      p: [
        'MD5 and SHA-1 are broken for signing: practical collisions have been shown, so two different documents can be made to share a fingerprint. Browsers and standards no longer accept them in certificates. SHA-256 has no known practical collision attack and is the usual choice. SHA-384 and SHA-512 are longer variants in the same family.',
      ],
    },
    {
      id: 'other',
      h: 'Other uses',
      p: [
        'SHA-256 also checks file downloads, stores password fingerprints (with extra steps), signs API requests with HMAC and links blocks in a blockchain. In each case the idea is the same: a short fingerprint that changes if the data changes.',
      ],
    },
    {
      id: 'ex',
      h: 'A fingerprint in practice',
      p: [
        'Take the sentence Pay Rs 10,000 to Ram. Its SHA-256 fingerprint is a 64-character string. Change 10,000 to 100,000 and the new fingerprint shares nothing recognisable with the first. That is the avalanche effect, and it is why a signed document cannot be quietly edited.',
        'You can compute a fingerprint yourself with the shasum -a 256 command on a Mac or Linux, or certutil -hashfile file SHA256 on Windows. Comparing the result with a value the sender published is a simple way to confirm a download is intact, though only a signature proves who sent it.',
      ],
    },
    {
      id: 'pdf',
      h: 'SHA-256 inside a signed PDF',
      p: [
        'In a PDF signature, the hash covers the whole file except the space reserved for the signature. The signer computes SHA-256 over those bytes and signs the result. A reader repeats the calculation when you open the file.',
        'If anything outside the reserved space changes, such as a single replaced digit in an amount, the new fingerprint differs and the reader reports that the document was modified after signing. The hash does not say what changed or who changed it. It only says the file is not the same.',
      ],
    },
    {
      id: 'choosing',
      h: 'SHA-256 and other SHA-2 sizes',
      p: [
        'SHA-384 and SHA-512 come from the same family with longer outputs. They matter more with stronger keys, such as P-384, where the hash should be at least as strong as the key. For ordinary RSA 2048 or P-256 certificates, SHA-256 is the standard pairing.',
        'SHA-3 is a different family, designed differently, and is available as a backup if a flaw is ever found in SHA-2. None is known. Most signed PDFs today use SHA-256, and a reader will show the algorithm in the signature details.',
      ],
    },
    {
      id: 'history',
      h: 'Why SHA-1 was retired',
      p: [
        'Researchers showed in 2017 that two different PDF files could be built with the same SHA-1 fingerprint. That broke the promise that a fingerprint stands for one document. Certificate authorities and browsers had already moved away from SHA-1 by then, and signing software now defaults to SHA-256.',
        'The lesson for a business is to check the algorithm in old signed documents, because files from the early 2010s may use SHA-1 and deserve a second look before being relied on in a dispute.',
      ],
    },
  ],
  faq: [
    { q: 'What does SHA-256 stand for?', a: 'Secure Hash Algorithm with a 256-bit output.' },
    { q: 'Is SHA-256 encryption?', a: 'No. It is a one-way hash. There is no key and no way to decrypt it.' },
    { q: 'How long is a SHA-256 hash?', a: '256 bits, which is 32 bytes or 64 hexadecimal characters.' },
    { q: 'Is SHA-256 still safe?', a: 'Yes. No practical attack is known against it. SHA-1 and MD5 are the ones to avoid.' },
  ],
  related: ['hash', 'digital-signature', 'rsa', 'ecdsa', 'tamper-evident'],
};

export default term;
