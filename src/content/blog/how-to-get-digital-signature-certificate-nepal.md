---
title: "How to get a digital signature certificate in Nepal: what to prepare and what happens next"
description: "Who can issue a digital signature certificate in Nepal, what documents to prepare, how identity is checked, and how to avoid the usual delays."
date: 2026-10-14
tags: [digital-signature, guides]
cover: ../../assets/blog/how-to-get-digital-signature-certificate-nepal/usb-token.jpg
coverAlt: An eToken NG-OTP USB token, the kind of hardware that stores a signing key
credits:
  - file: usb-token.jpg
    title: "EToken NG-OTP"
    author: "Kharitonov"
    source: "https://commons.wikimedia.org/wiki/File:EToken_NG-OTP.jpg"
    licence: CC BY-SA 3.0
    changes: "Resized"
faq:
  - q: "Who issues digital signature certificates in Nepal?"
    a: "Only a certifying authority licensed or recognised under the Electronic Transactions Act, 2063. The Office of the Controller of Certification licenses and oversees them. ePahichan certificates are issued by Nepal Certifying Company (NCC)."
  - q: "What documents do I need to get a digital signature certificate?"
    a: "For a person, a valid identity document such as a citizenship certificate or passport, a working mobile number and email, and a way to prove you are the person on the document. In the ePahichan app that proof is a selfie checked against the document. An organisation certificate also needs papers that show the organisation exists and that you are allowed to sign for it."
  - q: "How long does it take to get a digital signature certificate?"
    a: "Most of the time is spent on identity checks, and most delays come from documents that do not match. If your name, date of birth and photo are clear and consistent, the process is short. If they are not, it waits until they are."
  - q: "Can I get a digital signature certificate without visiting an office?"
    a: "It depends on the route. Traditional certificates on a USB token often involve handing over documents in person. The ePahichan app is built so you can apply from your phone with your citizenship document and a selfie."
  - q: "What happens when my certificate expires?"
    a: "You can no longer make new signatures with it and you need a new certificate. Documents you signed while it was valid do not become invalid just because it later expired."
  - q: "Can someone else apply for a certificate in my name?"
    a: "They should not be able to. The identity check exists to stop exactly that, and your signing key is created on your own device. Never share your phone unlock, PIN or token password with anyone, including staff who say they are helping you."
---

People usually go looking for a digital signature certificate in a hurry. A bank has asked for one. A tender closes on Friday. A foreign client wants a signed contract and will not accept a scan. An office has said, politely, that the paper copy you brought is no longer how they do things.

So the first question is almost always the same: how do I get one, and how long will it take?

This guide answers that as plainly as we can. It explains who is allowed to issue a certificate in Nepal, what you should prepare before you start, what the identity check is actually looking for, where your signing key ends up living, and the small mistakes that turn a short job into a week of back and forth. It does not try to sell you a particular route. Near the end we explain how the ePahichan app does it, so you can compare.

If you are not yet sure what a digital signature is or what it is worth in law, start with [what a digital signature is, and what it is worth in Nepal](/blog/what-is-a-digital-signature-nepal). This post assumes you already know you need one.

## First, what you are actually getting

A lot of confusion comes from the word "signature". You are not getting a picture of your handwriting. You are getting two things that work together.

The first is a **signing key**. It is a long secret number, created for you, that is used to make signatures. Nobody else should ever have it. Whoever holds it can sign as you.

The second is a **certificate**. It is a small electronic document, signed by a certifying authority, that says in effect: "this public key belongs to this person, and we checked." The certificate is public. You attach it to everything you sign, so that anyone can check who signed.

The key does the signing. The certificate does the vouching. Getting a digital signature certificate means two things. A key is made that only you control, and a licensed authority confirms, after checking you, that the key is yours.

Everything in the process exists to make that confirmation trustworthy. That is why it asks for documents, why it checks your face, and why it insists the key never leaves your control. None of it is bureaucracy for its own sake. If the check is weak, the certificate is worth nothing, and so is every signature made with it.

We explain the vouching side in more depth in [what a certificate authority is](/blog/what-is-a-certificate-authority).

## Who can issue one in Nepal

Not anyone. In Nepal, digital signatures are governed by the Electronic Transactions Act, 2063 and the Rules made under it. The Act allows only a certifying authority that is licensed or recognised under it to issue certificates. The Office of the Controller of Certification licenses these authorities, sets the rules they work under, and oversees them. It also runs the national root that every licensed authority's own certificate chains back to.

This matters for one practical reason. A certificate only carries the weight the Act gives it if it comes from a licensed authority. A certificate you make yourself with free software, or one from an authority that is not licensed in Nepal, may still produce a mathematically valid signature, but it will not be what a Nepali office, bank or court is looking for when it asks for a digital signature.

So before you pay anyone, ask one question: which licensed certifying authority issues this certificate? A provider that cannot answer clearly is a provider to walk away from.

ePahichan certificates are issued by Nepal Certifying Company (NCC), a licensed certifying authority. ePahichan is the app you use to apply and sign. The authority is the one that checks you and issues the certificate.

## Individual or organisation: decide before you start

The most common wasted trip is applying for the wrong kind of certificate.

An **individual certificate** says who you are as a person. It is the right choice when you sign for yourself: your own employment contract, a rental agreement, a loan you are taking personally, a form you submit as a citizen.

An **organisation certificate**, or a certificate that names you together with the organisation you sign for, is the right choice when the signature is the company's act rather than yours. A director signing a supply contract, a finance officer signing a bid, an HR head signing appointment letters on behalf of the company.

The difference shows up later, when someone checks the signature. A contract that should bind a company, signed with a certificate that only names a private person, invites the very argument a signature is meant to prevent: "he signed, but did he sign for us?"

If you are not sure, ask the party who wants your signature what they expect to see on it. Banks and procurement offices usually know exactly what they need, and it is far cheaper to ask them first than to get the wrong certificate and start again.

## What to prepare before you start

Most applications that stall do so for a boring reason. A document is unclear, a name is spelt two ways, or a photo does not match the face. An hour of preparation saves days.

### For an individual

You will need:

- **A valid identity document.** In Nepal this is most often the citizenship certificate. A passport is the other common choice. Check that it is the one you will keep using, because the name on your certificate will follow it.
- **A mobile number you control and will keep.** It is used to reach you and, in most modern flows, to confirm it is you at the start. A number registered in someone else's name, or one you are about to give up, causes trouble later.
- **An email address you actually read.** Notices about your certificate, including expiry, are sent there.
- **A way to prove you are the person on the document.** Traditionally this was done by appearing in person. In the ePahichan app it is a selfie that is compared with the photo on your document.

### For an organisation

On top of the personal items above, expect to show:

- **That the organisation exists.** Usually its registration certificate, and often its PAN or VAT registration.
- **That you are allowed to sign for it.** A board resolution, an authorisation letter on letterhead, or similar, naming you and what you may sign.
- **Who the organisation's contact person is,** if that is not you.

The exact list varies by certifying authority and by the class of certificate, so check before you go. But if you have these ready, you will rarely be asked for something you cannot produce.

### Check that everything agrees

Before you submit anything, lay your documents side by side and compare them carefully:

- Is your name spelt the same way everywhere? Romanised Nepali names are a common source of trouble. "Shrestha" on one paper and "Shreshtha" on another is enough to stop an application.
- Is the date of birth the same? Watch for a Bikram Sambat date on one document and a converted Gregorian date on another that does not quite match.
- Is the photo on your citizenship certificate recognisably you? A certificate issued when you were sixteen can be hard to match against your face at forty. It still works in most cases, but if it is badly faded or damaged, say so early.

Fixing a mismatch before you apply takes minutes. Fixing it after the check has failed means starting the conversation again.

## What the identity check is really looking for

People sometimes treat the identity check as a formality to be got through. It is the opposite. It is the whole point.

When a certifying authority issues you a certificate, it is putting its own name behind a statement: this key belongs to this person. If it later turns out that someone else applied using your citizenship copy, every document signed with that certificate is in doubt, and so is the authority's word. So the check is designed to answer three questions.

**Is the document genuine and readable?** Can the details be read clearly, and does the document look like what it claims to be?

**Is the person applying the person on the document?** This is the face comparison. In person, an officer looks at you and the photo. In an app, a selfie is compared with the document photo, and a liveness step checks that the selfie is a real person in front of the camera, not a photo held up to it.

**Is this the person who will control the key?** The key should be created on your device, by you, at the time you apply, so that from its first moment it is under your control.

A few practical tips make the check go smoothly:

- Photograph your document on a dark, plain surface, in daylight, without glare. Tilt it slightly if the lamination reflects.
- Take your selfie facing a window, not with a window behind you. Remove sunglasses and anything covering your face.
- Do it yourself, on your own phone. Do not let an agent or a shopkeeper "help" by doing it on theirs.

That last point deserves its own section.

## Do not let anyone else hold your key

Here is a scene that is more common than it should be. A busy owner asks an office assistant, an accountant or a computer shop to "sort out the digital signature". The helper applies, gets the USB token, keeps the password in a notebook, and signs things for the owner whenever needed.

It feels efficient. It quietly destroys the value of the signature.

A digital signature says that the person named on the certificate signed. If your accountant holds your key, then every signature made with it says you signed something you may never have seen. If the relationship goes wrong, or the token goes missing, you cannot say "it wasn't me", because the whole design of the system says it was.

The rule is simple and has no exceptions. The key is yours alone. Nobody else should know your token password or PIN, or be able to unlock your phone to sign. If someone needs to sign on behalf of a company, they should get their own certificate, with their own authority written down, not borrow yours.

## Where your key lives: token, file or phone

There are three common places a signing key can live, and the choice matters more than people expect.

**On a USB token.** This is the traditional form. The key is created inside a small hardware device and cannot be copied out of it. You plug the token into a computer and type a password to sign. It is strong protection, as long as you keep the token safe and the password private. The weak points are practical. Tokens get lost, left plugged in, or passed around the office. They also need drivers and a computer, which makes signing on the move awkward.

**In a file on a computer.** Some certificates are delivered as a file protected by a password. This is convenient and much weaker. Files can be copied without anyone noticing, and a copied key is a stolen identity. If you are offered this form, ask whether a hardware-backed option is available.

**In your phone's secure hardware.** Modern phones contain a protected chip area designed to keep keys from ever being exported. A key created there stays on that phone, and signing is unlocked with your fingerprint or face. This is how the ePahichan app works. Your signing key is created on your phone, kept in its secure hardware, and never leaves it. ePahichan cannot read it.

Whichever you choose, the question to ask is the same: can this key be copied without me knowing? If the answer is yes, treat it as you would a signed blank cheque.

## Paying, and what the price includes

Prices for certificates vary by authority, by class, by validity period and by whether hardware such as a token is included. We are not going to quote other providers' prices, because they change and a stale number does more harm than good. What we can tell you is what to ask so that you are comparing like with like:

- How long is the certificate valid for?
- Is a token or any other hardware included, or is it extra?
- Is renewal a new full application, or a shorter process?
- If my phone or token is lost, what does replacement cost and how long does it take?
- Is there any charge to verify or to sign, or only for the certificate?

For the published price lists we could find, by class and validity, see [digital signature certificate price in Nepal](/blog/digital-signature-certificate-price-nepal).

In the ePahichan app, the fee is shown before you pay, and you pay through Fonepay or a bank or wallet app.

## How long it takes, and why it sometimes takes longer

When everything is in order, getting a certificate is not a long process. The time goes into one place: checking that you are you. That check is quick when your documents are clear and consistent, and slow when they are not.

The usual causes of delay, in rough order of how often we see them:

1. **A name or date mismatch** between documents, or between the document and what was typed into the form.
2. **An unreadable document photo:** glare, blur, a cropped edge, or a thumb over the number.
3. **A selfie that cannot be matched:** poor light, a covered face, or a very old document photo.
4. **The wrong certificate type,** usually an individual certificate where an organisation one was needed.
5. **Missing authority to sign** for an organisation, such as an authorisation letter that does not name the person applying.

None of these is hard to fix. All of them are easier to fix before you start.

## After you have it: the first week

Once your certificate is issued, a few small habits will save you trouble later.

**Make a test signature.** Sign a harmless document and open it in a PDF reader. Check that your name appears correctly and that the signature shows as valid. Our guide on [how to check a signed PDF](/blog/how-to-check-a-signed-pdf) walks through what the reader is telling you.

**Note the expiry date somewhere you will see it.** A certificate that expires the week a tender closes is a common and avoidable crisis. Signatures you already made stay valid, as we explain in [is a digital signature still valid after the certificate expires?](/blog/signature-after-certificate-expires), but you cannot make new ones.

**Know what you cannot sign digitally.** Some documents remain outside the Act. Before you rely on a digital signature for property, wills or similar documents, read [documents you cannot sign digitally in Nepal](/blog/documents-not-signed-digitally-nepal).

**Tell the people who need to know.** If your company is moving HR letters or contracts to digital signing, let staff know what a genuine signed document looks like, so they can spot one that is not.

## If something goes wrong

**You lose the phone or token.** Ask for the certificate to be revoked as soon as you can. Revocation tells everyone checking signatures that the key should no longer be trusted from that moment. Then apply for a new one. Signatures made before the loss are not undone.

**You suspect someone else has used your key.** Treat it as urgent. Revoke first, then work out what was signed. This is exactly the situation the rule about never sharing your key is meant to prevent.

**Your name changes, or you leave the organisation you signed for.** Your certificate no longer describes you accurately. Ask for it to be revoked and get one that does.

## How it works in the ePahichan app

If you want to compare routes, here is what applying looks like with ePahichan, start to finish:

1. **Install the app** and sign up with your mobile number.
2. **Photograph your citizenship document** and take a selfie. The certifying authority checks that you are the person on the document.
3. **Your signing key is created on your phone,** inside its secure hardware. It never leaves the phone.
4. **Pay the fee** through Fonepay, or a bank or wallet app.
5. **Once the certificate is issued, sign.** Open a PDF, or photograph a paper page, and sign with your fingerprint or face. You can also send a document to other people and see who has signed.

There is no token to carry and no driver to install, and the key cannot be passed around an office because it is tied to your phone and your fingerprint.

If you would rather see the mechanics before you apply, you can [make and break a signature in your browser](/how-signing-works). When you are ready, [the ePahichan app](/products/app) is where you start.

## A short checklist

Before you apply for a digital signature certificate in Nepal:

- Decide: individual, or signing for an organisation?
- Confirm the provider names a licensed certifying authority.
- Have your citizenship certificate or passport ready, clean and readable.
- Check that your name and date of birth match across every document.
- Use a mobile number and email that are yours and that you will keep.
- For an organisation, have its registration papers and a written authority naming you.
- Do the application yourself, on your own device.
- Decide where the key will live, and make sure it cannot be copied.
- After issue: make a test signature and note the expiry date.

A digital signature certificate is a small thing to get and a large thing to have. It is your name, in a form that can travel anywhere and be checked by anyone. Taking an hour to get it right at the start is the best way to make sure it carries that weight for as long as you need it.
