import type { Term } from '../types';

const term: Term = {
  slug: 'electronic-signature',
  term: 'Electronic signature',
  short: 'An electronic signature is any electronic mark that shows intent to sign, such as a typed name, a drawn squiggle or a ticked box. It is a broader idea than a digital signature and does not by itself prove who signed or that the file is unchanged.',
  body: [
    'Typing your name at the bottom of an email, drawing a signature on a touchscreen and clicking “I agree” are all electronic signatures. They record that someone did something, but they do not by themselves bind a person to an exact file.',
    'A digital signature is one kind of electronic signature, built on cryptography, which does bind a certificate holder to an exact file and exposes later changes.',
    'Which kind a document needs depends on the law and on what you will have to prove if someone disputes it.',
  ],
  related: ['digital-signature', 'otp'],
};

export default term;
