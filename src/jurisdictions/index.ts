// The text of the jurisdiction the brand runs under. One folder per jurisdiction pack
// (src/jurisdictions/<iso>/), each exporting the same shape (types.ts). A brand whose jurisdiction has no
// folder here stops the build: add the folder, do not fall back to another country's text.
import { brand, textDeep } from '../brand';
import np from './np';
import type { JurisdictionContent } from './types';

const packs: Record<string, JurisdictionContent> = { np };

const pack = packs[brand.jurisdiction];
if (!pack) {
  throw new Error(`no site content for jurisdiction "${brand.jurisdiction}". Add src/jurisdictions/${brand.jurisdiction}/ (see src/jurisdictions/types.ts).`);
}

/** The pack's content with the brand's names filled in. */
export const content: JurisdictionContent = textDeep(pack);
export type { Faq, Product, Solution, Term } from './types';
