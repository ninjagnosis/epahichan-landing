import type { Term } from '../types';

const term: Term = {
  slug: 'signing-request',
  term: 'Signing request',
  aka: ['signature request', 'sign request', 'esign request', 'document signing request'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'Signing request: meaning, lifecycle and states',
  description: 'A signing request asks a person to sign documents. Its lifecycle, the states it moves through and how to handle retries and results in an integration.',
  short: 'A signing request is a request for a named person to sign one or more documents. It records who must sign, what they sign and how far the process has got.',
  body: [
    'In a signing system, the request is the unit of work. Your application creates it with the signer’s details and the documents. The system delivers it, waits for the signer, and reports the outcome.',
    'Thinking in requests clarifies the rest: a request has an identity, a state that changes over time and a result at the end.',
  ],
  sections: [
    {
      id: 'contents',
      h: 'What a request contains',
      p: ['A request normally holds:'],
      list: [
        'The signer: name, phone or email and any verified details.',
        'The documents to sign, as PDFs.',
        'An optional expiry.',
        'A reference from your own system, to match results back.',
      ],
    },
    {
      id: 'states',
      h: 'States',
      p: [
        'A request moves through states such as created, sent, opened, signed, declined and expired. Only signed has a signed document. Your system should treat every other state as not done, and handle expiry as a normal case.',
      ],
    },
    {
      id: 'retries',
      h: 'Retries and duplicates',
      p: [
        'Networks fail. If your server cannot tell whether a create call went through, it will call again. Without protection, that creates two requests and the signer is asked twice. Idempotent requests solve this: see [idempotency](/glossary/idempotency) and [signing requests, webhooks and retries](/blog/signing-requests-webhooks-retries).',
      ],
    },
    {
      id: 'results',
      h: 'Getting the result',
      p: [
        'Polling wastes calls. A [webhook](/glossary/webhook) tells your server when the state changes. Treat webhook delivery as at-least-once, verify its origin and make your handler safe to run twice.',
      ],
    },
    {
      id: 'an-example-an-insurance-policy',
      h: 'An example: an insurance policy',
      p: [
        'An insurer creates a signing request for a new policy holder with the proposal form and the policy schedule. The request is sent, and the holder opens it but does not sign. Three days later it expires, and the insurer’s system moves the application to “awaiting customer”.',
        'The holder then asks for a fresh link. The insurer creates a new request referencing the same application, so reports show one application with two requests. Because the request is the unit of work, the insurer can see exactly where each customer is stuck.',
      ],
    },
    {
      id: 'designing-your-own-handling',
      h: 'Designing your own handling',
      p: [
        'Give every request your own reference so you can match a webhook to an application without a lookup by name. Store the request ID returned by the API next to it. Keep a state field that only moves forward, so a late or repeated webhook cannot undo a completed request.',
        'On expiry, do not edit the old request. Create a new one and link them. For reporting, store timestamps for each state change. They show where delays occur: slow delivery, slow signers, or slow handling in your own system.',
      ],
    },
    {
      id: 'security-of-the-link',
      h: 'Security of the link',
      p: [
        'A signing link is a door. Make it single-use or short-lived, tie it to the intended signer, and require the signer to authenticate before the document opens. Do not put the link in a channel that many people can read.',
        'Log the link’s creation, delivery and use. If a signer says they never received it, the log shows whether it was sent and opened.',
      ],
    },
    {
      id: 'matching-requests-to-your-own-records',
      h: 'Matching requests to your own records',
      p: [
        'Store the request ID next to your application ID, and index both. When the webhook arrives, look up the application by the request ID, update its state and ignore the event if the state is already final. A reference you supplied when creating the request can serve as a second key, which helps if the first lookup fails.',
        'Keep a daily reconciliation job. It lists requests still open after a set time and checks their state with the API, so a missed webhook does not leave a customer waiting.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Signing requests at ePahichan',
      p: [
        'With the [Signing API](/products/signing-api), your server creates a request with the signer’s name, phone and documents. The signer receives a code on their phone and signs. A webhook tells your server the request is signed and the signed PDF can be fetched. Repeating a request returns the same request and does not sign twice. Related: [multi-party signing](/glossary/multi-party-signing) and [bulk signing](/glossary/bulk-signing).',
      ],
    },
  ],
  faq: [
    { q: 'What is a signing request?', a: 'It is a request for a named person to sign one or more documents, tracked through states until it is signed, declined or expired.' },
    { q: 'How do I know when a request is signed?', a: 'Use a webhook, which tells your server when the state changes, and then fetch the signed PDF.' },
    { q: 'What if I send the same request twice?', a: 'With idempotent requests a repeat returns the same request. At ePahichan, repeating a request does not sign twice.' },
    { q: 'What happens when a request expires?', a: 'It ends without a signature. Create a new request if the signer still needs to sign.' },
  ],
  related: ['webhook', 'idempotency', 'multi-party-signing', 'bulk-signing'],
  product: 'signing-api',
};

export default term;
