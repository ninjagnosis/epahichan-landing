# Public Landing Repository Instructions

## Mission

Build the public web experience of the product: landing pages, public trust content,
and developer-facing web surfaces. The brand, hosts, colours, logos, contacts and the
operating company come from the brand document (`docs/brand.md`); no source file names
a customer. The product brand is the only name on a public surface, except where the
brand document supplies the operator's own legal and contact names (footer, legal
pages, structured data).

## Product boundaries

- This repository contains browser-delivered static frontend applications only.
- The web experience must not implement a CA core, HSM interface, certificate issuance, key generation, credential delivery, or privileged operations.
- Names of the operating company, the certifying authority and any parent organisation come only from the brand document (`site` and `authority`), never from source. Do not imply that the product brand itself is the issuing CA. If a legal or certificate-policy context seems to require naming an operator in a new place, stop and raise it on the ticket; that is an owner decision, not a writer's call.
- Never include client secrets, API keys, private keys, P12/PFX packages, credentials, OTPs, production identity data, or `.env` secrets in the repo, static bundle, source maps, browser storage, analytics, or logs.

## Technical direction

- Build static browser applications using Astro, TypeScript, and Vite. The React integration was removed once nothing used it; interactive pieces are plain TypeScript in an Astro component unless the product lead has signed off on adding a framework island back.
- Delivery targets immutable content-hashed assets through object storage/CDN, with static shells and selected same-origin applications served through controlled edge/origin infrastructure.
- Use a pnpm workspace as the repository grows. Prefer accessible components, responsive design, localisation readiness (the supported locales come from the brand document), and automated checks.
- Browser applications are public OAuth clients. Any later sign-in must use OIDC authorization code with PKCE; browser UI is never an authorization boundary.

## First deliverable

Create a polished, responsive public landing page for the product. It should explain the product without exposing internal CA/HSM architecture or making unapproved legal, security, availability, customer, or regulatory claims. Keep public copy brand-led and plain-language.

**No invented contact address, no form, no waitlist CTA.** Contacts are the ones in the brand document (`site.company`). Do not add another address or reinstate an old one.

## Collaboration

Read `DESIGN.md` and `BRAND.md` before making design decisions; record material design or architecture decisions there. (`docs/handoff.md` described a seven-page marketing IA the owner discarded and has been removed — do not reinstate it.) Ask for direction when brand assets, approved legal copy, hosting details, or a claim that could affect regulatory position is required.
