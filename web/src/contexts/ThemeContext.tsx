import React, { createContext, Dispatch, ReactNode, useContext, useEffect, useState } from "react";

interface ThemeContextData {
  theme: string | undefined;
  toggleTheme: (value: string) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

function getInitialTheme() {
  const themeStorage = window.localStorage.getItem("color-theme");

  if (!themeStorage) {
    return "dark";
  }

  return themeStorage;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(getInitialTheme);

  function toggleTheme(value: string) {
    setTheme(value);
  }

  function onToggleTheme(value: string) {
    const root = window.document.documentElement;
    const isDark = value === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(value);

    localStorage.setItem("color-theme", value);
  }

  useEffect(() => {
    onToggleTheme(theme);
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