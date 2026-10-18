import { content } from '../jurisdictions';

export type { Faq, Product } from '../jurisdictions';

export const products = content.products;

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);
