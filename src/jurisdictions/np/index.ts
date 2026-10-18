import type { JurisdictionContent } from '../types';
import { copy } from './copy';
import { homeFaq } from './faq';
import { glossary } from './glossary';
import { products } from './products';
import { solutions } from './solutions';

// Nepal: the Electronic Transactions Act, 2063, citizenship and the National ID, Bikram Sambat dates.
const np: JurisdictionContent = { products, solutions, glossary, homeFaq, copy };

export default np;
