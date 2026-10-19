import type { Term } from '../types';

const term: Term = {
  slug: 'customer-due-diligence',
  term: 'Customer due diligence',
  full: 'CDD',
  aka: ['CDD', 'enhanced due diligence', 'EDD', 'customer due diligence meaning'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'Customer due diligence (CDD): meaning and steps',
  description: 'Customer due diligence is how a business identifies a customer, understands their risk and keeps checking. The steps, and how it relates to KYC and AML.',
  short: 'Customer due diligence (CDD) is how a regulated business identifies a customer, understands the risk they bring and keeps that picture current while the relationship lasts.',
  body: [
    'CDD goes further than checking an ID. The business confirms who the customer is, learns what they do and why they need the service, and decides how closely to watch the account. It is the working core of [KYC](/glossary/kyc) and a central duty under [AML](/glossary/aml) rules.',
    'The depth depends on risk. A small savings account needs less than a large business account with overseas payments.',
  ],
  sections: [
    {
      id: 'steps',
      h: 'The usual steps',
      p: ['Guidance in most countries describes the same elements:'],
      list: [
        'Identify the customer and verify the identity with reliable evidence.',
        'Identify the real owner when a company or another person is behind the account.',
        'Understand the purpose of the relationship and the expected activity.',
        'Monitor transactions and keep the information up to date.',
      ],
    },
    {
      id: 'levels',
      h: 'Simplified, standard and enhanced',
      p: [
        'Low-risk customers may get simplified checks. Most get standard CDD. High-risk customers, such as politically exposed persons or complex structures, get enhanced due diligence with extra evidence and senior approval.',
      ],
    },
    {
      id: 'nepal',
      h: 'In Nepal',
      p: [
        'Nepal’s Asset (Money) Laundering Prevention Act, 2064 requires covered businesses to identify customers, and banks follow Nepal Rastra Bank directives and their own AML, CFT and KYC policies. Covered businesses must also keep records and report suspicious transactions to FIU-Nepal. Check the Act and current NRB directives for the exact record-keeping period.',
      ],
    },
    {
      id: 'identity',
      h: 'Where identity checks fit',
      p: [
        'Verifying identity is the first step of CDD. A check against the National ID, see [NIN](/glossary/nin) and [eKYC](/glossary/ekyc), proves the details are real, but it is not the whole of CDD. The business still has to understand the customer and watch the account.',
      ],
    },
    {
      id: 'examples-a-savings-account-and-a-company-account',
      h: 'Examples: a savings account and a company account',
      p: [
        'For a basic savings account for a salaried person, standard CDD may mean confirming the identity against the National ID, recording the occupation and the source of funds in a line, and setting normal monitoring.',
        'For a trading company that wants to receive payments from abroad, the bank asks much more: registration papers, who ultimately owns the company, the directors’ IDs, the expected volumes and the countries involved. The bank may also seek senior approval before opening the account. The same legal duty applies to both customers, and the depth differs because the risk differs.',
      ],
    },
    {
      id: 'ongoing-monitoring',
      h: 'Ongoing monitoring',
      p: [
        'CDD does not stop on the day the account opens. The bank keeps watching the relationship. If a customer who said she was a student starts moving large sums, or a company’s activity no longer matches the business it described, the bank asks questions and may raise the risk rating. Periodic reviews refresh documents, such as an expired ID or a changed address.',
        'Higher-risk customers are reviewed more often. Good records make this cheap: if the first check kept the verified fields and the date, a review can compare them against a fresh check and focus on what changed.',
      ],
    },
    {
      id: 'the-elements-set-by-the-international-standard',
      h: 'The elements set by the international standard',
      p: [
        'The Financial Action Task Force’s Recommendation 10 lists the core elements. Identify the customer and verify the identity using reliable, independent sources. Identify the beneficial owner and take reasonable steps to verify who they are, which for companies means understanding who owns and controls it. Understand the purpose and intended nature of the relationship. Conduct ongoing due diligence, scrutinising transactions against what the institution knows of the customer and, where needed, the source of funds.',
        'National laws, including Nepal’s, build on this standard. If you design a process, mapping each step to one of these four elements shows what is covered and what is missing.',
      ],
    },
    {
      id: 'records',
      h: 'Records',
      p: [
        'Whatever the depth of the checks, keep what you checked, when and with what result. If a regulator or auditor asks why an account was opened, the record is the answer. Keep the period the law requires, and check the current rule for your sector.',
      ],
    },
    {
      id: 'epahichan',
      h: 'CDD and ePahichan',
      p: [
        'The ePahichan [ID check API](/products/id-check-api) supports the identity step by returning match or no match for a National ID number, name, gender and date of birth. It does not do risk scoring or monitoring.',
      ],
    },
  ],
  faq: [
    { q: 'What is customer due diligence?', a: 'It is the process of identifying a customer, understanding their risk and monitoring the relationship.' },
    { q: 'What is the difference between CDD and KYC?', a: 'KYC is the broader duty to know your customer. CDD is the set of steps, including risk assessment and monitoring, that carry it out.' },
    { q: 'What is enhanced due diligence?', a: 'It is a deeper level of checks for high-risk customers, with more evidence and senior sign-off.' },
    { q: 'Does an ID check complete CDD?', a: 'No. It covers identity only. CDD also needs purpose, risk and monitoring.' },
  ],
  related: ['kyc', 'aml', 'ekyc', 'nin'],
};

export default term;
