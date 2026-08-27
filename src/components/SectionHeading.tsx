import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, className = '' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 text-center ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 font-sans-ui text-[11px] uppercase tracking-[0.3em] text-rose/70">
          {eyebrow}
        </p>
      )}
      <h2 className="font-script text-5xl text-paper sm:text-6xl">{title}</h2>
    </motion.div>
  );
}
