import type { Term } from '../types';

const term: Term = {
  slug: 'ocsp',
  term: 'OCSP',
  full: 'Online Certificate Status Protocol',
  aka: ['Online Certificate Status Protocol', 'OCSP responder', 'OCSP stapling'],
  updated: '2026-10-19',
  published: '2026-10-26',
  title: 'OCSP meaning: Online Certificate Status Protocol explained',
  description: 'OCSP lets software ask a certifying authority if a certificate is still valid and get a signed answer. How it works, OCSP stapling and OCSP vs CRL.',
  short: 'OCSP (Online Certificate Status Protocol) is a way to ask a certifying authority, in real time, whether one digital certificate is good, revoked or unknown, and receive a signed answer.',
  body: [
    'OCSP is defined in RFC 6960. Instead of downloading a whole [CRL](/glossary/crl), the checker sends the certificate’s serial number to a server called an OCSP responder and gets a short reply.',
    'It is the quicker half of [certificate revocation](/glossary/certificate-revocation) checking, used whenever a signature or a website certificate needs a current answer.',
  ],
  sections: [
    {
      id: 'meaning',
      h: 'OCSP meaning',
      p: [
        'OCSP stands for Online Certificate Status Protocol. The word status is the point: the response says one of three things. Good means the certificate has not been revoked. Revoked means it has. Unknown means the responder does not recognise it. The responder signs its reply so the answer cannot be altered in transit.',
      ],
    },
    {
      id: 'how',
      h: 'How OCSP works',
      p: [
        'The address of the responder is stored in the certificate, in the authority information access extension of its [X.509 format](/glossary/x509-certificate). The process is:',
      ],
      list: [
        'The software reads the responder address from the certificate.',
        'It sends a request with the issuer details and the certificate serial number.',
        'The responder looks up the status and returns a signed response with a time it was produced.',
        'The software checks the signature and the time, then accepts or rejects the certificate.',
      ],
    },
    {
      id: 'stapling',
      h: 'OCSP stapling',
      p: [
        'Asking the authority each time adds delay and tells the authority which certificates are being checked. Stapling solves both. The certificate holder, or the server, fetches a recent OCSP response and attaches it. The verifier trusts the signed response and does not contact the authority. In signed PDFs, the same idea is used when the response is embedded in the file for [long-term validation](/glossary/long-term-validation).',
      ],
    },
    {
      id: 'vs-crl',
      h: 'OCSP vs CRL',
      p: [
        'OCSP answers are small and current. Lists are larger and may be stale but work offline. The weak point of OCSP is availability: if the responder is down, software must decide whether to fail or to carry on. Strict systems fail. Keeping the answer inside the signed document avoids the problem.',
      ],
    },
    {
      id: 'failing',
      h: 'What happens when the responder is down',
      p: [
        'Because OCSP needs a live server, the checker has to decide what to do when no answer comes. Failing closed means the certificate is rejected, which is safe but can stop real work. Failing open means it is accepted, which keeps work moving but lets a revoked certificate through. Signed documents avoid the dilemma when the answer was captured at signing time.',
        'Responses carry a produced-at time and a next-update time, and checkers should reject answers that are too old. A nonce can tie an answer to one request, though many responders skip it for speed and sign pre-produced answers instead. These details are why a signed PDF that embeds its own answers, as in [PAdES](/glossary/pades), is easier to trust years later.',
      ],
    },
    {
      id: 'example',
      h: 'Example: checking a signature in a PDF reader',
      p: [
        'When you open a signed HR letter, the reader builds the chain and sends one OCSP request for the signer’s certificate. A second request may go for the intermediate. Each reply is signed by the authority’s responder. The reader then shows a green status if all are good.',
        'On a slow connection the request can time out, and the reader may show the signature as valid with a warning that revocation could not be checked. That is the reader being honest: the signature is fine mathematically, but one fact is unconfirmed. Try again online, or ask the sender for a copy with the answers embedded.',
      ],
    },
    {
      id: 'privacy',
      h: 'Privacy and scale',
      p: [
        'Each OCSP request tells the responder which certificate is being checked and, from the network address, who is checking. For signature checks by a bank, that can reveal which customers are being served. Stapling and embedded answers remove this leak because the verifier does not contact the authority.',
        'Responders also face load: a popular certificate can be checked millions of times. Authorities handle this with pre-signed answers valid for a few days, which are cached and served by many servers. That is why an OCSP answer carries a validity window and should not be treated as a live feed.',
      ],
    },
  ],
  faq: [
    { q: 'What does OCSP stand for?', a: 'Online Certificate Status Protocol.' },
    { q: 'What is an OCSP responder?', a: 'The server run by or for a certifying authority that answers status questions about its certificates.' },
    { q: 'Is OCSP better than CRL?', a: 'It is faster and fresher, but depends on the server being online. Neither is better in every case, so many systems support both.' },
    { q: 'What does an OCSP unknown response mean?', a: 'The responder does not recognise the certificate, for example because it came from a different issuer. The checker should not treat it as good.' },
  ],
  related: ['certificate-revocation', 'crl', 'x509-certificate', 'trusted-timestamp'],
};

export default term;
