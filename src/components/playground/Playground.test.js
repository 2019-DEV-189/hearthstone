import React from 'react';
import { shallow } from 'enzyme';
import Playground from './Playground';

const playGroundWrapper = shallow(<Playground />);

// State Variables
let playerArenaStatus = playGroundWrapper.state('playerArenaStatus');

describe('<Playground />', () => {
  it('renders without crashing', () => {
      playGroundWrapper;
   });
});

describe('Game starts', function() {

  it('Each player starts the game with 30 Health and 0 Mana slots', () => {

    expect(playerArenaStatus.player1.healthScore).toEqual(30);
    expect(playerArenaStatus.player2.healthScore).toEqual(30);

    expect(playerArenaStatus.player1.manaSlots).toEqual(0);
    expect(playerArenaStatus.player2.manaSlots).toEqual(0);
  });

  it('Each player starts with a deck of 20 Damage cards with the Mana costs: 0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8', function() {

    expect(playerArenaStatus.player1.cardsDeck).toEqual([0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8]);
    expect(playerArenaStatus.player2.cardsDeck).toEqual([0,0,1,1,2,2,2,3,3,3,3,4,4,4,5,5,6,6,7,8]);
  });
});