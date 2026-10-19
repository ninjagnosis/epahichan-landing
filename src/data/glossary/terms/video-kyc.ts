import type { Term } from '../types';

const term: Term = {
  slug: 'video-kyc',
  term: 'Video KYC',
  aka: ['V-KYC', 'video verification', 'video identification', 'video KYC meaning'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'Video KYC: meaning and how it works',
  description: 'Video KYC verifies a customer over a live video call with an agent. What it checks, how it differs from eKYC and the risks it is built to reduce.',
  short: 'Video KYC is a way of verifying a customer’s identity over a live video call. An agent sees the person, checks their ID document and asks questions before approving.',
  body: [
    'Video KYC lets a business complete [KYC](/glossary/kyc) without the customer going to a branch. The customer opens a link or app, joins a call with a trained agent and shows their ID. The agent compares the face with the document and confirms details.',
    'It is one form of [eKYC](/glossary/ekyc). Where a data check proves an ID number is real, a video call adds evidence that a live person is behind it.',
  ],
  sections: [
    {
      id: 'how-it-works',
      h: 'How video KYC works',
      p: [
        'A typical session has a few steps:',
      ],
      list: [
        'The customer starts the session in an app or browser and allows camera access.',
        'An agent greets them, checks they are alone and asks them to show an ID document.',
        'The agent compares the live face with the photo on the document and may ask for a gesture or a spoken phrase.',
        'The details are compared with a trusted record, and the session is recorded for audit.',
      ],
    },
    {
      id: 'vs-ekyc',
      h: 'Video KYC vs other eKYC methods',
      p: [
        'Automatic methods, such as a selfie checked by software, do not need an agent. Video KYC puts a person in the loop, which costs more and takes more time, but handles unusual cases better. Many businesses use a data check first and video only for higher-risk customers.',
      ],
    },
    {
      id: 'risks',
      h: 'What it is meant to prevent',
      p: [
        'The main risks are impersonation, where someone uses another person’s documents, and fake or edited documents. Agents look for signs of a recording, a photo held to the camera or a second person coaching the customer. Software support such as [liveness detection](/glossary/liveness-detection) helps with this.',
      ],
    },
    {
      id: 'rules',
      h: 'Rules and recordkeeping',
      p: [
        'Regulators decide whether video KYC is allowed and how long recordings are kept. We could not verify a Nepal Rastra Bank rule specific to video KYC, so check the current directive for your sector before relying on it. Whatever the method, the business still owes [customer due diligence](/glossary/customer-due-diligence) and [AML](/glossary/aml) duties.',
      ],
    },
    {
      id: 'an-example-opening-a-bank-account',
      h: 'An example: opening a bank account',
      p: [
        'A customer in a district town wants an account with a bank whose nearest branch is hours away. She opens the bank’s app and joins a call. The agent asks her to hold her citizenship certificate or National ID card up to the camera, then asks her to move it slightly to show it is a physical card and not a screen. The agent asks a few questions about her address and why she wants the account, and compares her face with the photo.',
        'If something looks wrong, the agent can stop the call and send the case to a branch. If it goes well, the bank records the session and moves to the agreement. Compare this with a data-only check, which would take seconds but could not tell whether the person typing the NIN is its owner.',
      ],
    },
    {
      id: 'what-good-looks-like-for-the-customer',
      h: 'What good looks like for the customer',
      p: [
        'The customer should know in advance what to have ready: the ID document, a quiet room and a charged phone. The wait should be short, and the call should end with a clear statement of what happens next. If the connection drops, the session should resume rather than start again.',
        'A call that feels like an interrogation loses customers. Agents who explain why they ask each question get better answers and fewer abandoned sessions. Measure the completion rate and the time per call and review a sample of recorded sessions each month for quality.',
      ],
    },
    {
      id: 'a-comparison-how-india-regulates-it',
      h: 'A comparison: how India regulates it',
      p: [
        'India’s central bank allows video-based customer identification, called V-CIP, as a remote alternative to meeting a customer in person. Summaries of its rules describe a live, consent-based call with an official of the bank, a recorded session, face matching, liveness checks, capture of the customer’s location and a time stamp, and storage of the recordings on systems located in India.',
        'Nepal has no identical published rule that we could confirm, but the elements show what regulators tend to ask for: consent, a trained person, recorded evidence, protection against spoofing and secure storage. If you plan video KYC in Nepal, build to those elements and confirm the position with your regulator.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Video KYC and ePahichan',
      p: [
        'ePahichan does not offer video KYC. The [ID check API](/products/id-check-api) confirms a National ID number with match or no match, and the app signs with a key kept in the phone’s secure hardware, unlocked by fingerprint or face.',
      ],
    },
  ],
  faq: [
    { q: 'What is video KYC?', a: 'It is identity verification through a live video call in which an agent checks the customer and their ID document.' },
    { q: 'Is video KYC the same as eKYC?', a: 'Video KYC is one kind of eKYC. eKYC also includes data checks and selfie checks without an agent.' },
    { q: 'Is video KYC allowed in Nepal?', a: 'We could not verify a Nepal Rastra Bank rule on video KYC. Check the current directive for your sector.' },
    { q: 'Why is the call recorded?', a: 'The recording is evidence that the check was done properly and can be reviewed later.' },
  ],
  related: ['kyc', 'ekyc', 'liveness-detection', 'biometric-authentication'],
};

export default term;
