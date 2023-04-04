// ThemeWrapper.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

type ThemeWrapperProps = {
  children: ReactNode;
};

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
