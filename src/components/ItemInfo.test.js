import React from 'react';
import { render, screen, WithDefaultTheme } from '../../test-utils';
import ItemInfo from './ItemInfo';
import { master_ball } from '../mockdata';
import { ItemsContext } from '../context/ItemsProvider';

describe('<ItemInfo/>', () => {
  test('should render without crashing', () => {
    render(
      <WithDefaultTheme>
        <ItemsContext.Provider
          value={{ activeItem: master_ball, activeItemId: master_ball.id }}
        >
          <ItemInfo />
        </ItemsContext.Provider>
      </WithDefaultTheme>
    );
    expect(screen.getByText('master-ball')).toBeInTheDocument();
  });
});
