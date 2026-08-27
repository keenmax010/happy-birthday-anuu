import { motion } from 'framer-motion';

interface CheerMascotProps {
  className?: string;
  active?: boolean;
}

/**
 * A small, simple cartoon character wearing a party hat and holding a
 * party horn/whistle, bouncing and cheering. Purely decorative — appears
 * once the candle is blown out.
 */
export default function CheerMascot({ className = '', active = true }: CheerMascotProps) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={active ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.6, y: 20 }}
      transition={{ duration: 0.5, ease: 'backOut' }}
    >
      <motion.div
        animate={active ? { y: [0, -10, 0] } : {}}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="110" height="120" viewBox="0 0 110 120" fill="none">
          {/* left arm (pompom) */}
          <motion.g
            animate={active ? { rotate: [0, -25, 0] } : {}}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '28px 68px' }}
          >
            <line x1="28" y1="68" x2="10" y2="52" stroke="#B79FD6" strokeWidth="5" strokeLinecap="round" />
            <circle cx="8" cy="48" r="7" fill="#E8A9C4" />
          </motion.g>

          {/* right arm (pompom) */}
          <motion.g
            animate={active ? { rotate: [0, 25, 0] } : {}}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            style={{ transformOrigin: '82px 68px' }}
          >
            <line x1="82" y1="68" x2="100" y2="52" stroke="#B79FD6" strokeWidth="5" strokeLinecap="round" />
            <circle cx="102" cy="48" r="7" fill="#E8A9C4" />
          </motion.g>

          {/* body */}
          <ellipse cx="55" cy="80" rx="26" ry="22" fill="#F6EEE0" />

          {/* head */}
          <circle cx="55" cy="46" r="30" fill="#F6EEE0" />

          {/* party hat */}
          <polygon points="55,4 38,40 72,40" fill="#C77B9E" />
          <circle cx="55" cy="4" r="5" fill="#D9B872" />
          <rect x="37" y="36" width="36" height="6" rx="3" fill="#B79FD6" />

          {/* blush */}
          <circle cx="38" cy="52" r="5" fill="#E8A9C4" opacity="0.7" />
          <circle cx="72" cy="52" r="5" fill="#E8A9C4" opacity="0.7" />

          {/* eyes — happy closed curve eyes */}
          <path d="M42 44 Q46 40 50 44" stroke="#12081A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M60 44 Q64 40 68 44" stroke="#12081A" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* party horn near mouth */}
          <motion.g
            animate={active ? { rotate: [0, -4, 0] } : {}}
            transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '58px 56px' }}
          >
            <path
              d="M58 56 Q78 50 92 40"
              stroke="#D9B872"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="93" cy="39" r="4" fill="#E8A9C4" />
          </motion.g>

          {/* mouth */}
          <path d="M48 58 Q55 63 58 56" stroke="#12081A" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
