import type { Term } from '../types';

const term: Term = {
  slug: 'x509-certificate',
  term: 'X.509 certificate',
  aka: ['X509 certificate', 'X.509', 'SSL certificate format', 'Public key certificate'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'X.509 certificate: what it is, fields and how it works',
  description: 'An X.509 certificate is the standard file format for digital certificates. What fields it holds, how version 3 extensions work and how to read one.',
  short: 'An X.509 certificate is the standard format for a digital certificate: a signed record that binds a public key to a name. Website HTTPS certificates and digital signature certificates both use it.',
  body: [
    'X.509 is a standard from the ITU that defines what a certificate must contain and how it is encoded. Because every system reads the same layout, a certificate issued in one place can be checked in another. The internet profile of the standard is RFC 5280.',
    'Almost every certificate you meet is X.509: the padlock on a website, the certificate behind a signed PDF, the one on a company VPN. Each is a [digital signature certificate](/glossary/digital-signature-certificate) in the broad sense, with a name, a [public key](/glossary/public-key) and a signature from the authority that issued it.',
  ],
  sections: [
    {
      id: 'what-is',
      h: 'What is an X.509 certificate',
      p: [
        'It is a small data file, usually under two kilobytes, in a format called ASN.1 and normally saved as .cer, .crt, .pem or .der. Anyone may read it. It carries no secrets: the matching [private key](/glossary/private-key) is kept elsewhere.',
        'The certificate is signed by the issuer. If a single character of the name is changed, the issuer’s signature no longer matches and the certificate is rejected. That makes it [tamper-evident](/glossary/tamper-evident).',
      ],
    },
    {
      id: 'fields',
      h: 'X.509 certificate fields',
      p: [
        'A version 3 certificate, the version in use today, has these main fields:',
      ],
      list: [
        'Version: 3 for modern certificates.',
        'Serial number: unique for each certificate from one issuer. Revocation lists use it.',
        'Signature algorithm: how the issuer signed, for example RSA with SHA-256.',
        'Issuer: the name of the [certifying authority](/glossary/certifying-authority).',
        'Validity: a start and end date and time.',
        'Subject: who the certificate is for.',
        'Subject public key info: the public key and its algorithm.',
        'Extensions: optional fields that add rules, described below.',
        'The issuer’s signature over all of the above.',
      ],
    },
    {
      id: 'extensions',
      h: 'Extensions in version 3',
      p: [
        'Version 3 added extensions, which is where most of the practical rules sit:',
      ],
      list: [
        'Key usage: whether the key may sign documents, encrypt data or sign other certificates.',
        'Basic constraints: whether this is a CA certificate and how long a chain below it may be.',
        'Subject alternative name: extra names, such as website domains or an email address.',
        'CRL distribution points: where to download the [revocation list](/glossary/crl).',
        'Authority information access: where to find the issuer certificate and the [OCSP](/glossary/ocsp) service.',
      ],
    },
    {
      id: 'chain',
      h: 'How a certificate is trusted',
      p: [
        'A certificate is trusted because its issuer is trusted. The issuer’s own certificate is signed by a higher authority, up to a root certificate that the software already knows. This is the chain of trust. A checker walks up the chain, confirms each signature and each date, then checks that none has been revoked.',
      ],
    },
    {
      id: 'vs',
      h: 'X.509 vs PGP and other formats',
      p: [
        'X.509 uses a hierarchy: authorities vouch for people. PGP uses a web of trust, where people vouch for each other, and has no central authority. Legal digital signatures in Nepal rely on PKI and licensed authorities, so X.509 is the format that applies. Other formats exist for special uses, such as attribute certificates, but the identity certificate is the common one.',
      ],
    },
    {
      id: 'read',
      h: 'How to read an X.509 certificate',
      p: [
        'In a PDF reader, open the signature panel and choose to view the certificate. It shows the subject, issuer and dates. On a computer with OpenSSL, the command openssl x509 -in file.cer -text -noout prints every field. For a step-by-step on checking a signed document, see how to check a signed PDF.',
      ],
    },
    {
      id: 'example',
      h: 'Example: reading a signer’s certificate in a loan PDF',
      p: [
        'A bank officer opens a signed loan agreement and views the borrower’s certificate. The subject shows the borrower’s name. The issuer shows the licensed certifying authority. The validity field shows two dates, and the officer checks that the signing date falls between them. Key usage lists digital signature, which is the permission needed for signing documents. The signature algorithm line shows which hash and key type the authority used.',
        'None of those fields says the borrower is trustworthy as a borrower. They say an authority checked the borrower’s identity and tied it to this key. The decision to lend remains the bank’s.',
      ],
    },
    {
      id: 'encoding',
      h: 'File formats and encoding',
      p: [
        'Behind the fields, a certificate is a structure written in ASN.1 and encoded in a binary form called DER. The same bytes can be wrapped in text as PEM, which is the version with lines starting BEGIN CERTIFICATE that you can paste into an email. The file extensions follow habit more than rule: .cer and .crt usually hold one certificate, .pem is text, and .p12 or .pfx packs a certificate with its private key under a password.',
        'This matters when a counterparty asks you to send your certificate. Send only the certificate file, never the .p12 or .pfx bundle, because the bundle contains your private key. If someone asks for it, the request is either a mistake or an attack.',
      ],
    },
    {
      id: 'mistakes',
      h: 'Common problems with certificates',
      p: [
        'Four faults cause most failures. The certificate has expired. The signer’s software did not include the intermediate certificate, so the chain cannot be built. The certificate’s key usage does not allow the action, for example a website certificate used to sign a contract. Or the reader does not trust the issuing root.',
        'Each fault shows a different error, and each has a different fix: renew, add the intermediate, get the right kind of certificate, or update the reader. Reading the error against the fields above usually points to the cause within a minute.',
      ],
    },
    {
      id: 'versions',
      h: 'Why version 3 and what came before',
      p: [
        'Version 1 certificates had only the basic fields and no way to say what the key was for. Version 2 added unique identifiers that were rarely used. Version 3 added extensions, and with them rules such as key usage and basic constraints, which stop a signing certificate from being misused to issue other certificates. Almost every certificate in use today is version 3.',
        'Certificate revocation lists have their own versions, with version 2 being current. RFC 5280 profiles both for internet use, which is why that number comes up in nearly every discussion of certificates.',
      ],
    },
  ],
  faq: [
    { q: 'What does X.509 mean?', a: 'It is the number of the ITU standard that defines the format of public key certificates. The name has no meaning beyond that.' },
    { q: 'Is an X.509 certificate the same as an SSL certificate?', a: 'An SSL or TLS certificate is one kind of X.509 certificate, made for websites. Digital signature certificates are another kind with different key usage settings.' },
    { q: 'Does an X.509 certificate contain a private key?', a: 'No. It holds only the public key. The private key must be kept secret by its owner.' },
    { q: 'What file types are used for X.509 certificates?', a: 'Commonly .cer, .crt, .pem and .der for the certificate alone, and .p12 or .pfx when a certificate and private key are packed together under a password.' },
  ],
  related: ['digital-signature-certificate', 'chain-of-trust', 'public-key', 'pki'],
};

export default term;
