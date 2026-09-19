# ePahichan landing page — design system reference

Single source of truth for tokens actually used in `src/`. If a value in the
code isn't listed here, that's a bug — fix the code or extend this file.

## Fonts

- Latin text: system font stack (`system-ui, sans-serif`). No extra
  dependency; this repo has no Latin-specific brand typeface yet.
- Nepali body: **Mukta** 400/600 via `@fontsource/mukta`. Stack:
  `'Mukta', system-ui, sans-serif`.
- Nepali headings (`h1`/`h2`/`h3`): **Noto Serif Devanagari** 600/700 via
  `@fontsource/noto-serif-devanagari`. Stack:
  `'Noto Serif Devanagari', 'Mukta', system-ui, sans-serif`.
- Nepali is the default locale (`/`), so the Devanagari-capable stacks apply
  whenever `<html lang="ne">` — see `src/styles/global.css`.

## Color tokens (`src/styles/tokens.css`)

Light (default):

| Token | Value |
|---|---|
| `--paper` | `#FFFFFF` |
| `--surface` | `#F6F7F9` |
| `--ink` | `#14171C` |
| `--ink-muted` | `#495058` |
| `--line` | `#DEE1E6` |
| `--brand` | `#E31B23` |
| `--brand-ink` | `#B30712` |

Dark scheme (`prefers-color-scheme: dark`):

| Token | Value |
|---|---|
| `--night` | `#0D1015` |
| `--night-ink` | `#EEF0F3` |
| `--night-muted` | `#AEB4BD` |
| `--night-line` | `#262B33` |
| `--brand-lift` | `#FF3A3E` |

`--brand`/`--brand-ink`/`--brand-lift` are measured from the board-supplied
ePahichan mark — see `BRAND.md` for the measurement method and the full
ramp (it also defines `--brand-deep`, not yet used in this shell). Per
BRAND.md's rules: light-scheme brand text/links and the mark use
`--brand-ink` (the dark end of the ramp); the dark scheme uses
`--brand-lift` (the light end) for the same roles, because the ramp
inverts between schemes.

### Contrast (computed against the actual token values)

Computed with the WCAG 2.x relative-luminance formula
(`L = 0.2126R + 0.7152G + 0.0722B` on linearized sRGB channels, contrast
`= (L1 + 0.05) / (L2 + 0.05)`), not estimated:

| Pair | Ratio |
|---|---|
| ink / paper (light) | 17.96:1 |
| ink-muted / paper (light) | 8.17:1 |
| ink / surface (light) | 16.76:1 |
| brand-ink / paper (light lang-switch hover, mark, focus ring) | 7.10:1 |
| night-ink / night (dark) | 16.69:1 |
| night-muted / night (dark) | 9.13:1 |
| brand-lift / night (dark lang-switch hover, mark, focus ring) | 5.38:1 |

All pairs clear the 4.5:1 minimum with margin. `--line` is used only for
1px borders, never for text, so it is not a text-contrast pair. The
brand-ink and brand-lift ratios are carried over unchanged from BRAND.md
(contrast between two fixed colors doesn't depend on which one is drawn as
foreground vs. background, so the same figures apply here as there).

### Focus ring

Keyboard focus is based once in `global.css` on `:focus-visible`, so every
later component inherits it rather than re-inventing one:

| Scheme | Ring colour | Drawn against | Ratio |
|---|---|---|---|
| Light | `--brand-ink` `#B30712` | `--paper` `#FFFFFF` (page background) | 7.10:1 |
| Dark | `--brand-lift` `#FF3A3E` | `--night` `#0D1015` (page background) | 5.38:1 |

Same formula and the same script as the table above. The ring colour follows
the brand ramp's scheme inversion, so the dark-scheme override lives in the
`prefers-color-scheme: dark` block, never in `tokens.css`.

`outline-offset: 3px` matters to those numbers: the ring is separated from the
element it surrounds by 3px of page background, so the ratio that governs its
visibility is ring-against-background, listed above — not ring-against-mark,
which would be `--brand-ink` on `--brand-ink` (1:1) if the ring sat flush.

## Type scale

| Use | Size |
|---|---|
| Body | 18px (16px under 480px) |
| Lang switch / footer / copyright | 14-16px |
| h3 | 22px |
| h2 | `clamp(1.75rem, 3vw, 2.5rem)` (28-40px) |
| h1 | `clamp(1.75rem, 4vw, 3rem)` (28-48px) |

Line height: 1.55 body, 1.2 headings. Letter spacing: 0 everywhere. No
`text-transform`.

## Shape

- Radius: 8px (`--radius-control`, for interactive controls like the
  language switch), 12px (`--radius-panel`, reserved for future panels).
- Borders: 1px solid `--line` (or `--night-line` in dark mode) only. No
  `box-shadow` anywhere.

## Motion

- Only `color`/`border-color` transitions, 150ms ease-out, on the language
  switch.
- No `@keyframes`, no transform-based hover effects.
- `html` sets `scroll-behavior: smooth`.
- `prefers-reduced-motion: reduce` disables all transitions **and** returns
  `scroll-behavior` to `auto` — the transition reset alone does not cover
  scrolling.

## Layout

- Max content width 1120px (`--max-width`), 16px side gutter (32px at
  >=768px, `--gutter`).
- Header/footer height: 72px.
