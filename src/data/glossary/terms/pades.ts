import type { Term } from '../types';

const term: Term = {
  slug: 'pades',
  term: 'PAdES',
  full: 'PDF Advanced Electronic Signatures',
  aka: ['PDF Advanced Electronic Signatures', 'PAdES signature', 'PAdES-B', 'PAdES-LT', 'PAdES-LTA'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'PAdES meaning: PDF Advanced Electronic Signatures and levels',
  description: 'PAdES is the European standard for digital signatures inside PDFs. What the B, T, LT and LTA levels mean, how PAdES differs from CMS and what to check.',
  short: 'PAdES (PDF Advanced Electronic Signatures) is a standard, ETSI EN 319 142, for putting a digital signature inside a PDF so it can be checked later, even years after signing.',
  body: [
    'A PDF can carry a digital signature in its own structure, as defined in ISO 32000. PAdES builds on that and adds rules so that the signature stays verifiable over time. It is the format most readers and signing services use for signed PDFs, and it is the format behind the signatures that PDF software such as Adobe Acrobat shows with a banner.',
    'Inside, the signature value is a [CMS](/glossary/cms) container holding the signer’s certificate, the signed hash and optional extras such as a timestamp.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'PAdES meaning and standard',
      p: [
        'PAdES is published by ETSI, the European standards body, in the EN 319 142 series, and is part of the family of formats for advanced electronic signatures (the others are XAdES for XML and CAdES for general files). Although it comes from Europe, a PAdES signature is a PDF signature that any compliant reader can open. Its legal weight in Nepal comes from the Electronic Transactions Act and the certificate behind it, not from the ETSI name.',
      ],
    },
    {
      id: 'levels',
      h: 'PAdES levels: B, T, LT and LTA',
      p: [
        'Each level adds evidence to the one below it:',
      ],
      list: [
        'PAdES-B (baseline B): the signature, the signer certificate and the signed attributes. Valid only while the certificate is valid.',
        'PAdES-T: adds a signature [trusted timestamp](/glossary/trusted-timestamp) that proves when the signature was made.',
        'PAdES-LT: adds the full certificate chain and the revocation answers ([OCSP](/glossary/ocsp) or CRL) inside the file.',
        'PAdES-LTA: adds a document timestamp that is renewed over time, so the proof can outlive the algorithms and certificates it uses.',
      ],
    },
    {
      id: 'why',
      h: 'Why the level matters',
      p: [
        'A basic signature is checked against live information: is the certificate still valid, has it been revoked. Years later, the authority’s servers may be gone and the certificate expired, so a B-level signature may show as unknown. LT and LTA carry that evidence with them. This is the technique described under [long-term validation](/glossary/long-term-validation), and it answers the question in signature after the certificate expires.',
      ],
    },
    {
      id: 'visible',
      h: 'Visible and invisible signatures',
      p: [
        'A PAdES signature can have an appearance on the page, such as a name, date and logo, or none at all. The picture is only decoration. What matters is the cryptographic signature behind it, and the file must not be changed after signing except in the ways the standard allows, such as adding another signature or a timestamp. Any other change makes the signature report that the document was modified.',
      ],
    },
    {
      id: 'vs',
      h: 'PAdES vs plain PDF signatures and image signatures',
      p: [
        'Older PDF signatures used adbe.pkcs7.detached, which is similar but lacks the extra requirements for long-term evidence. A pasted image of a handwritten signature is not a PAdES signature at all: anyone can copy it, and nothing is checked. The difference between the two kinds is covered in digital signature vs electronic signature.',
      ],
    },
    {
      id: 'check',
      h: 'How to check a PAdES signature',
      p: [
        'Open the PDF in a reader that supports signatures and open the signature panel. It should show the signer, whether the document is unchanged since signing, whether the chain of trust is valid and whether a timestamp is present. The steps are in [how to check a signed PDF](/blog/how-to-check-a-signed-pdf). For how a reader decides, see [signature validation](/glossary/signature-validation).',
      ],
    },
    {
      id: 'epahichan',
      h: 'PAdES with ePahichan',
      p: [
        'Documents signed in the ePahichan app and through the Signing API are signed PDFs. Which PAdES level a given document carries is a setting of the signing service, so check the signature panel of the file you receive.',
      ],
    },
    {
      id: 'example',
      h: 'Example: a loan agreement signed with PAdES-LT',
      p: [
        'A borrower signs a loan agreement in the app. The signing service builds the CMS block, asks a time-stamping authority for a timestamp, fetches the OCSP answers for the borrower’s certificate and the authority’s certificates, and writes all of that into the document security store inside the PDF. The result is a PAdES-LT file.',
        'Five years later, an auditor opens the file. The reader needs no network. It finds the chain, the revocation answers and the timestamp in the file, and reports the signature valid as of the signing time even though the certificate has long expired.',
      ],
    },
    {
      id: 'hr',
      h: 'Example: an HR letter with a basic signature',
      p: [
        'A company signs an offer letter with a basic B-B signature. The letter is read and filed within the week. The signature shows valid while the certificate lasts. This is enough for a document that will not be relied on for years, though the company may still choose a higher level for employment contracts, which can be disputed long after the signature.',
        'The practical rule: choose the level by how long you will need to prove the signature. A week, B is enough. Years, ask for LT. Decades, ask for LTA.',
      ],
    },
    {
      id: 'under',
      h: 'What is under the hood',
      p: [
        'A PDF signature is stored as a dictionary with a field called Contents that holds the CMS block as a long hexadecimal string, and a ByteRange that lists which parts of the file the signature covers. The covered parts are everything except the Contents area itself. A later addition to the file, such as a second signature, is added as an incremental update and does not alter the covered bytes of the first.',
        'The document security store, or DSS, is a PDF structure added after signing to hold certificates and revocation answers for LT. Because it is added as an incremental update, it does not break the signature.',
      ],
    },
    {
      id: 'choose',
      h: 'Choosing a level',
      p: [
        'For most business documents signed through a service that fetches a timestamp at signing, PAdES-T is a sensible minimum, and PAdES-LT is better where the file will be kept. PAdES-LTA suits records with retention periods of many years. A basic B level is for short-lived documents.',
        'If you are buying or building a signing service, ask which level it produces and whether it fetches timestamps and revocation data at the moment of signing. If it only does so later, some evidence may no longer be available.',
      ],
    },
  ],
  faq: [
    { q: 'What does PAdES stand for?', a: 'PDF Advanced Electronic Signatures.' },
    { q: 'What is the difference between PAdES-B and PAdES-LT?', a: 'B holds the signature and certificate only. LT also embeds the certificate chain and revocation answers so the signature can be checked later without contacting the authority.' },
    { q: 'Is PAdES the same as a digital signature?', a: 'PAdES is a format for storing a digital signature inside a PDF. The signature itself is the same cryptographic operation.' },
    { q: 'Can a PAdES signature be added to a Word file?', a: 'No. PAdES is only for PDFs. XAdES and CAdES cover XML and general files.' },
    { q: 'Do I need PAdES-LTA for every document?', a: 'No. Documents that must stay provable for many years, such as loan agreements and property papers, benefit most from LT or LTA.' },
  ],
  related: ['digital-signature', 'cms', 'long-term-validation', 'trusted-timestamp', 'signature-validation'],
  product: 'app',
};

export default term;
