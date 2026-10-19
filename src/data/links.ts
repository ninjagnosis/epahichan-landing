// One map of how pages relate, so products, solutions and posts link to each
// other in their content, not only through the menu and footer.
import { products } from './products';
import { solutions } from './solutions';

export interface Link { href: string; label: string; meta?: string }

export const productLink = (slug: string): Link | null => {
  const p = products.find((x) => x.slug === slug);
  return p ? { href: `/products/${p.slug}`, label: p.name } : null;
};
export const solutionLink = (slug: string): Link | null => {
  const s = solutions.find((x) => x.slug === slug);
  return s ? { href: `/solutions/${s.slug}`, label: s.name } : null;
};

/** Industries that use a product. */
export const solutionsUsing = (product: string): Link[] =>
  solutions.filter((s) => s.products.includes(product)).map((s) => solutionLink(s.slug)!);

/** Products a post is about, from its tags. */
export const productsForTags = (tags: string[]): Link[] =>
  products.filter((p) => p.tags.some((t) => tags.includes(t))).map((p) => productLink(p.slug)!);

/** Industries a post is about, from its tags. */
export const solutionsForTags = (tags: string[]): Link[] =>
  solutions.filter((s) => s.tags.some((t) => tags.includes(t))).map((s) => solutionLink(s.slug)!);

/** Blog tags that belong to each product, for the glossary's guides. */
export const productTags: Record<string, string[]> = Object.fromEntries(products.map((p) => [p.slug, p.tags]));
