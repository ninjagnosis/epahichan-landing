import type { Term } from '../types';

const term: Term = {
  slug: 'csr',
  term: 'CSR',
  full: 'Certificate Signing Request',
  aka: ['Certificate signing request', 'PKCS #10', 'Certificate request'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'CSR meaning: what a Certificate Signing Request is',
  description: 'A CSR is the request a person or server sends to a certifying authority to get a certificate. What it contains and why the private key never goes in it.',
  short: 'A CSR (Certificate Signing Request) is the message sent to a certifying authority to ask for a certificate. It carries the public key and the name to be certified, and is signed with the matching private key.',
  body: [
    'To get a [digital signature certificate](/glossary/digital-signature-certificate), you do not send your private key to anyone. You create a key pair, then send the authority a CSR. The authority checks your identity, signs a certificate over the public key in the request and sends the certificate back.',
    'The common format is PKCS #10, described in RFC 2986.',
  ],
  sections: [
    {
      id: 'contents',
      h: 'What a CSR contains',
      p: [
        'A CSR holds three things:',
      ],
      list: [
        'The subject: the name and details that are to appear in the certificate.',
        'The [public key](/glossary/public-key) that is to be certified.',
        'A signature made with the matching [private key](/glossary/private-key).',
      ],
    },
    {
      id: 'why-signed',
      h: 'Why a CSR is signed',
      p: [
        'The signature proves possession. It shows that whoever made the request holds the private key for the public key inside it. Without that check, someone could ask for a certificate on another person’s public key. The CSR does not prove who the requester is. The authority does that separately, for example by checking a citizenship certificate.',
      ],
    },
    {
      id: 'steps',
      h: 'How a CSR is made and used',
      p: [
        'In outline:',
      ],
      list: [
        'Generate a [key pair](/glossary/key-pair) on a device or token. The private key stays there.',
        'Build the request with the subject details and sign it.',
        'Send the CSR, with identity evidence, to the authority.',
        'The authority validates, issues an [X.509 certificate](/glossary/x509-certificate) and returns it.',
        'Install the certificate next to the private key.',
      ],
    },
    {
      id: 'safe',
      h: 'Is it safe to share a CSR',
      p: [
        'Yes. A CSR contains no secret. Anyone who sees it learns the public key and the name, nothing more. The private key must never be sent, emailed or pasted into a form, whatever the request says. In the ePahichan app the key is created in the phone’s secure hardware and the request is built for you, so there is no file to handle.',
      ],
    },
    {
      id: 'renewal',
      h: 'CSR and certificate renewal',
      p: [
        'Renewing a certificate usually means sending a new CSR. Some authorities let you keep the same key pair and others require a fresh one. A fresh pair is the better habit, because an old key may have been exposed without anyone noticing. After renewal, the old certificate keeps working until its end date unless it is revoked.',
        'If a CSR has a mistake, such as a misspelt name, the authority cannot fix it for you. The request has to be made again, because the subject is covered by the signature on the request. Check the details before sending, and compare them with the certificate you receive back, since the authority may adjust names to match the documents you supplied.',
      ],
    },
    {
      id: 'check',
      h: 'What the authority checks in a CSR',
      p: [
        'The authority first checks that the signature on the request verifies, which proves the sender holds the private key. It then compares the subject details with the identity evidence you supplied. A name that differs from your citizenship certificate, even in spelling, is a common reason for a request to be returned.',
        'Next it checks the key itself. Keys that are too short or made by a weak generator are refused. Only then is the certificate built, with the authority’s own choices for the validity period and key usage, which are not taken from the request. This is why you may find the certificate differs from what you asked for in details the authority controls.',
      ],
    },
    {
      id: 'example',
      h: 'Example: from request to certificate',
      p: [
        'A person installs the app. The phone creates a key pair in its secure hardware, builds a CSR containing the public key and the person’s name, and signs the CSR with the private key. The request goes to the authority with a photo of the citizenship certificate and a live selfie. The authority checks these, signs a certificate, and sends it back. The app stores it.',
        'The person never saw the CSR. That is the point of a good app: the technical steps are handled, but they still happen in this order, and the private key stays where it was made.',
      ],
    },
  ],
  faq: [
    { q: 'What does CSR stand for?', a: 'Certificate Signing Request.' },
    { q: 'Does a CSR contain the private key?', a: 'No. It holds the public key and subject details only, plus a signature made with the private key.' },
    { q: 'Can I reuse a CSR?', a: 'Often yes, for a renewal with the same key, but it is better practice to generate a new key pair each time.' },
    { q: 'What is the difference between a CSR and a certificate?', a: 'The CSR is the request. The certificate is the authority’s signed answer.' },
  ],
  related: ['key-pair', 'digital-signature-certificate', 'certifying-authority', 'x509-certificate'],
};

export default term;
