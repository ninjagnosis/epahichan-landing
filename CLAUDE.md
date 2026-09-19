# epahichan-landing

Read `AGENTS.md` and `docs/handoff.md` first. They define the product, the boundaries and the claims this page must not make.

## Reference implementation

`../airfone-landing-site` is a finished landing page built on the same stack (Astro). Use it as the reference for project structure, component patterns, build and deploy setup, and how the design system is organised. Read it; do not copy its branding, copy or product claims. It is mounted read-only.

## Other code you can read

Every project is mounted under `~/code`. `../chhap` is the ePahichan product itself (Flutter app, Rust backend). Only this repo and `../shared` are writable.

## Working rules

- Build with `pnpm build` and fix every error before calling work done.
- Commit in small steps with plain messages. Push to `origin` (git.ninjainfosys.com/chhap/epahichan-landing).
- Record design and architecture decisions in `docs/handoff.md`.
