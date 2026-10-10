import type { Faq } from './products';

/** Questions on the home page. Each answer is restated by a page elsewhere on the site. */
export const homeFaq: Faq[] = [
  { q: 'What is a digital signature?', a: 'A digital signature is a value calculated from a document and the signer’s private key. Anyone with the matching public key can check that the document is the one that was signed and has not changed.' },
  { q: 'Is a digital signature legally recognised in Nepal?', a: 'Section 5 of the Electronic Transactions Act, 2063 gives a digital signature legal validity where the law requires a signature, if it is made by the procedures in the Act and the Rules made under it.' },
  { q: 'Who issues the certificate?', a: 'Certificates are issued by Nepal Certifying Company (NCC), the licensed certifying authority. ePahichan is the app and the API you use to apply for and use one.' },
  { q: 'Where is my signing key kept?', a: 'Your signing key is created on your phone and kept in its secure hardware, unlocked by your fingerprint or face. It does not leave the phone, and ePahichan cannot read it.' },
  { q: 'Does a signature show when a document was signed?', a: 'Not by itself. A signature shows who signed what. Proof of time needs a trusted timestamp, which is a separate record.' },
  { q: 'Can I sign any document digitally?', a: 'No. The Act excludes certain instruments, including deeds that transfer title to immovable property, documents of title, wills, mortgage and bond deeds, negotiable instruments, powers of attorney and court or arbitration pleadings.' },
  { q: 'Is ePahichan a government service?', a: 'No. ePahichan is built and run by Ninja Infosys Pvt. Ltd. Certificates are issued by Nepal Certifying Company.' },
];
