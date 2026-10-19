import type { Term } from '../types';

const term: Term = {
  slug: 'liveness-detection',
  term: 'Liveness detection',
  aka: ['liveness check', 'presentation attack detection', 'anti-spoofing', 'selfie liveness'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'Liveness detection: meaning and how it works',
  description: 'Liveness detection checks that a face or fingerprint comes from a live person, not a photo, video or mask. How it works and why identity checks use it.',
  short: 'Liveness detection checks that a biometric reading comes from a live person present at the moment, not from a photo, a video or a mask.',
  body: [
    'A face match alone has a weakness: anyone can hold up a photo of someone else. Liveness detection closes that gap by looking for signs of life. It is used in selfie-based [eKYC](/glossary/ekyc) and in [video KYC](/glossary/video-kyc).',
    'The technical name for what it defends against is a presentation attack, where a fake trait is presented to the sensor.',
  ],
  sections: [
    {
      id: 'active-passive',
      h: 'Active and passive liveness',
      p: ['Two broad approaches exist:'],
      list: [
        'Active: the user is asked to do something, such as blink, turn their head or read digits aloud.',
        'Passive: software analyses a single image or short clip for texture, reflections and depth cues, with no action asked.',
      ],
    },
    {
      id: 'attacks',
      h: 'What it defends against',
      p: [
        'Common attacks are a printed photo, a screen replaying a video, a mask and, increasingly, a deepfake injected into the camera feed. Different methods cover different attacks, so strong systems combine several signals.',
      ],
    },
    {
      id: 'with-biometrics',
      h: 'Liveness and biometric matching',
      p: [
        'Matching and liveness answer different questions. [Biometric authentication](/glossary/biometric-authentication) asks if the trait matches a template. Liveness asks if it is live. A system needs both to resist impersonation. On a phone, the secure hardware sensor often handles both before it unlocks a key.',
      ],
    },
    {
      id: 'limits',
      h: 'Limits',
      p: [
        'No liveness check is perfect. Attackers adapt, and checks can wrongly reject real users in poor light. Businesses usually combine liveness with data checks, such as confirming the [NIN](/glossary/nin), and with a human review for doubtful cases.',
      ],
    },
    {
      id: 'an-example-a-selfie-check-at-onboarding',
      h: 'An example: a selfie check at onboarding',
      p: [
        'A wallet asks a new user for a selfie. A passive system analyses a single frame for screen glare, paper texture and the edges of a printed photo. An active system asks the user to turn their head left, then right, and checks the movement is consistent with a three-dimensional face.',
        'Some systems also look at the camera feed itself. A deepfake can be injected into the feed without any physical object being held up, so the app checks that the camera is a real device and that the video has not been replaced. Whatever the method, treat a pass as one signal. A pass plus a matching NIN plus normal device behaviour is much stronger than any one of them.',
      ],
    },
    {
      id: 'accuracy-and-fairness',
      h: 'Accuracy and fairness',
      p: [
        'Liveness systems are measured by two numbers: how often they let a fake through, and how often they reject a real person. Lowering one raises the other. Vendors publish rates from test labs, but results on your own users matter more, because lighting, camera quality and skin tone change them.',
        'Check performance on the phones your customers actually use, not on flagship devices only. Offer a way through for people who fail repeatedly, such as an assisted check at a branch, so that a poor camera does not lock someone out of a service they are entitled to.',
      ],
    },
    {
      id: 'standards-and-testing',
      h: 'Standards and testing',
      p: [
        'ISO/IEC 30107-3 is a testing standard for presentation attack detection. It defines how detection is evaluated, with methods, metrics and reporting, and it does not set pass levels itself. Vendors often describe test levels informally, such as printed photos or a phone screen at the lower level and paper masks or video with blinking at the next, but those descriptions are the vendors’ own.',
        'The standard does not cover injection attacks, where a virtual camera or emulator feeds video to the app before it reaches the checker. A product can pass presentation tests and still be open to injection, so ask a vendor how it defends against both.',
      ],
    },
    {
      id: 'telling-users-what-is-happening',
      h: 'Telling users what is happening',
      p: [
        'Explain why the camera is on and what the user must do, in plain words. A short instruction such as “look at the camera and turn your head slowly” cuts failures, and a clear reason when a check fails lets a person fix the light or the angle.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Liveness and ePahichan',
      p: [
        'ePahichan does not sell a liveness check. The app relies on the phone’s own fingerprint or face unlock to release a signing key held in its secure hardware.',
      ],
    },
  ],
  faq: [
    { q: 'What is liveness detection?', a: 'It is a check that a face or fingerprint comes from a live person present at the time.' },
    { q: 'What is the difference between active and passive liveness?', a: 'Active asks the user to perform an action. Passive analyses the image without any action.' },
    { q: 'Can liveness detection stop deepfakes?', a: 'It helps, but no method is perfect. Strong systems combine several signals and human review.' },
    { q: 'Is liveness detection the same as face recognition?', a: 'No. Face recognition matches a face. Liveness checks the face is real and live.' },
  ],
  related: ['biometric-authentication', 'video-kyc', 'ekyc', 'kyc'],
};

export default term;
