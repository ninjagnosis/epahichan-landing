# ePahichan brand — palette, assets, and the rules that come with them

Source: the mark supplied by the board on [TEC-26](/TEC/issues/TEC-26) as
`epahichan-logo.png` (1402×1122, RGBA) and `epahichan-logo.svg`. Every number below is
**measured from those two files**, not eyeballed. Method is recorded at the bottom.

This file is the single source of truth for ePahichan colour. If a repo disagrees with it,
the repo is wrong.

---

## 1. The mark

Two interlocking discs in a single red hue, with a knockout counter forming the glyph.
The mark is **one hue ramped across value** — there is no second colour in it.

Measured from the PNG's opaque pixels:

| R-channel band | share of mark | mean colour | vs white | vs black |
|---|---|---|---|---|
| 240–255 | 20.0% | `#FA2C31` | 3.84:1 | 5.47:1 |
| 224–239 | 10.4% | `#E71922` | 4.61:1 | 4.56:1 |
| 208–223 |  8.7% | `#D9121C` | 5.18:1 | 4.05:1 |
| 192–207 |  4.9% | `#C70C16` | 6.01:1 | 3.49:1 |
| **176–191** | **30.6%** | `#B60510` | 6.96:1 | 3.02:1 |
| 160–175 |  2.8% | `#A8060F` | 7.78:1 | 2.70:1 |
| 144–159 |  2.3% | `#97040D` | 8.98:1 | 2.34:1 |
| 128–143 |  3.9% | `#89020A` | 10.11:1 | 2.08:1 |
| 112–127 |  2.3% | `#760106` | 11.82:1 | 1.78:1 |
| **96–111** | **14.1%** | `#6C0105` | 12.77:1 | 1.64:1 |

The two plateaus at `#B60510` (30.6%) and `#6C0105` (14.1%) are the body and shadow of the
mark. The SVG independently declares `#B30712` and `#6F0006` for those same regions — the
measurement and the designer's declared stops agree to within the gradient's own spread, so
the declared values are used as tokens below.

---

## 2. Tokens

Use the **declared** values. They are the designer's intent and the measurement confirms them.

```css
:root {
  --brand-lift: #FF3A3E;  /* highlight end of the mark's gradient */
  --brand:      #E31B23;  /* the brand red */
  --brand-ink:  #B30712;  /* body of the mark — the text/link red */
  --brand-deep: #6F0006;  /* shadow end */

  --brand-gradient: linear-gradient(135deg, var(--brand-lift), var(--brand-deep));
}
```

### Contrast, computed (WCAG 2.x relative luminance, sRGB)

| token | hex | on `#FFFFFF` | on `#F6F7F9` | on `#0D1015` |
|---|---|---|---|---|
| `--brand-lift` | `#FF3A3E` | **3.54** UI/large only | 3.31 UI/large only | **5.38** AA text |
| `--brand` | `#E31B23` | **4.72** AA text | 4.41 UI/large only | 4.04 UI/large only |
| `--brand-ink` | `#B30712` | **7.10** AA text | 6.63 AA text | **2.68 BANNED** |
| `--brand-deep` | `#6F0006` | **12.51** AA text | 11.67 AA text | **1.52 BANNED** |

White on a filled brand surface: on `--brand` 4.72:1, on `--brand-ink` 7.10:1,
on `--brand-deep` 12.51:1, on `--brand-lift` **3.54:1 (fails normal text)**.

### The rules that follow

1. **The ramp inverts between schemes.** Light mode takes its foreground red from the
   *dark* end; dark mode takes it from the *light* end. This is the one thing that is easy
   to get wrong:
   - light scheme text/links → `--brand-ink` `#B30712` (7.10:1)
   - dark scheme text/links → `--brand-lift` `#FF3A3E` (5.38:1)
2. **`--brand-ink` and `--brand-deep` are never foregrounds on the dark scheme.** 2.68:1
   and 1.52:1. They are surfaces there, not text.
3. **`--brand-lift` is never a foreground on white or on `--surface`.** 3.54:1 / 3.31:1.
   Gradient stop and hover fill only.
4. **`--brand` `#E31B23` passes AA for normal text on white at 4.72:1, with 0.22 of
   headroom.** That is enough to be legal and not enough to be comfortable. Prefer
   `--brand-ink` for anything a person actually reads; keep `--brand` for fills, the mark,
   and large type.
5. **Filled buttons use white on `--brand-ink`** (7.10:1), not white on `--brand-lift`.

---

## 3. Assets in this directory

| File | What it is | Use it for |
|---|---|---|
| `epahichan-mark-original.png` | 1402×1122 RGBA, as supplied | archive only — 473 KB, never ship |
| `epahichan-mark-original.svg` | as supplied | archive only — **has a white background baked in** |
| `epahichan-mark.svg` | the supplied SVG with the backing `<rect>` removed | full-colour vector on any background |
| `epahichan-mark-flat.svg` | silhouette, `fill="currentColor"` | **dark mode**, favicons, single-colour contexts |
| `epahichan-mark-512.png` | 512×468, trimmed | og:image, hero |
| `epahichan-mark-192.png` | 192×175, trimmed | PWA icon, large favicon |
| `epahichan-mark-64.png` | 64×58, trimmed | header |
| `epahichan-mark-32.png` | 32×29, trimmed | favicon |

### What was wrong with the supplied files, and what was done

- **The supplied SVG has `<rect width="1402" height="1122" fill="#fff"/>` behind the
  mark.** On any non-white surface — including the entire dark scheme — that renders as a
  white box around the logo. `epahichan-mark.svg` is the same file with that one rect
  removed and nothing else changed.
- **The supplied SVG's interior is an approximation.** Its clip path is the true traced
  outline, but the facets inside are seven straight-edged polygons over four linear
  gradients, where the PNG shows curved facet boundaries. It is close, not identical.
  **The PNG is the reference for how the mark looks; the SVG is the reference for its
  shape.** A true vector master should still be requested from whoever drew it.
- **The supplied PNG is 473 KB at 1402×1122 with 204/190/115/86 px of empty padding.** The
  trimmed rasters above are cropped to the measured alpha bounding box
  (x 204–1211, y 115–1035 → 1008×921) and box-downsampled with premultiplied alpha.
  32 px is 1.6 KB.
- **Good news, verified:** the PNG's alpha is **unmatted**. Mean RGB of its 4,766
  partial-alpha edge pixels is `#B90E16` — green and blue near zero. If it had been matted
  on white those channels would climb toward 255 and the mark would halo on dark
  backgrounds. It will not.

### Placing the mark on dark

The counter is **knockout** (alpha 0), so the glyph takes the colour of whatever is behind
it. Combined with rule 2 above, the full-colour mark's own shadow facets sit at
**1.52:1 against `#0D1015`** — the bottom of the mark dissolves into a dark page.

So: **do not place the full-colour mark directly on the dark scheme background.** Either

- use `epahichan-mark-flat.svg` with `color: var(--brand-lift)` (5.38:1), or
- place the full-colour mark on a `--paper` chip.

---

## 4. Method (so these numbers can be re-derived)

- PNG decoded with a pure-Python zlib/PNG reader — all five filter types, RGBA8. No
  ImageMagick or PIL on the devbox.
- Palette: every second pixel sampled; pixels with alpha < 250 or chroma
  (`max−min`) < 25 excluded, then binned by R channel.
- Contrast: WCAG 2.x — channels linearised, `L = 0.2126R + 0.7152G + 0.0722B`,
  ratio `(L₁+0.05)/(L₂+0.05)`.
- Rasters: cropped to the alpha bbox, box filter with premultiplied alpha, re-encoded
  as RGBA8 PNG, each one decoded again afterwards to confirm it is valid and that the
  corner alpha is still 0.
