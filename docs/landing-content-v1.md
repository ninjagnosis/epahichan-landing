# ePahichan landing page v1 — content

**Ticket:** TEC-59 · **Status:** final copy, ready to implement · **Ships to:** dev URL only

This document is the words and the pictures. It contains no application code and edits nothing in
`src/` — TEC-45 owns the shell, TEC-48 owns the demo, this owns `docs/`.

The page is **three sections and one closing paragraph**. There is **no form and no call to action**.
A visitor who is convinced simply leaves convinced.

Everything a visitor reads is below in final form. Section 6 is the claims-boundary checklist;
section 7 is what I could not resolve. Read both before shipping — two sentences I wanted to write
are not supportable, and I have written weaker ones instead.

---

## 1. The page at a glance

| # | Section | Nepali heading | Photo | Owner of the mechanism |
|---|---|---|---|---|
| 0 | Hero | *(h1, no heading)* | `shopkeeperWide` (decorative) | TEC-45 |
| 1 | What a digital signature is | डिजिटल हस्ताक्षर भनेको के हो? | — | TEC-45 |
| 2 | The story | मुना र मदनले सम्झौता गर्छन् | `shopfront` | TEC-45 |
| 3 | Try it yourself | आफैं गरेर हेर्नुहोस् | — | **TEC-48** |
| 4 | Closing paragraph | *(no heading)* | — | TEC-45 |

Nepali is the original and lives at `/`. English is the translation and lives at `/en`.

**Terminology, fixed.** Use **चाबी** for *key*, never **साँचो**. साँचो also means *true/genuine*, and
this page repeatedly discusses whether something is genuine; the collision is a real readability
problem in a page whose whole subject is keys. `गोप्य चाबी` = private key, `सार्वजनिक चाबी` = public key.

---

## 2. Nepali copy — final, at `/`

### 2.0 Hero

**h1**

> सम्झौतामा को-कसले सही गर्‍यो, सय वर्षपछि पनि जाँच्न सकिन्छ।

**Standfirst**

> डिजिटल हस्ताक्षर भनेको कागजमा गरिने सहीको तस्बिर होइन। यो गणित हो — र गणित जाँच्न सकिन्छ।

### 2.1 What a digital signature is

**h2**

> डिजिटल हस्ताक्षर भनेको के हो?

**Body**

> कागजमा गरेको सही नक्कल गर्न सकिन्छ। स्क्यान गरेर अर्कै कागजमा टाँस्न सकिन्छ। हेरेर साँचो हो कि होइन
> भन्न विशेषज्ञ चाहिन्छ — र विशेषज्ञले पनि सधैं ढुक्क भएर भन्न सक्दैनन्।
>
> डिजिटल हस्ताक्षर फरक छ। यसमा दुइटा चाबी हुन्छन्:

**Two-item list**

> - **गोप्य चाबी** — तपाईंसँग मात्र रहन्छ। यसैले हस्ताक्षर बन्छ।
> - **सार्वजनिक चाबी** — जोसुकैलाई दिन सकिन्छ। यसैले हस्ताक्षर जाँचिन्छ।

**Body, continued**

> गोप्य चाबीले लिखतमा हस्ताक्षर गर्छ। त्यो हस्ताक्षर त्यही लिखतसँग मात्र मिल्छ। लिखतको एउटा अक्षर
> फेरियो भने हस्ताक्षर मिल्न छाड्छ।
>
> अनि सार्वजनिक चाबी भएको जोसुकैले जाँच्न सक्छ — तपाईंलाई नसोधी, हामीलाई नसोधी।

### 2.2 The story

**h2**

> मुना र मदनले सम्झौता गर्छन्

**Body**

> मुनाले आफ्नो पसलमा झोला सिलाउँछिन्। मदनले आफ्नो पसलमा ती झोला बेच्छन्। यो पटक अर्डर ठूलो छ — दुई
> सय झोला, असार मसान्तसम्म।
>
> दुवैले आ-आफ्नो चाबीको जोडी बनाउँछन्। गोप्य चाबी आफूसँगै राख्छन्। सार्वजनिक चाबी एकअर्कालाई दिन्छन्।
>
> सम्झौताको लिखत तयार हुन्छ। मुनाले पहिले हस्ताक्षर गर्छिन्।
>
> मदनले पढ्छन्। चित्त बुझेपछि उनले पनि हस्ताक्षर गर्छन् — तर उनको हस्ताक्षरले लिखत मात्र होइन, मुनाको
> हस्ताक्षरलाई समेत समेट्छ। त्यसैले क्रम पक्का हुन्छ: मुनाले जे कुरामा सही गरिन्, मदनले ठ्याक्कै त्यही
> कुरामा सही गरे — पछि सारिएको कुनै अर्कै कुरामा होइन।

**Sub-heading (h3)**

> सय वर्षपछि

**Body**

> मुना र मदन रहँदैनन्। पसल रहँदैन। हामी पनि रहन्छौं भन्ने निश्चित छैन।
>
> तर लिखत र दुवैको सार्वजनिक चाबी भए पुग्छ। जाँच्न न कुनै सर्भर चाहिन्छ, न कुनै साक्षी, न हाम्रो
> अनुमति। बीचमा कसैले एउटा अंक फेरेको भए हस्ताक्षर मिल्दैन — र लुकाउन मिल्दैन।

**Sub-heading (h3)**

> एउटा कुरा भने हस्ताक्षरले आफैं भन्दैन

**Body**

> हस्ताक्षरले **को-ले के-मा सही गर्‍यो** भन्ने प्रमाणित गर्छ। **कहिले** सही गर्‍यो भन्ने होइन।
>
> समयका लागि भरपर्दो समय-प्रमाणक निकायबाट छुट्टै प्रमाण चाहिन्छ, जुन हस्ताक्षरसँगै जोडिएर आउँछ।

### 2.3 Try it yourself — copy *around* the demo

The demo itself is TEC-48. These strings sit above, between and below it.

**h2**

> आफैं गरेर हेर्नुहोस्

**Intro**

> तलको डेमो नक्कली होइन। चाबी तपाईंकै यन्त्रमा बन्छ। हस्ताक्षर तपाईंकै यन्त्रमा बन्छ। कुनै पनि कुरा यो
> पानाबाट बाहिर जाँदैन।

**Four step captions** *(number them with Devanagari numerals १–४, as Airfone does)*

> 1. मुना र मदन दुवैका लागि चाबी बनाउनुहोस्।
> 2. सम्झौताको वाक्य आफूले चाहेजस्तो लेख्नुहोस्।
> 3. मुनाको हस्ताक्षर गर्नुहोस्। अनि मदनको।
> 4. अब वाक्यको एउटा अक्षर फेर्नुहोस् — र हेर्नुहोस् के हुन्छ।

**Pre-filled contract sentence** (the editable field's default value — TEC-48 needs this string)

> मुनाले मदनलाई दुई सय झोला, प्रतिगोटा रु. ४५०, असार मसान्तभित्र बुझाउने।

**Verification state labels** — must not rely on colour alone (TEC-48 AC #4)

> - Pass: `हस्ताक्षर मिल्यो` · Fail: `हस्ताक्षर मिलेन`
> - Untested / not yet signed: `हस्ताक्षर भएको छैन`

**The timestamp caption.** This is the wording TEC-48 was told not to invent. It is deliberately
plain and it does not flatter us:

> यो समय तपाईंकै यन्त्रको घडीबाट आएको हो। यन्त्रको घडी जोसुकैले फेर्न सक्छ, त्यसैले यसले कहिले सही
> गरियो भन्ने कुरा प्रमाणित गर्दैन। साँचो ePahichan हस्ताक्षरमा भरपर्दो समय-प्रमाणक निकायले दिएको
> समय जोडिन्छ।

**Closing note under the demo** — the honest gap, which is also the reason the product exists:

> यहाँ बनेको हस्ताक्षर साँचो हो, तर यो ePahichan हस्ताक्षर होइन। यहाँ बनेको चाबी कुनै व्यक्तिसँग
> जोडिएको छैन — यसले "कसैले सही गर्‍यो" भन्छ, "मुनाले सही गरिन्" भन्दैन। चाबीलाई नामसँग जोड्ने काम
> प्रमाणपत्रले गर्छ।

### 2.4 Closing paragraph

One paragraph. It carries the legal sentence. No call to action follows it.

> नेपालको कानूनले डिजिटल हस्ताक्षरलाई मान्यता दिन्छ: **विद्युतीय (इलेक्ट्रोनिक) कारोबार ऐन, २०६३** को
> **दफा ५** अनुसार, प्रचलित कानूनले सही गर्नुपर्ने भनी तोकेको अवस्थामा, ऐन तथा अन्तर्गतका नियमले तोकेको
> प्रक्रिया पूरा गरी गरिएको डिजिटल हस्ताक्षरको पनि कानूनी मान्यता हुन्छ। डिजिटल हस्ताक्षरलाई
> सर्वसाधारणको पहुँचमा ल्याउन ePahichan बनेको हो।

---

## 3. English copy — final, at `/en`

### 3.0 Hero

**h1**

> Who agreed to what — still checkable in a hundred years.

**Standfirst**

> A digital signature is not a picture of a signature on paper. It is mathematics — and mathematics
> can be checked.

### 3.1 What a digital signature is

**h2**

> What is a digital signature?

**Body**

> A signature on paper can be copied. It can be scanned and pasted onto a different page. Telling a
> real one from a forgery takes an expert — and even an expert cannot always be certain.
>
> A digital signature works differently. It uses two keys:

> - **A private key** — yours alone. This is what makes the signature.
> - **A public key** — give it to anyone. This is what checks the signature.

> The private key signs a document. That signature matches that document and no other. Change one
> character of the document and the signature stops matching.
>
> And anyone holding the public key can check it — without asking you, and without asking us.

### 3.2 The story

**h2**

> Muna and Madan make an agreement

**Body**

> Muna sews bags in her shop. Madan sells those bags in his. This time the order is a big one — two
> hundred bags, by the end of Asar.
>
> Each of them makes a pair of keys. Each keeps their private key. They exchange public keys.
>
> The agreement is written up. Muna signs it first.
>
> Madan reads it. When he is satisfied, he signs too — but his signature covers more than the
> document. It covers Muna's signature as well. That fixes the order: what Muna agreed to is exactly
> what Madan agreed to, and not something swapped in afterwards.

**h3**

> A hundred years later

**Body**

> Muna and Madan are gone. The shops are gone. There is no guarantee we are still here either.
>
> But the document and the two public keys are enough. Checking needs no server, no witness, and no
> permission from us. If anyone changed a single digit in between, the signatures do not match — and
> that cannot be hidden.

**h3**

> One thing the signature does not tell you by itself

**Body**

> A signature proves **who agreed to what**. It does not prove **when**.
>
> Time needs separate evidence, from a trusted timestamp authority, carried alongside the signature.

### 3.3 Try it yourself

**h2**

> Try it yourself

**Intro**

> The demo below is not a mock-up. The keys are made on your own device. The signatures are made on
> your own device. Nothing leaves this page.

**Four step captions**

> 1. Make a pair of keys for Muna and for Madan.
> 2. Write the agreement however you like.
> 3. Sign as Muna. Then sign as Madan.
> 4. Now change one character of the text — and watch what happens.

**Pre-filled contract sentence**

> Muna will deliver two hundred bags to Madan at Rs. 450 each, by the end of Asar.

**Verification state labels**

> - Pass: `Signature matches` · Fail: `Signature does not match`
> - Untested / not yet signed: `Not signed yet`

**The timestamp caption**

> This time comes from your own device's clock. Anyone can change a device clock, so it does not
> prove when something was signed. A real ePahichan signature carries a time issued by a trusted
> timestamp authority.

**Closing note under the demo**

> The signature you just made is real, but it is not an ePahichan signature. The key made here is
> not tied to any person — it says "somebody signed", not "Muna signed". Tying a key to a name is
> what a certificate does.

### 3.4 Closing paragraph

> Nepali law recognises digital signatures: under **Section 5** of the **Electronic Transactions
> Act, 2063**, where prevailing law requires something to be signed, a digital signature made by
> following the procedures laid down in the Act and its Rules also has legal validity. ePahichan
> exists to bring digital signatures within reach of ordinary people.

---

## 4. Photos — in the `photos.ts` shape

Two photos. The page is meant to be very simple and two is what it needs.

**These are real files that exist today**, in `~/code/airfone-landing-site/src/assets/photos/`,
already pre-cropped to the ratio they are displayed at. Copy the two `.jpg` files into
`epahichan-public-landing/src/assets/photos/`. Do not fork the Airfone repo — take the two files and
the shape of the module, nothing else.

I opened both images and wrote the alt text from what is actually in the frame. The Airfone repo's
alt text for these two is thinner than it should be (it omits the shopkeeper in `shopfront`
entirely); use mine.

```ts
// Real photos from Nepal. Unsplash and Pexels licenses allow free commercial
// use without attribution; credited here out of courtesy. Files are pre-cropped
// to the ratio they are shown at (both 3:2).
import shopkeeperWide from '../assets/photos/shopkeeper-wide.jpg';
import shopfront from '../assets/photos/shopfront.jpg';

export const photos = {
  shopkeeperWide: {
    src: shopkeeperWide,
    credit: 'Jimmy Liu',
    source: 'https://unsplash.com/photos/agaYL7oTPxc',
    alt: {
      ne: 'काठमाडौंको पसलमा सिलाइ मेसिनमा काम गर्दै गरेका एक जना; वरिपरि टिसर्ट, झोला र टोपी झुन्ड्याइएका',
      en: 'A man working at a sewing machine in a Kathmandu shop, surrounded by hanging t-shirts, bags and caps',
    },
  },
  shopfront: {
    src: shopfront,
    credit: 'Jeevan Katel',
    source: 'https://unsplash.com/photos/0x153_N1c2I',
    alt: {
      ne: 'नीलो ढोका भएको सानो पसल; ढोकाभित्रबाट पसल्नी बाहिर हेर्दै, अगाडि एउटा कुकुर सुतिरहेको',
      en: 'A small shop with blue-painted doors; the shopkeeper looks out from the doorway and a dog sleeps in front',
    },
  },
} as const;
```

| key | file | pixels | display ratio | where it goes | alt |
|---|---|---|---|---|---|
| `shopkeeperWide` | `shopkeeper-wide.jpg` (597 KB) | 2400×1601 | 3:2 | hero background | **`alt=""`** — decorative, same as Airfone's hero |
| `shopfront` | `shopfront.jpg` (467 KB) | 1800×1200 | 3:2 | section 2, the story | alt text above, `alt={photos.shopfront.alt[locale]}` |

**On `shopkeeperWide` being decorative.** The person in it is a man; Muna is a woman. Used as an
unlabelled hero background with `alt=""` that is fine, and it is how Airfone uses the same file. Do
not caption it or place it next to Muna's name, which would make it read as a portrait of her.

**Three more verified files are available** in the same directory if the layout wants them —
`students-classroom.jpg` (1800×2400, 3:4), `restaurant-counter.jpg` (1800×2400, 3:4),
`kathmandu-call.jpg` (1600×2000, 4:5). I did not open these three, so **do not reuse Airfone's alt
text for them unchecked** — if you use one, look at it and write the alt text.

---

## 5. The legal citation

### 5.1 What to cite

| | |
|---|---|
| **Act, Nepali** | विद्युतीय (इलेक्ट्रोनिक) कारोबार ऐन, २०६३ |
| **Act, English** | The Electronic Transactions Act, 2063 (2008) |
| **Act number** | Act number 27 of the year 2063 |
| **Section relied on** | **Section 5 — Legal Recognition of Digital Signature** |
| **Publisher** | Nepal Law Commission |
| **Landing page** | https://lawcommission.gov.np/content/13397/ |
| **Text I read** | https://giwmscdnone.gov.np/media/pdf_upload/eta_english_gav7k9i.pdf |

The PDF is the Nepal Law Commission's own English translation, rehosted on the Government of Nepal
CDN. Its provenance is in the file's own metadata: `/Author(NLC)`, `/CreationDate(D:20090726111808+05'45')`.
The Commission's `content/13397/` page renders its body client-side and exposes no direct PDF link,
which is why the citation carries both URLs — the canonical page, and the file whose bytes I
actually read.

### 5.2 Section 5, verbatim

> **5. Legal Recognition of Digital Signature:** Where the prevailing law requires any information,
> document, record or any other matters to be certified by affixing signature or any document to be
> signed by any person; then, if such information, documents, records or matters are certified by
> the digital signature after fulfilling the procedures as stipulated in this Act or the Rules made
> hereunder, such digital signature shall also have legal validity.

**The conditional is load-bearing and the page keeps it.** Section 5 does not say digital signatures
are valid. It says a digital signature has legal validity *when the procedures in the Act and its
Rules have been followed*. Both the Nepali and English closing paragraphs above carry that clause.
Do not let it get edited out for brevity — without it the sentence is false.

### 5.3 The year discrepancy, resolved

The board flagged that secondary sources give the Act as both 2006 and 2008. **They disagree because
the primary text itself contains both dates.** From the Act's own front matter and §1:

- Short title, §1(1): *"This Act may be called 'The Electronic Transactions act, 2063 (2008)'."*
- Date of Authentication and Publication: **22 Mansir 2063 (December 8, 2006)**
- Deemed commencement, §1(2): **24 Bhadra 2063 (Sep. 2, 2006)**

So the Act calls itself 2008 while dating its own publication to 2006. There is no single correct
Gregorian year to print.

**Therefore the page prints no Gregorian year at all.** The Nepali copy writes the Act exactly as the
Nepal Law Commission titles it — *विद्युतीय (इलेक्ट्रोनिक) कारोबार ऐन, २०६३* — and the English copy
writes *Electronic Transactions Act, 2063*. The Bikram Sambat year २०६३ is unambiguous and is how
the Act is referred to in Nepal. This sidesteps a genuinely ambiguous primary source rather than
picking a side of it.

### 5.4 Two claims the secondary sources get wrong

Recorded here so nobody re-imports them from a blog later.

1. **"Section 7 makes electronic records admissible in evidence."** Section 7 is *"Electronic Record
   May Fulfill the Requirement of Submission of any Original Document."* It is about satisfying an
   original-document requirement, not about admissibility.
2. **"Section 78 covers evidence."** Section 78 is *"Power to Frame Rules."*

**There is no general admissibility-of-electronic-records-as-evidence section in this Act.** I read
all twelve chapters and sections 1–80 of the Commission's English text; the words *evidence*,
*admissible*, *proof* and *presumption* do not appear in any operative provision. The Act's five
`Court` references are all about tribunal membership and appeals.

**Consequence for the copy: the page makes no admissibility claim, in either language.** It says the
law *recognises* digital signatures, which is Section 5 and is exactly true. It does not say
anything about what a court will accept.

### 5.5 Sections that back the rest of the page

| Section | Heading | What it supports |
|---|---|---|
| §3 | Authencity of Electronic Record | The two-key mechanism: signing uses *"asymmetric crypto system and hash function"*; §3(3) *"Any person may verify the electronic record by using the public key of the subscriber."* |
| §4 | Legal Recognition of Electronic Record | Not cited on the page; recorded because §5 is the signature analogue of it |
| §6 | Electronic Records to be Kept Safely | The durability idea has statutory company: records kept *"in an accessible condition making available for a subsequent reference"* |
| §30 | Certifying Authority may issue a Certificate | *"Only a licensed or recognized Certifying Authority under this Act may issue a Digital Signature Certificate."* This is why the note under the demo says a certificate ties a key to a name, **and does not say who issues it** — see 6.2 |
| §2(i) | Definitions — *"Subscriber"* | *"'Subscriber' means a person who has obtained a certificate under Sub-section (3) of Section 31."* A certificate is held by a **person**; this, with §30, is what backs *"tying a key to a name is what a certificate does"* |
| §31 | Apply to obtain a Certificate | Procedural only — application, decision in one month, issue in seven days, contents *"as prescribed"*. It does **not** on its own say a certificate names anybody; §2(i) and §36(2)(a) do that work |
| §35 | To Generate Key pair | **Conditional, and the conditional matters** — §35(1) applies *"if such key pair is supposed to be generated by the subscriber only"*, and then requires *"the subscriber shall generate such key pair by applying the secured asymmetric crypto system"*. It governs **how** a subscriber generates, not **that** generation is the subscriber's. §35(2) goes further: where the CA and subscriber have agreed a security system, or the CA has accepted one, the subscriber's duty is to apply that system. Backs no claim on the page; see 5.7 |
| §36(2)(a) | To Accept a Certificate | On acceptance the subscriber is deemed to have guaranteed to everyone who relies on the certificate that *"the subscriber holds the private key corresponding to the public key and is entitled to hold the same"*. Second support for the key→person link |
| §37(1) | To retain the private key in a secured manner | *"Every subscriber shall exercise reasonable care to retain control of the private key ... and adopt all measures to prevent its disclosure to a person not authorized to affix the digital signature of subscriber."* Backs no claim on the page. **This is the Act's control provision** — see 5.7 |
| §38 | To Deposit the Private Key to the Controller | The Controller may order a subscriber to deposit the private key on specified grounds. Backs no claim on the page; recorded because it is the only place the Act contemplates the private key sitting anywhere but with the subscriber |

### 5.6 Section 77 — why the story is a bag order

§77 says the Act **does not apply** to, among other things: negotiable instruments; deeds of will,
mortgage, bond, conveyance or partition, or any deed transferring title in immovable property;
documents demonstrating title to immovable property; powers of attorney and court pleadings; and
arbitration pleadings.

Muna and Madan's agreement is a **supply of goods** — two hundred bags at a price by a date. That is
squarely outside §77. A land deal, a loan note or a power of attorney would all have been excluded
by the Act, and the story would have been quietly teaching something false.

**This also constrains the copy:** the page must never imply "you can sign anything digitally". It
does not — it says the law recognises digital signatures where a signature is required, and stops.

### 5.7 The sole-control question — asked by the architecture work, answered here

**This backs nothing on the landing page.** It is recorded here because the trust-platform
architecture document points at this table for the legal test that central key generation has to
pass, and the section it points at is the wrong one.

**§35 is not the sole-control provision, and read in full it does not forbid central generation.**
Its duty is conditional on generation already being the subscriber's to do — *"if such key pair is
supposed to be generated by the subscriber only, then the subscriber shall generate such key pair by
applying the secured asymmetric crypto system"* — so it prescribes **how**, not **who**. §35(2) then
contemplates the opposite arrangement outright: where the Certifying Authority and the subscriber
have concluded an agreement, or the CA has accepted a specific system, for generating the key pair,
the subscriber's duty is to apply that system. An Act that lets the CA set the key-generation regime
is not an Act that requires device-born keys.

**§37(1) is the provision that actually bites, and it is a retention duty, not a generation one:**

> **37. To retain the private key in a secured manner:** (1) Every subscriber shall exercise
> reasonable care to retain control of the private key corresponding to the public key listed in the
> Certificate and adopt all measures to prevent its disclosure to a person not authorized to affix
> the digital signature of subscriber.

The test is therefore about **control after issuance**, and the operative words are *retain control*
and *prevent its disclosure to a person not authorized to affix the digital signature of subscriber*.
Whether a centrally generated key passes turns on whether the generating party is such an
unauthorized person, and on what happens to the key afterwards — not on where the key was born.

**§36(2)(a) is the second exposure.** On accepting a certificate the subscriber is deemed to have
guaranteed, to everyone who reasonably relies on it, that *"the subscriber holds the private key
corresponding to the public key and is entitled to hold the same."* Under central generation the
subscriber makes that statutory guarantee about facts we control, not facts they control.

**§38 is the only place the Act contemplates the private key sitting elsewhere** — the Controller may
order a subscriber to deposit it, on enumerated grounds. It is an order-based exception, which is
evidence that custody elsewhere is not alien to the statute and equally that it is not the norm.

**What I am not doing here:** reading these four sections together into an opinion on whether the
architecture passes. That is a legal question above this ticket and above me. What this subsection
fixes is which sections the question is about. Owner: the CTO — see 7.6.

---

## 6. Claims-boundary checklist

Every factual claim the page makes. Each is supported by the citation, or by the demo the visitor
has just run, or it does not ship.

### 6.1 Claims that ship

| # | Claim on the page | Support | Where |
|---|---|---|---|
| 1 | A private key makes the signature; a public key checks it | **Demo** (TEC-48 generates both, verifies with the public key) + **citation** §3(2), §3(3) | 2.1 / 3.1 |
| 2 | A signature matches one document and no other; change a character and it stops matching | **Demo** — TEC-48 step 4, verification actually returns false | 2.1, 2.2 / 3.1, 3.2 |
| 3 | Anyone with the public key can check it, without asking you or us | **Demo** — TEC-48 AC #3 requires an empty network tab for a full run | 2.1 / 3.1 |
| 4 | The counter-signature covers the document *and* the first signature, fixing the order | **Demo** — TEC-48 scope item 3 | 2.2 / 3.2 |
| 5 | Checking needs no server, no witness, and no permission from us | **Demo** — same empty-network-tab evidence as #3 | 2.2 / 3.2 |
| 6 | A signature proves who agreed to what, **not when** | **Citation-neutral, technically true**, and consistent with the demo's own timestamp caption | 2.2, 2.3 / 3.2, 3.3 |
| 7 | The demo's time is the device clock and proves nothing about when | **Demo** — the device clock is literally the source | 2.3 / 3.3 |
| 8 | Nepali law recognises digital signatures made by the Act's procedures | **Citation** — ETA 2063 §5, quoted verbatim at 5.2 | 2.4 / 3.4 |
| 9 | The key made in the demo is not tied to any person; a certificate is what ties a key to a name | **Demo** (no identity anywhere in it) + **citation** §30 with §2(i) — *"'Subscriber' means a person who has obtained a certificate"* — and §36(2)(a). Not §31 alone, which is procedural; see 5.5 | 2.3 / 3.3 |

### 6.2 Sentences I wanted to write and did not

Both of these are the ticket's *"write a weaker sentence and flag it"* rule being applied.

**a. "ePahichan issues the certificate that ties your key to your name."**

Not shipped. §30: *"Only a licensed or recognized Certifying Authority under this Act may issue a
Digital Signature Certificate."* I have no primary evidence of ePahichan's licensing status, and the
page is forbidden from naming any operator. Asserting we issue certificates would be a claim about
our own legal standing that I cannot support from the Act.

**Weaker sentence shipped instead:** *"चाबीलाई नामसँग जोड्ने काम प्रमाणपत्रले गर्छ।"* / *"Tying a key
to a name is what a certificate does."* True under §30–31, names no issuer, and still lands the
point that the demo is missing the piece the product supplies.

**b. "A digitally signed document is admissible in a Nepali court."**

Not shipped. See 5.4 — the Act has no such provision, and the secondary sources asserting it cite
sections that say something else. Nothing on the page mentions courts.

### 6.3 One claim that is a product commitment, not a fact — needs an owner

> *"साँचो ePahichan हस्ताक्षरमा भरपर्दो समय-प्रमाणक निकायले दिएको समय जोडिन्छ।"*
> *"A real ePahichan signature carries a time issued by a trusted timestamp authority."*

This is the board's Round 3 answer and I have written it as instructed. But it is supported by
**neither the citation nor the demo** — it is a statement about what our unbuilt product will do.
It is the honest counterpart to the device-clock caption and the page is weaker without it, so it
ships; but it must be recorded as a commitment, not an observation.

**It stops being true the moment we ship a signature without a TSA timestamp.** Owner: the CTO, to
carry into the trust-platform design. Flagged on 7.3.

### 6.4 The "hundred years" frame — what it does and does not assert

The board's framing is **durability of verification**, and the copy cashes it out that way
immediately: *"जाँच्न न कुनै सर्भर चाहिन्छ, न कुनै साक्षी, न हाम्रो अनुमति"* — no server, no witness,
no permission from us. Every one of those is demo-supported (claim #5).

What the page deliberately does **not** assert: that the *algorithm* will still be considered secure
in a hundred years. Ed25519 and ECDSA P-256 are today's choices, not permanent ones; real long-term
schemes re-timestamp over time precisely because of this. Nothing in the copy says otherwise, and
the h1's "सय वर्षपछि पनि जाँच्न सकिन्छ" is about the checking procedure surviving, not about
cryptographic strength. See 7.2 — I think this is acceptable for a dev URL and worth a decision
before any public launch.

### 6.5 No operator is named — and `AGENTS.md:13` in this repo says the opposite

`AGENTS.md:13` still carries the original scaffold's rule: *the operator's role as issuing CA must be
disclosed accurately where legal, certificate-policy, or contractual context requires it.* The owner
has overruled that half of the line — **ePahichan only, everywhere** — and the CTO has confirmed the
ticket wins and the file is stale. Correcting `AGENTS.md` itself is TEC-45 review scope, not this
ticket; this note exists so nobody implementing from this document re-derives the old rule from the
file and adds a disclosure line to the closing paragraph.

**The surviving half of that rule is the sharp one:** do not imply ePahichan is the issuing CA —
while also not naming who is. The page gets through it by never discussing issuance at all. It is a
public-awareness page, not a certificate policy; it has no reason to name an issuer. The two places
this was load-bearing:

- The note under the demo says *"चाबीलाई नामसँग जोड्ने काम प्रमाणपत्रले गर्छ"* / *"Tying a key to a
  name is what a certificate does."* Subject is the certificate, not whoever issues it. See 6.2a for
  the stronger sentence that was rejected.
- The closing paragraph's last sentence was *"ePahichan brings that process within reach"*, where
  *that process* was the Act's procedure. Narrowed to *"brings digital signatures within reach"*, so
  it cannot be read as a claim that we operate the Act's certification machinery. Same meaning to a
  reader; one fewer inference available to a hostile one.

**Checks, all three greppable:**

```sh
# 1. the naming rule — must return nothing
grep -rniE 'radiant|\bncc\b' src/
# 2. same over docs/ — the only permitted hits are the two command lines printed here
grep -rniE 'radiant|\bncc\b' docs/
# 3. every mention of an authority must be the timestamp one, never a certifying one
grep -rniE 'certifying authority|प्रमाणीकरण निकाय' src/
```

Checks 1 and 2 are the naming rule. Check 3 catches the failure mode this subsection is about: the
copy's only `authority` / `निकाय` is the **timestamp** authority in 2.3 / 3.3, which is a different
body and is deliberately left unnamed too. All three pass on this branch as written — §30's
*"Certifying Authority"* is quoted in 5.5 of this document, which is the citation record, and never
reaches the page.

### 6.6 The note under the demo is load-bearing — do not cut it for length

The page's two-key explanation says the private key is **yours alone** (2.1 / 3.1). That is true of
digital signatures in general, which is what those two sections teach, and it is the only thing they
claim.

It is **not** yet true of ePahichan. The board has since settled the trust platform on **centrally
generated subscriber keys, with no CSR** — a decision that landed after this copy was written. The
page survives it only because of one sentence, the closing note under the demo at 2.3 / 3.3:

> *"The signature you just made is real, but it is not an ePahichan signature. The key made here is
> not tied to any person."*

That sentence is what keeps *"yours alone"* a statement about digital signatures rather than a
statement about us. **It is the shortest-looking sentence on the page and the most expensive one to
delete.** If a later edit cuts it for length, the two-key section silently becomes a product claim
that is false. Anyone shortening this page: cut elsewhere.

The standing constraint, which belongs to the architecture work and is recorded here only so this
file cannot drift into breaking it:

> **No ePahichan surface may say "only you hold your key" until subscriber keys are device-born.**

Greppable form of the failure mode — the page must never put the two in one sentence:

```sh
# must return nothing: an "only/alone/yours" key claim in the same sentence as the product name
grep -rniE 'ePahichan[^.।]*(yours alone|only you|तपाईंसँग मात्र)|((yours alone|only you|तपाईंसँग मात्र)[^.।]*ePahichan)' src/
```

Passes on this branch — `src/` is clean. Over `docs/` the only hit is the constraint quoted two lines
above, the same exemption as the naming greps in 6.5. If the board later chooses device-generated keys the constraint lifts and
this page needs no edit either way.

### 6.7 Accessibility bar (method carried over from the cancelled TEC-31 spec)

- Verification pass/fail carries a **text label** in both languages (2.3 / 3.3), never colour alone.
  This is TEC-48 AC #4 and the strings are supplied here so it can be met.
- The hero photo is decorative and takes `alt=""`; the story photo takes real alt text in the page's
  own locale.
- One `h1` per page; `h2` per section; the two `h3`s in section 2 nest under its `h2`, no level skips.
- Every string on this page appears in both `ne` and `en`. There are no locale-only strings.
- The Nepali is the source text; the English is a translation of it. If a sentence is edited, edit
  the Nepali first.

---

## 7. Blocked-on

Named rather than guessed. None of these block implementation on a dev URL.

### 7.1 The two Unsplash source URLs are not independently re-verified — **owner: ePahichan QA**

The photo files, credits and source URLs are carried from `airfone-landing-site/src/data/photos.ts`,
where these exact files ship today. I could not re-open the two Unsplash pages to confirm the
photographer names: `unsplash.com` returns **401** and `pexels.com` returns **403** to this network,
and their search pages are blocked too. The image CDNs (`images.unsplash.com`, `images.pexels.com`)
do return 200, so a known ID can be fetched — but an ID cannot be discovered or confirmed from here.

**This is also why I did not source any new photography.** Picking a photo I cannot open would mean
inventing an Unsplash ID, which is exactly the kind of unverifiable claim this ticket exists to
prevent.

**Action:** before any public launch, someone with an ordinary browser opens both URLs and confirms
the photographer credit matches. Fine for a dev URL as-is — the licences do not require attribution;
we credit out of courtesy.

### 7.2 "A hundred years" versus algorithm lifetime — **owner: the CTO, before public launch**

See 6.4. The copy is careful and I am comfortable shipping it to a dev URL. Whether the h1 keeps the
hundred-year frame on a public site is a board-level call about how much of a future promise we want
in our largest type. **Not a blocker; a decision with a deadline.**

### 7.3 The trusted-timestamp commitment — **owner: the CTO**

See 6.3. The page now states in both languages that a real ePahichan signature carries a TSA
timestamp. That needs to be true of what the trust platform ships. Recording it here so the landing
page is not the only place it is written down.

### 7.4 A photo of two people agreeing would strengthen section 2 — **not blocking**

The story is about two parties and the available photography has one person per frame. A shot of two
people across a shop counter, in the same everyday-Nepal register, would be better. I did not invent
one, for the reason in 7.1. If someone with browser access wants to source it: everyday Nepali
setting, two people, a counter or table between them, 3:2, Unsplash or Pexels, and write both alt
texts. The page works fine without it.

### 7.5 The unregistered domain still appears in `docs/handoff.md` — **owner: the CTO**

It appears nowhere in *this* document — not even as an example, so that a grep for it stays clean —
and with no form and no call to action in v1 the page has no contact surface at all. But the repo is
not clean: `docs/handoff.md` lines 27, 28 and 51 still carry `hello@epahichan.com.np` and two
subdomains of the unregistered domain, described as things we operate.

That file is the discarded handoff the board has set aside, and rewriting or removing it is a
decision above this ticket — it is the same class of stale-scaffold problem as `AGENTS.md:13`
(6.5). Nothing in it reaches the landing page, so it does not block a dev URL. **Action:** decide
whether `docs/handoff.md` is deleted or marked superseded, alongside the `AGENTS.md` correction.

### 7.6 The architecture document cites the wrong section for sole control — **owner: the CTO**

The trust-platform architecture document points its sole-control question at the **§35** row of this
table. §35 is not the control provision — it is a conditional *how-to-generate* rule that, read in
full, contemplates the CA setting the key-generation regime (§35(2)). The provisions the question is
actually about are **§37(1)** (retain control, prevent disclosure to a person not authorized to affix
the subscriber's signature), **§36(2)(a)** (the subscriber's deemed guarantee that they hold the
private key and are entitled to hold it), and **§38** (deposit to the Controller). All four are now
in 5.5 with the operative words, and 5.7 sets out what each does.

This blocks nothing on this ticket and nothing on a dev URL. **Action:** repoint the architecture
document's citation at 5.7 rather than the §35 row, and take the four-section reading to whoever
answers legal questions for the platform. I have deliberately not formed an opinion on whether
central generation passes §37(1); that is above this ticket.

---

## 8. Handoff

| Who | What they need from this document |
|---|---|
| **TEC-45** (Engineer 1) | All copy in sections 2 and 3 → `i18n.ts` with `ne`/`en` keys; the `photos.ts` module in section 4; the two `.jpg` files copied from the Airfone repo; the heading structure in 6.7. **Also 6.5** — `AGENTS.md:13` is stale, do not add an operator disclosure, and correcting the file is your review scope |
| **TEC-48** (Engineer 2) | The four step captions, the pre-filled contract sentence, the pass/fail/unsigned labels, the **timestamp caption**, and the closing note under the demo — all in 2.3 / 3.3. The timestamp caption is the Round 3 wording this ticket was told to wait for |
| **ePahichan QA** | Section 6 is the test plan: verify each of the nine claims is actually on the page and actually supported. Plus the two greps in 6.5, and 7.1 |

Naming: **ePahichan**, everywhere, in both languages. No other organisation is named anywhere on
this page or in this document — not in the legal paragraph, not in a footnote. `AGENTS.md:13` says
otherwise and is stale; see 6.5.

Brand: no colour is named in this copy. If the shell needs one for the pass/fail states, use a token
from `BRAND.md` — never a hex value in content.
