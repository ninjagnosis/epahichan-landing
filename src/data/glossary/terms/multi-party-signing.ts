import type { Term } from '../types';

const term: Term = {
  slug: 'multi-party-signing',
  term: 'Multi-party signing',
  aka: ['multiple signers', 'multi-signer', 'co-signing', 'signing order', 'sequential signing'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'Multi-party signing: several signers on one document',
  description: 'Multi-party signing lets two or more people sign one document. Sequential and parallel signing, earlier signatures and how to avoid disputes.',
  short: 'Multi-party signing is when two or more people sign the same document, such as a loan with a borrower, a guarantor and a bank officer.',
  body: [
    'Many agreements need more than one signature: a borrower and a guarantor, two company directors, a landlord and a tenant. Multi-party signing is the workflow for collecting them on one document, in a set order or all at once.',
    'Each person signs with their own key and certificate. The result is a document carrying several independent [digital signatures](/glossary/digital-signature).',
  ],
  sections: [
    {
      id: 'orders',
      h: 'Sequential and parallel signing',
      p: ['There are two usual patterns:'],
      list: [
        'Sequential: signers go one after another, for example the customer first and the bank officer after. Each signer sees the earlier signatures.',
        'Parallel: everyone gets the request at once and signs in any order.',
      ],
    },
    {
      id: 'integrity',
      h: 'What happens to earlier signatures',
      p: [
        'Each signature covers the document as it stood at that time. In the PDF format, later signatures are added as incremental updates, so earlier ones remain valid. Editing the content after the first signature breaks it, which is the point of being [tamper-evident](/glossary/tamper-evident).',
      ],
    },
    {
      id: 'completion',
      h: 'When is it complete',
      p: [
        'The document is complete only when every required signer has signed. Systems need to handle a signer who declines, who never responds or who needs to be replaced. Set an expiry and decide who is told at each state.',
      ],
    },
    {
      id: 'evidence',
      h: 'Evidence',
      p: [
        'Keep an [audit trail](/glossary/audit-trail) showing who was asked, when, and when each signed. Use [trusted timestamps](/glossary/trusted-timestamp) so the order of signatures can be shown later. See [how to check a signed PDF](/blog/how-to-check-a-signed-pdf).',
      ],
    },
    {
      id: 'an-example-a-loan-with-a-guarantor',
      h: 'An example: a loan with a guarantor',
      p: [
        'A bank issues a loan to a borrower with a guarantor. The bank sends one request to the borrower and one to the guarantor, each with the same agreement. If the bank wants the guarantor to see the borrower’s signature first, it sends the second request only after the first is complete.',
        'The bank officer signs last, so the final document carries three signatures in a known order. If the guarantor declines, the bank’s system marks the whole agreement incomplete and tells the loan officer. Without that rule, a half-signed loan can sit unnoticed in a folder.',
      ],
    },
    {
      id: 'company-signatories-and-authority',
      h: 'Company signatories and authority',
      p: [
        'When two directors sign for a company, the signature proves two people signed. It does not prove they had authority. The company’s registration documents and board resolutions do that. Collect and store those alongside the signed document.',
        'Decide too who may sign for whom. A staff member signing on behalf of a manager is a separate question from two managers signing together, and the contract should say which is allowed. Check each signer’s certificate shows the right name, so a reviewer can match signatures to named roles.',
      ],
    },
    {
      id: 'designing-the-experience-for-each-signer',
      h: 'Designing the experience for each signer',
      p: [
        'Each signer should see the whole document, their own fields and who else must sign. Tell later signers what earlier ones have done, and tell earlier ones when the process finishes. Send reminders, but not so many that people ignore them.',
        'Allow for people without smartphones. A family guarantor in a village may sign through a relative’s phone only if the process permits it, and the process must then show whose key signed. Do not let one device sign for two people, since that undermines the evidence you are collecting.',
      ],
    },
    {
      id: 'declining-and-changing-signers',
      h: 'Declining and changing signers',
      p: [
        'People refuse, change jobs or lose their phones. Decide what the process does when a signer declines: stop the whole agreement, or allow a replacement. A replacement needs approval from whoever owns the agreement, and the trail should show who was removed, who was added and why.',
        'Never edit a signed document to change a signer. Create a new version, start the signatures again and keep the old one as a record of what was attempted.',
      ],
    },
    {
      id: 'checking-the-result',
      h: 'Checking the result',
      p: [
        'After the last signature, verify the file, not the process. Open it in a reader that shows every signature and confirm that each is valid, each names the right person and no changes follow the last signature. [How to check a signed PDF](/blog/how-to-check-a-signed-pdf) walks through this.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Multiple signers with ePahichan',
      p: [
        'The [Signing API](/products/signing-api) creates a [signing request](/glossary/signing-request) for a signer with the documents to sign and reports the result by webhook. Check the API documentation for how your flow should handle more than one signer.',
      ],
    },
  ],
  faq: [
    { q: 'What is multi-party signing?', a: 'It is two or more people signing the same document.' },
    { q: 'Does the order of signing matter?', a: 'Sometimes. Sequential signing enforces an order, and parallel lets signers sign in any order.' },
    { q: 'Does a second signature invalidate the first?', a: 'No. Each signature covers the document as it was when signed, and later signatures are added without changing earlier content.' },
    { q: 'What if one signer never signs?', a: 'The document stays incomplete. Use expiry and reminders, and decide in advance who can replace a signer.' },
  ],
  related: ['digital-signature', 'signing-request', 'audit-trail', 'bulk-signing'],
  product: 'signing-api',
};

export default term;
