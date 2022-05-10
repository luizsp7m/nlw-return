import React, { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextData {
  theme: string | undefined;
  toggleTheme: (value: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: string;
}

function getInitialTheme() {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");

    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

    if (userMedia.matches) {
      return "dark";
    }

    return "light";
  }
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ initialTheme = undefined, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(getInitialTheme);

  function toggleTheme(value: string) {
    setTheme(value);
  }

  function rawSetTheme(rawTheme: string) {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  }

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme as string);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}