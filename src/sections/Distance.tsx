import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Polaroid from '../components/Polaroid';
import { images } from '../data/images';

export default function Distance() {
  return (
    <section id="distance" className="relative overflow-hidden px-6 py-28">
      <SectionHeading eyebrow="A quiet wish" title="If Distance Wasn't a Thing" />

      {/* Envelope illustration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto mb-16 h-40 w-full max-w-sm sm:h-52 sm:max-w-md"
      >
        <svg viewBox="0 0 300 200" className="h-full w-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]">
          <rect x="10" y="20" width="280" height="170" rx="6" fill="#F6EEE0" />
          <motion.path
            d="M10 24 L150 130 L290 24"
            fill="none"
            stroke="#C77B9E"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3 }}
          />
          <path d="M10 24 L150 130 L290 24" fill="none" stroke="#12081A" strokeOpacity="0.08" strokeWidth="1" />
          <rect x="10" y="20" width="280" height="170" rx="6" fill="none" stroke="#12081A" strokeOpacity="0.15" strokeWidth="1.5" />
          <motion.circle
            cx="150"
            cy="105"
            r="16"
            fill="#D9B872"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5, ease: 'backOut' }}
          />
          <motion.text
            x="150"
            y="111"
            textAnchor="middle"
            fontSize="16"
            fill="#12081A"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
          >
            &#10084;
          </motion.text>
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-lg text-center"
      >
        <p className="font-serif text-lg leading-relaxed text-paper/80 sm:text-xl">
          If distance wasn't between us, I wouldn't make fake promises.
          <br />
          I wouldn't promise some impossible perfect life.
        </p>
        <p className="mt-6 font-script text-2xl text-lilac">I'd simply want one thing&hellip;</p>
        <p className="mt-6 font-script text-5xl text-rose sm:text-6xl">A real hug.</p>
        <p className="mt-6 font-serif text-base leading-loose text-paper/70">
          You in my arms.
          <br />
          No screen.
          <br />
          No call.
          <br />
          No distance.
          <br />
          <span className="font-script text-2xl text-paper">Just you.</span>
        </p>
      </motion.div>

      {/* silhouettes drifting together */}
      <div className="relative mx-auto mt-16 flex h-56 max-w-xl items-center justify-center">
        <motion.div
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: -12, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="z-10"
        >
          <Polaroid photo={images.distance.left} size="sm" rotate={-5} float={false} />
        </motion.div>
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 12, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="z-0"
        >
          <Polaroid photo={images.distance.right} size="sm" rotate={5} float={false} />
        </motion.div>
      </div>
    </section>
  );
}
