import { useState } from 'react';
import AmbientField from './components/AmbientField';
import ThreadProgress from './components/ThreadProgress';
import MusicControl from './components/MusicControl';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import Story from './sections/Story';
import WhySpecial from './sections/WhySpecial';
import LittleThings from './sections/LittleThings';
import FavoriteMemory from './sections/FavoriteMemory';
import LoveMost from './sections/LoveMost';
import Distance from './sections/Distance';
import AnuLoves from './sections/AnuLoves';
import Letters from './sections/Letters';
import Finale from './sections/Finale';
import { letters } from './data/content';

export default function App() {
  const [openedIds, setOpenedIds] = useState<Set<number>>(new Set());

  const handleOpenLetter = (id: number) => {
    setOpenedIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const allOpened = openedIds.size === letters.length;

  return (
    <div className="relative min-h-screen bg-ink">
      <div className="grain-overlay" />
      <AmbientField />
      <ThreadProgress />
      <MusicControl />
      <BackToTop />

      <main className="relative z-10">
        <Hero />
        <Story />
        <WhySpecial />
        <LittleThings />
        <FavoriteMemory />
        <LoveMost />
        <Distance />
        <AnuLoves />
        <Letters openedIds={openedIds} onOpen={handleOpenLetter} />
        <Finale unlocked={allOpened} />
      </main>
    </div>
  );
}
