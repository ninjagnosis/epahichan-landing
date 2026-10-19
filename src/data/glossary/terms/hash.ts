import type { Term } from '../types';

const term: Term = {
  slug: 'hash',
  term: 'Hash',
  short: 'A hash is a short fingerprint calculated from a file. The same file always gives the same hash, and changing even one character gives a completely different one.',
  body: [
    'Signing a whole file directly would be slow, so signing software first calculates the file’s hash and signs that. The signature therefore covers the file as it was, and any later change shows.',
    'A hash cannot be turned back into the file. That is why a service can handle a hash without ever seeing a document.',
  ],
  related: ['digital-signature', 'tamper-evident'],
};

export default term;
