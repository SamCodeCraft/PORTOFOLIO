// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// Create a context to manage theme
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get the saved theme from localStorage or default to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(savedTheme);

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme to localStorage
  };

  // Apply the theme class to the body element
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
