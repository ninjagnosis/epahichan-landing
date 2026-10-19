import type { Term } from '../types';

const term: Term = {
  slug: 'cms',
  term: 'CMS',
  full: 'Cryptographic Message Syntax',
  aka: ['PKCS #7', 'PKCS7', 'Cryptographic Message Syntax', 'CMS SignedData', 'P7S'],
  updated: '2026-10-19',
  published: '2026-11-02',
  title: 'CMS and PKCS #7: Cryptographic Message Syntax explained',
  description: 'CMS, or Cryptographic Message Syntax, is the container that holds a digital signature and its certificates. How it relates to PKCS #7 and signed PDFs.',
  short: 'CMS (Cryptographic Message Syntax) is the standard container, defined in RFC 5652, that holds a digital signature together with the certificates and other data needed to check it. It grew out of PKCS #7.',
  body: [
    'A signature is not just a number. A verifier also needs to know which hash was used, who signed, and the signer’s certificate. CMS packs these together in one block. It is the format that sits inside signed PDFs ([PAdES](/glossary/pades)), signed emails and many signed files.',
    'The older name is PKCS #7, from RSA Laboratories. CMS is its successor, standardised by the IETF, and the two are largely compatible, so tools often use the names interchangeably.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'CMS meaning and PKCS #7',
      p: [
        'CMS stands for Cryptographic Message Syntax. RFC 5652 is the current definition, replacing earlier versions. When a file ends in .p7s, .p7m or .p7b it is a PKCS #7 or CMS file: .p7s usually holds only a signature, .p7m a signed message and .p7b just certificates.',
      ],
    },
    {
      id: 'signeddata',
      h: 'What is inside a CMS signature',
      p: [
        'The type used for signatures is SignedData. It carries:',
      ],
      list: [
        'The digest algorithm, such as [SHA-256](/glossary/sha-256).',
        'Signed attributes: the document [hash](/glossary/hash), the signing time and the content type, all covered by the signature.',
        'The signature value, made with the signer’s [private key](/glossary/private-key) using [RSA](/glossary/rsa) or [ECDSA](/glossary/ecdsa).',
        'The signer’s [certificate](/glossary/x509-certificate) and often the chain above it.',
        'Optional unsigned attributes, such as a trusted timestamp.',
      ],
    },
    {
      id: 'attached',
      h: 'Attached and detached signatures',
      p: [
        'In an attached (enveloped) signature, the original content is inside the CMS block. In a detached signature, the block holds only the signature and the data sits in a separate file. PDF signatures are detached in effect: the CMS block covers byte ranges of the PDF and is stored in a reserved space inside it.',
      ],
    },
    {
      id: 'other-uses',
      h: 'Other uses of CMS',
      p: [
        'CMS can also encrypt data to a recipient’s public key (EnvelopedData). That is how S/MIME secures email. In this glossary the focus is signing, where CMS is the layer that turns a raw signature into something a verifier can use.',
      ],
    },
    {
      id: 'pdf',
      h: 'CMS inside a signed PDF',
      p: [
        'In a PDF, the CMS block sits in a reserved area of the file. The signature covers every byte of the PDF except that reserved area, so any edit elsewhere changes the hash and breaks the signature. Later additions, such as a second signature, are appended after the first and leave its covered bytes untouched.',
        'This design is why a signed PDF can be passed around by email and checked anywhere. It also explains why re-saving a signed PDF in another program often breaks the signature: the program rewrites the bytes the signature covered. Use the original file, or sign again from the beginning.',
      ],
    },
    {
      id: 'ex',
      h: 'Inspecting a CMS signature',
      p: [
        'With OpenSSL, the command openssl cms -verify -in file.p7s -inform DER -content file.pdf -noverify checks a detached signature against the original file. Adding -cmsout -print shows the structure: the digest algorithm, the signed attributes, the certificate list and the signature value.',
        'Developers rarely need this. For everyone else, the practical lesson is that the signature, certificate and timestamp travel as one package, so a signed document can be checked on any computer that has the file.',
      ],
    },
    {
      id: 'pades',
      h: 'CMS and PAdES together',
      p: [
        'PAdES is not a different signature. It is a set of rules on how to use CMS inside a PDF. The rules say which attributes must be signed, such as the signing certificate identifier, and how to add timestamps and revocation proof as unsigned attributes or in the document security store.',
        'So when someone asks what is inside a PAdES signature, the answer is a CMS SignedData block, plus the PDF structure around it. Knowing this makes it easier to read technical error messages from validation tools.',
      ],
    },
    {
      id: 'history',
      h: 'From PKCS #7 to RFC 5652',
      p: [
        'PKCS #7 was written by RSA Laboratories in the 1990s. The IETF took it over as CMS, with RFC 2630 in 1999, then RFC 3369, RFC 3852 and, in September 2009, RFC 5652, which replaced RFC 3852 and is an Internet Standard. Later documents update it for newer algorithms.',
        'Because the structure was kept compatible, a program written for PKCS #7 can usually read a modern CMS signature.',
      ],
    },
  ],
  faq: [
    { q: 'What does CMS stand for in cryptography?', a: 'Cryptographic Message Syntax. It is unrelated to content management systems.' },
    { q: 'What is the difference between CMS and PKCS #7?', a: 'CMS is the later, IETF-maintained version of PKCS #7. They are closely related and often interchangeable in practice.' },
    { q: 'What is a .p7s file?', a: 'A file holding a detached CMS signature, which is used together with the original file to check it.' },
    { q: 'Does CMS hide the content?', a: 'Not for signing. The signature proves origin and integrity, not secrecy. Encryption is a separate CMS feature.' },
  ],
  related: ['pades', 'digital-signature', 'x509-certificate', 'sha-256'],
};

export default term;
