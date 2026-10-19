import type { Term } from '../types';

const term: Term = {
  slug: 'rsa',
  term: 'RSA',
  full: 'Rivest-Shamir-Adleman',
  aka: ['RSA algorithm', 'RSA encryption', 'RSA 2048', 'RSA signature'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'RSA algorithm: what it is, key sizes and RSA vs ECDSA',
  description: 'RSA is a public-key algorithm for encryption and digital signatures. How it works, which key sizes are safe and how it compares with ECDSA.',
  short: 'RSA is a public-key algorithm, named after Rivest, Shamir and Adleman, used for digital signatures and encryption. Its security rests on how hard it is to factor the product of two very large prime numbers.',
  body: [
    'Published in 1977, RSA was the first widely used form of [asymmetric cryptography](/glossary/asymmetric-cryptography). It is still found in many certificates and signed documents, because nearly every system supports it.',
    'An RSA [key pair](/glossary/key-pair) can sign a document hash and the [public key](/glossary/public-key) checks it. It is one of two algorithms most signers choose between; the other is [ECDSA](/glossary/ecdsa).',
  ],
  sections: [
    {
      id: 'how',
      h: 'How RSA works in simple terms',
      p: [
        'Multiplying two huge prime numbers is easy. Starting from the product and finding the two primes is not. RSA builds the public key from the product and keeps the primes inside the private key. Anyone can use the product to check a signature or encrypt a message, but only the holder of the primes can sign or decrypt.',
        'You do not need the maths to use it, but it explains why key size matters: a bigger product is harder to factor.',
      ],
    },
    {
      id: 'sizes',
      h: 'RSA key sizes',
      p: [
        'Key size is the length of the product in bits. Guidance from bodies such as NIST treats these as follows:',
      ],
      list: [
        '1024 bits: no longer considered safe.',
        '2048 bits: the usual minimum today, giving roughly 112 bits of security.',
        '3072 bits: roughly 128 bits of security, preferred where signatures must hold for many years.',
        '4096 bits: used by some authorities for root keys, slower to use.',
      ],
    },
    {
      id: 'signing',
      h: 'RSA in digital signatures',
      p: [
        'A signature is made on the [hash](/glossary/hash) of the document, not the whole file. The algorithm name in a certificate often reads sha256WithRSAEncryption, meaning [SHA-256](/glossary/sha-256) is the hash and RSA applies the private key to it. Padding schemes, PKCS #1 v1.5 and the newer PSS, add structure around the hash before signing.',
      ],
    },
    {
      id: 'vs-ecdsa',
      h: 'RSA vs ECDSA',
      p: [
        'ECDSA gives the same strength with much smaller keys, so signing is faster and files are smaller. A 256-bit elliptic curve key is roughly as strong as a 3072-bit RSA key. RSA is slower to sign with large keys but simple and universally supported, and its verification is fast. Neither is broken. Choose by what the receiving systems accept.',
      ],
    },
    {
      id: 'limits',
      h: 'Limits and good practice',
      p: [
        'RSA needs a good source of randomness when keys are made, and padding that is applied the right way. Poorly generated keys have been found in the wild with shared prime factors, which lets an attacker recover them. Use keys made by well-reviewed software or hardware rather than home-made code.',
        'A large enough quantum computer running Shor’s algorithm could break RSA at any key size. Standards bodies have published post-quantum replacements, and authorities will move to them gradually. For documents that must stay valid for decades, [long-term validation](/glossary/long-term-validation) and renewable timestamps matter as much as the key size you start with.',
      ],
    },
    {
      id: 'compare-ex',
      h: 'Reading the algorithm in a certificate',
      p: [
        'Open a certificate in a PDF reader and look for the signature algorithm. A value such as sha256WithRSAEncryption tells you the issuer signed with RSA over a SHA-256 hash. The public key section shows the RSA modulus size, such as 2048 bits.',
        'If you see sha1WithRSAEncryption, treat it with suspicion, because SHA-1 is no longer accepted for new certificates. If you see a 1024-bit key, the certificate is old and should not be relied on. These two checks take a minute and catch most weak certificates.',
      ],
    },
    {
      id: 'example',
      h: 'Example: choosing a key size for a business',
      p: [
        'A company is setting up signing for staff contracts that will be kept for ten years. Using NIST guidance, 2048 bits is acceptable for now, and 3072 bits gives more margin for documents that will be relied on later. The company picks 3072 for the contracts and 2048 for short-lived internal approvals.',
        'The cost of the larger key is a slightly slower signing step, which no person will notice. The cost of choosing too small is a signature that may need to be redone.',
      ],
    },
  ],
  faq: [
    { q: 'What does RSA stand for?', a: 'The initials of Ron Rivest, Adi Shamir and Leonard Adleman, who described it in 1977.' },
    { q: 'Is RSA 2048 still secure?', a: 'Yes for current use. It is the common minimum. Longer keys are advised where signatures must stay trustworthy for a long time.' },
    { q: 'Is RSA a hash?', a: 'No. A hash such as SHA-256 makes a fingerprint of data. RSA is a key-based algorithm that signs or encrypts.' },
    { q: 'Is RSA symmetric or asymmetric?', a: 'Asymmetric. It uses a public key and a private key.' },
  ],
  related: ['ecdsa', 'asymmetric-cryptography', 'key-pair', 'sha-256'],
};

export default term;
