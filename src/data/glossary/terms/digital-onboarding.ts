import type { Term } from '../types';

const term: Term = {
  slug: 'digital-onboarding',
  term: 'Digital onboarding',
  aka: ['customer onboarding', 'online account opening', 'remote onboarding', 'digital account opening'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'Digital onboarding: meaning and steps for banks',
  description: 'Digital onboarding is opening an account or starting a service online. Its steps in Nepal: ID check, KYC, agreement and digital signature.',
  short: 'Digital onboarding is the process of taking on a new customer online: collecting details, checking identity, and getting agreements signed without a branch visit.',
  body: [
    'For a bank, insurer or wallet, onboarding is everything between a person saying “I want an account” and the account being live. Doing it digitally replaces paper forms, photocopies and visits with a flow on the customer’s phone.',
    'The legal duties do not shrink. The business must still complete [KYC](/glossary/kyc), [customer due diligence](/glossary/customer-due-diligence) and [AML](/glossary/aml) checks. Digital onboarding changes how, not whether.',
  ],
  sections: [
    {
      id: 'steps',
      h: 'Typical steps',
      p: ['A digital onboarding flow usually runs:'],
      list: [
        'Collect details and consent.',
        'Verify identity, for example by checking the [NIN](/glossary/nin) against the National ID system, see [eKYC](/glossary/ekyc).',
        'Add presence checks where needed, such as [liveness detection](/glossary/liveness-detection) or [video KYC](/glossary/video-kyc).',
        'Screen against risk lists and assess risk.',
        'Present the agreement and get it signed digitally.',
        'Open the account and confirm.',
      ],
    },
    {
      id: 'nepal',
      h: 'In Nepal',
      p: [
        'Nepal Rastra Bank told banks that from 14 January 2025 (Magh 1, 2081) they must verify customer details through electronic National ID records. The central bank has since eased some parts, such as deadlines for existing customers and exemptions for children and others. Digital wallets have National ID verification rules of their own. Check the current directive for your sector.',
      ],
    },
    {
      id: 'signing',
      h: 'The signing step',
      p: [
        'The last step is where many flows fall back to paper. A [digital signature](/glossary/digital-signature) backed by a certificate lets the customer sign the agreement on their phone, with evidence that holds up later. A one-time code alone is weaker, see [OTP or digital signature in loan disputes](/blog/otp-or-digital-signature-loan-disputes).',
      ],
    },
    {
      id: 'drop-off',
      h: 'Where customers drop out',
      p: [
        'Every extra form costs completions. Reusing data the business already holds, instead of asking again, shortens the flow. Clear error messages help when an ID check returns no match, for example when a date of birth was entered in the wrong calendar, see [Bikram Sambat](/glossary/bikram-sambat).',
      ],
    },
    {
      id: 'an-example-a-cooperative-loan',
      h: 'An example: a cooperative loan',
      p: [
        'A savings cooperative wants members in distant wards to apply for loans without travelling. A member enters her details, the cooperative checks her NIN, name, gender and date of birth in Bikram Sambat, and a staff member reviews the loan application. The member receives the agreement on her phone and signs it with her fingerprint.',
        'The cooperative’s staff spend their time on the credit decision rather than on photocopies. The member keeps the signed agreement. If the identity check returns no match, the cooperative asks her to recheck the spelling and date, and falls back to a visit if it still fails.',
      ],
    },
    {
      id: 'step-by-step-for-an-employer-or-a-small-lender',
      h: 'Step by step for an employer or a small lender',
      p: [
        'Start by listing what you must collect and why. For each field, note which check proves it. Then build the order of screens so that the cheapest check runs first: a National ID match before a video call, and a video call before a manual review. Customers who fail early stop costing you time.',
        'Test with real cases: a married woman whose surname changed, a name spelt two ways, a date of birth in the wrong calendar. Decide what the screen says for each failure and where the customer goes next. Measure where people drop off and fix the biggest gap first, usually the document upload or the code that never arrives.',
      ],
    },
    {
      id: 'what-to-measure',
      h: 'What to measure',
      p: [
        'Track the share of started applications that finish, the time from start to account, the share that fail the ID check and why, and the number needing manual review. Break each by channel and by device type.',
        'Review the numbers weekly at first. A sudden rise in no-match results often points to a form bug, for example a field that now sends the wrong date format, not to a wave of fraud.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Onboarding with ePahichan',
      p: [
        'The [ID check API](/products/id-check-api) confirms National ID details with match or no match. With the [Signing API](/products/signing-api), a bank can draw a certificate application from KYC it already holds, and the customer then signs agreements on their phone. Signing keys stay in the phone’s secure hardware, unlocked by fingerprint or face.',
      ],
    },
  ],
  faq: [
    { q: 'What is digital onboarding?', a: 'It is taking on a new customer online, including identity checks and signed agreements, without a branch visit.' },
    { q: 'Is digital onboarding allowed in Nepal?', a: 'Banks must verify customers against National ID records under a Nepal Rastra Bank directive effective 14 January 2025. Check current rules and exemptions for your sector.' },
    { q: 'Does digital onboarding replace KYC?', a: 'No. It is the process in which KYC is carried out digitally.' },
    { q: 'How is the agreement signed?', a: 'With a digital signature on the customer’s phone, backed by a certificate from a licensed certifying authority.' },
  ],
  related: ['kyc', 'ekyc', 'nin', 'digital-signature-certificate'],
  product: 'signing-api',
};

export default term;
