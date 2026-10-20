import type { Term } from '../types';

const term: Term = {
  slug: 'occ-nepal',
  term: 'OCC',
  full: 'Office of the Controller of Certification',
  aka: ['Controller of Certification Nepal', 'Office of Controller of Certificate', 'OCC Nepal', 'प्रमाणीकरण नियन्त्रकको कार्यालय'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'OCC Nepal: Office of the Controller of Certification',
  description: 'OCC stands for Office of the Controller of Certification, the Nepali body that licenses certifying authorities.',
  short: 'OCC stands for Office of the Controller of Certification, the Nepali government office set up under the Electronic Transactions Act. It licenses certifying authorities and keeps the list of those allowed to issue digital signature certificates.',
  body: [
    'The OCC is the regulator for digital signature certificates in Nepal. If a company wants to issue the certificates that digital signatures depend on, it needs a licence, and the OCC is the office that supervises that licence.',
    'The Nepali name is प्रमाणीकरण नियन्त्रकको कार्यालय. English sources sometimes write it as the Office of the Controller of Certificate. Both refer to the same office. Its old site, occ.gov.np, now redirects to the National Cyber Security Center at ncsc.gov.np.',
  ],
  sections: [
    {
      id: 'full-form',
      h: 'OCC full form',
      p: [
        'OCC stands for Office of the Controller of Certification. It is created by the [Electronic Transactions Act, 2063](/glossary/electronic-transactions-act) and works under the Ministry responsible for communication and information technology.',
      ],
    },
    {
      id: 'role',
      h: 'What the OCC does',
      p: [
        'Under the Act, the office is the point of control for the whole certificate system. Based on the Act and the sources that describe it, its work includes:',
      ],
      list: [
        'Licensing certifying authorities, the bodies that issue digital signature certificates.',
        'Keeping the list of recognised certifying authorities, so a person or business can check whether a certificate comes from a licensed issuer.',
        'Supervising those authorities against the Act and the Electronic Transactions Rules, 2064.',
      ],
    },
    {
      id: 'why-it-matters',
      h: 'Why it matters when you sign',
      p: [
        'A digital signature is only as trustworthy as the certificate behind it, and the certificate is only as trustworthy as the body that issued it. The OCC licence is what lets a [certifying authority](/glossary/certifying-authority) issue certificates that fall inside the Act’s framework.',
        'Before you rely on a provider, ask which licensed certifying authority issues its certificates, then check that authority against the OCC’s list. A [digital signature certificate](/glossary/digital-signature-certificate) from an unlicensed issuer does not carry that footing.',
      ],
    },
    {
      id: 'chain',
      h: 'The OCC and the chain of trust',
      p: [
        'In a [PKI](/glossary/pki), trust starts at a root. In Nepal’s arrangement the OCC sits at the top as the controller, and licensed certifying authorities sit under it. A signature checker follows the certificate back up that chain to confirm it ends at a trusted root.',
      ],
    },
    {
      id: 'what-it-does-not-do',
      h: 'What the OCC does not do',
      p: [
        'The OCC does not sign documents for people, store their keys or decide whether a particular document is valid for a particular purpose. It oversees the issuers. The person who signs, and the business that asks for the signature, still need to follow the rules for their document.',
      ],
    },
    {
      id: 'checking-an-issuer-before-you-rely-on-it',
      h: 'Checking an issuer before you rely on it',
      p: [
        'Take a cooperative that wants members to sign loan agreements digitally. Before it picks a provider, the manager should ask three questions. Which certifying authority issues the certificates? Is that authority on the OCC’s list? Does the provider tell members which authority issued their certificate?',
        'Write the answers down. If a dispute reaches a court or a regulator, the first thing anyone will ask is who issued the certificate and whether that body was licensed on the day of signing. A provider that cannot answer in one sentence is a warning sign, however polished its app looks.',
      ],
    },
    {
      id: 'questions-to-ask-your-provider',
      h: 'Questions to ask your provider',
      p: [
        'A business buying digital signing should ask a few plain questions. Which licensed certifying authority issues the certificates? How is the signer’s identity checked before issue? Where is the signing key kept? What happens when a certificate expires or is revoked? How long are signed documents and logs kept?',
        'Honest answers are short. If a provider talks about the interface and never names the issuer, ask again. The answers go into your vendor file, and they are the first thing an auditor will read.',
      ],
    },
    {
      id: 'a-short-history',
      h: 'A short history',
      p: [
        'The Act created the post of Controller in the early years after it was passed, and a certifying authority needs a licence from that office. A 2012 news report said that, because no company had applied to become a certifying authority, the OCC itself was acting as one at that time. An undated compliance guide later names Nepal Certifying Company, working with Radiant Info Tech Nepal, as a certifying authority.',
        'That history shows why you should not trust old articles for the current state. Who is licensed changes over time, and the only reliable answer is the current list on ncsc.gov.np, where occ.gov.np now redirects.',
      ],
    },
    {
      id: 'how-to-read-the-list-of-authorities',
      h: 'How to read the list of authorities',
      p: [
        'When you open the list, note the name of each authority, the licence status and the dates. Then open one of your own certificates and look at the issuer field. The issuer name should match an authority on the list, and the certificate should chain up to a root that the authority operates under the OCC. A mismatch is a reason to ask your provider questions before you collect signatures that people may later rely on.',
        'If you cannot read the issuer field on your platform, ask the provider for the certificate details in writing. See [chain of trust](/glossary/chain-of-trust) and [root certificate](/glossary/root-certificate) for how that link works.',
      ],
    },
    {
      id: 'when-something-goes-wrong',
      h: 'When something goes wrong',
      p: [
        'Suppose a bank finds that certificates it relied on were issued without proper identity checks, or that a provider has stopped operating. The licence is what gives the bank someone to complain to. A licensed authority answers to the Controller under the Act, while an unlicensed one answers to no one in particular.',
        'Keep your own record too, in the same file as the contract it supports. Note the issuer’s name and the date you checked its status, and re-check at least once a year. Licences can lapse or change, and your vendor file should show when you last looked. See [certificate revocation](/glossary/certificate-revocation) for what happens to certificates that must be withdrawn.',
      ],
    },
    {
      id: 'epahichan',
      h: 'The OCC and ePahichan',
      p: [
        'ePahichan does not issue certificates itself. The certificates used in the ePahichan app and Signing API come from a licensed certifying authority.',
      ],
    },
  ],
  faq: [
    { q: 'What is the full form of OCC in Nepal?', a: 'OCC stands for Office of the Controller of Certification. Some sources write Office of the Controller of Certificate.' },
    { q: 'What does the OCC do?', a: 'It licenses and supervises certifying authorities under the Electronic Transactions Act and keeps the list of recognised issuers of digital signature certificates.' },
    { q: 'How do I check if a certifying authority is licensed in Nepal?', a: 'The OCC keeps the list of recognised certifying authorities. Check the issuer named on your certificate against that list on ncsc.gov.np (occ.gov.np now redirects there).' },
    { q: 'Does the OCC issue digital signature certificates?', a: 'No. Licensed certifying authorities issue them. The OCC licenses and supervises those authorities.' },
  ],
  related: ['electronic-transactions-act', 'certifying-authority', 'digital-signature-certificate', 'pki'],
};

export default term;
