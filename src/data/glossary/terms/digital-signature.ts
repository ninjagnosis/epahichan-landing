import type { Term } from '../types';

const term: Term = {
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
};

export default term;
