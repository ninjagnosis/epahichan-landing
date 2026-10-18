// The brand this site is built for. Written into the build by src/brand/vite-plugin.mjs.
import { brand } from 'virtual:brand';
import { buildTokens, fill, fillDeep } from './tokens.mjs';

export { brand };

/** The `%%name%%` values of this brand. */
export const tokens = buildTokens(brand);

/** Replace `%%name%%` tokens in a string. */
export const text = (value: string) => fill(value, tokens);

/** Replace `%%name%%` tokens in every string of a structure. */
export const textDeep = <T>(value: T): T => fillDeep(value, tokens) as T;
