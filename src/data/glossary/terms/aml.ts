import type { Term } from '../types';

const term: Term = {
  slug: 'aml',
  term: 'AML',
  full: 'Anti-Money Laundering',
  aka: ['anti money laundering Nepal', 'AML CFT', 'FIU Nepal', 'सम्पत्ति शुद्धीकरण निवारण'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'AML meaning: anti-money laundering rules in Nepal',
  description: 'AML stands for anti-money laundering. What it means, how Nepal’s Asset (Money) Laundering Prevention Act and FIU-Nepal work, and how KYC fits in.',
  short: 'AML stands for anti-money laundering: the laws and controls that stop criminals from disguising illegal money as legitimate. In Nepal the core law is the Asset (Money) Laundering Prevention Act, 2064.',
  body: [
    'Money laundering is making money from crime look like it came from a lawful source. AML is everything a country and its regulated businesses do to prevent that, from checking customers to reporting suspicious activity.',
    'It usually appears with CFT, countering the financing of terrorism, as AML/CFT. [KYC](/glossary/kyc) is the part of AML that most customers meet, because it is why banks ask for identity documents.',
  ],
  sections: [
    {
      id: 'full-form',
      h: 'AML full form',
      p: ['AML stands for Anti-Money Laundering. Policies at Nepali banks are commonly titled “AML, CFT and KYC Policy”, which shows how closely the three are linked.'],
    },
    {
      id: 'law',
      h: 'The law in Nepal',
      p: [
        'The Asset (Money) Laundering Prevention Act, 2064 (2008) is Nepal’s main AML law and has since been amended. Section 6 deals with customer identification: banks, financial institutions and other covered businesses must establish a customer’s identity when starting a relationship or handling transactions above a limit set by rules.',
        'We did not verify other section numbers or thresholds against the current consolidated text. Check the Act and Nepal Rastra Bank directives for exact duties.',
      ],
    },
    {
      id: 'fiu',
      h: 'FIU-Nepal',
      p: [
        'The Financial Intelligence Unit of Nepal sits within Nepal Rastra Bank. It is the central body that collects, analyses and passes on financial information from reporting entities, such as suspicious transaction reports.',
      ],
    },
    {
      id: 'what-businesses-do',
      h: 'What businesses do',
      p: ['Covered businesses typically:'],
      list: [
        'Identify and verify customers, see [customer due diligence](/glossary/customer-due-diligence).',
        'Monitor transactions for unusual patterns.',
        'Report suspicious activity to the FIU.',
        'Keep records of identity checks and transactions, for the period the law sets.',
      ],
    },
    {
      id: 'identity',
      h: 'AML and identity checks',
      p: [
        'AML works only if the business knows who it is dealing with. That is why identity verification, including checks against the National ID, sits at the centre of onboarding. See [eKYC](/glossary/ekyc) and [NIN](/glossary/nin).',
      ],
    },
    {
      id: 'why-a-bank-asks-so-many-questions',
      h: 'Why a bank asks so many questions',
      p: [
        'A customer who deposits a large sum in cash is often asked where the money came from. That is not suspicion of the person. It is the bank doing what AML rules require, because cash is the easiest form of money to disguise. The bank records the answer, compares it with what it knows about the customer, and keeps the record.',
        'Laundering is usually described in three stages. Placement puts illegal cash into the financial system, for example through many small deposits. Layering moves it around through transfers, companies and accounts so that its origin is hard to trace. Integration brings it back as apparently clean wealth, such as property or a business. Each AML control targets one or more of these stages: identity checks and cash reporting at placement, monitoring at layering, and ownership checks at integration.',
      ],
    },
    {
      id: 'suspicious-transaction-reports',
      h: 'Suspicious transaction reports',
      p: [
        'When a bank staff member sees something that does not fit, such as a student account suddenly receiving large transfers from several unrelated people, they raise it internally. The compliance officer decides whether to file a suspicious transaction report with FIU-Nepal. The bank usually must not tell the customer that a report was filed, so that an investigation is not spoiled.',
        'The report is not an accusation. FIU-Nepal analyses it with other information and passes it to investigators only if there is reason to. Small businesses covered by the law, not just banks, need a named person who handles these reports and knows what to look for.',
      ],
    },
    {
      id: 'the-risk-based-approach',
      h: 'The risk-based approach',
      p: [
        'Modern AML work does not treat every customer alike. The business assesses risk, by customer type, product, country and channel, and spends more effort where risk is higher. A salaried employee with a small account sits at one end. A company moving money across borders sits at the other.',
        'Writing this down in a policy is part of the duty. The policy names who is responsible, how customers are rated, which transactions trigger a review and how staff are trained. Regulators ask to see it, and so do auditors.',
      ],
    },
    {
      id: 'epahichan',
      h: 'AML and ePahichan',
      p: [
        'ePahichan is not an AML monitoring system. The ID check API answers match or no match for a National ID number, which a business can use as one step in its own checks.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of AML?', a: 'AML stands for Anti-Money Laundering.' },
    { q: 'What is the main AML law in Nepal?', a: 'The Asset (Money) Laundering Prevention Act, 2064 (2008), as amended.' },
    { q: 'What is FIU-Nepal?', a: 'It is the Financial Intelligence Unit within Nepal Rastra Bank that collects and analyses reports from covered businesses.' },
    { q: 'What is the difference between AML and KYC?', a: 'AML is the whole set of controls against money laundering. KYC is the part that identifies customers.' },
  ],
  related: ['kyc', 'customer-due-diligence', 'ekyc', 'nin'],
};

export default term;
