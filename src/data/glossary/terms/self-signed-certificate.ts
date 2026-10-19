import type { Term } from '../types';

const term: Term = {
  slug: 'self-signed-certificate',
  term: 'Self-signed certificate',
  aka: ['Self signed certificate', 'Self-signed cert', 'Self-signed digital signature'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'Self-signed certificate: meaning, risks and when it is used',
  description: 'A self-signed certificate is signed by its own key, not by a certifying authority. Why it is not trusted for signing documents and where it is fine to use.',
  short: 'A self-signed certificate is a certificate signed by its own private key instead of by a certifying authority. Nobody has checked who holds it, so other people have no reason to trust it.',
  body: [
    'Anyone can create one in a minute with free tools. It carries a name and a public key, just like a certificate from an authority, and the signature on it is mathematically correct. What is missing is a trusted third party saying the name is true.',
    'That is the whole difference, and it matters for signing contracts. A PDF signed with a self-signed certificate shows an untrusted or unknown signer warning.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Self-signed certificate meaning',
      p: [
        'In a normal certificate the issuer and the subject are different: an authority vouches for a person. In a self-signed one they are the same, so the holder vouches for themselves. A [root certificate](/glossary/root-certificate) is also self-signed, but it is trusted because software was set up in advance to trust it. A self-signed certificate has no such arrangement.',
      ],
    },
    {
      id: 'documents',
      h: 'Self-signed certificates and signing documents',
      p: [
        'A signature made with one proves the document was not changed since signing. It does not prove who signed. Anyone could have put any name in the certificate. For that reason, they do not give the assurance expected of a [digital signature certificate](/glossary/digital-signature-certificate) from a licensed [certifying authority](/glossary/certifying-authority), and they should not be used where a counterparty needs to rely on the signer’s identity. Whether a signature is legally recognised in Nepal is governed by the [Electronic Transactions Act](/glossary/electronic-transactions-act), which looks to licensed authorities.',
      ],
    },
    {
      id: 'uses',
      h: 'Where self-signed certificates are fine',
      p: [
        'They are useful in places where the people on both sides know and control the certificate:',
      ],
      list: [
        'Local development and testing.',
        'Internal systems where the certificate is added to every machine by an administrator.',
        'Closed device-to-device links with the certificate stored in advance.',
      ],
    },
    {
      id: 'spot',
      h: 'How to spot one',
      p: [
        'In the certificate details, the issuer and subject are identical and there is no chain above it. A PDF reader reports the signer as unknown or not trusted. Do not click through the warning, and do not install a self-signed certificate as a trusted root unless you created it or the owner of your system gave it to you. See [signature validation](/glossary/signature-validation) for how readers reach this result.',
      ],
    },
    {
      id: 'risk',
      h: 'Why people still ask for them',
      p: [
        'Teams often start with a self-signed certificate because it costs nothing and needs no waiting. For prototypes that is reasonable. The problem comes when the prototype becomes the product and customers are asked to click through warnings. Habituating users to ignore warnings makes real attacks easier.',
        'Before going live with anything customers rely on, move to a certificate from a licensed certifying authority. For documents with legal weight in Nepal, that step is not optional under the Electronic Transactions Act.',
      ],
    },
    {
      id: 'ex',
      h: 'Example: a contract signed with a self-signed certificate',
      p: [
        'A freelancer sends a signed PDF using a self-signed certificate with their own name in it. The client’s reader says the signer’s identity is unknown. The client cannot tell whether the freelancer or someone using the freelancer’s name made the signature.',
        'The same freelancer with a certificate from a licensed authority gives the client a statement from a third party that the authority checked the freelancer’s documents. That statement is what the client needs to rely on the signature.',
      ],
    },
    {
      id: 'alt',
      h: 'Better options than a self-signed certificate',
      p: [
        'For internal tools, an organisation can run its own certifying authority and distribute its root to its own devices, which gives a proper chain without public trust. For documents shared with outsiders, the answer is a certificate from a licensed authority.',
        'A self-signed certificate is also sometimes used to sign software in testing. Replace it before release. The cost of a proper certificate is small next to the cost of customers learning to ignore warnings.',
      ],
    },
  ],
  faq: [
    { q: 'What is a self-signed certificate?', a: 'A certificate signed with its own private key instead of by an authority. It says who the holder claims to be, with nobody to confirm it.' },
    { q: 'Is a self-signed certificate secure?', a: 'The cryptography can be as strong as any other. The weakness is trust: nothing confirms the named holder is who they say.' },
    { q: 'Can I sign a PDF with a self-signed certificate?', a: 'Technically yes, but readers will warn that the signer is not trusted, and it gives a counterparty no reliable proof of identity.' },
    { q: 'How is it different from a root certificate?', a: 'Both are self-signed. A root is on purpose installed in trust stores in advance. An ordinary self-signed certificate is not.' },
  ],
  related: ['root-certificate', 'digital-signature-certificate', 'certifying-authority', 'x509-certificate'],
};

export default term;
