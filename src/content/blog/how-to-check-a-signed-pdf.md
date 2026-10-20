---
title: "How to check that a signed PDF is genuine and unchanged"
description: A signed PDF is only worth something if it verifies. What a signature check looks at, what a pass and a fail mean, and what a check cannot tell you.
date: 2026-10-06
tags: [digital-signature, guides]
cover: ../../assets/blog/how-to-check-a-signed-pdf/keyboard-and-pen.jpg
coverAlt: A pen lying across a laptop keyboard
credits:
  - file: keyboard-and-pen.jpg
    title: "Keyboard and pen"
    author: "Ala z"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Ala_z"
    source: "https://commons.wikimedia.org/wiki/File:Keyboard_and_pen.JPG"
    licence: Public domain
    changes: "Resized"
faq:
  - q: "Do I need the signer's permission to check a signature?"
    a: "No. Checking needs the file, the signature and the signer's public key, which is inside their certificate."
  - q: "What does a failed check mean?"
    a: "Either the file was changed after it was signed, or the signature does not belong to this file. Treat the document as not the one that was signed."
  - q: "Does a pass prove the document is true?"
    a: "No. It proves the file is the one the certificate holder signed and has not changed. It does not prove the contents are accurate."
---

Receiving a signed PDF is not the same as receiving a *valid* signed PDF. The value is in the check. Here is what a check actually looks at.

## Three questions

A signature check answers three separate questions.

1. **Does the signature match the file?** The software calculates the file's fingerprint and compares it with what the signature covers. If one byte differs, this fails.
2. **Whose key made it?** The certificate inside the signature names the holder and carries their public key.
3. **Can the certificate be trusted?** The certificate was issued by a certifying authority. The check confirms the authority is one your software trusts and that the certificate was valid.

All three have to pass. The first one is purely mathematical. The other two are about trust.

## What a pass tells you

- The file is exactly what the certificate holder signed.
- The holder is the person the certificate names, as vouched for by the authority.
- Nobody has altered the signed content since.

## What a fail tells you

A failure of the first question means the content is different from what was signed. The cause is usually one of these.

- The PDF was edited after signing.
- The file was damaged in transfer.
- The signature was copied from another document.

You cannot tell which from the failure alone. What you can say is that this file is not the signed one.

## What a check cannot tell you

- **When it was signed.** A signature does not carry a reliable time on its own. See [what a digital signature does not prove](/blog/what-a-digital-signature-does-not-prove).
- **Whether the contents are true.** The signer vouches that they signed, not that every statement in it is correct.
- **Whether the document is of a kind the Act covers.** Some documents are excluded. See [documents you cannot sign digitally](/blog/documents-not-signed-digitally-nepal).

## Try the mechanics

You can see all of this without installing anything. On our [signing demo](/how-signing-works), two people sign a sentence. Edit one letter and watch both signatures fail. The check is real cryptography running in your browser, with the keys made fresh on your device.
