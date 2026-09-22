# ePahichan product design standard

**Applies to every ePahichan product surface**: the staff console, the ePahichan
app, and the developer platform — and to this site where it does not already
say otherwise. `BRAND.md` remains the single source of truth for colour and the
mark; `DESIGN.md` remains this site's own implementation notes. This document is
what the product surfaces share. Product repositories link to it at a pinned
commit; change it here, then move their pins.

Adopted 2026-09-22 from a design-research pass (sources at the end).

---

## 1. Principles

1. **Colour means state, never decoration.** Brand red is identity — the mark,
   the top bar, the single primary action on a screen. It is **never** a
   status colour: a failed or revoked item must not look like brand chrome.
2. **Tables are the product.** Operational screens are dense, spreadsheet-like
   data regions inside generously spaced chrome. A data row is never a card.
3. **Consequence before commit.** Every irreversible or bulk action shows what
   changes — affected count, current state → target state, validation failures
   — before it runs. Friction scales with blast radius: a single, reversible
   action is a light dialog; an irreversible or bulk one needs typed
   confirmation. No optimistic UI for irreversible actions: wait for the server.
4. **Approvals are objects, not buttons.** Anything needing two people shows
   initiator, required approvers, who has signed, who is pending, what happens
   at timeout — and the exact thing being approved, never a bare "Approve?".
5. **History is who, what, when, before → after, why.** Timelines are immutable
   rows. A gap in the record must look different from "nothing happened".
6. **Queues, not lists.** Work surfaces sort by what needs attention (age,
   deadline, risk), and each row says why it is there and what resolves it.
7. **Say exactly what happens.** Copy names the action and its effect ("Revoke 3
   certificates issued to this subscriber"). No marketing language inside a
   product.
8. **Stale is worse than loading.** Security-relevant state shows an explicit
   loading state or the last verified value with its time — never a shimmer
   that hides staleness.
9. **Every state is designed**: first-run empty, empty-after-filter (with "clear
   filters"), loading, error with retry, and **partial failure** (8 of 10
   succeeded).
10. **Use proven packages; do not reinvent.** Where a maintained package does
    the job, use it (§6). Build only what no vetted package provides.

## 2. Brand

- Colour tokens, the mark and contrast rules: **`BRAND.md`**, without exception.
  Brand `#E31B23`, text-safe red `#B30712`, highlight `#FF3A3E`, shadow
  `#6F0006`; neutrals and the dark scheme from `DESIGN.md`. `--brand-ink` is
  banned on the dark background — use `--brand-lift` there.
- Logo assets: `public/brand/` in this repository. Copy them into a product at a
  pinned commit; never redraw or recolour.
- **Status colours are a separate, small vocabulary**, identical in badges,
  timeline dots and filter chips: neutral = draft, blue = in review, amber =
  pending approval, green = active/issued, red = revoked/failed, grey =
  expired. The status red is a distinct token from the brand red. Verify every
  status pair at WCAG AA (4.5:1 text) — amber on white fails most often.

## 3. Typography

- **Devanagari: Mukta** (400/600), matching this site.
- **Latin UI and data: Noto Sans**, with tabular figures in tables and figures
  that align.
- **Identifiers** (serials, digests, reference numbers): a monospace (Noto Sans
  Mono), selectable and copyable.
- Not Inter, not Geist (overused; Geist has no Devanagari at all). The serif
  Nepali headings are this marketing site's, not the products'.
- Real hierarchy — headings and body must not look alike. Body at least 16px on
  prose surfaces (dense tables may use 14px with the row rhythm below); line
  height about 1.5; prose measure 65–75 characters; never justified; never
  all-caps paragraphs; no crushed or widened letter spacing on body text.

## 4. Layout, surface, motion

- **Radii small and fixed**: 8px controls, 12px panels (as `DESIGN.md`). No
  extreme rounding on cards.
- **One way to define a surface**: a hairline border *or* elevation, never
  both. No nested cards — flatten with spacing, dividers and type.
- **Row rhythm**: pick one data-row height (40px) and use it everywhere data
  rows appear. 1px dividers between rows.
- **Grouping by proximity**: related items closer than separate groups — not
  equal gaps everywhere. Content never touches a container or screen edge.
- **Motion only when something happened**: short, non-bouncy transitions for a
  state change. No pulsing status dots, no bounce or elastic easing, no
  animating layout size, no hover zoom. Expressive press feedback is allowed on
  controls; status and feedback elements stay still.
- **Keyboard-first on the staff console**: full keyboard navigation,
  `Ctrl/Cmd+K` command palette for actions ("find certificate by serial"),
  `j`/`k` row movement. Every route and selection is a URL.
- **Dark mode** supported from day one via the tokens; light is the default.

## 5. Slop — never

From impeccable.style's catalogue, the ones most likely to creep in here:
gradients anywhere (backgrounds, text, buttons); glow, neon, glassmorphism;
purple/cyan "AI" palettes; decorative grid backgrounds; side-stripe accent
borders; icon-tile-above-heading feature cards; identical card grids; hero
metric templates; badges or labels stacked above headings; tiny numbered
section labels; placeholder or clip-art illustrations; em-dash-heavy or
slogan copy ("Not a feature. A platform."), and words like "supercharge" or
"world-class"; text below AA contrast; skipped heading levels; images or menus
clipped by their containers.

## 6. Packages (Flutter surfaces)

**Vetting rule for any package:** permissive licence (MIT/BSD/Apache), active
maintenance (a release within about a year, issues answered), preferably a
verified publisher, compatible with the pinned Flutter version. Pin exact
versions; review the changelog before upgrading. Wrap anything central behind
a small interface of our own so it can be replaced.

| Need | Package | Notes |
|---|---|---|
| Architecture & state | flutter_riverpod 3 + riverpod_generator, go_router, dio, freezed | Folder layout `core/`, `shared/`, `features/<f>/{application,data,presentation}` |
| Design system | Material 3 (Flutter's own) | The base. Expressive-style shape, type and motion tokens live only in `lib/core/theme/` |
| Expressive components | `material_3_expressive` (paadevelopments, MIT) | Polish on controls — buttons, chips, navigation. Young and single-maintainer: never the only way a critical flow works |
| **Data grids** | **`trina_grid`** (MIT) | Sorting, filtering, resizing, pinning, keyboard editing, export, server pagination. Behind our own `DataGrid` interface |
| Very large read-only tables | `two_dimensional_scrollables` (flutter.dev) | Where a grid is only scrolled, not edited |
| Bikram Sambat | `nepali_date_picker` + `nepali_utils` | Display and entry only — see §7 |
| Fonts | `google_fonts` (or bundled assets) | Mukta, Noto Sans, Noto Sans Mono |
| Localisation | `flutter_localizations` + gen-l10n | English and Nepali from day one; no string in a widget |

**Rejected as base layers**, and why: `shadcn_ui`, `forui` (their own design
language would compete with Material 3); `fluent_ui` (Windows design);
`tdesign_flutter` (Tencent's design language); `moon_design` (maintenance-only);
`syncfusion_flutter_datagrid` (commercial licence); `data_table_2` for large
tables (no virtualisation — fine for small reference lists).

Before adding a package not listed here, check it against the vetting rule and
record it in this table.

**Versions: latest stable, then pinned.** Adopt each package at its latest
stable release compatible with the pinned Flutter SDK, pin it exactly, and
review upgrades on a schedule (monthly) rather than letting them drift or
freeze. A package that stops releasing is re-vetted, and replaced by its
maintained successor where one exists.

## 7. Dates, money, language

- **The authoritative date is Gregorian, ISO-8601, UTC** — in data, in APIs and
  in anything exported as evidence. Bikram Sambat is a display layer: shown
  where Nepali convention expects it, always with the Gregorian date available
  beside it or on hover, and never alone in an audit or evidence view.
- **Money**: NPR with comma grouping and an explicit `NPR` prefix; never a bare
  symbol that reads differently between languages.
- **Language**: operational tools default to English with Nepali available;
  public surfaces follow this site (Nepali default).

## 8. Web surfaces (developer platform, this site)

Same brand, typography principles, slop rules, states and copy rules. Stack per
each repository's own instructions (Astro, TypeScript; no framework island
without sign-off). Tokens as CSS custom properties mirroring `BRAND.md`.

## 9. Web delivery (Flutter web)

Every Flutter web build ships the same way, so a new app inherits a working
pipeline instead of inventing one:

1. A custom `web/flutter_bootstrap.js` carries `var cdnBase = "__CDN_BASE__";`
   and, when the placeholder has been replaced, sets the loader's `assetBase`
   and `entryPointBaseUrl` to it.
2. CI runs `flutter build web --release` with build-time `--dart-define`
   configuration only — no secret in any bundle.
3. **Before compressing anything**, CI replaces `__CDN_BASE__` with an
   **immutable, per-build prefix** (`https://<cdn>/<app>/web/<pipeline-id>/`).
   Replacing after compression leaves the `.gz`/`.br` siblings holding the
   raw placeholder — served to nearly every browser, pointing the app at
   nothing, while an uncompressed `curl` shows no fault.
4. Precompress: `gzip -9` and `brotli -q 11` for js, css, json, wasm, svg,
   fonts and html over 1 KB; the origin serves them with `gzip_static` /
   `brotli_static`.
5. Publish the bundle to object storage behind the CDN with rclone (configured
   through `RCLONE_CONFIG_*` environment variables); files under the prefix are
   immutable and cached long. The origin serves only `index.html` and
   `flutter_bootstrap.js`, on a short cache lifetime, so a deploy is the
   origin pointing at a new prefix and a rollback is pointing back.
6. The CDN is optional: with no bucket configured the build serves from its own
   origin and nothing else changes.
7. Mobile release builds are signed in CI and published to the same storage
   with a `SHA256SUMS` file, announced in the team's channel.

**Every frontend is served through the CDN** — the ePahichan web app, the
developer platform and the staff console alike. A bundle is compiled logic and
holds no secret (enforced above), so publishing it discloses nothing an
attacker could use; **the security boundary is the API**, which authenticates
every request, and for the staff console the operator API additionally sits
behind the access proxy with device certificates. Never rely on a bundle being
hard to obtain.

---

## Sources

- impeccable.style — design slop catalogue: https://impeccable.style/slop/
- material_3_expressive: https://pub.dev/packages/material_3_expressive ·
  canonical repository https://github.com/paadevelopments/material_3_expressive
- trina_grid: https://pub.dev/packages/trina_grid
- two_dimensional_scrollables: https://pub.dev/packages/two_dimensional_scrollables
- nepali_date_picker / nepali_utils: https://pub.dev/packages/nepali_date_picker ·
  https://pub.dev/packages/nepali_utils
- Flutter: Material 3 Expressive status — https://github.com/flutter/flutter/issues/168813
- Fintech dashboard patterns (Stripe, Ramp, Mercury, Brex):
  https://www.themasterly.com/blog/fintech-dashboard-design-guide ·
  https://adminlte.io/blog/fintech-dashboard-design-examples/
- Data table design reference: https://www.setproduct.com/blog/data-table-ui-design
- Flutter web: custom bootstrap and asset base —
  https://docs.flutter.dev/platform-integration/web/initialization
- Linear's interface redesign: https://linear.app/now/how-we-redesigned-the-linear-ui
- Flutter web accessibility: https://docs.flutter.dev/ui/accessibility/web-accessibility
