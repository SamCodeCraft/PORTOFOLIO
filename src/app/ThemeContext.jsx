import React, { createContext, useState, useEffect, useContext } from "react";

// Create a context to manage the theme
export const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // Sync theme with localStorage and body class
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the saved theme from localStorage or default to dark (only on mount)
      const savedTheme = localStorage.getItem("theme") || "dark";
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.classList.remove("dark", "light");
      document.body.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};