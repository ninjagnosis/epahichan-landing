# ePahichan Web Repository Instructions

## Mission

Build the public ePahichan web experience: landing pages, public trust content,
and developer-facing web surfaces. ePahichan is the customer-facing brand for a
digital-trust ecosystem operated by Radiant InfoTech Nepal.

## Product boundaries

- This repository contains browser-delivered static frontend applications only.
- The web experience must not implement a CA core, HSM interface, certificate issuance, key generation, credential delivery, or privileged operations.
- Radiant's role as the issuing CA/operator must be disclosed accurately where legal, certificate-policy, or contractual context requires it. Do not imply that ePahichan itself is the issuing CA.
- Never include client secrets, API keys, private keys, P12/PFX packages, credentials, OTPs, production identity data, or `.env` secrets in the repo, static bundle, source maps, browser storage, analytics, or logs.

## Technical direction

- Build static browser applications using Astro, React, TypeScript, and Vite.
- Delivery targets immutable content-hashed assets through object storage/CDN, with static shells and selected same-origin applications served through controlled edge/origin infrastructure.
- Use a pnpm workspace as the repository grows. Prefer accessible components, responsive design, English/Nepali localisation readiness, and automated checks.
- Browser applications are public OAuth clients. Any later sign-in must use OIDC authorization code with PKCE; browser UI is never an authorization boundary.

## First deliverable

Create a polished, responsive public ePahichan landing page. It should explain the product without exposing internal CA/HSM architecture or making unapproved legal, security, availability, customer, or regulatory claims. Keep public copy brand-led and plain-language. Use a clearly marked contact/waitlist CTA in place of unavailable account or API functionality.

## Collaboration

Read `docs/handoff.md` before making product decisions. Record material design or architecture decisions there. Ask for direction when brand assets, approved legal copy, hosting details, or a claim that could affect regulatory position is required.
