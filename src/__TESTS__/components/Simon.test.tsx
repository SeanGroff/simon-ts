global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Simon } from '../../components/Simon';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const component = shallow(<Simon />);
  expect(component).toMatchSnapshot();
});
