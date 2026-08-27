import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { anuLoves } from '../data/content';

function LoveTile({ emoji, label, message, delay }: { emoji: string; label: string; message: string; delay: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      onClick={() => setOpen((o) => !o)}
      className="relative flex min-h-[180px] flex-col items-center justify-center overflow-hidden rounded-lg border border-lilac/25 bg-gradient-to-b from-plum-light/60 to-plum/60 p-5 text-center shadow-lg"
    >
      <motion.span
        animate={{ scale: open ? 0.7 : 1, opacity: open ? 0 : 1, y: open ? -10 : 0 }}
        transition={{ duration: 0.35 }}
        className="absolute flex flex-col items-center gap-2"
      >
        <span className="text-4xl">{emoji}</span>
        <span className="font-script text-2xl text-paper">{label}</span>
      </motion.span>
      <motion.span
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : 10 }}
        transition={{ duration: 0.4, delay: open ? 0.15 : 0 }}
        className="font-serif text-sm italic leading-relaxed text-paper/85"
      >
        {message}
      </motion.span>
    </motion.button>
  );
}

export default function AnuLoves() {
  return (
    <section id="anu-loves" className="relative px-6 py-28">
      <SectionHeading eyebrow="Things that are, simply, you" title="The Things Anu Loves" />
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:gap-6">
        {anuLoves.map((item, i) => (
          <LoveTile key={item.label} {...item} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
