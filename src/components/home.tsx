'use client';

import { useEffect, useState } from 'react';
import Header from '../components/common/header';
import Hero from '../components/common/hero';
import Particles from '../components/ui/particles';
import About from '../components/about';
import { Projects } from './projects';
import { Experience } from './experience';

const Home = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(() =>
    localStorage.getItem('darkMode') === 'true' ? true : false
  );
  const [color, setColor] = useState<string>('#ffffff');

  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', updatedDarkMode.toString());
    setDarkMode(updatedDarkMode);
  };

  useEffect(() => {
    setColor(isDarkMode ? '#ffffff' : '#000000');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="relative h-auto w-full ">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Experience />
    </div>
  );
};

export default Home;
