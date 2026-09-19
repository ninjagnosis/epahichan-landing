# ePahichan Landing — Information Architecture and Content Spec

**Status:** proposed, awaiting review on [TEC-31](/TEC/issues/TEC-31).
**Governs:** `epahichan-public-landing`. Nothing else.
**Source of truth it implements:** `docs/handoff.md`. This spec does not invent a competing IA —
it turns the handoff's seven-page plan into something an engineer can build and QA can verify
without asking a second question.

Read with: `AGENTS.md` (product boundaries and disclosure rules) and `CLAUDE.md` (working rules).

## How to use this document

- §1–§3 are buildable. An engineer should not need a product decision to start.
- §4 is the pass/fail bar. Every number in it is checkable.
- §5 is the copy review checklist. Any copy change — including a one-word one — is testable against it.
- §6 is what this spec deliberately does **not** decide. Those items block **publication**, not the build.
- §7 is the pipeline that must exist before this repo takes any more application code.
- §8 records the reversible calls made here so nobody re-litigates them mid-build.

---

## 0. What exists today, and the gap

Verified in the working tree at `d9e16fa` (2 commits, 13 files):

| | Today | This spec |
|---|---|---|
| Routes | **one** — `src/pages/index.astro` | eight — seven content routes + `404` |
| Navigation | six anchor links into one page (`#platform`, `#individuals`, `#business`, `#developers`, `#trust`, `#help`) | six real routes, `aria-current` on the active one |
| Contact | `mailto:hello@epahichan.com.np` — a placeholder | same placeholder, **flagged as a publication blocker** (§6.6) |
| React islands | one (`MenuButton`), `client:load` on every viewport | one, `client:media` — no React shipped to desktop (§3.4) |
| Focus styles | none defined anywhere in `global.css` | mandated, with a contrast number (§4.3) |
| Typeface | CSS names `Inter`; nothing ever loads it, so it silently renders system sans | system stack, deliberately (§4.6) |
| CI | no `.gitlab-ci.yml` in the repo at all | §7 |

None of the seven pages in the repo's own IA exist. That is the gap this spec closes.

---

## 1. Route map

Astro 5.18.2, `output: 'static'`. Astro's defaults are `build.format: 'directory'` and
`trailingSlash: 'ignore'` (confirmed in `node_modules/astro/dist/core/config/schemas/base.js`),
so `src/pages/platform.astro` emits `dist/platform/index.html` and serves at `/platform/`.
**Set both explicitly in `astro.config.mjs`** rather than inheriting them, and write every internal
link with a trailing slash, so the dev server and the static host agree about what `/platform` means.

| Path | File | `<title>` | Purpose (one line) | Linked from |
|---|---|---|---|---|
| `/` | `pages/index.astro` | ePahichan — Digital trust, made more approachable | Plain-language value proposition and the three audience paths | Wordmark (header + footer), 404, every page's breadcrumb-less "home" wordmark |
| `/platform/` | `pages/platform.astro` | Platform — ePahichan | What ePahichan does, at capability level, without internal architecture | Primary nav; home hero secondary CTA; home path card 01–03 context |
| `/individuals/` | `pages/individuals.astro` | For Individuals — ePahichan | The mobile-first experience, with no promise of flows that do not exist | Primary nav; home path card 01; `/platform/` audience band |
| `/business/` | `pages/business.astro` | For Business — ePahichan | Integration value for banks, government, enterprises, software providers | Primary nav; home path card 02; `/platform/` audience band; `/developers/` |
| `/developers/` | `pages/developers.astro` | Developers — ePahichan | The linkable home for future public docs and sandbox | Primary nav; home path card 03; `/platform/` audience band; `/business/` |
| `/trust/` | `pages/trust.astro` | Trust & Security — ePahichan | High-level assurance story; what will be published once reviewed | Primary nav; home trust teaser; footer |
| `/help/` | `pages/help.astro` | Help & Contact — ePahichan | Answers the questions we can truthfully answer, and carries the contact CTA | Primary nav; header CTA (`/help/#contact`); every page's closing CTA; footer |
| `/404` | `pages/404.astro` | Page not found — ePahichan | Static 404 for the CDN/edge error document | Not linked; served on miss |

That is **seven content pages**, exactly the handoff's list. The handoff's item 7 is "Help/Contact"
as a single page, so Contact is **a section of `/help/`**, not an eighth route.

### 1.1 Anchor → route disposition (explicit, as asked)

| Today's anchor | Becomes | Note |
|---|---|---|
| `#platform` | route `/platform/` | |
| `#individuals` | route `/individuals/` | |
| `#business` | route `/business/` | |
| `#developers` | route `/developers/` | |
| `#trust` | route `/trust/` | |
| `#help` | route `/help/` | |
| `#contact` | **stays an in-page anchor**, at `/help/#contact` | The header CTA and every page's closing CTA point at `/help/#contact`. It is a section, not a page. |
| `#top` | **removed** | Replaced by the skip link target `#main` (§4.3). The wordmark links to `/`, not to a fragment. |

### 1.2 Not in scope for this repo

`developers.epahichan.com.np` (the portal, `epahichan-developers`) and `verify.epahichan.com.np`
are separate properties. **Do not link to either from this site until it is live** — a nav item
pointing at a dead host is worse than no nav item. `/developers/` describes the portal and
collects interest; it does not link to it.

Localisation: v1 ships English only, `<html lang="en">`. The AGENTS.md localisation-readiness
requirement is satisfied by keeping all user-visible strings out of the CSS and in the component
that renders them; no i18n runtime, no `/ne/` routes, no locale switcher in v1. Reserved shape
for later: `/ne/<same-path>/`. Building it now would be speculative work on unapproved Nepali copy.

---

## 2. Per-page content outline

Conventions used below:

- **Drafted copy** is in quotes and is ready to ship, subject to §5.
- `[DECISION: …]` marks a placeholder whose final text depends on a call this spec cannot make.
  It names the decision and its owner. Placeholders must be visibly neutral in the build, never
  invented filler that reads like an approved claim.
- Every page ends with the same closing CTA band, and every page has exactly one `<h1>`.

### 2.0 Global chrome (on all eight routes)

**Header** — wordmark → `/`; primary nav (six routes); CTA button "Get in touch ↗" → `/help/#contact`;
menu toggle below 900px. Active route carries `aria-current="page"`.

**Footer** — wordmark; tagline "Digital trust, made more approachable."; a link column
(Platform, For Individuals, For Business, Developers, Trust & Security, Help); the disclosure line;
the copyright line.

Footer disclosure line, drafted: *"Public information is being introduced gradually. Legal, policy,
and service details will be published when reviewed."* — this is already in the committed page and
is safe because it promises nothing.

Footer operator line: `[DECISION: operator/issuer disclosure wording — §6.5.]` **Ships empty, not
guessed.** `AGENTS.md` requires that the operating entity's role as issuing CA be stated accurately
where legal context requires, and that ePahichan must not be implied to be the CA. The exact
wording, and whether it belongs on a marketing footer at all rather than only in reviewed policy
and certificate materials, is unapproved. An empty slot is compliant; a guess is not.

Copyright: `© {new Date().getFullYear()} ePahichan` — as today.

### 2.1 `/` — Home

| # | Section | Heading | What it asserts | CTA |
|---|---|---|---|---|
| 1 | Hero | `h1` "A clearer way to connect with **digital trust.**" | ePahichan is being shaped as a simpler experience for people, organizations, and developers. Forward-looking, no availability claim. | Primary "Register your interest →" → `/help/#contact`; secondary "Explore ePahichan →" → `/platform/` |
| 2 | Three paths | `h2` "Designed around the people and systems that need to work together." | One brand covers a human-facing experience and integration-ready services. | Three `h3` cards → `/individuals/`, `/business/`, `/developers/` |
| 3 | What ePahichan is | `h2` "One name for the trust your services depend on." | Plain-language definition at product level. No internal service names, no architecture. | "See the platform →" → `/platform/` |
| 4 | Trust teaser | `h2` "We are being careful about what we say." | We publish policy and trust detail after review, not before. This is a strength, stated plainly. | "Our approach to trust →" → `/trust/` |
| 5 | Closing CTA band | `h2` "Let's make the next connection a meaningful one." | Contact is an **interest channel**. | "Contact ePahichan →" → `/help/#contact`, with the standing disclaimer below it |

Hero body copy, drafted (carried from the committed page, it is well-hedged):
*"ePahichan is being shaped as a simpler experience for people, organizations, and the developers
who build the services they rely on."*

Standing disclaimer, used under every contact CTA on every page, verbatim:
*"Contact details are an interest channel. Product access is not yet available."*

### 2.2 `/platform/` — Platform

| # | Section | Heading | What it asserts | CTA |
|---|---|---|---|---|
| 1 | Intro | `h1` "The capabilities behind ePahichan." | Product-level overview. Explicitly not an architecture page. | — |
| 2 | Capability areas | `h2` "What ePahichan is being built to do." + four `h3` cards | The handoff's four areas: **Digital certificates**, **Digital signatures**, **Verification**, **Lifecycle**. One hedged sentence each — what the area is *for*, in a sentence a non-technical reader understands. | — |
| 3 | Who it is for | `h2` "Three ways people meet ePahichan." | Individuals via a mobile experience; organizations via integration; developers via tools. | Three links → `/individuals/`, `/business/`, `/developers/` |
| 4 | What we are not describing here | `h2` "The parts we keep out of the shop window." | The operating and security detail behind these capabilities is published through reviewed policy material, not marketing copy. | "Trust & security →" → `/trust/` |
| 5 | Closing CTA band | (global) | | → `/help/#contact` |

**Hard constraint on §2 of this page.** Capability copy is written in product language only.
It must not name or describe CA core, HSM, key ceremonies, partitions, certificate profiles,
issuance pipelines, delegated-RA mechanics, or any internal service. `AGENTS.md` forbids exposing
internal architecture in ordinary marketing copy, and the channel architecture doc keeps those in
restricted channels. If a reviewer cannot tell from the copy how the system is built, the copy is correct.

### 2.3 `/individuals/` — For Individuals

| # | Section | Heading | What it asserts | CTA |
|---|---|---|---|---|
| 1 | Intro | `h1` "Built to feel simple, from the first step." | ePahichan for individuals is **planned** as a mobile-first experience. | — |
| 2 | What it is | `h2` "A mobile-first way to handle digital trust." | It is an app you will use on your phone. Nothing about what it currently does, because it is not released. | — |
| 3 | What we are designing for | `h2` "What we are designing for." + three `h3` items | Design *intentions*, each phrased as an intention: clarity over jargon; you stay in control of what you share; it should work on the phone you already have. | — |
| 4 | Honest status | `h2` "Where this is today." | Not yet available; no download link; no waitlist promise beyond "we will get in touch". | "Keep me informed →" → `/help/#contact` |
| 5 | Closing CTA band | (global) | | |

**Do not** list enrollment, consent, device binding, delivery, signing, renewal, or lifecycle as
user-facing features here. Those are the internal milestone vocabulary from the platform roadmap;
naming them publicly implies flows that do not exist and would be an availability claim (§5).

### 2.4 `/business/` — For Business

| # | Section | Heading | What it asserts | CTA |
|---|---|---|---|---|
| 1 | Intro | `h1` "Make trust a natural part of your own experience." | ePahichan supports your journeys; it does not replace them. | — |
| 2 | Who this is for | `h2` "Built with integrators in mind." + four `h3` items | Banks, government, enterprises, software providers — **as audience categories, described generically.** | — |
| 3 | How it fits | `h2` "Your workflows stay yours." | You keep your own customer and staff applications; ePahichan is the trust layer you build on. | — |
| 4 | Talking to us | `h2` "Starting a conversation." | What happens when you get in touch: a conversation, not an onboarding. No SLA, no timeline, no pricing. | "Register your interest →" → `/help/#contact`; "For developers →" → `/developers/` |
| 5 | Closing CTA band | (global) | | |

**Hard constraint.** §2 names audience *categories* only. It must not name, logo, or imply a single
real institution, pilot, customer, or partner. See §5.1.

### 2.5 `/developers/` — Developers

| # | Section | Heading | What it asserts | CTA |
|---|---|---|---|---|
| 1 | Intro | `h1` "Tools that respect your time." | Developer material is in development. | — |
| 2 | What is planned | `h2` "What we are preparing." + three `h3` items | API documentation; a sandbox; client libraries. Each phrased "planned" / "in development". | — |
| 3 | Where it will live | `h2` "One place to find it." | A dedicated developer site is planned. **Named but not linked** until it exists (§1.2). | — |
| 4 | Until then | `h2` "Until it is ready." | Join the list; we will tell you when there is something to try. | "Developer updates →" → `/help/#contact` |
| 5 | Closing CTA band | (global) | | |

`[DECISION: may we publicly state the planned client-SDK languages (TypeScript, Dart)? — §6.7.]`
Until answered, §2's third item reads "client libraries for common platforms" without naming them.
This is a roadmap claim, and roadmap claims are the owner's to make.

### 2.6 `/trust/` — Trust & Security

The highest-risk page in the repo. Every sentence here is a potential regulatory statement.

| # | Section | Heading | What it asserts | CTA |
|---|---|---|---|---|
| 1 | Intro | `h1` "Thoughtful by design." | We are deliberate about what we publish and when. | — |
| 2 | Our approach | `h2` "Careful, in the parts that matter." | Process statements only: information is reviewed before publication; detail follows review. **No control, standard, certification, audit, or architecture claims.** | — |
| 3 | What we will publish | `h2` "What will be published here." | A list of *document types* the handoff already names — privacy, legal terms, certificate policy and practice statement, vulnerability reporting, service status — each marked "when reviewed and published". Non-links until they exist. | — |
| 4 | Operator disclosure | `h2` `[DECISION: §6.5]` | Ships as an empty reserved slot. | — |
| 5 | Questions | `h2` "If you need more detail now." | Ask us; reviewed material goes to people who need it. | "Get in touch →" → `/help/#contact` |
| 6 | Closing CTA band | (global) | | |

**Hard constraints on this page:**

- No certification, accreditation, licence, audit, or conformance claim of any kind. None are approved.
- No named standard, scheme, or regulation used in a way that implies conformance.
- No uptime, availability, or security guarantee. "Designed to be careful" is a process statement;
  "your data is secure" is a guarantee. Only the first is permitted.
- **Neither the operating company nor the delegated channel partner is named on this page in v1.**
  The exact legal roles and branding between them on public surfaces is on the record as requiring
  owner approval (`trust-platform/docs/operations/handoff.md`, "Decisions still requiring owner
  approval"). Until that is decided, naming either one here is guessing at a legal position. §6.5.

### 2.7 `/help/` — Help & Contact

| # | Section | Heading | What it asserts | CTA |
|---|---|---|---|---|
| 1 | Intro | `h1` "Help and contact." | One page, two jobs: answer what we can, and give you a way to reach us. | — |
| 2 | Questions | `h2` "Questions we can answer today." | Native `<details>`/`<summary>` list (§3.5). Four drafted below. | — |
| 3 | Contact | `h2` "Let's make the next connection a meaningful one." — anchor `id="contact"` | The contact destination and the interest-channel disclaimer. | "Contact ePahichan →" → `mailto:` — see §6.6 |

Drafted Q&A — each one is answerable truthfully today, which is the bar for inclusion:

1. **"Can I use ePahichan now?"** — "Not yet. ePahichan is in development and there is nothing to
   sign up for or download today. Getting in touch puts you on the list to hear when that changes."
2. **"I want to integrate ePahichan into our systems. What now?"** — "Get in touch and tell us what
   you are building. We are talking to organizations while the platform is being developed."
3. **"Where is the developer documentation?"** — "In development. There is nothing public to read
   yet. Ask to be told when there is."
4. **"When will it be available?"** — "We are not giving a date. When there is something real to
   try, the people who got in touch hear first."

Q4 exists specifically so that "when is it launching" has a published, honest answer instead of
being answered ad hoc by whoever reads the mailbox. An invented date would breach §5.4.

### 2.8 `/404` — Not found

`h1` "That page isn't here." One line: "The link may be old, or the page may not exist yet."
Links: home, plus the six primary routes. Full header and footer. No search (there is no index).
No redirect, no `<meta refresh>` (`meta-refresh` is a WCAG failure and a CI-gated rule, §7).

---

## 3. Navigation and responsive model

### 3.1 Breakpoints

The committed stylesheet already uses `900px` and `520px`. Keep both; do not introduce a third.

- **≥ 900px** — horizontal nav, header CTA visible, menu toggle `display:none`.
- **< 900px** — nav and header CTA hidden; menu toggle visible; nav moves into the disclosure panel.
- **< 520px** — single-column layout, reduced header height, as already implemented.

### 3.2 Desktop navigation

Six route links in a `<nav aria-label="Primary">`, plus the CTA button outside the `<nav>`.
The link for the current route carries `aria-current="page"` and a visible non-colour-only
treatment (an underline or a weight change — colour alone fails SC 1.4.1).

Active-route detection: compare `Astro.url.pathname` against each route, normalising the trailing
slash. Put the nav array and the matcher in **one** shared component (`src/components/SiteHeader.astro`)
consumed by `BaseLayout.astro`, so the list of routes exists once in the codebase. Today the same
six-item array is duplicated in `index.astro` and `MenuButton.tsx`; that duplication does not survive
this spec.

### 3.3 Mobile navigation

It is a **disclosure**, not a modal dialog. That choice sets the whole keyboard contract
(W3C ARIA Authoring Practices, Disclosure pattern — https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/):

- `<button type="button" aria-expanded="true|false" aria-controls="primary-nav-mobile">`.
- **The panel element is always in the DOM**, shown and hidden with the `hidden` attribute.
  Today's implementation renders the panel only while open, so `aria-controls` points at an id that
  does not exist for as long as the menu is closed. Fix this in the build.
- Opening moves focus to the first link in the panel.
- `Escape` closes the panel and returns focus to the toggle.
- Activating any link closes the panel (navigation replaces the document anyway, but the state must
  not survive a bfcache restore).
- **No focus trap.** A disclosure does not trap focus; tabbing past the last link continues into the
  page, which is correct and expected. Do not add one.
- The toggle needs an accessible name at all times: `<span class="sr-only">Menu</span>` inside it,
  and `aria-expanded` carries the state — do not change the name between "Open"/"Close".

### 3.4 What React is actually for

**Exactly one island, and it is the menu toggle.** Everything else on all eight routes is static
Astro output with zero client JavaScript.

Change the directive from `client:load` to `client:media="(max-width: 899px)"`. The toggle is
`display:none` above 900px, so `client:load` currently downloads and hydrates React for every
desktop visitor to operate a control they cannot see. `client:media` keeps the server-rendered
markup and defers hydration to viewports that can actually use it.

**No second island is requested, and none is justified.** The two candidates were both rejected:

- The `/help/` FAQ → native `<details>`/`<summary>`. Keyboard- and screen-reader-accessible with
  no script. See §3.5.
- A contact form → out of scope. The handoff's stack decision is "no backend"; a form needs a
  submission endpoint, which means a backend, spam handling, and personal-data handling. The
  contact CTA stays a `mailto:` in v1.

If a future ticket proposes a second island, it must state what it does that HTML and CSS cannot,
and what it costs in shipped bytes against the §4.7 budget.

### 3.5 The FAQ, without JavaScript

`<details><summary>` per question. Do not add `role="button"` or `aria-expanded` to the `summary` —
browsers map the native semantics already, and hand-added ARIA on `summary` degrades it. One caveat
to handle in CSS: `details` content must remain findable — do not hide it with `display:none` in a
way that defeats in-page find.

---

## 4. Accessibility and performance bar

Target: **WCAG 2.2 Level AA**. Every item below is a number or a binary, because "accessible" is
not a review outcome.

### 4.1 Heading hierarchy

- Exactly **one** `<h1>` per route. Not zero, not two.
- No skipped levels: an `h3` never appears without an `h2` above it in the same section.
- The `h1` is the page's subject, not the brand. The wordmark is a link, not a heading.
- Every `<section>` that carries a heading is associated with it via `aria-labelledby`, or it is not
  a `<section>` — use a `<div>`. An unnamed `<section>` is an unnamed region in the a11y tree and is
  noise. Today five of the seven sections on the home page are unnamed.

### 4.2 Contrast

Minimums: **4.5:1** body text; **3:1** large text (≥24px, or ≥18.66px bold); **3:1** for UI component
boundaries and meaningful graphics (SC 1.4.11). Purely decorative rules and dividers are exempt.

The committed palette measured against those minimums (sRGB relative luminance per WCAG):

| Pair | Ratio | Verdict |
|---|---|---|
| `--ink #092b29` on `--cream #f6f1e8` | 13.44 | pass |
| `--ink` on `--paper #fffdfa` | 14.89 | pass |
| `--ink` on `--mint #bde6cf` | 11.07 | pass |
| `--ink` on `--lime #d5e65a` | 11.01 | pass |
| `--ink` on `--coral #ed8a6e` | 6.09 | pass |
| `.eyebrow #39615a` on cream | 6.16 | pass |
| `.hero-description #37504b` on cream | 7.74 | pass |
| section body `#45605a` on cream | 6.07 | pass |
| `.path-card p #536964` on paper | 5.79 | pass |
| `.contact small #48645e` on mint | 4.72 | pass (thin margin) |
| `.footer-note #9ab5ac` on ink | 6.90 | pass |
| **`.path-number #6d837e` on paper** | **3.98** | **FAIL** — 12px text, needs 4.5:1 |
| **`.developers p #563a33` on coral** | **4.13** | **FAIL** — body text, needs 4.5:1 |
| `.business-points span` border `rgba(9,43,41,.36)` over lime | 2.05 | flagged, not a failure — the chip is identifiable from its ink-on-lime label (11:1); the border is decoration. Do not make it load-bearing. |
| `--line` dividers over cream | 1.39 | exempt — decorative separators |

**Two real failures ship in `main` today.** Both must be fixed in the build ticket. Minimum
corrections that clear the bar: `.path-number` → `#5c716c` or darker; `.developers p` → `#43261f`
or darker on coral. If §6.2 replaces the palette, re-run this whole table — **it is a build-ticket
deliverable, not a nice-to-have.**

### 4.3 Focus and keyboard

- A **skip link** is the first focusable element on every page: "Skip to content" → `#main`.
  Visually hidden until focused, then visible.
- Every interactive element has a visible focus indicator: **≥2px** thick, **≥3:1** against the
  adjacent background, and not clipped by `overflow:hidden`. Use `:focus-visible`.
  `global.css` defines no focus styling at all today; this is new work, not a tidy-up.
- **Never** `outline: none` without an equivalent replacement in the same rule.
- The whole site is operable with keyboard only: every route reachable, the menu openable and
  closable, `<details>` toggleable, every link activatable. No keyboard trap anywhere.
- DOM order matches visual order on every route. No positive `tabindex`.

### 4.4 Target size

Minimum **24×24 CSS px** for every pointer target (SC 2.5.8 AA), including inline nav links —
pad them to reach it. The existing 43px menu button already clears this.

### 4.5 Motion and zoom

- All animation, transition, and `html { scroll-behavior: smooth }` is wrapped in
  `@media (prefers-reduced-motion: no-preference)`. The committed stylesheet applies smooth scroll
  and hover `translateY` unconditionally.
- **Reflow (SC 1.4.10):** usable at a 320px-wide viewport and at 400% zoom with **no horizontal
  scrolling** and no content loss. The 520px breakpoint is not sufficient evidence — check 320.
- Text remains readable when spacing is overridden (SC 1.4.12).

### 4.6 Images and fonts

**Images.** v1 ships **zero raster images** — the visual system is CSS shapes, which is why the
page currently has no image weight at all. Keep it. Any image added later must have: meaningful
`alt` (or `alt=""` plus `aria-hidden` if decorative), explicit `width`/`height` to reserve layout,
AVIF or WebP through Astro's `<Image>`, `loading="lazy"` below the fold, and **never** `loading="lazy"`
on the LCP element.

**Fonts.** `global.css` declares `font-family: Inter, …` and never loads Inter — no `@font-face`,
no `<link>`. So the site already renders in the system stack, and the `Inter` token is a lie in the
CSS. **v1 decision: ship the system stack only, zero font bytes**, and remove the unbacked `Inter`
token. If a brand typeface is approved (§6.2), the rules are: self-hosted `woff2`, latin subset,
**≤40KB per weight**, at most **two weights**, `font-display: swap`, `<link rel="preload">` for the
single weight used above the fold. No Google Fonts or any third-party font host — a third-party
font request is a third-party request (§4.7).

### 4.7 Performance budget, per route

| Budget | Limit |
|---|---|
| JavaScript, gzipped | **≤50KB** total (today: the one menu island, and none of it on desktop after §3.4) |
| CSS, gzipped | **≤30KB** |
| Font bytes | **0** in v1; ≤80KB if §6.2 approves a typeface |
| Image bytes | **0** in v1 |
| Third-party requests | **0** — no analytics, no tag manager, no font CDN, no embeds |
| Cookies / localStorage / sessionStorage | **0** — the site sets none, so it needs no consent banner |
| Render-blocking requests | CSS only |
| LCP element | must be **text**, not an image |

The zero-third-party and zero-storage rows are not aspirations. They are why this site needs no
consent mechanism and carries no privacy surface, and they are what makes the `no backend, no
authentication, no tracking` line in the handoff true in the built artifact rather than just in a doc.

### 4.8 Head and metadata, per route

Every route sets: unique `<title>`, unique `<meta name="description">`, `<link rel="canonical">`,
`<html lang="en">`, and `<meta name="viewport" content="width=device-width, initial-scale=1">` —
the committed layout omits `initial-scale=1`, which misbehaves on orientation change in iOS Safari.

`[DECISION: is the site indexable before launch? — §6.8.]` Build both paths and flip one switch:
`robots.txt` plus `<meta name="robots">`. Default until answered: **`noindex, nofollow` and a
disallow-all `robots.txt`**, because an unlaunched site appearing in search results with placeholder
contact details is the worse failure. Open Graph and Twitter card tags: structure them now, leave
the image slot empty until §6.3 approves imagery.

---

## 5. The claims boundary — reviewable checklist

The handoff forbids inventing "partnerships, compliance certifications, user metrics, pricing,
availability guarantees, or issuer/legal claims." Below is that rule as something a reviewer can
actually run against a diff. **Any merge request that changes user-visible copy must be checked
against all eight. A "no" on any line blocks the merge.**

| # | Check | Fails if the copy… |
|---|---|---|
| **5.1** | **No invented partnership** | names, logos, or implies any specific bank, government body, enterprise, institution, customer, pilot, or partner — including "trusted by", "working with", or a logo wall. Audience *categories* ("banks, government, enterprises, software providers") are permitted; named entities are not. |
| **5.2** | **No compliance or certification claim** | states or implies certification, accreditation, licensing, audit outcome, or conformance to a named standard, scheme, or regulation. Includes badges, seals, and standard numbers used decoratively. |
| **5.3** | **No user or business metric** | cites user counts, transaction volumes, uptime percentages, growth, funding, team size, or any other number describing adoption or scale. If it is a number about how many or how much, it does not ship. |
| **5.4** | **No pricing and no availability guarantee** | quotes a price, tier, free trial, discount, or "free"; or gives a launch date, timeline, SLA, uptime target, support-response time, or "available now / coming in Q…". "In development" is fine; "coming this year" is not. |
| **5.5** | **No issuer or legal claim** | states or implies who the issuing CA is, the legal effect or validity of a certificate or signature, regulatory standing, or liability. Also fails if it implies **ePahichan itself** is the issuing certificate authority. |
| **5.6** | **No internal architecture** | names or describes the CA core, HSM, key ceremonies, partitions, certificate profiles, issuance pipelines, delegated-RA mechanics, internal service names, repository names, hostnames, or vendors. |
| **5.7** | **No unapproved entity naming** | names the operating company or the delegated channel partner anywhere on a public surface, in any role, while §6.5 is open — including in the footer, meta tags, or structured data. |
| **5.8** | **Forward-looking language is marked** | describes an unreleased capability in the present indicative. Required forms: "is being designed", "is planned", "is in development", "we are preparing". Forbidden: "ePahichan lets you…", "you can…", "our platform provides…". |

Two standing sentences are **pre-approved** and may be used verbatim without re-review, because
they are the load-bearing hedges:

> "Contact details are an interest channel. Product access is not yet available."

> "Public information is being introduced gradually. Legal, policy, and service details will be
> published when reviewed."

Reviewer note: 5.8 is the one that fails quietly. A copy edit that tightens "is being designed to
make digital trust easier" into "makes digital trust easier" converts an intention into an
availability claim, and it reads like an improvement.

---

## 6. Blocked-on list

None of these block the **build**. Every one of them blocks **public launch**. Each names who
decides and what the build does until then.

| # | Item | Owner | Build behaviour until decided | Urgency |
|---|---|---|---|---|
| **6.1** | **Logo / wordmark.** No logo asset exists. | Owner, via CTO | Current CSS wordmark (`e` in a circle + "ePahichan"). It is original and neutral, so it is safe to ship internally. | Low — the placeholder is genuinely presentable |
| **6.2** | **Palette and typeface.** The current palette is invented by the scaffold, not approved. Two of its pairs fail contrast (§4.2). | Owner, via CTO | Keep the current palette **with the two contrast fixes applied**. System font stack, zero font bytes. | Medium — a late palette swap means re-running §4.2 and possibly re-fixing |
| **6.3** | **Approved imagery.** No photography, illustration, or OG image. | Owner, via CTO | Zero images; CSS shapes only; empty OG image slot. | Low — the CSS-shape system stands on its own |
| **6.4** | **Legal and footer wording.** Privacy, terms, certificate policy/CPS, vulnerability reporting — none written or reviewed. | Legal review, via CTO | `/trust/` lists these as document types "when reviewed and published", as non-links. No footer legal links. | Medium — `/trust/` is deliberately thin until these exist |
| **6.5** | **The operator / delegated-partner branding split.** On the record in `trust-platform/docs/operations/handoff.md` as requiring owner approval: "Exact legal roles and branding between Radiant and NCC in every public surface." | **Owner decision; escalate via CTO. Not mine, not the CTO's.** | Neither entity is named anywhere on the public site (§5.7). The footer operator slot ships empty. | **HIGH** — see below |
| **6.6** | **The real contact destination.** `hello@epahichan.com.np` is a placeholder invented by the scaffold. Nobody has confirmed the mailbox exists, is monitored, or is the right address. | Owner, via CTO | The `mailto:` stays, and **the site does not go public with it unverified.** | **HIGH** — see below |
| **6.7** | **May we publicly name the planned SDK languages** (TypeScript, Dart)? | Owner, via CTO | `/developers/` says "client libraries for common platforms". | Low |
| **6.8** | **Is the pre-launch site indexable?** | Owner, via CTO | `noindex, nofollow` + disallow-all `robots.txt`. | Medium — must be settled before the first public deploy, and it is a one-line change |

### The two that are urgent

**6.6 — the contact address.** This one is urgent because it is the only blocker that causes a
*silent* failure. Everything else on this list looks unfinished if it ships wrong: a missing logo is
visibly a missing logo. An unmonitored mailbox looks perfect and loses every inbound lead — from
exactly the banks and software providers `/business/` is written to attract — with no error anywhere.
The whole site's single conversion path terminates at that string. It is also the cheapest to
resolve: someone needs to confirm one address and that a human reads it.

**This site must not be made publicly reachable until 6.6 is confirmed.** Stating that in the spec
so it is a reviewable condition, not a remembered one.

**6.5 — the branding split.** Urgent because it is the only item on this list that is a one-way
door. It is a legal-position question, and getting it wrong in public is not a copy edit: a public
statement about who operates a trust service and who issues certificates is the kind of claim that
is hard to retract once it is indexed, quoted, or relied on. It also shapes `/trust/` structurally
rather than cosmetically — an operator disclosure is a section, not a sentence — so deciding it late
means rewriting that page rather than filling in a blank. Everything else here can be swapped at
any point before launch for the cost of a small diff.

Not urgent and deliberately so: 6.1, 6.3, and 6.7. The neutral treatment the handoff asked for is
doing its job, and waiting costs nothing.

---

## 7. CI gate proposal

**This repo has no `.gitlab-ci.yml`.** Before it takes another line of application code, it gets
one. The scope below is limited to what can actually be made to pass on the existing toolchain —
nothing here needs a dependency the repo does not already have.

### 7.1 Required on every merge request, from the next one onwards

Single `verify` stage, on a Node + pnpm image, on the product container's runner — **never in the
Paperclip container** (company engineering standards; also `cargo`/`flutter`/`pnpm build` are capped
company-wide at 2 concurrent builds).

| Step | Command | Fails the MR when |
|---|---|---|
| 1. Install | `pnpm install --frozen-lockfile` | the lockfile and `package.json` disagree |
| 2. Types and templates | `pnpm check` → `astro check` | any TS or `.astro` template diagnostic. Already a script in `package.json`; nothing to add. |
| 3. Build | `pnpm build` → `astro build` | the static build errors. `CLAUDE.md` already requires a clean `pnpm build`; this makes it enforced rather than remembered. |
| 4. HTML and structural a11y | `html-validate dist/**/*.html` | invalid HTML, or a violation of the structural rules below |

Step 4 is the only new dependency (`html-validate`, dev-only, pure Node, **no browser**). It runs
over the built output, so it checks what actually ships, not the source. Configure from the
`recommended` and `a11y` presets, and pin these explicitly — they map to the §4 bar and to real
defects in today's code:

- one `<h1>` per document, no skipped heading levels
- `lang` present on `<html>`; `alt` present on every `<img>` (`wcag/h37`)
- no duplicate `id` (`no-dup-id`) and no duplicate attributes (`no-dup-attr`)
- **every `aria-controls` / `for` / `aria-labelledby` resolves to an element that exists** — this is
  the rule that catches today's `MenuButton` bug (§3.3), where `aria-controls="mobile-nav"` points
  at nothing whenever the menu is closed
- no `<meta http-equiv="refresh">` (`meta-refresh`)
- required attributes present (`element-required-attributes`)

Exact rule ids and preset composition get pinned when the job is written; the list above is the
intent, and `html-validate`'s WCAG support table is the reference
(https://html-validate.org/wcag.html).

### 7.2 Explicitly deferred, with the reason

- **Full accessibility audit** — `pa11y-ci --threshold 0` with the `axe` and `htmlcs` runners at
  `WCAG2AA`, over all eight routes served from `dist/` by a static server. This is the check that
  catches contrast and computed-a11y-tree failures, which `html-validate` cannot see. It needs
  headless Chromium in the runner image (https://github.com/pa11y/pa11y-ci). **Required before the
  site is publicly reachable; its own ticket, alongside 6.6.** Not a merge gate on day one, because
  I am not going to propose a gate whose image does not exist yet.
- **ESLint / Prettier** — the repo has neither, and no code style is established. Adding them means
  a flat config, the Astro plugin, and one formatting commit touching every file, which would
  collide with the build ticket. `astro check` is the type and template lint until then. Its own ticket.
- **Lighthouse budget assertion** against §4.7 — same Chromium dependency as `pa11y-ci`; fold into
  that ticket.

### 7.3 Non-negotiable

The pipeline never deploys anything that did not pass steps 1–4. The failure mode being avoided is
on the record inside this company: a sibling repo's pipeline has four stages and ships a signing
product to production without running a single test, and its `main` currently carries a test suite
that does not compile. This repo gets its gate in the same merge request as its first real code,
not after.

---

## 8. Decisions made here (reversible — do not re-litigate mid-build)

These were mine to make, they are all reversible inside this repo, and they are recorded so the
build ticket does not reopen them:

1. Paths are `/individuals/` and `/business/`, not `/for-individuals/` and `/for-business/` — short,
   and they map 1:1 onto today's anchor ids.
2. Contact is a section of `/help/` (`/help/#contact`), not a seventh nav route. The handoff's page
   plan says "Help/Contact" as one page.
3. `build.format: 'directory'` and `trailingSlash` set explicitly in config rather than inherited.
4. One React island, hydrated with `client:media`, not `client:load`.
5. Mobile nav is a disclosure, not a modal: no focus trap.
6. The FAQ is `<details>`/`<summary>`, not an island.
7. No contact form in v1 — a form implies a backend, which the handoff's stack decision excludes.
8. English only in v1; `/ne/` reserved, not built.
9. Default to `noindex` until 6.8 is answered.
10. The route list lives in one component and is imported, not duplicated per surface.

---

## Appendix — build-ticket checklist

Defects in `main` today that this spec obliges the build to fix, gathered in one place:

- [ ] `.path-number` contrast 3.98:1 — fails AA (§4.2)
- [ ] `.developers p` on coral 4.13:1 — fails AA (§4.2)
- [ ] No focus styling anywhere in `global.css` (§4.3)
- [ ] `aria-controls="mobile-nav"` references an element that does not exist while closed (§3.3)
- [ ] `scroll-behavior: smooth` and hover transforms unguarded by `prefers-reduced-motion` (§4.5)
- [ ] `<meta viewport>` missing `initial-scale=1` (§4.8)
- [ ] `font-family: Inter` declared but never loaded (§4.6)
- [ ] Nav array duplicated in `index.astro` and `MenuButton.tsx` (§3.2)
- [ ] Five unnamed `<section>` landmarks on the home page (§4.1)
- [ ] No skip link (§4.3)
- [ ] `client:load` on a control that is invisible above 900px (§3.4)
- [ ] No `404.astro` (§1)
- [ ] No canonical, no per-route description, no robots policy (§4.8)
