import { motion } from 'framer-motion';
import { Phone, Heart } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { girlfriendName } from '../data/content';

function Waveform() {
  const bars = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="flex h-10 items-center justify-center gap-[3px]">
      {bars.map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-rose/70"
          animate={{ height: [6, 6 + ((i * 13) % 26), 6] }}
          transition={{
            duration: 1.1 + (i % 5) * 0.15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: (i % 7) * 0.08,
          }}
        />
      ))}
    </div>
  );
}

export default function FavoriteMemory() {
  return (
    <section id="memory" className="relative px-6 py-28">
      <SectionHeading eyebrow="My favorite memory" title="Just Your Voice" />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-12 sm:flex-row sm:items-center">
        {/* fake call screen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-64 shrink-0 rounded-[2rem] border border-paper/15 bg-plum p-5 shadow-2xl"
        >
          <div className="mb-6 flex flex-col items-center">
            <span className="mb-3 font-sans-ui text-[10px] uppercase tracking-widest text-paper/40">
              incoming call
            </span>
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-rose/20 text-2xl font-script text-rose">
              {girlfriendName[0]}
            </div>
            <span className="font-script text-3xl text-paper">{girlfriendName} &#10084;</span>
            <span className="mt-1 font-sans-ui text-xs text-paper/40">02:14:07</span>
          </div>
          <Waveform />
          <div className="mt-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-deep/80 shadow-[0_0_20px_rgba(199,123,158,0.5)]">
              <Phone size={18} className="text-ink" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center sm:text-left"
        >
          <p className="font-serif text-lg leading-relaxed text-paper/85 sm:text-xl">
            When we talk on the phone, distance somehow feels smaller.
            <br className="hidden sm:block" />
            Those long conversations, the silence, the laughter, just hearing
            your voice&hellip;
          </p>
          <p className="mt-4 flex items-center justify-center gap-2 font-script text-2xl text-rose sm:justify-start">
            those moments mean more to me than I can properly explain
            <Heart size={18} className="fill-rose text-rose" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
