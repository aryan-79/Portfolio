"use client";

import { Themes, useTheme } from "@/hooks/useTheme";
import { createContext, ReactNode } from "react";

const ThemeContext = createContext<Themes>("dark");
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
