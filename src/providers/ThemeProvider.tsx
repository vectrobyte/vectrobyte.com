import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';

export type ThemeType = 'dark' | 'light';

const THEME_KEY = 'site-theme';
const DEFAULT_THEME = 'light';

export const isDark = (theme: ThemeType) => {
  return theme === 'dark';
};

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem(THEME_KEY);

    if (typeof storedPrefs === 'string') {
      return storedPrefs as ThemeType;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

    if (userMedia.matches) {
      return 'dark';
    }
  }
  return DEFAULT_THEME;
};

export type ThemeContextType = [ThemeType, Dispatch<SetStateAction<ThemeType>>];

export const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = 'ThemeContext';

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => getInitialTheme());

  const rawSetTheme = (theme: ThemeType) => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      root.classList.remove(isDark(theme) ? 'light' : 'dark');
      root.classList.add(theme);

      localStorage.setItem(THEME_KEY, theme);
    }
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
};
