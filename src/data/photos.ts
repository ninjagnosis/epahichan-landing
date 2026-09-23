import type { ImageMetadata } from 'astro';
import fingerprint from '../assets/photos/fingerprint.jpg';

export type Photo = {
  src: ImageMetadata;
  credit: string;
  source: string;
  alt: string;
};

// Pexels license: free for commercial use, no attribution required; credited
// here out of courtesy. Chosen for theme (identity) rather than place — see
// docs/landing-content-v1.md §4 for the original shop-photo pair this
// replaces. The hero uses it decoratively, so the alt text is not rendered
// today; it is kept so the photo can be used non-decoratively without
// someone having to invent it later.
export const photos = {
  hero: {
    src: fingerprint,
    credit: 'cottonbro studio (Pexels)',
    source: 'https://www.pexels.com/photo/close-up-photo-of-fingerpints-on-paper-8382611/',
    alt: 'A close-up photo of a fingerprint taken on paper',
  },
} as const;
