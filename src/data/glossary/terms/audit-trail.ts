import type { Term } from '../types';

const term: Term = {
  slug: 'audit-trail',
  term: 'Audit trail',
  aka: ['audit log', 'signing log', 'signing audit trail', 'activity log'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'Audit trail in digital signing: meaning and contents',
  description: 'An audit trail is a time-ordered record of who did what in a signing process. What it contains, how it supports a signature and what it cannot do alone.',
  short: 'An audit trail is a time-ordered record of events in a process. In digital signing it shows when a document was sent, opened and signed, and by whom.',
  body: [
    'A signature says who signed. An audit trail says what happened around it: when the request was created, who received it, when it was opened and when it was completed. Together they answer most questions in a dispute.',
    'An audit trail is evidence about the process. The signature itself is evidence about the document. Keep both.',
  ],
  sections: [
    {
      id: 'contents',
      h: 'What it usually records',
      p: ['A signing audit trail typically includes:'],
      list: [
        'The document and its [hash](/glossary/hash) at the time of sending.',
        'Who created the request and who it was sent to.',
        'Times for each step, ideally with a [trusted timestamp](/glossary/trusted-timestamp).',
        'How the signer authenticated and the result.',
        'The final signed file and its hash.',
      ],
    },
    {
      id: 'integrity',
      h: 'Making the trail trustworthy',
      p: [
        'A log that anyone can edit proves little. Good trails are append-only, time-stamped by a reliable clock and stored apart from the people they describe. A hash of the log can be sealed so changes show up, in the way a [tamper-evident](/glossary/tamper-evident) document does.',
      ],
    },
    {
      id: 'vs-signature',
      h: 'Audit trail vs digital signature',
      p: [
        'The trail can be wrong or incomplete even when the signature is valid, and the reverse. A [digital signature](/glossary/digital-signature) is cryptographic proof tied to a key. The trail is a record kept by a service. Strong [non-repudiation](/glossary/non-repudiation) uses both.',
      ],
    },
    {
      id: 'api',
      h: 'Audit trails in integrations',
      p: [
        'In an API integration, the business keeps its own record of requests, webhook deliveries and retries. See [signing requests, webhooks and retries](/blog/signing-requests-webhooks-retries) for how to log them.',
      ],
    },
    {
      id: 'an-example-reconstructing-a-dispute',
      h: 'An example: reconstructing a dispute',
      p: [
        'A tenant says the lease he signed had a different rent clause. The landlord’s system holds a trail: the lease PDF hash at sending, the time it was sent to the tenant’s phone, the time it was opened, the time it was signed, and the hash of the final file. The hashes match, so the file the tenant signed is the file the landlord holds.',
        'Now compare a landlord with no trail, only a signed PDF. He can show the signature is valid, but cannot easily show what was sent, when, or whether the tenant had a chance to read it. The trail does not replace the signature. It answers the questions the signature leaves open.',
      ],
    },
    {
      id: 'what-a-good-trail-looks-like-in-practice',
      h: 'What a good trail looks like in practice',
      p: [
        'For each signing request, a useful record has one row per event: request created, delivered, opened, authentication passed, signed, webhook sent, webhook acknowledged. Each row carries a timestamp, the request ID, the actor and the document hash. That is enough to replay the story later without relying on anyone’s memory.',
        'Retention is a business decision with legal limits. Keep the trail at least as long as the signed document stays relevant, for example the life of a loan plus the period your sector requires. Protect it as carefully as the document: limit who can read it, since it holds names and phone numbers, and who can delete anything, which should be nobody.',
      ],
    },
    {
      id: 'privacy-and-access',
      h: 'Privacy and access',
      p: [
        'A trail records who signed what and when, and so it holds personal data. Limit access to people who need it, log who reads it and keep it no longer than your duties require. Mask phone numbers in screens that do not need the full number.',
        'Make exports possible. When a dispute arrives, you should be able to give a court or a regulator a clear package: the signed document, its hash, the trail and the certificate details. Practise producing it before you need it.',
      ],
    },
    {
      id: 'time',
      h: 'Time',
      p: [
        'Every event in a trail needs a reliable time. Server clocks drift, so synchronise them and, for the events that matter most, use a [trusted timestamp](/glossary/trusted-timestamp) from an independent source. A trail whose times cannot be trusted loses much of its value.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Audit trails and ePahichan',
      p: [
        'With the [Signing API](/products/signing-api) a webhook tells your server when a request is signed, and the signed PDF can be fetched. Keep those events in your own records.',
      ],
    },
  ],
  faq: [
    { q: 'What is an audit trail?', a: 'It is a time-ordered record of events, such as when a document was sent and signed.' },
    { q: 'Is an audit trail the same as a digital signature?', a: 'No. The signature is cryptographic proof on the document. The audit trail records the process around it.' },
    { q: 'How long should audit trails be kept?', a: 'It depends on the document and the rules that apply to it. Keep them as long as you keep the signed document.' },
    { q: 'Can an audit trail be altered?', a: 'A poorly kept one can. Append-only storage and sealed hashes make changes detectable.' },
  ],
  related: ['non-repudiation', 'trusted-timestamp', 'tamper-evident', 'digital-signature'],
  product: 'signing-api',
};

export default term;
