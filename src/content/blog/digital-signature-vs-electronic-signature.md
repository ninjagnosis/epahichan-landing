---
title: "Digital signature or electronic signature: which one does your document need?"
description: A typed name, a drawn squiggle and a clicked box are electronic signatures. A digital signature binds a person to an exact file. Here is how to choose.
date: 2026-10-01
tags: [digital-signature, guides]
cover: ../../assets/blog/digital-signature-vs-electronic-signature/contract-signature.jpg
coverAlt: A pen resting on a printed contract beside a signature line
credits:
  - file: contract-signature.jpg
    title: "Legal Contract & Signature - Warm Tones"
    author: "Blogtrepreneur"
    source: "https://commons.wikimedia.org/wiki/File:Legal_Contract_%26_Signature_-_Warm_Tones.jpg"
    licence: CC BY 2.0
    changes: "Resized"
faq:
  - q: "Is an electronic signature legally valid in Nepal?"
    a: "The Electronic Transactions Act, 2063 gives legal validity to a digital signature made by its procedures. Whether another kind of electronic mark is enough depends on the document and the law that governs it."
  - q: "Is clicking I agree a digital signature?"
    a: "No. Clicking a box records an action. It is not a digital signature, because it is not calculated from the document and a private key."
  - q: "Which is stronger as evidence?"
    a: "A digital signature, because it ties a named certificate holder to the exact bytes of one file, and any later change is detectable."
---

People use "electronic signature" and "digital signature" as if they were the same thing. They are not, and the difference decides how much a signature is worth when someone disputes it.

## Electronic signature: the broad idea

An electronic signature is any electronic mark that shows someone meant to sign. It can be:

- a name typed at the bottom of an email,
- a squiggle drawn on a touchscreen,
- a box ticked next to "I agree",
- a code typed in after it was sent by SMS.

All of these record that something happened. None of them, by themselves, join a particular person to a particular file in a way anyone can check afterwards.

## Digital signature: one specific kind

A digital signature is a kind of electronic signature built on cryptography. It is calculated from the document and a private key, and it comes with a certificate that names the holder of the key.

That gives it two properties the other kinds lack.

1. **It is tied to the exact file.** Change one character and the signature stops matching.
2. **It is tied to a named person.** The certificate says whose key it is and which authority checked.

## A comparison

| | Typed name or squiggle | Tick box | SMS code | Digital signature |
|---|---|---|---|---|
| Shows intent to sign | Yes | Yes | Yes | Yes |
| Tied to the exact file | No | No | No | Yes |
| Change after signing is detectable | No | No | No | Yes |
| Names a verified person | No | No | Only a phone | Yes |
| Can be checked by a third party | No | No | No | Yes |

## Choosing

Ask what you will have to prove if the document is disputed.

- If it is a low-stakes acknowledgement, a tick box may be enough.
- If it is a loan, a contract or anything where the other side might later say "that is not what I signed" or "that was not me", you want a signature that is tied to the file and to a person.

Then ask what the law needs. In Nepal, Section 5 of the Electronic Transactions Act, 2063 gives legal validity to a digital signature made by the procedures in the Act. It is the route the law spells out for a document that must be signed.

For why an SMS code is a weak substitute in a loan dispute, see [OTP or digital signature](/blog/otp-or-digital-signature-loan-disputes).
