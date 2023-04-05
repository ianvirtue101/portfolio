// ThemeToggle.tsx
import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "../ThemeWrapper/ThemeWrapper";
import "./ThemeToggle.scss";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  const handleToggleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <label className="Label" htmlFor="dark-mode" style={{ paddingRight: 15 }}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </label>
      <Switch.Root
        className="SwitchRoot"
        id="dark-mode"
        checked={darkMode}
        onCheckedChange={handleToggleClick}
      >
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  );
};

export default ThemeToggle;
