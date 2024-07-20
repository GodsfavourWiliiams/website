'use client';
import { MoonIcon, SunIcon } from 'lucide-react';
import { AppLogo } from './appLogo';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header: FC<HeaderProps> = ({ toggleTheme, theme }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents mismatched initial render
  }
  return (
    <div className="w-full md:px-10 sm:px-4 px-3 z-50 fixed inset-x-0 top-4 flex justify-between items-center transition-all duration-700 ease-in-out backdrop-blur-sm">
      <Link href="/">
        <AppLogo />
      </Link>

      <button onClick={toggleTheme} className="p-4">
        {theme === 'dark' ? (
          <span className="flex items-center w-full gap-3">
            <SunIcon className="text-gray-900 dark:text-white" />
            <span className="text-xs text-white">Light</span>
          </span>
        ) : (
          <span className="flex items-center w-full gap-3">
            <MoonIcon className="text-gray-900 dark:text-white" />
            <span className="text-xs text-gray-900">Dark</span>
          </span>
        )}
      </button>
    </div>
  );
};

export default Header;
