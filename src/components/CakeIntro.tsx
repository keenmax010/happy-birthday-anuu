import { useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import CheerMascot from './CheerMascot';
import { playHappyBirthday } from '../audio/birthdaySong';
import { theme } from '../audio/theme';
import { girlfriendName } from '../data/content';

type Stage = 'lit' | 'singing' | 'readyToCut' | 'cutting' | 'cut';

interface CakeIntroProps {
  onStoryStart: () => void;
}

function firePartyPoppers() {
  const colors = ['#E8A9C4', '#C77B9E', '#B79FD6', '#D9B872', '#F6EEE0'];
  confetti({
    particleCount: 70,
    angle: 60,
    spread: 55,
    origin: { x: 0, y: 0.7 },
    colors,
  });
  confetti({
    particleCount: 70,
    angle: 120,
    spread: 55,
    origin: { x: 1, y: 0.7 },
    colors,
  });
  confetti({
    particleCount: 40,
    spread: 90,
    origin: { x: 0.5, y: 0.6 },
    colors,
    scalar: 0.8,
  });
}

export default function CakeIntro({ onStoryStart }: CakeIntroProps) {
  const [stage, setStage] = useState<Stage>('lit');
  const [lyricLine, setLyricLine] = useState<string>('');
  const songHandleRef = useRef<{ stop: () => void } | null>(null);

  const handleBlow = useCallback(async () => {
    if (stage !== 'lit') return;
    setStage('singing');
    firePartyPoppers();
    theme.duck(); // pause background music so it doesn't overlap the cake song

    songHandleRef.current = await playHappyBirthday(girlfriendName, {
      onLine: (text) => setLyricLine(text),
      onComplete: () => {
        setLyricLine(`Happy Birthday, my love ${girlfriendName}! \u2764`);
        setStage('readyToCut');
        theme.resume(); // background music comes back after the cake song ends
      },
    });
  }, [stage]);

  const handleCut = useCallback(() => {
    if (stage !== 'readyToCut') return;
    setStage('cutting');
    firePartyPoppers();
    window.setTimeout(() => {
      setStage('cut');
      window.setTimeout(() => {
        onStoryStart();
      }, 1400);
    }, 900);
  }, [stage, onStoryStart]);

  const showMascot = stage !== 'lit';
  const candleLit = stage === 'lit';
  const cutApart = stage === 'cutting' || stage === 'cut';

  return (
    <div className="relative z-10 mt-10 flex flex-col items-center">
      {/* Prompt sentence */}
      <AnimatePresence mode="wait">
        {stage === 'lit' && (
          <motion.p
            key="prompt-lit"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            className="mb-6 max-w-xs text-center font-serif text-base italic text-paper/70"
          >
            One little candle, one big wish &mdash; make it count, {girlfriendName}.
          </motion.p>
        )}
        {(stage === 'singing' || stage === 'readyToCut') && (
          <motion.p
            key={lyricLine}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mb-6 min-h-[2.5rem] max-w-sm text-center font-script text-3xl text-rose sm:text-4xl"
          >
            {lyricLine}
          </motion.p>
        )}
        {stage === 'cutting' && (
          <motion.p
            key="prompt-cutting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 text-center font-script text-3xl text-rose"
          >
            Make it a good one&hellip;
          </motion.p>
        )}
        {stage === 'cut' && (
          <motion.p
            key="prompt-cut"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 text-center font-script text-4xl text-paper sm:text-5xl"
          >
            Our story begins&hellip;
          </motion.p>
        )}
      </AnimatePresence>

      {/* Cake + mascot */}
      <div className="relative flex items-end justify-center">
        {showMascot && (
          <CheerMascot
            className="absolute -left-24 bottom-2 hidden sm:block"
            active={stage === 'singing' || stage === 'readyToCut'}
          />
        )}

        <svg width="220" height="200" viewBox="0 0 220 200" fill="none" className="drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]">
          {/* plate shadow */}
          <ellipse cx="110" cy="182" rx="85" ry="10" fill="#12081A" opacity="0.35" />

          {/* candle + flame, only while not yet cut */}
          {!cutApart && (
            <>
              <rect x="105" y="30" width="10" height="30" rx="2" fill="#E8A9C4" />
              <AnimatePresence>
                {candleLit && (
                  <motion.path
                    key="flame"
                    d="M110 30 C104 22 106 14 110 8 C114 14 116 22 110 30 Z"
                    fill="#D9B872"
                    exit={{ opacity: 0, scale: 0.2, y: -10 }}
                    animate={{ scaleY: [1, 1.15, 0.95, 1], scaleX: [1, 0.9, 1.05, 1] }}
                    transition={{
                      scaleY: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' },
                      scaleX: { duration: 0.6, repeat: Infinity, ease: 'easeInOut' },
                    }}
                    style={{ transformOrigin: '110px 30px' }}
                  />
                )}
              </AnimatePresence>

              {/* smoke wisp on blow */}
              <AnimatePresence>
                {stage === 'singing' && (
                  <motion.path
                    key="smoke"
                    d="M110 28 Q106 18 110 8"
                    stroke="#F6EEE0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ opacity: 0.7, y: 0 }}
                    animate={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                  />
                )}
              </AnimatePresence>
            </>
          )}

          {/* cake — left half */}
          <motion.g
            animate={cutApart ? { x: -22, rotate: -4 } : { x: 0, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <rect x="35" y="60" width="75" height="115" fill="#F6EEE0" />
            <rect x="35" y="100" width="75" height="10" fill="#C77B9E" opacity="0.5" />
            <path d="M35 60 Q45 52 55 60 Q65 68 75 60 Q85 52 95 60 Q102 65 110 60 V70 H35 Z" fill="#E8A9C4" />
            {cutApart && (
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                d="M100 130 C100 122 92 118 88 124 C84 118 76 122 76 130 C76 138 88 148 88 148 C88 148 100 138 100 130 Z"
                fill="#C77B9E"
              />
            )}
          </motion.g>

          {/* cake — right half */}
          <motion.g
            animate={cutApart ? { x: 22, rotate: 4 } : { x: 0, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <rect x="110" y="60" width="75" height="115" fill="#F6EEE0" />
            <rect x="110" y="100" width="75" height="10" fill="#C77B9E" opacity="0.5" />
            <path d="M110 60 Q120 52 130 60 Q140 68 150 60 Q160 52 170 60 Q177 65 185 60 V70 H110 Z" fill="#E8A9C4" />
          </motion.g>

          {/* base plate rim */}
          <rect x="30" y="172" width="160" height="8" rx="4" fill="#12081A" opacity="0.2" />
        </svg>
      </div>

      {/* Action button */}
      <div className="mt-8 min-h-[3rem]">
        <AnimatePresence mode="wait">
          {stage === 'lit' && (
            <motion.button
              key="blow-btn"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={handleBlow}
              className="group flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-7 py-3 font-sans-ui text-sm tracking-wide text-gold shadow-[0_0_25px_rgba(217,184,114,0.15)] transition-all hover:bg-gold/20 hover:shadow-[0_0_35px_rgba(217,184,114,0.3)]"
            >
              &#128367; Tap to Blow the Candle
            </motion.button>
          )}
          {stage === 'readyToCut' && (
            <motion.button
              key="cut-btn"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              onClick={handleCut}
              className="group flex items-center gap-2 rounded-full border border-rose/40 bg-rose/10 px-7 py-3 font-sans-ui text-sm tracking-wide text-rose shadow-[0_0_25px_rgba(232,169,196,0.2)] transition-all hover:bg-rose/20 hover:shadow-[0_0_35px_rgba(232,169,196,0.35)]"
            >
              &#127856; Cut the Cake
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
