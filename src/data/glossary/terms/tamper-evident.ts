import type { Term } from '../types';

const term: Term = {
  slug: 'tamper-evident',
  term: 'Tamper evident',
  short: 'A signed document is tamper evident when any change made after signing is detectable. A digital signature gives this property: alter one byte and verification fails.',
  body: [
    'Tamper evident is not the same as tamper proof. Someone can still change a file. What they cannot do is change it and keep the signature valid.',
    'This is why a signed loan PDF is useful in a dispute: either the signature verifies, so the file is the one that was signed, or it does not.',
  ],
  related: ['hash', 'digital-signature'],
};

export default term;
