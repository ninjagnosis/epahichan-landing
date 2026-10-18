// Gives pages and components the brand through `import { brand } from '../brand'` without a request
// or a global: the document is written into the build.

const ID = 'virtual:brand';
const RESOLVED = '\0virtual:brand';

/** @param {import('./load.mjs').Brand} brand */
export function brandModule(brand) {
  return {
    name: 'brand-module',
    resolveId(source) {
      return source === ID ? RESOLVED : null;
    },
    load(id) {
      if (id !== RESOLVED) return null;
      return `export const brand = ${JSON.stringify(brand)};\n`;
    },
  };
}
