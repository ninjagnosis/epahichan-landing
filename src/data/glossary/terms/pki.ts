import type { Term } from '../types';

const term: Term = {
  slug: 'pki',
  term: 'PKI',
  full: 'Public key infrastructure',
  short: 'PKI is the set of rules, software and authorities that let people trust public keys: certifying authorities issue certificates, and verifiers check them.',
  body: [
    'Key pairs are easy to make. The hard part is trust: how do you know a public key really belongs to Sita Sharma? PKI answers with certificates issued by authorities that checked her identity.',
    'Digital signatures in Nepal sit on a PKI: licensed certifying authorities issue certificates under the Electronic Transactions Act.',
  ],
  related: ['certifying-authority', 'digital-signature-certificate'],
};

export default term;
