import { content } from '../jurisdictions';

export type { Solution } from '../jurisdictions';

export const solutions = content.solutions;

export const solutionBySlug = (slug: string) => solutions.find((s) => s.slug === slug);
