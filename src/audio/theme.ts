import * as Tone from 'tone';

/**
 * A soft, warm, original instrumental — generated live in the browser with
 * Tone.js rather than a licensed audio file. Gentle music-box plucks over a
 * slow, breathing pad, in a simple I–vi–IV–V progression that reads as warm
 * and "birthday-ish" without reproducing any existing copyrighted melody.
 *
 * Nothing plays until `theme.start()` is called from a real user gesture
 * (the music button's onClick) — this both respects browser autoplay
 * policy and the site's own "no autoplay" requirement.
 */

const CHORDS: string[][] = [
  ['C4', 'E4', 'G4'], // I
  ['A3', 'C4', 'E4'], // vi
  ['F3', 'A3', 'C4'], // IV
  ['G3', 'B3', 'D4'], // V
];

// simple arpeggio shape: root, third, fifth, third (repeated, gently varied)
const ARP_SHAPE = [0, 1, 2, 1, 0, 2, 1, 0];

class BackgroundTheme {
  private reverb: Tone.Reverb | null = null;
  private filter: Tone.Filter | null = null;
  private padSynth: Tone.PolySynth | null = null;
  private pluckSynth: Tone.PolySynth | null = null;
  private bellSynth: Tone.PolySynth | null = null;
  private loop: Tone.Loop | null = null;
  private step = 0;
  private chordIndex = 0;
  private built = false;
  private playing = false;

  private build() {
    if (this.built) return;

    this.reverb = new Tone.Reverb({ decay: 5, wet: 0.4 }).toDestination();
    this.filter = new Tone.Filter(2200, 'lowpass').connect(this.reverb);

    this.padSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sine' },
      envelope: { attack: 1.4, decay: 0.4, sustain: 0.75, release: 3.5 },
    }).connect(this.filter);
    this.padSynth.volume.value = -18;

    this.pluckSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.015, decay: 0.35, sustain: 0.05, release: 0.9 },
    }).connect(this.reverb);
    this.pluckSynth.volume.value = -20;

    this.bellSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sine' },
      envelope: { attack: 0.01, decay: 1.2, sustain: 0, release: 1.5 },
    }).connect(this.reverb);
    this.bellSynth.volume.value = -26;

    Tone.Transport.bpm.value = 70;

    this.loop = new Tone.Loop((time) => {
      const chord = CHORDS[this.chordIndex];

      // pad swells once at the start of each 8-step (one bar) chord region
      if (this.step % 8 === 0) {
        this.padSynth?.triggerAttackRelease(chord, '2n', time, 0.55);
      }

      // gentle arpeggio pluck every 8th note
      const note = chord[ARP_SHAPE[this.step % ARP_SHAPE.length]];
      this.pluckSynth?.triggerAttackRelease(note, '8n', time, 0.4);

      // sparse high bell accent for a little sparkle
      if (this.step % 16 === 4) {
        const bellNote = Tone.Frequency(chord[2]).transpose(12).toNote();
        this.bellSynth?.triggerAttackRelease(bellNote, '4n', time, 0.3);
      }

      this.step++;
      if (this.step % 8 === 0) {
        this.chordIndex = (this.chordIndex + 1) % CHORDS.length;
      }
    }, '8n');

    this.built = true;
  }

  async start() {
    await Tone.start();
    this.build();
    this.step = 0;
    this.chordIndex = 0;
    this.loop?.start(0);
    Tone.Transport.start();
    this.playing = true;
  }

  stop() {
    Tone.Transport.stop();
    this.loop?.stop();
    this.playing = false;
  }

  isPlaying() {
    return this.playing;
  }
}

export const theme = new BackgroundTheme();
