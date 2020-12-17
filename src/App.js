import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import PokemonProvider from './context/PokemonProvider';
import { ThemeModeContext } from './context/ThemeContext';

import AppRouter from './routes/AppRouter';
import { darkTheme, defaultTheme } from './styles';

function App() {
  const { darkMode } = useContext(ThemeModeContext);
  return (
    <PokemonProvider>
      <ThemeProvider theme={darkMode ? darkTheme : defaultTheme}>
        <AppRouter />;
      </ThemeProvider>
    </PokemonProvider>
  );
}

export default App;
