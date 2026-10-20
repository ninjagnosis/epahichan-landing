# ePahichan site design system

Source of truth for `src/`. Same architecture and principles as the AirFone site
(Astro static, flat surfaces, no bylines, no breadcrumbs shown, no AI look);
colour comes from `BRAND.md`.

## Colour (`src/styles/tokens.css`)

| Token | Value | Use |
|---|---|---|
| `--canvas` | `#FFFFFF` | page |
| `--surface` | `#F6F7F9` | panels, footer, FAQ-free bands |
| `--subtle` | `#ECEEF2` | quiet fills, hover |
| `--line` | `#DEE1E6` | 1px borders |
| `--ink` / `--ink-muted` | `#14171C` / `#495058` | text |
| `--brand` / `--link` | `#B30712` | buttons, links (7.1:1 on white) |
| `--brand-hover` | `#6F0006` | button hover |
| `--accent` | `#E31B23` | selection, large type only |
| `--stage` | `#6F0006` | the one dark band per page (white text 12.5:1) |
| `--stage-muted` | `#F2C9CB` | secondary text on stage |
| `--ok` | `#1B6B3A` | valid signature |
| `--mark` | = `--accent` | bullets, the reading progress bar |
| `--warn-bg` / `--warn-ink` | `#FFF1CC` / `#5C3A00` | warning callout panel in posts (9:1) |

Light only. Poppins for headings, buttons and navigation, Inter for reading.
Radius 8px controls, 12px panels. No shadows, gradients or blur.

## Pages

Home, three products (`/products/*`), five solutions (`/solutions/*`), how
signing works (the in-browser signing demo), insights (`/blog`, paginated),
glossary, contact, terms, privacy, delete account.

## Claims rules

- Legal statements cite Section 5 of the Electronic Transactions Act, 2063 and
  keep its condition (made by the procedures in the Act and its Rules).
- Never imply any document can be signed digitally: Section 77 exclusions are
  stated where relevant.
- No admissibility claims, no time claims without a trusted timestamp, no prices,
  no customer or availability claims.
- The operator (Ninja Infosys Pvt. Ltd.) and the certifying authority (Nepal
  Certifying Company) are named as in the privacy policy.

Fonts are tokens (`--font-sans`, `--font-display`, `--font-mono`, `--font-serif`); the shared blog and glossary styles use only these.
