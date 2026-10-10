import type { Faq } from './products';

export interface Solution {
  slug: string;
  name: string;
  short: string;
  headline: string;
  description: string;
  /** Documents this kind of organization signs. */
  documents: string[];
  does: { h: string; p: string }[];
  /** What the law excludes or what to check, stated plainly. */
  limits: string;
  products: string[];
  tags: string[];
  faq: Faq[];
}

export const solutions: Solution[] = [
  {
    slug: 'banks-lenders',
    name: 'Banks and lenders',
    short: 'Sign every instant loan with a signature that only the named borrower can make.',
    headline: 'Sign every instant loan',
    description: 'Digital signatures for mobile banking loans in Nepal: the borrower signs the exact loan PDF with a code, and the bank holds a signature anyone can check.',
    documents: ['Loan agreements', 'Certificate applications', 'Account opening forms', 'Consent and mandate forms'],
    does: [
      { h: 'Replaces “I agree” with a signature', p: 'An OTP proves a phone received a code. A digital signature ties the exact PDF to the named borrower’s certificate.' },
      { h: 'Uses the KYC you already hold', p: 'The certificate application is drawn from the KYC your bank already has, so the borrower uploads nothing again.' },
      { h: 'Returns the signed PDF', p: 'Your core system receives the signed loan PDF by webhook, ready to store with the loan.' },
    ],
    limits: 'The Electronic Transactions Act excludes some instruments, including negotiable instruments and mortgage, bond and conveyance deeds. Sign those the way the law requires.',
    products: ['signing-api', 'id-check-api'],
    tags: ['banks', 'digital-signature'],
    faq: [
      { q: 'How does the borrower sign?', a: 'The borrower receives a code on their phone and signs the loan PDF with it. Your application starts the request with one API call.' },
      { q: 'What does the bank keep as proof?', a: 'The signed PDF. The signature is bound to that exact file, so changing a single byte breaks it, and anyone can check it.' },
      { q: 'Can we test first?', a: 'Yes. The sandbox has test keys and never reaches a real signer.' },
    ],
  },
  {
    slug: 'employers',
    name: 'Employers and HR',
    short: 'Offer letters and contracts signed in a day, not a week of couriers.',
    headline: 'Sign contracts without the paper chase',
    description: 'Digital signatures for HR in Nepal: send offer letters, employment contracts and policy acknowledgements for signature and see who has signed.',
    documents: ['Offer letters', 'Employment contracts', 'Policy acknowledgements', 'Resignation and clearance forms'],
    does: [
      { h: 'Sends to many people at once', p: 'Choose the signers, in order if you need it. You see who has signed and who is waiting.' },
      { h: 'Reminds the slow ones', p: 'One tap reminds the person who has not signed.' },
      { h: 'Keeps a record you can check', p: 'Each signed PDF carries the signer’s certificate, so it can be verified without asking anyone.' },
    ],
    limits: 'A digital signature fits where a signature is required by law. A document the Act excludes still needs the usual route.',
    products: ['app', 'signing-api'],
    tags: ['digital-signature', 'guides'],
    faq: [
      { q: 'Does every employee need a certificate?', a: 'To sign with their own certificate, yes. The app guides each person through applying with their ID and a selfie.' },
      { q: 'Can a team share documents?', a: 'Yes. Organizations have members, roles, teams and workspaces.' },
      { q: 'Can we connect it to our HR system?', a: 'Yes, through the Signing API.' },
    ],
  },
  {
    slug: 'insurance',
    name: 'Insurance companies',
    short: 'Policies and claim forms signed by the policyholder, checked by anyone.',
    headline: 'Policies signed at the point of sale',
    description: 'Digital signatures for insurance in Nepal: agents and policyholders sign proposals, policies and claim forms on the phone, and the insurer receives the signed PDF.',
    documents: ['Proposal forms', 'Policy documents', 'Claim forms', 'Nominee declarations'],
    does: [
      { h: 'Signs where the customer is', p: 'The policyholder signs on their phone, so the agent does not carry paper back to the branch.' },
      { h: 'Keeps the order of signatures', p: 'A later signature covers the document and the earlier signatures, so who signed what, and in which order, stays fixed.' },
      { h: 'Feeds your system', p: 'The signed PDF reaches your policy system by webhook.' },
    ],
    limits: 'Check with your legal team which of your forms the Act covers before moving them off paper.',
    products: ['signing-api', 'app'],
    tags: ['digital-signature', 'guides'],
    faq: [
      { q: 'Can an agent sign for a customer?', a: 'No. Each person signs with their own certificate. An agent can start the request and send it.' },
      { q: 'Can we collect several signatures on one policy?', a: 'Yes. Add each signer and the order is recorded.' },
      { q: 'How are claim documents handled?', a: 'A claimant can sign a claim form on their phone, or photograph a paper page and sign it.' },
    ],
  },
  {
    slug: 'real-estate-rentals',
    name: 'Rentals and property managers',
    short: 'Rental agreements signed by landlord and tenant without a meeting.',
    headline: 'Rental agreements signed from two phones',
    description: 'Digital signatures for rental agreements in Nepal: landlord and tenant each sign the same PDF on their phones, and both keep a signed copy.',
    documents: ['Rental agreements', 'Renewal letters', 'Handover checklists', 'Notice letters'],
    does: [
      { h: 'Two signers, one document', p: 'The tenant and the landlord sign the same PDF. The second signature covers the first, so the order is fixed.' },
      { h: 'Works across cities', p: 'A landlord abroad and a tenant in Kathmandu both sign on their phones.' },
      { h: 'Both keep a copy', p: 'Each party holds the signed PDF, and either can check it later.' },
    ],
    limits: 'A deed that transfers title to immovable property, and documents of title, are excluded from the Act. A rental agreement is a different document; confirm yours with a lawyer.',
    products: ['app'],
    tags: ['digital-signature', 'guides'],
    faq: [
      { q: 'Can I sign a land sale deed this way?', a: 'No. Deeds that transfer title to immovable property are outside the Electronic Transactions Act and must be executed the way the law requires.' },
      { q: 'Do both parties need the app?', a: 'Each person signs with their own certificate, so each needs an ePahichan account.' },
      { q: 'Can a property manager send agreements for many units?', a: 'Yes. Use an organization workspace and send each agreement for signature.' },
    ],
  },
  {
    slug: 'education',
    name: 'Schools and colleges',
    short: 'Admission forms and agreements signed by students and guardians remotely.',
    headline: 'Admissions signed from home',
    description: 'Digital signatures for schools and colleges in Nepal: admission forms, fee agreements and consent forms signed by students and guardians on their phones.',
    documents: ['Admission forms', 'Fee agreements', 'Guardian consent forms', 'Scholarship agreements'],
    does: [
      { h: 'Signs without a campus visit', p: 'Guardians who live far away sign on their phones.' },
      { h: 'Handles two signers', p: 'A student and a guardian can both sign the same form.' },
      { h: 'Fits your admissions system', p: 'The Signing API returns the signed PDF to the system you already use.' },
    ],
    limits: 'Students under 18 cannot hold a certificate. A guardian signs for them.',
    products: ['app', 'signing-api'],
    tags: ['digital-signature', 'guides'],
    faq: [
      { q: 'Can a student under 18 sign?', a: 'ePahichan is for people aged 18 and over. A guardian signs the form.' },
      { q: 'Can we collect fee agreements this way?', a: 'Yes, where a signature is required, a digital signature can be used.' },
      { q: 'Can the college check a signed form later?', a: 'Yes. Anyone with the document can check the signature.' },
    ],
  },
];

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);
