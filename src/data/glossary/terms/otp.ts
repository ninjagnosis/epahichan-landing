import type { Term } from '../types';

const term: Term = {
  slug: 'otp',
  term: 'OTP',
  full: 'One-time password',
  short: 'An OTP is a short code sent to a phone to confirm that whoever is using a service has that phone. It proves possession of the phone at that moment, not that a person agreed to a particular document.',
  body: [
    'OTPs are good for sign-in. As proof of agreement they are weak, because the code is not tied to the document, and anyone holding the phone can enter it.',
    'A digital signature is tied to the exact file and to a named certificate holder.',
  ],
  related: ['electronic-signature', 'digital-signature'],
};

export default term;
