import { useRef, useState } from 'react';
import { Music, VolumeX, Volume2 } from 'lucide-react';

/**
 * Background music control. Does NOT autoplay — playback only starts
 * after the user explicitly taps this button, per browser autoplay
 * policy and the site's own design brief.
 *
 * Drop an mp3 at `public/music/theme.mp3` to enable it — until then
 * this gracefully does nothing but toggle its own icon.
 */
export default function MusicControl() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      setFailed(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none" onError={() => setFailed(true)}>
        <source src="/music/theme.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={failed ? 'Add a track at public/music/theme.mp3 to enable music' : playing ? 'Pause music' : 'Play music'}
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-paper/20 bg-plum/90 text-paper shadow-lg backdrop-blur transition-transform hover:scale-105 active:scale-95"
      >
        {playing ? (
          <Volume2 size={18} className="text-rose" />
        ) : failed ? (
          <VolumeX size={18} className="text-paper/50" />
        ) : (
          <Music size={18} className="text-paper/80" />
        )}
      </button>
    </>
  );
}
