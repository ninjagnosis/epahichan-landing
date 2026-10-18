// The brand document: the one build-time input that says who this site is for.
//
// It is produced by `xtask brand-json <operator> <channel> --env <env> --out <file>` in the trust-platform
// repository (white-label plan, contract C4) and holds the channel's names, hosts, colours, wire names and
// the authority and regulator it belongs to. Nothing here names a customer: a build without a document
// stops, and so does a document that is missing a key this site reads.
//
// Where the document comes from, in order:
//   BRAND_JSON       the document itself, or the flat define file that carries it under "BRAND_JSON"
//   BRAND_JSON_FILE  path to that file
//
// Besides the keys the Flutter apps read, this site reads what the document carries for web builds
// (docs/brand.md): `site`, the names and contacts a visitor reads that are not on the authority, `sdk.elementPrefix`
// and the optional `colours.web` tints (stage_muted, stage_line, hero_muted, hero_line). They are checked here so a missing key fails the build with its name.

import fs from 'node:fs';
import path from 'node:path';

/**
 * @typedef {Object} Brand
 * @property {string} operator
 * @property {'production'|'sandbox'|'dev'} environment
 * @property {string} jurisdiction
 * @property {{id:string, kind:string, displayName:string, shortName:string|null, description:string|null}} channel
 * @property {string} name The product name a person reads: the channel's short name, else its display name.
 * @property {{legalName:string, shortName:string, country:string, supportEmail:string, cpsUrl:string}} authority
 * @property {{name:string, shortName:string, country:string}} regulator
 * @property {Record<string,string>} hosts
 * @property {{supported:string[], default:string}} locales
 * @property {string} storageKeyPrefix
 * @property {Record<string,string>} wire
 * @property {{id:string, displayName:string}|null} secondaryCalendar
 * @property {{code:string, minorUnitExponent:number}} currency
 * @property {{brand:Record<string,string>, light:Record<string,string>, dark:Record<string,string>, status:Record<string,string>, web?:Record<string,string>}} colours
 * @property {{body:string, heading:string, mono:string, fallback:string[]}} typography
 * @property {{
 *   url:string, developersUrl:string|null, caName:string, caShortName:string, paymentProviderName:string|null, popup:string|null,
 *   company:{name:string, shortName:string|null, email:string, phoneDisplay:string, phoneTel:string, phoneIntl:string, street:string, locality:string},
 *   parentCompany:{name:string, url:string, id:string}|null,
 * }} site
 * @property {{elementPrefix:string}} sdk The SDK's element prefix names the SDK client in sample code. The document's `sdk` block has
 * more keys; this site reads only that one.
 * @property {{stageMuted:string|null, stageLine:string|null, heroMuted:string|null, heroLine:string|null}} web Optional colours of
 * the document's `colours.web` block: tints that sit on the stage and hero backgrounds. Without them the site mixes them from the
 * ramp, so an operator that must keep exact tints sets them.
 */

const HEX = /^#[0-9A-Fa-f]{6}$/;
const KINDS = ['public', 'signing', 'operator', 'portal'];

const COLOUR_KEYS = {
  brand: ['lift', 'base', 'ink', 'deep'],
  light: ['paper', 'canvas', 'ink', 'ink_muted', 'line', 'subtle', 'outline', 'nav_panel'],
  dark: ['canvas', 'surface', 'ink', 'ink_muted', 'line', 'subtle', 'outline'],
  status: ['neutral', 'info', 'warning', 'success', 'error', 'archived'],
};
// The optional `colours.web` keys as the document spells them (colours.toml `[web]`), by the name this site uses.
const WEB_KEYS = { stageMuted: 'stage_muted', stageLine: 'stage_line', heroMuted: 'hero_muted', heroLine: 'hero_line' };
const WIRE_KEYS = [
  'signatureHeader', 'signatureTimestampHeader', 'eventIdHeader', 'keyIdHeader', 'deliveryIdHeader',
  'signingEventHeader', 'signingDeliveryHeader', 'clientSecretHeader', 'modeHeader', 'webhookUserAgent',
  'portalClaimPrefix',
];

const fail = (message) => {
  throw new Error(`brand document: ${message}`);
};

const text = (parent, key, where) => {
  const value = parent?.[key];
  if (typeof value !== 'string' || value.trim() === '') fail(`${where}.${key} is missing or empty`);
  return value;
};

const block = (parent, key, where) => {
  const value = parent?.[key];
  if (value === null || typeof value !== 'object' || Array.isArray(value)) fail(`${where}.${key} is missing`);
  return value;
};

/** The document text: BRAND_JSON, else the file BRAND_JSON_FILE names. */
export function readBrandText(env = process.env) {
  if (env.BRAND_JSON && env.BRAND_JSON.trim() !== '') return env.BRAND_JSON;
  if (env.BRAND_JSON_FILE && env.BRAND_JSON_FILE.trim() !== '') {
    try {
      return fs.readFileSync(env.BRAND_JSON_FILE, 'utf8');
    } catch (error) {
      fail(`cannot read BRAND_JSON_FILE (${error.message})`);
    }
  }
  return fail(
    'there is no brand document. Generate one with `xtask brand-json <operator> <channel> --env <env> --out <file>` ' +
      'and set BRAND_JSON_FILE to that file (or BRAND_JSON to its contents).',
  );
}

/**
 * Parse and check a document.
 * @param {string} source
 * @param {{kind: 'public'|'signing'|'operator'|'portal'}} need
 * @returns {Brand}
 */
export function parseBrand(source, need) {
  let doc;
  try {
    doc = JSON.parse(source);
    // The flat define file carries the document as a string under BRAND_JSON.
    if (typeof doc?.BRAND_JSON === 'string') doc = JSON.parse(doc.BRAND_JSON);
  } catch (error) {
    fail(`not valid JSON (${error.message})`);
  }
  if (doc?.schema !== 1) fail('schema must be 1');

  const channel = block(doc, 'channel', 'document');
  const kind = text(channel, 'kind', 'channel');
  if (!KINDS.includes(kind)) fail(`channel.kind "${kind}" is not one of ${KINDS.join(', ')}`);
  if (kind !== need.kind) fail(`this build needs a ${need.kind} channel, the document is for a ${kind} channel (${channel.id})`);
  const displayName = text(channel, 'displayName', 'channel');
  const shortName = typeof channel.shortName === 'string' && channel.shortName !== '' ? channel.shortName : null;

  const authority = block(doc, 'authority', 'document');
  const regulator = block(doc, 'regulator', 'document');
  const locales = block(doc, 'locales', 'document');
  const hosts = block(doc, 'hosts', 'document');
  const wire = block(doc, 'wire', 'document');
  const colours = block(doc, 'colours', 'document');
  const typography = block(doc, 'typography', 'document');
  const site = block(doc, 'site', 'document');
  const sdk = block(doc, 'sdk', 'document');

  for (const key of ['legalName', 'shortName', 'country', 'supportEmail', 'cpsUrl']) text(authority, key, 'authority');
  for (const key of ['name', 'shortName', 'country']) text(regulator, key, 'regulator');
  text(locales, 'default', 'locales');
  if (!Array.isArray(locales.supported) || !locales.supported.includes(locales.default)) fail('locales.default must be one of locales.supported');
  for (const [role, host] of Object.entries(hosts)) if (typeof host !== 'string' || host === '') fail(`hosts.${role} is empty`);
  if (!hosts.web) fail('hosts.web is missing; the signing channel needs its web host (the app)');
  for (const key of WIRE_KEYS) text(wire, key, 'wire');
  for (const [group, keys] of Object.entries(COLOUR_KEYS)) {
    const set = block(colours, group, 'colours');
    for (const key of keys) if (!HEX.test(set[key] ?? '')) fail(`colours.${group}.${key} must be #RRGGBB`);
  }
  const web = colours.web == null ? {} : block(colours, 'web', 'colours');
  for (const key of Object.values(WEB_KEYS)) {
    if (web[key] != null && !HEX.test(web[key])) fail(`colours.web.${key} must be #RRGGBB`);
  }
  const elementPrefix = text(sdk, 'elementPrefix', 'sdk');
  if (!/^[a-z][a-z0-9-]*$/.test(elementPrefix)) fail('sdk.elementPrefix must be lowercase letters, digits and hyphens, starting with a letter');
  const url = text(site, 'url', 'site');
  if (!/^https:\/\/[^/]+$/.test(url)) fail('site.url must be an https origin without a path, for example https://www.example.test');
  text(site, 'caName', 'site');
  text(site, 'caShortName', 'site');
  const company = block(site, 'company', 'site');
  for (const key of ['name', 'email', 'phoneDisplay', 'phoneTel', 'phoneIntl', 'street', 'locality']) text(company, key, 'site.company');
  if (company.shortName != null) text(company, 'shortName', 'site.company');
  if (site.parentCompany != null) for (const key of ['name', 'url', 'id']) text(site.parentCompany, key, 'site.parentCompany');

  return Object.freeze({
    operator: text(doc, 'operator', 'document'),
    environment: text(doc, 'environment', 'document'),
    jurisdiction: text(doc, 'jurisdiction', 'document'),
    channel: { id: text(channel, 'id', 'channel'), kind, displayName, shortName, description: channel.description ?? null },
    name: shortName ?? displayName,
    authority,
    regulator,
    hosts,
    locales,
    storageKeyPrefix: text(doc, 'storageKeyPrefix', 'document'),
    wire,
    secondaryCalendar: doc.secondaryCalendar ?? null,
    currency: block(doc, 'currency', 'document'),
    colours,
    typography: { body: typography.body ?? '', heading: typography.heading ?? '', mono: typography.mono ?? '', fallback: typography.fallback ?? [] },
    site: {
      url,
      developersUrl: typeof site.developersUrl === 'string' && site.developersUrl !== '' ? site.developersUrl : null,
      caName: site.caName,
      caShortName: site.caShortName,
      paymentProviderName: typeof site.paymentProviderName === 'string' && site.paymentProviderName !== '' ? site.paymentProviderName : null,
      popup: typeof site.popup === 'string' && site.popup !== '' ? site.popup : null,
      company: { ...company, shortName: company.shortName ?? null },
      parentCompany: site.parentCompany ?? null,
      assetAliases: site.assetAliases && typeof site.assetAliases === 'object' ? { ...site.assetAliases } : {},
    },
    sdk: { elementPrefix },
    web: Object.fromEntries(Object.entries(WEB_KEYS).map(([name, key]) => [name, web[key] ?? null])),
  });
}

let cached;
/** The brand this site is built for. Read once per process. */
export function loadBrand(env = process.env) {
  cached ??= parseBrand(readBrandText(env), { kind: 'signing' });
  return cached;
}

/** The operator directory (the folder with operator.toml): TP_OPERATOR_PROFILE names the file or the folder. */
export function operatorDir(env = process.env) {
  const value = env.TP_OPERATOR_PROFILE;
  if (!value || value.trim() === '') fail('TP_OPERATOR_PROFILE is not set; it names the operator profile folder (or its operator.toml)');
  const resolved = path.resolve(value);
  return resolved.endsWith('.toml') ? path.dirname(resolved) : resolved;
}

/** The channel's asset folder inside the operator directory: brand/<channel id>/. */
export function brandAssetDir(brand, env = process.env) {
  return path.join(operatorDir(env), 'brand', brand.channel.id);
}
