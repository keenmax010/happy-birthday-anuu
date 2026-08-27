import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { littleThings } from '../data/content';

function FlipCard({ front, back, delay }: { front: string; back: string; delay: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay }}
      className="h-44 [perspective:1000px]"
    >
      <button
        onClick={() => setFlipped((f) => !f)}
        aria-label={`Reveal: ${front}`}
        className="relative h-full w-full text-left [transform-style:preserve-3d] transition-transform duration-700"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-md border border-paper/15 bg-plum-light/70 p-4 text-center shadow-lg [backface-visibility:hidden]"
        >
          <span className="mb-2 text-xs font-sans-ui uppercase tracking-widest text-lilac/60">tap to open</span>
          <span className="font-script text-2xl text-paper">{front}</span>
        </div>
        {/* back */}
        <div
          className="absolute inset-0 flex items-center justify-center rounded-md border border-rose/30 bg-rose/10 p-4 text-center shadow-lg [backface-visibility:hidden]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <span className="font-serif text-sm italic leading-relaxed text-paper/90">{back}</span>
        </div>
      </button>
    </motion.div>
  );
}

export default function LittleThings() {
  return (
    <section id="little-things" className="relative px-6 py-28">
      <SectionHeading eyebrow="Small, but everything" title="The Little Things" />
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
        {littleThings.map((item, i) => (
          <FlipCard key={item.front} front={item.front} back={item.back} delay={(i % 3) * 0.08} />
        ))}
      </div>
    </section>
  );
}
