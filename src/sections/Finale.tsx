import { motion } from 'framer-motion';
import { Heart, Lock } from 'lucide-react';
import Polaroid from '../components/Polaroid';
import { images } from '../data/images';
import { finalMessage, girlfriendName } from '../data/content';

interface FinaleProps {
  unlocked: boolean;
}

export default function Finale({ unlocked }: FinaleProps) {
  return (
    <section id="finale" className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 py-28">
      {!unlocked ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <Lock size={26} className="text-paper/30" />
          <p className="max-w-xs font-serif text-sm italic text-paper/40">
            Open all five letters above to unlock one last thing&hellip;
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="mb-8 font-script text-5xl text-rose sm:text-6xl">{finalMessage.title}</h2>

          <div className="mb-10 flex flex-col gap-4 max-w-lg">
            {finalMessage.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.35, duration: 0.7 }}
                className="font-serif text-lg leading-relaxed text-paper/85 sm:text-xl"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.9, duration: 0.6, ease: 'backOut' }}
            className="relative mb-10 flex h-24 w-24 items-center justify-center"
          >
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart size={64} className="fill-rose text-rose drop-shadow-[0_0_25px_rgba(232,169,196,0.6)]" />
            </motion.div>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="mb-14 font-script text-4xl text-paper sm:text-5xl"
          >
            {finalMessage.closing}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {images.finale.map((photo, i) => (
              <Polaroid key={i} photo={photo} size="sm" rotate={(i % 2 === 0 ? -1 : 1) * (4 + i)} delay={i * 0.1} />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 1 }}
            className="mt-14 font-sans-ui text-xs uppercase tracking-[0.3em] text-paper/30"
          >
            made with love, for {girlfriendName}
          </motion.p>
        </motion.div>
      )}
    </section>
  );
}
