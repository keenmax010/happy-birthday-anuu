import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { whySpecialCards } from '../data/content';

export default function WhySpecial() {
  return (
    <section id="special" className="relative px-6 py-28">
      <SectionHeading eyebrow="Reasons, not excuses" title="Why You Are So Special" />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whySpecialCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30, rotate: (i % 2 === 0 ? -1 : 1) * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: (i % 2 === 0 ? -1 : 1) * 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -6, rotate: 0 }}
            className="relative rounded-sm border border-paper/10 bg-plum/60 p-6 shadow-lg backdrop-blur-sm"
          >
            {/* washi tape */}
            <span className="absolute -top-2 left-6 h-4 w-14 rotate-[-3deg] bg-rose/30" />
            <h3 className="mb-2 font-script text-2xl text-rose">{card.title}</h3>
            <p className="font-serif text-sm leading-relaxed text-paper/75">{card.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-16 max-w-lg text-center font-script text-3xl leading-snug text-paper sm:text-4xl"
      >
        You don't just accept the best parts of me.
        <br />
        You understand the imperfect ones too.
      </motion.p>
    </section>
  );
}
