import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load preference from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      setDarkMode(JSON.parse(stored));
    }
    setIsLoaded(true);
  }, []);

  // Save preference to localStorage when it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
  }, [darkMode, isLoaded]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode, isLoaded }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContext;
