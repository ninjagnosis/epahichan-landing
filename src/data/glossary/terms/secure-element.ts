import type { Term } from '../types';

const term: Term = {
  slug: 'secure-element',
  term: 'Secure element',
  aka: ['SE', 'Secure enclave', 'StrongBox', 'Hardware-backed keystore', 'Trusted execution environment'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'Secure element: how phones protect signing keys in hardware',
  description: 'A secure element is a tamper-resistant chip that stores keys and signs inside itself. How it works on phones, and how it differs from software storage.',
  short: 'A secure element is a small tamper-resistant chip, built into a phone or card, that stores secret keys and does cryptography inside itself so the keys cannot be read out.',
  body: [
    'The main processor of a phone runs apps that can be attacked. A secure element is a separate chip with its own tiny processor and memory, designed to resist physical and software attacks. Apps can ask it to sign something. They cannot ask it for the key.',
    'This is how a phone can hold a [private key](/glossary/private-key) for [digital signatures](/glossary/digital-signature) with much less risk than a key stored as a file.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Secure element meaning',
      p: [
        'The term covers any dedicated, tamper-resistant chip for secrets: a SIM card, the chip in a bank card, or a chip soldered into a phone. They are evaluated against standards such as Common Criteria and EMVCo. Their small size and limited functions make them harder to attack than a general-purpose computer.',
      ],
    },
    {
      id: 'phones',
      h: 'Secure hardware on phones',
      p: [
        'Phones offer several forms with different names:',
      ],
      list: [
        'Apple Secure Enclave: a separate processor in iPhones that holds keys and handles fingerprint and face data.',
        'Android StrongBox: a hardware-backed keystore on a dedicated secure chip, available on devices that include it.',
        'Trusted execution environment (TEE): an isolated area of the main chip. Strong, but not a separate chip.',
      ],
    },
    {
      id: 'how',
      h: 'How signing works with a secure element',
      p: [
        'The app creates a [key pair](/glossary/key-pair) inside the hardware and marks it as non-exportable. It receives only the [public key](/glossary/public-key), which goes into a [certificate request](/glossary/csr). To sign, the app sends the [hash](/glossary/hash) of the document. The chip asks the user to unlock with fingerprint or face, signs, and returns the signature. A thief with a copy of the phone’s storage finds no key to take.',
      ],
    },
    {
      id: 'compare',
      h: 'Secure element vs HSM vs USB token',
      p: [
        'They solve the same problem at different scales. A secure element is built into a device and serves its owner. A [USB token](/glossary/usb-token) is a portable one you plug in. An HSM is shared infrastructure for many keys. All keep the key inside hardware.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Secure hardware in the ePahichan app',
      p: [
        'In the ePahichan app, signing keys are created in the phone’s secure hardware and unlocked with fingerprint or face. The certificate comes from a licensed certifying authority. The exact hardware depends on the model of the phone.',
      ],
    },
    {
      id: 'limits',
      h: 'What a secure element cannot do',
      p: [
        'It protects the key, not the decision to sign. If a person is tricked into approving a request, the chip signs it faithfully. That is why the app must show clearly what is being signed, and why unlocking with fingerprint or face should happen for each signature rather than once for a whole session.',
        'Phones also differ. Older or low-cost models may have only a software keystore, or a trusted execution environment instead of a separate chip. Ask what your app uses on your device, and expect that a report to the authority and a revoked certificate is the recovery step if the phone is lost.',
      ],
    },
    {
      id: 'ex',
      h: 'Example: what happens when you tap approve',
      p: [
        'You open a loan agreement in the app and tap sign. The app computes the document hash and asks the secure hardware to sign it. The phone asks for your fingerprint or face. If it matches, the chip signs and returns the signature. The app places it in the PDF.',
        'If someone copies the app’s files to another phone, there is nothing to sign with, because the key never left the chip. If they steal the phone, they still need your fingerprint or face. After several failed tries, the phone locks. These layers are why this is stronger than a key kept in a file.',
      ],
    },
    {
      id: 'verify',
      h: 'Checking what your phone uses',
      p: [
        'On Android, key attestation lets an app ask whether a key is held in secure hardware and at what level, which the app can show or require. On iPhone, keys created in the Secure Enclave are marked as such by the system. Services that depend on hardware-held keys can refuse a device that lacks it.',
        'If you are unsure about a particular model, ask the app’s maker, who knows which devices have been tested.',
      ],
    },
  ],
  faq: [
    { q: 'What is a secure element?', a: 'A tamper-resistant chip that stores secrets such as signing keys and performs cryptography without revealing them.' },
    { q: 'Is a secure element the same as a SIM card?', a: 'A SIM card is one kind of secure element. Phones can also have embedded ones, and some use a secure enclave on the main chip.' },
    { q: 'Can a key in a secure element be copied?', a: 'Not by normal means. Keys are marked non-exportable and the chip is built to resist probing, though no hardware is claimed to be unbreakable.' },
    { q: 'What if I lose the phone?', a: 'Report it to the authority so the certificate can be revoked, then set up a new key on the new phone.' },
  ],
  related: ['private-key', 'key-pair', 'hsm', 'usb-token', 'biometric-authentication'],
  product: 'app',
};

export default term;
