import { Link } from 'gatsby';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="relative z-10 bg-white dark:bg-secondary transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors"
            >
              <span className="font-semibold">Vectro</span>
              <span className="font-thin">Byte</span>™
            </Link>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded-full text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
