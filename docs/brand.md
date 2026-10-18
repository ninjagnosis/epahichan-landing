# Brand document and build inputs

This site is built for one operator and one channel (the `signing` channel: the product's public face). Nothing in the
source names a customer: names, hosts, colours, logos, contacts and legal text arrive at build time.

## Inputs

| Input | What |
| --- | --- |
| `BRAND_JSON_FILE` (or `BRAND_JSON`) | The brand document for the signing channel: `xtask brand-json <operator> <signing channel> --env <env> --out <file>` in trust-platform. The flat define file (`{"BRAND_JSON": "..."}`) and the bare document are both accepted. |
| `TP_OPERATOR_PROFILE` | The operator folder (or its `operator.toml`). The build reads `brand/<channel id>/` (logo.svg, logo-mono.svg, icon-1024.png, else icon.svg, else logo.svg; a finished `icon-{32,64,192,512}.png` in the folder is used as is for that size) and `legal/<default locale>/{public-terms,privacy,delete-account}.md` from it (`public-terms.md` is the page at `/terms`; `terms.md` in the same folder is the enrolment terms). |

A build without them stops with the name of what is missing. There are no defaults, and the site carries no legal text of
its own: an operator without `legal/<locale>/public-terms.md`, `privacy.md` and `delete-account.md` cannot publish.

## Keys read from the document

The keys every Trust Platform brand document has (`channel`, `authority`, `regulator`, `hosts`, `locales`,
`colours`, ...) plus a `site` block for web builds:

| Key | Source in `operator.toml` | Used for |
| --- | --- | --- |
| `site.url` | the public origin of the marketing site | canonical addresses, sitemap, share images, feeds |
| `site.developersUrl` (optional) | the portal channel's web host | links to the developer documentation |
| `site.caName`, `site.caShortName` | the name the public knows the certifying authority by | "Certificates are issued by ..." |
| `site.company.{name,email,phoneDisplay,phoneTel,phoneIntl,street,locality}` | the company that builds and runs the product | footer, contact page, structured data |
| `site.company.shortName` (optional) | the company's name in running text | "Write to <short name> at ..." (without it the full name) |
| `site.parentCompany.{name,url,id}` (optional, null for none) | a parent company | footer, structured data |
| `site.paymentProviderName` (optional) | `providers.payment[].display_name` | "Pay through ..." (without it the copy says "a card, a bank or a wallet app") |
| `site.popup` (optional) | a seasonal popup id (`dashain`) | one dated promotion; delete after its end date |

The document's top-level `sdk.elementPrefix` (from `[sdk]`) names the SDK client in the sample code (`%%sdkClient%%`).
`colours.web.{stage_muted,stage_line,hero_muted,hero_line}` (optional, `[web]` in colours.toml) are the tints that sit on the stage and hero backgrounds; without
them the site mixes them from the ramp, so an operator that must keep exact tints sets them.

`channel.shortName` is the product name a person reads; set `short_name` on the channel when the display name is longer.

## Jurisdiction text

What depends on the country (the law the copy cites, identity documents, example names, the blog posts about them) is in
`src/jurisdictions/<iso>/`, one folder per jurisdiction pack, all with the same exports (`src/jurisdictions/types.ts`).
Blog posts for a jurisdiction are in `src/content/blog/<iso>/`; they are built only for a brand under that jurisdiction.
A brand under a jurisdiction without a folder stops the build.

## Text tokens

Copy, data and Markdown use `%%name%%` tokens (`src/brand/tokens.mjs`): `%%brand%%`, `%%ca%%`, `%%caShort%%`, `%%company%%`,
`%%paymentMethods%%`, `%%brandAccount%%` ("an <brand> account") and others. An unknown token stops the build. Front matter is not processed by the Markdown pipeline;
the one field that carries tokens (`faq`) is filled where it is rendered.

## Guard

`bin/white-label-guard` (a copy of trust-platform's) fails when a customer, country or provider name appears outside the paths
in `.white-label-allow`: the jurisdiction content (`src/jurisdictions/np/`, `src/content/blog/np/`), the first customer's design
records and the Worker name. `pnpm guard` runs it, and so does the `white-label-guard` job in `.gitlab-ci.yml`.

## Staged files

`scripts/stage-brand.mjs` runs before `dev` and `build` and writes `public/brand/*` and `src/styles/brand-colours.css`.
None of them is committed.

## Checking a build

`fixtures/brand.example.json` is a hand-written brand document for the fictional Example operator, and `fixtures/legal/en/`
holds placeholder legal pages for it (they belong in `operators/example/legal/en/`). Real builds use the output of
`xtask brand-json`:

```
BRAND_JSON_FILE=fixtures/brand.example.json TP_OPERATOR_PROFILE=../trust-platform/operators/example pnpm build
```
