import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { postSchema } from './lib/blog-schema';
import { loadBrand, operatorDir } from './brand/load.mjs';

const brand = loadBrand();

// Posts are Markdown files in src/content/blog. The build fails on any
// missing or wrong field. No author byline: posts are by the brand.
// Posts at the top level are for every jurisdiction. Posts in a folder named for a
// jurisdiction (src/content/blog/np/) are built only for a brand that runs under it; the
// folder is not part of the address, so /blog/<slug> is the same either way.
const blog = defineCollection({
  loader: glob({
    pattern: ['*.md', `${brand.jurisdiction}/*.md`],
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/^[^/]+\//, '').replace(/\.md$/, ''),
  }),
  schema: postSchema,
});

// The operator's own legal text (edge case 30): the site's terms, privacy policy and account deletion page,
// in the brand's default language, from the operator folder (legal/<locale>/public-terms.md, privacy.md,
// delete-account.md). `terms.md` in the same folder is the enrolment terms, a different document. The page
// for public-terms.md is /terms. A missing file stops the build (src/pages/[doc].astro).
const legal = defineCollection({
  loader: glob({
    pattern: '{public-terms,privacy,delete-account}.md',
    generateId: ({ entry }) => entry.replace(/\.md$/, '').replace(/^public-/, ''),
    base: pathToFileURL(path.join(operatorDir(), 'legal', brand.locales.default) + path.sep),
  }),
  schema: z.object({ title: z.string().min(3), description: z.string().min(10) }),
});

export const collections = { blog, legal };
