// Build-time site configuration.

export const SITE_URL = 'https://epahichan.com';
export const SITE_NAME = 'ePahichan';

export const APP_URL = 'https://app.epahichan.com';
export const DEVELOPERS_URL = 'https://developers.epahichan.com';

// Questions go to the operator's published contacts (also printed in the
// privacy policy and the brochures).
export const COMPANY = 'Ninja Infosys Pvt. Ltd.';
export const CONTACT_EMAIL = 'info@ninjainfosys.com';
export const CONTACT_PHONE_DISPLAY = '01-5922361';
export const CONTACT_PHONE_TEL = 'tel:+97715922361';
export const CONTACT_PHONE_JSONLD = '+977-1-5922361';
export const ADDRESS = { street: 'Anamnagar', locality: 'Kathmandu', country: 'NP', countryName: 'Nepal' } as const;
export const OFFICE_LINE = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.countryName}`;

/** The certifying authority behind every certificate. */
export const CA_NAME = 'Nepal Certifying Company';

/** The company the product belongs to. The footer links here, and structured data names it as the parent. */
export const PARENT_COMPANY_NAME = 'Ninja Infosys LLC';
export const PARENT_COMPANY_URL = 'https://ninjainfosys.com';
export const PARENT_COMPANY_ID = 'https://ninjainfosys.com/#organization';
