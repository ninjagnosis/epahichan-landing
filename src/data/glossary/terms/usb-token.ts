import type { Term } from '../types';

const term: Term = {
  slug: 'usb-token',
  term: 'USB token',
  aka: ['DSC token', 'ePass token', 'Crypto token', 'USB crypto token', 'Digital signature USB token', 'Smart card token'],
  updated: '2026-10-19',
  published: '2026-10-19',
  title: 'USB token for digital signature: what it is and how it works',
  description: 'A USB token is a small device that holds a digital signature key and signs inside it. How a DSC token works, its PIN and how it compares with a phone.',
  short: 'A USB token is a small USB device with a secure chip that stores a digital signature key and certificate. Signing happens inside the token, protected by a PIN, so the private key cannot be copied.',
  body: [
    'Before phones had secure chips, the usual way to keep a signing key safe was a USB token. It looks like a flash drive but contains a smart card chip. The private key is created inside and never leaves. When you sign, the computer sends the document hash to the token, the token signs it, and only the signature comes back.',
    'Many people call it a DSC token, after [digital signature certificate](/glossary/digital-signature-certificate), and brand names like ePass and WatchData are used for the type. Some businesses still use them for signing on a desktop.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'What is a USB token',
      p: [
        'It has three parts: a USB connector, a smart card chip and a small memory area. The chip holds the key pair and the certificate. Software on the computer talks to it through a standard interface called PKCS #11, or through the operating system’s smart card service. Most tokens work with Windows, macOS and Linux, though drivers vary.',
      ],
    },
    {
      id: 'how',
      h: 'How a USB token works',
      p: [
        'The steps when signing a PDF:',
      ],
      list: [
        'Plug in the token. The signing software finds the certificate on it.',
        'Choose the document and where to place the signature.',
        'Enter the token PIN when asked. This unlocks the key for that operation.',
        'The software sends the document hash to the token, which signs it and returns the result.',
        'The signature and certificate are written into the PDF. See [PAdES](/glossary/pades) for the format.',
      ],
    },
    {
      id: 'pin',
      h: 'PIN, drivers and common problems',
      p: [
        'The PIN is the only thing protecting the key if the token is lost. After several wrong tries, tokens lock, and a longer admin code or the issuing authority is needed to reset. Common faults are a missing driver, a PIN-lock after too many tries, the token not appearing because of a port or hub, and the signing software using a different interface from the one the token supports. Keep the PIN apart from the token.',
      ],
    },
    {
      id: 'vs-phone',
      h: 'USB token vs phone secure hardware',
      p: [
        'A token is portable between computers and independent of the phone. The costs are the driver setup, an extra device to carry and lose, and a desktop to use it on. A phone’s [secure element](/glossary/secure-element) gives the same key protection, unlocked with fingerprint or face, with nothing to plug in. Larger systems that sign for many people use an [HSM](/glossary/hsm) instead.',
      ],
    },
    {
      id: 'nepal',
      h: 'USB tokens in Nepal',
      p: [
        'Nepal Certifying Company, working with Radiant InfoTech Nepal, was reported to have launched the first digital signatures in Nepal on a password-protected USB token, and a bank announced its use of them in 2016. That is the main public record found, and it is several years old. What the licensed authorities issue today, tokens, phones or both, should be confirmed with the authority itself before you buy anything.',
        'A token made for another country’s authority will not hold a Nepali certificate, because the certificate is loaded by the issuing authority. The steps for getting a certificate are in [how to get a digital signature certificate in Nepal](/blog/how-to-get-digital-signature-certificate-nepal).',
      ],
    },
    {
      id: 'lost',
      h: 'If the token is lost or stolen',
      p: [
        'Tell the authority right away so the certificate can be revoked. The PIN slows a thief but should not be relied on alone. A new token and certificate must be issued, because the key cannot be recovered from a lost device.',
      ],
    },
    {
      id: 'setup',
      h: 'Step by step: using a token for the first time',
      p: [
        'First, install the driver or middleware that the token’s maker provides, since the operating system may not recognise it. Second, plug in the token and open the vendor’s token manager to see that the certificate is listed. Third, change the default PIN to your own. Fourth, in the signing software, select the certificate from the list and sign. Fifth, store the admin code somewhere separate from the token.',
        'If the signing software does not list the certificate, the usual cause is that it uses a different interface from the one the token provides. Check which module the software expects, or test with the vendor’s own tool first.',
      ],
    },
    {
      id: 'example',
      h: 'Example: a company director signing board papers',
      p: [
        'A director signs board papers on an office desktop with a token. She plugs it in, opens the PDF, selects the signature field, chooses her certificate and types her PIN. The software writes a [PAdES](/glossary/pades) signature with her name. She removes the token and puts it in a drawer.',
        'If a staff member later borrows her computer, the token is not in it, so no one can sign as her. If the token is stolen, the thief still needs the PIN. Both barriers only help if the token and PIN are kept apart.',
      ],
    },
    {
      id: 'limits',
      h: 'Where tokens fall short',
      p: [
        'A token needs a computer with a free USB port and the right driver, which excludes many phones and some locked-down office machines. Tokens can be left in a bag or forgotten at the office, so signing is tied to a place. They are a single piece of hardware with a single copy of the key, so there is no backup. If it breaks, the authority has to issue a new certificate.',
        'Finally, a token proves possession and a PIN, not a person. Anyone who knows the PIN and holds the token can sign. A phone with fingerprint or face adds a check on the person, which is why some businesses prefer it for staff who sign often.',
      ],
    },
  ],
  faq: [
    { q: 'What is a DSC token?', a: 'A USB token that holds a digital signature certificate and its private key. DSC is short for digital signature certificate.' },
    { q: 'Is a USB token the same as a pen drive?', a: 'No. A pen drive stores files that can be copied. A token has a secure chip that signs inside itself and never gives up the key.' },
    { q: 'Can I copy the certificate from a token to another computer?', a: 'You can copy the public certificate, but not the private key. Signing must be done with the token plugged in.' },
    { q: 'Do I need a USB token to sign documents digitally in Nepal?', a: 'Not always. Certificates can also be held in a phone’s secure hardware, as with the ePahichan app. It depends on what the authority issues.' },
    { q: 'What happens if I forget the token PIN?', a: 'After too many wrong attempts the token locks. The authority or vendor must reset it, which may mean issuing a new certificate.' },
  ],
  related: ['digital-signature-certificate', 'private-key', 'hsm', 'secure-element', 'key-pair'],
  product: 'app',
};

export default term;
