import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { letters, type Letter } from '../data/content';

interface LettersProps {
  openedIds: Set<number>;
  onOpen: (id: number) => void;
}

function EnvelopeCard({
  letter,
  opened,
  onClick,
  delay,
}: {
  letter: Letter;
  opened: boolean;
  onClick: () => void;
  delay: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 24, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: (letter.id % 2 === 0 ? 1 : -1) }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, rotate: 0 }}
      onClick={onClick}
      className="relative flex w-full flex-col items-center gap-3 rounded-sm bg-paper/95 p-5 text-ink shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
    >
      <svg viewBox="0 0 200 130" className="h-24 w-full">
        <rect x="4" y="4" width="192" height="122" rx="4" fill="#F6EEE0" stroke="#12081A" strokeOpacity="0.15" />
        <path d="M4 8 L100 78 L196 8" fill="none" stroke="#12081A" strokeOpacity="0.15" strokeWidth="2" />
        <circle cx="100" cy="55" r="14" fill={opened ? '#B79FD6' : '#C77B9E'} />
        <text x="100" y="60" textAnchor="middle" fontSize="13" fill="#F6EEE0">
          {opened ? '\u2713' : letter.id}
        </text>
      </svg>
      <span className="font-script text-xl text-ink/90">{letter.title}</span>
      <span className="font-sans-ui text-[11px] uppercase tracking-wider text-ink/40">
        {opened ? 'opened' : 'tap to open'}
      </span>
    </motion.button>
  );
}

function LetterModal({ letter, onClose }: { letter: Letter; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotateX: -12 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        exit={{ opacity: 0, scale: 0.9, rotateX: 8 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-sm bg-paper p-8 text-ink shadow-2xl sm:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Close letter"
          className="absolute right-4 top-4 text-ink/40 transition-colors hover:text-ink"
        >
          <X size={20} />
        </button>
        <p className="mb-1 font-sans-ui text-[10px] uppercase tracking-[0.3em] text-rose-deep/70">
          Letter {letter.id} of 5
        </p>
        <h3 className="mb-6 font-script text-4xl text-ink">{letter.title}</h3>
        <div className="flex flex-col gap-4">
          {letter.body.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              className="font-serif text-[15px] leading-relaxed text-ink/85"
            >
              {para}
            </motion.p>
          ))}
        </div>
        {letter.signature && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 + letter.body.length * 0.12 + 0.2, duration: 0.6 }}
            className="mt-8 text-right font-script text-3xl text-rose-deep"
          >
            {letter.signature}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Letters({ openedIds, onOpen }: LettersProps) {
  const [activeLetter, setActiveLetter] = useState<Letter | null>(null);

  const handleOpen = (letter: Letter) => {
    setActiveLetter(letter);
    onOpen(letter.id);
  };

  return (
    <section id="letters" className="relative px-6 py-28">
      <SectionHeading eyebrow="Read them slowly" title="A Few Letters For You" />
      <p className="mx-auto mb-14 max-w-md text-center font-serif text-sm italic text-paper/50">
        Five envelopes. Open them whenever you like — but the last one means the most.
      </p>

      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6">
        {letters.map((letter, i) => (
          <EnvelopeCard
            key={letter.id}
            letter={letter}
            opened={openedIds.has(letter.id)}
            onClick={() => handleOpen(letter)}
            delay={i * 0.08}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeLetter && <LetterModal letter={activeLetter} onClose={() => setActiveLetter(null)} />}
      </AnimatePresence>
    </section>
  );
}
