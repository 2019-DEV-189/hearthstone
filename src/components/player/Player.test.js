import React from 'react';
import { shallow } from 'enzyme';
import Player from './player';

describe('<Player />', () => {
  it('renders without crashing', () => {
     shallow(<Player />);
   });
});