---
title: "OTP or digital signature: what you can prove when a borrower disputes a loan"
description: An SMS code proves a phone received a number. A digital signature ties a named borrower to the exact loan PDF. What each gives a bank in a dispute.
date: 2026-10-04
tags: [banks, digital-signature]
faq:
  - q: "Is an OTP enough to prove a borrower agreed to a loan?"
    a: "An OTP proves that someone with the phone entered a code. It does not tie the code to the contents of the agreement or to a named person, so it is thin evidence if the borrower disputes."
  - q: "What does the bank hold after a digital signature?"
    a: "The signed PDF. The signature is bound to that exact file and carries the signer's certificate, so anyone can check it."
  - q: "Can we keep using OTP for sign-in?"
    a: "Yes. An OTP is a sensible way to sign someone in. The point is that it is not a signature on a document."
---

Instant loans in mobile banking have a pattern. The borrower reads a screen, taps "Accept", and enters a code that arrives by SMS. The loan is disbursed within the minute.

That works until the borrower says: "I never took this loan."

## What an OTP shows

An OTP, a one-time password, shows one thing: the code that was sent to a phone number was typed back. It follows that:

- someone had access to the phone at that moment,
- not necessarily the borrower. A family member, a person with a borrowed phone or someone with a cloned SIM would pass the same check.

It also does not show **what was agreed**. The code is not calculated from the loan terms. If the terms on screen differ from the terms in the bank's record, nothing in the OTP says which one the borrower saw.

The usual evidence is therefore the bank's own logs: a record saying the code was sent and entered. That is evidence the bank made about itself.

## What a digital signature shows

A digital signature changes three things.

1. **It is bound to the exact file.** The signature is calculated from the loan PDF. If anyone changes the amount, the rate or the date, the signature stops matching.
2. **It is bound to a named person.** It is made with the borrower's own certificate, issued by a certifying authority that checked their identity.
3. **It can be checked by anyone.** A court, a regulator or the borrower's lawyer can check the signature without asking the bank.

So the question in a dispute moves from "what do your logs say?" to "does this signature verify against this file?"

## Side by side

| | OTP | Digital signature |
|---|---|---|
| Bound to the loan terms | No | Yes, to the exact PDF |
| Names a verified person | A phone number | The certificate holder |
| Detects later changes | No | Yes |
| Proof lives | In the bank's logs | In the file, checkable by anyone |
| Right for sign-in | Yes | Not its job |

## The workflow

With an API, the flow is short. The borrower applies in your app. Your server creates a signing request. The borrower receives a code and signs the loan PDF with it. A webhook tells your server that the signed PDF is ready.

We describe the integration steps in [signing requests, webhooks and retries](/blog/signing-requests-webhooks-retries). The certificate application can be drawn from the KYC you already hold, so the borrower does not upload documents again.

## What stays outside

Not everything a bank signs can be digital. Mortgage deeds and negotiable instruments are excluded from the Act. The loan agreement itself is a contract. See [documents you cannot sign digitally](/blog/documents-not-signed-digitally-nepal).

More on the bank use case: [signatures for banks and lenders](/solutions/banks-lenders).
