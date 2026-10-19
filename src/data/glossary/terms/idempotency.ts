import type { Term } from '../types';

const term: Term = {
  slug: 'idempotency',
  term: 'Idempotency',
  short: 'An operation is idempotent when doing it twice has the same effect as doing it once. An idempotent signing request can be retried after a network failure without creating a second signature.',
  body: [
    'Networks fail. If your server does not hear back from a request, it must retry, but it cannot know whether the first attempt succeeded.',
    'With an idempotency key, the retry returns the original request instead of starting a new one.',
  ],
  related: ['webhook'],
  product: 'signing-api',
};

export default term;
