import type { Term } from '../types';

const term: Term = {
  slug: 'ekyc',
  term: 'eKYC',
  full: 'electronic Know Your Customer',
  aka: ['e-KYC', 'electronic KYC', 'digital KYC', 'online KYC Nepal', 'eKYC meaning in Nepali'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'eKYC meaning and full form: electronic KYC in Nepal',
  description: 'eKYC stands for electronic Know Your Customer: checking identity online instead of on paper. How it works and how it relates to Nepal’s National ID.',
  short: 'eKYC stands for electronic Know Your Customer. It means confirming who a customer is through digital checks, without paper forms or a branch visit.',
  body: [
    'eKYC is [KYC](/glossary/kyc) done electronically. A bank, wallet or insurer still has to know who its customer is, but the evidence is gathered and checked through software: an ID number checked against a government system, a selfie, or a signed digital form.',
    'There is no single worldwide standard. What counts as eKYC depends on the country and the regulator. In Nepal, the clearest move toward it is the use of the National ID system as the source for identity checks.',
  ],
  sections: [
    {
      id: 'full-form',
      h: 'eKYC full form',
      p: [
        'eKYC stands for electronic Know Your Customer, sometimes written e-KYC or digital KYC. “Know your customer” is the duty on regulated businesses to identify customers and understand the risk they bring. The “e” says the work is done digitally.',
      ],
    },
    {
      id: 'how-it-works',
      h: 'How eKYC works',
      p: [
        'Methods differ, but most eKYC flows follow the same steps:',
      ],
      list: [
        'The customer gives an identifier, such as a National ID number, and basic details.',
        'The business checks those details against an authoritative source. In Nepal that source is the National ID system.',
        'The business may add a check that the person is present, such as [biometric authentication](/glossary/biometric-authentication), [liveness detection](/glossary/liveness-detection) or a [video KYC](/glossary/video-kyc) call.',
        'The customer signs the application digitally, and the business keeps the record.',
      ],
    },
    {
      id: 'nepal',
      h: 'eKYC and the National ID in Nepal',
      p: [
        'Nepal Rastra Bank told banks and financial institutions that from 14 January 2025 (Magh 1, 2081) they must verify customer details through the electronic records of the National ID and facilitate account opening based on the card or its number. A later amendment to the payment systems directive put similar National ID verification on digital wallets, with existing users given until 17 October 2026 to update.',
        'These directives are about verifying against National ID records. We did not find a single central bank rule titled “eKYC”, so use the term to describe the method and check the exact directive for the obligation.',
      ],
    },
    {
      id: 'vs-kyc',
      h: 'eKYC vs traditional KYC',
      p: [
        'Traditional KYC uses paper forms, photocopies and a branch visit. eKYC replaces the copies with a data check, which is faster and leaves a clearer record. The legal duties stay the same. See [customer due diligence](/glossary/customer-due-diligence) for what the business must still do beyond a match.',
      ],
    },
    {
      id: 'limits',
      h: 'What eKYC does not prove',
      p: [
        'A matching National ID number shows the details are real. It does not show that the person using them is the owner. That gap is why businesses add presence checks, and why a verified identity is often followed by a [digital signature](/glossary/digital-signature) so the later agreement is tied to the person too.',
      ],
    },
    {
      id: 'an-example-opening-an-account-step-by-step',
      h: 'An example: opening an account step by step',
      p: [
        'A customer downloads a bank’s app and enters his NIN, full name, gender and date of birth in Bikram Sambat. The bank’s server sends these four fields to a verification service and receives match or no match. On a match, the app asks him to confirm his phone number with a code and, depending on the bank’s risk rules, to take a selfie. The bank screens him against its lists, shows the account agreement, and he signs it with his fingerprint. The account opens the same day.',
        'On a no match, the app does not say which field was wrong. The customer is asked to check what he typed, since a spelling variant or a date in the wrong calendar is the usual cause, and to try again or visit a branch.',
      ],
    },
    {
      id: 'what-the-central-bank-has-said',
      h: 'What the central bank has said',
      p: [
        'Nepal Rastra Bank’s monetary policy for fiscal year 2082/83 says banks and financial institutions can obtain customer identification details through national identity cards, and that once a customer updates details in one bank, the infrastructure is to be built so other banks and agencies can receive them. That points toward reuse: verify once, share with the customer’s consent.',
        'Earlier, in 2022, the Unified Guidelines were amended so that banks should not open the account of a person who cannot comply with customer identification, and should end the relationship if the account already exists. NRB’s oversight work on payment providers also found many customers whose KYC had not been verified, which is part of the reason for the 2026 wallet rules.',
      ],
    },
    {
      id: 'choosing-a-method-by-risk',
      h: 'Choosing a method by risk',
      p: [
        'A small account with low limits can rest on a National ID match plus a phone check. A larger account or a loan might add a selfie with [liveness detection](/glossary/liveness-detection). A high-risk customer, such as a company with complex ownership, may need documents and a [video KYC](/glossary/video-kyc) call or a branch visit.',
        'The cheapest check that gives enough confidence should run first. Failing customers move to the next, costlier step, and the business records which step each customer passed.',
      ],
    },
    {
      id: 'mistakes-that-cause-a-no-match',
      h: 'Mistakes that cause a no match',
      p: [
        'Most no-match results come from data entry, not fraud. Dates typed in the wrong calendar, names with extra spaces or the wrong spelling, a NIN with a dash, and Latin digits where the service expects Devanagari are the usual causes. Because the service never says which field was wrong, the app should ask the customer to review each field in turn and show their entries back in a clear layout before sending.',
        'Give people a way out. After two failed attempts, offer an assisted route, such as a branch or a support call, rather than letting them retry indefinitely.',
      ],
    },
    {
      id: 'epahichan',
      h: 'eKYC with ePahichan',
      p: [
        'The ePahichan [ID check API](/products/id-check-api) takes a NIN, name, gender and Bikram Sambat date of birth and returns match or no match, with no record returned. A bank that already holds KYC can also use it to draw a certificate application for the Signing API, so the customer does not repeat the process.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of eKYC?', a: 'eKYC stands for electronic Know Your Customer.' },
    { q: 'What is eKYC in Nepal?', a: 'It is the use of electronic checks, mostly against National ID records, to verify customers instead of paper documents.' },
    { q: 'Is eKYC mandatory in Nepal?', a: 'Banks must verify customers against National ID records under a Nepal Rastra Bank directive effective 14 January 2025. Check the current directive and exemptions for your case.' },
    { q: 'What is the difference between KYC and eKYC?', a: 'KYC is the duty to know your customer. eKYC is doing it digitally.' },
    { q: 'Does eKYC need a selfie?', a: 'Not always. Some flows check an ID number only, while others add a selfie or video for presence.' },
  ],
  related: ['kyc', 'nin', 'video-kyc', 'digital-onboarding'],
  product: 'id-check-api',
};

export default term;
