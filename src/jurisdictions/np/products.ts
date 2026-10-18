import type { Product } from '../types';

export const products: Product[] = [
  {
    slug: 'app',
    name: '%%brand%% app',
    short: 'Get a digital signature certificate and sign PDFs from your phone.',
    seoTitle: 'Digital signature app for Nepal',
    headline: 'Sign a PDF from your phone',
    description: 'The %%brand%% app gets you a digital signature certificate with your citizenship and a selfie, then signs PDFs, sends them for signatures and tracks who has signed.',
    tags: ['digital-signature', 'guides'],
    gets: [
      'Apply for a certificate with your citizenship document and a face check',
      'Sign a PDF, or a photo of a paper document',
      'Send a document to several people and see who has signed',
      'Keep your signing key in your phone’s secure hardware, unlocked by fingerprint or face',
      'Work in organizations, teams and workspaces',
    ],
    how: [
      { h: 'Apply for your certificate', p: 'Photograph your ID document and take a selfie. The certifying authority checks that you are the person on the document.' },
      { h: 'Pay the fee', p: 'Pay through %%paymentMethods%%.' },
      { h: 'Sign', p: 'Open a PDF, or photograph a paper page, and sign with your fingerprint or face.' },
      { h: 'Send for signatures', p: 'Choose the people who must sign. You see who has signed and who is still waiting, and you can remind them.' },
    ],
    specs: [
      ['Certificates issued by', '%%ca%%'],
      ['Signing key', 'Created on your phone, kept in its secure hardware'],
      ['Unlock', 'Fingerprint or face'],
      ['Documents', 'PDF, or a photo of paper'],
      ['Sign in', 'Mobile number and a code by SMS'],
      ['Payment', '%%paymentSpec%%'],
    ],
    faq: [
      { q: 'Who issues my digital signature certificate?', a: 'The certificate is issued by %%ca%% (%%caShort%%), the licensed certifying authority. %%brand%% is the app you use to apply for it and to sign with it.' },
      { q: 'Where is my signing key kept?', a: 'Your signing key is created on your phone and kept in its secure hardware. It does not leave the phone and %%brand%% cannot read it.' },
      { q: 'What do I need to apply?', a: 'Your mobile number, your citizenship or other ID document, and a camera for the photo of the document and a selfie.' },
      { q: 'Does the person I send a document to need the app?', a: 'Signers are invited by SMS or email. To sign with their own certificate they need %%brandAccount%%.' },
      { q: 'Can I delete my account?', a: 'Yes, in the app under Settings. The deletion page lists what is removed and what must be kept by law.' },
    ],
  },
  {
    slug: 'signing-api',
    name: 'Signing API',
    short: 'Add digital signing to your own application with one call and a webhook.',
    seoTitle: 'Digital signature API for Nepal',
    headline: 'Add digital signing to any application',
    description: 'The %%brand%% Signing API lets your bank, HR or insurance system request a digital signature from a customer and receive the signed PDF by webhook.',
    tags: ['digital-signature', 'developers'],
    gets: [
      'One call to request a signature, one webhook when it is signed',
      'The signed PDF returned to your system',
      'Sandbox and test keys, so you build before going live',
      'Safe retries: repeating a request does not sign twice',
      'REST, so any language can call it. Official SDKs for Node and Flutter',
    ],
    how: [
      { h: 'Your application asks', p: 'Your server creates a signing request with the signer’s name, phone and the documents to sign.' },
      { h: 'The signer gets a code', p: 'The signer receives a code on their phone and signs with it.' },
      { h: '%%brand%% signs and seals', p: 'The signature is bound to the exact PDF, and the signer’s certificate comes from %%caShort%%.' },
      { h: 'You receive the result', p: 'A webhook tells your server the request is signed, and the signed PDF is available to fetch.' },
    ],
    specs: [
      ['Interface', 'REST, JSON'],
      ['Official SDKs', 'Node.js and Flutter'],
      ['Result', 'Signed PDF, by webhook'],
      ['Testing', 'Sandbox and test keys'],
      ['Retries', 'Safe to repeat a request'],
      ['Onboarding', '%%caShort%% onboards your organization, then your developers join'],
    ],
    code: `await %%sdkClient%%.signingRequests.create({
  signer: { name: 'Sita Sharma', phone, kyc },
  documents: [
    Documents.certificateApplication(),
    Documents.agreement(loanPdf),
  ],
});`,
    faq: [
      { q: 'Which languages can call the API?', a: 'Anything that can make an HTTPS request. We ship official SDKs for Node.js and Flutter; other languages use the REST API directly.' },
      { q: 'How do I test before going live?', a: 'Use the sandbox with test keys. Requests there never reach a real signer or a real certificate.' },
      { q: 'What if my server retries a request?', a: 'Requests are safe to repeat. A retry returns the same request and does not create a second signature.' },
      { q: 'How do I get access?', a: '%%caShort%% onboards your organization first, then your developers join. Write to us and we will start it.' },
    ],
  },
  {
    slug: 'id-check-api',
    name: 'ID check API',
    short: 'Check a person’s National ID details with two calls. The answer is match or no match.',
    seoTitle: 'National ID verification API for Nepal',
    headline: 'Check a National ID in two calls',
    description: 'Send what a person says is true and the National ID system replies match or no match. No record comes back. Two calls: get a token, then verify.',
    tags: ['identity', 'developers'],
    gets: [
      'Match or no match, never the record itself',
      'Four fields: NIN, full name, gender and date of birth',
      'Tokens last 30 minutes, so one token serves many checks',
      'Called from your server, so credentials never reach an app',
    ],
    how: [
      { h: 'Get a token', p: 'Your server sends its client ID and password and receives a token valid for 30 minutes.' },
      { h: 'Verify the details', p: 'Send the NIN, full name, gender and date of birth in Bikram Sambat, with the token.' },
      { h: 'Read the answer', p: 'The reply is match or no match. It never says which field was wrong.' },
    ],
    specs: [
      ['Fields', 'nin, fullName, gender, dobLoc'],
      ['nin', '10 digits, no dashes'],
      ['Date of birth', 'Bikram Sambat, Devanagari digits'],
      ['Reply', 'detailMatch: true or false'],
      ['Token life', '30 minutes'],
      ['Where to call from', 'Your server'],
    ],
    code: `curl -H "Authorization: Bearer $TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{ "nin": "1234567890",
        "fullName": "Sita Sharma",
        "gender": "F",
        "dobLoc": "२०५८-०५-१२" }' \\
  https://verify-nin-citizenportal.donidcr.gov.np/api/nin/verify

{ "detailMatch": true }`,
    faq: [
      { q: 'Do I get the person’s record back?', a: 'No. You send what the person says is true and receive match or no match. No record comes back.' },
      { q: 'Why does a wrong field not say which one was wrong?', a: 'The answer is deliberately a single yes or no, so the check cannot be used to discover someone’s details by trial.' },
      { q: 'What if one of the four fields is missing?', a: 'All four must be sent. If any is missing the answer is no match.' },
      { q: 'How do I get access?', a: 'Write to %%companyShort%% at %%companyEmail%% or %%companyPhone%%.' },
    ],
  },
];
