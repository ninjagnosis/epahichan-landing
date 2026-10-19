import type { Term } from '../types';

const term: Term = {
  slug: 'digital-identity',
  term: 'Digital identity',
  aka: ['digital ID', 'online identity', 'electronic identity', 'eID', 'डिजिटल परिचय'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'Digital identity: meaning, examples and how it works',
  description: 'A digital identity is a set of verified details and credentials that prove who you are online. Examples in Nepal and how it connects to digital signatures.',
  short: 'A digital identity is the set of details and credentials that lets a person prove who they are online. It can be a National ID number, a login, or a certificate tied to a verified person.',
  body: [
    'Offline, you prove who you are by showing a document. Online, you need something a computer can check. A digital identity is that something: data about you, plus a way to show that you are the person it describes.',
    'It is not one thing. Your phone number, your bank login and your [digital signature certificate](/glossary/digital-signature-certificate) are all digital identities, with different strength.',
  ],
  sections: [
    {
      id: 'parts',
      h: 'Parts of a digital identity',
      p: ['Most digital identities combine:'],
      list: [
        'Attributes: name, date of birth, ID number.',
        'Proofing: evidence that someone verified those attributes, for example against the National ID.',
        'Credentials: something you hold or are, such as a [private key](/glossary/private-key) or fingerprint, used to prove you are the person.',
      ],
    },
    {
      id: 'strength',
      h: 'Weak and strong identities',
      p: [
        'A mobile number proven by an [OTP](/glossary/otp) shows control of a SIM, not who someone is. A certificate issued after identity proofing, with a key kept in secure hardware, ties a person to what they sign. The difference matters most when a document is disputed.',
      ],
    },
    {
      id: 'nepal',
      h: 'In Nepal',
      p: [
        'The National ID system, with its [NIN](/glossary/nin) and the [National ID card](/glossary/national-id-card), is the base for identity proofing. The older [citizenship certificate](/glossary/citizenship-certificate) is still widely used. Under the [Electronic Transactions Act](/glossary/electronic-transactions-act), certificates from licensed authorities give digital signatures a legal footing.',
      ],
    },
    {
      id: 'privacy',
      h: 'Privacy',
      p: [
        'Good systems share the minimum. A business that needs to know whether details are genuine can ask for match or no match instead of a full record. Keys that stay on the device mean there is no central store of signing secrets to breach.',
      ],
    },
    {
      id: 'an-example-an-employer-onboarding-staff',
      h: 'An example: an employer onboarding staff',
      p: [
        'An employer hires fifty people in a month. On paper, each hire brings photocopies, the HR clerk checks them against originals and everything goes into a file. With a digital identity, the employer asks each hire to verify their National ID details, and the employee then signs the appointment letter, the confidentiality clause and the policy acknowledgement on their phone.',
        'What the employer gets is a record that ties each signature to a verified person, not a scan of something anyone could have signed. What the employee gets is a certificate that can be reused for later documents. See [HR documents and digital signatures in Nepal](/blog/hr-documents-digital-signature-nepal) for the documents most employers sign first.',
      ],
    },
    {
      id: 'levels-of-assurance',
      h: 'Levels of assurance',
      p: [
        'Not every service needs the same strength. Reading a library catalogue needs almost nothing. Opening a bank account needs proof that a real person with a specific National ID is behind the request. Signing a large loan needs more: a key only that person controls, and evidence that ties the signature to the document.',
        'Thinking in levels helps you choose. A mobile number and an OTP is a low level, a National ID match is a medium level for attributes, and a certificate with a key in secure hardware is a high level for signing. Match the level to the harm if the identity turns out to be false.',
      ],
    },
    {
      id: 'identity-in-a-signing-flow',
      h: 'Identity in a signing flow',
      p: [
        'Walk through a signature. First the person is proofed, for example by a National ID match. Next the certifying authority issues a certificate that names them. Then they create a key on their phone. When they sign, the biometric releases the key, the key signs the document hash and the certificate travels with the signature.',
        'Each step is part of the identity. Weaken any of them, say by letting someone else enrol a fingerprint on the phone, and the signature no longer shows what it appears to show. That is why guidance to signers matters as much as the cryptography.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Digital identity with ePahichan',
      p: [
        'ePahichan ties an identity checked against the National ID to a certificate from a licensed certifying authority, with the signing key held in the phone’s secure hardware and unlocked by fingerprint or face.',
      ],
    },
  ],
  faq: [
    { q: 'What is a digital identity?', a: 'It is the details and credentials that let a person prove who they are online.' },
    { q: 'Is a National ID number a digital identity?', a: 'It is an identifier that systems can check. A full digital identity also includes proofing and a credential that shows you are its owner.' },
    { q: 'Is an OTP a digital identity?', a: 'An OTP shows control of a phone number. It is weaker than a certificate issued after identity proofing.' },
    { q: 'How does a digital signature relate to digital identity?', a: 'The certificate behind a digital signature binds a verified identity to a key pair.' },
  ],
  related: ['nin', 'digital-signature-certificate', 'kyc', 'biometric-authentication'],
};

export default term;
