'use client';

import React, { createContext, useContext, useState } from 'react';

interface Theme {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<Theme>({
  theme: 'light',
  toggleTheme: () => {},
});

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
