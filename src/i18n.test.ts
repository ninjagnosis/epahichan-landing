import { describe, expect, it } from 'vitest';
import { localePath, otherLocalePath } from './i18n';

describe('localePath', () => {
  it('leaves Nepali paths unchanged (Nepali is the default locale)', () => {
    expect(localePath('ne', '/')).toBe('/');
  });

  it('prefixes English paths with /en', () => {
    expect(localePath('en', '/')).toBe('/en/');
  });

  it('prefixes non-root English paths with /en without a double slash', () => {
    expect(localePath('en', '/about/')).toBe('/en/about/');
  });
});

describe('otherLocalePath', () => {
  it('points from Nepali to the English version of the same route', () => {
    expect(otherLocalePath('ne', '/')).toEqual({ locale: 'en', href: '/en/' });
  });

  it('points from English back to the Nepali version of the same route', () => {
    expect(otherLocalePath('en', '/')).toEqual({ locale: 'ne', href: '/' });
  });
});
