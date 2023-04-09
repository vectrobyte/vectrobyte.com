import { useCallback, useEffect, useMemo } from 'react';

import { useTheme } from './useTheme';

const useDarkMode = () => {
  const [theme, setTheme] = useTheme();

  const darkMode = useMemo(() => theme === 'dark', [theme]);

  const toggleDarkMode = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [theme]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return { theme, darkMode, toggleDarkMode };
};

export default useDarkMode;
