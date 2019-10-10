import React from 'react';
import { shallow } from 'enzyme';
import Hand from './Hand';

describe('<Hand />', () => {
  it('renders without crashing', () => {
     shallow(<Hand />);
   });
});