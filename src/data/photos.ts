export type Photo = {
  /** Path under src/assets/photos, pre-cropped to the ratio it is displayed at. */
  src: string;
  credit: string;
  source: string;
  alt: { ne: string; en: string };
};

/**
 * Photo selection is Round 3 content (owner decision, not yet made). This
 * placeholder entry exists only so the shape is reviewable; it is not
 * imported or rendered by any page yet.
 */
export const photos: Record<string, Photo> = {
  placeholder: {
    src: '',
    credit: '',
    source: '',
    alt: { ne: '', en: '' },
  },
};
