import type { Term } from '../types';

const term: Term = {
  slug: 'webhook',
  term: 'Webhook',
  short: 'A webhook is a message one system sends to another when something happens, instead of the other system asking repeatedly. In signing, it tells your server that a request has been signed.',
  body: [
    'Without a webhook, your server would have to keep asking whether the customer has signed yet. With one, the signing service calls your server the moment the signature is done.',
    'Your server should check the message is genuine and handle the same message arriving twice.',
  ],
  related: ['idempotency'],
  product: 'signing-api',
};

export default term;
