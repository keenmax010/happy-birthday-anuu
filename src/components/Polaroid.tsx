import { motion } from 'framer-motion';
import type { PhotoSlot } from '../data/images';

interface PolaroidProps {
  photo: PhotoSlot;
  rotate?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  float?: boolean;
}

const sizeMap = {
  sm: 'w-24 sm:w-28',
  md: 'w-36 sm:w-44',
  lg: 'w-48 sm:w-56',
};

export default function Polaroid({
  photo,
  rotate = -4,
  className = '',
  size = 'md',
  delay = 0,
  float = true,
}: PolaroidProps) {
  return (
    <motion.div
      className={`${sizeMap[size]} ${float ? 'polaroid-float' : ''} select-none rounded-sm bg-paper p-2 pb-4 shadow-[0_12px_30px_rgba(0,0,0,0.45)] ${className}`}
      style={{ '--rot': `${rotate}deg` } as React.CSSProperties}
      initial={{ opacity: 0, y: 30, rotate: rotate - 6 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className="aspect-[4/5] w-full rounded-[1px] object-cover grayscale-[8%] sepia-[8%]"
        draggable={false}
      />
      {photo.caption && (
        <p className="mt-2 text-center font-script text-lg text-ink/70">{photo.caption}</p>
      )}
    </motion.div>
  );
}
