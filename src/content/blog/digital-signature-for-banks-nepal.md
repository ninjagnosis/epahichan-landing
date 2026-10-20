---
title: "How Nepali banks use digital signatures: NRB rules, eKYC and account opening"
description: "What Nepal Rastra Bank requires for identity and account opening, how banks do eKYC today, and where a digital signature fits in the bank's own paperwork."
date: 2026-10-26
updated: 2026-10-26
draft: false
tags: [banks, digital-signature]
cover: ../../assets/blog/digital-signature-for-banks-nepal/rbb-branch.jpg
coverAlt: Rastriya Banijya Bank building, a block of orange brick with bank signs
takeaways:
  - "Nepal Rastra Bank's rule since 14 January 2025 is that banks verify new customers against National ID records and open accounts on the card or its number. The rule does not ask for a digital signature."
  - "Banks can open accounts remotely. Global IME uses an online form and a video call, and NMB opens savings accounts by video with a debit limit of Rs 2 million a month."
  - "The Controller of Certification's guidelines give banks a role in digital signing. A bank can pass a customer's KYC to a certifying authority, which then issues a certificate without a video check, within 24 hours of the KYC."
  - "A digital signature is valid under Section 5 of the Electronic Transactions Act, but Section 40 lets banks decide what they accept. Cheques, mortgage deeds and bonds are excluded by Section 77."
  - "For loans, an OTP shows a phone received a code. A digital signature ties the named borrower to the exact agreement. The two do different jobs."
credits:
  - file: rbb-branch.jpg
    title: "Rastriya Banijya Bank"
    author: "Ganesh Paudel"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Ganesh_Paudel"
    source: "https://commons.wikimedia.org/wiki/File:Rastriya_Banijya_Bank.JPG"
    licence: CC BY-SA 3.0
    changes: "Resized"
  - file: adbl-office.jpg
    title: "Agricultural Development Bank Limited (ADBL) 01"
    author: "Sandeep Raut"
    authorUrl: "https://commons.wikimedia.org/wiki/User:Sandeep_Raut"
    source: "https://commons.wikimedia.org/wiki/File:Agricultural_Development_Bank_Limited_(ADBL)_01.jpg"
    licence: CC BY-SA 4.0
    changes: "Resized"
faq:
  - q: "Does Nepal Rastra Bank require banks to use digital signatures?"
    a: "Not in the notices and circulars we could read. What it requires is identity checks: verification against National ID records, mobile number checks and screening against government lists. A digital signature is legally valid under Section 5 of the Electronic Transactions Act, but each bank decides what it accepts under Section 40."
  - q: "Is the National ID mandatory to open a bank account?"
    a: "Since 14 January 2025 banks must open new accounts on the details in the National ID records, using the card or its number. There are exceptions, such as accounts for government social security payments and accounts for children under 16. Later notices ask banks to collect a declaration from existing customers about whether they hold a National ID."
  - q: "Can I open a bank account without visiting a branch?"
    a: "Some banks allow it. Global IME offers online application with a video KYC call, with a branch visit if you prefer. NMB offers video account opening to people in Nepal and abroad, with a debit limit of Rs 2 million a month and no credit limit. Cards and cheque books still need a branch visit."
  - q: "Can a bank sign loan agreements with a digital signature?"
    a: "A loan agreement is a contract, so Section 5 of the Electronic Transactions Act covers it. A mortgage deed or bond is excluded by Section 77 and stays on paper. See our post on OTP and digital signatures in loan disputes for the evidence side."
  - q: "What is the bank's role when a customer gets a digital signature certificate?"
    a: "Under the Controller of Certification's Identity Verification Guidelines, a bank can submit a customer's KYC directly to a certifying authority after getting the customer's consent. The authority must receive that KYC within 24 hours before each certificate it issues, and video verification is not mandatory on that route."
---

A bank branch is where a lot of Nepal's identity paperwork ends up. A customer brings a citizenship certificate, a photo, a signature specimen and a phone number. Staff check them and type them in. Increasingly the same steps happen on a phone, with a National ID number and a video call.

So where does a digital signature fit? This post goes through Nepal Rastra Bank (NRB) notices, the Electronic Transactions Act, the Controller of Certification's guidelines and what some banks publish about their own process. It separates three things that people mix up: checking who a customer is (eKYC), getting the customer's agreement (OTP, click or signature), and signing a document in a way that can be verified later (digital signature).

For the loan side, we already have a separate piece, [OTP or digital signature: what you can prove when a borrower disputes a loan](/blog/otp-or-digital-signature-loan-disputes). This post does not repeat it.

## Three jobs that get confused

| Job | Question it answers | Typical tool in Nepal today |
|---|---|---|
| Identify | Who is this person? | Citizenship certificate, National ID number, video call, photo match |
| Authenticate | Is this the same person returning? | PIN, password, OTP to a registered phone |
| Sign | Did this named person agree to this exact document? | Digital signature with a certificate |

NRB's notices we found are about the first two. They say a lot about identity and little about signing.

## The law that frames it

The Electronic Transactions Act, 2063 has five provisions that bear directly on banks. The text is on the [UNODC legal library](https://sherloc.unodc.org/cld/uploads/res/document/the-electronic-transactions-act-_html/Nepal_Electronic_Transactions_Act.pdf). We covered the general rules for tax and customs offices in [using a digital signature for tax and customs](/blog/ird-customs-digital-signature-nepal), so we keep to the bank-specific parts here.

- **Section 5.** Where a law requires a signature, a digital signature made under the Act and Rules has legal validity.
- **Section 39(2).** Where a law provides for filing a form, getting a licence or paying money at a government agency or a bank or financial institution, it may be done electronically, and cannot be denied validity only for being electronic.
- **Section 40.** A bank or financial institution "may also accept" electronic documents and payments. It cannot be compelled to accept an electronic document, except in conditions and for institutions that the Rules prescribe.
- **Section 41.** Where a person must sign for a bank, the Government of Nepal "may, if it thinks appropriate" allow a digital signature instead, and may add security procedures.
- **Section 77.** The Act does not apply to negotiable instruments, deeds of will, mortgage, bond, conveyance or partition, documents showing title to immovable property, powers of attorney, and court or arbitration pleadings.

In plain terms, a bank is allowed to accept a digital signature and is not forced to. Each bank sets its own policy. Our post on [which documents cannot be signed digitally](/blog/documents-not-signed-digitally-nepal) explains Section 77 in more detail.

| Bank document | Digital signature under the Act? |
|---|---|
| Account opening form | Yes, as a form or contract |
| Loan agreement | Yes, it is a contract |
| Cheque | No, it is a negotiable instrument |
| Mortgage deed or bond | No, excluded by Section 77 |
| Power of attorney | No, excluded by Section 77 |

This is a plain reading for orientation. For a specific instrument, ask your lawyer.

## What NRB requires on identity

### The National ID directive

On 9 January 2025 NRB issued an amended unified directive. [Republica reported](https://myrepublica.nagariknetwork.com/news/national-id-card-made-mandatory-to-open-bank-accounts-from-january-14-677fe72dafa50.html) that banks must arrange to open accounts on the details held in the National ID electronic record system from 14 January. The directive lets banks use electronic means to identify and verify a customer under Rule 3 of the regulations, with access to the electronic record of the customer's citizenship certificate or National ID.

[ShareSansar's report](https://www.sharesansar.com/newsdetail/national-identity-card-mandatory-for-opening-bank-accounts-from-magh-1-2025-01-09) adds that banks must update National ID details for accounts of senior public officials, and that banks must freeze assets and report to the financial intelligence unit when a listed person turns up. Republica adds that:

- An account to receive government social security payments need not be opened on the National ID. The bank must still verify identity at withdrawal.
- Banks must take steps to verify that a mobile number belongs to the customer.
- Banks must screen against individuals and groups notified by the Ministry of Home Affairs, freeze matching accounts, and tell NRB's money laundering supervision division within three days.

On 12 January, [Nepal News](https://english.nepalnews.com/s/business/nrb-instructs-bfis-to-ensure-national-identity-cards-for-account-opening/) reported that NRB issued a public notice urging banks to follow through. The National ID department had arranged issue through district administration offices and temporary camps in the Kathmandu Valley, and set up a portal to check a National ID number and application status. We cover what the card is and how many exist in [Nepal's national identity card and digital signing](/blog/national-id-card-digital-signature-nepal).

### The declaration drive for existing accounts

A later NRB notice, reported by [Ratopati](https://english.ratopati.com/story/70410/now-the-bank-will-ask-you-for-your-national-identity-card), tells banks to collect a self-declaration through a mobile app or other means by the end of Ashwin on whether an account holder has a National ID. Where they do, the bank must get and record the card or number. Account holders without a card are to be told to get one and update within six months, by the end of Poush. The notice says the card is not mandatory for opening accounts for children under 16. Ratopati's text is machine-translated, so check dates against your bank's notice.

### One KYC for many banks

The monetary policy for 2082/83 said customers' KYC details would be made available through the National ID, so that updating at one bank makes the update available to others. [Nepal News reported](https://english.nepalnews.com/s/business/one-time-kyc-update-now-valid-across-all-banks/) that customers had previously submitted a separate KYC form to each bank. The report quotes the policy: KYC details "will be facilitated through the National Identity Card", and a customer given a unique number once the KYC is submitted. We did not confirm that this system is running.

### Digital wallets

Wallets fall under the payment systems directive, not the bank account rules. [Biometric Update reported](https://www.biometricupdate.com/202607/nepal-makes-national-id-the-trust-layer-for-digital-payments) in July 2026 that an amendment to the 15th Integrated Payment System Directive requires licensed providers to verify applicants against the National ID database, with existing users to link by 17 October 2026. [ShareSansar](https://www.sharesansar.com/newsdetail/nepal-rastra-bank-introduces-national-id-requirements-for-digital-wallet-accounts-2026-09-22) reported the detail on 22 September 2026. Providers must collect a self-declaration of National ID status through the app by end of Ashwin 2083. Nepalis abroad can open wallets without a National ID and must provide it within 35 days of returning. People who cannot manage for themselves, people with disabilities and others in need can use other documents.

### The summary

| Date | NRB step | What banks do |
|---|---|---|
| 9 January 2025 (in force 14 January) | Amended unified directive on National ID | Verify new customers against National ID records. Open accounts on the card or number |
| 12 January 2025 | Public notice urging compliance | Use the portal to check a number and status |
| Monetary policy 2082/83 | One-time KYC through National ID | Announced. Running status not confirmed |
| July 2026 | Payment systems directive amendment | Wallets verify against National ID, with link deadline 17 October 2026 |
| Ashwin 2083 | Declaration drive for existing accounts | Collect self-declaration, then update number or card by Poush |

## What banks publish about account opening

A few banks describe their process on their own sites. These are bank statements, not NRB rules.

![An Agricultural Development Bank Limited building with two motorbikes passing in front](../../assets/blog/digital-signature-for-banks-nepal/adbl-office.jpg "An Agricultural Development Bank Limited building. Photo: Sandeep Raut, CC BY-SA 4.0")

| Bank | Process | Detail from the bank's page |
|---|---|---|
| [Global IME Bank](https://www.globalimebank.com/products/digital-account/online-account-opening/) | Online application, then video KYC | Upload National ID for residents, passport for NRNs, a signature specimen and a photo. Then a video call, or a branch visit if you prefer. Select digital services such as cards and mobile banking in the same application |
| [NMB Bank](https://nmb.com.np/en/products/saving-accounts/nmb-video-account-opening) | Video account opening, paperless | For people in Nepal or abroad. Uses AI. An original primary ID such as citizenship, voter ID, passport or driving licence. Debit limit of Rs 20 lakh a month, no credit limit. No branch visit needed, except to collect a card or cheque book. Not available if you already have an NMB account |
| NMB KYC update | Web form | Account number and mobile number, then an OTP |

Two things stand out. The "signature" a customer uploads in these flows is a specimen, an image kept for comparison, not a digital signature. And the video call is the identity step. Neither is described as a cryptographic signature on the agreement.

Global IME also explains in a [blog post on video KYC](https://www.globalimebank.com/blog/experience-seamless-banking-with-global-ime-banks-video-kyc/) that NRB has directed banks to follow KYC guidelines, so that a prospective customer's personal details are collected and the bank can identify its customers accurately.

One bank's public KYC and anti-money-laundering policy, [Everest Bank's 2025 policy](https://everestbankltd.com/wp-content/uploads/2025/03/KYC-AML-CFT-Policy-2025.pdf), says a customer account "shall be opened, or business relationships shall be established through electronic means as per the procedural guidelines". It lists the customer's National Identification Number among the basic information to acquire, and requires screening of persons whose accounts NRB or law enforcement agencies have blocked before onboarding.

## Where the bank meets digital signing: the certificate side

Banks use digital signatures in two ways. They can accept them from customers, which is the question of Sections 40 and 41. They can also help customers get one, and the Controller of Certification writes the rules for that.

The Controller's [Identity Verification Guidelines](https://giwmscdnone.gov.np/media/pages/files/identity_verification_guidelines_auyy9zb.pdf), version 1.0 of June 2022, bind the licensed certifying authorities. Section 2.4 sets a route called "Banking eKYC for Banking Customers". It applies to people who have a bank account, where the bank submits the customer's KYC to the certifying authority directly, after getting consent and authenticating the customer. Its main rules are:

| Rule | What the guideline says |
|---|---|
| Video | Video verification is not mandatory on this route |
| Agreement | The authority must have an agreement or undertaking with the bank |
| Bank identity | The authority verifies the bank's existence and authorised signatory, and checks the source of the request and the bank's signature before accepting KYC |
| Bank's certificate | The certificate the bank uses to sign is registered with the authority and mapped to the bank's name |
| KYC content | Name, address, photo, PAN or NID number, mobile number, bank account number |
| Mandatory fields | Mobile number, and the last four digits of the PAN or NID number |
| Freshness | For each certificate issued, the authority must have received the account holder's KYC from the bank within the last 24 hours |
| Mobile changes | The authority accepts only the mobile number in the bank KYC. No changes allowed |
| Customer set-up | The customer sets a PIN and user ID after authentication by the authority |

In short, the bank is a trusted source of identity. It does not issue the certificate. That stays with the licensed authority. A bank customer can get a certificate without repeating the full identity process, because the bank has already done KYC.

The guidelines also set strict limits for the bank itself. For a bank, proof that it exists can be a VAT verification or a PAN card plus an incorporation or banking licence certificate (Annexure I). Annexure III says the authority can use the VAT office's API to confirm the organisation's name, address and active status, that the organisation must have filed within the last three months, and that the authority keeps a digitally signed proof of the check.

Other routes exist for customers who do not come through a bank, such as a personal certificate on PAN eKYC with video verification, and NID eKYC by OTP or biometrics. We explain the NID routes in [the National ID post](/blog/national-id-card-digital-signature-nepal). For the basics of getting a certificate, see [how to get a digital signature certificate in Nepal](/blog/how-to-get-digital-signature-certificate-nepal).

## Lending: where OTP and signatures meet

NRB issued its digital lending guideline in February 2022. [The Kathmandu Post reported](https://kathmandupost.com/money/2022/02/14/a-digital-leap-nepalis-can-borrow-up-to-rs500-000-online) that customers could borrow up to Rs 500,000 from banks' digital platforms or e-wallets, for salary account holders and professional and entrepreneurial account holders, and up to Rs 200,000 for others, repayable over three years. The central bank's executive director said applicants should submit paperwork digitally. Banks had to create a separate portal for digital credit flow. Applicants are told of approval digitally. Banks may collect only a loan service charge and third-party charges, and must inform customers of extra charges clearly at the start. Default is reported to the Credit Information Bureau.

Later reports give higher caps and different figures. Some of those are commercial sites that do not cite an NRB document, so we do not repeat them. Check the current guideline on NRB's site.

The 2022 report does not describe how the customer's agreement to the loan is captured, and we did not find a rule that requires a digital signature. In practice many banks use an OTP and a tick box. That gives you a record that someone with the phone entered a code. It does not tie a named person to the exact text. Our [loan dispute post](/blog/otp-or-digital-signature-loan-disputes) sets out what each one proves.

## What stays on paper

Under Section 77, negotiable instruments such as cheques, mortgage and bond deeds and powers of attorney are outside the Act. A bank that offers a fully digital loan still needs a paper process for secured lending. That includes the mortgage over land, as the deed that transfers an interest in immovable property is on the excluded list. A digital signature on a loan agreement and a mortgage deed on paper can coexist, and that is the common split.

## Fraud: what the FIU says about AI and identity

The FIU-Nepal [STR/SAR guidelines, updated July 2025](https://www.nrb.org.np/contents/uploads/2025/10/STR.SAR-Guidelines-Updated-July-2025.pdf), add a section on AI and new technologies. Among the indicators of identity evasion, it lists KYC documents that appear digitally manipulated or AI-generated, such as deepfakes, or are submitted through platforms that mask device, location or caller ID. It also lists repeated identity verification attempts using altered images or synthetic biometric data, and the use of anonymisation tools or spoofed device identifiers during account creation.

A video call or photo match is only as good as its defences against that. See [liveness detection](/glossary/liveness-detection) and [video KYC](/glossary/video-kyc) for how those checks are built. A signed document adds a different layer: it ties the document to a certificate that a licensed authority issued after its own identity check, so it is evidence you can verify later, independent of the call.

## What a bank can do now

1. **Separate the three jobs.** Identify with National ID and video, authenticate with PIN and OTP, sign with a certificate. Do not let an OTP do the third job.
2. **Decide the policy under Section 40.** Write down which documents you accept with a digital signature, and which you do not.
3. **Keep the paper list for excluded instruments.** Cheques, mortgage deeds, bonds and powers of attorney stay on paper.
4. **Plan for a National ID outage.** In July and August 2026, NIN authentication failed at 13 agencies and banks could not update KYC, as [Biometric Update reported](https://www.biometricupdate.com/202608/nepals-national-id-outage-disrupts-passports-banking-and-government-services). Keep a document-check fallback and record which method you used.
5. **Use the KYC you already hold.** The Controller's banking route is built for that. The ePahichan [ID check API](/products/id-check-api) takes a NIN, name, gender and date of birth and returns match or no match, and the [banks and lenders page](/solutions/banks-lenders) describes how a certificate application can be drawn from KYC the bank already holds.
6. **Check dates on every notice.** Declaration deadlines and wallet link dates fell around the end of Ashwin 2083, and notices may extend them.

*This post summarises public sources and is not legal advice. NRB's unified directive is long and changes often. Read the current text for your institution's licence class.*
