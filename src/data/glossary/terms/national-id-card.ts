import type { Term } from '../types';

const term: Term = {
  slug: 'national-id-card',
  term: 'National ID card',
  aka: ['NID card Nepal', 'rastriya parichaya patra', 'राष्ट्रिय परिचयपत्र', 'Nepal smart ID card'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'National ID card in Nepal: what it holds and how to apply',
  description: 'The Nepali National ID card (राष्ट्रिय परिचयपत्र) is a smart card with a ten-digit number and photo. What it holds, who needs one and how to apply.',
  short: 'The National ID card (राष्ट्रिय परिचयपत्र) is Nepal’s smart identity card. It carries the holder’s National Identity Number, photo and personal details and is issued by the Department of National ID and Civil Registration.',
  body: [
    'The National ID card is the physical card of Nepal’s national identity system. It is a smart card that holds a person’s details together with their National Identity Number, so that an office can read the card or look the number up in the central system.',
    'People often say “NID” for the card and the number together. They are separate things. The card is the object you carry. The number is what systems check. The number is covered in depth under [NIN](/glossary/nin), so this page stays with the card.',
  ],
  sections: [
    {
      id: 'what-it-holds',
      h: 'What the card holds',
      p: [
        'The card is tied to the record created when a person enrols. The details recorded include the holder’s name, photo, date of birth, gender, address and family details, along with fingerprints taken at enrolment. The National Identity Number printed on the card identifies the person across offices and does not change.',
        'The government began issuing the card in 2018 through the Department of National ID and Civil Registration (DoNIDCR).',
      ],
    },
    {
      id: 'card-vs-number',
      h: 'Card vs number',
      p: [
        'Losing the card does not cancel the number. A person keeps the same [NIN](/glossary/nin) and can apply for a replacement. Regulators have also moved to accept the number as well as the card. A Nepal Rastra Bank directive effective 14 January 2025 (Magh 1, 2081) told banks to verify new customers against the electronic National ID records and to facilitate account opening based on the card or its number.',
      ],
    },
    {
      id: 'who-needs-it',
      h: 'Who needs one',
      p: [
        'Citizens aged 16 and over can enrol. The card is increasingly asked for in banking and payments. In July 2026, the central bank eased the bank-account rule: existing customers whose accounts were opened before Magh 1, 2080 have until the end of Ashwin 2083 to update their National ID details, and exemptions apply to groups such as children under 16 and people unable to care for themselves. Digital wallet rules were tightened in the same period. Rules like these change, so confirm with your bank or wallet provider.',
      ],
    },
    {
      id: 'applying',
      h: 'How to apply',
      p: [
        'Enrolment is in person. A person goes to an enrolment centre, brings their original [citizenship certificate](/glossary/citizenship-certificate), and has their photo and fingerprints recorded. Secondary guides add a marriage certificate where relevant and say the card is free for citizens. Official fees, centres and documents can change, so check with DoNIDCR or your local office before you go.',
      ],
    },
    {
      id: 'verification',
      h: 'How the card is checked',
      p: [
        'A business can read the number from the card, but trusting it means checking it against the system. A verification service sends the number with name, gender and date of birth and the system answers match or no match, without handing over the full record. This is what makes the card useful for [KYC](/glossary/kyc).',
      ],
    },
    {
      id: 'enrolment-in-two-steps',
      h: 'Enrolment in two steps',
      p: [
        'Guides describe enrolment as two steps. First, an online pre-enrolment on the Department’s website. Second, a visit to the nearest district administration office to have biometrics captured. According to these guides, the capture includes a photo, a digital signature, an iris scan and the fingerprints of all ten fingers. They are commercial and bank blogs, so confirm details on donidcr.gov.np.',
        'Take the original citizenship certificate, a photocopy and, where possible, copies of your parents’ certificates. If your records contain errors, ask the office how to correct them first.',
      ],
    },
    {
      id: 'children-and-the-number',
      h: 'Children and the number',
      p: [
        'One source, updated in December 2025, says unique National ID numbers have been assigned at birth registration since mid-2024, and that the physical card is printed later, after the holder turns 16. A news report in 2025 also described an ID for under-16s, but we found it only in a commercial guide and treat it as unconfirmed.',
        'For businesses this means a growing number of people will have a NIN before they have a card. A system that insists on the card will fail them, while a system that checks the number will not. See [NIN](/glossary/nin).',
      ],
    },
    {
      id: 'how-far-the-roll-out-has-reached',
      h: 'How far the roll-out has reached',
      p: [
        'The same source reports that data for about 14 million citizens, around 90 percent of the eligible population, had been collected by June 2024, and that about three million cards had been printed at the time of writing. It gave no 2025 printing figure.',
        'The gap between enrolled people and printed cards is why regulators accept the number as well as the card, and why verification against the electronic record matters more than a card in a customer’s hand.',
      ],
    },
    {
      id: 'keeping-the-card-and-number-safe',
      h: 'Keeping the card and number safe',
      p: [
        'Treat the NIN as personal data. Sharing it is not dangerous by itself, because a check also needs the name, gender and date of birth, but there is no reason to post it publicly or send it by an unprotected channel. If your card is lost, report it to the office and keep the number, which does not change.',
        'Businesses that read the card should record the number and the result of the check, not a photograph of the card, unless the law or the product needs it. Less stored data means less to protect and less to lose, and fewer questions if a breach ever happens.',
      ],
    },
    {
      id: 'epahichan',
      h: 'The card and ePahichan',
      p: [
        'The ePahichan ID check API takes the NIN, name, gender and Bikram Sambat date of birth and answers match or no match. It does not read the card itself and no record comes back.',
      ],
    },
  ],
  faq: [
    { q: 'What is a National ID card in Nepal?', a: 'It is a smart card issued by the Department of National ID and Civil Registration that carries a person’s National Identity Number, photo and personal details.' },
    { q: 'Is the National ID card the same as the NIN?', a: 'No. The NIN is the ten-digit number. The card is the physical document that carries it.' },
    { q: 'When did Nepal start issuing National ID cards?', a: 'The government began issuing the card in 2018.' },
    { q: 'Do I need a National ID card to open a bank account?', a: 'Since 14 January 2025, banks verify new customers against National ID records and accept the card or its number. Check current exemptions with your bank.' },
    { q: 'What if I lose my National ID card?', a: 'Your NIN stays the same. Apply for a replacement through the National ID office. Procedures and fees can change.' },
  ],
  related: ['nin', 'citizenship-certificate', 'kyc', 'digital-identity'],
  product: 'id-check-api',
};

export default term;
