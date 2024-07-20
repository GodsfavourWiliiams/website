import { MoonIcon, SunIcon } from 'lucide-react';
import { AppLogo } from './appLogo';
import { FC } from 'react';
import Link from 'next/link';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="w-full md:px-10 sm:px-4 px-3 z-50 fixed inset-x-0 top-4 flex justify-between items-center transition-all duration-700 ease-in-out backdrop-blur-sm">
      <Link href="/">
        <AppLogo />
      </Link>

      <button onClick={toggleDarkMode} className="p-4">
        {isDarkMode ? (
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
