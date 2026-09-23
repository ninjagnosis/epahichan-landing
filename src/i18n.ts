/*
  English only. The Nepali original this page was first written in lives in
  docs/landing-content-v1.md and in this file's history, so it can come back
  without being retranslated.
*/
export const t = {
  metaTitle: 'ePahichan — a digital signature for every Nepali',
  metaDescription:
    'Sign your documents online. Recognised by the law and free of hassle. See what a digital signature is and how it works — try it yourself, in your browser.',
  copyright: `© ${new Date().getFullYear()} ePahichan`,
  // Section 3.3 of docs/landing-content-v1.md (TEC-59) is the final copy
  // for everything below except the button/algorithm labels, which are
  // this component's own functional UI text, not page content.
  signDemo: {
    heading: 'Try it yourself',
    intro:
      'The demo below is not a mock-up. The keys are made on your own device. The signatures are made on your own device. Nothing leaves this page.',
    contractDefaultText: 'Muna will deliver two hundred bags to Madan at Rs. 450 each, by the end of Asar.',
    // Load-bearing, per docs/landing-content-v1.md §6.6: the sections above
    // say a private key is yours alone, which is true of digital signatures
    // in general but is not yet true of ePahichan. Reworded only because the
    // demo now plays itself and the reader no longer makes the signature.
    closingNote:
      'The signatures above are real, and they are made in this browser. They are not ePahichan signatures: the keys are generated fresh each time and are tied to no one — they say "somebody signed", not "Muna signed". Tying a key to a person is what a certificate does.',
  },
} as const;
