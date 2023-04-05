// ThemeWrapper.tsx
"use client";
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

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

  useEffect(() => {
    const className = darkMode ? "darkmode" : "lightmode";
    document.documentElement.classList.add(className);
    return () => {
      document.documentElement.classList.remove(className);
    };
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
