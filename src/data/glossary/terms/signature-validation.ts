import type { Term } from '../types';

const term: Term = {
  slug: 'signature-validation',
  term: 'Signature validation',
  aka: ['Signature verification', 'Verify digital signature', 'Validating a digital signature', 'How to verify a digital signature'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'Signature validation: how a digital signature is verified',
  description: 'Signature validation is the set of checks that prove a digital signature is genuine: integrity, signer identity, certificate trust, revocation and time.',
  short: 'Signature validation is the set of checks a program runs to decide whether a digital signature is good: the document is unchanged, the certificate is trusted, valid and not revoked, and the signature was made in time.',
  body: [
    'Signing is easy to watch and hard to judge. A clean banner in a PDF reader hides a number of separate tests. Knowing them helps a bank officer decide what a green tick does and does not mean.',
    'Validation proves technical facts about the signature. It does not prove that the signer understood or agreed to the content. See [what a digital signature does not prove](/blog/what-a-digital-signature-does-not-prove).',
  ],
  sections: [
    {
      id: 'checks',
      h: 'What is checked',
      p: [
        'A thorough validator runs these checks in order:',
      ],
      list: [
        'Integrity: the hash of the document matches the one in the signature, so nothing changed after signing.',
        'Signature: the signed value verifies with the signer’s public key.',
        'Chain: the signer’s certificate leads to a trusted root through the [chain of trust](/glossary/chain-of-trust).',
        'Dates: the certificate was inside its validity period at the time of signing.',
        'Revocation: the certificate was not [revoked](/glossary/certificate-revocation), using [OCSP](/glossary/ocsp) or a CRL.',
        'Key usage: the certificate is allowed to sign documents.',
        'Time: a trusted timestamp, if present, is itself valid.',
      ],
    },
    {
      id: 'results',
      h: 'What the results mean',
      p: [
        'Readers usually show one of three states. Valid means all checks passed. Invalid means the document was altered or the signature is broken. Unknown, or valid with warnings, means the math worked but something could not be confirmed, such as an untrusted root, a missing revocation answer or an expired certificate with no timestamp. Unknown is not the same as forged. It often means the reader does not have the right root in its trust store.',
      ],
    },
    {
      id: 'how',
      h: 'How to verify a signed PDF yourself',
      p: [
        'Open the file in a reader that supports signatures, then open the signature panel and read the signer, the time and the status of each check. If it reports changes after signing, the document is not the one that was signed. A step-by-step is in [how to check a signed PDF](/blog/how-to-check-a-signed-pdf).',
      ],
    },
    {
      id: 'api',
      h: 'Validation in software',
      p: [
        'Businesses that receive signed files at volume validate them in code. The Signing API returns documents signed through it; for files from other sources, a validation library or service checks each step above. Record the result and the time of the check in an audit trail so the decision can be explained later.',
      ],
    },
    {
      id: 'ex',
      h: 'Example: three outcomes in a PDF reader',
      p: [
        'A signed HR letter opens with a green tick: all checks passed, with the signer, time and a trusted chain. An invoice opens with a red mark: the document was changed after signing, so the amount may not be what was signed. A contract from a partner opens with a yellow warning: the signer’s identity is unknown because the root is not trusted on this computer.',
        'Each outcome calls for a different action. Green means proceed, while still reading the content. Red means do not rely on the file and ask for the original. Yellow means find out why, by checking the issuer or updating the reader, before deciding.',
      ],
    },
    {
      id: 'record',
      h: 'What to record when you validate',
      p: [
        'A bank that relies on signed documents should keep more than the PDF. Record the time of the check, the reader or library and its version, the result for each step, the revocation answers received and the identity shown for the signer. If a dispute comes years later, that record shows what the bank knew when it accepted the document.',
        'Store it with the document, and apply the same retention period. An [audit trail](/glossary/audit-trail) that links the validation result to the file hash makes the record hard to dispute.',
      ],
    },
    {
      id: 'order',
      h: 'Why the order of checks matters',
      p: [
        'Integrity comes first because everything else is pointless if the file changed. Chain and date checks follow, since a certificate outside its dates is rejected before anyone asks about revocation. Revocation is checked last because it needs the most outside information, and its result depends on the time of signing.',
        'Knowing this order helps you read a failure. If the reader says the document changed, do not spend time on trust stores. If it says the signer is unknown, the file may be fine and the reader may simply lack the root.',
      ],
    },
  ],
  faq: [
    { q: 'What is signature validation?', a: 'The process of checking that a digital signature is authentic, the document unchanged and the signer’s certificate trusted, valid and not revoked.' },
    { q: 'Why does my PDF say the signature validity is unknown?', a: 'Usually the reader does not trust the issuer’s root, cannot reach the revocation service, or the certificate has expired without a timestamp.' },
    { q: 'Does a valid signature mean the document is true?', a: 'No. It means the file is unchanged and was signed with that certificate. The content may still be wrong.' },
    { q: 'What is the difference between signature validation and verification?', a: 'The terms are used interchangeably. Some standards use validation for the full set of checks and verification for the cryptographic step alone.' },
  ],
  related: ['digital-signature', 'certificate-revocation', 'chain-of-trust', 'long-term-validation', 'tamper-evident'],
};

export default term;
