import type { Term } from '../types';

const term: Term = {
  slug: 'certifying-authority',
  term: 'Certifying authority',
  short: 'A certifying authority (CA) is the licensed body that checks a person’s identity and issues their digital signature certificate. Verifiers trust a signature because they trust the authority that vouched for the signer.',
  body: [
    'The CA is the party everyone else relies on. It verifies identity documents, issues certificates, and suspends or revokes them when they are lost or misused.',
    'Because verifiers trust the CA, a signature made with its certificate can be checked by people who have never met the signer.',
    'The Electronic Transactions Act, 2063 allows only a licensed or recognised certifying authority to issue digital signature certificates in Nepal.',
  ],
  related: ['digital-signature-certificate', 'pki'],
};

export default term;
