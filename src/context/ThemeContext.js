import { createContext, useState } from 'react';

export const ThemeModeContext = createContext();

const ThemeModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeModeContext.Provider
      value={{ darkMode, changeMode: () => setDarkMode(!darkMode) }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;
