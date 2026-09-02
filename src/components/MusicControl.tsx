import { useState } from 'react';
import { Music, Volume2 } from 'lucide-react';
import { theme } from '../audio/theme';

/**
 * Background music control. Nothing plays until the person explicitly
 * taps this button — no autoplay, ever. Plays the track at
 * src/assets/audio/background-music.mp3 on a loop (see src/audio/theme.ts).
 * This background track automatically pauses during the cake-cutting
 * "Happy Birthday" song and resumes afterward, so the two never overlap.
 */
export default function MusicControl() {
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (playing) {
      theme.stop();
      setPlaying(false);
    } else {
      await theme.start();
      setPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={playing ? 'Pause music' : 'Play background music'}
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-plum/90 text-paper shadow-lg backdrop-blur transition-transform hover:scale-105 active:scale-95"
    >
      {playing ? (
        <Volume2 size={18} className="text-rose animate-pulse" />
      ) : (
        <Music size={18} className="text-paper/80" />
      )}
    </button>
  );
}
