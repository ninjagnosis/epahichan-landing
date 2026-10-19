import type { Term } from '../types';

const term: Term = {
  slug: 'api-key',
  term: 'API key',
  aka: ['API credentials', 'client secret', 'test key', 'live key', 'API token'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'API key: meaning, safe use and rotation',
  description: 'An API key is a secret string that identifies the application calling an API. How keys work, how to keep them safe and how they differ from OAuth tokens.',
  short: 'An API key is a secret string that identifies the application calling an API. Whoever holds the key can make calls as that application.',
  body: [
    'When your server calls an API, the API needs to know who is asking. An API key is the simplest way: a long random string sent with each request. It identifies your application, not an individual end user.',
    'A key is a password for software. Treat it like one.',
  ],
  sections: [
    {
      id: 'how',
      h: 'How API keys work',
      p: [
        'The provider generates a key for your account and shows it once. Your server sends it in a request header. The provider looks up the key, finds the account and applies its permissions and limits. Many providers issue separate test keys and live keys, so builds never touch real data.',
      ],
    },
    {
      id: 'safe',
      h: 'Keeping keys safe',
      p: ['Basic habits prevent most leaks:'],
      list: [
        'Keep keys on your server, never in a mobile app, web page or public repository.',
        'Store them in environment variables or a secrets manager.',
        'Use a separate key for each environment.',
        'Rotate a key at once if it may have leaked, and give it only the permissions it needs.',
      ],
    },
    {
      id: 'vs-oauth',
      h: 'API key vs OAuth token',
      p: [
        'A key is long-lived and identifies an application. [OAuth](/glossary/oauth) tokens are short-lived and can represent a user or a limited scope. Some APIs use a client ID and password to obtain a short-lived token, which limits the damage if a token leaks.',
      ],
    },
    {
      id: 'webhooks',
      h: 'Keys and webhooks',
      p: [
        'Keys authenticate your calls to the API. A [webhook](/glossary/webhook) goes the other way, from the provider to you, and needs its own check such as a signature on the payload.',
      ],
    },
    {
      id: 'an-example-rolling-a-key-without-downtime',
      h: 'An example: rolling a key without downtime',
      p: [
        'A bank’s developer finds a key in a shared chat log. The safe way to replace it is to create a second key, deploy the new key to the servers, confirm that calls succeed, and only then delete the old key. If the provider allows only one key at a time, schedule the change for a quiet hour and be ready to roll back the deploy.',
        'Afterwards, search the logs for calls made with the old key from addresses you do not recognise, and write down how the key got into the chat so it does not happen again.',
      ],
    },
    {
      id: 'where-keys-leak',
      h: 'Where keys leak',
      p: [
        'Most leaked keys are not stolen by clever attacks. They are pasted into a public code repository, left in a mobile app that anyone can unpack, printed in a log file, or sent in a chat message. Automated scanners watch public repositories and find new keys within minutes, so a key that was public for even a short time should be treated as compromised.',
        'Prevent this with habits and tools. Add configuration files to the ignore list, run a secret scanner before every commit, keep keys out of front-end code, and mask them in logs. Give each key the narrowest permissions the job needs, and set up alerts for unusual call volume, which is often the first sign that someone else is using your key.',
      ],
    },
    {
      id: 'environments-and-ownership',
      h: 'Environments and ownership',
      p: [
        'Use one key per environment and per application. Name each key after its owner and purpose in your records, and record who created it and when. When a developer leaves a team, rotate the keys they could reach.',
        'Treat the key list as a register that someone reviews each quarter. Keys that nobody can explain are the ones to remove first.',
      ],
    },
    {
      id: 'testing-without-risking-real-data',
      h: 'Testing without risking real data',
      p: [
        'Use test keys in automated tests and in demos. A test key should reach a sandbox, where nothing real is signed or charged. If your tests need a live key, something is wrong with the setup. Keep live keys out of continuous integration systems unless they are stored as protected secrets.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Keys at ePahichan',
      p: [
        'The [Signing API](/products/signing-api) has sandbox and test keys, so you build before going live. The [ID check API](/products/id-check-api) uses a client ID and password to get a token valid for 30 minutes, and is called from your server so credentials never reach an app.',
      ],
    },
  ],
  faq: [
    { q: 'What is an API key?', a: 'It is a secret string that identifies the application making an API call.' },
    { q: 'Can I put an API key in a mobile app?', a: 'No. Anyone can extract it from the app. Keep keys on your server.' },
    { q: 'What do I do if a key leaks?', a: 'Rotate it immediately and check the logs for use you do not recognise.' },
    { q: 'Is an API key the same as a private key?', a: 'No. An API key authenticates an application to an API. A private key creates digital signatures.' },
  ],
  related: ['oauth', 'webhook', 'idempotency', 'private-key'],
  product: 'signing-api',
};

export default term;
