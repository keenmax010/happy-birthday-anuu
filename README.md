# Happy Birthday, Anu 💌

A private, animated love-letter website — built as a personal scrapbook, not a template.

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build a deployable static version:

```bash
npm run build
```

This outputs everything into `dist/` — you can drag that folder into any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.) or open `dist/index.html` directly.

## Replacing the placeholder photos

You shouldn't need to touch any code for this. `src/data/images.ts` now wires up
18 numbered photo slots automatically:

1. Name your 18 photos so each one **ends in a number 1 through 18**
   (e.g. `photo1`, `photo2`... or `anu1`, `anu2`... or `pic1`, `pic2`... —
   any name works, as long as it ends with the number).
2. Drop them straight into `src/assets/photos/`.
   Any common image format works — `.jpg`, `.jpeg`, `.png`, or `.webp` —
   and files don't all need to match the same extension.
3. Done. Whichever file ends in "1" fills the 1st slot, "2" the 2nd, and so on.

Which number goes where:

| Photos | Section |
|---|---|
| 1 – 4 | Hero (floating polaroids at the top) |
| 5 – 8 | Story ("Where It All Started" timeline) |
| 9 – 11 | LoveMost ("What I Love Most") |
| 12 – 13 | Distance (left / right silhouettes) |
| 14 – 18 | Finale (closing collage) |

Any slot you haven't filled in yet just falls back to a placeholder image, so the
site keeps working while you're still gathering photos — add the missing ones
whenever you have them.

## Editing the words

All the copy — the story, the "why you're special" cards, the little-things flip cards,
the five letters, and the final message — lives in **`src/data/content.ts`**. Nothing else
needs to change; the components just read from this file.

## The cake intro

Instead of a plain "Start Our Story" button, the hero opens with an interactive
cake: tap to blow out the candle, a personalized "Happy Birthday" plays (an
original Tone.js rendition of the public-domain tune, with a cute cartoon
mascot cheering and party-popper confetti), then a "Cut the Cake" button
appears — cutting it triggers one more confetti burst and smoothly carries
into "Our Story." All of this lives in `src/components/CakeIntro.tsx`,
`src/components/CheerMascot.tsx`, and `src/audio/birthdaySong.ts` if you want
to tweak the wording, timing, or mascot styling.

## Background music

The music button in the bottom-right corner loops the track at
`src/assets/audio/background-music.mp3` (see `src/audio/theme.ts`). Playback
never starts on its own; it only begins when the button is tapped. Want a
different track? Just replace that mp3 file with another one of the same name.

This background music automatically pauses for the cake-cutting "Happy
Birthday" song (see above) and resumes right after, so the two never play
on top of each other.

## Structure

```
src/
  data/            content.ts (all text) + images.ts (all photos)
  components/      shared UI: Polaroid, ThreadProgress, AmbientField, etc.
  sections/        one file per page section, in the order they appear
  hooks/           small hooks (reduced motion, scroll progress)
```

## Notes

- Fully respects `prefers-reduced-motion`.
- Built mobile-first — test at narrow widths first if you make changes.
- The final section only unlocks after all five letters have been opened at least once.
