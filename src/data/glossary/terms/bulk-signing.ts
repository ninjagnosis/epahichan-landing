import type { Term } from '../types';

const term: Term = {
  slug: 'bulk-signing',
  term: 'Bulk signing',
  aka: ['batch signing', 'mass signing', 'bulk digital signature', 'sign multiple documents'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'Bulk signing: signing many documents at once',
  description: 'Bulk signing means signing many documents in one operation. Where it helps, how it differs from signing one by one and what controls keep it safe.',
  short: 'Bulk signing is signing many documents in one go instead of one at a time. It is used for payroll letters, statements, contracts and other repeated paperwork.',
  body: [
    'Some work produces hundreds of similar documents: appointment letters, policy schedules, loan sanction letters. Opening each one and signing separately wastes time. Bulk signing applies a signature to a whole batch in one operation.',
    'There are two quite different things called bulk signing, and the difference matters for trust. Read on to tell them apart.',
  ],
  sections: [
    {
      id: 'two-kinds',
      h: 'Two kinds of bulk signing',
      p: ['The wording hides a real distinction:'],
      list: [
        'One person signing many documents: a signer reviews a batch and approves it once, and each document gets that person’s signature.',
        'Many people signing the same kind of document: a business sends many separate requests, each to a different signer, for example one per employee.',
      ],
    },
    {
      id: 'controls',
      h: 'Controls that matter',
      p: [
        'Signing without looking is the risk. A sound bulk process shows the signer what is in the batch, ties the approval to a [hash](/glossary/hash) of each file so nothing changes afterwards, and logs the action in an [audit trail](/glossary/audit-trail). The signing key must stay under the signer’s control, see [private key](/glossary/private-key).',
      ],
    },
    {
      id: 'hr',
      h: 'Use in HR and finance',
      p: [
        'HR teams send contracts and policy acknowledgements to many employees at once. See [HR documents and digital signatures in Nepal](/blog/hr-documents-digital-signature-nepal). Finance teams sign statements or certificates in batches.',
      ],
    },
    {
      id: 'api',
      h: 'Doing it through an API',
      p: [
        'A system creates many [signing requests](/glossary/signing-request) in a loop. Use [idempotency](/glossary/idempotency) so that a retry does not create a duplicate request, and a [webhook](/glossary/webhook) per request so completion is reported individually.',
      ],
    },
    {
      id: 'an-example-payslips-and-appointment-letters',
      h: 'An example: payslips and appointment letters',
      p: [
        'A company prepares 200 annual salary revision letters. An HR manager reviews a sample, checks the list of recipients and approves the batch once. The system creates a separate request per employee, each tied to that employee’s letter, and tracks who has signed.',
        'The manager’s review is the control. Without it, bulk signing becomes signing without reading. Keep the approval, the list and the per-file hashes together, so you can later show exactly what the manager approved.',
      ],
    },
    {
      id: 'failure-handling',
      h: 'Failure handling',
      p: [
        'In a batch of two hundred, a few will fail: a wrong phone number, a signer who is abroad, a PDF that is corrupt. A good process shows these as a short list of exceptions, not as a failed batch. Each failure keeps its own reason and can be retried without touching the ones that succeeded.',
        'Plan for partial completion. Decide who sees the list of unsigned requests, how long they stay open, and when they are escalated. Report on the batch with counts of created, signed, declined, expired and failed, so a manager can see at a glance that 187 of 200 are done and know who to chase for the rest.',
      ],
    },
    {
      id: 'performance-and-limits',
      h: 'Performance and limits',
      p: [
        'A batch of a few thousand requests should not be sent in one burst. Send them at a steady rate that stays within the provider’s limits, handle rate-limit responses by waiting and retrying, and record the position in the batch so a restart continues where it stopped.',
        'Test with a small batch in the sandbox first. Check that every request has the right signer and the right file before the full run, since a wrong attachment in a batch of hundreds is expensive to undo.',
      ],
    },
    {
      id: 'who-may-approve-a-batch',
      h: 'Who may approve a batch',
      p: [
        'Decide who can approve a batch and set limits. A junior clerk should not approve a batch of two hundred contracts on their own. Many organisations require a second person for batches above a size, or for documents above a value.',
        'Record the approver’s identity in the trail. If someone later asks who authorised these letters, the answer should come from the record, not from memory.',
      ],
    },
    {
      id: 'choosing-between-one-signer-and-many',
      h: 'Choosing between one signer and many',
      p: [
        'If one authorised person signs on behalf of the company, as with a certificate issued to an officer, one signature on each letter is enough. If each recipient must sign their own copy, you need one request per person. Mixing the two models in one process is a common source of confusion, so name which one you are using.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Bulk and ePahichan',
      p: [
        'With the [Signing API](/products/signing-api) your server creates one request per signer and receives a webhook for each. Repeating a request is safe and does not sign twice.',
      ],
    },
  ],
  faq: [
    { q: 'What is bulk signing?', a: 'It is signing many documents in one operation rather than one by one.' },
    { q: 'Is bulk signing safe?', a: 'It can be, if the signer sees what is in the batch, the files cannot change after approval and the action is logged.' },
    { q: 'Can I send one document to many people for signature?', a: 'Yes, by creating a separate signing request for each signer.' },
    { q: 'What happens if a bulk job is retried?', a: 'With idempotent requests a retry returns the existing request and does not create a duplicate.' },
  ],
  related: ['signing-request', 'idempotency', 'webhook', 'multi-party-signing'],
  product: 'signing-api',
};

export default term;
