export type Locale = 'ne' | 'en';

export const locales: Locale[] = ['ne', 'en'];
export const defaultLocale: Locale = 'ne';

export const t = {
  ne: {
    langSwitchLabel: 'English',
    langSwitchLang: 'en' as Locale,
    comingSoon: 'चाँडै आउँदैछ।',
    copyright: `© ${new Date().getFullYear()} ePahichan`,
    // Section 2.3 of docs/landing-content-v1.md (TEC-59) is the final copy
    // for everything below except the button/algorithm labels, which are
    // this component's own functional UI text, not page content.
    signDemo: {
      heading: 'आफैं गरेर हेर्नुहोस्',
      intro:
        'तलको डेमो नक्कली होइन। चाबी तपाईंकै यन्त्रमा बन्छ। हस्ताक्षर तपाईंकै यन्त्रमा बन्छ। कुनै पनि कुरा यो पानाबाट बाहिर जाँदैन।',
      steps: [
        'मुना र मदन दुवैका लागि चाबी बनाउनुहोस्।',
        'सम्झौताको वाक्य आफूले चाहेजस्तो लेख्नुहोस्।',
        'मुनाको हस्ताक्षर गर्नुहोस्। अनि मदनको।',
        'अब वाक्यको एउटा अक्षर फेर्नुहोस् — र हेर्नुहोस् के हुन्छ।',
      ],
      algorithmLabel: 'प्रयोग भइरहेको एल्गोरिदम:',
      algDetectingLabel: 'पत्ता लगाउँदै…',
      algEd25519Label: 'Ed25519',
      algEcdsaLabel: 'ECDSA (P-256)',
      contractLabel: 'सम्झौताको वाक्य (सम्पादन गर्न मिल्ने)',
      contractDefaultText: 'मुनाले मदनलाई दुई सय झोला, प्रतिगोटा रु. ४५०, असार मसान्तभित्र बुझाउने।',
      munaLabel: 'मुना',
      madanLabel: 'मदन',
      signAsMunaButton: 'मुनाको हस्ताक्षर गर्नुहोस्',
      counterSignButton: 'मदनको हस्ताक्षर गर्नुहोस्',
      resetButton: 'रिसेट',
      statusPendingIcon: '○',
      statusPendingLabel: 'हस्ताक्षर भएको छैन',
      statusVerifiedIcon: '✓',
      statusVerifiedLabel: 'हस्ताक्षर मिल्यो',
      statusFailedIcon: '✕',
      statusFailedLabel: 'हस्ताक्षर मिलेन',
      timestampLabel: 'हस्ताक्षर समय:',
      timestampCaption:
        'यो समय तपाईंकै यन्त्रको घडीबाट आएको हो। यन्त्रको घडी जोसुकैले फेर्न सक्छ, त्यसैले यसले कहिले सही गरियो भन्ने कुरा प्रमाणित गर्दैन। साँचो ePahichan हस्ताक्षरमा भरपर्दो समय-प्रमाणक निकायले दिएको समय जोडिन्छ।',
      closingNote:
        'यहाँ बनेको हस्ताक्षर साँचो हो, तर यो ePahichan हस्ताक्षर होइन। यहाँ बनेको चाबी कुनै व्यक्तिसँग जोडिएको छैन — यसले "कसैले सही गर्‍यो" भन्छ, "मुनाले सही गरिन्" भन्दैन। चाबीलाई नामसँग जोड्ने काम प्रमाणपत्रले गर्छ।',
    },
  },
  en: {
    langSwitchLabel: 'नेपाली',
    langSwitchLang: 'ne' as Locale,
    comingSoon: 'Coming soon.',
    copyright: `© ${new Date().getFullYear()} ePahichan`,
    // Section 3.3 of docs/landing-content-v1.md (TEC-59) is the final copy
    // for everything below except the button/algorithm labels, which are
    // this component's own functional UI text, not page content.
    signDemo: {
      heading: 'Try it yourself',
      intro:
        'The demo below is not a mock-up. The keys are made on your own device. The signatures are made on your own device. Nothing leaves this page.',
      steps: [
        'Make a pair of keys for Muna and for Madan.',
        'Write the agreement however you like.',
        'Sign as Muna. Then sign as Madan.',
        'Now change one character of the text — and watch what happens.',
      ],
      algorithmLabel: 'Algorithm in use:',
      algDetectingLabel: 'Detecting…',
      algEd25519Label: 'Ed25519',
      algEcdsaLabel: 'ECDSA (P-256)',
      contractLabel: 'Contract text (editable)',
      contractDefaultText: 'Muna will deliver two hundred bags to Madan at Rs. 450 each, by the end of Asar.',
      munaLabel: 'Muna',
      madanLabel: 'Madan',
      signAsMunaButton: 'Sign as Muna',
      counterSignButton: 'Sign as Madan',
      resetButton: 'Reset',
      statusPendingIcon: '○',
      statusPendingLabel: 'Not signed yet',
      statusVerifiedIcon: '✓',
      statusVerifiedLabel: 'Signature matches',
      statusFailedIcon: '✕',
      statusFailedLabel: 'Signature does not match',
      timestampLabel: 'Signed at:',
      timestampCaption:
        "This time comes from your own device's clock. Anyone can change a device clock, so it does not prove when something was signed. A real ePahichan signature carries a time issued by a trusted timestamp authority.",
      closingNote:
        'The signature you just made is real, but it is not an ePahichan signature. The key made here is not tied to any person — it says "somebody signed", not "Muna signed". Tying a key to a name is what a certificate does.',
    },
  },
} as const;

/**
 * Given a locale-relative path like "/" or "/about/" (always written as if
 * for the Nepali/default site), return the full site path for a given
 * locale: "ne" -> unchanged, "en" -> prefixed with "/en".
 */
export function localePath(locale: Locale, relPath: string): string {
  if (locale === 'ne') return relPath;
  return relPath === '/' ? '/en/' : `/en${relPath}`;
}

/** The other locale's path for the language switch, given this page's relPath. */
export function otherLocalePath(locale: Locale, relPath: string): { locale: Locale; href: string } {
  const other: Locale = locale === 'ne' ? 'en' : 'ne';
  return { locale: other, href: localePath(other, relPath) };
}
