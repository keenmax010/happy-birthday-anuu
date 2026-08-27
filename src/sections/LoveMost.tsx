import { motion } from 'framer-motion';
import Polaroid from '../components/Polaroid';
import { images } from '../data/images';

export default function LoveMost() {
  return (
    <section id="love-most" className="relative flex flex-col items-center justify-center px-6 py-32">
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <div className="absolute left-[8%] top-[15%]">
          <Polaroid photo={images.loveMost[0]} size="sm" rotate={-6} delay={0.3} />
        </div>
        <div className="absolute right-[10%] top-[30%]">
          <Polaroid photo={images.loveMost[1]} size="sm" rotate={5} delay={0.6} />
        </div>
        <div className="absolute bottom-[10%] left-[16%]">
          <Polaroid photo={images.loveMost[2]} size="sm" rotate={4} delay={0.9} />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="font-serif text-xl italic leading-relaxed text-paper/70 sm:text-2xl"
        >
          I love your presence.
          <br />
          And when you're absent, I feel it more than words can explain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-14 flex flex-col gap-3"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-script text-5xl text-rose sm:text-6xl"
          >
            I love YOU.
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="font-serif text-base text-paper/60"
          >
            Not just what you do for me.
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="font-serif text-base text-paper/60"
          >
            Not just how you make me feel.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 2.2, duration: 0.9 }}
            className="mt-3 font-script text-3xl text-lilac sm:text-4xl"
          >
            I love your presence in my life.
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
