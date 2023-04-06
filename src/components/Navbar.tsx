import { Link } from 'gatsby';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    const prefersDarkMode =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="relative z-10 bg-white dark:bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" as="a" className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              <span className="font-semibold">Dilip</span>{' '}
              <span className="font-thin">Bhattarai</span>
            </Link>
          </div>

          <div className="flex items-center">
            <button
              onClick={handleDarkModeToggle}
              className="p-1 rounded-full text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
