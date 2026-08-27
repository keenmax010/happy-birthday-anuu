import { useState } from 'react';
import { Music, Volume2 } from 'lucide-react';
import { theme } from '../audio/theme';

/**
 * Background music control. Nothing plays until the person explicitly
 * taps this button — no autoplay, ever. The instrumental itself is an
 * original piece generated live in the browser (see src/audio/theme.ts),
 * so there's no audio file to source, license, or ship.
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
      title={playing ? 'Pause music' : 'Play soft instrumental'}
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
