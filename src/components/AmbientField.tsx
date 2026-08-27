import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  drift: number;
  size: number;
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function AmbientField() {
  const reduced = useReducedMotion();

  const stars: Star[] = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: rand() * 1.6 + 0.6,
      delay: rand() * 6,
      duration: rand() * 3 + 2.5,
    }));
  }, []);

  const petals: Petal[] = useMemo(() => {
    const rand = seededRandom(7);
    return Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: rand() * 100,
      delay: rand() * 20,
      duration: rand() * 14 + 18,
      drift: (rand() - 0.5) * 120,
      size: rand() * 10 + 8,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Stars / sparkles */}
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-paper"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={
            reduced
              ? { opacity: 0.4 }
              : { opacity: [0.15, 0.9, 0.15] }
          }
          transition={
            reduced
              ? undefined
              : { duration: s.duration, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      ))}

      {/* Drifting petals — sparse, slow, low opacity */}
      {!reduced &&
        petals.map((p) => (
          <motion.div
            key={p.id}
            className="absolute text-rose/30"
            style={{ left: `${p.x}%`, top: '-5%', fontSize: p.size }}
            initial={{ y: '-5vh', x: 0, opacity: 0, rotate: 0 }}
            animate={{
              y: '110vh',
              x: p.drift,
              opacity: [0, 0.5, 0.5, 0],
              rotate: 180,
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            &#10047;
          </motion.div>
        ))}

      {/* Soft vignette glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(183,159,214,0.08), transparent 60%), radial-gradient(ellipse 80% 60% at 50% 100%, rgba(199,123,158,0.08), transparent 60%)',
        }}
      />
    </div>
  );
}
