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

## Adding background music

Drop an mp3 at `public/music/theme.mp3`. The music button in the bottom-right corner
will start working automatically — playback never starts on its own, only when it's tapped.

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
