import * as Tone from 'tone';

/**
 * Plays the classic "Happy Birthday" melody (its melody and lyrics are
 * public domain) personalized with her name, rendered live with Tone.js —
 * no audio file needed. Scheduled with direct `triggerAttackRelease` calls
 * (not Tone.Transport) so it never collides with the separate ambient
 * background theme, which uses its own transport-based loop.
 */

interface NoteEvent {
  note: string;
  dur: number; // ms
}

interface SongLine {
  text: string;
  notes: NoteEvent[];
}

const Q = 460; // quarter note, ms (~130bpm feel)
const E = Q / 2;
const H = Q * 2;
const HD = Q * 3;

function buildLines(name: string): SongLine[] {
  return [
    {
      text: 'Happy Birthday to you',
      notes: [
        { note: 'G4', dur: E }, { note: 'G4', dur: E },
        { note: 'A4', dur: Q }, { note: 'G4', dur: Q },
        { note: 'C5', dur: Q }, { note: 'B4', dur: H },
      ],
    },
    {
      text: 'Happy Birthday to you',
      notes: [
        { note: 'G4', dur: E }, { note: 'G4', dur: E },
        { note: 'A4', dur: Q }, { note: 'G4', dur: Q },
        { note: 'D5', dur: Q }, { note: 'C5', dur: H },
      ],
    },
    {
      text: `Happy Birthday, my love ${name}`,
      notes: [
        { note: 'G4', dur: E }, { note: 'G4', dur: E },
        { note: 'G5', dur: Q }, { note: 'E5', dur: Q },
        { note: 'C5', dur: Q }, { note: 'B4', dur: Q }, { note: 'A4', dur: H },
      ],
    },
    {
      text: 'Happy Birthday to you',
      notes: [
        { note: 'F5', dur: E }, { note: 'F5', dur: E },
        { note: 'E5', dur: Q }, { note: 'C5', dur: Q },
        { note: 'D5', dur: Q }, { note: 'C5', dur: HD },
      ],
    },
  ];
}

// rough root note under each line, for a soft supporting bass
const LINE_BASS = ['C3', 'G2', 'C3', 'C3'];

export interface SongHandle {
  stop: () => void;
}

export async function playHappyBirthday(
  name: string,
  callbacks: {
    onLine?: (text: string, index: number) => void;
    onComplete?: () => void;
  }
): Promise<SongHandle> {
  await Tone.start();

  const reverb = new Tone.Reverb({ decay: 3, wet: 0.3 }).toDestination();
  const melodySynth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: 'triangle' },
    envelope: { attack: 0.02, decay: 0.2, sustain: 0.3, release: 0.6 },
  }).connect(reverb);
  melodySynth.volume.value = -8;

  const bassSynth = new Tone.PolySynth(Tone.Synth, {
    oscillator: { type: 'sine' },
    envelope: { attack: 0.4, decay: 0.3, sustain: 0.6, release: 1.2 },
  }).connect(reverb);
  bassSynth.volume.value = -18;

  const lines = buildLines(name);
  const timeouts: number[] = [];
  let stopped = false;

  const startTone = Tone.now() + 0.05;
  let toneOffsetSec = 0;
  let uiOffsetMs = 0;

  lines.forEach((line, lineIndex) => {
    const lineStartMs = uiOffsetMs;
    const lineDurationMs = line.notes.reduce((sum, n) => sum + n.dur, 0);

    // schedule UI callback for this line
    const t = window.setTimeout(() => {
      if (!stopped) callbacks.onLine?.(line.text, lineIndex);
    }, lineStartMs);
    timeouts.push(t);

    // schedule bass note under the line
    bassSynth.triggerAttackRelease(
      LINE_BASS[lineIndex] ?? 'C3',
      lineDurationMs / 1000,
      startTone + toneOffsetSec,
      0.5
    );

    // schedule melody notes
    line.notes.forEach((n) => {
      melodySynth.triggerAttackRelease(n.note, n.dur / 1000, startTone + toneOffsetSec, 0.85);
      toneOffsetSec += n.dur / 1000;
    });

    uiOffsetMs += lineDurationMs;
  });

  const completeTimeout = window.setTimeout(() => {
    if (!stopped) callbacks.onComplete?.();
  }, uiOffsetMs + 300);
  timeouts.push(completeTimeout);

  const cleanupTimeout = window.setTimeout(() => {
    melodySynth.dispose();
    bassSynth.dispose();
    reverb.dispose();
  }, uiOffsetMs + 3000);
  timeouts.push(cleanupTimeout);

  return {
    stop: () => {
      stopped = true;
      timeouts.forEach((t) => window.clearTimeout(t));
      melodySynth.releaseAll();
      bassSynth.releaseAll();
    },
  };
}
