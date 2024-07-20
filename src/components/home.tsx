'use client';

import Header from '../components/common/header';
import Hero from '../components/common/hero';
import Particles from '../components/ui/particles';
import About from '../components/about';
import { Experience } from './experience';
import { useTheme } from 'next-themes';
import { Education } from './education';

const Home = () => {
  const { setTheme, theme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative h-auto w-full lg:px-0 px-4 pb-20">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={theme === 'dark' ? '#ffffff' : '#000000'}
        refresh
      />

      <Header toggleTheme={toggleTheme} theme={theme as string} />
      <Hero />
      <About />
      <Experience />
      <Education />
    </div>
  );
};

export default Home;
