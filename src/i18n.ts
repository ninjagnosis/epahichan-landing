export type Locale = 'ne' | 'en';

export const locales: Locale[] = ['ne', 'en'];
export const defaultLocale: Locale = 'ne';

export const t = {
  ne: {
    langSwitchLabel: 'English',
    langSwitchLang: 'en' as Locale,
    comingSoon: 'चाँडै आउँदैछ।',
    copyright: `© ${new Date().getFullYear()} ePahichan`,
  },
  en: {
    langSwitchLabel: 'नेपाली',
    langSwitchLang: 'ne' as Locale,
    comingSoon: 'Coming soon.',
    copyright: `© ${new Date().getFullYear()} ePahichan`,
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
