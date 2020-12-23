import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MoveInfo from './MoveInfo';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles';
import { pound } from '../mockdata';
import { MovesContext } from '../context/MovesProvider';
import { ThemeModeContext } from '../context/ThemeContext';

describe('<MoveInfo/>', () => {
  test('should render without crashing', () => {
    render(
      <ThemeModeContext.Provider value={{ darkMode: false }}>
        <ThemeProvider theme={defaultTheme}>
          <MovesContext.Provider
            value={{ activeMove: pound, activeMoveId: pound.id }}
          >
            <MoveInfo />
          </MovesContext.Provider>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    );
    expect(screen.getByText('pound')).toBeInTheDocument();
  });
  test('should render with info fetched', async () => {
    render(
      <ThemeModeContext.Provider value={{ darkMode: false }}>
        <ThemeProvider theme={defaultTheme}>
          <MovesContext.Provider
            value={{ activeMove: pound, activeMoveId: pound.id }}
          >
            <MoveInfo />
          </MovesContext.Provider>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    );
    await waitFor(() => {
      expect(screen.getByText('accuracy:')).toBeInTheDocument();
    });
  });
});
