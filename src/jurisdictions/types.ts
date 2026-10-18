// What a jurisdiction pack gives the site: the text that depends on the country's law, identity
// documents, payment habits and language. Brand names inside it are `%%tokens%%` (src/brand/tokens.mjs),
// filled when the pack is loaded (index.ts).

export interface Faq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  /** One line, used in lists and meta. */
  short: string;
  /** Search title: what people type. */
  seoTitle: string;
  /** The page's h1. */
  headline: string;
  description: string;
  gets: string[];
  /** In order: what happens first, what happens next. */
  how: { h: string; p: string }[];
  /** Plain facts: label and value. */
  specs: [string, string][];
  faq: Faq[];
  /** Blog tags that belong to this product. */
  tags: string[];
  code?: string;
}

export interface Solution {
  slug: string;
  name: string;
  short: string;
  headline: string;
  description: string;
  /** Documents this kind of organization signs. */
  documents: string[];
  does: { h: string; p: string }[];
  /** What the law excludes or what to check, stated plainly. */
  limits: string;
  products: string[];
  tags: string[];
  faq: Faq[];
}

export interface Term {
  slug: string;
  term: string;
  /** Full name, when the term is an abbreviation. */
  full?: string;
  short: string;
  body: string[];
  related: string[];
  /** Product page this term leads to. */
  product?: string;
}

/** Page-level copy that names the country, its law or its documents. `{n}`, `{last}` and `{label}` are filled by the page. */
export interface PackCopy {
  home: { title: string; description: string; ogTitle: string };
  hero: {
    title: string;
    sub: string;
    exampleLabel: string;
    exampleTitle: string;
    exampleLines: string[];
    exampleSigner: string;
    exampleRole: string;
    exampleValid: string;
  };
  trust: { heading: string; points: { icon: 'scale' | 'badge-check' | 'file-lock'; h: string; p: string }[]; note: string };
  law: { heading: string; paragraph: string };
  blog: { description: string; pageDescription: string; tagDescription: string };
  glossary: { description: string };
  notFound: { description: string };
  contact: { description: string; developerApis: string };
  rss: { description: string };
  llms: { summary: string };
  seo: { aboutPosts: string };
  /** Tag words written in capitals in tag labels, beyond the generic ones. */
  tagAcronyms: string[];
}

export interface JurisdictionContent {
  products: Product[];
  solutions: Solution[];
  glossary: Term[];
  homeFaq: Faq[];
  copy: PackCopy;
}
