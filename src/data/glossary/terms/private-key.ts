import type { Term } from '../types';

const term: Term = {
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
};

export default term;
