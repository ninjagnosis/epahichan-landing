// The brand's colour ramp and the tints that sit on its stage and hero backgrounds, as CSS custom properties.
// The stylesheets map them onto their own roles (`--brand`, `--brand-ink`, ...); only these come from the brand document.

/**
 * The tints on the stage (deep) and hero (base) backgrounds: the document's `colours.web` values, else mixed from the ramp.
 * @param {import('./load.mjs').Brand} brand
 */
export function tints(brand) {
  const ramp = brand.colours.brand;
  const web = brand.web;
  return {
    stageMuted: web.stageMuted ?? mix('#FFFFFF', ramp.base, 0.24),
    stageLine: web.stageLine ?? mix(ramp.deep, '#FFFFFF', 0.23),
    heroMuted: web.heroMuted ?? mix(ramp.base, '#FFFFFF', 0.88),
    heroLine: web.heroLine ?? mix(ramp.base, '#FFFFFF', 0.41),
  };
}

/** @param {import('./load.mjs').Brand} brand */
export function brandCss(brand) {
  const ramp = brand.colours.brand;
  const tint = tints(brand);
  return `/* Generated from the brand document by bin/stage-brand.mjs. Do not edit. */
:root {
  --ramp-lift: ${ramp.lift};
  --ramp-base: ${ramp.base};
  --ramp-ink: ${ramp.ink};
  --ramp-deep: ${ramp.deep};
  --tint-stage-muted: ${tint.stageMuted};
  --tint-stage-line: ${tint.stageLine};
  --tint-hero-muted: ${tint.heroMuted};
  --tint-hero-line: ${tint.heroLine};
}
`;
}

/** Mix two #RRGGBB colours; `amount` is the share of `b`. */
export function mix(a, b, amount) {
  const channel = (hex, i) => parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16);
  const part = (i) => Math.round(channel(a, i) * (1 - amount) + channel(b, i) * amount);
  return `#${[0, 1, 2].map((i) => part(i).toString(16).padStart(2, '0')).join('')}`.toUpperCase();
}
