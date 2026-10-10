// Terms around digital signatures and digital identity, one page each under
// /glossary. `short` is the one-or-two sentence definition that search engines
// and AI tools quote, so it must stand on its own. `body` explains it plainly.
export interface Term {
  slug: string;
  term: string;
  /** Full name, when the term is an abbreviation. */
  full?: string;
  short: string;
  body: string[];
  related: string[];
  /** Product page this term leads to. */
  product?: string;
}

export const glossary: Term[] = [
  {
    slug: 'digital-signature',
    term: 'Digital signature',
    short: 'A digital signature is a value calculated from a document and a private key. Anyone with the matching public key can check that the document is the one that was signed and has not changed.',
    body: [
      'A signature on paper is a picture of a hand movement, and a picture can be copied. A digital signature is different: it is mathematics. The signer’s private key turns the document into a short value that fits that document and no other.',
      'Change one character of the document and the check fails. The check needs only the document, the signature and the signer’s public key, so it does not depend on any company staying in business.',
      'In Nepal, Section 5 of the Electronic Transactions Act, 2063 gives a digital signature legal validity where the law requires a signature, if it is made by the procedures in the Act and its Rules.',
    ],
    related: ['electronic-signature', 'private-key', 'public-key', 'digital-signature-certificate'],
    product: 'app',
  },
  {
    slug: 'electronic-signature',
    term: 'Electronic signature',
    short: 'An electronic signature is any electronic mark that shows intent to sign, such as a typed name, a drawn squiggle or a ticked box. It is a broader idea than a digital signature and does not by itself prove who signed or that the file is unchanged.',
    body: [
      'Typing your name at the bottom of an email, drawing a signature on a touchscreen and clicking “I agree” are all electronic signatures. They record that someone did something, but they do not by themselves bind a person to an exact file.',
      'A digital signature is one kind of electronic signature, built on cryptography, which does bind a certificate holder to an exact file and exposes later changes.',
      'Which kind a document needs depends on the law and on what you will have to prove if someone disputes it.',
    ],
    related: ['digital-signature', 'otp'],
  },
  {
    slug: 'digital-signature-certificate',
    term: 'Digital signature certificate',
    short: 'A digital signature certificate is a record, issued by a certifying authority, that ties a public key to a named person. It is what lets someone checking a signature know whose signature it is.',
    body: [
      'A key pair alone says nothing about a person: anybody can generate one. A certificate fixes that gap. The certifying authority checks who you are, then signs a statement that this public key belongs to you.',
      'When you sign a PDF, your certificate travels with the signature, so whoever opens the file can see who signed and which authority vouched for them.',
      'In Nepal, only a licensed or recognised certifying authority may issue a digital signature certificate. ePahichan certificates come from Nepal Certifying Company.',
    ],
    related: ['certifying-authority', 'public-key', 'kyc'],
    product: 'app',
  },
  {
    slug: 'certifying-authority',
    term: 'Certifying authority',
    short: 'A certifying authority (CA) is the licensed body that checks a person’s identity and issues their digital signature certificate. Verifiers trust a signature because they trust the authority that vouched for the signer.',
    body: [
      'The CA is the party everyone else relies on. It verifies identity documents, issues certificates, and suspends or revokes them when they are lost or misused.',
      'Because verifiers trust the CA, a signature made with its certificate can be checked by people who have never met the signer.',
      'The Electronic Transactions Act, 2063 allows only a licensed or recognised certifying authority to issue digital signature certificates in Nepal.',
    ],
    related: ['digital-signature-certificate', 'pki'],
  },
  {
    slug: 'private-key',
    term: 'Private key',
    short: 'A private key is the secret half of a key pair. It creates your digital signatures and must stay under your control, because anyone who holds it can sign as you.',
    body: [
      'The private key does the signing. It never needs to be shown to anyone, and a well-built system never shows it.',
      'On a phone, the key can live in secure hardware that signs on request and will not hand the key out. Unlocking it with a fingerprint or face adds a second barrier.',
      'Under the Electronic Transactions Act, 2063, a certificate holder must take reasonable care to keep control of the private key and prevent its disclosure.',
    ],
    related: ['public-key', 'digital-signature'],
    product: 'app',
  },
  {
    slug: 'public-key',
    term: 'Public key',
    short: 'A public key is the shareable half of a key pair. It cannot create signatures, but anyone can use it to check a signature made by the matching private key.',
    body: [
      'You can hand your public key to anyone, which is the point. Checking a signature needs only the document, the signature and this key.',
      'The certificate is how a public key gets a name attached: the certifying authority vouches that the key belongs to a particular person.',
    ],
    related: ['private-key', 'digital-signature-certificate'],
  },
  {
    slug: 'hash',
    term: 'Hash',
    short: 'A hash is a short fingerprint calculated from a file. The same file always gives the same hash, and changing even one character gives a completely different one.',
    body: [
      'Signing a whole file directly would be slow, so signing software first calculates the file’s hash and signs that. The signature therefore covers the file as it was, and any later change shows.',
      'A hash cannot be turned back into the file. That is why a service can handle a hash without ever seeing a document.',
    ],
    related: ['digital-signature', 'tamper-evident'],
  },
  {
    slug: 'tamper-evident',
    term: 'Tamper evident',
    short: 'A signed document is tamper evident when any change made after signing is detectable. A digital signature gives this property: alter one byte and verification fails.',
    body: [
      'Tamper evident is not the same as tamper proof. Someone can still change a file. What they cannot do is change it and keep the signature valid.',
      'This is why a signed loan PDF is useful in a dispute: either the signature verifies, so the file is the one that was signed, or it does not.',
    ],
    related: ['hash', 'digital-signature'],
  },
  {
    slug: 'trusted-timestamp',
    term: 'Trusted timestamp',
    short: 'A trusted timestamp is a time attached to a signature by an independent time authority. A signature alone proves who signed what, not when.',
    body: [
      'A signing device’s clock can be set to any time, so a time read from it proves nothing. A timestamp authority signs the time itself, so a third party can rely on it.',
      'When the question is “was this signed before the deadline?”, the answer needs a trusted timestamp, not a signature alone.',
    ],
    related: ['digital-signature'],
  },
  {
    slug: 'pki',
    term: 'PKI',
    full: 'Public key infrastructure',
    short: 'PKI is the set of rules, software and authorities that let people trust public keys: certifying authorities issue certificates, and verifiers check them.',
    body: [
      'Key pairs are easy to make. The hard part is trust: how do you know a public key really belongs to Sita Sharma? PKI answers with certificates issued by authorities that checked her identity.',
      'Digital signatures in Nepal sit on a PKI: licensed certifying authorities issue certificates under the Electronic Transactions Act.',
    ],
    related: ['certifying-authority', 'digital-signature-certificate'],
  },
  {
    slug: 'kyc',
    term: 'KYC',
    full: 'Know your customer',
    short: 'KYC is the identity information a bank or other regulated business collects and verifies about a customer. A certificate application can reuse KYC the institution already holds.',
    body: [
      'Banks collect name, address, identity document and photo when an account is opened. That record is KYC.',
      'Through the Signing API, a bank can draw a certificate application from the KYC it already has, so the customer does not upload the same documents again.',
    ],
    related: ['nin', 'digital-signature-certificate'],
    product: 'signing-api',
  },
  {
    slug: 'nin',
    term: 'NIN',
    full: 'National Identity Number',
    short: 'The NIN is the ten-digit number on a Nepali National ID. A verification service can confirm whether the NIN, name, gender and date of birth someone gave match the National ID system.',
    body: [
      'The ID check API takes four fields: the NIN, full name, gender and date of birth in Bikram Sambat. It answers match or no match and never returns the record.',
      'Because the answer does not say which field was wrong, the service cannot be used to guess a person’s details.',
    ],
    related: ['kyc'],
    product: 'id-check-api',
  },
  {
    slug: 'webhook',
    term: 'Webhook',
    short: 'A webhook is a message one system sends to another when something happens, instead of the other system asking repeatedly. In signing, it tells your server that a request has been signed.',
    body: [
      'Without a webhook, your server would have to keep asking whether the customer has signed yet. With one, the signing service calls your server the moment the signature is done.',
      'Your server should check the message is genuine and handle the same message arriving twice.',
    ],
    related: ['idempotency'],
    product: 'signing-api',
  },
  {
    slug: 'idempotency',
    term: 'Idempotency',
    short: 'An operation is idempotent when doing it twice has the same effect as doing it once. An idempotent signing request can be retried after a network failure without creating a second signature.',
    body: [
      'Networks fail. If your server does not hear back from a request, it must retry, but it cannot know whether the first attempt succeeded.',
      'With an idempotency key, the retry returns the original request instead of starting a new one.',
    ],
    related: ['webhook'],
    product: 'signing-api',
  },
  {
    slug: 'otp',
    term: 'OTP',
    full: 'One-time password',
    short: 'An OTP is a short code sent to a phone to confirm that whoever is using a service has that phone. It proves possession of the phone at that moment, not that a person agreed to a particular document.',
    body: [
      'OTPs are good for sign-in. As proof of agreement they are weak, because the code is not tied to the document, and anyone holding the phone can enter it.',
      'A digital signature is tied to the exact file and to a named certificate holder.',
    ],
    related: ['electronic-signature', 'digital-signature'],
  },
];

export const termBySlug = (slug: string) => glossary.find((t) => t.slug === slug);
