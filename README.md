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

Everything is in **`src/data/images.ts`**. That's the only file you need to touch.
Each slot is clearly labeled by section (hero, story, love-most, distance, finale).
Two ways to swap a photo in:

1. Drop a real photo into `src/assets/photos/`, import it at the top of `images.ts`,
   and use it in place of the placeholder URL.
2. Or just paste a hosted image URL directly as a string.

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

The music button in the bottom-right corner plays a soft original instrumental —
generated live in the browser with Tone.js (see `src/audio/theme.ts`), so there's
no audio file to source or license. Playback never starts on its own; it only
begins when the button is tapped. You can tweak the chords, tempo, or tone
color directly in that file if you want a different mood.

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
