import type { Term } from '../types';

const term: Term = {
  slug: 'biometric-authentication',
  term: 'Biometric authentication',
  aka: ['biometrics', 'fingerprint login', 'face unlock', 'biometric verification'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'Biometric authentication: meaning and how it works',
  description: 'Biometric authentication proves who you are with a trait such as a fingerprint or face. How it works on phones and why a match unlocks a key, not a copy.',
  short: 'Biometric authentication confirms who someone is using a trait of their body, such as a fingerprint or face. On a phone it usually unlocks a secret stored on the device.',
  body: [
    'Passwords and codes prove that someone knows something. Biometrics prove that someone has something, a fingerprint or a face, that is hard to hand to another person. The check compares a new reading with a template made earlier.',
    'On modern phones the comparison happens in secure hardware. The template does not leave the device, and a successful match does not send your fingerprint anywhere. It lets the phone use a stored key.',
  ],
  sections: [
    {
      id: 'types',
      h: 'Common types',
      p: ['Phones and ID systems use several traits:'],
      list: [
        'Fingerprint: the ridges of a finger read by a sensor.',
        'Face: a map of the face, often with depth sensing.',
        'Iris and voice: used less often on consumer phones.',
      ],
    },
    {
      id: 'verification-vs-identification',
      h: 'One-to-one vs one-to-many',
      p: [
        'Verification compares a reading with one stored template to answer “is this the same person”. Identification searches many templates to answer “who is this”. Unlocking a phone is the first kind. The National ID, which records fingerprints at enrolment, is a database of the second kind.',
      ],
    },
    {
      id: 'keys',
      h: 'Biometrics and signing keys',
      p: [
        'A match is not the signature. It is the permission to use a [private key](/glossary/private-key) stored in the phone’s secure hardware. The key signs, and the biometric only unlocks it. That is how a [digital signature](/glossary/digital-signature) can be tied to a person without sending their fingerprint to a server.',
      ],
    },
    {
      id: 'limits',
      h: 'Limits',
      p: [
        'Biometrics can fail with wet fingers or changed lighting, and a fake presented to the sensor can fool weaker systems. Systems add [liveness detection](/glossary/liveness-detection) to check the trait comes from a live person. Unlike a password, you cannot change a fingerprint if a template leaks, which is why templates should stay on the device.',
      ],
    },
    {
      id: 'enrolment-matching-and-fallback',
      h: 'Enrolment, matching and fallback',
      p: [
        'Every biometric system has two phases. At enrolment, the sensor reads the trait several times and stores a template, a mathematical summary, not an image. At matching, a new reading is compared with the template and the system accepts if the score passes a threshold. The threshold is a trade: set it high and real users are rejected, set it low and look-alikes get in.',
        'Fallbacks matter. A worker with worn fingerprints, common among people who do manual labour, may fail a fingerprint sensor every day. Phones therefore offer a PIN as a backup. Treat the backup as part of your security design, because an attacker will aim at the weakest option. For signing, prefer a design where the key can be released only by the biometric or a strong device PIN, with limited attempts before a lockout.',
      ],
    },
    {
      id: 'comparing-biometrics-pins-and-codes',
      h: 'Comparing biometrics, PINs and codes',
      p: [
        'A PIN is cheap and can be changed, but people reuse it and shoulder-surfers can watch it. An SMS code proves control of a number for a few minutes, and can be intercepted through SIM swaps. A fingerprint or face cannot be forgotten or shared in the same way, but it cannot be replaced. Each factor has a place, and strong systems combine two of them, such as the phone you hold and the face you have.',
        'For a signature, the combination matters more than any single factor. A key held in secure hardware plus a biometric means an attacker needs both the device and the person, which is much harder than guessing a code.',
      ],
    },
    {
      id: 'consent-and-records',
      h: 'Consent and records',
      p: [
        'Biometric data is sensitive. Tell people what is captured, where it stays and how to remove it. On a phone, the template stays on the device, so a service never needs to hold it. If a service does keep templates, it carries the heavier duty of protecting them.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Biometrics in the ePahichan app',
      p: [
        'In the ePahichan app, the signing key is created on the phone and kept in its secure hardware, unlocked by fingerprint or face. ePahichan cannot read the key.',
      ],
    },
  ],
  faq: [
    { q: 'What is biometric authentication?', a: 'It is proving identity with a body trait such as a fingerprint or face.' },
    { q: 'Is my fingerprint sent to a server when I unlock my phone?', a: 'On modern phones, matching is done in secure hardware and the template stays on the device.' },
    { q: 'Is biometric authentication safer than a password?', a: 'It is harder to share or guess, but it cannot be changed if leaked. Many systems use it to unlock a stored key.' },
    { q: 'What is the difference between biometric and liveness checks?', a: 'A biometric check compares a trait with a template. A liveness check confirms the trait comes from a live person.' },
  ],
  related: ['liveness-detection', 'private-key', 'digital-signature', 'digital-identity'],
  product: 'app',
};

export default term;
