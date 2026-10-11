---
title: "Is a digital signature still valid after the certificate expires?"
description: A signing certificate lasts a limited time, but a signed contract may need to hold for years. What expiry changes, what it does not, and what to keep on file.
date: 2026-10-11
tags: [digital-signature, guides]
faq:
  - q: "Does a signature become invalid when the certificate expires?"
    a: "No. What matters is whether the certificate was valid at the moment of signing. A document signed in time stays signed, provided you can show when it was signed."
  - q: "What should I keep with a signed contract?"
    a: "The signed PDF itself, and the verification result or report from the day it was signed. Keep them together, and keep more than one copy."
  - q: "Can I re-sign an old document to refresh it?"
    a: "Re-signing creates a new signature on a new date. It does not change when the original was signed, so keep the original."
---

A signing certificate has an end date, usually a year or a few years after it was issued. A contract can matter for much longer: a loan, a lease, a share transfer. So people ask what happens to the signature when the certificate runs out.

## Expiry stops new signatures, not old ones

The end date limits when the key can be used to sign. It does not reach back and cancel what was signed while the certificate was valid.

The question a verifier asks is: **was the certificate valid at the moment of signing?** If yes, the signature holds, even if the certificate expired the next day.

## Where the problem actually is

The risk is not expiry. It is proving the moment. A device clock can be wrong or changed, so a signature alone does not show that it was made before the end date.

That is why a trusted timestamp matters. It lets anyone check, years later, that the signature existed inside the valid period. See [what a digital signature does not prove](/blog/what-a-digital-signature-does-not-prove).

## What to keep

For anything that must hold for years, keep these together:

1. **The signed PDF**, unchanged. Any edit breaks the signature.
2. **The verification result** from signing day, showing signer, time and certificate status.
3. **A second copy** in a different place, such as another account or an offline drive.

## What does not help

- **Re-saving or re-exporting the PDF.** This can break the signature.
- **Printing and scanning.** The scan is a picture. The signature is gone.
- **Signing again later.** A new signature carries a new date. It adds a record, but the first one is still the one that matters.

## A simple habit

When a contract is signed, check it once with [how to check a signed PDF](/blog/how-to-check-a-signed-pdf) and file the result next to the document. Five minutes then saves an argument later.
