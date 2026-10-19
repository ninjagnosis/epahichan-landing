import type { Term } from '../types';

const term: Term = {
  slug: 'key-pair',
  term: 'Key pair',
  aka: ['Public-private key pair', 'Asymmetric key pair', 'Signing key pair'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'Key pair: public and private key explained',
  description: 'A key pair is a linked private key and public key. What each does, how they are generated and why the private key must stay with its owner.',
  short: 'A key pair is two mathematically linked keys, one private and one public. The private key signs or decrypts, the public key checks or encrypts, and the private key is never shared.',
  body: [
    'A [digital signature](/glossary/digital-signature) depends on a key pair. The [private key](/glossary/private-key) makes the signature. The [public key](/glossary/public-key) lets anyone check it. They are generated together, and what one does the other can undo.',
    'Knowing the public key does not let anyone work out the private one. That one-way relationship is the basis of [asymmetric cryptography](/glossary/asymmetric-cryptography).',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Key pair meaning',
      p: [
        'Think of a letterbox with a slot. Anyone can post a letter in (the public key), but only the holder of the key can open it (the private key). For signatures the direction is reversed: only the holder can make the mark, and anyone can check it.',
      ],
    },
    {
      id: 'generation',
      h: 'How a key pair is generated',
      p: [
        'Software picks an algorithm and a size, then uses a random number generator to produce the pair. [RSA](/glossary/rsa) and [ECDSA](/glossary/ecdsa) are the two common algorithms. Good randomness matters: a predictable generator produces keys an attacker can guess. Generating the pair inside a [secure element](/glossary/secure-element), USB token or HSM means the private key is created there and never leaves.',
      ],
    },
    {
      id: 'certificate',
      h: 'Key pair vs certificate',
      p: [
        'A key pair on its own says nothing about who holds it. A certificate adds the identity: the authority signs a statement that this public key belongs to this person. The key pair is the lock and key. The certificate is the label on the door.',
      ],
    },
    {
      id: 'protect',
      h: 'Looking after the private key',
      p: [
        'Anyone who has the private key can sign as its owner, so it is the item to protect. Options, from weakest to strongest, are a password-protected file, a USB token, and keys in a phone’s secure hardware or an HSM that cannot be exported. If a private key is lost or exposed, ask for revocation and get a new pair. A key pair is not meant to be reused for ever: certificates expire and keys are replaced with them.',
      ],
    },
    {
      id: 'ex',
      h: 'Example: creating a key pair for a certificate request',
      p: [
        'In the ePahichan app, setting up a certificate starts with the phone creating a key pair in its secure hardware. The app sends the authority the public key as part of a certificate request, with identity evidence. The private key stays in the phone.',
        'When the certificate arrives, it names the person and holds the public key. Signing later uses the private key in the hardware, and anyone checking uses the public key in the certificate. At no point does the private key travel.',
      ],
    },
    {
      id: 'lifetime',
      h: 'How long a key pair should be used',
      p: [
        'A key pair should live no longer than its certificate. When the certificate is renewed, a new pair is created, so an exposure in the past cannot continue to threaten future signatures. Keys used for signing should not also be used for encryption, because the policies for backing them up are opposite: a signing key should exist in one place only, while an encryption key often needs a backup so data can be recovered.',
        'If a business needs to sign on behalf of many people, each person should hold their own pair, tied to their own certificate. Sharing one pair across staff removes the point of a signature, which is to show who signed.',
      ],
    },
    {
      id: 'faq-ish',
      h: 'Key pair vs password',
      p: [
        'A password is a shared secret: you and the system both know it, and the system stores a copy or a fingerprint of it. A key pair is different. The system holds only the public key, which is of no use to an attacker, and the private key is never sent anywhere. That is why signing with a key pair is stronger than typing a password: a breach of the system’s database does not reveal anything that lets someone sign as you.',
        'The private key can be protected with a PIN, a fingerprint or a face scan, which unlock it locally. Those are local checks to use the key and are not the key itself.',
      ],
    },
  ],
  faq: [
    { q: 'What is a key pair in cryptography?', a: 'A matched private key and public key created together. The private key is kept secret and the public key is shared.' },
    { q: 'Can the public key be used to find the private key?', a: 'Not in practice. With strong algorithms and sizes, the work needed is far beyond what any computer can do.' },
    { q: 'How many key pairs do I need?', a: 'One for each certificate or purpose. Keeping signing keys separate from encryption keys limits the damage if one is lost.' },
    { q: 'Where is my key pair stored in ePahichan?', a: 'The signing key is created in the phone’s secure hardware and unlocked with fingerprint or face.' },
  ],
  related: ['private-key', 'public-key', 'asymmetric-cryptography', 'csr'],
  product: 'app',
};

export default term;
