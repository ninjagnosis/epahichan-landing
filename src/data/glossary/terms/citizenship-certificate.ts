import type { Term } from '../types';

const term: Term = {
  slug: 'citizenship-certificate',
  term: 'Citizenship certificate',
  aka: ['nagarikta', 'Nepal citizenship', 'नागरिकता', 'नागरिकता प्रमाणपत्र', 'citizenship card Nepal'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'Citizenship certificate in Nepal: meaning, types and use',
  description: 'The citizenship certificate (नागरिकता) is Nepal’s proof of citizenship. What it is, who can get one, and how it differs from the National ID.',
  short: 'A citizenship certificate (नागरिकता) is the document that proves a person is a citizen of Nepal. It is issued by a district administration office and is the base document for many other ID checks.',
  body: [
    'The citizenship certificate, called नागरिकता or nagarikta in Nepali, is the most widely used identity document in Nepal. Banks, offices and schools ask for it when they need to know that someone is a Nepali citizen and what their legal name and date of birth are.',
    'It is a paper document, not a smart card, and it has its own number. That number is not the [NIN](/glossary/nin) on the National ID card. The two documents exist side by side, and the citizenship certificate is normally what a person shows when they first enrol for the [National ID](/glossary/national-id-card).',
  ],
  sections: [
    {
      id: 'what-it-is',
      h: 'What a citizenship certificate is',
      p: [
        'It is the proof of citizenship issued under Nepal’s citizenship law. The certificate records the holder’s name, birthplace, date of birth, permanent address and family details, and carries a photo. District administration offices issue it, and the Home Ministry oversees the offices.',
        'Certificates are issued to people who have reached 16. The Citizenship Act, 2063 defines a minor as someone under 16.',
      ],
    },
    {
      id: 'types',
      h: 'Types of citizenship',
      p: [
        'Nepali law recognises more than one route to citizenship. The main ones are:',
      ],
      list: [
        'By descent: a person whose father or mother is a Nepali citizen at the time of birth. This is the route most people use.',
        'By birth: a historical category for people born in Nepal before April 1990, covered in some legal commentary.',
        'Naturalised: for example a foreign woman married to a Nepali citizen, subject to the conditions in the law.',
      ],
    },
    {
      id: 'applying',
      h: 'How people apply',
      p: [
        'An applicant aged 16 or over applies at the district administration office. For citizenship by descent, a district office lists documents such as an application form, a parent’s or a relative’s citizenship certificate, and a birth certificate or local recommendation that confirms birthplace and relationship. Where papers are missing, the office may rely on a local inquiry report.',
        'Requirements and forms change, and amendments have been proposed and debated in recent years. Check with the district administration office or the Home Ministry site before you apply.',
      ],
    },
    {
      id: 'vs-national-id',
      h: 'Citizenship certificate vs National ID card',
      p: [
        'The citizenship certificate proves citizenship. The National ID card carries a ten-digit number, a photo and details recorded with fingerprints, and it is built to be checked electronically. See [NIN](/glossary/nin) for the number and [National ID card](/glossary/national-id-card) for the card.',
        'The certificate has no national electronic database that an office can query. Checking it normally means checking with the issuing district office. That is one reason regulators are moving [KYC](/glossary/kyc) toward the National ID.',
      ],
    },
    {
      id: 'where-used',
      h: 'Where it is used',
      p: [
        'People show the certificate to open bank accounts, get a passport, register a business, apply for a driving licence, enrol for the National ID and take part in government services. For a [digital signature certificate](/glossary/digital-signature-certificate), the issuer needs to confirm who the applicant is, and the citizenship certificate is one of the documents that can support that check.',
      ],
    },
    {
      id: 'common-problems-with-the-certificate',
      h: 'Common problems with the certificate',
      p: [
        'Most trouble comes from small mismatches. A name spelt differently from a school record, a surname changed after marriage, a date of birth in Bikram Sambat that a clerk converted wrongly to AD, or a certificate issued many years ago with sparse details. Each of these can cause a bank, an embassy or an ID check to reject an otherwise genuine person.',
        'Because there is no national database that offices can query for the certificate, checking one normally means asking the issuing district administration office. That is slow, which is a large part of why the National ID, which can be checked electronically, is replacing the certificate as the base for [KYC](/glossary/kyc).',
      ],
    },
    {
      id: 'the-certificate-and-national-id-enrolment',
      h: 'The certificate and National ID enrolment',
      p: [
        'Guides to National ID enrolment list the original citizenship certificate and a photocopy as the main document, with parents’ citizenship copies where possible and a marriage certificate if it applies. Applicants must be 16 or older. These come from secondary guides, so confirm the list with the National ID office.',
        'The practical point is that the certificate is usually the first identity document a person owns and the National ID is the second. Errors on the first carry into the second, so correct a wrong spelling or date at the district office before enrolling, not after the card is printed.',
      ],
    },
    {
      id: 'name-and-date-formats',
      h: 'Name and date formats',
      p: [
        'The certificate records the date of birth in Bikram Sambat, see [Bikram Sambat](/glossary/bikram-sambat). Names are written in Devanagari, with an English spelling on newer forms. When a business collects details, it should store the name exactly as printed and let a person correct it, not guess a transliteration.',
        'For an ID check, enter the details the way the National ID system holds them. A match depends on the system’s record, not on how the certificate happens to spell a name.',
      ],
    },
    {
      id: 'keeping-a-copy-safely',
      h: 'Keeping a copy safely',
      p: [
        'People hand over photocopies of their citizenship certificate constantly, and a copy in the wrong hands is enough to attempt fraud. When a business collects copies, it should say why it needs them, store them with access limits and delete them when the purpose ends. When a person gives a copy, writing the purpose across it is a common way to limit reuse.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Citizenship and ePahichan',
      p: [
        'The ePahichan ID check API checks a National ID number against name, gender and date of birth. It does not read a citizenship certificate. A business that holds a customer’s verified details can use them to request a certificate application through the Signing API.',
      ],
    },
  ],
  faq: [
    { q: 'What is a citizenship certificate in Nepal?', a: 'It is the document that proves a person is a Nepali citizen, issued by a district administration office to people aged 16 and over.' },
    { q: 'What is नागरिकता in English?', a: 'नागरिकता means citizenship. In daily use, people say it to mean the citizenship certificate.' },
    { q: 'Is the citizenship number the same as the NIN?', a: 'No. The citizenship certificate has its own number. The NIN is the ten-digit number on the National ID card.' },
    { q: 'At what age can you get a citizenship certificate in Nepal?', a: 'Certificates are issued to people who have reached 16.' },
    { q: 'Can a business verify a citizenship certificate online?', a: 'There is no national database for it that offices can query. Verification normally goes through the issuing district administration office. The National ID can be checked electronically.' },
  ],
  related: ['nin', 'national-id-card', 'kyc', 'digital-identity'],
};

export default term;
