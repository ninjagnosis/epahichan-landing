import type { Term } from '../types';

const term: Term = {
  slug: 'public-key',
  term: 'Public key',
  short: 'A public key is the shareable half of a key pair. It cannot create signatures, but anyone can use it to check a signature made by the matching private key.',
  body: [
    'You can hand your public key to anyone, which is the point. Checking a signature needs only the document, the signature and this key.',
    'The certificate is how a public key gets a name attached: the certifying authority vouches that the key belongs to a particular person.',
  ],
  related: ['private-key', 'digital-signature-certificate'],
};

export default term;
