import backgroundTrack from '../assets/audio/background-music.mp3';

/**
 * Background music for the site — plays the uploaded track
 * (src/assets/audio/background-music.mp3) on a loop.
 *
 * Nothing plays until `theme.start()` is called from a real user gesture
 * (the music button's onClick) — this respects browser autoplay policy
 * and the site's own "no autoplay" requirement.
 *
 * This background track is automatically ducked (paused) while the
 * cake-cutting "Happy Birthday" song plays (see CakeIntro.tsx), and
 * resumes afterwards if it was playing before — so the two never
 * overlap.
 */
class BackgroundTheme {
  private audio: HTMLAudioElement | null = null;
  private playing = false;
  private duckedBySong = false;

  private build() {
    if (this.audio) return;
    this.audio = new Audio(backgroundTrack);
    this.audio.loop = true;
    this.audio.volume = 0.5;
  }

  async start() {
    this.build();
    await this.audio?.play();
    this.playing = true;
  }

  stop() {
    this.audio?.pause();
    this.playing = false;
    this.duckedBySong = false;
  }

  isPlaying() {
    return this.playing;
  }

  /** Pause background music for the cake-cutting song, if it's currently playing. */
  duck() {
    if (this.playing && this.audio && !this.audio.paused) {
      this.audio.pause();
      this.duckedBySong = true;
    }
  }

  /** Resume background music after the cake-cutting song finishes, if we ducked it. */
  resume() {
    if (this.duckedBySong) {
      this.duckedBySong = false;
      void this.audio?.play();
    }
  }
}

export const theme = new BackgroundTheme();
