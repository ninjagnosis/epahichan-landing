import type { Term } from '../types';

const term: Term = {
  slug: 'kyc',
  term: 'KYC',
  full: 'Know your customer',
  short: 'KYC is the identity information a bank or other regulated business collects and verifies about a customer. A certificate application can reuse KYC the institution already holds.',
  body: [
    'Banks collect name, address, identity document and photo when an account is opened. That record is KYC.',
    'Through the Signing API, a bank can draw a certificate application from the KYC it already has, so the customer does not upload the same documents again.',
  ],
  related: ['nin', 'digital-signature-certificate'],
  product: 'signing-api',
};

export default term;
