---
title: "Adding signing to your application: requests, webhooks and safe retries"
description: How a signing integration is shaped. Create a request from your server, receive a webhook when it is signed, and make retries safe. Written for developers.
date: 2026-10-10
tags: [developers, digital-signature]
faq:
  - q: "Should the browser or mobile app call the signing API directly?"
    a: "No. Call it from your server. API credentials in an app can be extracted and misused."
  - q: "What happens if my server retries a request?"
    a: "A request made safe to repeat returns the original instead of creating a second one, so the signer is not asked twice."
  - q: "Why use a webhook instead of polling?"
    a: "Signing happens on the signer's time. A webhook tells your server the moment it is done, so you do not keep asking."
---

If your product has a moment where a customer must agree to a document, such as a loan, a policy or a contract, a signing API lets you put a legal signature into that moment without building the cryptography. The shape is the same in most systems, and it is worth understanding before you write any code.

## The three steps

1. **Create a request.** Your server tells the signing service who must sign and which documents.
2. **The signer signs.** The service reaches the signer, for example by a code on their phone, and collects the signature.
3. **You are told.** The service sends your server a webhook. You fetch the signed PDF and store it with the record.

In ePahichan's Signing API the first step is one call:

```js
await epahichan.signingRequests.create({
  signer: { name: 'Sita Sharma', phone, kyc },
  documents: [
    Documents.certificateApplication(),
    Documents.agreement(loanPdf),
  ],
});
```

## Call from your server

Credentials belong on your server. Anything shipped inside a mobile app or a web page can be read by the person holding it. Your app should talk to your backend, and your backend should talk to the signing service.

## Treat the webhook as a message, not a command

A webhook is an HTTP request your server receives. Three rules keep it safe.

- **Check it is genuine.** Verify the signature or secret the service gives you before you act.
- **Expect duplicates.** Services retry deliveries. Your handler should do the same work once even if the message arrives twice.
- **Acknowledge fast.** Return a success response quickly and do slow work afterwards.

## Make retries safe

Networks fail. Your server sends a request and the connection drops. Did the service receive it? You cannot know, so you retry. Without protection a retry creates a second signing request, and the customer gets asked twice.

The fix is an **idempotency key**: a unique value you send with the request. If the service sees the same key again, it returns the original request instead of creating a new one. In ePahichan's API, requests are safe to repeat in this way.

## Test before you go live

A sandbox with test keys lets you build and test the whole flow without a real signer or real certificates. Sandbox signatures are not legal signatures, and they should never be stored as if they were.

## What to store

Keep the signed PDF with the loan or policy record. Store the request ID so you can reconcile. If you ever need to prove the signature, the PDF itself can be checked by anyone, as explained in [how to check a signed PDF](/blog/how-to-check-a-signed-pdf).

The product page has the specifics: [Signing API](/products/signing-api). Terms used here are defined in the glossary: [webhook](/glossary/webhook), [idempotency](/glossary/idempotency).
