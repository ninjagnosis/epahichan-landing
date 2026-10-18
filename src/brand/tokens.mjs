// Text tokens for copy, data and Markdown: `%%name%%` is replaced from the brand document.
// A token that is not defined stops the build, so a typo never reaches a page.

const pascal = (value) => value.split('-').filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join('');
const camel = (value) => pascal(value).replace(/^./, (c) => c.toLowerCase());
/** "an Example account", "a Foo account": the article follows the first letter of the name. */
const accountOf = (name) => `${/^[aeiou]/i.test(name) ? 'an' : 'a'} ${name} account`;

/** @param {import('./load.mjs').Brand} brand */
export function buildTokens(brand) {
  const site = brand.site;
  const company = site.company;
  const country = new Intl.DisplayNames(['en'], { type: 'region' }).of(brand.authority.country) ?? brand.authority.country;
  const pay = site.paymentProviderName;
  return {
    brand: brand.name,
    brandAccount: accountOf(brand.name),
    // The name the SDK's client has in sample code: the SDK's element prefix.
    sdkClient: camel(brand.sdk.elementPrefix),
    ca: site.caName,
    caShort: site.caShortName,
    authority: brand.authority.shortName,
    authorityLegal: brand.authority.legalName,
    regulator: brand.regulator.shortName,
    regulatorName: brand.regulator.name,
    company: company.name,
    // How the company is named in running text: its short name, else its name.
    companyShort: company.shortName ?? company.name,
    // The company name ending a sentence: a name that already ends in a full stop ("Pvt. Ltd.") gets no second one.
    companySentence: company.name.endsWith('.') ? company.name : `${company.name}.`,
    companyEmail: company.email,
    companyPhone: company.phoneDisplay,
    office: `${company.street}, ${company.locality}, ${country}`,
    city: company.locality,
    country,
    siteUrl: site.url,
    siteHost: new URL(site.url).host,
    appUrl: `https://${brand.hosts.web}`,
    appHost: brand.hosts.web,
    developersUrl: site.developersUrl ?? '',
    parentCompany: site.parentCompany?.name ?? '',
    // How a visitor pays, as the operator names it. Without a name the copy says so in general terms.
    paymentMethods: pay ? `${pay}, or a bank or wallet app` : 'a card, a bank or a wallet app',
    paymentThrough: pay ? `${pay} or a bank or wallet app` : 'a card, a bank or a wallet app',
    paymentSpec: pay ? `${pay}, bank or wallet app` : 'Card, bank or wallet app',
  };
}

const TOKEN = /%%([A-Za-z][A-Za-z0-9]*)%%/g;

/** Replace every `%%name%%` in a string. */
export function fill(value, tokens) {
  return value.replace(TOKEN, (_, name) => {
    if (!Object.prototype.hasOwnProperty.call(tokens, name)) throw new Error(`unknown text token %%${name}%%`);
    return tokens[name];
  });
}

/** Replace tokens in every string of a plain structure (arrays, objects). Functions and other values pass through. */
export function fillDeep(value, tokens) {
  if (typeof value === 'string') return fill(value, tokens);
  if (Array.isArray(value)) return value.map((item) => fillDeep(item, tokens));
  if (value && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fillDeep(v, tokens)]));
  }
  return value;
}
