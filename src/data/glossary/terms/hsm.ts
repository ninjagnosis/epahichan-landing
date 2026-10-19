import type { Term } from '../types';

const term: Term = {
  slug: 'hsm',
  term: 'HSM',
  full: 'Hardware Security Module',
  aka: ['Hardware security module', 'Cloud HSM', 'Hardware key vault'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'HSM meaning: Hardware Security Module explained',
  description: 'An HSM is a tamper-resistant device that stores private keys and signs inside the hardware. What it does, FIPS 140 levels and HSM vs USB token.',
  short: 'An HSM (Hardware Security Module) is a tamper-resistant device that generates and stores cryptographic keys and performs signing inside the hardware, so the private key never leaves it.',
  body: [
    'Software keys can be copied. A file on a server can be stolen with the server. An HSM solves this by keeping the [private key](/glossary/private-key) in a protected chip or appliance. Programs send the hash to be signed in, and get the signature back. The key never comes out.',
    'Certifying authorities use HSMs to protect their root and issuing keys, and businesses use them to protect signing keys at volume.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'HSM meaning',
      p: [
        'An HSM is a computer built only for key protection. It has its own processor, random number generator and secure storage. If someone opens the case or probes it, it is designed to erase the keys. It has strict access controls, with several administrators needed for sensitive actions, and logs every operation.',
      ],
    },
    {
      id: 'what',
      h: 'What an HSM does',
      p: [
        'The main functions are:',
      ],
      list: [
        'Generate a [key pair](/glossary/key-pair) with a certified random source.',
        'Store the private key so it cannot be exported in plain form.',
        'Sign and decrypt inside the device on request.',
        'Control who may use each key and write a log of every use.',
        'Back up keys in an encrypted form to another HSM.',
      ],
    },
    {
      id: 'fips',
      h: 'FIPS 140 and Common Criteria',
      p: [
        'Buyers look for independent certification. FIPS 140-3, from NIST (replacing FIPS 140-2), defines four security levels. Level 1 is the basic requirement, Level 2 adds tamper evidence, Level 3 adds tamper response and identity-based access, and Level 4 adds protection against environmental attacks. Many signing HSMs are validated at Level 3. Common Criteria is a separate framework often cited for signing devices. Certification applies to a specific model and version, so check the certificate number.',
      ],
    },
    {
      id: 'forms',
      h: 'Forms of HSM',
      p: [
        'A network appliance in a rack, a PCIe card in a server, a small USB device and a cloud service all count. Programs usually talk to them through PKCS #11 or a vendor library. A cloud HSM means the provider runs the device and you rent access to it. The [USB token](/glossary/usb-token) is a one-person version of the same idea, and a [secure element](/glossary/secure-element) is the chip-level form found in phones.',
      ],
    },
    {
      id: 'when',
      h: 'When a business needs an HSM',
      p: [
        'A single person signing a few documents rarely does. A bank signing thousands of statements a day, or an authority issuing certificates, does. If your system holds one key that can sign on behalf of many people, protect it with an HSM. Where each person holds their own key in their phone, as in the ePahichan app, the secure hardware of the phone does the same job per user.',
      ],
    },
    {
      id: 'ceremony',
      h: 'Key ceremonies and backup',
      p: [
        'Authorities create root keys in a documented ceremony. Several trusted people attend, the room and devices are logged, and the key is split between smart cards so no single person can use it. The HSM is then stored offline. The same care applies on a smaller scale to a business signing key: decide who may use it, who can recover it and what is logged.',
        'Backups are the awkward part. A key that can never leave the device is safe but lost if the device fails, so HSMs support encrypted backup to a second HSM of the same family. Test the recovery before you need it.',
      ],
    },
    {
      id: 'ex',
      h: 'Example: a bank signing statements',
      p: [
        'A bank issues thousands of statements and wants each one signed by the bank’s own certificate. A server prepares the PDFs and sends each hash to the HSM. The HSM signs it and returns the signature, which the server inserts. The key is never in the server’s memory.',
        'If an attacker breaks into the server, they can ask the HSM to sign things while they have access, but they cannot take the key away and use it later elsewhere. The HSM log shows what was signed and when, which helps the bank find and revoke what was signed in that window.',
      ],
    },
    {
      id: 'fips',
      h: 'FIPS 140-2 certificates and the September 2026 change',
      p: [
        'NIST’s validation program said FIPS 140-2 certificates remain accepted through 21 September 2026, after which they move to the historical list. Historical modules can stay in use in existing systems, but agencies and many regulated buyers do not accept them for new purchases. As of October 2026, that date has passed.',
        'When buying an HSM, ask for a FIPS 140-3 certificate number and check it on the NIST validated-modules list, rather than relying on a brochure.',
      ],
    },
  ],
  faq: [
    { q: 'What does HSM stand for?', a: 'Hardware Security Module.' },
    { q: 'What is the difference between an HSM and a USB token?', a: 'Both keep keys in hardware. An HSM is built for many keys and high volume, usually in a server room. A USB token holds one person’s key.' },
    { q: 'Can the key be taken out of an HSM?', a: 'Not in plain form. Keys can be exported only wrapped under another key, if the policy allows it at all.' },
    { q: 'What is FIPS 140-3 Level 3?', a: 'A NIST validation level requiring physical tamper resistance with a response such as wiping keys, and identity-based access control.' },
  ],
  related: ['private-key', 'usb-token', 'secure-element', 'certifying-authority'],
};

export default term;
