---
title: "What a digital signature does not prove: the question of when"
description: A signature shows who signed what, not when. Why a device clock proves nothing about time, and what a trusted timestamp adds to a signed document.
date: 2026-10-10
tags: [digital-signature, guides]
faq:
  - q: "Does a digital signature include the time of signing?"
    a: "A signing tool may record a time, but if it comes from the signer's device clock it proves nothing, because anyone can set a device clock to any time."
  - q: "What is a trusted timestamp?"
    a: "A time signed by an independent time authority, so a third party can rely on it."
  - q: "When does time matter?"
    a: "When you must show a document existed or was signed before a deadline, or before a certificate was revoked."
---

People are often surprised that a digital signature, for all its mathematics, does not tell you *when* it was made. That is not a flaw. It is a consequence of what a signature is.

## What the mathematics covers

A signature is calculated from a document and a private key. It can show:

- the document is the one that was signed,
- it was signed by the holder of that key,
- it has not changed since.

Nothing in that calculation includes the time. A signature made today and one made last year look the same.

## Why the device clock is not evidence

Many tools write a time next to the signature. If that time came from the phone or computer that made the signature, it is only as good as that device's clock, and a device clock can be set to any time by anyone. A date printed from it says "this device believed it was this time", which is not evidence of when it was.

On our own [signing demo](/how-signing-works) the time shown is the device clock for exactly this reason, and the page says so.

## What a trusted timestamp is

A **trusted timestamp** comes from an independent time authority. The authority takes the signature's fingerprint, attaches the current time and signs the result with its own key. Because the authority is a third party with its own clock, a verifier can rely on it, and the time can be checked later without trusting the signer.

## When it matters

Time matters in questions like these.

- Was the contract signed before the offer expired?
- Was a document signed before the signer's certificate was revoked?
- Was a record in existence on a particular date?

If your use needs to answer one of those, ask for a trusted timestamp, not only a signature.

## A note on sources

Be wary of confident claims that a signed document is automatically proof of the time it was signed. The mechanism for time is separate, and it should be named when it is used.

Related: [what a digital signature is worth in Nepal](/blog/what-is-a-digital-signature-nepal) and the glossary entry for [trusted timestamp](/glossary/trusted-timestamp).
