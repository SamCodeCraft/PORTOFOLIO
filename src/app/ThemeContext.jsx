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

  useEffect(() => {
    // Only run on the client side after the component mounts
    if (typeof window !== "undefined") {
      // Get the saved theme from localStorage or default to dark
      const savedTheme = localStorage.getItem("theme") || "dark";
      setTheme(savedTheme);

      // Apply the theme class to the body element
      document.body.classList.remove("dark", "light");
      document.body.classList.add(savedTheme);
    }
  }, []);

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the theme to localStorage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
