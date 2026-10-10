---
title: "What a digital signature is, and what it is worth in Nepal"
description: A digital signature is mathematics, not a picture of your name. How the two keys work, what a certificate adds, and what Section 5 of the Act says.
date: 2026-09-29
tags: [digital-signature, guides]
faq:
  - q: "Is a digital signature the same as a scanned signature?"
    a: "No. A scanned signature is a picture and can be pasted onto any document. A digital signature is calculated from the document and a private key, so it fits that document only."
  - q: "Is a digital signature legal in Nepal?"
    a: "Section 5 of the Electronic Transactions Act, 2063 gives a digital signature legal validity where the law requires a signature, when it is made by the procedures in the Act and its Rules."
  - q: "Who can issue a digital signature certificate in Nepal?"
    a: "Only a licensed or recognised certifying authority under the Act. ePahichan certificates are issued by Nepal Certifying Company."
---

A signature on paper is a picture of a hand movement. You can photocopy it, scan it and paste it onto another page. To tell a real one from a copy you need an expert, and the expert is not always sure.

A digital signature works differently. It is not a picture of anything. It is a value calculated from two things: the document, and a secret key that only the signer holds. That is why it can be checked by anyone and forged by no one.

## The two keys

A digital signature uses a pair of keys that are made together.

- The **private key** stays with the signer. It is the only thing that can create their signature.
- The **public key** can be handed to anyone. It cannot create a signature. It can only check one.

When you sign a PDF, software first reduces the file to a short fingerprint, called a hash. The private key then signs that fingerprint. The result is attached to the file.

When someone opens the file, their software repeats the first step, reducing the file to a fingerprint, and uses your public key to check the signature against it. If the two match, the file is the one you signed. If a single character has changed, the fingerprints differ and the check fails.

Two things follow from this, and both are worth saying plainly.

1. **A change is caught.** Nobody can alter a signed file and keep the signature valid.
2. **The check needs nobody's permission.** It needs the file, the signature and the public key. It does not need a call to the signer, or to the company whose app made the signature.

## What a certificate adds

Anybody can generate a key pair in a few seconds. A key pair on its own does not say whose it is. A signature that checks out only tells you that somebody with the private key signed.

A **digital signature certificate** closes that gap. A certifying authority checks the person's identity and then signs a statement: this public key belongs to this person. The certificate travels with the signature, so whoever opens the file can see who signed and which authority vouched for them.

In Nepal, the Electronic Transactions Act allows only a licensed or recognised certifying authority to issue these certificates. ePahichan certificates are issued by Nepal Certifying Company (NCC).

## What the law says

Section 5 of the Electronic Transactions Act, 2063 is titled "Legal Recognition of Digital Signature". In plain words it says this. Where the law requires a document to be signed, a digital signature also has legal validity, provided it was made by the procedures stated in the Act and the Rules made under it.

The condition at the end matters. The Act does not say that every digital mark is a valid signature. It says a digital signature made by the prescribed procedure is.

The Act also does not cover every kind of document. Deeds that transfer title to land, wills and negotiable instruments are among the things outside it. We list them in [documents you cannot sign digitally in Nepal](/blog/documents-not-signed-digitally-nepal).

## What it does not do

A digital signature shows who signed what. It does not show when. Time has to come from somewhere else, and we explain how in [what a signature does not prove](/blog/what-a-digital-signature-does-not-prove).

## Where to start

If you want to see the mechanics, you can [make and break a signature in your browser](/how-signing-works). If you want a certificate of your own, the [ePahichan app](/products/app) applies for one with your citizenship document and a selfie.
