import type { Term } from '../types';

const term: Term = {
  slug: 'oauth',
  term: 'OAuth',
  full: 'Open Authorization',
  aka: ['OAuth 2.0', 'bearer token', 'access token', 'client credentials'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'OAuth meaning: tokens, grants and how it works',
  description: 'OAuth is a standard for giving an application limited, time-limited access without sharing a password. How tokens and the client credentials grant work.',
  short: 'OAuth is a standard that lets an application get limited, time-limited access to an API using a token, instead of passing around a password.',
  body: [
    'In OAuth 2.0 a client asks an authorisation server for an access token, then sends that token with each API call. The token says who the client is, what it may do and when it expires.',
    'Short-lived tokens limit the damage if one leaks. A stolen token stops working soon after, while a stolen password keeps working until someone changes it.',
  ],
  sections: [
    {
      id: 'roles',
      h: 'The roles',
      p: ['OAuth describes four parties:'],
      list: [
        'Resource owner: usually the user whose data is involved.',
        'Client: the application asking for access.',
        'Authorisation server: issues tokens.',
        'Resource server: the API that checks tokens.',
      ],
    },
    {
      id: 'grants',
      h: 'Common grants',
      p: [
        'A grant is the way a client gets a token. The authorisation code grant is for apps acting for a signed-in user. The client credentials grant is for server-to-server calls, where the client authenticates with its own ID and secret and receives a token for itself.',
      ],
    },
    {
      id: 'vs-key',
      h: 'OAuth vs API key',
      p: [
        'An [API key](/glossary/api-key) is a long-lived secret sent with every call. OAuth exchanges a credential for a token that expires, and can carry scopes that limit what the token can do. OAuth takes more setup and is safer when keys might leak.',
      ],
    },
    {
      id: 'practice',
      h: 'Using tokens well',
      p: [
        'Cache a token until it is near expiry, instead of fetching one per call. Send it in an Authorization header as a bearer token, over HTTPS only. Never log it, and never put it in a URL.',
      ],
    },
    {
      id: 'an-example-a-bank-server-calling-an-id-check',
      h: 'An example: a bank server calling an ID check',
      p: [
        'The bank’s server starts a batch of onboarding checks. It first sends its client ID and password to the token endpoint and gets back a token with a lifetime of 30 minutes. It stores the token in memory and sends it with each verification request. When a call returns an authorisation error, the server fetches a fresh token once, retries, and fails loudly if the retry also fails.',
        'This pattern keeps the long-lived password out of every request. Only the token travels, so a leaked log line exposes access for minutes, not months.',
      ],
    },
    {
      id: 'scopes-and-expiry',
      h: 'Scopes and expiry',
      p: [
        'A scope names what a token may do, such as read an ID check result but not change settings. Ask for the smallest set that works. An expiry limits how long a stolen token is useful. Thirty minutes is common for server tokens, and refresh tokens, where used, are stored more carefully than access tokens because they live longer.',
        'When designing your own API, publish the token lifetime, the error returned when a token has expired, and the rate limits, so that client developers can handle each case instead of guessing.',
      ],
    },
    {
      id: 'why-the-framework-is-built-this-way',
      h: 'Why the framework is built this way',
      p: [
        'The core specification, RFC 6749, defines the roles and grants, and RFC 6750 defines how bearer tokens are sent to an API. The bearer rule is blunt: anyone who holds the token can use it, with no further proof, so tokens must be protected in storage and in transit. Short lifetimes shrink the window in which a stolen token is useful.',
        'A client can also present its own credentials to the authorisation server to get a token without a user in the loop. That is the situation the client credentials grant covers, and it is the one most backend-to-backend integrations use.',
      ],
    },
    {
      id: 'failure-handling',
      h: 'Failure handling',
      p: [
        'Handle the three common failures. A token has expired: fetch a new one once and retry. The credentials are wrong: stop and alert, since retrying will not help. The service is slow or unavailable: back off, retry a few times and then fail clearly.',
        'Do not log tokens or send them in a URL. A token in a URL ends up in browser history and server logs. A token in an Authorization header does not.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Tokens at ePahichan',
      p: [
        'The [ID check API](/products/id-check-api) follows a similar pattern: your server sends its client ID and password and receives a token valid for 30 minutes, then sends the token with each verification. One token serves many checks.',
      ],
    },
  ],
  faq: [
    { q: 'What is OAuth?', a: 'It is a standard for giving applications limited, time-limited access to an API through tokens.' },
    { q: 'What is a bearer token?', a: 'It is a token that gives access to whoever presents it, so it must be kept secret and sent over HTTPS.' },
    { q: 'What is the client credentials grant?', a: 'It is a grant for server-to-server calls where the client uses its own ID and secret to get a token.' },
    { q: 'Is OAuth a login system?', a: 'OAuth is about authorisation. Login on top of it uses OpenID Connect.' },
  ],
  related: ['api-key', 'webhook', 'digital-identity', 'otp'],
  product: 'id-check-api',
};

export default term;
