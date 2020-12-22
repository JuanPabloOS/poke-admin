import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { ThemeModeContext } from './context/ThemeContext';

describe('<App/>', () => {
  it('Renders without crashing', () => {
    const { getByText } = render(
      <ThemeModeContext.Provider value={{ darkMode: false }}>
        <App />
      </ThemeModeContext.Provider>
    );
    expect(getByText('Poke-admin')).toBeInTheDocument();
  });
});
