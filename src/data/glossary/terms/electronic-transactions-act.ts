import type { Term } from '../types';

const term: Term = {
  slug: 'electronic-transactions-act',
  term: 'Electronic Transactions Act',
  full: 'Electronic Transactions Act, 2063',
  aka: ['ETA Nepal', 'Electronic Transaction Act 2063', 'विद्युतीय कारोबार ऐन', 'साइबर कानून नेपाल'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'Electronic Transactions Act, 2063: Nepal’s digital signature law',
  description: 'The Electronic Transactions Act, 2063 is the Nepali law that recognises digital signatures and electronic records, and what it means for signing.',
  short: 'The Electronic Transactions Act, 2063 is the Nepali law that gives legal recognition to electronic records and digital signatures. It also sets up the licensing of certifying authorities and the offices that supervise them.',
  body: [
    'The Electronic Transactions Act, 2063 (विद्युतीय कारोबार ऐन, 2063) is the main law behind digital signing in Nepal. It says when an electronic record can stand in for a paper one, when a digital signature counts as a signature, and who is allowed to issue the certificates those signatures depend on.',
    'It is often called the ETA or, loosely, Nepal’s cyber law, because it also contains offences for computer misuse and illegal online content. For anyone signing documents, the part that matters is the framework for digital signatures and certifying authorities.',
  ],
  sections: [
    {
      id: 'what-it-is',
      h: 'What the Act is',
      p: [
        'The Act was passed by the Nepali parliament in 2063 BS. The copy held by UNODC records its authentication on 22 Mangsir 2063, which is 8 December 2006. Some sources date it 2008 because they count from when it came into force or was later reprinted, so quote the Bikram Sambat year, 2063, when you cite it.',
        'It is supported by the Electronic Transactions Rules, 2064, which the government framed under Section 78 of the Act. The rules fill in the detail on certifying electronic records and securing digital signatures.',
      ],
    },
    {
      id: 'digital-signatures',
      h: 'What it says about digital signatures',
      p: [
        'The Act defines an asymmetric crypto system as a system that creates a secured key pair: a [private key](/glossary/private-key) that creates a digital signature and a [public key](/glossary/public-key) that verifies it. That definition is what ties Nepali law to the technology behind a [digital signature](/glossary/digital-signature).',
        'The Act recognises digital signatures that rest on a certificate issued by a licensed certifying authority. A signature made with a simple scan, a typed name or a drawn mark is a different thing, covered in [digital signature vs electronic signature](/blog/digital-signature-vs-electronic-signature).',
      ],
    },
    {
      id: 'who-supervises',
      h: 'Who supervises certifying authorities',
      p: [
        'The Act creates the Office of the Controller of Certification (OCC), which sits under the Ministry responsible for communication and information technology. A body that wants to issue certificates must hold a licence under the Act. The licence is defined by reference to Section 18(3).',
        'The OCC keeps the list of licensed [certifying authorities](/glossary/certifying-authority). See [OCC Nepal](/glossary/occ-nepal) for what the office does day to day.',
      ],
    },
    {
      id: 'offences',
      h: 'Offences in the Act',
      p: [
        'The Act is also Nepal’s main law on computer offences. Section 47, the most cited provision, penalises publishing illegal material in electronic form. It is widely quoted in news about online speech and has little to do with signing, but it is why many people hear of the ETA first as a cyber law.',
      ],
    },
    {
      id: 'practice',
      h: 'What this means when you sign',
      p: [
        'A signing app or API is only as strong as the certificate behind it. If the certificate comes from a licensed certifying authority, the signature rests on the framework the Act describes. If it does not, the document may still show a name and a date, but it does not have the same footing.',
        'The Act does not make every signature on every document valid. Some documents have their own rules on form, witnesses or registration. Check the rules for the particular document, and see [documents not signed digitally in Nepal](/blog/documents-not-signed-digitally-nepal) for common examples.',
      ],
    },
    {
      id: 'how-the-act-is-organised',
      h: 'How the Act is organised',
      p: [
        'A law-firm summary describes the Act as covering the legal recognition of electronic records and digital signatures, the licensing of certifying authorities under a Controller, and a set of computer-related offences with penalties. The official English text defines the Controller as the officer appointed or designated under Section 13, which is the post the Office of the Controller of Certification is built around.',
        'Reading the Act itself is worth the time if you build or buy a signing service. The English text is available from UNODC’s legal library. Summaries, including this one, paraphrase, and a short sentence in a blog can hide a condition that the full section spells out.',
      ],
    },
    {
      id: 'the-technical-test-for-a-digital-signature',
      h: 'The technical test for a digital signature',
      p: [
        'The Act does not leave “digital signature” to marketing. It defines one by what it makes possible. Using the signer’s public key, a person must be able to find out two things: whether the electronic record was transformed with the matching private key, and whether the record has changed since that transformation. That is exactly what verifying a [signature](/glossary/signature-validation) does when it recomputes a [hash](/glossary/hash) and checks it against the signed value.',
        'A typed name, a pasted image of a handwritten signature or a tick box does not meet that test, because nothing about it can be checked with a public key. Such marks can still be useful evidence of intent, but they are a different category, see [electronic signature](/glossary/electronic-signature).',
      ],
    },
    {
      id: 'dates-amendments-and-what-replaces-it',
      h: 'Dates, amendments and what replaces it',
      p: [
        'Sources disagree on when the Act came into being. One gives 29 Bhadra 2063 (14 September 2006), another 18 Mangsir 2063 (4 December 2006), and the official English text records its authentication on 22 Mangsir 2063 (8 December 2006). When precision matters, cite the Act by its Bikram Sambat year and the authentication date in the official text.',
        'A 2026 source says the Act remains in force and that a bill to replace it, the Information Technology and Cyber Security Bill, has not yet been enacted. Law in this area is moving, so check the current position with the Ministry or a lawyer before you rely on a detail, and treat this glossary as an explanation, not legal advice.',
      ],
    },
    {
      id: 'epahichan',
      h: 'The Act and ePahichan',
      p: [
        'ePahichan signs with certificates from a licensed certifying authority. The signing key is created on the person’s phone and kept in its secure hardware, unlocked by fingerprint or face. Businesses can request signatures through the Signing API.',
      ],
    },
  ],
  faq: [
    { q: 'What is the Electronic Transactions Act in Nepal?', a: 'It is the 2063 BS law that recognises electronic records and digital signatures, licenses certifying authorities and sets offences for computer misuse.' },
    { q: 'Is a digital signature legally valid in Nepal?', a: 'The Act recognises digital signatures backed by a certificate from a licensed certifying authority. Some documents have extra form requirements, so check the rules for the document in question.' },
    { q: 'What year was the Electronic Transactions Act passed?', a: 'It is the Act of 2063 BS. The UNODC copy records its authentication on 22 Mangsir 2063, which is 8 December 2006. Other sources give 2008.' },
    { q: 'Who licenses certifying authorities in Nepal?', a: 'The Office of the Controller of Certification, set up under the Act, supervises and keeps the list of licensed certifying authorities.' },
    { q: 'Is Section 47 about digital signatures?', a: 'No. Section 47 penalises publishing illegal material in electronic form. Digital signatures are covered by the Act’s provisions on key pairs, certificates and licensing.' },
  ],
  related: ['occ-nepal', 'certifying-authority', 'digital-signature', 'digital-signature-certificate'],
  product: 'app',
};

export default term;
