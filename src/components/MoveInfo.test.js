import React from 'react';
import { render, screen, waitFor, WithDefaultTheme } from '../../test-utils';
import MoveInfo from './MoveInfo';
import { pound } from '../mockdata';
import { MovesContext } from '../context/MovesProvider';

describe('<MoveInfo/>', () => {
  test('should render without crashing', () => {
    render(
      <WithDefaultTheme>
        <MovesContext.Provider
          value={{ activeMove: pound, activeMoveId: pound.id }}
        >
          <MoveInfo />
        </MovesContext.Provider>
      </WithDefaultTheme>
    );
    expect(screen.getByText('pound')).toBeInTheDocument();
  });
  test('should render with info fetched', async () => {
    render(
      <WithDefaultTheme>
        <MovesContext.Provider
          value={{ activeMove: pound, activeMoveId: pound.id }}
        >
          <MoveInfo />
        </MovesContext.Provider>
      </WithDefaultTheme>
    );
    await waitFor(() => {
      expect(screen.getByText('accuracy:')).toBeInTheDocument();
    });
  });
});
