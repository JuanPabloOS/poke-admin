import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ItemInfo from './ItemInfo';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles';
import { master_ball } from '../mockdata';

import { ThemeModeContext } from '../context/ThemeContext';
import { ItemsContext } from '../context/ItemsProvider';

describe('<ItemInfo/>', () => {
  test('should render without crashing', () => {
    render(
      <ThemeModeContext.Provider value={{ darkMode: false }}>
        <ThemeProvider theme={defaultTheme}>
          <ItemsContext.Provider
            value={{ activeItem: master_ball, activeItemId: master_ball.id }}
          >
            <ItemInfo />
          </ItemsContext.Provider>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    );
    expect(screen.getByText('master-ball')).toBeInTheDocument();
  });
});
