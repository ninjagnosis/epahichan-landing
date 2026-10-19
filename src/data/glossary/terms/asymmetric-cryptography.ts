import type { Term } from '../types';

const term: Term = {
  slug: 'asymmetric-cryptography',
  term: 'Asymmetric cryptography',
  aka: ['Public-key cryptography', 'Public key cryptography', 'Asymmetric encryption', 'Asymmetric key cryptography'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'Asymmetric cryptography: how public key cryptography works',
  description: 'Asymmetric cryptography uses a public key and a private key. How it differs from symmetric encryption and how it makes digital signatures possible.',
  short: 'Asymmetric cryptography, also called public-key cryptography, uses two linked keys: a public key that can be shared and a private key that is kept secret. It makes digital signatures possible.',
  body: [
    'Older ciphers use one shared secret. Both sides need the same key, and getting it to them safely is the hard part. Asymmetric cryptography removes that problem. Each person has a [key pair](/glossary/key-pair), publishes the [public key](/glossary/public-key) and keeps the [private key](/glossary/private-key).',
    'It underlies HTTPS, secure email and every [digital signature](/glossary/digital-signature) made under [PKI](/glossary/pki).',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Asymmetric cryptography meaning',
      p: [
        'Asymmetric means the two keys are not the same. Something done with one can be undone only with the other. That gives two uses. Encrypt with the public key and only the private key can read it, for confidentiality. Sign with the private key and the public key can check it, for authenticity.',
      ],
    },
    {
      id: 'vs-symmetric',
      h: 'Asymmetric vs symmetric encryption',
      p: [
        'Symmetric encryption, such as AES, uses one key and is fast. Asymmetric encryption is slower and works on small amounts of data. In practice they are combined. Asymmetric methods agree a key or sign a message, and symmetric encryption protects the bulk data. A [hash](/glossary/hash) is used so a signature covers a short fingerprint of a long document instead of the document itself.',
      ],
    },
    {
      id: 'algorithms',
      h: 'Common asymmetric algorithms',
      p: [
        'The ones met in signatures are:',
      ],
      list: [
        '[RSA](/glossary/rsa): based on the difficulty of factoring large numbers. Widely supported.',
        'ECDSA: based on elliptic curves. Smaller keys for the same strength.',
        'EdDSA and Ed25519: a newer curve-based signature scheme used in modern tools.',
        'Diffie-Hellman and its elliptic-curve form: used to agree a shared key rather than to sign.',
      ],
    },
    {
      id: 'signature',
      h: 'How it makes a digital signature work',
      p: [
        'The signer hashes the document, then applies the private key to the hash. The result is the signature. The checker hashes the same document, applies the public key to the signature and compares. If they match, the document is unchanged and the signer held the private key. The public key only proves the key; a certificate is needed to say whose it is.',
      ],
    },
    {
      id: 'everyday',
      h: 'Where you meet it every day',
      p: [
        'Every time a browser shows a padlock, asymmetric cryptography has agreed the keys for the session. Signed software updates on a phone use it, so the phone can tell the update came from the maker. Digital signatures on contracts, statements and certificates use it, and so do secure messaging apps, which exchange keys this way before the messages flow.',
        'What changes between these uses is only the protection of the private key. A website keeps its key on a server, a bank keeps its signing keys in an HSM, and a person using the ePahichan app keeps theirs in the phone’s secure hardware. The mathematics is the same.',
      ],
    },
    {
      id: 'sig-ex',
      h: 'A short worked example',
      p: [
        'Asha wants to send Ram a contract that he can trust came from her. She hashes the contract with SHA-256 and signs the hash with her private key. She sends the contract, the signature and her certificate. Ram hashes the contract himself, uses the public key in her certificate to open the signature, and compares the two hashes.',
        'If they match, two facts are established. The contract is exactly what Asha signed, and the signature was made with the private key that matches her certificate. Ram never needed a secret from Asha beforehand. That is the practical gain over shared-key methods.',
      ],
    },
    {
      id: 'limits',
      h: 'What asymmetric cryptography does not do',
      p: [
        'It does not tell you who owns a public key. That needs a certificate from an authority you trust. It does not hide the fact that two parties are talking. It does not protect a private key that is stolen or left in a file anyone can copy. And it does not make the content of a document true.',
        'These limits explain the rest of the system around it: certificates, revocation, hardware protection and audit records. The mathematics is only the base layer.',
      ],
    },
  ],
  faq: [
    { q: 'What is asymmetric cryptography in simple words?', a: 'A method where each person has a public key anyone can use and a private key only they hold, so no secret has to be shared in advance.' },
    { q: 'Is asymmetric cryptography the same as public-key cryptography?', a: 'Yes. The two names mean the same thing.' },
    { q: 'Why not use asymmetric encryption for everything?', a: 'It is much slower than symmetric encryption, so it is used for keys and signatures and symmetric encryption handles the bulk data.' },
    { q: 'Can quantum computers break it?', a: 'A large enough quantum computer could break RSA and elliptic-curve schemes. Standards bodies are publishing replacement algorithms, and systems will move to them over time.' },
  ],
  related: ['key-pair', 'public-key', 'private-key', 'rsa', 'ecdsa'],
};

export default term;
