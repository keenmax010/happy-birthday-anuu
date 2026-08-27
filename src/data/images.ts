/**
 * ─────────────────────────────────────────────────────────────
 *  PHOTO CONFIGURATION — replace placeholder URLs with real photos
 * ─────────────────────────────────────────────────────────────
 *
 *  This is the ONLY file you need to touch to swap in real photos.
 *  Every image on the site is pulled from this object.
 *
 *  HOW TO REPLACE A PHOTO:
 *  1. Put your photo somewhere it can be loaded from — the easiest way
 *     for a small personal site like this is to drop the file into
 *     `src/assets/photos/` and import it, e.g.:
 *
 *        import polaroid1 from '../assets/photos/us-at-the-cafe.jpg';
 *        ...
 *        hero: [polaroid1, ...]
 *
 *  2. Or, if the photo is already hosted somewhere (e.g. a private
 *     image host), just paste the URL as a string directly.
 *
 *  Every placeholder below is intentionally a *different* image so it's
 *  obvious which slot is which while you're testing the site. The
 *  `caption` fields are optional little captions that show under some
 *  polaroids — feel free to rewrite them too.
 */

export interface PhotoSlot {
  src: string;
  caption?: string;
  alt: string;
}

// Reusable seeded placeholders (stable — same seed always returns the same image)
const ph = (seed: string, w = 600, h = 750) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  /** Floating polaroids around the hero title */
  hero: [
    { src: ph('anu-hero-1'), alt: 'A photo of us, placeholder 1', caption: 'that day' } as PhotoSlot,
    { src: ph('anu-hero-2'), alt: 'A photo of us, placeholder 2', caption: 'us' } as PhotoSlot,
    { src: ph('anu-hero-3'), alt: 'A photo of us, placeholder 3', caption: 'this one' } as PhotoSlot,
    { src: ph('anu-hero-4'), alt: 'A photo of us, placeholder 4', caption: 'my favorite' } as PhotoSlot,
  ],

  /** "Where It All Started" — small photos along the thread timeline */
  story: [
    { src: ph('anu-story-1', 500, 500), alt: 'Two strangers', caption: 'two strangers' } as PhotoSlot,
    { src: ph('anu-story-2', 500, 500), alt: 'The game we met in', caption: 'the game' } as PhotoSlot,
    { src: ph('anu-story-3', 500, 500), alt: 'Late night calls', caption: 'that call, 2am' } as PhotoSlot,
    { src: ph('anu-story-4', 500, 500), alt: 'Something real', caption: 'something real' } as PhotoSlot,
  ],

  /** "What I Love Most" — slow fade-in floating photos */
  loveMost: [
    { src: ph('anu-love-1', 500, 650), alt: 'Her presence, placeholder 1' } as PhotoSlot,
    { src: ph('anu-love-2', 500, 650), alt: 'Her presence, placeholder 2' } as PhotoSlot,
    { src: ph('anu-love-3', 500, 650), alt: 'Her presence, placeholder 3' } as PhotoSlot,
  ],

  /** "If Distance Wasn't a Thing" — two silhouettes drifting together */
  distance: {
    left: { src: ph('anu-distance-left', 500, 700), alt: 'Silhouette placeholder, left' } as PhotoSlot,
    right: { src: ph('anu-distance-right', 500, 700), alt: 'Silhouette placeholder, right' } as PhotoSlot,
  },

  /** Final surprise section — closing collage */
  finale: [
    { src: ph('anu-finale-1', 450, 560), alt: 'Us, placeholder 1' } as PhotoSlot,
    { src: ph('anu-finale-2', 450, 560), alt: 'Us, placeholder 2' } as PhotoSlot,
    { src: ph('anu-finale-3', 450, 560), alt: 'Us, placeholder 3' } as PhotoSlot,
    { src: ph('anu-finale-4', 450, 560), alt: 'Us, placeholder 4' } as PhotoSlot,
    { src: ph('anu-finale-5', 450, 560), alt: 'Us, placeholder 5' } as PhotoSlot,
  ],
};

export type ImageConfig = typeof images;
