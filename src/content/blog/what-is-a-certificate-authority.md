---
title: "What a certificate authority is, and why a digital signature needs one"
description: A certificate authority checks who you are and vouches for your signing key. How trust chains work, why they matter, and what to look for in Nepal.
date: 2026-10-13
tags: [digital-signature, guides]
cover: ../../assets/blog/what-is-a-certificate-authority/archives-server-room.jpg
coverAlt: Server racks in the server room at The National Archives in the UK
credits:
  - file: archives-server-room.jpg
    title: "A view of the server room at The National Archives"
    author: "The National Archives (UK)"
    source: "https://commons.wikimedia.org/wiki/File:A_view_of_the_server_room_at_The_National_Archives.jpg"
    licence: CC BY 3.0
    changes: "Resized"
faq:
  - q: "What is a certificate authority?"
    a: "A certificate authority, called a certifying authority in Nepal's law, is an organisation that checks a person's identity and then signs a certificate stating that a public key belongs to them."
  - q: "Why does a digital signature need a certificate authority?"
    a: "A signing key alone only proves that two documents were signed by the same key. The certificate authority is what ties that key to a real, verified person."
  - q: "What happens if a certificate authority cannot be trusted?"
    a: "Every certificate it issued becomes doubtful. That is why authorities are licensed, audited and required to keep strict records, and why software checks the chain back to a trusted root."
---

A digital signature is built from mathematics. A private key makes the signature, and a matching public key checks it. The mathematics is excellent. It can tell you, with certainty, that a document has not changed and that it was signed by whoever holds a particular key.

What it cannot tell you is who that is.

Anyone can make a key pair in a few seconds and put any name they like next to the public key. A signature from "Ram Sharma" made with a key anyone created is exactly as mathematically valid as one made with a key that really belongs to Ram Sharma. The gap between a key and a person is the problem a certificate authority exists to close.

## What a certificate authority does

A certificate authority, called a certifying authority in Nepal's law, does two jobs.

First, it checks a person. It looks at identity documents, confirms the person is who they say they are and, for stronger certificates, confirms they are present or verified against a trusted record.

Second, it signs a statement. That statement, the **certificate**, says in effect: "This public key belongs to this verified person, and I vouch for it until this date."

The certificate travels with the signature. When someone opens a signed PDF, their software can read it and see who signed, which authority vouched for them, and for what period.

The authority is the third party in the arrangement. You do not have to know the signer personally. You only have to trust the authority that checked them.

## Trust chains

An authority's signature on a certificate is only useful if you can trust the authority. How do you know it is trustworthy?

Authorities are arranged in a chain. At the top is a **root**, whose certificate is trusted by software because it was installed that way or, in a national scheme, because the country designated it. The root signs certificates for authorities beneath it, and those authorities sign certificates for people and organisations.

Checking a signature means walking up that chain:

1. The signer's certificate is signed by an authority.
2. That authority's certificate is signed by another, or by the root.
3. The chain ends at a root that your software already trusts.

If every link is intact and valid, the whole chain holds. If any link is broken, expired or revoked, the signature is flagged. This is the check that your PDF reader performs when it shows a green tick or a warning next to a signature.

## Why the root matters

The root is the anchor of all of it. If the root is compromised, everything beneath it is in doubt.

That is why roots are guarded carefully. They are kept offline, used rarely and managed under strict procedures with records of every use. It is also why a country sets one up deliberately. A national root gives courts, banks and government offices one place to look when deciding whether a certificate can be relied on.

In Nepal, the digital signature rules are set by the Electronic Transactions Act, 2063. Only a licensed or recognised certifying authority may issue certificates, and the Office of the Controller of Certification oversees them. ePahichan certificates are issued by Nepal Certifying Company (NCC), a licensed certifying authority. See [what a digital signature is worth in Nepal](/blog/what-is-a-digital-signature-nepal) for the legal side.

## What an authority is promising

When an authority issues a certificate, it is making several promises that matter later.

- **It checked the person.** The identity behind the key was verified under a defined process, not simply typed in a form.
- **It will record what it did.** Records of the verification are kept for as long as the law requires.
- **It will revoke on request.** If a key is lost, stolen or misused, the owner can have the certificate revoked, and the authority publishes that fact so it can be checked.
- **It protects its own keys.** The keys it signs with are stored in hardware and handled under controls.

Each promise is something a verifier is relying on without being able to see it. That is why the authority has to be licensed and audited, and not just anyone with a server.

## Revocation and expiry

Certificates do not last forever. Each has an end date, usually one or two years out, and may be revoked sooner.

Software checks both. A signature made while the certificate was valid usually stays valid as a record, but only if the time of signing can be shown, which is the job of a trusted timestamp. Our posts on [what a digital signature does not prove](/blog/what-a-digital-signature-does-not-prove) and [what happens to a signature after the certificate expires](/blog/signature-after-certificate-expires) explain why that distinction matters.

## What can go wrong

Understanding the chain also shows where it can fail.

- **A weak identity check.** If the authority checks identity carelessly, the certificate says less than it appears to.
- **A stolen key.** If someone obtains the private key, they can sign as the owner until the certificate is revoked. This is why keys are protected by a PIN, a device or hardware.
- **An untrusted authority.** A certificate from an authority your software does not recognise will show a warning, even if the signature itself is sound.
- **A self-signed certificate.** Anyone can sign their own certificate. It proves nothing about who they are, which is why you should not mistake it for a certificate from an authority.

## What to look for

When you are given a signed document, or choosing a service that signs documents for you, a few questions are worth asking.

- Who is the certifying authority, and is it licensed?
- How was the signer's identity checked?
- Can I see the certificate, including its issuer and dates?
- What happens if a certificate needs to be revoked?
- Is a trusted timestamp included?

A good provider can answer each of these plainly. For a walkthrough of checking a document yourself, see [how to check a signed PDF](/blog/how-to-check-a-signed-pdf).

## The short version

A digital signature proves that a document is unchanged and was signed by a particular key. A certificate authority is the reason that key means a particular person. It checks who someone is, vouches for their key in a certificate, and sits in a chain of trust that ends at a root everyone agrees to rely on.

Without the authority, a signature is a lock with no way to know whose key it is. With one, it becomes something a bank, a court or an employer can reasonably rely on.
