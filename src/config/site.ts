// Build-time site configuration, all of it from the brand document (docs/brand.md).
import { brand, tokens } from '../brand';

const site = brand.site;
const company = site.company;

export const SITE_URL = site.url;
export const SITE_NAME = brand.name;

/** The signing app's web address. */
export const APP_URL = tokens.appUrl;
/** The developer portal, when the operator has one. */
export const DEVELOPERS_URL = site.developersUrl;

// Questions go to the operator's published contacts (also printed in the privacy policy and the brochures).
export const COMPANY = company.name;
/** The company name ending a sentence: a name that already ends in a full stop gets no second one. */
export const COMPANY_SENTENCE = tokens.companySentence;
export const CONTACT_EMAIL = company.email;
export const CONTACT_PHONE_DISPLAY = company.phoneDisplay;
export const CONTACT_PHONE_TEL = company.phoneTel;
export const CONTACT_PHONE_JSONLD = company.phoneIntl;
export const ADDRESS = { street: company.street, locality: company.locality, country: brand.authority.country, countryName: tokens.country } as const;
export const OFFICE_LINE = tokens.office;

/** The certifying authority behind every certificate. */
export const CA_NAME = site.caName;

/** The company the product belongs to. The footer links here, and structured data names it as the parent. */
export const PARENT_COMPANY = site.parentCompany;

/** Languages the site is published in, from the brand document. */
export const LOCALES = brand.locales;
