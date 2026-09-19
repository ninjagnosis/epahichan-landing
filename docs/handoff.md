# ePahichan Web Handoff

## Product intent

ePahichan is the unified public-facing brand for a digital-trust ecosystem. Individuals use ePahichan through a mobile-first Flutter application; banks, government, enterprises, and software providers integrate its trust services into their own applications. The internal trust platform, CA core, HSM, and delegated channels remain implementation details rather than public product navigation.

## Public web information architecture

Initial navigation:

```text
Platform | For Individuals | For Business | Developers | Trust & Security | Help | Contact
```

Initial page plan:

1. Home: plain-language value proposition and three paths: individuals, organizations, and developers.
2. Platform: high-level certificates, signatures, verification, and lifecycle capabilities.
3. For Individuals: ePahichan's mobile-first role, without promising unavailable flows.
4. For Business: integration value for banks, government, enterprises, and software providers; partners keep their own workflows.
5. Developers: linkable home for future public documentation and sandbox.
6. Trust & Security: high-level assurance story; reserve detailed issuer, policy, privacy, and legal information for reviewed content.
7. Help/Contact: accessible contact and interest-registration path.

Later public areas:

- `developers.epahichan.com.np`: public API docs plus authenticated sandbox and developer console.
- `verify.epahichan.com.np`: public certificate/signature verification, only after authoritative backend support exists.
- Legal, privacy, certificate-policy/CPS, vulnerability reporting, and status pages after review.

## Brand and disclosure guidance

Lead with ePahichan. Do not use internal service names or expose infrastructure details in ordinary marketing copy. Where legally required, make the operator and certificate issuer clear, for example in reviewed footer, policy, agreement, and certificate materials. Exact wording is pending legal/CPS approval.

## Web stack and delivery model

- Astro static shell + React interactive components + TypeScript/Vite.
- Static output; content-hashed assets are CDN-delivered and immutable.
- No backend, authentication, tracking, or production APIs are needed for the initial landing page.
- The full product will later use shared API contracts to generate TypeScript clients for static React applications and Dart clients for Flutter.

## First implementation task

Build the initial responsive ePahichan landing page from this handoff. Start with semantic, accessible, performance-conscious static content. Use original or neutral visual treatment until approved logo, palette, imagery, legal copy, and contact destination are supplied. Do not invent partnerships, compliance certifications, user metrics, pricing, availability guarantees, or issuer/legal claims.

## Initial landing-page implementation decision

- The first page is a single static Astro route with an original, neutral visual system.
- React is limited to the accessible mobile-navigation toggle; the page has no backend, analytics, account flow, or production API integration.
- The contact call to action is explicitly an interest channel, not a representation that product access is currently available.
- `hello@epahichan.com.np` is a visible placeholder destination and must be confirmed or replaced before public deployment.

## Decision-complete IA and content spec

`docs/landing-ia-and-content-spec.md` turns the page plan above into the buildable version: the
seven pages as real routes, per-page section outlines with drafted copy, the navigation and
responsive model, a numeric accessibility and performance bar, the claims boundary as a reviewable
checklist, what remains blocked on owner decisions, and the CI gate this repo needs before it takes
more application code. Read it before building any page. This handoff stays the product source of
truth; the spec does not replace it.

**One deliberate deviation, recorded here so it is not read as drift.** The stack note above limits
React to the mobile-navigation toggle. The spec removes React from this repo altogether (§3.4),
because that toggle was measured in the committed build output: **70,172 bytes gzipped of
JavaScript ship to run an 836-byte component**, of which 66,827 is the react-dom client runtime.
The replacement is roughly fifteen lines of vanilla script inside `SiteHeader.astro` — same
keyboard contract, same accessible disclosure, under 1KB. Everything else in the stack decision
stands unchanged: Astro static output, TypeScript, Vite, no backend, no analytics, no account flow.
