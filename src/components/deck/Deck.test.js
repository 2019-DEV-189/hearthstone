import React from 'react';
import { shallow } from 'enzyme';
import Deck from './deck';

describe('<Deck />', () => {
  it('renders without crashing', () => {
     shallow(<Deck />);
   });
});