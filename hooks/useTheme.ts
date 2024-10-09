import { useEffect, useState } from "react";

export type Themes = "light" | "dark";

const getInitialTheme = (): Themes => {
  if (typeof window !== "undefined") {
    const storedTheme = window.localStorage.getItem("THEME") as Themes;
    if (storedTheme) {
      return storedTheme;
    }

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light";
  }

  return "dark";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Themes>(getInitialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("THEME", theme);
  }, [theme]);

  return { theme, setTheme };
};
