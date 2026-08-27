import { motion } from 'framer-motion';
import Polaroid from '../components/Polaroid';
import CakeIntro from '../components/CakeIntro';
import { images } from '../data/images';
import { girlfriendName } from '../data/content';

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-24 pb-16"
    >
      {/* Floating polaroids around hero, hidden on very small screens for the outer two */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-[4%] top-[14%] hidden sm:block">
          <Polaroid photo={images.hero[0]} rotate={-8} size="sm" delay={0.2} />
        </div>
        <div className="absolute right-[5%] top-[10%]">
          <Polaroid photo={images.hero[1]} rotate={6} size="sm" delay={0.5} />
        </div>
        <div className="absolute bottom-[16%] left-[6%]">
          <Polaroid photo={images.hero[2]} rotate={5} size="sm" delay={0.8} />
        </div>
        <div className="absolute bottom-[10%] right-[4%] hidden sm:block">
          <Polaroid photo={images.hero[3]} rotate={-6} size="sm" delay={1.1} />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mb-4 font-sans-ui text-xs uppercase tracking-[0.35em] text-rose/70"
      >
        September 2nd
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center font-serif text-4xl font-light leading-tight text-paper sm:text-5xl md:text-6xl"
      >
        Happy Birthday
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 -mt-2 font-script text-7xl text-rose sm:text-8xl md:text-9xl"
      >
        {girlfriendName} <span className="text-lilac">&#10084;</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 mt-6 max-w-xs text-center font-serif text-base italic text-paper/70 sm:max-w-sm sm:text-lg"
      >
        A little corner of the internet, made only for you.
      </motion.p>

      <CakeIntro onStoryStart={scrollToStory} />
    </section>
  );
}
