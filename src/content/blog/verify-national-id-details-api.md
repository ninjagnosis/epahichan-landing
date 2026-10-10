---
title: "Checking National ID details by API: match or no match, and why that is enough"
description: How an ID check that returns only match or no match works, the four fields it needs, and what developers should know about tokens and server calls.
date: 2026-10-09
tags: [identity, developers]
faq:
  - q: "What does the ID check return?"
    a: "Match or no match. It does not return the person's record."
  - q: "Which fields are needed?"
    a: "The NIN, full name, gender and date of birth in Bikram Sambat. All four must be sent."
  - q: "Can I call it from a mobile app?"
    a: "No. Call it from your server so the credentials never ship inside an app."
---

Many onboarding flows need one question answered: does what this person told us match their National ID? The answer does not need the person's whole record. It needs a yes or a no.

## Why match or no match

An API that returned the record would make every integrator a holder of other people's identity data. An API that returns only match or no match avoids that. You send what the person claims, and you learn whether it agrees with the register.

It also means the check cannot be used for guessing. The reply never says which field was wrong, so a caller cannot discover a person's details one field at a time.

## The four fields

| Field | Rule |
|---|---|
| `nin` | 10 digits, no dashes |
| `fullName` | English, any case |
| `gender` | M or F |
| `dobLoc` | Bikram Sambat, Devanagari digits |

All four must be sent. If any is missing, the answer is no match.

## Two calls

1. **Get a token.** Your server sends its client ID and password as basic authentication and receives a token valid for 30 minutes.
2. **Verify.** Your server sends the four fields with the token as a bearer credential.

```
{ "detailMatch": true }
```

Cache the token and reuse it for its lifetime instead of fetching one for every check.

## Rules worth writing down

- Call from your server, never from an app.
- Treat no match as "could not confirm", not as "fraud". Typos in names are common.
- Send the date in Bikram Sambat, in Devanagari digits.
- Do not log full National ID numbers beyond what you need.

## Where it fits

An ID check is often the first step before a [certificate application](/products/app) or a [signing request](/products/signing-api). The product page has the details: [ID check API](/products/id-check-api). Terms: [NIN](/glossary/nin), [KYC](/glossary/kyc).
