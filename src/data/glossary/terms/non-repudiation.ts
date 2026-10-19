import type { Term } from '../types';

const term: Term = {
  slug: 'non-repudiation',
  term: 'Non-repudiation',
  aka: ['nonrepudiation', 'non repudiation meaning', 'repudiation'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'Non-repudiation: meaning and how signatures provide it',
  description: 'Non-repudiation means a signer cannot credibly deny having signed. How digital signatures, keys and timestamps provide it, and where it stops.',
  short: 'Non-repudiation means a person cannot credibly deny having done something, such as signing a document. Digital signatures aim to provide it by tying a signature to a private key only the signer controls.',
  body: [
    'To repudiate is to deny. If a customer signs a loan agreement and later says “that was not me”, the business needs evidence that points back to them. Non-repudiation is the property that supplies such evidence.',
    'It is a goal, not a guarantee. A system gives strong non-repudiation when it is hard to forge, hard to alter and clear about who held the key.',
  ],
  sections: [
    {
      id: 'ingredients',
      h: 'What provides it',
      p: ['A digital signing system gets non-repudiation from several parts working together:'],
      list: [
        'A [private key](/glossary/private-key) that only the signer can use, ideally held in secure hardware.',
        'A [certificate](/glossary/digital-signature-certificate) that ties the matching public key to a verified person.',
        'A [hash](/glossary/hash) of the document, so any change after signing is detectable. See [tamper-evident](/glossary/tamper-evident).',
        'A [trusted timestamp](/glossary/trusted-timestamp) showing when it happened.',
        'An [audit trail](/glossary/audit-trail) of the signing session.',
      ],
    },
    {
      id: 'vs-otp',
      h: 'Why an OTP does not provide it',
      p: [
        'A code sent by SMS shows that someone had the phone. It does not bind the person to the exact document. This is the reason behind disputes discussed in [OTP or digital signature in loan disputes](/blog/otp-or-digital-signature-loan-disputes).',
      ],
    },
    {
      id: 'limits',
      h: 'Where it stops',
      p: [
        'A signature does not prove that the signer understood the document, was not coerced, or that the content is true. It also depends on the key being truly under the signer’s control. Read [what a digital signature does not prove](/blog/what-a-digital-signature-does-not-prove).',
      ],
    },
    {
      id: 'an-example-a-disputed-loan',
      h: 'An example: a disputed loan',
      p: [
        'A borrower says he never agreed to a loan. The bank produces its evidence. With an SMS code, it can show a code was sent to a number and entered. The borrower replies that his phone was used by a relative. With a digital signature, the bank shows a certificate issued to the borrower after identity checks, a signature that covers the exact agreement, a trusted timestamp and a log of the session. The signing key was kept in secure hardware that opens only with his fingerprint or face.',
        'The second set of evidence does not make a dispute impossible, but it narrows the borrower’s options to claiming the key was stolen or forced, which is much harder to argue than “I never saw that document”.',
      ],
    },
    {
      id: 'how-a-business-improves-its-position',
      h: 'How a business improves its position',
      p: [
        'A business can strengthen its evidence without changing its product. Show the signer the exact document before signing and keep proof that it was shown. Use certificates from a licensed certifying authority, record the time with a trusted source, keep the audit trail, and store the signed file with its hash. Train staff to produce this evidence when a customer disputes.',
        'Also be honest in your terms. Tell customers that their phone and fingerprint or face act as their signature, and warn them not to let anyone else enrol a face or fingerprint on their phone. Clear terms reduce disputes before they begin.',
      ],
    },
    {
      id: 'what-the-standards-say',
      h: 'What the standards say',
      p: [
        'The US standards body NIST defines non-repudiation as protection against an individual falsely denying having performed an action, with the ability to tell whether a given individual created, sent, approved or received information. Its digital signature standard explains that the recipient can use a valid signature as evidence to a third party that the claimed signer generated it, and that this is why the signer cannot easily deny it later.',
        'One caution follows from the wording. A signature binds a document to a private key, and a key is not automatically a person. The certificate and the way the key is protected carry the link from key to person. That is why a [certificate](/glossary/digital-signature-certificate) issued after identity proofing, and a key held in secure hardware, matter so much.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Non-repudiation with ePahichan',
      p: [
        'In ePahichan the signing key is created on the phone and kept in its secure hardware, and the certificate comes from a licensed certifying authority. ePahichan cannot read the key, so it cannot sign for the person.',
      ],
    },
  ],
  faq: [
    { q: 'What does non-repudiation mean?', a: 'It means a person cannot credibly deny an action such as signing a document.' },
    { q: 'Do digital signatures give non-repudiation?', a: 'They are designed to, by binding a key to a verified person and detecting changes. It depends on how the key is held.' },
    { q: 'Does an OTP give non-repudiation?', a: 'Not on its own. An OTP shows control of a number, not agreement to a specific document.' },
    { q: 'Is non-repudiation absolute?', a: 'No. It strengthens evidence but does not prove consent or understanding.' },
  ],
  related: ['digital-signature', 'private-key', 'audit-trail', 'tamper-evident'],
  product: 'app',
};

export default term;
