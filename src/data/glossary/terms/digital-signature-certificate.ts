import type { Term } from '../types';

const term: Term = {
  slug: 'digital-signature-certificate',
  term: 'Digital signature certificate',
  aka: ['DSC', 'Digital certificate', 'Digital signature certificate Nepal', 'डिजिटल हस्ताक्षर प्रमाणपत्र'],
  updated: '2026-10-19',
  title: 'Digital signature certificate: meaning and how to get one',
  description: 'A digital signature certificate ties a public key to a named person. What it holds, who issues it in Nepal, how long it lasts and how to get one.',
  short: 'A digital signature certificate is a record, issued by a certifying authority, that ties a public key to a named person. It is what lets someone checking a signature know whose signature it is.',
  body: [
    'A key pair alone says nothing about a person: anybody can generate one. A certificate fixes that gap. The [certifying authority](/glossary/certifying-authority) checks who you are, then signs a statement that this public key belongs to you.',
    'When you sign a PDF, your certificate travels with the signature, so whoever opens the file can see who signed and which authority vouched for them. In Nepal, only a licensed or recognised certifying authority may issue one. ePahichan certificates come from Nepal Certifying Company.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'Digital signature certificate meaning',
      p: [
        'A digital signature certificate (DSC) is the digital equivalent of an identity document that other computers can check. It states a name, a public key, the dates it is valid and the authority that issued it. The authority then signs all of that, so nobody can edit the name or swap the key without the change being detected.',
        'It is different from the signature itself. The certificate says who you are. The digital signature is the mark made on one particular document with your private key. The certificate lets the reader check that mark.',
      ],
    },
    {
      id: 'contents',
      h: 'What is inside a certificate',
      p: [
        'Certificates follow the [X.509 standard](/glossary/x509-certificate). The fields a bank officer or business owner will care about are:',
      ],
      list: [
        'Subject: the holder’s name, and often other details checked by the authority.',
        'Issuer: the certifying authority that vouches for the holder.',
        'Public key: the half of the key pair that anyone may use to check signatures.',
        'Validity period: the dates between which the certificate can be used.',
        'Serial number: a number unique to that certificate, used when it is revoked.',
        'Key usage: what the key may be used for, such as signing documents.',
        'The authority’s own signature over everything above.',
      ],
    },
    {
      id: 'nepal',
      h: 'Who issues digital signature certificates in Nepal',
      p: [
        'The Electronic Transactions Act, 2063 sets up the legal framework. Only a licensed or recognised certifying authority may issue digital signature certificates, and the licensing is overseen by the Office of the Controller of Certification (see [OCC Nepal](/glossary/occ-nepal) and the [Electronic Transactions Act](/glossary/electronic-transactions-act)). Certificates from an unlicensed source are not what the Act has in mind.',
        'ePahichan is not itself the authority. Its certificates are issued by Nepal Certifying Company, and the app is how a person asks for one and uses it.',
      ],
    },
    {
      id: 'how-to-get',
      h: 'How to get a digital signature certificate',
      p: [
        'The authority has to confirm that the person asking is who they say they are before it signs a certificate in their name. The steps are usually:',
      ],
      list: [
        'Generate a key pair on a device you control. The private key stays there.',
        'Send the authority a request that carries the public key (a CSR) together with your identity details.',
        'Prove your identity, for example with your citizenship certificate and a live photo.',
        'The authority checks, issues the certificate and returns it. You install it next to your private key.',
      ],
    },
    {
      id: 'validity',
      h: 'How long a certificate lasts and what happens after',
      p: [
        'Every certificate has an end date, so it has to be renewed from time to time. Check the period stated on your own certificate, because it is set by the authority and the type of certificate.',
        'A signature made while the certificate was valid does not automatically stop being valid on the end date, provided it carries proof of when it was made. The blog post [what happens to a signature after the certificate expires](/blog/signature-after-certificate-expires) explains this, and long-term validation is the technique behind it. A certificate can also be ended early if the key is lost; see certificate revocation.',
      ],
    },
    {
      id: 'uses',
      h: 'What you can use a digital signature certificate for',
      p: [
        'Common uses are signing contracts, loan agreements, HR letters and board resolutions as PDFs, so no one has to print and courier a paper copy. Businesses also use certificates to sign invoices and statements, and to prove who sent a file.',
        'A certificate does not prove that the content of a document is true or that the signer understood it. The post what a digital signature does not prove covers the limits.',
      ],
    },
    {
      id: 'epahichan',
      h: 'Digital signature certificate with ePahichan',
      p: [
        'In the ePahichan app, a person gets a certificate from a licensed certifying authority using their citizenship certificate and a selfie. The signing key is created in the phone’s secure hardware and is unlocked with fingerprint or face, so the key does not sit in a file that can be copied. For the full walk-through see [how to get a digital signature certificate in Nepal](/blog/how-to-get-digital-signature-certificate-nepal).',
      ],
    },
    {
      id: 'classes',
      h: 'Types of certificates and what the name means',
      p: [
        'People use the same words for several things. An individual certificate names one person. An organisation certificate names a company and often a person acting for it. A signing certificate is for documents, while an encryption certificate is for protecting data, and a website certificate is for HTTPS. The key usage field in the certificate says which.',
        'Check that the certificate you hold is the kind your use needs. A certificate for another purpose may be rejected by a PDF reader or a counterparty even though it is real.',
      ],
    },
    {
      id: 'example',
      h: 'Example: a business signing a supply contract',
      p: [
        'A company director gets a certificate through the app after the authority checks the director’s citizenship certificate and live photo. The director signs a supply contract PDF. The supplier opens it, sees the director’s name, the issuing authority and a valid status. The contract needs no print, courier or wet signature.',
        'If the director leaves the company, the certificate names the person, not the role, so the company should ask the authority to revoke it and issue a new one to the successor.',
      ],
    },
  ],
  faq: [
    { q: 'What is a digital signature certificate?', a: 'It is a record issued by a certifying authority that links a public key to a named person or organisation, so others can tell whose digital signature they are looking at.' },
    { q: 'Who issues digital signature certificates in Nepal?', a: 'Licensed or recognised certifying authorities under the Electronic Transactions Act, 2063. ePahichan certificates come from Nepal Certifying Company.' },
    { q: 'What is the difference between a digital signature and a digital signature certificate?', a: 'The certificate identifies the signer and carries their public key. The digital signature is the mark made on a document with the matching private key. A checker needs both.' },
    { q: 'Does a digital signature certificate expire?', a: 'Yes. Each has a validity period set by the authority. Signatures made before expiry can stay verifiable if they carry a trusted timestamp.' },
    { q: 'Is a scanned signature the same as a digital signature certificate?', a: 'No. A scanned signature is an image anyone can copy. A certificate is tied to a cryptographic key that only the holder controls.' },
  ],
  related: ['certifying-authority', 'public-key', 'x509-certificate', 'kyc'],
  product: 'app',
};

export default term;
