// Terms around digital signatures and digital identity, one page each under /glossary. The text is the
// jurisdiction pack's (src/jurisdictions/<iso>/glossary.ts).
import { content } from '../jurisdictions';

export type { Term } from '../jurisdictions';

export const glossary = content.glossary;

export const termBySlug = (slug: string) => glossary.find((t) => t.slug === slug);
