import React from 'react';
import { shallow } from 'enzyme';
import Playerarena from './Playerarena';


describe('<Playerarena />', () => {
  it('renders without crashing', () => {
    shallow(<Playerarena />);
   });
});