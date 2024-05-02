"use client";
import React, { useState } from "react";

export const themeContext = React.createContext({});

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeContextValue = {
    theme,
    setTheme,
  };

  return (
    <themeContext.Provider value={themeContextValue}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContext;
