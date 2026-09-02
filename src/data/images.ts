/**
 * ─────────────────────────────────────────────────────────────
 *  PHOTO CONFIGURATION — replace placeholder URLs with real photos
 * ─────────────────────────────────────────────────────────────
 *
 *  This is the ONLY file you need to touch — and for normal use, you
 *  won't even need to touch it. Every image on the site is pulled from
 *  this file, and every slot is wired to a numbered photo, 1 through 18.
 *
 *  HOW TO ADD YOUR PHOTOS:
 *  1. Name your 18 photos so each one ENDS in a number 1 through 18
 *     (e.g. photo1, photo2... OR anu1, anu2... OR pic1, pic2... —
 *     any name works, as long as it ends with the number).
 *  2. Drop them straight into `src/assets/photos/`.
 *     Any common image format works — .jpg, .jpeg, .png, or .webp —
 *     you don't need to touch this file or match extensions exactly.
 *  3. That's it. Whichever file ends in "1" fills the 1st slot below,
 *     whichever ends in "2" fills the 2nd, and so on.
 *
 *  If a numbered photo hasn't been added yet, that slot automatically
 *  falls back to a placeholder image so the site never breaks — just
 *  drop in the missing file whenever you have it and it'll swap in.
 *
 *  Slot order (which number goes where):
 *    1  - 4   -> Hero (floating polaroids at the top)
 *    5  - 8   -> Story ("Where It All Started" timeline)
 *    9  - 11  -> LoveMost ("What I Love Most")
 *    12 - 13  -> Distance (left / right silhouettes)
 *    14 - 18  -> Finale (closing collage)
 */

// Eagerly grabs every image file in src/assets/photos/, whatever it's named.
const photoModules = import.meta.glob<{ default: string }>(
  '../assets/photos/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}',
  { eager: true }
);

// Reusable seeded placeholder (stable - same seed always returns the same image)
const ph = (seed: string, w = 600, h = 750) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

/**
 * Look up a photo by its number, no matter what it's called or what
 * extension it uses — as long as the filename ends in that number
 * right before the extension (photo7.jpg, anu7.png, pic-7.jpeg, etc).
 */
function photo(n: number, fallbackSeed: string, w?: number, h?: number): string {
  const entry = Object.entries(photoModules).find(([path]) => {
    const match = path.match(/(\d+)\.[A-Za-z]+$/);
    return match ? Number(match[1]) === n : false;
  });
  return entry ? entry[1].default : ph(fallbackSeed, w, h);
}

export interface PhotoSlot {
  src: string;
  caption?: string;
  alt: string;
}

export const images = {
  /** Floating polaroids around the hero title - photos 1 to 4 */
  hero: [
    { src: photo(1, 'anu-hero-1'), alt: 'A photo of us, photo 1', caption: 'that day' } as PhotoSlot,
    { src: photo(2, 'anu-hero-2'), alt: 'A photo of us, photo 2', caption: 'us' } as PhotoSlot,
    { src: photo(3, 'anu-hero-3'), alt: 'A photo of us, photo 3', caption: 'this one' } as PhotoSlot,
    { src: photo(4, 'anu-hero-4'), alt: 'A photo of us, photo 4', caption: 'my favorite' } as PhotoSlot,
  ],

  /** "Where It All Started" - small photos along the thread timeline - photos 5 to 8 */
  story: [
    { src: photo(5, 'anu-story-1', 500, 500), alt: 'Two strangers', caption: 'two strangers' } as PhotoSlot,
    { src: photo(6, 'anu-story-2', 500, 500), alt: 'The game we met in', caption: 'the game' } as PhotoSlot,
    { src: photo(7, 'anu-story-3', 500, 500), alt: 'Late night calls', caption: 'that call, 2am' } as PhotoSlot,
    { src: photo(8, 'anu-story-4', 500, 500), alt: 'Something real', caption: 'something real' } as PhotoSlot,
  ],

  /** "What I Love Most" - slow fade-in floating photos - photos 9 to 11 */
  loveMost: [
    { src: photo(9, 'anu-love-1', 500, 650), alt: 'Her presence, photo 1' } as PhotoSlot,
    { src: photo(10, 'anu-love-2', 500, 650), alt: 'Her presence, photo 2' } as PhotoSlot,
    { src: photo(11, 'anu-love-3', 500, 650), alt: 'Her presence, photo 3' } as PhotoSlot,
  ],

  /** "If Distance Wasn't a Thing" - two silhouettes drifting together - photos 12, 13 */
  distance: {
    left: { src: photo(12, 'anu-distance-left', 500, 700), alt: 'Photo, left' } as PhotoSlot,
    right: { src: photo(13, 'anu-distance-right', 500, 700), alt: 'Photo, right' } as PhotoSlot,
  },

  /** Final surprise section - closing collage - photos 14 to 18 */
  finale: [
    { src: photo(14, 'anu-finale-1', 450, 560), alt: 'Us, photo 1' } as PhotoSlot,
    { src: photo(15, 'anu-finale-2', 450, 560), alt: 'Us, photo 2' } as PhotoSlot,
    { src: photo(16, 'anu-finale-3', 450, 560), alt: 'Us, photo 3' } as PhotoSlot,
    { src: photo(17, 'anu-finale-4', 450, 560), alt: 'Us, photo 4' } as PhotoSlot,
    { src: photo(18, 'anu-finale-5', 450, 560), alt: 'Us, photo 5' } as PhotoSlot,
  ],
};

export type ImageConfig = typeof images;
