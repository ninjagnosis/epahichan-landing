import type { Term } from '../types';

const term: Term = {
  slug: 'nin',
  term: 'NIN',
  full: 'National Identity Number',
  aka: ['National ID number', 'NID number', 'राष्ट्रिय परिचय नम्बर'],
  updated: '2026-10-19',
  title: 'NIN full form and meaning: National Identity Number in Nepal',
  description: 'NIN stands for National Identity Number, the ten-digit number on a Nepali National ID card. What it means, where it is needed and how a NIN is verified.',
  short: 'NIN stands for National Identity Number. In Nepal it is the ten-digit number on the National ID card, unique to each person. Banks and government offices use it to confirm who someone is.',
  body: [
    'The NIN is the number that identifies a person in Nepal’s national identity system. It is printed on the National ID card (राष्ट्रिय परिचयपत्र), but the number matters more than the card: it is what offices look up and what a verification service checks.',
    'In Nepali the NIN is called राष्ट्रिय परिचय नम्बर (rastriya parichaya number), which means “national identity number”. People also call it the NID number or National ID number.',
  ],
  sections: [
    {
      id: 'full-form',
      h: 'NIN full form',
      p: [
        'The full form of NIN is National Identity Number. In Nepal it is issued by the Department of National ID and Civil Registration (DoNIDCR), the government office that also runs birth, death and marriage registration.',
      ],
      list: [
        'N: National, issued by the federal government for the whole country.',
        'I: Identity, it identifies one person and nobody else.',
        'N: Number, a ten-digit number that stays with that person for life.',
      ],
    },
    {
      id: 'meaning',
      h: 'NIN meaning in simple words',
      p: [
        'Think of the NIN as a person’s permanent reference number with the government. Names can be spelt in different ways, and two people can share the same name and birthday. A NIN cannot be shared. That is why offices increasingly ask for it instead of relying on a name and a citizenship certificate number alone.',
        'The National ID card holds the NIN together with the holder’s photo, personal details and fingerprints, which are recorded when the person enrols.',
      ],
    },
    {
      id: 'card-vs-number',
      h: 'NIN vs National ID card vs citizenship certificate',
      p: [
        'These three are often mixed up:',
      ],
      list: [
        'NIN: the ten-digit number. It is what systems check.',
        'National ID card: the physical smart card that carries the NIN, photo and personal details. The government began issuing it in 2018.',
        'Citizenship certificate (नागरिकता): the older document that proves Nepali citizenship. It has its own number, which is not the NIN.',
      ],
    },
    {
      id: 'who-gets-one',
      h: 'Who gets a NIN?',
      p: [
        'Adults receive a NIN when they enrol for the National ID, with their citizenship certificate and fingerprints. Since 2024, the government has also started assigning a NIN to children when their birth is registered at the ward office, so in future most people will have a NIN from birth.',
      ],
    },
    {
      id: 'where-needed',
      h: 'Where you need a NIN in Nepal',
      p: [
        'The NIN is being phased in across services, and the rules change, so check with the office concerned. Uses reported so far include:',
      ],
      list: [
        'Opening a bank account: a Nepal Rastra Bank directive from January 2025 asks banks to verify new customers using the National ID or its number.',
        'Social security allowance: the government made the National ID a requirement for renewing allowances in many districts from July 2024, with exceptions for some groups.',
        'Government services: the government has announced plans to use the National ID across public services.',
        'Know your customer (KYC) checks at banks, insurers, cooperatives and other regulated businesses.',
      ],
    },
    {
      id: 'verification',
      h: 'How a NIN is verified',
      p: [
        'A business does not need to see someone’s full government record to trust their NIN. A verification service sends what the person says is true, the NIN, full name, gender and date of birth in Bikram Sambat, and the National ID system answers match or no match.',
        'The answer does not say which field was wrong and no record comes back. That keeps the check useful for [KYC](/glossary/kyc) without letting anyone use it to look up a stranger’s details.',
      ],
    },
    {
      id: 'other-countries',
      h: 'NIN in other countries',
      p: [
        'NIN is also used outside Nepal. In Nigeria, NIN stands for National Identification Number, an eleven-digit number issued by the National Identity Management Commission. Other countries use similar names for their own ID numbers. On this page, NIN means Nepal’s National Identity Number.',
      ],
    },
    {
      id: 'epahichan',
      h: 'NIN verification with ePahichan',
      p: [
        'The ePahichan ID check API confirms a NIN in two calls: get a token, then send the four fields. Banks and other businesses use it during onboarding, and the same verified identity can lead to a [digital signature certificate](/glossary/digital-signature-certificate), so a customer can sign documents digitally without visiting a branch.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of NIN in Nepal?', a: 'NIN stands for National Identity Number. It is the ten-digit number on the Nepali National ID card, issued by the Department of National ID and Civil Registration.' },
    { q: 'What is NIN number meaning in Nepali?', a: 'In Nepali, NIN is राष्ट्रिय परिचय नम्बर (rastriya parichaya number), the number on the राष्ट्रिय परिचयपत्र, the National ID card.' },
    { q: 'How many digits is a NIN in Nepal?', a: 'A Nepali NIN has ten digits.' },
    { q: 'Is the NIN the same as the citizenship number?', a: 'No. The citizenship certificate has its own number. The NIN is a separate number given when a person enrols for the National ID, or at birth registration for children.' },
    { q: 'What does NIN card mean?', a: 'A NIN card usually means the National ID card, the smart card that carries a person’s National Identity Number, photo and personal details.' },
    { q: 'Can a business check if a NIN is real?', a: 'Yes. A verification service such as an ID check API sends the NIN, name, gender and date of birth to the National ID system and gets back match or no match, without seeing the full record.' },
  ],
  related: ['kyc', 'digital-signature-certificate', 'digital-signature'],
  product: 'id-check-api',
};

export default term;
