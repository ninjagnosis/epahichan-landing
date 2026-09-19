# ePahichan Web Repository Instructions

## Mission

Build the public ePahichan web experience: landing pages, public trust content,
and developer-facing web surfaces. **ePahichan is the only name that appears on
any public surface** — copy, metadata, comments, commit messages, `package.json`.
Do not name the operating company or any other organisation behind it anywhere
in this repository. This is the owner's decision and it is not negotiable here.

## Product boundaries

- This repository contains browser-delivered static frontend applications only.
- The web experience must not implement a CA core, HSM interface, certificate issuance, key generation, credential delivery, or privileged operations.
- Never name the operating company, the national CA, or any parent organisation in this repository — not in copy, not in metadata, not in comments or commit messages. Do not imply that ePahichan itself is the issuing CA either. If a legal or certificate-policy context seems to require naming an operator, stop and raise it on the ticket; that is an owner decision, not a writer's call.
- Never include client secrets, API keys, private keys, P12/PFX packages, credentials, OTPs, production identity data, or `.env` secrets in the repo, static bundle, source maps, browser storage, analytics, or logs.

## Technical direction

- Build static browser applications using Astro, TypeScript, and Vite. The React integration was removed once nothing used it; interactive pieces are plain TypeScript in an Astro component unless the ePahichan Lead has signed off on adding a framework island back.
- Delivery targets immutable content-hashed assets through object storage/CDN, with static shells and selected same-origin applications served through controlled edge/origin infrastructure.
- Use a pnpm workspace as the repository grows. Prefer accessible components, responsive design, English/Nepali localisation readiness, and automated checks.
- Browser applications are public OAuth clients. Any later sign-in must use OIDC authorization code with PKCE; browser UI is never an authorization boundary.

## First deliverable

Create a polished, responsive public ePahichan landing page. It should explain the product without exposing internal CA/HSM architecture or making unapproved legal, security, availability, customer, or regulatory claims. Keep public copy brand-led and plain-language.

**No contact address, no email, no form, no waitlist CTA.** `epahichan.com.np` is unregistered and cannot receive mail, and no replacement destination has been decided. Do not invent one and do not reinstate the old `hello@` address. The domain and mailbox are tracked separately with the owner.

## Collaboration

Read `DESIGN.md` and `BRAND.md` before making design decisions; record material design or architecture decisions there. (`docs/handoff.md` described a seven-page marketing IA the owner discarded and has been removed — do not reinstate it.) Ask for direction when brand assets, approved legal copy, hosting details, or a claim that could affect regulatory position is required.
