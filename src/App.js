import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeModeContext } from './context/ThemeContext';

import AppRouter from './routes/AppRouter';
import { darkTheme, defaultTheme } from './styles';

function App() {
  const { darkMode } = useContext(ThemeModeContext);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : defaultTheme}>
      <AppRouter />;
    </ThemeProvider>
  );
}

export default App;
