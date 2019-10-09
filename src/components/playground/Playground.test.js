import React from 'react';
import { shallow } from 'enzyme';
import Playground from './Playground';

describe('<Playground />', () => {
  it('renders without crashing', () => {
     shallow(<Playground />);
   });
});