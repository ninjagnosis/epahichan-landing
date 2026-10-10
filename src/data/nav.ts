import { products } from './products';
import { solutions } from './solutions';

export const productLinks = products.map((p) => ({ href: `/products/${p.slug}`, label: p.name }));
export const solutionLinks = solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.name }));

export const footerColumns = [
  { title: 'Products', links: productLinks },
  { title: 'Solutions', links: solutionLinks },
  {
    title: 'Company',
    links: [
      { href: '/blog', label: 'Insights' },
      { href: '/glossary', label: 'Glossary' },
      { href: '/how-signing-works', label: 'Try a signature' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/terms', label: 'Terms' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/delete-account', label: 'Delete account' },
    ],
  },
];
