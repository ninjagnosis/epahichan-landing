import type { Term } from '../types';

const term: Term = {
  slug: 'ecdsa',
  term: 'ECDSA',
  full: 'Elliptic Curve Digital Signature Algorithm',
  aka: ['Elliptic curve digital signature algorithm', 'Elliptic curve cryptography', 'ECC', 'P-256'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'ECDSA meaning: Elliptic Curve Digital Signature Algorithm',
  description: 'ECDSA is a digital signature algorithm built on elliptic curves. How it works, common curves like P-256 and how it compares with RSA.',
  short: 'ECDSA (Elliptic Curve Digital Signature Algorithm) is a way of making and checking digital signatures using keys based on elliptic curves, which are much shorter than RSA keys for the same strength.',
  body: [
    'ECDSA is the signature form of elliptic curve cryptography. Like [RSA](/glossary/rsa), it uses a [key pair](/glossary/key-pair): a private key signs a [hash](/glossary/hash) of the document and the matching public key checks it.',
    'It is common in phones and tokens because short keys and quick signing suit small chips. The curve most often used is NIST P-256, also called secp256r1 or prime256v1.',
  ],
  sections: [
    {
      id: 'how',
      h: 'How ECDSA works',
      p: [
        'An elliptic curve is a fixed mathematical curve. A private key is a large random number. The public key is a point on the curve, found by repeating a curve operation that number of times. Going forward is quick. Working backwards from the point to the number is the hard problem that protects the key.',
        'To sign, the signer picks a fresh random number for each signature and combines it with the private key and the hash. That random number must never be reused or predictable, or the private key can leak. Good implementations take care of this, and hardware such as a [secure element](/glossary/secure-element) does it inside the chip.',
      ],
    },
    {
      id: 'curves',
      h: 'Common curves and key sizes',
      p: [
        'Roughly equal strengths, by NIST guidance:',
      ],
      list: [
        'P-256: 256-bit key, about 128 bits of security, same as RSA 3072.',
        'P-384: 384-bit key, about 192 bits, used for higher assurance.',
        'P-521: 521-bit key, about 256 bits, less common.',
      ],
    },
    {
      id: 'vs-rsa',
      h: 'ECDSA vs RSA',
      p: [
        'Keys and signatures are smaller, so certificates and signed PDFs are lighter and signing is faster on small devices. The trade-off is that older software may not support elliptic curves, and a poor random number source is a bigger risk. Many authorities issue RSA certificates for wide compatibility and ECDSA where the systems are known. See [asymmetric cryptography](/glossary/asymmetric-cryptography) for the wider picture.',
      ],
    },
    {
      id: 'in-certs',
      h: 'ECDSA in certificates',
      p: [
        'In an [X.509 certificate](/glossary/x509-certificate) it appears as the signature algorithm, for example ecdsa-with-SHA256, and as the key type in the subject public key field. The hash is usually [SHA-256](/glossary/sha-256) for P-256.',
      ],
    },
    {
      id: 'limits',
      h: 'Limits and good practice',
      p: [
        'ECDSA fails badly if the random number used in one signature is repeated or guessable: an attacker who sees two such signatures can compute the private key. This has happened in real products. Libraries now use deterministic nonces (RFC 6979) or hardware generators to remove the risk.',
        'Another practical point is compatibility. Some older PDF readers and smart cards handle only RSA, so an ECDSA certificate may show as unsupported there. If your counterparties are mixed, ask which algorithms they accept before choosing.',
      ],
    },
    {
      id: 'read',
      h: 'Reading ECDSA in a certificate',
      p: [
        'In the certificate details, an ECDSA key shows as an EC public key with a named curve, such as prime256v1, which is P-256. The signature algorithm reads ecdsa-with-SHA256.',
        'The signature itself is two numbers, usually about 70 bytes in total for P-256, against about 256 bytes for RSA-2048. For a PDF with several signatures, or a phone sending signatures over a weak network, the smaller size is a real saving. For a single signed contract it hardly matters.',
      ],
    },
    {
      id: 'when',
      h: 'Choosing between ECDSA and RSA',
      p: [
        'Choose by what your counterparties accept. For a bank signing statements that customers open in common PDF readers, either works. For a mobile app whose keys sit in phone hardware, ECDSA is the natural fit because many phone chips support it directly and the signatures are small.',
        'If you do not control the other side, RSA 2048 or 3072 is the safe default for compatibility. If you do, P-256 is a good choice. Avoid inventing your own curve or parameters; use the standard named curves.',
      ],
    },
    {
      id: 'p256',
      h: 'How strong is P-256',
      p: [
        'NIST guidance puts a 256-bit elliptic curve key at roughly 128 bits of security, the same as RSA 3072. This comes from the NIST key-strength tables in SP 800-57. The next step up, P-384, is rated near 192 bits.',
        'These ratings assume the keys are generated well and kept safe. A strong curve with a leaked key gives no protection.',
      ],
    },
  ],
  faq: [
    { q: 'What does ECDSA stand for?', a: 'Elliptic Curve Digital Signature Algorithm.' },
    { q: 'Is ECDSA better than RSA?', a: 'It is more compact and faster to sign for the same strength. RSA is more widely supported in older systems. Neither is broken.' },
    { q: 'What is P-256?', a: 'A standard elliptic curve from NIST with a 256-bit key size, the most widely used curve for ECDSA.' },
    { q: 'Is ECDSA safe against quantum computers?', a: 'No. A large quantum computer could break it, as it could RSA. Replacement algorithms are being standardised.' },
  ],
  related: ['rsa', 'asymmetric-cryptography', 'key-pair', 'sha-256'],
};

export default term;
