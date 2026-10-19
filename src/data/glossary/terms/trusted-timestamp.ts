import type { Term } from '../types';

const term: Term = {
  slug: 'trusted-timestamp',
  term: 'Trusted timestamp',
  short: 'A trusted timestamp is a time attached to a signature by an independent time authority. A signature alone proves who signed what, not when.',
  body: [
    'A signing device’s clock can be set to any time, so a time read from it proves nothing. A timestamp authority signs the time itself, so a third party can rely on it.',
    'When the question is “was this signed before the deadline?”, the answer needs a trusted timestamp, not a signature alone.',
  ],
  related: ['digital-signature'],
};

export default term;
