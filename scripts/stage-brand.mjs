// Stages the brand's files before astro runs (package.json predev and prebuild):
//   operators/<operator>/brand/<channel>/logo.svg       -> public/brand/mark.svg
//   operators/<operator>/brand/<channel>/logo-mono.svg  -> public/brand/mark-mono.svg
//   operators/<operator>/brand/<channel>/icon-1024.png  -> public/brand/icon-{32,64,192,512}.png
//     (icon.svg, else logo.svg, when the folder has no icon-1024.png); a finished icon-<size>.png in the folder is copied as is
//   the colour ramp                                     -> src/styles/brand-colours.css
// None of these is committed. The brand document comes from BRAND_JSON / BRAND_JSON_FILE and the
// operator folder from TP_OPERATOR_PROFILE (see docs/brand.md).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { brandAssetDir, loadBrand } from '../src/brand/load.mjs';
import { brandCss } from '../src/brand/colours-css.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const brand = loadBrand();
const source = brandAssetDir(brand);

const need = (name) => {
  const file = path.join(source, name);
  if (!fs.existsSync(file)) throw new Error(`stage-brand: ${file} is missing (the ${brand.channel.id} channel needs ${name})`);
  return file;
};
const target = (to) => {
  const file = path.join(root, to);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  return file;
};

const logo = need('logo.svg');
fs.copyFileSync(logo, target('public/brand/mark.svg'));
fs.copyFileSync(need('logo-mono.svg'), target('public/brand/mark-mono.svg'));

const raster = [path.join(source, 'icon-1024.png'), path.join(source, 'icon.svg'), logo].find((file) => fs.existsSync(file));
for (const size of [32, 64, 192, 512]) {
  // A brand folder may carry a finished icon-<size>.png (an operator whose browser icon is not its app icon); it is copied as is.
  const finished = path.join(source, `icon-${size}.png`);
  if (fs.existsSync(finished)) {
    fs.copyFileSync(finished, target(`public/brand/icon-${size}.png`));
    continue;
  }
  await sharp(raster, { density: 300 })
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(target(`public/brand/icon-${size}.png`));
}

// Older public names for the same files (`site.assetAliases`), so links elsewhere keep working.
for (const [alias, staged] of Object.entries(brand.site?.assetAliases ?? {})) {
  if (alias.includes('/') || staged.includes('/')) throw new Error(`stage-brand: asset alias ${alias} -> ${staged} must be a bare file name`);
  fs.copyFileSync(target(`public/brand/${staged}`), target(`public/brand/${alias}`));
}

fs.writeFileSync(target('src/styles/brand-colours.css'), brandCss(brand));

// Astro's content cache is keyed by file content, not by the brand tokens the pages are filled
// with, so a build for another brand would serve the previous brand's pages. Clear it when the
// brand changes.
const stamp = path.join(root, 'node_modules/.astro/brand-stamp');
const current = JSON.stringify(brand);
const previous = fs.existsSync(stamp) ? fs.readFileSync(stamp, 'utf8') : null;
if (previous !== current) {
  fs.rmSync(path.join(root, '.astro/data-store.json'), { force: true });
  fs.rmSync(path.join(root, 'node_modules/.astro'), { recursive: true, force: true });
  fs.mkdirSync(path.dirname(stamp), { recursive: true });
  fs.writeFileSync(stamp, current);
}

console.log(`stage-brand: ${brand.operator} / ${brand.channel.id} (${brand.environment})`);
