import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Polaroid from '../components/Polaroid';
import { storyMilestones } from '../data/content';
import { images } from '../data/images';

export default function Story() {
  return (
    <section id="story" className="relative px-6 py-28">
      <SectionHeading eyebrow="How we began" title="Where It All Started" />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-20 max-w-xl text-center font-serif text-lg leading-relaxed text-paper/80 sm:text-xl"
      >
        We met in a game, more than a year ago. You found me there and somehow
        noticed the person behind the screen — someone supportive, caring and
        kind. And somewhere between those conversations, calls and countless
        little moments, you became someone incredibly special to me.
      </motion.p>

      {/* Thread timeline */}
      <div className="relative mx-auto max-w-2xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-rose/10 via-rose/50 to-lilac/40 sm:left-1/2" />

        <div className="flex flex-col gap-14">
          {storyMilestones.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative flex items-center gap-6 pl-12 sm:pl-0 ${
                i % 2 === 0 ? 'sm:flex-row sm:pr-[52%]' : 'sm:flex-row-reverse sm:pl-[52%]'
              }`}
            >
              {/* pin marker */}
              <span className="absolute left-4 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-rose shadow-[0_0_10px_rgba(232,169,196,0.7)] sm:left-1/2" />

              <div className={`flex flex-1 flex-col gap-2 ${i % 2 === 0 ? 'sm:items-end sm:text-right' : 'sm:items-start sm:text-left'}`}>
                <span className="font-script text-3xl text-rose">{m.label}</span>
                <span className="max-w-[220px] font-sans-ui text-xs leading-relaxed text-paper/60">
                  {m.detail}
                </span>
              </div>

              {images.story[i] && (
                <div className="hidden shrink-0 sm:block">
                  <Polaroid photo={images.story[i]} size="sm" rotate={i % 2 === 0 ? 4 : -4} delay={0.1 * i} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
