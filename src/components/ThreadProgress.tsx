import { useScrollProgress } from '../hooks/useScrollProgress';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'special', label: 'Why You' },
  { id: 'little-things', label: 'Little Things' },
  { id: 'memory', label: 'Memory' },
  { id: 'love-most', label: 'Love Most' },
  { id: 'distance', label: 'Distance' },
  { id: 'anu-loves', label: 'You Love' },
  { id: 'letters', label: 'Letters' },
  { id: 'finale', label: 'Finale' },
];

export default function ThreadProgress() {
  const progress = useScrollProgress();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-0 md:flex lg:right-6">
      {/* thread line */}
      <div className="relative flex h-[280px] flex-col justify-between py-1">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-paper/15" />
        <div
          className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-rose/70 transition-[height] duration-150"
          style={{ height: `${progress * 100}%` }}
        />
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            aria-label={`Go to ${s.label}`}
            className="group relative z-10 flex items-center"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-paper/40 ring-2 ring-ink transition-all group-hover:bg-rose group-hover:scale-125" />
            <span className="pointer-events-none absolute right-4 whitespace-nowrap rounded bg-plum/95 px-2 py-1 font-sans-ui text-[10px] tracking-wide text-paper/90 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
